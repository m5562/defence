import React, { useState } from "react";
import appLogo from "./../assets/consent.jpg";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate

  const handleSignin = () => {
    axios
      .post("http://localhost:5000/admin/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data?.error) {
          setError(res.data.error.msg);
        } else {
          navigate("/admin/dashboard");
        }
      })
      .catch((e) => {
        console.log(e.responce);
      });
  };
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="rounded-2xl border border-solid border-stone-300 w-[clamp(300px,90%,400px)]">
        <div className="flex flex-col p-4 items-center">
          <img src={appLogo} className="rounded-full mb-4 size-24" />
          <h1 className="mb-6 font-bold text-xl">Admin login</h1>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="username">E-mail</label>
            <input
              type="text"
              id="username"
              className="input"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              defaultValue={username}
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
            onClick={handleSignin}
          >
            Login
          </button>
          <div className="mt-4 text-sm text-red-500">
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
