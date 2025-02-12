// "use client";

// import { use } from "react";

// export default  function SearchParams({searchParams}:{searchParams:Promise<{ [key: string]: string | string[] | undefined }>}){
//     const query=use(searchParams)
//     console.log(query)
// return(
//     <p>I am in client search params</p>
// )
// }





// export default async function SearchParams({searchParams}:{searchParams:Promise<{ [key: string]: string | string[] | undefined }>}){
//     const query=await searchParams
//     console.log(query)
// return(
//     <p>I am in client search params</p>
// )
// }

// 'use client';

// import { useSearchParams, useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// export default function MyComponent() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   useEffect(() => {
//     // Create a new URLSearchParams instance
//     const params = new URLSearchParams(searchParams.toString());
// setTimeout(()=>{
// // Add or update search parameters
// params.set('query', 'example'); // Example query
// params.set('page', '1'); // Example page number
// params.set('theme', 'dark'); // Example theme preference

// // Update the URL without a full page reload
// router.push(`?${params.toString()}`, { scroll: false });
// },2000)
    
//   }, []);

//   return (
//     <div >
//       <h2 className='h-[1200px] '>Check the URL for inserted search parameters</h2>
//     </div>
//   );
// }


"use client";

import { use, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Creating a resolved promise for demonstration
const messagePromise = new Promise<string>((resolve) => {
  setTimeout(() => resolve("This is the resolved message!"), 2000);
});

export default function MessageContainer() {
  return (
    <ErrorBoundary fallback={<p>⚠️ Something went wrong</p>}>
      <Suspense fallback={<p>⌛ Downloading message...</p>}>
        <Message messagePromise={messagePromise} />
      </Suspense>
    </ErrorBoundary>
  );
}

function Message({ messagePromise }: { messagePromise: Promise<string> }) {
  const content = use(messagePromise); // `use()` waits for the promise to resolve
  return <p>Here is the message: {content}</p>;
}
