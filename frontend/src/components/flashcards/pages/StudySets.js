import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import StudySetsCards from './StudySetsCards'
import FlashCardsTemp from '../pages/FlashCardsTemplate'
import FilterBar from '../components/FilterBar'
import Data from '../components/pseudoCards'
import '../styles/studysetscards.css'


function StudySets({ studysets }) {
    const [openSet, setOpenSet] = useState(false)



    return (


        <>
            <FilterBar info = { studysets }/>

            <div className="studysets-card-container">
                {studysets.map(studycard => {
                    return <>
                            <div className="studyset-front" onClick={() =>{setOpenSet(!openSet)}}>
                                <StudySetsCards studycards={studycard} key={studycard.id} />
                            </div>
                            {openSet &&
                            <div className="studyset-details">

                               {window.open(`http://localhost:3001/flashcards`)}
                               
                            </div>
                            }
                        </>
                    
                })}
                
            </div>

        </>
    )
}

export default StudySets
