// app/page.tsx
//export const revalidate = 60; // Revalidate this route every 60 seconds

import { revalidateTag } from "next/cache";
import DummyData from "../components/DummyData";

export default async function Page() {
    const limit=2  //it doesn't work like this because fetch has to be made with similar params
  // Fetch data from a dummy API with caching options and tags
  const res = await fetch(`https://fakeapi.net/products?page=1&limit=${limit}`, {
 cache:"force-cache",
    next: {
        
    //  revalidate: 60, // revalidate every 60 seconds
      tags: ['data-amount'], // tag this cache entry
    },
    headers: {
      'Content-Type': 'application/json',
    
    },
  });

  const {data} = await res.json();
  console.log(data)
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
