import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Main from "./components/Chillax/Main";
import FlashCardsTemplate from "./components/flashcards/pages/FlashCardsTemplate";
import pseudoCards from './components/flashcards/components/pseudoCards'
import CommunityPage from "./components/Community/CommunityPage";
import Home from "./components/Home";
import CreateFlashCardPage from "./components/flashcards/pages/CreateFlashCardPage";
import StudySets from "./components/flashcards/pages/StudySets";
import pseudoCards2 from './components/flashcards/components/pseusdoCards2'
<<<<<<< HEAD
import Dashboard from "./components/Dashboard";
=======
import Comments from "./components/Community/CommentsSection";
import CommentPage from "./components/Community/CommentPage";
import PostFormProvider from "./components/Community/Contexts/PostFormContext";
import PostDataProvider from "./components/Community/Contexts/PostDataContext";


>>>>>>> 1c2d601f5eb95b2e5f3596bb87479a7b0c538547

const App = () => {



  return (
    <div className="App">
     
        <Router>  
              <Routes>
                 
                  <Route exact path="/" element={<Home />} />
<<<<<<< HEAD
                  <Route path="/chillax" element={<Main />} />
                  <Route path="/dashboard" element={<Dashboard />} />

                  <Route path = "/flashcards/:data" element = {<FlashCardsTemplate cards = {pseudoCards}/>} /> 
                  <Route path = "/studysets" element = {<StudySets studysets = {pseudoCards2} /> } />
                  <Route path='/createcard' element = {<CreateFlashCardPage />} />
                  
=======
                  <Route path="/community/:id" element={<CommunityPage/>}/>
                  <Route path="/chillax" element={<Main />} />
                  <Route path="comment/:id" element={<CommentPage/>} />
                  <Route path = "/flashcards/:id" element = {<FlashCardsTemplate />} />
                  <Route exact path="/createcard" element={<CreateFlashCardPage />} />
                  <Route path="/chillax" element={<Main />} />
>>>>>>> 1c2d601f5eb95b2e5f3596bb87479a7b0c538547

              </Routes>

            </Router>
      
    </div>
  );
}

export default App;
