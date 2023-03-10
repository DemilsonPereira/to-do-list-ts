import { PlusCircle } from 'phosphor-react'
import styles from './Post.module.css'
import { Task } from './Task'

export function Post() {
    return (
        <article className={styles.post}>
            <form>
                <input type='text' placeholder='Adicione uma nova tarefa' />{' '}
                <button
                    type='submit'
                >
                    <strong>Criar</strong>
                    <PlusCircle size={22} />
                </button>
            </form>

            <div>
                <Task />
            </div>

        </article>
    )
}