import classes from "./Meetup.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Meetup(props) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const meetupId = props.id;

    fetch(`http://127.0.0.1:8000/api/meetups/${meetupId}`)
      .then((response) => response.json())
      .then((meetupData) => {
        setClicked(meetupData.isFavorite);
      })
      .catch((error) => {
        console.error("Error fetching meetup data:", error);
      });
  }, [props.id]);

  function removeOrAddToFavorites() {
    const meetupId = props.id;

    fetch(`http://127.0.0.1:8000/api/meetups/${meetupId}`)
      .then((response) => response.json())
      .then((meetupData) => {
        const updatedIsFavorite = !meetupData.isFavorite;
        meetupData.isFavorite = updatedIsFavorite;
        setClicked(updatedIsFavorite);
        return fetch(`http://127.0.0.1:8000/api/meetups/${meetupId}/modify-fav/`, {
          method: "PUT",
          body: JSON.stringify(meetupData),
        });
      })
      .then((response) => response.json())
      .then((updatedMeetupData) => {
        console.log("Meetup updated:", updatedMeetupData);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating meetup:", error);
      });
  }

  return (
    <li className={classes.meetup}>
      <div>
        <img
          src={"http://127.0.0.1:8000" + props.image}
          alt={props.title}
        />
      </div>
      <div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button
          className={clicked ? `${classes.clicked}` : ""}
          onClick={removeOrAddToFavorites}
        >
          {!clicked ? "Favorites" : "Remove from Favorites"}
        </button>
      </div>
    </li>
  );
}

export default Meetup;
