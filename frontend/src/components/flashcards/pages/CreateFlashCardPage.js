import React, { useState } from 'react'
import CreateFlash from './CreateFlashCard'


const CreateFlashCardPage = () => {
    const [count, setCount] = useState(0)
    
    const increment = () =>{
        setCount(count + 1)

    }

    const decrement = () =>{
        setCount(count - 1)

    }


    const handleSubmit = () =>{
        
    }
 
    return (
            <div className =" create-page-container">
                <div className ="create-studyset-wrapper"> 

                    <div className="group">      
                        <input type="text" className="input-fieldA" />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>
                            Course/Subject/Title
                        </label>
                    </div>
                    <div className="group">      
                        <input type="text" className="input-fieldA" placeholder="e.g Booleans,Logic Gates, ..." />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>
                            Tags
                        </label>
                    </div>
                    <div className="group">      
                        <input type="text" className="input-fieldA" placeholder="Public" />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>
                            Visibility
                        </label>
                    </div>
                    <div className="control-btns"> 
                        <div>
                            <button className="btn" onClick={() =>{increment();}}>Add Fields</button>
                        </div>
                        <div> 
                            <button className="btn" onClick={() =>{decrement();}}>Delete Fields</button>
                        </div>

                    </div>

                </div>

                {Array.from({ length: count }, (_, k) => 
                <div key={k} classNames = "create-cards">
                   {k+1} <CreateFlash />

                </div>)}
                <div>
                    <button className="create-btn">Create Cards</button>
                </div>
            </div>
    )

}

export default CreateFlashCardPage
