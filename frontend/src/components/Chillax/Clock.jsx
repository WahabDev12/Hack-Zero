import { Button } from "./Styles/Button.Styled";

const Clock = () => {
    return ( 
        <>
        <Button>

          <p className="attribute">
              Clock
           </p>

          <div className="card-icon">
                <ion-icon style={{fontSize:"90px"}} name="time-outline"></ion-icon>
          </div>

        </Button>


       
       </>
     );
}
 
export default Clock;