import React from "react";
import FloatingButton from "../FloatingButton";
import { useAtom } from "jotai";
import taskAtom from "../../store/taskStore";
import { Link } from "react-router-dom";

const AllTasks = () => {
  const [tasks, setTasks] = useAtom(taskAtom)

  const deleteTask = (id: string)=> {
    try {
      const newTasks = tasks.tasks.filter((curr)=> curr.id !== id);
      setTasks({ ...tasks, tasks: newTasks});
      localStorage.setItem('j-tasks', JSON.stringify(newTasks));
      // alert('task deleted');
    }catch(err: any) {
      alert(`unable to delete task ${err}`);
    };
  }

  const markAsCompleted = (id: string) => {
    const allTasks = tasks.tasks;
    const taskIndex = tasks.tasks.findIndex((curr)=> curr.id === id);
    taskIndex > -1 && (allTasks[taskIndex].completed = !allTasks[taskIndex].completed);
    setTasks({...tasks, tasks: allTasks});
  }
  
  return (
    <div className="App">
      <div className="-my-2">
        {tasks?.tasks
          .map((curr, idx) => {
            return (
              <div className="py-2" key={curr.id}>
                <div className={`${curr.completed ? 'opacity-50': ''} card md:mx-auto px-0 md:px-0 w-full md:w-9/12`}>
                  <div className="py-2">
                    <div className="flex items-center justify-between px-2 py-4">
                      <div onClick={()=> markAsCompleted(curr.id)}>
                        <h5 className={`${curr.completed ? 'line-through': ''} w-full break-word`}>
                          { curr.title }
                        </h5>
                      </div>

                      <div className="flex justify-between">
                        <button onClick={()=> deleteTask(curr.id)} className="inline-block px-2 py-4 text-[#D60000] border-radius">
                          Delete
                        </button>
                        <Link
                          to={"/edit/" + curr.id}
                          className="inline-block px-2 py-4 text-[#515151] border-radius"
                        >
                          Edit
                        </Link>
                        <Link
                          to={"/view/" + curr.id}
                          className="inline-block px-2 py-4 text-[#0e9f64] border-radius"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {
          tasks.tasks && tasks.tasks.length === 0 ? (
            <div className="mx-auto md:w-9/12">
              <h1 className="card flex items-center justify-center h-screen">
                No Tasks Added
              </h1>
            </div>
          ):(
            null
          )
        }
      </div>
      <FloatingButton />
    </div>
  );
};

export default AllTasks;
