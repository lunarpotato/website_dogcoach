"use client"
import Form from 'next/form'

export default function CreateForm() {
  return (
    <Form action="/search">
      <>
     
      <div className="container">

        <div className='card'>
          <div className='card-body'>

       <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Kontaktformular</h4>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                Vorname
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                defaultValue=""
                required
              />
              <div className="invalid-feedback">Bitte gib hier deinen Vornamen ein</div>
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Nachname
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                defaultValue=""
                required
              />
              <div className="invalid-feedback">Bitte gib hier deinen Nachnamen ein</div>
            </div>
          
            <div className="col-sm-6">
              <label htmlFor="email" className="form-label">
                Email <span className="text-body-secondary"></span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                required
              />
              <div className="invalid-feedback">
                Bitte gib hier eine gültige Email Adresse ein
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="phonenumber" className="form-label">
                Telefonnummer <span className="text-body-secondary"></span>
              </label>
              <input
                type="phonenumber"
                className="form-control"
                id="phone"
                required
              />
              <div className="invalid-feedback">
                Bitte gib hier eine gültige Telefonnummer ein
              </div>
            </div>  

            <div className="col-12">
              <label htmlFor="textmessage" className="form-label">
                Nachricht <span className="text-body-secondary"></span>
              </label>
              <input
                type="textmessage"
                className="form-control"
                id="textmessage"
                required
              />
              <div className="invalid-feedback">
                Bitte gib hier eine Nachricht ein.
              </div>
            </div>  
          </div>

          <hr className="my-4" />
          <button className="btn btn-success rounded-pill px-3">
            Absenden
          </button>
        </form>
      </div>
        </div>
           </div>
     </div>
       
</>   
    </Form>
  )
}