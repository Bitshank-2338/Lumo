/* eslint-disable @next/next/no-html-link-for-pages -- vinext Link prefetch fails on this authenticated route. */
import { chatGPTSignOutPath, requireChatGPTUser } from "../chatgpt-auth";

export const dynamic = "force-dynamic";

export default function MemberPage() {
  return <AuthenticatedMemberSpace />;
}

async function AuthenticatedMemberSpace() {
  const user = await requireChatGPTUser("/member?view=workflow");
  const { getUserWorkflow } = await import("../../db/workflows");
  const workflow = await getUserWorkflow(user.userId);
  const firstName = user.fullName?.split(/\s+/)[0] || user.displayName.split("@")[0];
  const savedDate = workflow
    ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(workflow.createdAt))
    : null;

  return (
    <main className="member-shell">
      <header className="member-nav">
        <a className="brand" href="/" aria-label="Lumo home">
          <span className="brand-mark">L</span>
          <span>Lumo</span>
        </a>
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
          <p>Your one demo workflow lives here, privately tied to your ChatGPT ID so you can return to it.</p>
        </div>
        <div className="verified-card">
          <span className="verified-icon">✓</span>
          <small>AUTHENTICATION STATUS</small>
          <strong>Signed in with ChatGPT</strong>
          <p>Only you can open the workflow saved to this authenticated identity.</p>
        </div>
      </section>

      <section className="member-content">
        {workflow ? (
          <>
            <div className="member-heading saved-member-heading">
              <span>SAVED WORKFLOW</span>
              <div>
                <h2>{workflow.title}</h2>
                <p className="saved-member-meta">{workflow.mode} mode · Created {savedDate} · One workflow per ChatGPT ID</p>
              </div>
            </div>

            <article className="saved-workflow-overview">
              <div className="saved-workflow-status">
                <span>✓</span>
                <div><small>LEARNING PATH READY</small><strong>{workflow.title}</strong></div>
              </div>
              <blockquote>“{workflow.goal}”</blockquote>
              <ol className="saved-steps">
                {workflow.steps.map((step, index) => (
                  <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>
                ))}
              </ol>
              <p className="saved-output"><strong>Output</strong>{workflow.output}</p>
            </article>

            <div className="artifact-grid">
              <section className="artifact-card lesson-artifact">
                <small>01 · STRUCTURED LESSON</small>
                <h3>Your focused first lesson</h3>
                <p>{workflow.details.lesson}</p>
              </section>

              <section className="artifact-card">
                <small>02 · CONCEPT MAP</small>
                <h3>How the ideas connect</h3>
                <div className="concept-chain">
                  {workflow.details.conceptMap.map((concept, index) => (
                    <div key={concept}>
                      <span>{concept}</span>
                      {index < workflow.details.conceptMap.length - 1 && <i>↓</i>}
                    </div>
                  ))}
                </div>
              </section>

              <section className="artifact-card">
                <small>03 · RECALL CHECK</small>
                <h3>Five questions</h3>
                <ol className="question-list">
                  {workflow.details.questions.map((question) => <li key={question}>{question}</li>)}
                </ol>
              </section>

              <section className="artifact-card">
                <small>04 · SEVEN-DAY PLAN</small>
                <h3>Turn insight into progress</h3>
                <ol className="plan-list">
                  {workflow.details.plan.map((item, index) => (
                    <li key={item}><span>DAY {index + 1}</span>{item}</li>
                  ))}
                </ol>
              </section>
            </div>

            <div className="member-coming">
              <span>DEMO WORKFLOW SAVED</span>
              <p>This is the one workflow available to this ChatGPT ID. It remains here when you return.</p>
            </div>
          </>
        ) : (
          <>
            <div className="member-heading">
              <span>ONE WORKFLOW AVAILABLE</span>
              <h2>Build your complete demo learning path.</h2>
            </div>
            <div className="empty-workflow-card">
              <span>01</span>
              <div>
                <strong>Your workspace is ready</strong>
                <p>Choose a mode and goal. Lumo will save a lesson, concept map, five recall questions, and a seven-day plan here.</p>
              </div>
              <a href="/#demo">Build my workflow →</a>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
