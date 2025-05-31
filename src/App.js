import './App.css';
import React, { useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');
  
  const fetchMessage = async () => {
    const res = await fetch('http://localhost:5000/api/message');
    const data = await res.json();
    setBackendMessage(data.message);
  };

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
          <button onClick={fetchMessage}>Get Backend Message</button>
          {backendMessage && <p>Backend says: {backendMessage}</p>}
        </section>
      </main>
      <footer className="App-footer">
        <p>"If you build it, they will come". </p>
      </footer>
    </div>
  );
}

export default App;
