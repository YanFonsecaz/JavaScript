import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import { Comment } from './components/Comment'
import styles from './App.module.css'
import './global.css'



export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
          <Post
            autor="Yan Fonseca"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit similique quibusdam deleniti impedit, eveniet reprehenderit ea accusantium nesciunt libero officiis. Suscipit aut eveniet necessitatibus, nisi harum impedit ratione facere."
          />
          <Post autor="Renir Fonseca" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit similique quibusdam deleniti impedit, eveniet reprehenderit ea accusantium nesciunt libero officiis. Suscipit aut eveniet necessitatibus, nisi harum impedit ratione facere." />
        </main>
      </div>
    </div>

  )
}
