import React from 'react'
import"./banner.css"
const Banner = () => {
    return (
        
            <div className="banner">
                <img src={require('../../images/banners/house.png')}  className="banner-img" />
                <img src={require('../../images/banners/shoes.png')}  className="banner-img" />


            </div>
        
    )
}



export default Banner;
