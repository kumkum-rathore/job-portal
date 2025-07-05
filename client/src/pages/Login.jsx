import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/authSlice";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("/auth/login", form);

    toast.success(res.data.message);

    //  Save token to localStorage
    localStorage.setItem("token", res.data.token);

    //  Save to Redux
    dispatch(setAuth({ token: res.data.token, user: res.data.user }));

  } catch (err) {
    toast.error(err.response?.data?.message || "Login failed");
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-4 border rounded-xl space-y-4"
    >
      <Input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default Login;
