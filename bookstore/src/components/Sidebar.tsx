import Menu from "./Menu"


function Sidebar () {
  
  
    return (
       <div className="md:hidden fixed w-60 py-24 h-full flex items-center
       justify-center  bg-green-100 left-0 top-0">
          <Menu/>
       </div>
     
    )
}

export default Sidebar