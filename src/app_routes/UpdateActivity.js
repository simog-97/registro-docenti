import {useParams} from "react-router-dom";
import useFetch from "../custom_hooks/useFetch";
import UpdateActivityBody from "../utility_components/UpdateActivityBody";

const UpdateActivity = () => {

    const {activityId} = useParams();
    // console.log("activityId: "+ activityId)
    
    const {data:activity, isPending:activityIsPending, error:activityError} = useFetch('http://localhost:3000/api/activity/'+activityId); 


    // if(activityError) console.log(activityError);
    // console.log("isPending :"+activityIsPending);

    return(
        <div>
            {activityIsPending && <div>Caricamento..</div> }

            {activity && !activityError && (
                <UpdateActivityBody item={activity} />
            )}

            {activityError && <div>Errore</div>}
        </div>

    );
}
 
export default UpdateActivity;