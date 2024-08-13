
'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()

  return (
    <button className =" w-fit flex self-center border-2 font-medium border-gray-900 bg-violet-800 py-2 px-2 uppercase text--800 transition-colors before:absolute before:left.0 before:top-0 before:z-10 before:h-full before:origin-top before:scale-x-0 before:bg-grey-800 before:transition-transform before:duration-300 before:content=[''] hover:text-white before:hover-scale-x-100 " 
    type="button" 
    onClick={() => router.push('/Name')}
    >
       Name  
    </button>
  )
}
