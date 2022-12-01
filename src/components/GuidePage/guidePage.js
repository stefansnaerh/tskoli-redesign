

import { useState ,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';

import './guidePage.scss';

import { GuideToDisplay, ModuleToDisplay } from '../../App';





const GuidePage = () => {

    const [guide, setGuide] = useState([])
    const [loading, setLoading] = useState(true)
    const {displayGuide, setDisplayGuide} = useContext(GuideToDisplay)

    useEffect(()=>{
        const getGuide = async ()=>{
          const g = await api.get(`/guides/${displayGuide}`)
          setGuide(g.data)
          setLoading(false)
        }
        getGuide()
      },[])

      console.log(guide)
    return (
        <section className="guide-section">
          <div className='guide-info-container'>
          {loading ? (<p>Loading.....</p>): 
          (
            <>
            <div className='guide-description-container'>
            <h1>Module {guide.project.Title.slice(0,1)}</h1>
            <h2>{guide.Title}</h2>
            <h2>Description</h2>
            <div dangerouslySetInnerHTML={{__html: guide.Description}}></div>
            <div dangerouslySetInnerHTML={{__html: guide.Deliver.Description}}></div>
            </div>
            <div className='guide-extra-info-container'>
              <div className='materials-container'>
                <h2>Materials</h2>
                <ul>
                  {guide.Classes.map((name) => {
                    return (
                      <>
                      <a href={name.Link} target="_blank">
                      <li>{name.Title}</li>
                      </a>
                      </>
                    )
                  })}
                </ul>
              </div>
              <div className='topics'>
                  <h2>Topics</h2>
                <div dangerouslySetInnerHTML={{__html:guide.topicsList}}></div>
                </div>
            </div>
            </>
          )}
          </div>
          <button className='return-guide-btn'>Return</button>
        </section>
    )
}

export default GuidePage