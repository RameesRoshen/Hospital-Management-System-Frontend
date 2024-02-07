import React from 'react'
import homebg from '../images/0f03c9452981395f0062a9bf1211bb76.jpg'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import DoctorCard from '../Cards/DoctorCard';
import Header from './Header';
import Footer from './Footer';


function Home() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
   <>
   <Header />
        <div  style={{ backgroundImage: `linear-gradient(rgba(33, 11, 11, 0.7), rgba(0, 0, 0, 0.7)), url(${homebg})`,backgroundSize:'cover',backgroundPosition:'center', width:'100%' , height:'700px' }}>
           <div className='text-light   ' style={{paddingTop:'300px' ,marginLeft:'120px' ,width:'500px'}}>
            <h2>Making Health</h2>
            <h2>Care Better Together</h2>
            <p>Also you dry creeping beast multiply fourth abundantly our itself signs bring our .Won form living .Whose dry you seasons divide given gathering great in whose you'ill greather let livein form beast sinthete better together these place absosolute right</p>
            <Link to={`/login`} className='btn btn-info rounded  me-3 fw-bold'>Make an Appointment</Link>
            <Link to={`/departmentdetails`} className='btn   border-light  rounded  fw-bolder '>View Department</Link>
           </div>
        </div>

        {/* Departments */}
        {/* <div id='department' className="container " style={{width:'100%' , height:'700px'}}>
          <div className="row d-flex">
            <div className="col-lg-3  text-light d-flex flex-column justify-content-center align-items-center  ">
              <h1 className=''>Our Departments</h1>
              <p>To undertake specialized and holistic healthcare services and to provide them to all sections....</p>
            </div>
    
            <div className="col-lg-9">
            
            <div className='m-5 p-3 d-flex justify-content-center  align-items-center text-light '>
          <table style={{ width: '100%'}}>
          <tr>
            <td className='p-5' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' ,textAlign: 'center' }}> <i class="fa-solid fa-dna pb-2"  style={{ fontSize: '80px' }} ></i>
            <h4>Forensic medicine and toxicology</h4>
<p>Ever since the health care rendered by private hospitals</p></td>
            <td className='p-5' style={{ borderBottom: '1px solid #ddd'  ,textAlign: 'center' }}>
            <i class="fa-solid fa-dna pb-2"  style={{ fontSize: '80px' }} ></i>
                <h4>Forensic medicine and toxicology</h4>
<p>Ever since the health care rendered by private hospitals</p></td>

            
              </tr>
              <tr>
            <td className='p-5' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' ,textAlign: 'center' }}> <i class="fa-solid fa-dna pb-2"  style={{ fontSize: '80px' }} ></i>
            <h4>Forensic medicine and toxicology</h4>
<p>Ever since the health care rendered by private hospitals</p></td>
            <td className='p-5' style={{ borderBottom: '1px solid #ddd'  ,textAlign: 'center' }}>
            <i class="fa-solid fa-dna pb-2"  style={{ fontSize: '80px' }} ></i>
                <h4>Forensic medicine and toxicology</h4>
<p>Ever since the health care rendered by private hospitals</p></td>

            
              </tr>
            </table>
            </div>
            <div className=' text-end  mt-5'>
            <Link to={''} className=' text-light ' style={{textDecoration:'none'}}>View All Services 
            <Link to={`/department`} className='btn   border-light   rounded-3 ms-2  text-center  ' style={{height:'25px',width:'40px' ,paddingTop:'0px'}}><i class="fa-solid fa-greater-than"></i></Link></Link>
            
           
          </div>
            </div>
          </div>
         
        </div> */}


        {/* Doctors */}

        <div id='doctor' className=' ' style={{backgroundColor:"#eeeeee"}}>
          

        <h2 className='d-flex justify-content-center text-dark   align-items-center pt-5'>OUR DOCTORS</h2>
        
                <DoctorCard />
           
           </div>

           {/* About Us */}

           <div className="d-flex  align-items-center  justify-content-between">
      <div className=" ms-5 my-5">
        <h5 className='text-danger  fs-6 '>ABOUT US</h5>
        <h1 className='text-light fw-semibold  fs-2'>About The ABC Hospital</h1>
        <img className=' mt-3' style={{width:'500px'}} src=" https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" alt="" />
       
      </div>
      <div className='mx-3' style={{ borderLeft: '4px solid white', height: '510px' }}></div>
       <div className="me-3 d-flex  flex-column  align-items-center  justify-content-center text-light fs-5">
        <p>
          In the short span of its existence, ABC Hospital has created its niche on the 
          map of quality healthcare delivery in India by touching million lives.
          Having earned the trust and loyalty of patients through the compassion of its
          caregivers and high-precision medical technology, the institution has emerged as
          the leading quaternary care facility in the region. Backed up by more specialist units such as cardiology or coronary care, intensive care units, neurology, cancer center, and obstetrics and gynecology.
        </p>
        <Link  className="btn rounded bg-light text-dark " onClick={scrollToTop} >
          Explore <span className="arrow">{'>'}</span>
        </Link>
        
      </div>
    </div>
    <Footer />
        
   </>
  )
}

export default Home