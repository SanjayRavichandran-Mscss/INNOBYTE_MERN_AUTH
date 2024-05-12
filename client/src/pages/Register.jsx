import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    dept: "",
    mobile: "",
    dob: "",
    district: "",
    state: "",
    country: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      password,
      college,
      dept,
      mobile,
      dob,
      district,
      state,
      country,
    } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
        college,
        dept,
        mobile,
        dob,
        district,
        state,
        country,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Register Successful..!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col text-left px-8 text-sm"
        onSubmit={registerUser}
      >
        <label>Full Name</label>
        <input
          className="mb-3 border-b border-gray-600 w-60 outline-none"
          type="text"
          placeholder="Enter name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <label>Email</label>
        <input
          className="mb-3 border-b border-gray-600 w-60 outline-none"
          type="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <label>Password</label>
        <input
          className="mb-3 border-b border-gray-600 w-60 outline-none"
          type="password"
          placeholder="Enter password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <label>College</label>
        <input
          className="mb-3 border-b border-gray-600 w-60 outline-none"
          type="text"
          placeholder="Enter College name"
          value={data.college}
          onChange={(e) => setData({ ...data, college: e.target.value })}
        />

        <label>Department</label>
        <input
          className="mb-3 border-b border-gray-600 w-60 outline-none"
          type="text"
          placeholder="Enter Department name"
          value={data.dept}
          onChange={(e) => setData({ ...data, dept: e.target.value })}
        />

        <label>Mobile</label>
        <input
          className="mb-3 border-b border-gray-600 w-60 outline-none"
          type="Number"
          placeholder="Enter Mobile number"
          value={data.mobile}
          onChange={(e) => setData({ ...data, mobile: e.target.value })}
        />

        <label>Date-of-birth</label>
        <input
          className="mb-3 border-b border-gray-600 w-60 outline-none"
          type="text"
          placeholder="Enter Date of Birth"
          value={data.dob}
          onChange={(e) => setData({ ...data, dob: e.target.value })}
        />

        <label>district</label>
        <input
          className="mb-3 border-b border-gray-600 w-60 outline-none"
          type="text"
          placeholder="Enter District name"
          value={data.district}
          onChange={(e) => setData({ ...data, district: e.target.value })}
        />

        <label>State</label>
        <input
          className="mb-3 border-b border-gray-600 w-60 outline-none"
          type="text"
          placeholder="Enter State name"
          value={data.state}
          onChange={(e) => setData({ ...data, state: e.target.value })}
        />

        <label>Country</label>
        <input
          className="mb-3 border-b border-gray-600 w-60 outline-none"
          type="text"
          placeholder="Enter Country name"
          value={data.country}
          onChange={(e) => setData({ ...data, country: e.target.value })}
        />

        <button
          className="mt-1 p-2 border border-gray-600 rounded w-60 outline-none bg-slate-400 hover:bg-slate-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
