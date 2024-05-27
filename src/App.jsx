import React from "react";
import Signup from "./components/Signup/Signup";
import Portal from "./components/Portal";
import Reg from "./components/Reg";
import Dash from "./components/Dash";
import Login from "./components/Login";

const App = () => {
  const sayHello = () => {
    alert("Hello");
  };
  return (
    <div>
      {/* <Signup/> */}
      {/* <Portal/> */}
      {/* <Reg/> */}
      <Login/>
      {/* <Dash title="Edit" age="4" color="btn btn-info" sayHello={sayHello} />
      <Dash title="Delete" age="6" color="btn btn-danger" sayHello={sayHello}/>
      <Dash title="Rusticate" color="btn btn-primary" sayHello={sayHello}/> */}
    </div>
  );
};

export default App;
