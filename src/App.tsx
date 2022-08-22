import { Routes, Route } from "react-router-dom";
import { FilterPage, HomePage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/filter" element={<FilterPage />} />
    </Routes>
  );
};
export default App;
