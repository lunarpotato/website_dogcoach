import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Über mich {""}
              <span className="text-body-secondary">Hallo Tine</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
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
