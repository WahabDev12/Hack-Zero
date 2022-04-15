import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/createFlashCard.css'
import PopUp from '../components/Modal'

const CreateFlashCardPage = () => {
    const [showPopup, setShowPopup] = useState(false);


    return (
        <>{showPopup && <PopUp setShowPopup={setShowPopup} />}
            <div className="options-container">
                <div className="btn-wrapper">
                    <button className="create-btn" onClick={() => setShowPopup(true)}>Create New Flash Card</button>
                </div>
                <div className="btn-wrapper">
                   
                   <Link to = "/flashcards:id" > <button className="view-btn">Go to Flash Cards Page</button></Link>
                </div>
            </div>

        </>
    )
}

export default CreateFlashCardPage
