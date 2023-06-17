"use client"

import { useRouter } from "next/navigation"

export default function Homepage() {
  const router = useRouter()

  const handleLogin = async () => {
    // clear cookies 
    router.push('/')
}


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welcome to Homepage! 
      <button onClick={handleLogin} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Sign out
      </button>
    </main>
  )
}