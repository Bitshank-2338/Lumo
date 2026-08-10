import Link from "next/link";

import { chatGPTSignOutPath, requireChatGPTUser } from "../chatgpt-auth";

export const dynamic = "force-dynamic";

export default function MemberPage() {
  return <AuthenticatedMemberSpace />;
}

async function AuthenticatedMemberSpace() {
  const user = await requireChatGPTUser("/member");
  const firstName = user.fullName?.split(/\s+/)[0] || user.displayName.split("@")[0];

  return (
    <main className="member-shell">
      <header className="member-nav">
        <Link className="brand" href="/" aria-label="Lumo home">
          <span className="brand-mark">L</span>
          <span>Lumo</span>
        </Link>
        <div className="member-user">
          <span>{user.displayName.slice(0, 1).toUpperCase()}</span>
          <div><strong>{user.displayName}</strong><small>ChatGPT verified</small></div>
          <a href={chatGPTSignOutPath("/")}>Sign out</a>
        </div>
      </header>

      <section className="member-hero">
        <div>
          <span className="kicker light">YOUR PRIVATE LUMO SPACE</span>
          <h1>Welcome, {firstName}.</h1>
          <p>Your identity has been verified through ChatGPT. This protected space is the foundation for personal learning paths, saved workflows, and private progress.</p>
        </div>
        <div className="verified-card">
          <span className="verified-icon">✓</span>
          <small>AUTHENTICATION STATUS</small>
          <strong>Signed in with ChatGPT</strong>
          <p>Only you can view this protected route during your authenticated session.</p>
        </div>
      </section>

      <section className="member-content">
        <div className="member-heading"><span>START A PATH</span><h2>What will you turn into progress?</h2></div>
        <div className="member-grid">
          <Link href="/#demo"><span>01</span><strong>Build a learning workflow</strong><p>Turn a complex goal into a clear sequence of research, explanation, practice, and planning.</p><i>Try demo →</i></Link>
          <Link href="/#hub"><span>02</span><strong>Choose a Lumo skill</strong><p>Start with a focused playbook for study, research, revision, visualization, or applications.</p><i>Open Hub →</i></Link>
          <Link href="/#docs"><span>03</span><strong>Explore the full project</strong><p>See how the private local workspace adds knowledge bases, books, memory, and connected agents.</p><i>Read docs →</i></Link>
        </div>
        <div className="member-coming"><span>COMING NEXT</span><p>Personal saved workflows and cross-device progress will build on this verified identity layer.</p></div>
      </section>
    </main>
  );
}
