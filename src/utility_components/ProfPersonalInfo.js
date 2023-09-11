const ProfPersonalInfo = props => {

    const professor = props.professor

    return (
        <div className="personal-info">
            <h3>I tuoi dati </h3>
            <p> nome : {professor.name} </p>
            <p> cognome : {professor.surname} </p>
            <p> data di nascita : {professor.dob} </p>
            <p> email : {professor.email} </p>
        </div>
    );
}
 
export default ProfPersonalInfo;