import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/165041733?v=4" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.autorAndTime}>
                    <strong>Yan Fonseca</strong>
                        <time title="11 de Maio às 08:13h" dateTime="2023-05-11 08:13:30">Cerca de 1h atrás</time>
                </div>
                <button title='Deleter botao'><Trash size={20}/></button>
            </header>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
            <button><ThumbsUp/>Aplaudir <span>20</span></button>
        </footer>
      </div>
    </div>
  )
}