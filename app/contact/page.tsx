import Form from "../components/Form/KontaktForm";
import Maps from "../components/Maps/Maps";

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
      <div className="row">
        <div className="col-lg-6">
          <Form />
        </div>

        <div className="col-lg-6">
          <Maps />
        </div>
      </div>
    </div>
  );
}
