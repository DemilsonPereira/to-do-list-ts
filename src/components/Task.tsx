import { ClipboardText } from 'phosphor-react';
import styles from './Task.module.css';
import { useState } from 'react';

export function Task() {
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <article className={styles.article}>
            <header className={styles.bodyTask}>
                <div className={styles.newTask}>
                    <strong>
                        Tarefas criadas <span>{likeCount}</span>
                    </strong>
                </div>
                <div className={styles.completedTask}>
                    <strong>
                        Concluídas <span>{likeCount}</span>
                    </strong>
                </div>
            </header>
            <div className={styles.listTask}>
                <div className={styles.messageTask}>
                    <ClipboardText size={56}/>
                    <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </article>
    )
}