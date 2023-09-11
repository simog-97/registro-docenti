import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../custom_hooks/useFetch";
import { useState } from "react";
import DeletePopup from "../utility_components/DeletePopup";


const RegisterDetails = () => {

    const {id} = useParams()
    const {data:register, isPending:registerIsPending, error:registerError} = useFetch('http://localhost:3000/api/register/'+id)
    const {data:activityList, isPending:activityIsPending, error:activityError} = useFetch('http://localhost:3000/api/register/'+id+"/activities");
    const navigate = useNavigate()

    const [deletePopupIsOpen, setDeletePopupIsOpen] = useState(false);
    const [deleteRegisterPopupIsOpen, setDeleteRegisterPopupIsOpen] = useState(false);
    const [itemId, setItemId] = useState('');


    const handleAddActivity = () => {
        navigate('/add-activity/'+id)
    }
    const handleEditActivity = (id) => {
        // console.log("edit : "+id);
        navigate("/update-activity/"+id);
    }
    const handleDeleteActivity = (id) => {
        // console.log("delete : "+id);
        setItemId(id);
        setDeletePopupIsOpen(true);
    }
        const handleClosePopup = () => {
        setDeletePopupIsOpen(false);
        setItemId('');
    }



    const handleCloseRegisterPopup = () => {
        setDeleteRegisterPopupIsOpen(false);
        setItemId('');
    }

    const confirmDeleteActivity = (itemId) => {
        //console.log("elimino id "+id);

        // setDeleteIsPending(true);


        fetch('http://localhost:3000/api/activity/'+itemId, {
            method: 'DELETE'
        })
        .then(() => {
            // setDeleteIsPending(false);
            navigate(0)
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                // console.log('fetch abortito');
            } else{
                //setError(err.message);
                //setIsPending(false);
                console.log(err.message);
            }
        })
        
    }

    const confirmDeleteRegister = (itemId) => {
        //console.log("elimino id "+id);
        fetch('http://localhost:3000/api/register/'+itemId, {
            method: 'DELETE'
        })
        .then(() => {
            navigate(-1)
        })
        .catch(err => {
            console.log(err.message);  
        })
    }

    const handleDeleteRegister = (id) => {
        setItemId(id);
        setDeleteRegisterPopupIsOpen(true);

    }



    
    return (
        <div className="register-details">

        <div>
            {deletePopupIsOpen && <DeletePopup
                content = {
                    (
                        <div>
                        <h2>Sei sicuro di eliminare questa voce? </h2>
                        <br /> 
                        <button className="yes_no_button" onClick={handleClosePopup}>NO</button>
                        <button className="yes_no_button" onClick={() => confirmDeleteActivity(itemId)} >SI</button>
                        </div>

                    )
                }
                handleClose = {handleClosePopup}
                itemId = {itemId}
            />}
        </div>

        <div>
            {deleteRegisterPopupIsOpen && <DeletePopup
                content = {
                    (
                        <div>
                        <h2>Sei sicuro di eliminare questo registro? </h2>
                        <br /> 
                        <button className="yes_no_button" onClick={handleCloseRegisterPopup}>NO</button>
                        <button className="yes_no_button" onClick={() => confirmDeleteRegister(itemId)} >SI</button>
                        </div>

                    )
                }
                handleClose = {handleCloseRegisterPopup}
                itemId = {itemId}
            />}
        </div>

        {registerIsPending && <div>Caricamento..</div>}
        {!registerError && register && (
            <div className="login">
                <h2>Registro di {register.subject.name} del {register.year}</h2>
                <h4>proprietario : prof. {register.professor.name} {register.professor.surname} </h4>
                <br /> <br />

                <article>
                    <h3>Attività svolte</h3>

                    {activityIsPending && <div>Caricamento..</div>}

                    {!activityError && activityList && activityList.length > 0 && (
                        <table className="tabella">
                            <thead>
                                <tr>
                                    <th>Tipo di attività</th>
                                    <th>Argomenti</th>
                                    <th>Aula</th>
                                    <th>Data</th>
                                    <th>Inizio</th>
                                    <th>Fine</th>
                                </tr>
                            </thead>

                            <tbody>
                                {activityList.map((activity) => (
                                    <tr>
                                        <td>{activity.activityType} </td>
                                        <td>{activity.topics}</td>
                                        <td>{activity.classroom}</td>
                                        <td>{activity.date} </td>
                                        <td>{activity.startTime}  </td>
                                        <td>{activity.endTime}</td>
                                        <td> <button title="modifica" className="modifica" onClick={() => handleEditActivity(activity.id)}></button> </td>
                                        <td> <button title="elimina" className="elimina" onClick={() => handleDeleteActivity(activity.id)}></button>  </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}


                    {!activityError && activityList && activityList.length === 0 && <div>Nessuna attivita' in questo registro</div>}
                    {!activityError && !activityList && <div>Nessuna attivita'</div>}
                </article>

                <br /> <br />


                <article>
                    <button className="button" onClick={handleAddActivity}>Aggiungi Attività</button>
                    <br /> <br /> 
                    <button className="delete_reg_button" onClick={() => handleDeleteRegister(id)}>Elimina registro </button>
                </article>
            </div>
        )}
</div>

    );
}
 
export default RegisterDetails;