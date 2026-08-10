"use client";

import { useMemo, useState } from "react";

const skills = [
  { icon: "◎", name: "Source Research", copy: "Trace claims across your materials and build a cited explanation.", output: "Research brief" },
  { icon: "◇", name: "Concept Visualizer", copy: "Turn difficult ideas into diagrams, mental models, and visual walkthroughs.", output: "Visual lesson" },
  { icon: "↗", name: "Study Planner", copy: "Convert a goal and deadline into a realistic, adaptive learning path.", output: "Weekly plan" },
  { icon: "?", name: "Socratic Coach", copy: "Learn through guided questions that reveal gaps without giving answers away.", output: "Coaching session" },
  { icon: "✓", name: "Exam Revision", copy: "Compress a knowledge base into revision notes, quizzes, and weak-area drills.", output: "Revision pack" },
  { icon: "⌁", name: "Opportunity Fit", copy: "Compare a résumé with a role and surface evidence, gaps, and next moves.", output: "Fit map" },
  { icon: "✦", name: "Application Coach", copy: "Draft focused application material grounded in your actual experience.", output: "Application kit" },
];

const modes = {
  Learn: {
    eyebrow: "LEARNING PATH READY",
    title: "From scattered sources to confident understanding",
    steps: ["Map the source", "Explain the hard parts", "Test understanding", "Plan the next session"],
    output: "A structured lesson, concept map, five recall questions, and a seven-day study plan.",
  },
  Research: {
    eyebrow: "RESEARCH WORKSPACE READY",
    title: "From a question to an evidence-backed brief",
    steps: ["Frame the question", "Inspect sources", "Trace claims", "Compose with citations"],
    output: "A source-grounded brief with claim trails, open questions, and suggested follow-up research.",
  },
  Apply: {
    eyebrow: "OPPORTUNITY WORKSPACE READY",
    title: "From experience to a focused application",
    steps: ["Read the opportunity", "Map evidence", "Identify gaps", "Build the narrative"],
    output: "A fit analysis, tailored story bank, application draft, and interview preparation prompts.",
  },
} as const;

type Mode = keyof typeof modes;

