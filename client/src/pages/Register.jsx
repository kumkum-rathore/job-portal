import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const register = () => {
  return (
     <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <Input type="text" placeholder="Name" className="mb-4" />
      <Input type="email" placeholder="Email" className="mb-4" />
      <Input type="password" placeholder="Password" className="mb-4" />
      <Button className="w-full">Register</Button>
    </div>
  )
}

export default register
