import "./styles/theme.css";
import "./styles/global.css";
import Container from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Countdown from "./components/Countdown";
import Input from "./components/Input";
import Footer from "./components/Footer";

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
        <form className="form">
          <div className="formRow">
            <Input
              id="input"
              type="text"
              labelText="task"
              placeholder="Digite a tarefa"
            />
          </div>
          <div className="formRow">
            <span>
              Nesse ciclo <strong>foque</strong>por <strong>25 min.</strong>
            </span>
          </div>
          <div className="formRow">
            <button>botao</button>
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
