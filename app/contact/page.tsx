import Form from "../components/Form/KontaktForm";


export default function Kontakt() {
  return (
    <div
      className="container container-custom"
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="row" >
        <div className="col-lg-6" style={{paddingBottom: "2rem"}}>
          <Form />
        </div>

        <div className="col-lg-6">
          <div className="container" style={{ maxWidth: "900px"}}>
          <div
            className="card"
            style={{ border: "#bfd59ec4", borderRadius: "0.75rem"}}
          >
            <div
              className="card-body"
              style={{
                color: "#ffffffb0",
                backgroundColor: "#bfd59ec4",
                borderRadius: "0.75rem",
                paddingBottom:"4rem"
              }}
            >
              <h3 style= {{ color: "#2D4A00" }} >Standort</h3>

              <div className="row g-3">
                <div className="col-sm-6">
                     <label
                      htmlFor="firstName"
                      className="form-label"
                      style={{ color: "#2D4A00" }}
                    >
                     Tätig in Kreuzlingen und Umgebung. 
                     Für einen Termin schreibe mir gerne via Kontakformular.
                    </label>
                </div>
                <div className="col-sm-2">
                          <div className="" style={{ paddingBottom: "2rem"}}>
                              <a href="https://www.google.com/maps/place/8280+Kreuzlingen/@47.6405613,9.1317982,13z/data=!3m1!4b1!4m6!3m5!1s0x479af72e3a0ca66d:0xf2bbe4623eb9d6f2!8m2!3d47.6447397!4d9.1707858!16zL20vMDN6cWI3?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"> 
                            <img 
                                height= "100em"
                                src="../img/pin.png"
                                alt="Maps"/> </a> 
                          </div>

                </div>
              </div>

              <div className="row g-3">
               
                 <div className="col-sm-6">
                   <h3 style= {{ color: "#2D4A00" }} >Mail</h3>
                     <a 
                     href="mailto:teamhundmensch@gmail.com" 
                     className="form-label"
                     style={{ color: "#2D4A00", textDecoration: "none", wordBreak: "break-word"}}
                    >   teamhundmensch@gmail.com  </a>
                  
                
                </div>
                <div className="sm-2">
                  <div className="">
                    <a href="mailto:teamhundmensch@gmail.com"> 
                      <img 
                          height= "50em"
                          src="../img/mail.png"
                          alt="Mail"/> </a> 
                  </div>
                </div>
                
              </div>
            </div>

            
            </div>
            </div>
          
          
      </div>
      
      </div>
    </div>
  );
}
