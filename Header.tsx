import './Header.css';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

function Header({ title = 'App Title', subtitle }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      {subtitle && <p className="header-subtitle">{subtitle}</p>}
    </header>
  );
}

// Default export renders component in isolation for preview
export default function HeaderPreview() {
  return (
    <div className="preview-container">
      <Header title="My App" subtitle="A simple tagline" />
      <div style={{ marginTop: 16 }}>
        <Header title="Title Only" />
      </div>
    </div>
  );
}

export { Header };
