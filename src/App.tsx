import "@progress/kendo-theme-default/dist/all.css";
import './App.scss';
import { GlobalProvider } from './context/GlobalContext';
import { CharacterProvider } from './context/CharacterContext';
import { LevelWrapper } from './components/LevelWrapper';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <CharacterProvider>
          <LevelWrapper />
        </CharacterProvider >
      </GlobalProvider>
    </div>
  );
}

export default App;
