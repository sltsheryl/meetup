import classes from "./NewMeetup.module.css";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
function NewMeetup() {
  const navigate = useNavigate();
 function sendToDatabase(meetupData) {
   const formData = new FormData();
   formData.append("title", meetupData.title);
   formData.append("description", meetupData.description);
   formData.append("address", meetupData.address);
   formData.append("image", meetupData.image);

   fetch("http://127.0.0.1:8000/api/new-meetup/", {
     method: "POST",
     body: formData,
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
