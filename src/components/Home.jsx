import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const handleClass = () => {
    history.push("/Class");
  };
  const handleFunction = () => {
    history.push("/Function");
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-success btn-primary btn-lg"
        style={{ margin: "10rem" }}
        onClick={handleClass}
      >
        Class Components
      </button>
      <button
        type="button"
        className="btn btn-warning btn-primary btn-lg"
        style={{ margin: "10rem" }}
        onClick={handleFunction}
      >
        Functional Components
      </button>
    </div>
  );
}

export default Home;
