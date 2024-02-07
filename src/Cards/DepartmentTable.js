import React, { useContext, useEffect, useState } from 'react'
import { allDepartmentApi } from '../services/allAPI';
import Card from 'react-bootstrap/Card';
import { addDepartmentResponseContext } from '../Context/ContextShare';

function DepartmentTable() {


const {addDepartmentResponse,setAddDepartmentResponse} =useContext(addDepartmentResponseContext)

  const [departmentData, setDepartmentData] = useState([])

  const getAllDepartment = async () => {
      const result = await allDepartmentApi()
      console.log(result);
      setDepartmentData(result.data)
  }

  useEffect(() => {
    getAllDepartment()
}, [addDepartmentResponse])


  return (
    <div>
       <div className='m-5 p-5 d-flex justify-content-center  align-items-center text-light '>
          
          { departmentData?.length>0?
          departmentData?.map((item)=>(
            <Card className='m-4 ' style={{ width: '18rem' ,height:'300px'}}>
    <Card.Img variant="top" style={{height:'200px'}} src={item.logo} />
    <Card.Body>
      <Card.Title>{item.departmentName}</Card.Title>
      <Card.Text>
      {item.details}
      </Card.Text>
    </Card.Body>
  </Card>
                ))
              : <p>null</p>  
              }
               
               
             
      </div>
    </div>
  )
}

export default DepartmentTable