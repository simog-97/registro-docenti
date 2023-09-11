import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddActivity = () => {

    const [activityType, setActivityType] = useState(''); 
    const [topics, setTopics] = useState('');
    const [classroom, setClassroom] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const [isPending, setIsPending] = useState(false); 
    const navigate = useNavigate()

    const {registerId} = useParams(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        //if(!registerId) setRegisterId(registerList[0]);
        console.log("id registro: "+registerId);
       
        let register = {"id":registerId};

        const activity = {activityType, topics, classroom, date, startTime, endTime, register};


        setIsPending(true);

        fetch('http://localhost:3000/api/activity', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(activity) 
        })
        .then(() => {
            setIsPending(false);
            // history.push('/register/'+registerId);
           navigate(-1);
        })
        console.log(JSON.stringify(activity));
    }

    return (
        <div className="general">
            <h2>Aggiungi Attività</h2>
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


                {!isPending && <button className="button">Aggiungi</button>}
                {isPending && <button className="button" disabled>Sto aggiungendo..</button>}
            </form>
        </div>
    );
}
 
export default AddActivity;