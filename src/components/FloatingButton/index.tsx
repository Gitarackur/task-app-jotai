import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const FloatingButton = () => {
  return (
    <div>
      <div>
        <div className="circle">
          <Link to="/create" className="inline-block smallP12px text-uppercase c-black"
          >
            <img src="src/assets/ic-transact.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;
