import { Header } from './Header';
import { Card } from './Card';
import { Button } from './Button';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      <Header title="My App" subtitle="A clean starting point" />
      <main className="main">
        <Card title="Welcome">
          <p>This is a starter template with reusable components.</p>
          <p>Each component can be previewed in isolation.</p>
          <div className="button-group">
            <Button>Primary Action</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </Card>

        <Card title="Features">
          <ul className="feature-list">
            <li>Modular component architecture</li>
            <li>Each file has an isolated preview</li>
            <li>Clean, minimal styling</li>
            <li>Ready to customize</li>
          </ul>
        </Card>

        <Card title="Get Started">
          <p>Edit the components to build your app. Start with:</p>
          <code className="code-block">App.tsx → Header.tsx → Card.tsx</code>
        </Card>
      </main>
    </div>
  );
}
