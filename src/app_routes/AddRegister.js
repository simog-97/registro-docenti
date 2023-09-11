import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../custom_hooks/useFetch";

const AddRegister = () => {
    
    const [year, setYear] = useState('');
    const [subjectToApply, setSubject] = useState('');
    // const [professor, setProfessor] = useState('');

    const {data:subjectList, isPending:subjectIsPending, error:subjectError} = useFetch('http://localhost:3000/api/subject'); 

    const [isPending, setIsPending] = useState(false); 
    const navigate = useNavigate();

    // const [professorId, setRegisterId] = useState('');
    const {professorId} = useParams(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        //if(!professorId) setRegisterId(registerList[0]);
        //console.log("id prof: "+professorId);
       

        let professor = {"id":professorId};
        let subject = {"id":subjectToApply}

        if(subject.id === ''){
            if(subjectList.length !==0 ) {
                subject.id = '1'
            }
        }


        const register = {year, subject, professor};


        setIsPending(true);

        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(register) 
        })
        .then(() => {
            setIsPending(false);
            // history.push('/prof-home/'+professorId);
            navigate(-1);
        })
        console.log(JSON.stringify(register));
    }

    return (
        <div className="general">
            <h2>Aggiungi Registro</h2>
            <br /> <br />
            
            <form onSubmit={handleSubmit} >
                <label>Anno accademico</label> 
                <input className="anno-box"
                    type="number"
                    required 
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                /> <br />
                <br /> 
                <label>Materia&emsp;</label>
                <select
                    required
                    value={subjectToApply}
                    onChange={(e) => setSubject(e.target.value)}
                >
                    {!subjectError && subjectList  && (
                        subjectList.map((sub) => (
                            <option value={sub.id}>{sub.name} </option>
                        ))
                    )}
                </select> <br />
                <br />


                {!isPending && <button className="button">Aggiungi</button>}
                {isPending && <button className="button" disabled>Sto aggiungendo..</button>}
            </form>
        </div>
    );


}
 
export default AddRegister;