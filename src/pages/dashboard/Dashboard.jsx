import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center py-5 font-bold">
          Alliance Hospital Management System
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
            <NavLink to="/dashboard" className="">
              Dashboard
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/profile" className="py-5">
              Profile
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/report" className="py-5">
              Report
            </NavLink>
          </ul>

          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/prescriptions" className="py-5">
              Prescription
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/patients" className="py-5">
              Patients
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/staffs" className="py-5">
              Staffs
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/rooster" className="py-5">
              Rooster
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/feedback" className="py-5">
              Feedback
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/Doctor" className="py-5">
              Doctor
            </NavLink>
          </ul>
          <ul className="p-2 md:py-5 hover:bg-green-700">
            <NavLink to="/dashboard/Bill" className="py-5">
              Bill
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
