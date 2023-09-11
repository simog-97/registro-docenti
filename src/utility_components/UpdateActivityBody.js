import { useState } from "react";
import { useNavigate } from "react-router-dom";


const UpdateActivityBody = props => {

    const activityItem = props.item

    const [activityType, setActivityType] = useState(activityItem.activityType); 
    const [topics, setTopics] = useState(activityItem.topics);
    const [classroom, setClassroom] = useState(activityItem.classroom);
    const [date, setDate] = useState(activityItem.date);
    const [startTime, setStartTime] = useState(activityItem.startTime);
    const [endTime, setEndTime] = useState(activityItem.endTime);
    const activityId = activityItem.id;
    const registerId = activityItem.register.id;

    
    const [isPending, setIsPending] = useState(false); 
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("id registro: "+registerId);
       
        let register = {"id":registerId};
        let id = activityId;

        const activity = {id, activityType, topics, classroom, date, startTime, endTime, register };


        setIsPending(true);

        fetch('http://localhost:3000/api/activity', {
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(activity) 
        })
        .then(() => {
            setIsPending(false);
            navigate(-1);
        })
        console.log(JSON.stringify(activity));
    }

    return (

        <article>
        
        {activityItem  && (

        <div className="general">

        <h2>Modifica Attività</h2>
        <br /> <br />
        <form onSubmit={handleSubmit} >
            <label>Tipo di attività</label> 
            <input 
                type="text"
                required 
                value={activityType}
                onChange={(e) => setActivityType(e.target.value)}
            /> <br />
            <label>Argomenti trattati</label> 
            <input 
                type="text"
                // required 
                value={topics}
                onChange={(e) => setTopics(e.target.value)}
            /> <br />
            <label>Aula</label> 
            <input 
                type="text"
                // required 
                value={classroom}
                onChange={(e) => setClassroom(e.target.value)}
            /> <br />
            <label>Data</label> 
            <input 
                type="date"
                required 
                value={date}
                onChange={(e) => setDate(e.target.value)}
            /> <br />
            <label>Orario inizio</label> 
            <input 
                type="time"
                // required 
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
            /> <br />
            <label>Orario fine</label> 
            <input 
                type="time"
                // required 
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
            /> <br />

            {!isPending && <button className="button">Aggiorna</button>}
            {isPending && <button className="button" disabled>Sto aggiornando..</button>}
        </form>
        </div>
        )}

        
        </article>
    );

}
 
export default UpdateActivityBody;