"use server";
import { Suspense } from "react";
// import AsyncHelper from "../components/AsyncHelper";

// export default function Async(){
//     return(
//         <>
//         <Suspense fallback={<p>Loading.....</p>}>
//                <AsyncHelper/>
//         </Suspense>
//         </>
     
//     )
// }


export default async function Page() {
  return (
    <div>
      <h1>Fast Content</h1>
      
      <Suspense fallback={<p>Loading...</p>}><SlowComponent /></Suspense>
      
    </div>
  )
}

async function SlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulating slow API call
  return <p>This content was streamed after 3 seconds!</p>;
}

