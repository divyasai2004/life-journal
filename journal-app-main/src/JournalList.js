import { Link } from 'react-router-dom';

const JournalList = ({ journals }) => {
    // Sort the journals by date and time in descending order
    const sortedJournals = journals.slice().sort((a, b) => {
      const dateTimeA = new Date(`${a.date} ${a.time}`);
      const dateTimeB = new Date(`${b.date} ${b.time}`);
      return dateTimeB - dateTimeA;
    });

  return (
    <div className="journal-list">
      {sortedJournals.map(journal => (
        <div className="journal-preview" key={journal.id}>
          <Link to={`/journals/${journal.id}`}>
              <div className="journal-header">
                  <h2>{journal.title}</h2>
                  <div className="time-container">
                    <p className="journal-time">{journal.date}</p>
                    <p className="journal-time">{journal.time}</p>
                  </div>
              </div>
            <p>Written by { journal.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default JournalList;