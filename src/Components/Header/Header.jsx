import Sidebar from "../Sidebar/Sidebar";
import PrimarySearchAppBar from "../NavBar/Navbar";
import "./Header.css"

const Header = ()=>{
    return(
        <div className="Header">
          <Sidebar />
          <PrimarySearchAppBar />
        </div>
    )
}

export default Header;