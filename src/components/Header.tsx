import styles from './Header.module.css'

import headerLogo from '../assets/rocket.svg'
import headerToDo from '../assets/todo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={headerLogo} alt="Logo RocketSeat" />
            <img src={headerToDo} alt="Logo To Do" />
        </header>
    )
}