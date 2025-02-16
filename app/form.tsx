import Form from 'next/form'

 
export default function Page() {
  return (
    <Form action="/search">
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <input name="name"/> <input name="name"/>
      <input name="mail"/>
      <input name="phone"/>
      <input name="message"/>
      <button className="btn btn-success rounded-pill px-3" type="submit">Absenden</button>

      
    </Form>
  )
}