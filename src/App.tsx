import "@progress/kendo-theme-default/dist/all.css";
import './App.scss';
import { CharacterProvider } from './context/CharacterContext';
import { LevelWrapper } from './components/LevelWrapper';

function App() {
  return (
    <div className="App">
      <CharacterProvider>
        <LevelWrapper />
      </CharacterProvider >
    </div>
  );
}

export default App;
