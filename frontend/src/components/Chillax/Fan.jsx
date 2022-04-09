import { Button } from "./Styles/Button.Styled";

const Fan = () => {
    return ( 
        <>
         <Button>

           <p className="attribute">
               Fan
            </p>

           <div className="card-icon">
                <span class="iconify" style={{fontSize:"90px"}}  data-icon="lucide:wind"></span>
           
            </div>

         </Button>


        
        </>
     );
}
 
export default Fan;