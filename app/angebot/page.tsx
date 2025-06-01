import Logo from "../components/Logo/Logo";

/* eslint-disable @next/next/no-img-element */
export default function Leistungen() {
  return (
    <main>
      <div
        className="container container-custom"
        style={{
          position: "relative",
          marginTop: "2rem",
          marginBottom: "2rem",
          paddingTop: "0.25rem",
          paddingBottom: "2rem",
        }}
      >
        <div className="row featurette">
          <div className="col-lg-6">
            <h1 className="featurette-heading fw-normal lh-1 custom-heading">
              Angebot {""}
            </h1>
            <p className="lead lead-text" style={{ wordBreak: "break-word" }}>
              2021 habe ich bei Antonia Conzett in Steg im Tösstal die
              Coachingausbildung begonnen. Die Ausbildung ist abgeschlossen.
              Eine stete Weiterbildung und Austausch mit anderen Coaches
              begleiten mich und halten mich auf dem neuesten Stand. Artgerechte
              Kommunikation, Verständnis, Wertschätzung und Verbundenheit sind
              wichtige Begriffe auf dem Weg zu einem entspannten Team
              Hund-Mensch. Ich biete Einzelcoachings an, keine Gruppenstunden
              oder Rudelspaziergänge.
            </p>
            <h4
              className="custom-heading fw-normal lh-4"
              style={{ paddingLeft: "1rem", marginBottom: "4rem" }}
            >
              Preis: 70.-/h
            </h4>
          </div>

          <div className="col-lg-6">
            <div
              className="container"
              style={{
                paddingTop: "5rem",
                paddingBottom: "5rem",
                paddingLeft: "8rem",
                paddingRight: "8rem",
              }}
            >
              <Logo
                _url="/"
                _className="logo"
                _src="../img/Logo.svg"
                _alt="logo"
                _width={250}
                _height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
