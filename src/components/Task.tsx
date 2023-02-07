import { ThumbsUp } from 'phosphor-react';
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
        <article>
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
            <div className={styles.newTask}>
                
            </div>
        </article>
    )
}