import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import MainPage from "../pages/mainPage/mainPage";
import CalendarPage from "../pages/calendarPage/calendarPage"
import AllModules from "../pages/allModules/allModules";
import Resources from "../pages/resources/resources";
import Gallery from "../pages/galleryPage/galleryPage"
import Modules from "../pages/modules/modules";
import InsidereviewPage from "../components/Insidereviewpage/insidereviewPage";
import LoginPage from "../pages/loginPage/loginPage";
import Sidebar from "../components/Sidebar/sidebar";
import Feedbackpage from "../components/Feedbackpage/feedbackPage";
import People from "../pages/people/people";


import './router.scss';
import GuidePage from "../pages/guidePage/guidePage";




const RouterComponet = () => {

    return (
        <>
        <HashRouter>
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
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/calendar" element={<CalendarPage/>}/>
            <Route path="/guide" element={<GuidePage/>}/>
            <Route path="/modules" element={<Modules/>}/>
            <Route path="/insidereview/:returnId" element={<InsidereviewPage/>}/>
            <Route path="/feedback" element={<Feedbackpage/>}/>
            <Route path="/people" element={<People/>}/>
        </Routes>
        </section>
        </main>
        </HashRouter>
        </>
    )
}


     
export default RouterComponet