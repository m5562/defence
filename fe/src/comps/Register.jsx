import React, { useEffect, useState } from "react";
import appLogo from "./../assets/consent.jpg";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const data = JSON.parse(localStorage.getItem("user"))

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("")
  const [gen, setGen] = useState("S")
  const navigate = useNavigate()


  useEffect(() => {
    console.log(data);
    if (data?.email) {
      navigate("/content")
    }
  }, [])

  const handleSignUp = () => {
    axios.post("http://localhost:5000/register", {
      name, email, password, dob, gen
    }).then((res) => {
      if (res.data?.error) {
        console.log(res.data)
      } else {
        localStorage.setItem("user", JSON.stringify(res.data))
        navigate("/content")
      }
    }
    )
  };



  return (
    < div className="flex items-center justify-center h-dvh" >
      <div className="rounded-2xl border border-solid border-stone-300 w-[clamp(300px,90%,400px)]">
        <div className="flex flex-col p-4 items-center">
          <img src={appLogo} className="rounded-full mb-4 size-24" />
          <h1 className="mb-6 font-bold text-xl">Sign up for Mysitename</h1>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="input"
              onChange={(e) => {
                setName(e.target.value);
              }}
              defaultValue={name}
            />
          </div>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              className="input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              defaultValue={email}
            />
          </div>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="gen">Gender</label>
            <select onChange={(e) => { setGen(e.target.value) }} defaultValue={gen} id="gen" className="input">
              <option value="S" disabled={true}>Select gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="dob">DOB</label>
            <input
              type="date"
              id="dob"
              className="input"
              onChange={(e) => {
                setDob(e.target.value);
              }}
              defaultValue={dob}
            />
          </div>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              defaultValue={password}
            />
          </div>
          <button
            className="bg-blue-gem-500 w-full px-4 py-2 rounded-md font-bold text-blue-gem-50"
            onClick={handleSignUp}
          >
            Create account
          </button>
        </div>
      </div>
    </div >
  );
};
export default Register;
