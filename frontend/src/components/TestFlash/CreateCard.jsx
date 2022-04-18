import Sidebar from "../Sidebar";
import { HeaderStyled } from "../Chillax/Styles/Header.Styled";
import { FormStyled } from '../Chillax/Styles/Form.Styled';
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import axios from "axios";

const CreateCard = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [visibility, setVisibility] = useState("")
    const [inputFields, setInputFields] = useState([
        {question: '', answer: ''}
    ])





    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
     }

    const addFields = () => {
        
        
        let newfield = { question: '', answer: '' }
    
        setInputFields([...inputFields, newfield])
    }




    const handleSubmit = (e) =>{

        e.preventDefault()

        const studysets = {
            title,
            visibility,
            inputFields,
        }

        console.log(studysets)
        

        axios.post({
            url: 'http://localhost:5000/newcard',
            withCredentials: true,
            data:studysets,
        }).then((res) => {console.log("successful")})
        .catch((err) => {console.log(err)})

        navigate("/flashcards")

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
                <div className="settings">
                    <div>
                    <p>Title</p>
                    <input className="set-input" 
                     value= {title} type="text"
                      placeholder="Name of Set...eg: Biology" 
                      onChange={(e)=>{setTitle(e.target.value)}}/>

                    </div>

                    <div>
                    <p>Set Privacy</p>
                        <select 
                            name="format" 
                            id="format"  
                            value ={visibility} 
                            onChange={(e)=>{setVisibility(e.target.value)}}>
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

            <form >
                    {
                       inputFields.map((input, index) => {
                        return (
                            <div key = {index}> 
                            <div  className="q-and-a">
                             
                            <input 
                              type="text"
                              name="question"
                               placeholder={`Question #${index + 1}`}
                               value={input.question}
                               onChange={event => handleFormChange(index, event)}

                            />

                            <input 
                                 type="text" 
                                 name = "answer"
                                 placeholder="Answer..."
                                 value={input.answer}
                                 onChange={(event)=> handleFormChange(index, event)}

                             />
                
                          </div>
                          </div>
                        )
                      })
                    }
                   
                  
                
                <br></br>
                <div className="card-wrapper">
                    <button onClick={addFields()} className="add-card">Add Card</button>
                </div>
                <br></br>
                <br></br>
                
            <div className="card-wrapper-two">
                    <button onClick={handleSubmit}  className="create-set">Create Card</button>
            </div>
            </form>



            </div>

        </FormStyled>



        
        </>
     );
}
 
export default CreateCard;