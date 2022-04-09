import { Button } from "./Styles/Button.Styled";

const Rain = () => {
    return ( 
        <>
         <Button>

           <p className="attribute">
               Rain
            </p>

           <div className="card-icon">
                  <ion-icon style={{fontSize:"90px"}}  name="rainy-outline"></ion-icon>
           </div>

         </Button>


        
        </>
     );
}
 
export default Rain;