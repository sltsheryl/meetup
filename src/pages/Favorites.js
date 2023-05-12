import MeetupList from "../components/MeetupList";
import { useState, useEffect } from "react";

function FavoritesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [favMeetups, setFavMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://127.0.0.1:8000/api/favorites/")
      .then((response) => response.json())
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
        setFavMeetups(meetups);
      })
      .catch((error) => {
        setIsLoading(false);
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
      <h1>Favorite Meetups</h1>
      <div className="meetup-list-container">
        <MeetupList meetups={favMeetups} />
      </div>
    </section>
  );
}

export default FavoritesPage;
