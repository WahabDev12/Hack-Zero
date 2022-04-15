import React, { useState } from 'react'
import FlashCards from './FlashCards'
import '../styles/FlashCards.css'

export default function FlashCardsTemplate({ cards }) {
  
  const [title, setTitle] = useState(" ")
  const [data, setData] = useState(cards)

  const filter = (e) => {
    const searchTitle = e.target.value

    if(searchTitle !== " "){

      const results = cards.filter((card) => {
        return card.title.toLowerCase().includes(searchTitle.toLowerCase());
      });
      setData(results)

    }else{
      setData(cards);
    }

    setTitle(searchTitle);
  }

  console.log(data)

  return (
    <><h3>PUBLIC FLASHCARDS</h3>

      <div className="top-bar">
        <div className="search-box">
          <input className = "search-input" type="search" name = {title} onChange={filter} placeholder="e.g future|" />
          
        </div>
        <div className="search-box">
          <select className = "select-input" type="select">
            <option className = "opt">No filter</option>
            <option className = "opt">DSA</option>
            <option className = "opt">FDE</option>
            <option className = "opt">DST</option>
            <option className = "opt">STAT</option>
            <option className = "opt">MICRO ECONOMICS</option>
            <option className = "opt">WOC</option>
            <option className = "opt">LEADERSHIP</option>
            <option className = "opt">CALCULUS</option>
          </select>
        </div>
      </div>

      <div className="flashcards-wrapper">

      {data.map(card => {
        return <FlashCards Fcard={card} key={card.id}  />
      })}
      </div>
      
    </>
  )
  
}