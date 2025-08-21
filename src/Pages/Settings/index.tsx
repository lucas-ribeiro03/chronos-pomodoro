import MainTemplate from "../../templates/MainTemplates";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { SaveIcon } from "lucide-react";
import { useRef } from "react";
import { useTaskContext } from "../../context/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";

const Settings = () => {
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  const { state } = useTaskContext();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showMessage.dismiss();

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    const formErrors = [];

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Digite apenas números para os ciclos");
    }

    if (
      workTime < 1 ||
      workTime > 60 ||
      shortBreakTime < 1 ||
      shortBreakTime > 60 ||
      shortBreakTime < 1 ||
      shortBreakTime > 60
    )
      formErrors.push("O tempo máximo para cada ciclo é de apenas 60 minutos");

    if (formErrors.length > 0) {
      return formErrors.forEach((error) => {
        showMessage.error(error);
      });
    }

    console.log("salvar");
  };

  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <h1>Configurações</h1>
          </Heading>
        </Container>
        <Container>
          <p style={{ textAlign: "center" }}>
            Modifique as configurações de tempo de <strong>Foco</strong>,{" "}
            <strong>Descanso curto</strong> e <strong>Descanso longo</strong>
          </p>
        </Container>

        <Container>
          <form onSubmit={onSubmit} className="form">
            <div className="formRow">
              <Input
                id="workTime"
                labelText="Foco"
                ref={workTimeInput}
                defaultValue={state.config.workTime}
              />
            </div>
            <div className="formRow">
              <Input
                id="shortBreakTime"
                labelText="Descanso curto"
                ref={shortBreakTimeInput}
                defaultValue={state.config.shortBreakTime}
              />
            </div>
            <div className="formRow">
              <Input
                id="longBreakTime"
                labelText="Descanso Longo"
                ref={longBreakTimeInput}
                defaultValue={state.config.longBreakTime}
              />
            </div>
            <div className="formRow">
              <Button
                icon={<SaveIcon />}
                aria-label="Salvar configurações"
                title="Salvar configurações"
              />
            </div>
          </form>
        </Container>
      </MainTemplate>
    </>
  );
};

export default Settings;
