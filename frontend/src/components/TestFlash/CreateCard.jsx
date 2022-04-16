import Sidebar from "../Sidebar";
import { HeaderStyled } from "../Chillax/Styles/Header.Styled";
import { FormStyled } from '../Chillax/Styles/Form.Styled';
import {useState} from "react"

const CreateCard = () => {

    const [inputFields, setInputFields] = useState([
        {question: '', age: ''}
    ])


    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
     }

    const addFields = (e) => {
        e.preventDefault();
        let newfield = { question: '', answer: '' }
    
        setInputFields([...inputFields, newfield])
    }

    return ( 
        <>
         <HeaderStyled>
        <div className="dash-header">
            <h3 className="dash-name">Create new set</h3>
            <h3 className="welcome"><a href="">My Cards</a></h3>
        </div>
        </HeaderStyled>

        <Sidebar />

        <FormStyled>
            <div className="dyno-forms">
            <form>
                <div className="settings">
                    <div>
                    <p>Set Name</p>
                    <input className="set-input" type="text" placeholder="Name of Set...eg: Biology" />

                    </div>

                    <div>
                    <p>Set Privacy</p>
                        <select name="format" id="format">
                                    <option selected disabled>Select Privacy</option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>

                        </select>
                    </div>

                </div>

                <br></br>
                <br></br>

                <h3>Questions</h3>

                <br></br>

                    {
                       inputFields.map((input, index) => {
                        return (
                            <div>
                            <div className="q-and-a">
                             
                             <input 
                              type="text"
                               placeholder={`Question #${index + 1}`}
                               value={input.question}
                               onChange={event => handleFormChange(index, event)}

                            />

                            <input 
                                 type="text" 
                                 placeholder="Answer..."
                                 value={input.asnwer}
                                 onChange={event => handleFormChange(index, event)}

                             />
                
                          </div>
                          </div>
                        )
                      })
                    }
                   
                  
                
                <br></br>
                <div className="card-wrapper">
                    <button onClick={addFields} className="add-card">Add Card</button>
                </div>
            </form>

            </div>

        </FormStyled>



        
        </>
     );
}
 
export default CreateCard;