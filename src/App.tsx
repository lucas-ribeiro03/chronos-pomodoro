import "./styles/theme.css";
import "./styles/global.css";
import { TaskContextProvider } from "./context/TaskContext/TaskContextProvider";
import MessageContainer from "./components/MessageContainer";
import { Router } from "./router/router";

function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <Router />
      </MessageContainer>
    </TaskContextProvider>
  );
}

export default App;
