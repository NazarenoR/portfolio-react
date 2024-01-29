import React from 'react'

const Hero = () => {
  return (
      <>
      <div>
        <header className="bg-dark" id="header" style={{background: 'url("src/assets/img/4k_mkbhd_icons_template_@jus_georgex.png")', backgroundSize: 'cover', boxShadow: '0px 0px 20px var(--bs-black)'}}>
          <div className="container">
            <div className="row d-xl-flex justify-content-center justify-content-xl-center" style={{boxShadow: '0px 0px'}}>
              <div className="col-md-5 col-lg-4 col-xl-3 text-center swing animated" style={{width: '300px'}}><img data-bss-disabled-mobile="true" data-bss-hover-animate="swing" src="src/assets/img/RafTag.png" width={226} height={436} style={{borderStyle: 'none'}} /></div>
              <div className="col-md-5 col-lg-7 col-xl-7 col-xxl-7" style={{paddingTop: '48px', paddingRight: '30px', paddingLeft: '30px'}}>
                <div className="text-center d-flex justify-content-center align-items-center" style={{padding: '20px'}}>
                  <h1 className="d-flex d-lg-flex justify-content-end justify-content-sm-center"><span className="text-md-end text-lg-end text-xl-end text-xxl-end" style={{color: 'rgb(25, 245, 170)', textShadow: '0px 0px 20px var(--bs-success)'}}><strong>Hi, I'm Raf! The Web Dev.</strong></span></h1>
                </div>
                <div>
                  <p><strong>My mission as a Web Developer is to provide a clean and immersive expirence for users in any platform or device.</strong></p>
                  <p><strong>I currently possess my strongest traits in front-end development, using Javacript and React to deliver fluid and consistent webpages.</strong></p>
                  <p><strong>Whether it's for learning, business, or purely entertainment, my goal is to give every person desire to visit my websites again.</strong></p>
                </div>
                <div className="d-flex d-xl-flex justify-content-center justify-content-xl-center align-items-xl-center" style={{paddingTop: '35px'}}><a className="d-xl-flex justify-content-xl-center align-items-xl-center" href="resumeRMN.pdf" target="_blank">
                    <div className="text-center d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center" data-bss-hover-animate="pulse" style={{color: '#19f5aa', background: '#283770', height: '40px', width: '175px', borderColor: 'var(--bs-white)', boxShadow: 'inset 0px 0px 20px 6px var(--bs-indigo), 0px 0px 20px #000000'}}>
                      <h1 className="text-center" style={{paddingBottom: '0px', paddingTop: '7px', fontSize: '25px', textShadow: '0px 0px 20px'}}><strong>My Resumé</strong></h1>
                    </div>
                  </a></div>
              </div>
            </div>
            <div className="row">
              <div className="text-center" style={{height: '50px'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="bounce animated infinite" style={{fontSize: '50px'}}>
                  <path d="M7.75735 5.63605L6.34314 7.05026L12 12.7071L17.6569 7.05029L16.2427 5.63608L12 9.87872L7.75735 5.63605Z" fill="currentColor" />
                  <path d="M6.34314 12.7071L7.75735 11.2929L12 15.5356L16.2427 11.2929L17.6569 12.7071L12 18.364L6.34314 12.7071Z" fill="currentColor" />
                </svg></div>
            </div>
          </div>
        </header>
      </div>
      </>
  )
}

export default Hero