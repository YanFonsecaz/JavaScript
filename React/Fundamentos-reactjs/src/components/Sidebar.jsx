import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/165041733?v=4" alt="" />
                <strong>Yan Fonseca</strong>
                <span>Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}