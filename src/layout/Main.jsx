import { Outlet } from "react-router";
import Nav from "../pages/home/Nav";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
