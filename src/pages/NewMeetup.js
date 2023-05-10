import classes from "./NewMeetup.module.css";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

function NewMeetup() {
  const navigate = useNavigate();
  function sendToFirebase(meetupData) {
    fetch(
      // CAN EDIT: firebase realtime database url
      "https://meetup-6acbb-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    })
  }
  return (
    <section>
      <h1 className={classes.title}>Add Meetup</h1>
      <Form onAddMeetup={sendToFirebase} />
    </section>
  );
}
export default NewMeetup;
