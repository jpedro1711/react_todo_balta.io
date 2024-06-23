import { Route, Routes, BrowserRouter } from "react-router-dom";
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Navbar from "../components/Navbar";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="uk-container">
          <Navbar />
          <br />
          <div className="uk-container">
            <Routes>
              <Route path="/create" element={<AddTodo />}>
              </Route>
              <Route path="/" element={<TodoList />}>
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes