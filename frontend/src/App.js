import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationAllStudent from "./components/LocationAllStudent";
import Login from "./components/Login";
import HomeAdmin from "./components/PageSchool/HomeAdmin";
import PageDriver from "./components/PageDriver/PageDriver";
import HomeApp from "./PageHome/HomeApp";
import Student from "./components/PageStudent/PageStudent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeApp />} />
        <Route
          exact
          path="/locationAllStudent"
          element={<LocationAllStudent />}
        />
        <Route exact path="/home" element={<HomeAdmin />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/driver/:id" element={<PageDriver />} />
        <Route exact path="/student/:id" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
