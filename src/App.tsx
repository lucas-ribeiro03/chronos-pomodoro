import "./styles/theme.css";
import "./styles/global.css";
import Home from "./Pages/Home";
import { TaskContextProvider } from "./context/TaskContext/TaskContextProvider";
import MessageContainer from "./components/MessageContainer";

function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <Home />;
      </MessageContainer>
    </TaskContextProvider>
  );
}

export default App;
