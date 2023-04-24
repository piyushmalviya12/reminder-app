import React from 'react';
import Table from 'react-bootstrap/Table';

function ReminderList(props) {
  return (
    <Table striped bordered hover variant="dark" className='mt-5'>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>{props.name}</td>
          <td>{props.dateString}</td>
          <td>{props.timeString}</td>
        </tr>
              </tbody>
    </Table>
  );
}

export default ReminderList;