import "./styles/theme.css";
import "./styles/global.css";
import Home from "./Pages/Home";
import { TaskContextProvider } from "./context/TaskContext/TaskContextProvider";

function App() {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
}

export default App;
