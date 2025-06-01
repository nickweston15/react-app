import './assets/App.css';
import ServerButton from './components/ServerButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nick's React App</h1>
        <p>This is a simple React application.</p>
      </header>
      <main>
        <section>
          <h2>About This App</h2>
          <p>This app showcases my technical skills.</p>
        </section>
        <section>
          <ServerButton />
        </section>
      </main>
      <footer className="App-footer">
        <p>"If you build it, they will come". </p>
      </footer>
    </div>
  );
}

export default App;