import React, { useState } from 'react'

const Signup = () => {

    let allStudents = [
        {firstname: "taiwo", lastname:"idris",
            email: "pop@gmail.com"
         },
        {
            firstname: "raheem",
            lastname: "mariam",
            email: "raheem@gmail.com"
        },
        {
            firstname: "ola",
            lastname: "wale",
            email: "olawale@gmail.com"
        }
    ]

    const [count, setcount] = useState(1)

    function increase () {
        // setcount(count + 1)
        console.log(count);
    }

    function decrease() {
        setcount(count -1)
        if (count <= 0) {
            setcount(0)
        }
    }

  return (
    <> 
        
       <div className='shadow gap-3 p-3'>
       <h1 className='shadow text-center p-2 text-hover-success'>My Increaser/Decreaser</h1>

       <div className=''>

        <h2>{count}</h2>
       <button onClick={()=>setcount(count + 1)} className='btn btn-danger text-white m-2 btn-outline-success rounded-5 p-2'>Increase</button>
        <button onClick={decrease} type='button' className='btn btn-success rounded-5 p-2 m-2 btn-outline-danger text-white'>Decrease</button>

        <button className="btn btn-primary">
        <span className="spinner-border spinner-border-sm"></span>
        </button>
       </div>
       </div>

       {
        allStudents.map((students,index)=>(
            <div key={index}>
                <h2>{index + 1}</h2>
                <h1>{students.firstname} {students.lastname} {students.email}</h1>
            </div>
        ))
       }
    </>
  )
}

export default Signup