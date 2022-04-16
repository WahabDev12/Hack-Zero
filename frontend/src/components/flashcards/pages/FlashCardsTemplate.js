import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import FlashCards from './FlashCards'
import '../styles/FlashCards.css'
import ReactPaginate from 'react-paginate'

export default function FlashCardsTemplate() {

  const {id} = useParams()
  console.log(id)
  const [Data, setData] = useState([])
  const [mainset, setMainset] = useState([])
  const [pageNumber, setPageNumber] = useState(0)

  const fetchData = (id) => {
    
      axios.get('http://localhost:5000/flashcards/' + id, {
        withCredentials: true
      })
        .then(response => {
          if(response){
            
            setData(response.data.cards)
            setMainset(response.data)
            console.log(Data)
          }
        }).catch(error => {console.log(error)});
    }

    useEffect(() => {
    
      fetchData(id)
      
    }, [id]);

    
    const cardPerPage = 1;
    const prevPages = pageNumber * cardPerPage;


    const displayFlashCards = Data
    .slice(prevPages, cardPerPage + prevPages)
    .map(card =>{
      return <>
              <div key={card._id}>
                <FlashCards Fcard={card} />
              </div>
            </>
    })

    const pageCount = Math.ceil(Data.length/cardPerPage)
    const PageChange = ({selected}) =>{
      setPageNumber(selected);
    }


  return (
    <>
    
      <h3>{mainset.visibility} STUDYSET OF FLASH CARDS</h3>

      <div className="top-bar">
        <div className="search-box">
          <input className = "search-input" type="search"  placeholder="e.g future|" />
          
        </div>
       
      </div>

      <div className="flashcards-wrapper">
          {displayFlashCards}

          <ReactPaginate 
            previousLabel = {"Prev"}
            nextLabel = {"Nxt"}
            pageCount = {pageCount}
            onPageChange = {PageChange}
            containerClassName = {"paginationBttns"}
            previousLinkClassName = {"previousBttn"}
            nextLinkClassName = {"nextBttn"}
            disabledClassName = {"paginationDisabled"}
            activeClassName = {"paginationActive"}
          />
      </div>
      
    </>
  )
  
}