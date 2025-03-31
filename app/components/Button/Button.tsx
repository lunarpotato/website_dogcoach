"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Button({ _type = "button", _url, _className = "" }: { _type?: "button" | "submit" | "reset"; _url: string; _className?: string }) {
  const router = useRouter();

  return (
    <button type={_type} onClick={() => router.push(_url)} className={_className}>Kontakt aufnehmen</button>
  )
}



