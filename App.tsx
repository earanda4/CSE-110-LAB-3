import "./App1.css";
import { ToDoList } from "./toDoList";
import { Route, Routes } from "react-router-dom";
import { stickyNotes } from "./stickyNotes";

const App = () => {
 return (
   <div>
     <Routes>
       <Route path="/" element={<stickyNotes />} />
       <Route path="/todolist" element={<ToDoList />} />
     </Routes>
   </div>
 );
};



export default App;
