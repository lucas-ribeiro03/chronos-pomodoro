import "./styles/theme.css";
import "./styles/global.css";
import Container from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Countdown from "./components/Countdown";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>
      <Container>
        <Input
          id="input"
          type="text"
          labelText="task"
          placeholder="Digite a tarefa"
        />
      </Container>
    </>
  );
}

export default App;
