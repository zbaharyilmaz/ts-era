import AddtoDo from "../components/AddToDo";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div>
        <Header/>
        <AddtoDo/>
        <TodoList/>
    </div>
  );
};

export default Home;