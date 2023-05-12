import MeetupList from "../components/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect to prevent infinite loop
  useEffect(() => {
    setIsLoading(true);
    fetch("http://127.0.0.1:8000/api/meetups/")
      .then((response) => {
        console.log("HELLO : " + response);
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <div className="meetup-list-container">
        <MeetupList meetups={loadedMeetups} />
      </div>
    </section>
  );
}
export default AllMeetupsPage;
