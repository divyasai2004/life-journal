import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const JournalDetails = () => {
    const{id} = useParams();
    const {data:journal,error,isPending} = useFetch('http://localhost:8001/journals/' + id);
    const history = useHistory();

    const handleClick = () =>{
        fetch('http://localhost:8001/journals/' + journal.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return (  
        <div className="journal-details">
            {isPending&&<div>Loading...</div>}
            {error&&<div>{error}</div>}
            {journal&&(
                <article>
                    <h2>{journal.title}</h2>
                    <p>Written by {journal.author}</p>
                    <div> {journal.body} </div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default JournalDetails;