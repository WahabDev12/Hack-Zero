import "../components/Chillax/Styles/dashboard.css";
import DashContent from "./DashContent";

const Dashboard = () => {
    return ( 
        <>
        <main style={{backgroundColor:"#f1f2f8"}} className="dash-main">
                <section id="sidebar">

                <section className="title-container">
                <img className="dash-icon" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-owl-education-justicon-flat-justicon.png"/>
                <h1>StudySmarter</h1>
                </section>

                <section className="links-container">

                <a className="links">
                    
                    <span>🏠 Dashboard</span>
                </a>

                <a className="links">

                   
                    <span>🎮 Games</span>
                </a>

                <a className="links">
                    
                    <span> 💆‍♂️ Chillax</span>
                </a>

                <a className="links">
                    
                    <span>👨‍👦‍👦 Join Groups</span>
                </a>

                <a className="links">
                    
                    <span> 🌎 Connect</span>

                </a>

                <a className="links">
                    
                    <span>⚡ FlashGo</span>
                </a>

                <a className="links">
                   
                    <span>🏃‍♂️ Logout</span>
                </a>

                </section>

            </section>



        {/* DASHBOARD CONTENT */}

        <DashContent />


      

        </main>
      </>
     );
}
 
export default Dashboard;