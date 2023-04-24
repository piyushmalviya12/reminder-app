import React from 'react'
import { useEffect , useState} from 'react';
import { useFirebase } from '../context/Firebase';
import ReminderList from '../components/ReminderList';

const HomePage =() =>{
   const firebase= useFirebase();
   const [reminder, setReminder] = useState([]);
   useEffect(() => {
      firebase.getListAllReminder().then((reminder) => setReminder(reminder.docs));
      
   });

   return (
   <div className='container'>{

       reminder.map((reminder) =>(
         <ReminderList key={reminder.id} {...reminder.data()} />
       ) )
       
   }</div>)
;
};

export default HomePage;