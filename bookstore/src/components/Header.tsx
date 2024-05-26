import Logo from "./Logo";
import Menu from "./Menu";
import styles from './Header.module.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Sidebar from "./Sidebar";


function Header (){

    const [isOpenSidebar, setOpenSidebar] = useState(false)

    return(
        <header className={`bg-green-300 px-4 ${styles.header}`} >

            <Logo/>

            <div className="hidden md:flex">
                <Menu isOpenSidebar={isOpenSidebar}/>
            </div>
      
            <button className="md:hidden relative z-10 px-5" onClick={() => setOpenSidebar(!isOpenSidebar)}>
                <RxHamburgerMenu size={35} />
            </button>

            {isOpenSidebar && <Sidebar isOpenSidebar={isOpenSidebar} />}
        
        </header>
    )
 
}

export default Header