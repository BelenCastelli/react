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
            <div className="hidden md:block">
                <Menu isOpenSidebar={isOpenSidebar}/>
            </div>
      

            <button className="md:hidden px-4 relative z-10" onClick={() => setOpenSidebar(!isOpenSidebar)}>
                <RxHamburgerMenu size={35} />
            </button>

            {isOpenSidebar && <Sidebar/>}
        

            
        </header>
    )
 
}

export default Header