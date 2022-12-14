


import { useState ,useEffect, useContext } from 'react';
import api from '../../utils/api';
import './guidePage.scss';
import { GuideToDisplay } from '../../App';
import ReturnGuideModal from '../../components/ReturnGuideModal/returnGuideModal'

const GuidePage = () => {

    const [guide, setGuide] = useState([])
    const [loading, setLoading] = useState(true)
    const {displayGuide, setDisplayGuide} = useContext(GuideToDisplay)
    const [returnModal, setReturnModal] = useState(false)

    useEffect(()=>{
        const getGuide = async ()=>{
          const g = await api.get(`/guides/${displayGuide}`)
          setGuide(g.data)
          setLoading(false)
        }
        getGuide()
      },[])
 
    return (
        <section aria-label='info for guide' className="guide-section">
          {returnModal ? (<>
          <ReturnGuideModal/>
          </>): null}
          <div className='guide-info-container'>
          {loading ? (<p>Loading.....</p>): 
          (
            <>
            <div className='guide-description-container'>
            <h1>Module {guide.project.Title.slice(0,1)}</h1>
            <h2 className='guide-title'>{guide.Title}</h2>
            <h2>Description</h2>
            <div dangerouslySetInnerHTML={{__html: guide.Description}}></div>
            <div className='testing' dangerouslySetInnerHTML={{__html: guide.Deliver.Description}}></div>
            </div>
            <div className='guide-extra-info-container'>
              <div className='materials-container'>
                <h2>Materials</h2>
                <ul>
                  {guide.Classes.map((name) => {
                    return (
                      <>
                      <a aria-label='link to materials' href={name.Link} rel="noreferer" target="_blank">
                      <li>{name.Title}</li>
                      </a>
                      </>
                    )
                  })}
                </ul>
              </div>
              <div className='topics'>
                  <h2>Topics</h2>
                <div aria-label='topics for this guide' dangerouslySetInnerHTML={{__html:guide.topicsList}}></div>
                </div>
            </div>
            </>
          )}
          </div>
          <button onClick={() => setReturnModal(true)} className='return-guide-btn'>RETURN</button>
        </section>
    )
}

export default GuidePage