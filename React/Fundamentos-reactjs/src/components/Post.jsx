import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.autor}>
                    <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/165041733?v=4"/>
                    <div className={styles.autorInfor}>
                        <strong>Yan Fonseca</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <div>
                    <time title='08-07-2025 22:41:00' datetime="08-07-2025 22:41:00">Publicado 1h</time>
                </div>
            </header>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit similique quibusdam deleniti impedit, eveniet reprehenderit ea accusantium nesciunt libero officiis. Suscipit aut eveniet necessitatibus, nisi harum impedit ratione facere.</p>
                <p>
                    Novo projeto de postifolio, com o intuito de aprender mais sobre ReactJs, e como funciona o ecossistema dele.
                </p>
                <p><a href="www.myproject.com">my project</a></p>
                <p><a href="#project">#project</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>deixe seu feedback</strong>
                <textarea 
                    placeholder='digite um comentário'
                />
                <footer>
                <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}