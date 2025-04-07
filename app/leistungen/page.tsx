"use client"
import Image from "next/image"
import logoImage from "@/public/img/Logo.svg"
import { relative } from "path";

export default function Leistungen() {
    return (
        <main>
            <div className='container' style={{position:"relative"}}>
            <Image src={logoImage} 
                placeholder="blur"
                quality={50}
                className="img-fluid"
                style={{ height: "75%", maxHeight: "600px", objectFit: "contain"}}
                alt="Logo Team Hund-Mensch"
                blurDataURL="@/public/img/Logo.svg"
                >
                        
            </Image>
            </div>
        </main>

    );
}