import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center py-5 font-bold">
          Alliance Hospital Mnagement System
        </h1>
      </div>
      <div className="flex md:flex-row flex-col md:justify-center">
        <div className="uppercase md:min-h-screen md:block ">
          <ul>
            <NavLink to="/" className="md:mb-10">
              <img className="mx-auto w-36 md:w-44" src="/Logo.png" alt="" />
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/" className="">
              Home
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/user" className="">
              Dashboard
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/profile" className="py-5">
              Profile
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/purchases" className="py-5">
              Purchases
            </NavLink>
          </ul>

          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/reports" className="py-5">
              Reports
            </NavLink>
          </ul>
          <ul
            onClick={() => (window.location.href = "/login")}
            className="p-2 md:py-5 hover:bg-green-700"
          >
            <NavLink className="py-5">Sign Out</NavLink>
          </ul>
        </div>

        <div className="md:w-2/3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
