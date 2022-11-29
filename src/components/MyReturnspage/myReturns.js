import './myReturns.scss';

import api from '../../utils/api'
import { useState, useEffect, useContext} from 'react';

import { ModuleToDisplay } from '../../App';
import { SwitchToReturns } from '../../pages/modules/modules'

const MyReturns = () => {

    const [assignments, setAssignments] = useState([])
    const [returns, setReturns] = useState([])

    const [currentGuides, setCurrentGuides] = useState([])
    const [currentModule, setCurrentModule] = useState([])

    const [loading, setLoading] = useState(true)

    const {displayModule, setDisplayModule} = useContext(ModuleToDisplay)
    const {displayReturns, setDisplayReturns} = useContext(SwitchToReturns)

    useEffect(() => {
        const getGuides = async ()=>{
            const g = await api.get('/assignments')
            const a = await api.get('/assignmentreturns')

            setAssignments(g.data.filter(g => !g.hidden))
            setReturns(a.data)
        }
        getGuides()
    }, [])
    const count = {}
    useEffect(() => {
        const newReturns = returns.map(assignment => {
            return assignment.assignment}
        )
        console.log(newReturns)

        const newModules = assignments.map(guide => {
            return {
                id: guide._id,
                title : guide.project,
                guideTitle: guide.guide,
                isReturned: false,
            }
        })

        for(const element of newModules){
            if(count[element.title]){
                count[element.title].ids.push(element.id)
                if(count[element.title]){
                    count[element.title].guideTitle.push(element.guideTitle)
                }
            } else {
                count[element.title] = {ids:[element.id], guideTitle:[element.guideTitle], isReturned:[element.isReturned]}
            }
            if (newReturns.includes(element.id)){
                count[element.title].isReturned.push(true)
            }
            else{
                count[element.title].isReturned.push(false)
            }
            setLoading(false)
        }
        const order = Object.keys(count).sort().reduce(
            (obj, key) => {
                obj[key] = count[key]
                return obj;
            },
            {}
        );
        const orderModule = Object.keys(count).sort()
        setCurrentModule(orderModule[displayModule])
        setCurrentGuides(Object.values(order)[displayModule])
    }, [returns])

    let sortReturnWithTitle
    if (loading === false){
        const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
        sortReturnWithTitle= zip(currentGuides.guideTitle, currentGuides.isReturned)
        console.log(sortReturnWithTitle)
        }
    return (
        <section className='guides-section-container'>
            {loading ? (<>......loading</>) : 
            (<>
            <div className='name-button-container'>
                <h1 className='guide-header'>{currentModule}</h1>
                <div className='guide-btns-container'>
                    <button href = "#" onClick={() => setDisplayReturns(true)} className='guides-btn' style={{background: "#FFFFFF", color:"#6563EB"}}>GUIDES </button>
                    <button href = "#" className='myreturn-btn' style={{background: "#6563EB", color:"#FFFFFF"}}>MY RETURNS</button>
                </div>
            </div>
            <div className='all-guides-container'>
                {sortReturnWithTitle.map((name, key) => {
                    return (
                        <>
                            {name[1] === true ? (
                            <div key={key} className="guide-returned-container">
                                <h1>Guide {key}</h1>
                                <h3>{name[0]}</h3>
                                <span className='black-line'></span>
                                <h3>Passed</h3>
                            </div>): null}
                            </>
                    )
                })}
            </div>
            </>)}

        </section>
    )
}


export default MyReturns