import React from "react";
import { Slide } from "react-reveal";
const AuthorsSection = () => {
  return (
    <section className='ftco-section'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-md-6 img img-3 d-flex justify-content-center align-items-center'
            style={{
              backgroundImage: `url("../../Assets/img/xabout-1.jpg.pagespeed.ic.EXhrSjRLu-.jpg")`,
            }}
          ></div>
          <div className='col-md-6 wrap-about pl-md-5  py-5'>
            <div className='heading-section'>
              <Slide bottom>
                <span className='subheading'>
                  Welcome To Publishing Company
                </span>
              </Slide>
              <Slide bottom>
                {" "}
                <h2 className='mb-4'>Publishing Company Created By Authors</h2>
              </Slide>

              <Slide bottom>
                {" "}
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </Slide>
              <Slide bottom>
                {" "}
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word and the Little Blind Text should turn around
                  and return to its own, safe country.
                </p>
              </Slide>
              <Slide bottom>
                {" "}
                <a href='#' className='btn btn-primary'>
                  View All Our Authors
                </a>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;
