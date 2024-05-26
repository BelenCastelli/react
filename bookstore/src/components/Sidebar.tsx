import Menu from "./Menu"

type SidebarProps = {
   isOpenSidebar?: boolean
}

function Sidebar (props:SidebarProps) {
   const {isOpenSidebar} = props
  
    return (
       <div className="md:hidden fixed w-60 py-24 top-0 right-0 
            flex items-center justify-center  bg-green-200 rounded">
         <Menu isOpenSidebar={isOpenSidebar}/>
       </div>
     
    )
}

export default Sidebar