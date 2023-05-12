import classes from "./NewMeetup.module.css";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

function NewMeetup() {
  const navigate = useNavigate();
  function sendToDatabase(meetupData) {
    fetch("http://127.0.0.1:8000/api/new-meetup/", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1 className={classes.title}>Add Meetup</h1>
      <Form onAddMeetup={sendToDatabase} />
    </section>
  );
}
export default NewMeetup;
