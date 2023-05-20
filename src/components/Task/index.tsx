import React from "react";
import { Link } from "react-router-dom";

const Task: React.FC<{title:string}> = ({title}) => {
  return (
    <div className="card md:mx-auto px-0 md:px-0 w-full md:w-9/12">
      <div className="py-2">
        <div className="flex items-center justify-between px-2 py-4">
          <div>
            <h5 className="w-full break-word">
              { title }
            </h5>
          </div>

          <div className="flex justify-between">
            <button className="inline-block px-2 py-4 text-[#D60000] border-radius">
              Delete
            </button>
            <Link
              to={"/edit/" + title}
              className="inline-block px-2 py-4 text-[#515151] border-radius"
            >
              Edit
            </Link>
            <Link
              to={"/view/" + title}
              className="inline-block px-2 py-4 text-[#0e9f64] border-radius"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
