import "../Chillax/Styles/flash.css"
import axios from "axios"
import {useState,useEffect} from "react"

const Cards = () => {

    const [openSet, setOpenSet] = useState(false)
    const [studySets, setStudySets] = useState([])

    
    useEffect(()=>{
        axios.get('http://localhost:5000/flashcards', {
            withCredentials: true
          })
            .then(response => {
              if(response){
                  console.log(response.data)
                    setStudySets(response.data)
              }
              else{console.log("an error occurred")}
            
            })
    },[])
    


    return ( 
        <>
        <section id="main-dashboard-content">
            <div  className="flash-div">
            {
                studySets.map(studySet => {
                   return <a href={`/studyset/${studySet._id}`} className="dash-card">
                    <button key={studySet._id}  className="flash-button"> 
                            <p>{studySet.title}</p>
                            <span className="card-icon">
                                <img src="https://img.icons8.com/bubbles/50/000000/for-experienced.png"/>
                            </span>
                        
                    </button>
                        
    
                    </a>
    
})
}
</div>  
          
    </section>
        
        </>
     );
}
 
export default Cards;