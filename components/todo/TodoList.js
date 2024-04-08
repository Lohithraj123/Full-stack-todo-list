import classes from './TodoList.module.css';
import MeetupItem from './TodoItem';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} id={meetup.id} title={meetup.title} />
      ))}
    </ul>
  );
}

export default MeetupList;
