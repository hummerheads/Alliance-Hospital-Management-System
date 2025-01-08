import Main from "../layout/Main";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router";
import StaffRegister from "../pages/registerForms/staffRegister";
import DoctorRegister from "../pages/registerForms/doctorResigter";
import PatientRegister from "../pages/registerForms/PatientRegister";
import AdminRegister from "../pages/registerForms/AdminRegister";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";





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
    children: [
      {
        path: "/dashboard/user",
        element: <Dashboard></Dashboard>
      },
     
    ],
  },
]);

export default router;