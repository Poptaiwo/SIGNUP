import React, { useState } from 'react'

const Portal = () => {

   const [firstname, setFirstname] = useState("")
   const [allStudents, setallStudents] = useState([])

   const signUp = () =>{
    console.log(firstname);
     let student = {firstname}
     setallStudents([...allStudents,student]) 
    //  console.log(info.firstname);
   }

   const deleteStudents = (userIndex) =>{
    let newStudents = [...allStudents]
    newStudents.splice(userIndex,1)
    setallStudents(newStudents)
    console.log(newStudents);
   }

    
  return (
    <div>
    <h1>Student Portal</h1>
    {/* <div>
        {student}
    </div> */}
    <input type="text" placeholder='firstname' onChange={(e)=>setFirstname(e.target.value)}/>
    <button onClick={signUp}>Sign Up</button>

    {
        allStudents.map((student,index)=>(
            <div key={index}>
                <h2 className='bg-danger text-white shadow m-2 border rounded-3 text-center p-2 m-2'><span>{index +1}.</span> {student.firstname}  <br /><button className='btn btn-outline-success rounded-5 bg-primary text-white'>Edit name</button><button onClick={deleteStudents} className='btn btn-outline-yellow rounded-5 m-3 p-2 bg-secondary text-white'>Delete</button></h2> 
            </div>
        ))
    }
    </div>

  )
}

export default Portal