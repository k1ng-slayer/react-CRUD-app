import { Route, Routes } from "react-router-dom";
import "./App.css";
import Get from "./components/Get";
import Create from "./components/Create";
import Update from "./components/Update";
import Delete from "./components/Delete";
import IndividualDataFetching from "./components/IndividualGet";

function App() {
    return (
        <>
            <h2 style={{ textAlign: "center" }}>CRUD App</h2>
            <Routes>
                <Route path="/" element={<Get />} />
                <Route path="/iget" element={<IndividualDataFetching />} />
                <Route path="/create" element={<Create />} />
                <Route path="/delete" element={<Delete />} />
                <Route path="/update" element={<Update />} />
            </Routes>
        </>
    );
}

export default App;
