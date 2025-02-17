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
  <label htmlFor="firstName" className="form-label">
    First name
  </label>
  <input
    type="text"
    className="form-control"
    id="firstName"
    placeholder=""
    defaultValue=""
    required
  />
  <div className="invalid-feedback">Valid first name is required.</div>
</>


        
            
      <button className="btn btn-success rounded-pill px-3" type="submit">Absenden</button>

      
    </Form>
  )
}