import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddNewJob = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [received_date, setReceivedDate] = useState(new Date());
    const [due_date, setDueDate] = useState(new Date());
    const [customer_name, setCustomerName] = useState('');
    const [customer_contact, setCustomerContact] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newJob = {
            title,
            description,
            received_date,
            due_date,
            customer_name,
            customer_contact
        };
    
        const response = await fetch('/api/jobs', {
            method: 'POST',
            body: JSON.stringify(newJob),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        const json = await response.json();
    
        if (response.ok) {
            alert('Job added successfully!');
            navigate('/jobs');
        } else {
            console.error('Error:', json.error);
        }
    };


    return (
        <div className="m-5">
        <h1 className="mb-4">Add New Job</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Job Name/ Number</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Description</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="stock" className="form-label">Received Date</label>
                <DatePicker
                selected={received_date}
                onChange={date => setReceivedDate(date)}
                className='form-control m-3'
                dateFormat={"YYYY-MM-dd"}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="stock" className="form-label">Due Date</label>
                <DatePicker
                selected={due_date}
                onChange={date => setDueDate(date)}
                className='form-control m-3'
                dateFormat={"YYYY-MM-dd"}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="stock" className="form-label">Customer Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCustomerName(e.target.value)}
                    value={customer_name}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="stock" className="form-label">Customer Contact</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCustomerContact(e.target.value)}
                    value={customer_contact}
                    required
                />
            </div>
            <button className="btn btn-primary mt-3">Add Job</button>         
        </form>
        </div>
    );
}
 
export default AddNewJob;