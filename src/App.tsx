import "./App.css"
import { Logo } from './components/Logo';
import { ContainerCRT } from './components/ContainerCRT';
import { Prompts } from './components/Prompts/Prompts';
import { CurrentLine } from './components/CurrentLine';

function App() {
  return (
    <ContainerCRT>
      <Logo />
      <Prompts />
      <CurrentLine />
    </ContainerCRT>
  );
}

export default App;
