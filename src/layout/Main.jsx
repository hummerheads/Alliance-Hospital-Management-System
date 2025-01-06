import { Outlet } from "react-router";
import Nav from "../pages/home/Nav";
import Footer from "../pages/home/Footer";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
