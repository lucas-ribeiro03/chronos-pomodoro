import Input from "../Input";

const MainForm = () => {
  return (
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
  );
};

export default MainForm;
