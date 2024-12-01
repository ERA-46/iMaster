import { useNavigate } from "react-router-dom";
const Jobs = () => {

    const navigate = useNavigate();

    const handleNewJob = () => {
        navigate('/job/add-new-job');
    }

    return (
        <div>
           <div className="item-actions text-center mt-5 mb-5">
                <button className="btn btn-info" onClick={handleNewJob}>Add new Job</button>
            </div>

        </div>
    );
}
 
export default Jobs;