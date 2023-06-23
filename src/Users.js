// export const Users = (props) => {
//   return (
//     <div>
//       {props.name} {props.age} {props.level}
//     </div>
//   );
// };

// const [Todolist, setTodolist] = useState([]);
// const [newTask, setNewTask] = useState("");

// const handleChange = (event) => {
//   setNewTask(event.target.value);
// };
// let addTask = () => {
//   const task = {
//     id: Todolist.length === 0 ? 1 : Todolist[Todolist.length - 1].id + 1,
//     Taskname: newTask,
//     completed: false,
//   };
//   setTodolist([...Todolist, task]);
// };

// const deleteTask = (id) => {
//   setTodolist(Todolist.filter((task) => task.id !== id));
// };
// const complete = (id) => {
//   setTodolist(
//     Todolist.map((task) => {
//       if (task.id === id) {
//         return { ...task, completed: true };
//       } else {
//         return task;
//       }
//     })
//   );
// };

// return (
//   <div className="App">
//     <div>
//       <input onChange={handleChange} placeholder="Enter your task" />
//       <button onClick={addTask}>Add Task</button>
//     </div>
//     {Todolist.map((task) => {
//       return (
//         <Task
//           Taskname={task.Taskname}
//           id={task.id}
//           completed={task.completed}
//           deleteTask={deleteTask}
//           complete={complete}
//         />
//       );
//     })}
//   </div>
// );
