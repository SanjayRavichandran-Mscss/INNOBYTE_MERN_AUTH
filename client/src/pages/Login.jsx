import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful..!");
        toast.success("Welcome! to Student Book Store App...");
        navigate("/dashboard");
      }
    } catch (error) {}
  };

  return (
    <div className="mt-20">
      <form className="flex flex-col text-left p-5" onSubmit={loginUser}>
        <label>Email</label>
        <input
          className="mb-5 border-b border-gray-600 w-60 outline-none"
          type="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <label>Password</label>
        <input
          className="mb-5 border-b border-gray-600 w-60 outline-none"
          type="password"
          placeholder="Enter password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button
          className="my-5 p-2 border border-gray-600 rounded-full w-60 outline-none bg-slate-400 hover:bg-slate-500"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
