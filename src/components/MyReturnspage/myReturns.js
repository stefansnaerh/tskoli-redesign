import './myReturns.scss';

import api from '../../utils/api'
import { useState, useEffect } from 'react';



const MyReturns = () => {

    const [assignments, setAssignments] = useState([])
    const [returns, setReturns] = useState([])



    useEffect(() => {
        const getGuides = async ()=>{
            const g = await api.get('/assignments')
            const a = await api.get('/assignmentreturns')

            setAssignments(g.data.filter(g => !g.hidden))
            setReturns(a.data)
        }
        getGuides()
    }, [])

    useEffect(() => {
        const newReturns = returns.map(assignment => {
            return assignment.assignment}
        )
        console.log(newReturns)
    }, [returns])
    console.log(assignments)
    console.log(returns)

    return (
        <section className='guides-section-container'>

        </section>
    )
}


export default MyReturns