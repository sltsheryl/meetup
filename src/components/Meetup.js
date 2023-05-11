import classes from "./Meetup.module.css";
import { useContext } from "react";
import FavoritesContext from "../store/fav-context";
import { useState } from "react";

function Meetup(props) {
  const [clicked, setClicked] = useState(false);
  const favContext = useContext(FavoritesContext);

    function removeOrAddToFavorites() {
        if (!favContext.isFavorite(props.id)) {
            favContext.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description,
            });
            setClicked(true);
        } else {
            favContext.deleteFavorite(props.id);
            setClicked(false);
        }
    }

  return (
    <li className={classes.meetup}>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button
          className={
            favContext.isFavorite(props.id) ? `${classes.clicked}` : ""
          }
          onClick={removeOrAddToFavorites}
        >
          {!favContext.isFavorite(props.id) ? "Favorites" : "Remove from Favorites"}
        </button>
      </div>
    </li>
  );
}

export default Meetup;
