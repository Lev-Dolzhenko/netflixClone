import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function NavBar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handelLogout = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-between absolute w-full items-center z-[100] p-4">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        {user?.email ? (
          <>
            <Link to="/login">
              <button className=" text-white pr-4 ">Account</button>
            </Link>
              <button onClick={handelLogout} className="bg-red-600 text-white rounded px-6 py-2 cursor-pointer ">
                Logout
              </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className=" text-white pr-4 ">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 text-white rounded px-6 py-2 cursor-pointer ">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
