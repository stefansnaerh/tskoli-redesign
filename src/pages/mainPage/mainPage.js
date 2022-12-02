import Dashboard from "../../components/Dashboard/dashboard"
import Sidebar from "../../components/Sidebar/sidebar"


const MainPage = () => {
    console.log (window.screen.width)
    return (
        <>
        {window.screen.width>768?<Dashboard/>:<Sidebar/>}
        </>
    )
}

export default MainPage