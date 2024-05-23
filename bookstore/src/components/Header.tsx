import Logo from "./Logo";
import Menu from "./Menu";
import styles from './Header.module.css';


function Header (){
    return(
        <div className={`bg-green-300 ${styles.header}`} >
            <div className="w-2/6 h-full flex justify-center">
                <Logo/>
            </div>
            <div className="w-3/6 flex justify-center">
                <Menu/>
            </div>
        </div>
    )
 
}

export default Header