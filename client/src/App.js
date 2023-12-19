import Create from "./components/Quizz/Create/Create";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";



function App() {
  const [err, setErr] = useState({});



  return (
    <div className="App">

        <Link to='/create'>CREATE</Link>
      <Routes>
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
