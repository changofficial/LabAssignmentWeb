import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>
        <h1>Ex0</h1>
        <p>
          Hello, <strong>JSX</strong>
        </p>
    </div>
    <hr></hr>
    <div>
        <h2>Ex1</h2>
        <button/>
        <code/>
        <input />
        <label/>
        <p/>
        <pre/>
        <select/>
        <table />
        <ul />
    </div>
    <hr></hr>
    <div>
      <h2>Ex2</h2>
      <section>
          <header>
              <h1>A Header</h1>
          </header>
          <nav>
            <a href="item">Nav Item</a>
          </nav>
            <main>
              <p>The main content...</p>
            </main>
            <footer>
                <small> &copy; 2021</small>
            </footer>
          
      </section>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
