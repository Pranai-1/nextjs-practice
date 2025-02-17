"use client";
import { useState } from "react";


export default function Home() {
  const[state,setState]=useState(0)
  return (
    <div className="text-black">
      <p>Hello there</p>
      <p>I am in main page {state}</p>
      <button onClick={()=>setState((prev)=>prev+1)}>Press here</button>
    </div>
  
  );
}
