import './App.scss';
import "@progress/kendo-theme-default/dist/all.css";
import { GlobalProvider } from './context/GlobalContext';
import { Background } from './components/Background';
import CharacterPicker from './components/CharacterPicker';
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
