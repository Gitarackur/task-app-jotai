import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import taskAtom, { singleTask } from "../../store/taskStore";
import { useParams } from "react-router-dom";

const ViewTask = () => {
  const [tasks, setTasks] = useAtom(taskAtom)
  const [task, setSingleTask] = useState<singleTask>({
    id: '',
    title: '',
    description: '',
    completed: false
  })
  const { id } = useParams();

  useEffect(() => {
    const task = tasks.tasks.find((curr)=> curr?.id === id);
    task && setSingleTask(task);
  }, [id, tasks.tasks])

  return (
    <div>
      <div className="md:mx-auto px-6 md:px-0 mt-10 md:w-9/12">
        <h1 className="my-4 text-center">View Task</h1>

        <form className="">
          <div className="mt-8">
            <label className="text-white mb-2"> Title </label>
            <input 
              type="text" 
              className="edge-input" 
              placeholder="" 
              value={task.title}
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
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewTask;
