import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

function AddJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-Time",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/jobs/create", job);
      toast.success("Job created successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create job");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 space-y-4 p-4 border rounded-xl"
    >
      <Input placeholder="Job Title" onChange={(e) => setJob({ ...job, title: e.target.value })} />
      <Input placeholder="Company" onChange={(e) => setJob({ ...job, company: e.target.value })} />
      <Input placeholder="Location" onChange={(e) => setJob({ ...job, location: e.target.value })} />
      
      <select
        className="w-full p-2 border rounded-md"
        onChange={(e) => setJob({ ...job, type: e.target.value })}
        value={job.type}
      >
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Internship">Internship</option>
      </select>

      <Textarea
        placeholder="Job Description"
        onChange={(e) => setJob({ ...job, description: e.target.value })}
      />

      <Button type="submit">Post Job</Button>
    </form>
  );
}

export default AddJob;
