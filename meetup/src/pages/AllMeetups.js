import MeetupList from "../components/MeetupList";
import { useState } from "react";
const SAMPLE = [
  {
    id: "1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rime-ice-found-on-summit-cross.jpg/800px-Rime-ice-found-on-summit-cross.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Aktie_Cin%C3%A9matographique_%281%29.jpg/321px-Aktie_Cin%C3%A9matographique_%281%29.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
  {
    id: "3",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Aktie_Cin%C3%A9matographique_%281%29.jpg/321px-Aktie_Cin%C3%A9matographique_%281%29.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a third meetup!",
  },
];

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([SAMPLE]);
    fetch(
      "https://meetup-6acbb-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    ).then(response => {
        // since we are using firebase, we need to convert the response to json
        return response.json();
    }).then(data => {
        setIsLoading(false);
        setLoadedMeetups(data);
    });

    if (isLoading) {
        return (
            <section>
                <h1>Loading...</h1>
            </section>
        )
    }
  return (
      <section>
      <h1>All Meetups</h1>
      <div className="meetup-list-container">
        <MeetupList meetups={SAMPLE} />
      </div>
      </section>

  );
}
export default AllMeetupsPage;
