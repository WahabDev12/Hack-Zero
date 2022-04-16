import Sidebar from "../Sidebar";
import { HeaderStyled } from "../Chillax/Styles/Header.Styled";
import "../flashcards/styles/FlashCards.css";
import {useState} from "react"
import { StudyStyled } from "../Chillax/Styles/Study.Styled";


const StudySet = () => {

    const [tipOver, setTipOver] = useState(false);


    return (  
        <>
         <HeaderStyled>
            <div className="dash-header">
                <h3 className="dash-name">Intro to Computing</h3>
                <h3 className="welcome">
                    20 Questions
                </h3>
            </div>
        </HeaderStyled>

        <Sidebar />

            <StudyStyled>
            <section className="main-card">
            <div className = {`flash-card ${tipOver ? 'tipOver' : ''}` } onClick = {() => setTipOver(!tipOver)}>
                <div className="card-front">
                    <small>
                    Lorem Ipsum is simply dummy text of the printing aectronic typesetting,
                     remaining essentially unchanged

                    </small>
                </div>
                <div className="card-back">
                    <small>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </small>
                </div>
            </div>

            <div className="next-prev">
                <button><ion-icon name="arrow-back-outline"></ion-icon></button>
                <button className="front"><ion-icon name="arrow-forward-outline"></ion-icon></button>

            </div>

            </section>

            </StudyStyled>






        
        </>
    );
}
 
export default StudySet;