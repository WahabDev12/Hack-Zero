import { Button } from "./Styles/Button.Styled";

const Train = () => {
    return (  
        <>
         <Button>

           <p className="attribute">
               Train
            </p>

           <div className="card-icon">
                    <ion-icon  style={{fontSize:"90px"}} name="train-outline"></ion-icon>      
           </div>

         </Button>


        
        </>
    );
}
 
export default Train;