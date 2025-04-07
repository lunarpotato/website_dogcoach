import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="container container-custom">
        <div className="row featurette">
          <div className="col-md-7">
            <h1 className="featurette-heading fw-normal lh-1 custom-heading">
              Über mich{""}
          
            </h1>
            <p className="lead lead-text" style={{wordBreak: "break-word"}}>
            Das Wesen Hund begleitet und begeistert mich von Kindheit an. 
            Als ich an meiner ehemaligen Arbeitsstelle meinen Hund im Umgang mit beeinträchtigten und auch
            gesunden Menschen beobachtete, bekam ich die Idee und den Wunsch dieses Thema zu vertiefen. Ich
            wollte mehr erfahren über das Verhalten der Hunde, über die Beziehung Mensch-Hund und wie wir uns
            die Ressourcen von beiden Seiten zunutze machen können.
            Ich lernte sehr viel über Kommunikation, über Wechselwirkungen und darüber, dass unser Begleiter
            Hund uns Menschen immer wohlgesonnen ist und uns unterstützen möchte.
            </p>
          </div>
        </div>

        <Image
          src="/img/running_dog.jpg"
          // placeholder="blur"
          quality={50}
          className="img-fluid"
          height={500}
          width={500}
          alt="Picture of a human and a dog"
        />
      </div>
    </main>
  );
}
