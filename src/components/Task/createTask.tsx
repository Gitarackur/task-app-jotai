import { useAtom } from "jotai";
import React, { useState } from "react";
import taskAtom, { singleTask } from "../../store/taskStore";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const CreateTask = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useAtom(taskAtom)
  const [task, setSingleTask] = useState<singleTask>({
    id: uuidv4(),
    title: '',
    description: '',
    completed: false
  })

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
  
  const submitTask = ()=> {
    let allTasks: singleTask[] = tasks.tasks || [];
    allTasks = [...allTasks, task];
    setTasks({ ...tasks, tasks: allTasks});
    localStorage.setItem('j-tasks', JSON.stringify(allTasks));
    navigate('/')
  };

  return (
    <div>
      <div className="md:mx-auto px-6 md:px-0 mt-10 md:w-9/12">
        <h1 className="my-4 text-center">Create Task</h1>

        <form onSubmit={submitTask}>
          <div className="mt-8">
            <label className="text-white mb-2"> Title </label>
            <input 
              type="text" 
              className="edge-input" 
              placeholder="" required 
              onChange={(e)=> onChange("title", e.target.value)}
            />
          </div>

          <div className="mt-8">
            <label className="text-white mb-2">
              {" "}
              Add your Task description{" "}
            </label>
            <textarea
              className="edge-input"
              required
              onChange={(e)=> onChange("description", e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-4 py-4 bg-[#0e9f64] c-white border-radius"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
