import Main from "../layout/Main";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router";
import StaffRegister from "../pages/registerForms/staffRegister";
import DoctorRegister from "../pages/registerForms/doctorResigter";
import PatientRegister from "../pages/registerForms/PatientRegister";
import AdminRegister from "../pages/registerForms/AdminRegister";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/pages/Profile";
import Report from "../pages/dashboard/pages/Report";
import Prescription from "../pages/dashboard/pages/Prescription";
import Patients from "../pages/dashboard/pages/Patient";
import Staffs from "../pages/dashboard/pages/Staffs";
import Rooster from "../pages/dashboard/pages/Rooster";
import Doctor from "../pages/dashboard/pages/Doctor";
import Bill from "../pages/dashboard/pages/Bill";
import Feedback from "../pages/dashboard/pages/Feedback";







const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register-staff",
        element: <StaffRegister></StaffRegister>
      },
      {
        path: "/register-doctor",
        element: <DoctorRegister></DoctorRegister>,
      },
      {
        path: "/register-patient",
        element: <PatientRegister></PatientRegister>,
      },
      {
        path: "/register-admin",
        element: <AdminRegister></AdminRegister>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

    

    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [

      {
        path: "/dashboard/profile",
        element: <Profile></Profile>
      },
      {
        path: "/dashboard/report",
        element: <Report></Report>
      },
      {
        path: "/dashboard/prescriptions",
        element: <Prescription></Prescription>
      },
      {
        path: "/dashboard/patients",
        element: <Patients></Patients>
      },
      {
        path: "/dashboard/staffs",
        element: <Staffs></Staffs>
      },
      {
        path: "/dashboard/rooster",
        element: <Rooster></Rooster>
      },
      {
        path: "/dashboard/doctor",
        element: <Doctor></Doctor>
      },
      {
        path: "/dashboard/bill",
        element: <Bill></Bill>
      },
      {
        path: "/dashboard/feedback",
        element: <Feedback></Feedback>
      },
     
    ],
  },
]);

export default router;