import React, { useState } from 'react'



function StudySetsCards({studycards}) {

    const [openSet, setOpenSet] = useState(false);


    const handleOpenSet  = () => {

        setOpenSet(true);
    }


    return (
        
        <div className="studysets-card" >
            <div className="studyset-card-front">{studycards.title}</div>
            
            
        </div>
        
    )
}

export default StudySetsCards
