import { useContext } from "react";
import { Avatar } from "flowbite-react";
import { Navbar } from "flowbite-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/Authprovider";
import { NavLink } from "react-router";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleRegisterClick = () => {
    Swal.fire({
      title: "What is your role?",
      text: "Please select your role to proceed with registration",
      icon: "question",
      showCancelButton: false,
      showConfirmButton: false,
      html: `
        <div class="flex flex-col gap-4">
          <button class="swal2-confirm swal2-styled role-button" id="doctor">Doctor</button>
          <button class="swal2-confirm swal2-styled role-button" id="patient">Patient</button>
          <button class="swal2-confirm swal2-styled role-button" id="staff">Staff</button>
          <button class="swal2-confirm swal2-styled role-button" id="admin">Admin</button>
        </div>
      `,
    });

    setTimeout(() => {
      document.getElementById("doctor").addEventListener("click", () => {
        window.location.href = "/register-doctor";
      });
      document.getElementById("patient").addEventListener("click", () => {
        window.location.href = "/register-patient";
      });
      document.getElementById("staff").addEventListener("click", () => {
        window.location.href = "/register-staff";
      });
      document.getElementById("admin").addEventListener("click", () => {
        window.location.href = "/register-admin";
      });
    }, 0);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      Swal.fire(
        "Logged out",
        "You have been successfully logged out",
        "success"
      );
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Unable to log out. Please try again.", "error");
    }
  };

  return (
    <div>
      <Navbar fluid rounded className="h-20 bg-gray-200 pt-5">
        <Navbar.Brand href="#">
          <img
            src="/logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Alliance Hospital Limited
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {!user ? (
            <div className="flex gap-4">
              <NavLink
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                to={"/login"}
              >
                LOGIN
              </NavLink>
              <button
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                onClick={handleRegisterClick}
              >
                REGISTER
              </button>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Avatar
                alt={user?.displayName || "User"}
                img={user?.photoURL}
                rounded
              />
              <button
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
          <Navbar.Toggle />
        </div>

      </Navbar>
    </div>
  );
};

export default Nav;
