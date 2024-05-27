import React, { useState } from "react";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [allStudents, setallStudents] = useState([]);

  const submitUser = (e) => {
    let student = { userName, password };
    setallStudents([...allStudents, student]);
    console.log(student);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 mx-auto">
            <h1 className="text-center shadow">Login Students</h1>
            <input
              type="text"
              className="form-control form-control-lg my-2"
              placeholder="Username"
              onChange={(e) => setuserName(e.target.value)}
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            {/* <label htmlFor="">
                    Gender:
                    </label>
                    <select className='form-select form-select-lg'>
                      <option value="1">Select Gender</option>
                      <option value="2">Male</option>
                      <option value="3">Female</option>
                    </select> */}

            <button
              onClick={submitUser}
              className="btn btn-outline-success w-100 rounded-5 p-2 mb-5"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center bg-success">Student that have logged in</h2>
        {allStudents.length == 0 ? (
          <h3 className="text-center text-white bg-danger">
            No students logged in right now
          </h3>
        ) : (
          <h3 className="text-center text-white bg-success ">
            Students logged in
          </h3>
        )}
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.userName}</td>
              <td>{student.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Login;
