import type { ComponentChildren } from 'preact';
import './Card.css';

interface CardProps {
  title?: string;
  children: ComponentChildren;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-content">{children}</div>
    </div>
  );
}

// Default export renders component in isolation for preview
export default function CardPreview() {
  return (
    <div className="preview-container">
      <Card title="Card with Title">
        <p>This card has a title and content.</p>
      </Card>
      <Card>
        <p>This card has no title, just content.</p>
      </Card>
    </div>
  );
}

export { Card };
