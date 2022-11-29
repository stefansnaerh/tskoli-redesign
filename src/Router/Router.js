import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import MainPage from "../pages/mainPage/mainPage";
import CalendarPage from "../pages/calendarPage/calendarPage"
import AllModules from "../pages/allModules/allModules";
import Resources from "../pages/resources/resources"
import Gallery from "../pages/gallery/gallery"
import Modules from "../pages/modules/modules";
import Guide from "../pages/guide/guide";




const RouterComponet = () => {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/allmodules" element={<AllModules/>}/>
            <Route path="/recources" element={<Resources/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/calendar" element={<CalendarPage/>}/>
            <Route path="/guide" element={<Guide/>}/>
            <Route path="/modules" element={<Modules/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}


     
export default RouterComponet