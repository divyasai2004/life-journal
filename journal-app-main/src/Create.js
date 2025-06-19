import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Divyasai');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) =>{

    const currentDateAndTime = new Date();
    const formattedDate = currentDateAndTime.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour:  undefined,
      minute: undefined,
      hour12: false,
  });

  const formattedTime = currentDateAndTime.toLocaleString('en-GB', {
    day: undefined,
    month: undefined,
    year: undefined,
    hour:  'numeric',
    minute: 'numeric',
    hour12: false,
});


    e.preventDefault();
    const journal = {title,body,author,date:formattedDate,time:formattedTime };
    setIsPending(true);
    fetch('http://localhost:8001/journals',{
        method:'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(journal)
    }).then(()=> {
    console.log('new journal added');
    setIsPending(false);
    //history.go(-1); // go back to prev page
    history.push ('/');
    })
}  

  return (
    <div className="create">
      <h2>Add a New Journal</h2>
      <form onSubmit={handleSubmit}>
        <label>Journal title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Journal body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Journal author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Divyasai">Divyasai</option>
        </select>
        {!isPending&& <button>Add Journal</button>}
        {isPending && <button disabled>Adding Journal...</button>}
      </form>
    </div>
  );
}
 
export default Create;