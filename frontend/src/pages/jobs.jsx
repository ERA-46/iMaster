import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import JobCard from "../components/jobCard";

const Jobs = () => {

    const [jobs, setJobs] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch('/api/jobs');
            const json = await response.json();

            if(response.ok){
                setJobs(json.jobs);
            }
        };
        fetchJobs();
    }, []);

    const handleAddNewItem = () => {
        navigate('/jobs/add-new-job');
    };

    const onToggleStatus = async (jobId) => {    
   
        const jobToUpdate = jobs.find((job) => job._id === jobId);
        if (!jobToUpdate) {
            console.error("Job not found for ID:", jobId);
            return;
        }
    
 
        const updatedStatus = jobToUpdate.status === "Pending" ? "Done" : "Pending";
    
        try {

            const response = await fetch(`/api/jobs/${jobId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: updatedStatus }), // Send the updated status
            });
    
            if (response.ok) {
                // Update the state with the new status
                setJobs((prevJobs) =>
                    prevJobs.map((job) =>
                        job._id === jobId ? { ...job, status: updatedStatus } : job
                    )
                );
            } else {
                console.error("Error updating job status:", await response.json());
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <div className="container mt-4">
            <div className="item-actions text-center mt-5 mb-5">
                <button className="btn btn-info" onClick={handleAddNewItem}>Add Item</button>
            </div>
            <div className="row">
            {jobs && jobs.map((job) => <JobCard key={job._id} job={job} onToggleStatus={onToggleStatus}/>)}
            </div>
  
        </div>
    );
}
 
export default Jobs;