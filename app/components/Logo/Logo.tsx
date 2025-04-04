"use client"

import { useRouter } from 'next/navigation'
import React from 'react'


export default function Logo({ _url, _className = "", _src }: {_url: string; _className?: string; _src: string;}) {
  const router = useRouter();

  return (

    <img  onClick={() => router.push(_url)} className={_className} width={55} height={55} src= {_src} alt=""/>
  
  )
}

 
{/* <li className= {Style["logo"]}>
<img width={55} height={55} src="../img/Logo.svg" ></img>  
</li> */}