import { useContext } from "react";
import FavoritesContext from "../store/fav-context";
import MeetupList from "../components/MeetupList";

function FavoritesPage() {
    const favContext = useContext(FavoritesContext);
  return (
    <section>
      <h1>Favorite Meetups</h1>
      <div className="meetup-list-container">
        <MeetupList meetups={favContext.favorites} />
      </div>
    </section>
  );
}
export default FavoritesPage;
