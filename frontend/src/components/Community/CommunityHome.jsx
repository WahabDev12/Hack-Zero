import Sidebar from "../Sidebar";
import { HeaderStyled } from "../Chillax/Styles/Header.Styled";

const CommunityHome = () => {
    return (
        <>
        <HeaderStyled>
            <div className="dash-header">
                <h3 className="dash-name">Join a community</h3>
                <h3 className="welcome">
                    <a className="create" href="/newcard">Create new</a>
                </h3>
            </div>
        </HeaderStyled>

        <Sidebar />

        <section id="main-dashboard-content">
        

        <div className="flash-div">
    
        <a href="/chillax" className="dash-card">
          <button  
            className="flash-button"
           > 
                <p>AI Gurus</p>
                <span className="card-icon">
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-community-marketing-technology-flaticons-lineal-color-flat-icons-3.png"/>
                </span>
               
          </button>
            
    
          </a>
    
          <a href="/community" className="dash-card">
          <button  
            className="flash-button"
           > 
                <p>Hack Zero</p>
                <span className="card-icon">
                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-community-marketing-technology-flaticons-lineal-color-flat-icons-3.png"/>

                </span>
               
          </button>
            
    
          </a>
    
    
          <a href="/flashcards" className="dash-card">
          <button  
            className="flash-button"
           > 
                <p>Football 24/7</p>
            <span className="card-icon">
                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-community-marketing-technology-flaticons-lineal-color-flat-icons-3.png"/>
            </span>
         
               
          </button>
            
    
          </a>
    
     
    
            </div>  
        </section>


        </>
      );
}
 
export default CommunityHome;