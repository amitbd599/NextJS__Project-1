import React from "react";
import { Slide } from "react-reveal";
const IntroSection = () => {
  return (
    <section className='ftco-section ftco-no-pt mt-5 mt-md-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 d-flex align-items-stretch '>
            <Slide bottom>
              <div className='services-2 text-center'>
                <div className='icon-wrap'>
                  <div className='icon d-flex align-items-center justify-content-center'>
                    <span className='flaticon-fantasy'></span>
                  </div>
                </div>
                <h2>
                  <a href='#'> Children Book</a>
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </Slide>
          </div>
          <div className='col-md-3 d-flex align-items-stretch '>
            <Slide bottom>
              <div className='services-2 text-center'>
                <div className='icon-wrap'>
                  <div className='icon d-flex align-items-center justify-content-center'>
                    <span className='flaticon-heart'></span>
                  </div>
                </div>
                <h2>
                  <a href='#'>Romance</a>
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </Slide>
          </div>
          <div className='col-md-3 d-flex align-items-stretch '>
            <Slide bottom>
              {" "}
              <div className='services-2 text-center'>
                <div className='icon-wrap'>
                  <div className='icon d-flex align-items-center justify-content-center'>
                    <span className='flaticon-model'></span>
                  </div>
                </div>
                <h2>
                  <a href='#'>Art &amp; Architecture</a>
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </Slide>
          </div>
          <div className='col-md-3 d-flex align-items-stretch '>
            <Slide bottom>
              <div className='services-2 text-center'>
                <div className='icon-wrap'>
                  <div className='icon d-flex align-items-center justify-content-center'>
                    <span className='flaticon-history'></span>
                  </div>
                </div>
                <h2>
                  <a href='#'>History</a>
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>{" "}
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
