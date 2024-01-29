 import React from 'react'
 
 const navbar = () => {
   return (
    <>
    <nav className="navbar navbar-dark navbar-expand-md sticky-top py-3" id="mainNav" style={{boxShadow: '0px 0px 20px rgb(0,0,0)', height: '85px'}}>
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="#header">
            <div className="text-center d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center" data-bss-hover-animate="pulse" style={{color: '#19f5aa', background: '#283770', height: '60px', width: '60px', borderColor: 'var(--bs-white)', boxShadow: '0px 0px 20px var(--bs-blue)', borderRadius: '69px', marginRight: '15px'}}>
              <h1 className="text-center" style={{paddingBottom: '0px', paddingTop: '7px', fontSize: '25px', textShadow: '0px 0px 20px'}}><strong>&lt;R&gt;</strong></h1>
            </div>
          </a><button data-bs-toggle="collapse" data-bs-target="#navcol-1" className="navbar-toggler" style={{borderWidth: '0px'}}><i className="far fa-caret-square-down" style={{color: 'rgb(55,99,244)', fontSize: '35px'}} /></button>
          <div className="collapse navbar-collapse fw-semibold text-center" id="navcol-1" style={{background: '#2d2c38'}}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link active" href="#header">HOME</a></li>
              <li className="nav-item"><a className="nav-link" href="#skillsTag">SKILLS</a></li>
              <li className="nav-item"><a className="nav-link" href="#projectsTag">PROJECTS</a></li>
              <li className="nav-item"><a className="nav-link" href="#contactTag">CONTACT</a></li>
              <li className="nav-item"><a className="nav-link" href="aboutme.html">ABOUT ME</a></li>
            </ul><a className="btn btn-primary shadow" role="button" href="resumeRMN.pdf" target="_blank" style={{background: '#283770', boxShadow: '0px 0px 20px var(--bs-red)'}}><span style={{color: 'rgb(55, 99, 244)', textShadow: '0px 0px 20px'}}><span style={{color: 'rgb(25, 245, 170)'}}>RESUMÉ</span></span></a>
          </div>
        </div>
      </nav>
    </>
   )
 }
 
 export default navbar