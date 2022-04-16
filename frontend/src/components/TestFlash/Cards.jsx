import "../Chillax/Styles/flash.css"

const Cards = () => {
    return ( 
        <>
        <section id="main-dashboard-content">
        

    <div className="flash-div">

    <a href="/chillax" className="dash-card">
      <button  
        className="flash-button"
       > 
            <p>Intro to Computing</p>
            <span className="card-icon">
                <img src="https://img.icons8.com/bubbles/50/000000/for-experienced.png"/>
            </span>
           
      </button>
        

      </a>

      <a href="/community" className="dash-card">
      <button  
        className="flash-button"
       > 
            <p>Statistics</p>
            <span className="card-icon">
            <img src="https://img.icons8.com/bubbles/50/000000/for-experienced.png"/>

            </span>
           
      </button>
        

      </a>


      <a href="/flashcards" className="dash-card">
      <button  
        className="flash-button"
       > 
            <p>Discrete Maths</p>
            <span className="card-icon">
            <img src="https://img.icons8.com/bubbles/50/000000/for-experienced.png"/>
        </span>
     
           
      </button>
        

      </a>

 

        </div>  
    </section>
        
        </>
     );
}
 
export default Cards;