import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Todo-List</Link>
          </li>
          <li>
            <Link href="/todo-form">Add New Todo's</Link>
          </li>
          <li>
            <Link href="/todoId">Completed Todo's</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
