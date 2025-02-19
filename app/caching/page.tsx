// app/page.tsx
//export const revalidate = 60; // Revalidate this route every 60 seconds

import { revalidateTag } from "next/cache";
import DummyData from "../components/DummyData";



async  function getData(){
 const res = await fetch(`https://67b5992507ba6e59083d91f0.mockapi.io/cache/users`, {
   cache:"force-cache",
   next: {
    revalidate: 5, // for example, cache for 60 seconds
    tags: ['data-amount'],
  },
   headers: {
     'Content-Type': 'application/json',
   },
 });
 const data = await res.json();
 return data
}


export default async function Page() {


const data=await getData()
const revalidateAction=async()=>{
    "use server"
    revalidateTag('data-amount')
}
  return (
    <div>
        <p className="text-2xl font-bold text-center w-full">{data.length}</p>
        <form action={revalidateAction}>
        <input type="submit" className="p-2 px-4 bg-blue-600 rounded-md"/>
      </form>
    <DummyData products={data}/>
      
      
    </div>
  );
}
