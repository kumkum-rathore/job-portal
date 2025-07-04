import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const login = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <Input type="email" placeholder="Email" className="mb-4" />
      <Input type="password" placeholder="Password" className="mb-4" />
      <Button className="w-full">Login</Button>
    </div>
  )
}

export default login
