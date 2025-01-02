import React from "react";
import ChatBox from "./components/ChatBox";
import Live2DDisplay from "./components/Live2DDisplay";

const App: React.FC = () => {
  console.log("App launched");
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Live2DDisplay />
      <ChatBox />
    </div>
  );
};

export default App;
