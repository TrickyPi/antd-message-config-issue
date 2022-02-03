import { useEffect } from "react";
import { message } from "antd";
import "./App.css";

function App() {
  useEffect(() => {
    message.config({
      getContainer: () => document.querySelector("#one"),
    });
  }, []);
  return (
    <div className="App">
      <div id="one">first container</div>
      <div id="two">second container</div>
      <button
        onClick={() => {
          // message.destroy()
          message.config({
            getContainer: () => document.querySelector("#two"),
          });
        }}
      >
        set second container as mount node
      </button>
      <br />
      <button
        onClick={() => {
          message.success("it's a test msg");
        }}
      >
        show message
      </button>
    </div>
  );
}

export default App;
