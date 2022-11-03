import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const CounterSection = () => {
  return (
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
                          <strong className='number' ref={countUpRef}></strong>
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
                          <strong className='number' ref={countUpRef}></strong>
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
                          <strong className='number' ref={countUpRef}></strong>
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
                          <strong className='number' ref={countUpRef}></strong>
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
  );
};

export default CounterSection;
