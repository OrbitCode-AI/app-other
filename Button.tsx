import type { ComponentChildren } from 'preact';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
  children: ComponentChildren;
}

function Button({ variant = 'primary', disabled = false, onClick, children }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Default export renders component in isolation for preview
export default function ButtonPreview() {
  return (
    <div className="preview-container">
      <h3>Variants:</h3>
      <div className="preview-row">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <h3>Disabled:</h3>
      <div className="preview-row">
        <Button variant="primary" disabled>Disabled</Button>
      </div>
    </div>
  );
}

export { Button };
export type { ButtonVariant };
