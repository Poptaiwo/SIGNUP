import React, { useState } from "react";

const Reg = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [allStudents, setallStudents] = useState([]);

  const signUp = () => {
    let student = { firstname, lastname, email, password };
    setallStudents([...allStudents, student]);
    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 mx-auto shadow-sm">
            <h1 className="text-center text-info">Student Portal</h1>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Firstname"
              onChange={(e) => setfirstname(e.target.value)}
              value={firstname}
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Lastname"
              onChange={(e) => setlastname(e.target.value)}
              value={lastname}
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
            <button onClick={signUp} className="btn btn-info w-100 my-2">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="shadow bg-info text-outline-success text-center">
          List of students
        </h1>
        {allStudents.length == 0 ? (
          <h4 className="bg-danger shadow text-center">
            Students not available
          </h4>
        ) : (
          <h4 className="bg-info shadow text-center">Students available</h4>
        )}
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {allStudents.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.email}</td>
              <td>{student.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Reg;
