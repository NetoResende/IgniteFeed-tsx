import style from './Header.module.css'
import igniteTipo from '../assets/ignite-tipo.png'

export function Header(){

  return (
    <header className={style.header}>
      <img src={igniteTipo} alt='logo tipo do ignite feed'/>
      <strong>Ignite Feed</strong>
    </header>
  )
}