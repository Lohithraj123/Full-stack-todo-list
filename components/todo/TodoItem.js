import { useRouter } from 'next/router';
import Card from '../ui/Card';
import TodoDelete from './TodoDelete';
import { IoMdDoneAll } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <li>
      <Card>
        <Link href="todo-completed">
          <IoMdDoneAll />
        </Link>
        <div>
          <h3>{props.title}</h3>
        </div>
        <div>
          <button onClick={showDetailsHandler}>
            <TodoDelete />
          </button>
          <Link href="edit/id">
            <FaEdit />
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
