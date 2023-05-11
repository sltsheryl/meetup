import MeetupList from "../components/MeetupList";
import { useState, useEffect } from "react";

function FavoritesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [favMeetups, setFavMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      // CAN EDIT: firebase realtime database url
      "https://meetup-6acbb-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          if (data[key].isFavorite) {
            const meetup = {
              id: key,
              ...data[key],
            };
            meetups.push(meetup);
          }
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
