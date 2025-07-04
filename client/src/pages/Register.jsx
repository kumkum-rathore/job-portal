import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "@/lib/axios";
import { toast } from "sonner";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", form);
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 border rounded-xl space-y-4">
      <Input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <Input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <Input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Button type="submit">Register</Button>
    </form>
  );
}
export default Register;
