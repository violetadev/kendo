import './App.css';
import "@progress/kendo-theme-default/dist/all.css";
import { GlobalProvider } from './context/GlobalContext';
import { Clicker } from './components/Clicker';
import { Background } from './components/Background';
import CharacterPicker from './components/CharacterPicker';
import { CharacterProvider } from './context/CharacterContext';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <CharacterProvider>
          <Background>
            <Clicker />
            <CharacterPicker />
          </Background>
        </CharacterProvider >
      </GlobalProvider>
    </div>
  );
}

export default App;
