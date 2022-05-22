import React from 'react'
import '../styles.css'
import img from '../pictures/agents/image.png'



const Agents = () => {
  return (
    <div className='Agents'>
      <div className="Title">
            <h3>
            EXPERTIES IS HERE
            </h3>
            <h1>
            Our Exclusive Agents
            </h1>
      </div>
      <div className="Targets">
         <div className="Target">
             <div className="img">
                 <h4>
                 <li></li> 08 Listing
                 </h4>
                 <img src={img} alt="" />
             </div>

             <h2>Sarah Boysen</h2>
             <h4>Sweet Home</h4>
             <div className="number">
             <i class="fa-solid fa-phone"></i>
             <h5>
             Call: +121 511 4522
             </h5>
             </div>
         </div>

         <div className="Target">
             <div className="img">
                 <h4>
                 <li></li> 08 Listing
                 </h4>
                 <img src={img} alt="" />
             </div>

             <h2>Sarah Boysen</h2>
             <h4>Sweet Home</h4>
             <div className="number">
             <i class="fa-solid fa-phone"></i>
             <h5>
             Call: +121 511 4522
             </h5>
             </div>
         </div>


         <div className="Target">
             <div className="img">
                 <h4>
                 <li></li> 08 Listing
                 </h4>
                 <img src={img} alt="" />
             </div>

             <h2>Sarah Boysen</h2>
             <h4>Sweet Home</h4>
             <div className="number">
             <i class="fa-solid fa-phone"></i>
             <h5>
             Call: +121 511 4522
             </h5>
             </div>
         </div>

         </div>
    </div>
  )
}

export default Agents