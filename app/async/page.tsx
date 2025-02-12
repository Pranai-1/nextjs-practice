import { Suspense } from "react";
import AsyncHelper from "../components/AsyncHelper";

export default function Async(){
    return(
        <>
        <Suspense fallback={<p>Loading.....</p>}>
               <AsyncHelper/>
        </Suspense>
        </>
     
    )
}