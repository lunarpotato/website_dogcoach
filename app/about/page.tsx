/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function About() {
  return (
    <main>
      <div
        className="container container-custom overflow-hidden"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <div className="row featurette">
          <div className="col-lg-6">
            <h1 className="featurette-heading fw-normal lh-1 custom-heading">
              Über mich{""}
            </h1>
            <p className="lead lead-text" style={{ wordBreak: "break-word" }}>
              Das Wesen Hund begleitet und begeistert mich von Kindheit an. Als
              ich an meiner ehemaligen Arbeitsstelle meinen Hund im Umgang mit
              beeinträchtigten und auch gesunden Menschen beobachtete, bekam ich
              die Idee und den Wunsch dieses Thema zu vertiefen. Ich wollte mehr
              erfahren über das Verhalten der Hunde, über die Beziehung
              Mensch-Hund und wie wir uns die Ressourcen von beiden Seiten
              zunutze machen können. Ich lernte sehr viel über Kommunikation,
              über Wechselwirkungen und darüber, dass unser Begleiter Hund uns
              Menschen immer wohlgesonnen ist und uns unterstützen möchte.
            </p>
          </div>
          <div className="col-lg-6 lg-gy-5">
            <img
              className="image"
              loading="lazy"
              style={{
                minHeight: "200px",
                maxHeight: "600px",
                width: "100%",
                objectFit: "cover",
                paddingBottom: "1rem",
                paddingTop: "1rem",
              }}
              src="./img/ein_anderes_selfie.jpg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
