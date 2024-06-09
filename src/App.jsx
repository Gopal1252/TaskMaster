import Header from "./Components/Header";
import Body from "./Components/Body";
import { useState } from "react";

function App() {

  const [boardModalOpen, setBoardModalOpen] = useState(false);

  return (
    <div>

      {/* Header Section */}
      <Header boardModalOpen={boardModalOpen}  setBoardModalOpen={setBoardModalOpen} />

      {/* Body */}
      <Body/>
    </div>
  )
}

export default App
