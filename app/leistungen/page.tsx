"use client"
import Image from "next/image"
import logoImage from "@/public/img/Logo.svg"
import { relative } from "path";

export default function Leistungen() {
    return (
        <main>
            <div className='container container-custom' style={{position:"relative"}}>
            
        <div className="row featurette">
          <div className="col-md-7">
            <h1 className="featurette-heading fw-normal lh-1 custom-heading">
              Angebot {""}
          
            </h1>
            <p className="lead lead-text" style={{wordBreak: "break-word"}}>
            2021 habe ich bei Antonia Conzett in Steg im Tösstal die Coachingausbildung begonnen. Die Ausbildung
            ist abgeschlossen. Eine stete Weiterbildung und Austausch mit anderen Coaches begleiten mich und
            halten mich auf dem neuesten Stand.
            Artgerechte Kommunikation, Verständnis, Wertschätzung und Verbundenheit sind wichtige Begriffe auf
            dem Weg zu einem entspannten Team Hund-Mensch.
            Ich biete Einzelcoachings an, keine Gruppenstunden oder Rudelspaziergänge.

            <br/>Preis: 70.-/h
            </p>
            <div className="col-md2">
          <Image src={logoImage} 
                placeholder="blur"
                quality={50}
                className="img-fluid"
                style={{ height: "75%", maxHeight: "600px", objectFit: "contain", paddingBottom:"2em"}}
                alt="Logo Team Hund-Mensch"
                blurDataURL="@/public/img/Logo.svg"

                >
                        
            </Image>
          </div>
          </div>
        </div>
     
        
        </div>
        </main>

    );
}