import styles from './App.module.css'

import { Header } from './components/Header'
import { Post } from './components/Post'

import './global.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
