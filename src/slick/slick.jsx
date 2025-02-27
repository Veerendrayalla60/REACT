import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function slick() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000
      };
      return (
        <div>
          <Slider {...settings}>
            <div >
                <div style={{width:"100%",height:"500px",backgroundColor:"red"}}>1
                    <img src="vite.svg" alt="" width="100%" height="100%"/>
                </div>
            </div>
            <div>
                <div style={{width:"100%",height:"500px",backgroundColor:"blue"}}>2</div>
            </div>
            <div>
                <div style={{width:"100%",height:"500px",backgroundColor:"green"}}>3</div>
            </div>
            <div>
                <div style={{width:"100%",height:"500px",backgroundColor:"orange"}}>4</div>
            </div>
            <div>
                <div style={{width:"100%",height:"500px",backgroundColor:"pink"}}>5</div>
            </div>
          </Slider>
        </div>
      );
}

export default slick