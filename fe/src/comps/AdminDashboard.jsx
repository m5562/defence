import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate()
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/admin/getAll").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <div className="flex justify-between px-4 items-center mb-8">
        <h1 className="font-bold text-center text-2xl ">
          wellcome to Admin
        </h1>
        <button
          className="bg-blue-gem-500 mt-2 px-4 py-2 rounded-md font-bold text-blue-gem-50"
          onClick={() => navigate("/")}
        >
          logout
        </button>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, ind) => {
            // console.log(item);
            return (
              <tr key={ind} className="text-center">
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.gen}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
