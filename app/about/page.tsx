import Image from 'next/image'



export default function About() {
    return (
     <main>
        <div className='container'>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Über mich {""}
                <span className="text-body-secondary">Hallo Tine</span>
              </h2>
              <p className="lead">
                Some great placeholder content for the first featurette here. Imagine some
                exciting prose here.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>

        
        <Image 
          src= "/img/running_dog.jpg"
          // placeholder="blur"
          quality={50}
          className='img-fluid'
          height= {500}
          width={500}
          
          

          // height={} 
          // blurDataURL="data:..." automatically provided
          alt="Picture of a human and a dog" 
        />


        </div>
     </main>
  
    );
  }
  