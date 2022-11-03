import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import ReactPaginate from "react-paginate";

const NewRelease = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 6;
  const pageCount = Math.ceil(data.length / itemPerPage);
  const pageInit = pageNumber * itemPerPage;
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setData(result.data);
    });
  }, []);

  const handelPageClick = async ({ selected }) => {
    setLoading(true);
    setPageNumber(selected);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const dataShapeOne = data
    .slice(pageInit, pageInit + itemPerPage)
    .map((item, index) => {
      return (
        <div key={index} class='col-md-6 col-lg-4 d-flex mt-3'>
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
              <Skeleton count={12} />
            </div>
          )}
        </div>
      );
    });
  const dataShapeTwo = data
    .slice(pageInit, pageInit + itemPerPage)
    .map((item, index) => {
      return (
        <div key={index} class='col-md-6 col-lg-4 d-flex mt-3'>
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
                  <span className='price'>$ {item?.price}</span>
                </p>
                <h2>
                  <a href='#'>{item?.title}</a>
                </h2>
                <span className='position'>{item?.category}</span>
              </div>
            </div>
          ) : (
            <div className='Skeleton mt-4'>
              <Skeleton count={11} />
            </div>
          )}
        </div>
      );
    });
  return (
    <section className='ftco-section ftco-no-pt'>
      <div className='container-fluid px-md-4'>
        <div className='row justify-content-center pb-5 mb-3'>
          <div className='col-md-7 heading-section text-center '>
            <span className='subheading'>Books</span>
            <h2>New Release</h2>
          </div>
        </div>
        <div className='row'>
          {dataShapeOne.slice(0, 3)}
          {dataShapeTwo.slice(3, 6)}
        </div>

        <div className='row'>
          <div className='col'>
            <div className='pagination'>
              <ReactPaginate
                className=''
                previousLabel='<'
                nextLabel='>'
                breakLabel='. . .'
                pageCount={pageCount}
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
  );
};

export default NewRelease;
