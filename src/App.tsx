import TodoContext from "./contexts/TodoContext";
import AppRoutes from "./routes/AppRoutes";

function App() {

  return (
    <TodoContext>
      <AppRoutes />
    </TodoContext>
  )
}

export default App;
