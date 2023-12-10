import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewGameForm.module.css';

function NewGameForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const consoleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredConsole = consoleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const gameData = {
      gameID: enteredTitle,
      title: enteredTitle,
      image: enteredImage,
      console: enteredConsole,
      description: enteredDescription,
    };

    props.onAddGame(gameData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Game Title (must be unique)</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Game Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='console'>Console</label>
          <input type='text' required id='console' ref={consoleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Game</button>
        </div>
      </form>
    </Card>
  );
}

export default NewGameForm;
