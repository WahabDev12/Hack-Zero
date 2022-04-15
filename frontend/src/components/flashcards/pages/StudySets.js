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


                                {/* {window.postMessage("data", "http://localhost:3000/flashcards", studycard.cards )} */}
                               {window.open(`http://localhost:3000/flashcards/${studycard.id}`)}
                                
                                {/* <Routes>
                               
                                    <Route path="/flashcardssets" element ={ <FlashCardsTemp cards = {studycard.cards} />}></Route>
                                
                                </Routes> */}
                                


                            </div>
                            }
                        </>
                    
                })}
                
            </div>

        </>
    )
}

export default StudySets
