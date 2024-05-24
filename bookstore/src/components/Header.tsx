import Logo from "./Logo";
import Menu from "./Menu";
import styles from './Header.module.css';


function Header (){
    return(
        <header className={`bg-green-300 px-4 ${styles.header}`} >
            <Logo/>
            <Menu/>
        </header>
    )
 
}

export default Header