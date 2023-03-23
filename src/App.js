import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary 📚</header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer">
          This project was coded by <strong>Melissa Matos</strong> and is
          open-sourced on{" "}
          <a
            href="https://github.com/mmatos394/Dictionary-Project-React"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
