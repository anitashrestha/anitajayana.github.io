import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at SiteSuite Australasia Pty Ltd <span>Apr 2018 – Jul 2018</span></h2>
                        <p>I have joined the SiteSuite Australasia Pty Ltd as a Junior IT Support for 3 months during my Professional year program. My major part of the work was to provide customer support regarding software, converting PSD into HTML template. During the internship, I was able to understand the working culture in an IT company in Australia. It helped me to build my communication skills and time management skills.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Postgraduation at Victoria University <span>2016-2017</span></h2>
                        <p>I am have completed my postgraduate degree with major in Information and Communication Technology. 
                           During my time at University, I was able to build computing skills as well as interpersonal through projects and research activities.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor of Computer Engineering at NCIT <span>2008-2012</span></h2>
                        <p>I have completed my undergraduate degree with major in Information and Communication Technology. This undergraduate program included subjects like 
                          OOPs, DSA, Computer Networks, Communication Technique. During this time, I have developed interest in computer science which helped me to understand integrated design of the hardware and software compopnents within computer system and also helped me to improve my programming skills.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
