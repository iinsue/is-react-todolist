import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoInit from "./Routes/Init";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<TodoInit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
