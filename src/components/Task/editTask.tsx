import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import taskAtom, { singleTask } from "../../store/taskStore";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useAtom(taskAtom)
  const [task, setSingleTask] = useState<singleTask>({
    id: '',
    title: '',
    description: '',
    completed: false
  })
  const { id } = useParams();


  const onChange = (type: any, value: any)=> {
    switch(type){
      case "title":
        setSingleTask({...task, title: value})
        break;
      case "description":
        setSingleTask({...task, description: value})
        break;
      default:
        break
    }
  }
  
  const editTask = ()=> {
    let allTasks: singleTask[] = tasks.tasks;
    const taskIndex = tasks.tasks.findIndex((curr)=> curr?.id === id);
    taskIndex > -1 && (allTasks[taskIndex] = task);
    setTasks({...tasks, tasks: allTasks})
    localStorage.setItem('j-tasks', JSON.stringify(allTasks));
    navigate('/')
  };

  useEffect(() => {
    const task = tasks.tasks.find((curr)=> curr?.id === id);
    task && setSingleTask(task);
  }, [id, tasks.tasks])
  

  return (
    <div>
      <div className="md:mx-auto px-6 md:px-0 mt-10 md:w-9/12">
        <h1 className="my-4 text-center">Edit Task</h1>

        <form className="" onSubmit={editTask}>
          <div className="mt-8">
            <label className="text-white mb-2"> Title </label>
            <input 
              type="text" 
              className="edge-input" 
              placeholder="" 
              value={task.title}
              required 
              onChange={(e)=> onChange("title", e.target.value)}
            />
          </div>

          <div className="mt-8">
            <label className="text-white mb-2">
              Add your note description
            </label>
            <textarea
              className="edge-input"
              data-provide="markdown"
              required
              value={task.description}
              onChange={(e)=> onChange("description", e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-4 py-4 bg-[#0e9f64] c-white border-radius"
            >
              Edit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
