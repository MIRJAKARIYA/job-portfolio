import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-theme="dark">
      <div className="text-right pr-2 pt-2">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost text-2xl drawer-button lg:hidden"
        >
          <GiHamburgerMenu></GiHamburgerMenu>
        </label>
      </div>
      <Home></Home>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
