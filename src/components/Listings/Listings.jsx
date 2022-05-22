import React from 'react'
import '../styles.css'
import parking from '../pictures/listings/logos/parking.png'
import beds from '../pictures/listings/logos/beds.png'
import homes from '../pictures/listings/logos/homes.png'
import kids from '../pictures/listings/logos/kids.png'
import library from '../pictures/listings/logos/library.png'
import pool from '../pictures/listings/logos/pool.png'
import security from '../pictures/listings/logos/security.png'
import medical from '../pictures/listings/logos/medical.png'

const Listings = () => {
  return (
    <div className='Listings'>

        <div className="Titulo">
            <h3>
                PROPIETIES
            </h3>
            <h1>
                Featured Listings
            </h1>
        </div>

    <div className="Targets">
            <button className="Target">
                <div className="img">
                <img src={parking} alt="" className="logo" />
                </div>
                <h2 className="title">
                    Parking Space
                </h2>
            </button>



            <button className="Target">
            <div className="img">
                <img src={pool} alt="" className="logo" />
                </div>
                <h2 className="title">
                    Swimming Pool
                </h2>
            </button>



            <button className="Target">
                <div className="img">
                <img src={security} alt="" className="logo" />
                </div>
                <h2 className="title">
                    Privat Security
                </h2>
            </button>


        
            <button className="Target">
                <div className="img">
                <img src={medical} alt="" className="logo" />
                </div>
                <h2 className="title">
                    Medical Center
                </h2>
            </button>

        
            <button className="Target">
                <div className="img">
                <img src={library} alt="" className="logo" />
                </div>
                <h2 className="title">
                    Library Area
                </h2>
            </button>

        
            <button className="Target">
                <div className="img">
                <img src={beds} alt="" className="logo" />
                </div>
                <h2 className="title">
                    King Size Beds
                </h2>
            </button>



        
            <button className="Target">
                <div className="img">
                <img src={homes} alt="" className="logo" />
                </div>
                <h2 className="title">
                    Smart Homes
                </h2>
            </button>

       
            <button className="Target">
                <div className="img">
                <img src={kids} alt="" className="logo" />
                </div>
                <h2 className="title">
                    Kid´s Playland
                </h2>
            </button>


        </div>

    </div>
    
  )
}

export default Listings