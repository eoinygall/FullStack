import GameItem from './GameItem';
import classes from './GameList.module.css';

function GameList(props) {
  return (
    <ul className={classes.list}>
      {props.game.map((game) => (
        <GameItem
          key={game.gameId}
          id={game.meetingId}
          image={game.image}
          title={game.title}
          console={game.console}
        />
      ))}
    </ul>
  );
}

export default GameList;
