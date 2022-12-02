import { useState, useEffect, useContext } from 'react';
import './insidereviewPage.scss';
import api from '../../utils/api';
import { Link } from 'react-router-dom';
import GetReturns from '../getReturns';


















const InsidereviewPage = () => {




    return ( 
        <>
            <section className='return-container'>
                <div>
                    <p>Return Details:</p>
                        <a href = {``} className='return'>
                            <p>Module 4</p> 
                        </a>
                        <br />    
                        <a href = {``} className='return'>
                            <p>Return Date</p> 
                        </a>
                        <br />  
                        <a href = {``} className='return'>
                            <p>URL</p> 
                        </a>
                        <br />  
                        <a href = {``} className='return'>
                            <p>Live Version</p> 
                        </a>
                        <br />  
                        <a href = {``} className='return'>
                            <p>Comment</p> 
                        </a>
                        <br />  
                        <a href = {``} className='return'>
                            <p>Image</p> 
                        </a>
                </div>
             </section>


             
   
        </>
    










     );
}
 
export default InsidereviewPage;