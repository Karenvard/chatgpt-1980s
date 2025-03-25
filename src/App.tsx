import "./App.css"
import { Logo } from './components/Logo';
import { ContainerCRT } from './components/ContainerCRT';
import { Prompts } from './components/Prompts/Prompts';
import { CurrentLine } from './components/CurrentLine';
import { useEffect, useState } from "react";
import { Animation } from "./components/Animation";
import { observer } from "mobx-react-lite";
import Store from "./store";

const App = observer(() => {
  const { messagesLength } = Store;
  const [showIntro, setShowIntro] = useState( messagesLength ? false : true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ContainerCRT>
      {showIntro
        ? <Animation />
        : <>
          <Logo />
          <Prompts />
          <CurrentLine />
        </>}
    </ContainerCRT>
  );
})

export default App;
