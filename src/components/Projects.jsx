import React from 'react'

const Projects = () => {
  return (
    <section id="projectsTag">
        <div className="row" style={{boxShadow: '0px 0px 20px var(--bs-black)', background: 'url("./img/4k_mkbhd_icons_template_@jus_georgex.png") center / cover, #27262e', paddingBottom: '12px', margin: '0px'}}>
          <div className="col-md-8 col-xl-6 text-center mx-auto" style={{height: '75px'}}>
            <h1 className="fw-bold"><span style={{color: 'rgb(25, 245, 170)'}}>My Work</span></h1>
            <p><strong>A snippet of what I've been working on recently.</strong></p>
          </div>
        </div>
        <div className="container" style={{paddingTop: '30px'}}>
          <div style={{padding: '30px'}}>
            <div className="row d-lg-flex align-items-lg-center row-cols-1 row-cols-md-2 d-flex justify-content-start" style={{borderRadius: '16px'}}>
              <div className="col" style={{padding: '0px', borderRadius: '16px', boxShadow: 'inset 0px 0px 0px rgb(0,0,0)'}}>
                <div style={{boxShadow: 'inset 0px 0px 20px rgb(0,0,0)', borderRadius: '16px', marginLeft: '20px', marginRight: '20px', marginBottom: '10px'}}>
                  <div className="card bg-info-light" data-aos="slide-right">
                    <div className="card-body text-center d-lg-flex flex-column align-self-center justify-content-lg-center align-items-lg-center px-4 py-5 px-md-5">
                      <h4 className="fw-bold text-info card-text mb-2">Andrew Kolasko Life Center PWA App</h4>
                      <h5 className="fw-bold card-title mb-3"><br />&lt;img soon&gt;</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" style={{borderRadius: '16px', padding: '30px', boxShadow: 'inset 0px 0px 20px rgb(0,0,0)'}}>
                <p className="fw-bold mb-3" style={{textAlign: 'justify'}}><span style={{fontWeight: 'normal !important'}}>I took over this project at the start of my Practicum. The App only had a login, profile page and some of the backend working at the time. I also had to finish it off in a very short deadline.&nbsp; This was a great challange that taught me so much about React and also backend in general as although I didn't build it from the beginning I had to quickly learn how it all worked together so I could continue its development.</span></p>
              </div>
            </div>
          </div>
          <div style={{padding: '30px'}}>
            <div className="row d-lg-flex align-items-lg-center row-cols-1 row-cols-md-2 d-flex justify-content-start" style={{borderRadius: '16px'}}>
              <div className="col" style={{padding: '0px', borderRadius: '16px'}}>
                <div style={{boxShadow: 'inset 0px 0px 20px rgb(0,0,0)', borderRadius: '16px', marginRight: '20px', marginLeft: '20px', marginBottom: '10px'}}>
                  <div className="card d-lg-flex justify-content-lg-center align-items-lg-center bg-primary-light" data-aos="slide-right">
                    <div className="card-body text-center d-flex d-md-flex d-lg-flex flex-column align-items-center align-self-center align-items-md-center justify-content-lg-center align-items-lg-center px-4 py-5 px-md-5">
                      <h4 className="fw-bold text-primary card-text mb-2">My Portfolio Website</h4>
                      <div className="text-center d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center" style={{color: '#19f5aa', textAlign: 'center', background: '#283770', height: '120px', width: '120px', borderColor: 'var(--bs-white)', boxShadow: 'inset 3px 3px 20px var(--bs-blue)', borderRadius: '90px', margin: '20px'}}>
                        <h1 className="text-center" style={{paddingBottom: '0px', paddingTop: '0px', fontSize: '45px', textShadow: '0px 0px 20px'}}><strong>&lt;R&gt;</strong></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" style={{borderRadius: '16px', boxShadow: 'inset 0px 0px 20px rgb(0,0,0)', padding: '30px'}}>
                <p className="fw-bold mb-3" style={{textAlign: 'justify'}}><span style={{fontWeight: 'normal !important'}}>This website will be a forever ongoing project of mine as I advance in my career. I initially built it using Bootstrap studio, as I intended to have it done asap. Turns out It took a lot longer than I believed, but for a good cause. Bootstrap studio is a tool that makes development faster if you are already proeficient in it, which I sure wasn't at the time. Nevertheless, this project taught me a lot about bootstrap and more advanced CSS techniques, which was a good outcome at the end of the day.</span></p>
                <p style={{textAlign: 'justify'}}>I inted to rebuild this website using React in the near future, with the very same design but in a more efficient and maintainable way.</p>
              </div>
            </div>
          </div>
          <div style={{padding: '30px'}}>
            <div className="row d-lg-flex align-items-lg-center row-cols-1 row-cols-md-2 d-flex justify-content-start" style={{borderRadius: '16px'}}>
              <div className="col" style={{padding: '0px', borderRadius: '16px', boxShadow: '0px 0px'}}>
                <div style={{marginRight: '20px', marginBottom: '10px', marginLeft: '20px', borderRadius: '16px', boxShadow: 'inset 0px 0px 20px rgb(0,0,0)'}}>
                  <div className="card" data-aos="slide-right" style={{background: 'rgba(216,92,39,0.3)'}}>
                    <div className="card-body text-center d-lg-flex flex-column align-self-center justify-content-lg-center align-items-lg-center px-4 py-5 px-md-5">
                      <h3 className="fw-bold text-secondary card-text mb-2"><span style={{color: 'rgb(220, 99, 61)'}}>Social Media Portfolio</span></h3>
                      <div className="col-xl-4" data-aos="zoom-in" data-aos-once="true" style={{padding: '12px', height: 'auto', width: 'auto', marginBottom: '12px'}}>
                        <div style={{padding: '12px', borderRadius: '1000px', boxShadow: 'inset 0px 0px 20px #730711, 0px 0px 20px #730711', background: '#ce1126'}}>
                          <div style={{background: 'var(--bs-gray-200)', borderRadius: '1000px', padding: '12px', boxShadow: 'inset 0px 0px 10px #27262e'}}>
                            <div className="card shadow-sm" style={{borderRadius: '1000px', background: 'rgba(255,255,255,0)'}}>
                              <div className="card-body text-center" style={{background: 'var(--bs-gray-100)', borderRadius: '1000px', boxShadow: 'inset 0px 0px 20px var(--ref-gray)', padding: '0px'}}>
                                <div className="text-center d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center" style={{color: '#0051ba', background: 'var(--bs-white)', height: '50px', width: '50px', borderColor: 'var(--bs-white)', borderRadius: '69px', boxShadow: 'inset 0px 0px 10px 5px var(--ref-gray)'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-phone-vibrate" style={{width: '32px', height: '32px', color: 'var(--bs-red)'}}>
                                    <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z" />
                                    <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z" />                                                      </svg></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="btn active btn-primary btn-sm" type="button" onClick={() => window.location.href='https://rafthedev.com/smmportfolio'} target="_blank" style={{background: 'rgb(220,99,61)', borderColor: 'var(--bs-card-cap-bg)'}}>See Website</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" style={{borderRadius: '16px', padding: '30px', boxShadow: 'inset 0px 0px 20px rgb(0,0,0)'}}>
                <p className="fw-bold mb-3" style={{textAlign: 'justify'}}><span style={{fontWeight: 'normal !important'}}>I have previous experience as a Social Media Manager and Copywriter, and I'm still open to working in the industry futurely. Making a separate portfolio for that was nothing but fair.</span></p>
                <p style={{textAlign: 'justify'}}>The page was made using Bootstrap, and was definitely an upgrade from my previous projects. Compared to this portfolio it has better looking custom components and looks more polished overall, and was finished in much less time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Projects