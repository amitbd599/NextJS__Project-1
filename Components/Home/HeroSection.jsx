import React from "react";
import { Slide } from "react-reveal";

const HeroSection = () => {
  return (
    <section
      className='hero-wrap'
      style={{
        backgroundImage: `url("../../Assets/img/FRD.jpg")`,
      }}
      data-stellar-background-ratio='0.5'
    >
      <div className='overlay'></div>
      <div className='container'>
        <div className='row no-gutters slider-text align-items-center'>
          <div className='col-md-8  d-flex align-items-end'>
            <Slide bottom>
              <div className='text w-100'>
                <h1 className='mb-4'>
                  Good books do not give up all their secrets at once
                </h1>
                <p className='mb-4'>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>

                <p>
                  <a href='#' className='btn btn-primary py-3 px-4'>
                    View All Books
                  </a>{" "}
                  <a href='#' className='btn btn-white py-3 px-4'>
                    Explore Now
                  </a>
                </p>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