export function LumoDemo() {
  const [mode, setMode] = useState<Mode>("Learn");
  const [goal, setGoal] = useState("Understand retrieval-augmented generation and explain it in my product video");
  const [running, setRunning] = useState(false);
  const [complete, setComplete] = useState(false);
  const [openSkill, setOpenSkill] = useState(0);
  const selected = modes[mode];

  const goalLabel = useMemo(() => goal.trim() || "Untitled learning goal", [goal]);

  function runDemo() {
    setRunning(true);
    setComplete(false);
    window.setTimeout(() => {
      setRunning(false);
      setComplete(true);
    }, 850);
  }

  return (
    <main>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Lumo home">
          <span className="brand-mark">L</span>
          <span>Lumo</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#demo">Demo</a>
          <a href="#hub">Lumo Hub</a>
          <a href="#docs">Docs</a>
        </nav>
        <a className="nav-cta" href="https://github.com/Bitshank-2338/Lumo" target="_blank" rel="noreferrer">
          View source <span>↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="status-pill"><span /> BUILT FOR SERIOUS LEARNING</div>
          <h1>Learn deeply.<br /><em>Move with direction.</em></h1>
          <p className="hero-lede">
            Lumo brings your sources, AI tools, learning plans, visual explanations, applications, and books into one connected workspace.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#demo">Try the live workflow <span>→</span></a>
            <a className="text-button" href="#product">See what Lumo connects</a>
          </div>
          <div className="proof-row">
            <div><strong>7</strong><span>first-party skills</span></div>
            <div><strong>1</strong><span>connected workspace</span></div>
            <div><strong>∞</strong><span>learning paths</span></div>
          </div>
        </div>

        <div className="hero-console" aria-label="Lumo workspace preview">
          <div className="console-top"><span className="console-dot" /><span>LUMO WORKSPACE</span><small>LIVE</small></div>
          <div className="console-body">
            <div className="source-card">
              <span className="mini-icon">▤</span>
              <div><small>SOURCE ADDED</small><strong>Product research.pdf</strong></div>
              <span className="check">✓</span>
            </div>
            <div className="flow-line"><span /></div>
            <div className="thinking-card">
              <div className="thinking-head"><span className="spark">✦</span><strong>Lumo is building your path</strong></div>
              <ul>
                <li className="done"><span>✓</span> Reading and mapping the source</li>
                <li className="done"><span>✓</span> Finding the core concepts</li>
                <li className="active"><span>◎</span> Creating a visual explanation</li>
                <li><span>○</span> Building recall questions</li>
              </ul>
            </div>
            <div className="output-strip">
              <div><span>◇</span><small>VISUAL</small><strong>Concept map</strong></div>
              <div><span>?</span><small>COACH</small><strong>5 questions</strong></div>
              <div><span>↗</span><small>PLAN</small><strong>7 days</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-strip" id="product">
        <p>Learning tools are fragmented.</p>
        <div className="fragment-list"><span>FILES</span><i>+</i><span>CHAT</span><i>+</i><span>NOTES</span><i>+</i><span>PLANS</span><i>+</i><span>OUTPUTS</span></div>
        <strong>Lumo makes them one workflow.</strong>
      </section>

      <section className="section product-section">
        <div className="section-heading">
          <div><span className="kicker">THE LEARNING OPERATING SYSTEM</span><h2>One source. Every useful next step.</h2></div>
          <p>Stop rebuilding context in five different tools. Lumo keeps the source, the reasoning, and the outputs connected from first question to final result.</p>
        </div>
        <div className="journey-grid">
          <article className="journey-card source">
            <span className="step-number">01</span><small>BRING CONTEXT</small><h3>Your knowledge base</h3>
            <p>Documents, notes, URLs, research papers, or a résumé become grounded context—not forgotten attachments.</p>
            <div className="file-stack"><span>PDF</span><span>WEB</span><span>NOTE</span></div>
          </article>
          <article className="journey-card think">
            <span className="step-number">02</span><small>CHOOSE A PATH</small><h3>Specialized skills</h3>
            <p>Use focused workflows for research, learning, revision, visualization, opportunity fit, and applications.</p>
            <div className="orbit"><b>✦</b><span>?</span><span>◇</span><span>✓</span></div>
          </article>
          <article className="journey-card output">
            <span className="step-number">03</span><small>CREATE AN OUTCOME</small><h3>Work you can use</h3>
            <p>Produce cited briefs, concept maps, quizzes, plans, application kits, notebooks, and complete learning books.</p>
            <div className="book-mini"><i /><div><span /><span /><span /></div></div>
          </article>
        </div>
      </section>

      <section className="demo-section" id="demo">
        <div className="demo-intro">
          <span className="kicker light">INTERACTIVE PRODUCT DEMO</span>
          <h2>Give Lumo a destination.</h2>
          <p>Choose a workflow, describe what you need, and preview how Lumo organizes the work. This public demo uses sample data and never touches your files.</p>
          <div className="privacy-note"><span>⌾</span><div><strong>Safe demo environment</strong><small>No uploads, accounts, or private data required.</small></div></div>
        </div>
        <div className="demo-panel">
          <div className="mode-switch" role="tablist" aria-label="Workflow mode">
            {(Object.keys(modes) as Mode[]).map((item) => (
              <button key={item} className={mode === item ? "selected" : ""} onClick={() => { setMode(item); setComplete(false); }} role="tab" aria-selected={mode === item}>{item}</button>
            ))}
          </div>
          <label htmlFor="goal">WHAT DO YOU WANT TO ACHIEVE?</label>
          <textarea id="goal" value={goal} onChange={(event) => { setGoal(event.target.value); setComplete(false); }} rows={3} />
          <button className="run-button" onClick={runDemo} disabled={running}>{running ? "Lumo is mapping the path…" : "Build my workflow"}<span>{running ? "◎" : "→"}</span></button>
          <div className={`demo-result ${complete ? "complete" : ""}`} aria-live="polite">
            <div className="result-top"><span>{complete ? "✓" : "✦"}</span><div><small>{complete ? selected.eyebrow : "WORKFLOW PREVIEW"}</small><strong>{selected.title}</strong></div></div>
            <div className="goal-chip">“{goalLabel}”</div>
            <ol>{selected.steps.map((step, index) => <li key={step}><span>{complete ? "✓" : index + 1}</span>{step}</li>)}</ol>
            <p className="result-output"><strong>Output</strong>{selected.output}</p>
          </div>
        </div>
      </section>

      <section className="section hub-section" id="hub">
        <div className="section-heading hub-heading">
          <div><span className="kicker">LUMO HUB</span><h2>Seven skills. One shared context.</h2></div>
          <div className="coming-badge"><span /> COMMUNITY LIBRARY — IN PROGRESS</div>
        </div>
        <div className="skills-layout">
          <div className="skill-list" role="list">
            {skills.map((skill, index) => (
              <button key={skill.name} className={openSkill === index ? "active" : ""} onClick={() => setOpenSkill(index)}>
                <span className="skill-icon">{skill.icon}</span><span><strong>{skill.name}</strong><small>{skill.output}</small></span><i>→</i>
              </button>
            ))}
          </div>
          <div className="skill-detail">
            <span className="detail-icon">{skills[openSkill].icon}</span>
            <small>FIRST-PARTY LUMO SKILL</small>
            <h3>{skills[openSkill].name}</h3>
            <p>{skills[openSkill].copy}</p>
            <div className="skill-output"><span>OUTPUT</span><strong>{skills[openSkill].output}</strong></div>
            <a href="#demo">Try this workflow <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="book-section">
        <div className="book-visual" aria-hidden="true"><div className="book-cover"><span>LUMO</span><h3>Learn deeply.<br />Move with direction.</h3><small>A PRODUCT &amp; BUILDING PLAYBOOK</small><i>✦</i></div><div className="book-pages" /></div>
        <div className="book-copy"><span className="kicker light">FROM SOURCES TO A BOOK</span><h2>Knowledge should become something you can revisit.</h2><p>Lumo Book turns a learning intent into a proposal, chapter spine, and compiled long-form guide. The submission edition includes the product story, target users, feature pillars, demo workflow, and recording playbook.</p><div className="book-meta"><span><strong>9</strong> generated pages</span><span><strong>7</strong> product pillars</span><span><strong>1</strong> recording guide</span></div><a href="#docs" className="outline-button">Read the build notes →</a></div>
      </section>

      <section className="section docs-section" id="docs">
        <div className="section-heading"><div><span className="kicker">DOCS &amp; OPEN SOURCE</span><h2>Built to be explored.</h2></div><p>The complete source, setup instructions, skill definitions, architecture, and hackathon submission material are public on GitHub.</p></div>
        <div className="docs-grid">
          <a href="https://github.com/Bitshank-2338/Lumo#readme" target="_blank" rel="noreferrer"><span>01</span><h3>Start here</h3><p>Product overview, architecture, setup, routes, and responsible use.</p><strong>Open README ↗</strong></a>
          <a href="https://github.com/Bitshank-2338/Lumo/blob/main/HACKATHON_SUBMISSION.md" target="_blank" rel="noreferrer"><span>02</span><h3>Submission guide</h3><p>Problem statement, target users, demo storyboard, and video script.</p><strong>Read the guide ↗</strong></a>
          <a href="https://github.com/Bitshank-2338/Lumo/tree/main/deeptutor/skills/builtin" target="_blank" rel="noreferrer"><span>03</span><h3>Skill library</h3><p>Inspect the seven first-party Lumo workflows and their instructions.</p><strong>Browse skills ↗</strong></a>
        </div>
      </section>

      <section className="final-cta">
        <span className="kicker light">YOUR NEXT QUESTION DESERVES A PATH</span>
        <h2>Turn what you have<br />into what you need.</h2>
        <div><a className="primary-button inverse" href="#demo">Try the workflow <span>→</span></a><a className="footer-link" href="https://github.com/Bitshank-2338/Lumo" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">L</span><span>Lumo</span></a><p>Learn deeply. Move with direction.</p><span>Built on the open-source foundations of DeepTutor.</span></footer>
    </main>
  );
}
