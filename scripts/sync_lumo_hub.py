"""Refresh the public Lumo Hub catalog from EduHub's read-only API.

Only discovery metadata is mirrored. Skill packages remain at their original
registry until a user reviews and imports one through Lumo's Skill Library.
"""

from __future__ import annotations

from datetime import datetime, timezone
import json
from pathlib import Path

import httpx


API_URL = "https://eduhub.deeptutor.info/api/v1/skills"
WEB_ORIGIN = "https://eduhub.deeptutor.info"
OUTPUT = Path(__file__).resolve().parents[1] / "web" / "data" / "eduhub-catalog.json"


def _catalog_entry(row: dict[str, object]) -> dict[str, object] | None:
    slug = str(row.get("slug") or "").strip()
    if not slug:
        return None
    stats = row.get("stats") if isinstance(row.get("stats"), dict) else {}
    owner = row.get("owner") if isinstance(row.get("owner"), dict) else {}
    return {
        "slug": slug,
        "name": str(row.get("displayName") or row.get("name") or slug),
        "summary": str(row.get("summary") or row.get("description") or ""),
        "version": str(row.get("version") or ""),
        "downloads": int(stats.get("downloads") or 0),
        "stars": int(stats.get("stars") or 0),
        "owner": str(owner.get("displayName") or row.get("ownerHandle") or ""),
        "owner_url": str(owner.get("htmlUrl") or ""),
        "updated_at": row.get("updatedAt"),
        "source_url": f"{WEB_ORIGIN}/skills/{slug}",
    }


def main() -> None:
    response = httpx.get(
        API_URL,
        params={"limit": 500, "sort": "createdAt"},
        timeout=30,
        follow_redirects=True,
    )
    response.raise_for_status()
    # Decode explicitly: the registry currently sends UTF-8 content with a
    # header that can make automatic charset detection corrupt CJK summaries.
    payload = json.loads(response.content.decode("utf-8"))
    rows = payload.get("skills") or payload.get("items") or payload.get("results") or []
    skills = [entry for row in rows if (entry := _catalog_entry(row)) is not None]
    catalog = {
        "source": "EduHub",
        "source_url": WEB_ORIGIN,
        "synced_at": datetime.now(timezone.utc).isoformat(),
        "count": len(skills),
        "skills": skills,
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(
        json.dumps(catalog, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Lumo Hub synced {len(skills)} community skills to {OUTPUT}")


if __name__ == "__main__":
    main()
