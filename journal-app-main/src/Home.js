import JournalList from "./JournalList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: journals } = useFetch('http://localhost:8001/journals')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { journals && <JournalList journals={journals} /> }
    </div>
  );
}
 
export default Home;