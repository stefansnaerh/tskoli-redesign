

import { useState ,useEffect } from 'react';
import api from '../../utils/api';

import './guidePage.scss';




const GuidePage = () => {

    const [guides, setGuides] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getGuides = async ()=>{
          const g = await api.get('/guides');
          // filter away hidden guides and update to state
          setGuides(g.data.filter(g => !g.hidden))

         
        }
        getGuides()
      },[])

     
    useEffect(() => {

        const getAllGuides = guides.map(guide => {
            return {
                guideTitle: guide.Title,
                classes: guide.Classes,
                description: guide.Deliver.Description,
                knowledge: guide.Knowledge,
                skills: guide.Skills,
                actionPoints: guide.actionPoints,
                references: guide.references
            }
          
        })
        console.log(getAllGuides)
        setLoading(false)
    }, [guides])
      console.log(guides)

    return (
        <section className='guide-info-container'>

            
        </section>
    )
}

export default GuidePage