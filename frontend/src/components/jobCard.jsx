import '../css/jobCard.css';
const JobCard = ({job, onToggleStatus, handleDelete, handleUpdate}) => {
    return (
        <div className="job-card">
            <div className="item-details flex-grow-1">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <p>Received Date: {job.received_date}</p>
                <p>Due Date: {job.due_date}</p>
                <p>Customer Name: {job.customer_name}</p>
                <p>Customer Contact: {job.customer_contact}</p>
            </div>

            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id={`flexSwitchCheckDefault-${job._id}`}
                    checked={job.status === "Done"} // Dynamically bind the checkbox to the status
                    onChange={() => onToggleStatus(job._id)} // Call toggle handler on change
                />
                <label className="form-check-label" htmlFor={`flexSwitchCheckDefault-${job._id}`}>
                    {job.status === "Pending" ? "Pending" : "Done"} {/* Update text dynamically */}
                </label>
            </div>

            <div className="button-group">
                <button className="btn btn-primary" onClick={() => handleUpdate(job)}>Update</button>
                <button className="btn btn-danger" onClick={() => handleDelete(job._id)}>Delete</button>
            </div>
        </div>
    );
}
 
export default JobCard;