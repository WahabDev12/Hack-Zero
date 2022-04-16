import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import StudySetsCards from './StudySetsCards'
import '../styles/studysetscards.css'



function StudySets() {
    const [info, setInfo] = useState([])
    const [cards, setCards] = useState(info)
    const [title, setTitle] = useState(" ")
    const navigate = useNavigate()
    const user = "";

    axios.get('http://localhost:5000/flashcards', {
      withCredentials: true
    })
      .then(response => {
        if(response){
          setInfo(response.data)
        }
        else{console.log("an error occurred")}
      
      })


    const filter = (e) => {
      const searchTitle = e.target.value
      setTitle(searchTitle);
  
    
      if(searchTitle !== " "){
  
        const results = info.filter((card) => {
          return card.title.toLowerCase().includes(searchTitle.toLowerCase());
        });
        setCards(results)
  
      }
      else{
        setCards(info)
      }
      
    }

    
    return (


        <>
          <div className="top-bar">
            <div><h3>PUBLIC</h3></div>
            <div className="search-box">
                <input className="search-input" type="search" name={title} onChange={filter} placeholder="..search" />

            </div>
            <div className="search-box">
                <select className="select-input" type="select">
                    <option className="opt">ALL CARDS</option>
                    <option className="opt">PUBLIC CARDS</option>
                    <option className="opt">PRIVATE CARDS</option>
                    
                </select>
            </div>
          </div>

            {user? 
            <div className="studysets-card-container">
              
                {cards.map(studyset => {
                    return <>
                            <div key={studyset._id} className="studyset-front" onClick={() => {navigate("/flashcards/" + studyset._id, '_self')}}>
                                <StudySetsCards studycards={studyset}  />
                            </div>

                        </>
                    
                })}
              
            </div>:
            
                
            <div className="studysets-card-container">
              
                {cards.map(studyset => {
                    return <>
                            <div key={studyset._id} className="studyset-front" onClick={() => {navigate("/flashcards/" + studyset._id, '_self')}}>
                                <StudySetsCards studycards={studyset}  />
                            </div>

                        </>
                    
                })}
          
          </div>}

        </>
    )
}

export default StudySets
