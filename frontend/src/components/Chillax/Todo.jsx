import "./Styles/main.css"

const TodoList = ({id,title}) => {


    // Get all todos
    useEffect(() => {
      const getTodos = () => {
        axios.get("http://127.0.0.1:5000/todo/all")
          .then(res => {
            setLoading(false);
            const todos = res.data;
            setTodos(todos)
            console.log(todos);
          })
          .catch(err => {
            console.log(err);
          })
      }   
      getTodos()
    }, [todos]);

    return (
        <>
            <div className="todo" href="">
                <input type="checkbox" />
                <p key={todo._id} className="todo-title">{todo.title}</p>
            </div>
        </>
      );
}
 
export default TodoList;