import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Main from "./components/Chillax/Main";
import FlashCardsTemplate from "./components/flashcards/pages/FlashCardsTemplate";
import pseudoCards from './components/flashcards/components/pseudoCards'
import CommunityPage from "./components/Community/CommunityPage";
import Home from "./components/Home";
import CreateFlashCardPage from "./components/flashcards/pages/CreateFlashCardPage";
import StudySets from "./components/flashcards/pages/StudySets";
import pseudoCards2 from './components/flashcards/components/pseusdoCards2'
import Comments from "./components/Community/CommentsSection";
import CommentPage from "./components/Community/CommentPage";
import PostFormProvider from "./components/Community/Contexts/PostFormContext";
import PostDataProvider from "./components/Community/Contexts/PostDataContext";
import Dashboard from "./components/Dashboard";



const App = () => {



  return (
    <div className="App">
     
        <Router>  
<<<<<<< HEAD
            <Routes>
                <Route path="/community" element={<CommunityPage />}/>
                <Route exact path="/" element={<Home />} />
                <Route path="/chillax" element={<Main />} />
                <Route path = "/flashcards/:id" element = {<FlashCardsTemplate />} /> 
                <Route path="/community" element={<CommunityPage/>}/>
                <Route exact path="/" element={<Home />} />
                <Route path="/chillax" element={<Main />} />
                <Route path = "/flashcards/:data" element = {<FlashCardsTemplate cards = {pseudoCards}/>} /> 
                <Route path = "/studysets" element = {<StudySets studysets = {pseudoCards2} /> } />
                <Route path='/createcard' element = {<CreateFlashCardPage />} />
            </Routes>
        </Router> 
=======
              <Routes>
                 
                  <Route exact path="/" element={<Home />} />
                  <Route path="/community/:id" element={<CommunityPage/>}/>
                  <Route path="/chillax" element={<Main />} />
                  <Route path="comment/:id" element={<CommentPage/>} />
                  <Route path = "/flashcards/:id" element = {<FlashCardsTemplate />} />
                  <Route path="/createcard" element={<CreateFlashCardPage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  
              </Routes>

            </Router>
      
>>>>>>> 9e9f5e912cc35b0e3e564c3e23e2464f527ab589
    </div>
  );
}

export default App;
