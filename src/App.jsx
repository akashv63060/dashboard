import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside>
        <div>Dashboard</div>

        <nav>
          <button>Home</button>
          <button>Analytics</button>
          <button>Projects</button>
          <button>Settings</button>
        </nav>

        <div>React + Vite</div>
      </aside>

      {/* Main Content */}
      <main>
        {/* Topbar */}
        <header>
          <h1>Welcome Back 👋</h1>

          <div>
            <img src={reactLogo} alt="React Logo" />
            <img src={viteLogo} alt="Vite Logo" />
          </div>
        </header>

        {/* Dashboard Cards */}
        <section className="cards">
          <div className="card">
            <h2>Users</h2>
            <p>1,204</p>
          </div>

          <div className="card">
            <h2>Projects</h2>
            <p>48</p>
          </div>

          <div className="card">
            <h2>Clicks</h2>
            <button
              onClick={() => setCount(count + 1)}
              className="counter-btn"
            >
              Count: {count}
            </button>
          </div>
        </section>

        {/* Quick Panel */}
        <section className="quick-panel">
          <div className="quick-panel-box">
            <div>
              <h2>Quick Start Panel</h2>
              <p>
                Edit src/App.jsx and save to test Hot Module Reload.
              </p>
            </div>

            <img src={heroImg} alt="Hero" />
          </div>
        </section>

        {/* Resources Section */}
        <section className="resources">
          <div className="resource-box">
            <h2>Documentation</h2>

            <ul>
              <li>
                <a href="https://vite.dev/" target="_blank">
                  Explore Vite Docs
                </a>
              </li>

              <li>
                <a href="https://react.dev/" target="_blank">
                  Learn React
                </a>
              </li>
            </ul>
          </div>

          <div className="resource-box">
            <h2>Community</h2>

            <ul>
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank">
                  GitHub
                </a>
              </li>

              <li>
                <a href="https://chat.vite.dev/" target="_blank">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}