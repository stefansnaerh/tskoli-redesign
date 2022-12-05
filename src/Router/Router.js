import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import MainPage from "../pages/mainPage/mainPage";
import CalendarPage from "../pages/calendarPage/calendarPage"
import AllModules from "../pages/allModules/allModules";
import Resources from "../pages/resources/resources"
import Gallery from "../pages/galleryPage/galleryPage"
import Modules from "../pages/modules/modules";
import Guide from "../pages/guide/guide";
import InsidereviewPage from "../components/Insidereviewpage/insidereviewPage";
import LoginPage from "../pages/loginPage/loginPage";
import Sidebar from "../components/Sidebar/sidebar";


import './router.scss';



const RouterComponet = () => {
    return (
        <>
        <BrowserRouter>
        <main className="main-wrapper">
            
        <Navbar/>
        
        <div className="sidebar-display">
            <Sidebar/>
        </div>
        <section className="content-wrapper">
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/loginpage" element={<LoginPage/>}/>
            <Route path="/allmodules" element={<AllModules/>}/>
            <Route path="/recources" element={<Resources/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/calendar" element={<CalendarPage/>}/>
            <Route path="/guide" element={<Guide/>}/>
            <Route path="/modules" element={<Modules/>}/>
            <Route path="/return/:returnId" element={<InsidereviewPage/>}/>
           
        </Routes>
        </section>
        </main>
        </BrowserRouter>
        </>
    )
}


     
export default RouterComponet