import Meetup from "./Meetup";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <div className={classes.meetupList}>
      {props.meetups.map((meetup) => (
        <Meetup
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </div>
  );
}

export default MeetupList;
