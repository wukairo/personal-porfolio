import { BlinkingCursor } from "./BlinkingCursor";

export function CodeCard({ text, typing }: { text: string; typing: boolean }) {
  return (
    <div className="code-card">
      <div className="code-toolbar" aria-hidden="true">
        <span className="window-dot dot-red" />
        <span className="window-dot dot-yellow" />
        <span className="window-dot dot-green" />
        <span className="code-filename">profile.json</span>
      </div>
      <pre className="code-content" aria-label="Introduction">
        <code>{text}</code>
        {typing && <BlinkingCursor />}
      </pre>
    </div>
  );
}
