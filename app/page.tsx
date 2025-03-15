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
          style= {{
            maxWidth: '100%',
            height: 'auto',
          }}
          // height={} 
          // blurDataURL="data:..." automatically provided
          alt="Picture of a human and a dog" 
        />
        
          <div className="hstack gap-3 align-items-stretch" style={{ height: "250px" }}>
            <div 
            className="h-auto w-auto mw-25 p-5 bg-body-secondary border align-self-start" style={{ maxWidth: "350px"}}>
              Weil Beziehung mehr ist als Erziehung.
            </div>
            
            <div className=" ms-auto h-auto w-auto mw-25 p-5 bg-body-secondary border align-self-end" style={{ maxWidth: "350px", wordBreak: "break-word"}}>
              Individuelles Coaching für ein harmonisches Mensch-Hund-Team.
            </div>
          </div>

      </div>
      </main>
  
    );
  }
  