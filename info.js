import React from 'react';
import "./App.css"

const InfoCard = ({info})=>{
    const goToExternalLink = () => {
        window.location.href = info.URL; // Navigates to an external link
      };
    console.log(info)
    return(
    <div className = "card">
        <div className='address'> 
          <p>{info.Address}</p>
        </div>
        <div className='price'> 
          <p>{info.Price}</p>
        </div>

        <div className='img'>
          <img src={info.ImageURL}/>
        </div>

        <button className="btn" onClick={goToExternalLink}>Visit Site</button>
        <div> 
          <p>Bathrooms: {info.Bathrooms}</p>
          <p>Bedrooms: {info.Bedroom}</p>
        </div>
      </div>
    )
}

export default InfoCard;