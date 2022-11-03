import React from "react";
import { Slide } from "react-reveal";
const BlogSection = () => {
  return (
    <section className='ftco-section mt-4'>
      <div className='container'>
        <div className='row justify-content-center mb-5'>
          <div className='col-md-7 heading-section text-center '>
            <span className='subheading'>Blog</span>
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-md-4 d-flex '>
            <Slide bottom>
              <div className='blog-entry justify-content-end'>
                <div className='text text-center'>
                  <a
                    href='blog-single.html'
                    className='block-20 img'
                    style={{
                      backgroundImage: `url("../../Assets/img/ximage_1.jpg.pagespeed.ic.Yc6gAsaZ2Y.jpg")`,
                    }}
                  ></a>
                  <div className='meta text-center mb-2 d-flex align-items-center justify-content-center'>
                    <div>
                      <span className='day'>02</span>
                      <span className='mos'>May</span>
                      <span className='yr'>2020</span>
                    </div>
                  </div>
                  <h3 className='heading mb-3'>
                    <a href='#'>New Friends With Books</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </Slide>
          </div>
          <div className='col-md-4 d-flex '>
            <Slide bottom>
              <div className='blog-entry justify-content-end'>
                <div className='text text-center'>
                  <a
                    href='blog-single.html'
                    className='block-20 img'
                    style={{
                      backgroundImage: `url("../../Assets/img/ximage_2.jpg.pagespeed.ic.mQGyn1P_Li.jpg")`,
                    }}
                  ></a>
                  <div className='meta text-center mb-2 d-flex align-items-center justify-content-center'>
                    <div>
                      <span className='day'>02</span>
                      <span className='mos'>May</span>
                      <span className='yr'>2020</span>
                    </div>
                  </div>
                  <h3 className='heading mb-3'>
                    <a href='#'>New Friends With Books</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </Slide>
          </div>
          <div className='col-md-4 d-flex '>
            <Slide bottom>
              <div className='blog-entry justify-content-end'>
                <div className='text text-center'>
                  <a
                    href='blog-single.html'
                    className='block-20 img'
                    style={{
                      backgroundImage: `url("../../Assets/img/ximage_3.jpg.pagespeed.ic.CWHmT1gFhf.jpg")`,
                    }}
                  ></a>
                  <div className='meta text-center mb-2 d-flex align-items-center justify-content-center'>
                    <div>
                      <span className='day'>02</span>
                      <span className='mos'>May</span>
                      <span className='yr'>2020</span>
                    </div>
                  </div>
                  <h3 className='heading mb-3'>
                    <a href='#'>New Friends With Books</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
