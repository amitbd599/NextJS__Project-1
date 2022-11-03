import React from "react";
import Slider from "react-slick";

const TestimonySection = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className='ftco-section testimony-section ftco-no-pb'>
      <div
        className='img img-bg border'
        style={{
          backgroundImage: `url("../../Assets/img/xbg_4.jpg.pagespeed.ic.Warq8UN9la.jpg")`,
        }}
      ></div>
      <div className='overlay'></div>
      <div className='container'>
        <div className='row justify-content-center mb-3'>
          <div className='col-md-7 text-center heading-section heading-section-white '>
            <span className='subheading'>Testimonial</span>
            <h2 className='mb-3'>Kinds Words From Clients</h2>
          </div>
        </div>
        <div className='row '>
          <div className='col-md-12'>
            <Slider {...settings}>
              <div className='item px-2 '>
                <div className='testimony-wrap py-4'>
                  <div className='icon d-flex align-items-center justify-content-center'>
                    <span className='fa fa-quote-left' />
                  </div>
                  <div className='text'>
                    <p className='mb-4'>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className='d-flex align-items-center'>
                      <div
                        className='user-img'
                        style={{
                          backgroundImage: `url("../../Assets/img/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg")`,
                        }}
                      ></div>
                      <div className='pl-3'>
                        <p className='name'>Roger Scott</p>
                        <span className='position'>Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item px-2'>
                <div className='testimony-wrap py-4'>
                  <div className='icon d-flex align-items-center justify-content-center'>
                    <span className='fa fa-quote-left' />
                  </div>
                  <div className='text'>
                    <p className='mb-4'>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className='d-flex align-items-center'>
                      <div
                        className='user-img'
                        style={{
                          backgroundImage: `url("../../Assets/img/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg")`,
                        }}
                      ></div>
                      <div className='pl-3'>
                        <p className='name'>Roger Scott</p>
                        <span className='position'>Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item px-2'>
                <div className='testimony-wrap py-4'>
                  <div className='icon d-flex align-items-center justify-content-center'>
                    <span className='fa fa-quote-left' />
                  </div>
                  <div className='text'>
                    <p className='mb-4'>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className='d-flex align-items-center'>
                      <div
                        className='user-img'
                        style={{
                          backgroundImage: `url("../../Assets/img/person_3.jpg")`,
                        }}
                      ></div>
                      <div className='pl-3'>
                        <p className='name'>Roger Scott</p>
                        <span className='position'>Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item px-2'>
                <div className='testimony-wrap py-4'>
                  <div className='icon d-flex align-items-center justify-content-center'>
                    <span className='fa fa-quote-left' />
                  </div>
                  <div className='text'>
                    <p className='mb-4'>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className='d-flex align-items-center'>
                      <div
                        className='user-img'
                        style={{
                          backgroundImage: `url("../../Assets/img/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg")`,
                        }}
                      ></div>
                      <div
                        className='user-img'
                        style={{
                          backgroundImage: `url(images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)`,
                        }}
                      ></div>
                      <div className='pl-3'>
                        <p className='name'>Roger Scott</p>
                        <span className='position'>Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item px-2'>
                <div className='testimony-wrap py-4'>
                  <div className='icon d-flex align-items-center justify-content-center'>
                    <span className='fa fa-quote-left' />
                  </div>
                  <div className='text'>
                    <p className='mb-4'>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className='d-flex align-items-center'>
                      <div
                        className='user-img'
                        style={{
                          backgroundImage: `url("../../Assets/img/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg")`,
                        }}
                      ></div>
                      <div className='pl-3'>
                        <p className='name'>Roger Scott</p>
                        <span className='position'>Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
