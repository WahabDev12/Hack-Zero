import { Button } from "./Styles/Button.Styled";

const Chirp = () => {
    return (  
        <>
        <Button>

          <p className="attribute">
              Birds Chirp
           </p>

          <div className="card-icon">
                <span class="iconify" data-icon="lucide:twitter" style={{fontSize:"90px"}}></span>
          
            </div>

        </Button>


       
       </>
    );
}
 
export default Chirp;