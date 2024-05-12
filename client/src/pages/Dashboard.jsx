import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {!!user && <h2>Hey... {user.name} !</h2>}
      <h1 className="my-10">
        Hii , Your <span className="text-orange-600 font-mono">Dashboard</span>{" "}
      </h1>

      <h1 className="text-green-600 text-5xl font-black mt-20 pointer-events-none ">
        Click to Create Your Book{" "}
      </h1>

      <p className="mt-10">
        {" "}
        <Link
          className="text-white bg-blue-700 p-2 rounded-lg font-extrabold border hover:bg-blue-900 border-black"
          to="/register"
        >
          Book
        </Link>{" "}
      </p>
    </div>
  );
}
