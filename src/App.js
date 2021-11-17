import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Profile from "./component/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
