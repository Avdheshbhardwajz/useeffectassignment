import React from "react";
import Datashow from "./Datashow";
import Subevent from "./Subevent";
import Titlechng from "./Titlechng";

const App = () => {
  return (
    <div className="flex m-0 p-0 flex-row justify-around gap-5 bg-slate-500 w-screen min-h-screen  border-black border-2  box-border items-center flex-wrap ">
      <Datashow />
      <Subevent />
      <Titlechng title={"ayush"} />
    </div>
  );
};

export default App;
