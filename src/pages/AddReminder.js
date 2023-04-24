import React from 'react'
import { useState } from 'react';
import { useFirebase } from '../context/Firebase';
import HomePage from './Home';
import { Route } from 'react-router-dom';

const AddReminder = () => {
    const firebase=useFirebase();
    const [name, setName] = useState("");
    const [dateString, setDateString] = useState("");
    const [timeString, setTimeString] = useState("");
            
  const handleSubmit = async (e)=>{
    e.preventDefault();
   await firebase.handleAddReminder(name,dateString,timeString);
  };

  return (
    <div className="mt-4" id='addreminder'>
      <h2>Add Reminder</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter reminder name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={dateString}
            onChange={(e) => setDateString
                (e.target.value)}
                required
                />
                </div>
                <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                type="time"
                id="time"
                className="form-control"
                value={timeString}
                onChange={(e) => setTimeString(e.target.value)}
                required
                />
                </div>
                <button type="submit" className="btn btn-primary">
                Add Reminder
                
                </button>
                </form>
                </div>
  
    ); 
}
export default AddReminder;