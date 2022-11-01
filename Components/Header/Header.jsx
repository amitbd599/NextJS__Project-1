import {
  FaDribbble,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <menu>
        <div className='container-fluid px-md-5  pt-4 pt-md-5'>
          <div className='row justify-content-between'>
            <div className='col-md-8 order-md-last'>
              <div className='row'>
                <div className='col-md-6 text-center'>
                  <a className='navbar-brand' href='index-2.html'>
                    Publishing10101010 <span>Company</span>{" "}
                    <small>Book Publishing Company</small>
                  </a>
                </div>
                <div className='col-md-6 d-md-flex justify-content-end mb-md-0 mb-3'>
                  <form action='#' className='searchform order-lg-last'>
                    <div className='form-group d-flex'>
                      <input
                        type='text'
                        className='form-control pl-3'
                        placeholder='Search'
                      />
                      <button
                        type='submit'
                        placeholder=''
                        className='form-control search'
                      >
                        <span className='fa fa-search'>
                          <FaSearch />{" "}
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-md-4 d-flex'>
              <div className='social-media'>
                <p className='mb-0 d-flex'>
                  <a
                    href='#'
                    className='d-flex align-items-center justify-content-center'
                  >
                    <span className='fa fa-facebook'>
                      <FaFacebookF />
                    </span>
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center justify-content-center'
                  >
                    <span className='fa fa-twitter'>
                      <FaTwitter />
                    </span>
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center justify-content-center'
                  >
                    <span className='fa fa-instagram'>
                      <FaInstagram />
                    </span>
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center justify-content-center'
                  >
                    <span className='fa fa-dribbble'>
                      <FaDribbble />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav
          className='navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light'
          id='ftco-navbar'
        >
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#ftco-nav'
              aria-controls='ftco-nav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='fa fa-bars'></span> Menu
            </button>
            <div className='collapse navbar-collapse' id='ftco-nav'>
              <ul className='navbar-nav m-auto'>
                <li className='nav-item active'>
                  <a href='index-2.html' className='nav-link'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='about.html' className='nav-link'>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='coming-soon.html' className='nav-link'>
                    Coming Soon
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='top-seller.html' className='nav-link'>
                    Top Seller
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='book.html' className='nav-link'>
                    Books
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='author.html' className='nav-link'>
                    Author
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='blog.html' className='nav-link'>
                    Blog
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='contact.html' className='nav-link'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>{" "}
      </menu>
    </header>
  );
};

export default Header;
