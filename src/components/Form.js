import classes from "./Form.module.css";
import { useRef } from "react";

function Form(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    // prevent sending unnecessary requests
    event.preventDefault();
    const title = titleInputRef.current.value;
   const image = imageInputRef.current.files[0];
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

      console.log(image);

    const newMeetup = {
      title: title,
      image: image,
      address: address,
      description: description,
      isFavorite: false,
    };

    props.onAddMeetup(newMeetup);
  }
  return (
    <div className={classes["form-container"]} onSubmit={submitHandler}>
      <form>
        <div>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="titleInputRef" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="image">Meetup Image Link</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            id="imageInputRef"
            ref={imageInputRef}
          />
        </div>
        <div>
          <label htmlFor="address">Meetup Address</label>
          <input
            type="text"
            required
            id="addressInputRef"
            ref={addressInputRef}
          />
        </div>
        <div>
          <label htmlFor="description">Meetup Description</label>
          <input
            type="text"
            required
            id="descriptionInputRef"
            ref={descriptionInputRef}
          />
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
