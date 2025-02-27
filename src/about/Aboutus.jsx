import React from 'react';
import Slider from 'react-slick';
import './Aboutus.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutPage = () => {
  const settings = {
    dots: true, // Shows the dots for navigation
    infinite: true, // Infinite scrolling of slides
    speed: 500, // Speed of the transition between slides
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // Sets autoplay speed (in milliseconds)
    pauseOnHover: true, // Pauses autoplay when hovering over the slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Array of images and descriptions for the slides
  const slidesData = [
    {
      image: 'https://info.aec.edu.in/ACET/StudentPhotos/22P31A0424.jpg',
      title: 'Thub ',
      subtitle: 'Iship-2',
      name:'Sudheer',
      description: `This is the description for slide 1. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus 
        ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis 
        sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris 
        massa. Vestibulum lacinia arcu eget nulla.`,
    },
    {
      image: 'https://info.aec.edu.in/ACET/StudentPhotos/22P31A0464.jpg',
      title: 'Thub ',
      subtitle: 'Iship-2',
      name:'Venu',
      description: `This is the description for slide 2. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus 
        ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis 
        sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.`,
    },
    {
      image: 'https://info.aec.edu.in/ACET/StudentPhotos/22P31A0407.jpg',
      title: 'Thub ',
      subtitle: 'Iship-2',
      name:'Manikanta',
      description: `This is the description for slide 3. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus 
        ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis 
        sagittis ipsum. Praesent mauris.`,
    },
    {
      image: 'https://info.aec.edu.in/ACET/StudentPhotos/22P31A4223.jpg',
      title: 'Thub ',
      subtitle: 'Iship-2',
      name:'Sandhya',
      description: `The provided React component represents a login and signup interface 
                    with added functionality for circle and image decorations. The Login
                    component contains a layout with multiple circular elements, creating 
                    a visual design featuring images related to healthcare and blood 
                    donation. The form allows users to switch between login and signup
                    modes, handled by a boolean state variable, isLogin. The login form
                    collects email and password, while the signup form additionally 
                    collects name and roll number. It includes validation functions
                    to ensure the password contains an uppercase letter, a number, and
                    a special character, while email validation checks that the address
                    ends with "@gmail.com". Error messages are displayed when validation
                    fails or an API request encounters issues. The form uses Axios to send
                    requests to a backend server for authentication. Additionally, there's
                    a duplicate set of circle and image decorations positioned in the 
                    bottom-right corner, enhancing the overall design.`,
    },
    {
      image: 'https://info.aec.edu.in/ACET/StudentPhotos/23P35A0411.jpg',
      title: 'Thub ',
      subtitle: 'Iship-2',
      name:'Tanuja',
      description: `This is the description for slide 3. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus 
        ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis 
        sagittis ipsum. Praesent mauris.`,
    },
    {
      image: 'https://info.aec.edu.in/ACET/StudentPhotos/23P35A0412.jpg',
      title: 'Thub ',
      subtitle: 'Iship-2',
      name:'Parimala',
      description: `This is the description for slide 3. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus 
        ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis 
        sagittis ipsum. Praesent mauris.`,
    },
  ];

  return (
    <div className="about-container">
      {/* About Us Header */}
      <div className="about-header">
        <h1>About Us</h1>
      </div>

      {/* Slider Section */}
      <div className="slide">
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div className="slide-content" key={index}>
              <div className="side1">
                <div className="title">
                  <h1>{slide.title}</h1>
                  <h2>{slide.subtitle}</h2>
                </div>
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
              <div className="side2">
                <div className='name'>
                <h1>{slide.name}</h1>
                </div>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutPage;
