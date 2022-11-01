import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Slide from "react-reveal/Slide";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import ReactPaginate from "react-paginate";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  const BaseURL = "https://product-amitjs.herokuapp.com/api/v1/LoadData";
  const [row, setRow] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get(BaseURL + "/1").then((result) => {
      setRow(result.data[0]["Row"]);
      setTotal(result.data[0]["Total"][0]["count"]);
    });
  }, []);

  const handelPageClick = async (event) => {
    setLoading(true);
    axios.get(BaseURL + "/" + (event.selected + 1)).then((result) => {
      setRow(result.data[0]["Row"]);
      setTotal(result.data[0]["Total"][0]["count"]);
      setLoading(false);
    });
  };
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <Header />

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
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
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
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
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
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
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
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
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
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>{" "}
              </Slide>
            </div>
          </div>
        </div>
      </section>
      <section
        className='ftco-counter ftco-section ftco-no-pt ftco-no-pb img bg-light'
        id='section-counter'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-3 justify-content-center counter-wrap '>
              <div className='block-18 py-4 mb-4'>
                <div className='text align-items-center'>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      isVisible && (
                        <CountUp start={0} end={75678} delay={0}>
                          {({ countUpRef }) => (
                            <strong
                              className='number'
                              ref={countUpRef}
                            ></strong>
                          )}
                        </CountUp>
                      )
                    }
                  </TrackVisibility>
                  <span>Active Readers</span>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 justify-content-center counter-wrap '>
              <div className='block-18 py-4 mb-4'>
                <div className='text align-items-center'>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      isVisible && (
                        <CountUp start={0} end={3040} delay={0}>
                          {({ countUpRef }) => (
                            <strong
                              className='number'
                              ref={countUpRef}
                            ></strong>
                          )}
                        </CountUp>
                      )
                    }
                  </TrackVisibility>
                  <span>Total Pages</span>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 justify-content-center counter-wrap '>
              <div className='block-18 py-4 mb-4'>
                <div className='text align-items-center'>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      isVisible && (
                        <CountUp start={0} end={283} delay={0}>
                          {({ countUpRef }) => (
                            <strong
                              className='number'
                              ref={countUpRef}
                            ></strong>
                          )}
                        </CountUp>
                      )
                    }
                  </TrackVisibility>
                  <span>Cup Of Coffee</span>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 justify-content-center counter-wrap '>
              <div className='block-18 py-4 mb-4'>
                <div className='text align-items-center'>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      isVisible && (
                        <CountUp start={0} end={14500} delay={0}>
                          {({ countUpRef }) => (
                            <strong
                              className='number'
                              ref={countUpRef}
                            ></strong>
                          )}
                        </CountUp>
                      )
                    }
                  </TrackVisibility>
                  <span>Facebook Fans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  <h2 className='mb-4'>
                    Publishing Company Created By Authors
                  </h2>
                </Slide>

                <Slide bottom>
                  {" "}
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </Slide>
                <Slide bottom>
                  {" "}
                  <p>
                    On her way she met a copy. The copy warned the Little Blind
                    Text, that where it came from it would have been rewritten a
                    thousand times and everything that was left from its origin
                    would be the word and the Little Blind Text should turn
                    around and return to its own, safe country.
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
      <section className='ftco-section ftco-no-pt'>
        <div className='container-fluid px-md-4'>
          <div className='row justify-content-center pb-5 mb-3'>
            <div className='col-md-7 heading-section text-center '>
              <span className='subheading'>Books</span>
              <h2>New Release</h2>
            </div>
          </div>
          <div className='row'>
            {row.slice(0, 3).map((item, index) => (
              <div key={index} className='col-md-6 col-lg-4 d-flex'>
                {loading === false ? (
                  <div className='book-wrap d-lg-flex'>
                    <div
                      className='img d-flex justify-content-end'
                      style={{
                        backgroundImage: `url("${item?.image}")`,
                      }}
                    >
                      <div className='in-text'>
                        <a
                          href='#'
                          className='icon d-flex align-items-center justify-content-center'
                          data-toggle='tooltip'
                          data-placement='left'
                          title='Add to cart'
                        >
                          <span className='flaticon-shopping-cart'></span>
                        </a>
                        <a
                          href='#'
                          className='icon d-flex align-items-center justify-content-center'
                          data-toggle='tooltip'
                          data-placement='left'
                          title='Add to Wishlist'
                        >
                          <span className='flaticon-heart-1'></span>
                        </a>
                        <a
                          href='#'
                          className='icon d-flex align-items-center justify-content-center'
                          data-toggle='tooltip'
                          data-placement='left'
                          title='Quick View'
                        >
                          <span className='flaticon-search'></span>
                        </a>
                        <a
                          href='#'
                          className='icon d-flex align-items-center justify-content-center'
                          data-toggle='tooltip'
                          data-placement='left'
                          title='Compare'
                        >
                          <span className='flaticon-visibility'></span>
                        </a>
                      </div>
                    </div>
                    <div className='text p-4'>
                      <p className='mb-2'>
                        <span className='price'>$ {item?.price}</span>
                      </p>
                      <h2>
                        <a href='#'>{item?.title}</a>
                      </h2>
                      <span className='position'>{item?.category}</span>
                    </div>
                  </div>
                ) : (
                  <div className='Skeleton'>
                    <Skeleton count={13} />
                  </div>
                )}
              </div>
            ))}
            {row.slice(3, 6).map((item, index) => (
              <div key={index} class='col-md-6 col-lg-4 d-flex'>
                {loading === false ? (
                  <div class='book-wrap d-lg-flex'>
                    <div
                      class='img d-flex justify-content-end'
                      style={{
                        backgroundImage: `url("${item?.image}")`,
                      }}
                    >
                      <div class='in-text'>
                        <a
                          href='#'
                          class='icon d-flex align-items-center justify-content-center'
                          data-toggle='tooltip'
                          data-placement='left'
                          title='Add to cart'
                        >
                          <span class='flaticon-shopping-cart'></span>
                        </a>
                        <a
                          href='#'
                          class='icon d-flex align-items-center justify-content-center'
                          data-toggle='tooltip'
                          data-placement='left'
                          title='Add to Wishlist'
                        >
                          <span class='flaticon-heart-1'></span>
                        </a>
                        <a
                          href='#'
                          class='icon d-flex align-items-center justify-content-center'
                          data-toggle='tooltip'
                          data-placement='left'
                          title='Quick View'
                        >
                          <span class='flaticon-search'></span>
                        </a>
                        <a
                          href='#'
                          class='icon d-flex align-items-center justify-content-center'
                          data-toggle='tooltip'
                          data-placement='left'
                          title='Compare'
                        >
                          <span class='flaticon-visibility'></span>
                        </a>
                      </div>
                    </div>
                    <div class='text p-4 order-md-first'>
                      <p class='mb-2'>
                        <span class='price'>$9.00</span>
                      </p>
                      <h2>
                        <a href='#'>All The Letters I Should Have Sent</a>
                      </h2>
                      <span class='position'>By John Nathan Muller</span>
                    </div>
                  </div>
                ) : (
                  <div className='Skeleton mt-4'>
                    <Skeleton count={13} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='row'>
            <div className='col'>
              <div className='pagination'>
                <ReactPaginate
                  className=''
                  previousLabel='<'
                  nextLabel='>'
                  breakLabel='. . .'
                  pageCount={total / 6}
                  pageRangeDisplayed={3}
                  renderOnZeroPageCount={null}
                  activeClassName='active   bg-[#A855F7] rounded-full'
                  onPageChange={handelPageClick}
                  type='button'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
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
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
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
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
