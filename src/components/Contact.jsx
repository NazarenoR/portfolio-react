import React from 'react'

const Contact = () => {
  return (
    <section id="contactTag" className="py-5" style={{padding: '50px'}}>
        <div className="container bg-dark border-0 border rounded py-5" style={{borderStyle: 'none'}}>
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto" style={{width: '800px'}}>
              <p className="fw-bold text-success mb-2">SEND A MESSAGE :)</p>
              <h2 className="fw-bold">Reach out for any questions or inquiries!</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-6">
              <div>
                <form className="p-3 p-xl-4" data-bss-recipient="220e68001b67f9e2649eba1b87e77bc4">
                  <div className="mb-3"><input className="form-control form-control form-control" type="text" id="name-2" name="name" placeholder="Name" /></div>
                  <div className="mb-3"><input className="form-control form-control form-control" type="email" id="email-2" name="email" placeholder="Email" /></div>
                  <div className="mb-3"><textarea className="form-control form-control form-control" id="message-2" name="message" rows={6} placeholder="Message" defaultValue={""} /></div>
                  <div><button className="btn btn-primary active shadow d-block w-100" type="submit" style={{color: 'rgb(40,55,112)'}} data-bs-toggle="submit">Send </button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact