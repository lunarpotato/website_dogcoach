import Image from 'next/image'



export default function About() {
    return (
     <main>
        <div className='container'>
        <h3>About</h3>
        <Image 
          src= "/img/forest_walk.jpg"
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
  