
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import ClientMeta from "../components/ClientMeta/ClientMeta";

/* eslint-disable @next/next/no-img-element */
export default function Leistungen() {
  return (
  <>
  <Head>
    <title>Angebot</title>
    <meta name="description" content="Artgerechte Kommunikation, Verständnis, Wertschätzung und Verbundenheit sind wichtige Begriffe auf dem Weg zu einem entspannten Team Hund-Mensch."/>
  

    <meta property="og:title" content="Angebot"/>
    <meta property="og:description" content="Artgerechte Kommunikation, Verständnis, Wertschätzung und Verbundenheit sind wichtige Begriffe auf dem Weg zu einem entspannten Team Hund-Mensch."/>
    <meta property="og:image" content="/img/spazieren_mit_see.jpg"/> 

    <ClientMeta/>
  </Head>
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
            <p
              className="lead lead-text"
              style={{ wordBreak: "break-word", letterSpacing: "0.05rem" }}
            >
              2021 habe ich bei Antonia Conzett in Steg im Tösstal die
              Coachingausbildung begonnen. Die Ausbildung ist abgeschlossen.
              Eine stete Weiterbildung und Austausch mit anderen Coaches
              begleiten mich und halten mich auf dem neuesten Stand. 
              <br/>
              <br/>
              Artgerechte
              Kommunikation, Verständnis, Wertschätzung und Verbundenheit sind
              wichtige Begriffe auf dem Weg zu einem entspannten Team
              Hund-Mensch. 
              <br/>
              <br/>
              Ich biete Einzelcoachings an, keine Gruppenstunden
              oder Rudelspaziergänge.
            </p>
            <h4
              className="custom-heading fw-normal lh-4"
              style={{ paddingLeft: "1rem", marginBottom: "4rem" }}
            >
              Preis: 70.-/h
            </h4>
          </div>

          <div className="col-lg-6 lg-gy-5">
            <div className="container" style={{ maxWidth: "900px" }}>

{/* 
              <Image
              src="./img/spazieren_mit_see.jpg"
              width={500}
              height={500}
              alt="Spazieren am See"
              placeholder="blur"
              loading="lazy"
              blurDataURL="data:./img/spazieren_mit_see.jpg"/> */}
         
          
              
            <img
              className="image"
              aria-placeholder="blur"
              
              style={{
                minHeight: "150px",
                maxHeight: "600px",
                width: "100%",
                objectFit: "cover",
                marginBottom: "1rem",
                marginTop: "1rem",
                
               
              }}
              src="/img/spazieren_mit_see.jpg"
            />
            </div>
        
            </div>

        
        </div>
      </div>
    </main>
    </>

  );
}
