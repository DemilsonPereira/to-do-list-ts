import styles from './Header.module.css'

import headerLogo from '../assets/rocket.svg'
import headerToDo from '../assets/todo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src={headerLogo} alt="Logo RocketSeat" />
                <img className={styles.headerToDo} src={headerToDo} alt="Logo To Do" />
            </div>
        </header>
    )
}