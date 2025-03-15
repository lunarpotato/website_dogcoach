import Image from 'next/image'
import dogHeaderimage from '../public/img/dogwithhuman.jpg'

export default function Home() {
    return (
      <main>

       <div className="container position-relative">

       <Image 
          src={dogHeaderimage} 
          placeholder="blur"
          quality={50}
          className='img-fluid'
          // height={} 
          // blurDataURL="data:..." automatically provided
          alt="Picture of a human and a dog" 
        />
        
          <div className="hstack gap-3 align-items-stretch position-absolute top-0 start-0 w-100 d-flex justify-content-between" style={{ height: "250px", opacity:"0.8" }}>
            <div 
            className="h-auto w-auto mw-25 p-5 bg-body-secondary border align-self-start" style={{ maxWidth: "350px"}}>
              Weil Beziehung mehr ist als Erziehung.
            </div>
            
            <div className=" ms-auto h-auto w-auto mw-25 p-5 bg-body-secondary border align-self-end" style={{ maxWidth: "350px", opacity:"0.8", wordBreak: "break-word"}}>
              Individuelles Coaching für ein harmonisches Mensch-Hund-Team.
            </div>
          </div>
      </div>

      
      </main>
  
    );
  }
  