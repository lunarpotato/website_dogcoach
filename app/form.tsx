import Form from 'next/form'

 
export default function Page() {
  return (
    <Form action="/search">
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      {/* <input name="name"/> <input name="name"/>
      <input name="mail"/>
      <input name="phone"/>
      <input name="message"/> */}

      <>

      <div className="container">

       <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Adresse</h4>
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
          
            <div className="col-12">
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
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Addresse
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Hauptstrasse 12"
                required
              />
              <div className="invalid-feedback">
                Bitte gib hier deine Adresse ein
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="address2" className="form-label">
                Adresszusatz<span className="text-body-secondary">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Stockwerk"
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="country" className="form-label">
                Land
              </label>
              <select className="form-select" id="country" required>
                <option value="">Auswählen...</option>
                <option>Schweiz</option>
              </select>
              <div className="invalid-feedback">Please select a valid country.</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">
                Kanton
              </label>
              <select className="form-select" id="state" required>
                <option value="">Auswählen...</option>
                <option>Zürich</option>
              </select>
              <div className="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">
                Postleitzahl
              </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder=""
                required
              />
              <div className="invalid-feedback">Bitte gib deine Postleitzahl ein</div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address" />
            <label className="form-check-label" htmlFor="same-address">
              Shipping address is the same as my billing address
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info" />
            <label className="form-check-label" htmlFor="save-info">
              Save this information for next time
            </label>
          </div>
          <hr className="my-4" />
          <h4 className="mb-3">Zahlung</h4>
          <div className="my-3">
            <div className="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                defaultChecked
                required
              />
              <label className="form-check-label" htmlFor="credit">
                Kreditkarte
              </label>
            
          
              <div className="invalid-feedback">Security code required</div>
            </div>
          </div>
          <hr className="my-4" />
          <button className="btn btn-success rounded-pill px-3">
            Absenden
          </button>
        </form>
      </div>


      </div>
       
</>   
    </Form>
  )
}