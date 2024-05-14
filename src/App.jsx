import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Auth from "./pages/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
