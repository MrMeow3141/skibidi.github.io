import './Website.css';

import {GrMail} from 'react-icons/gr'
// eslint-disable-next-line
import {SiGithub,SiCodeforces,SiLeetcode} from 'react-icons/si'
import {GiCube} from 'react-icons/gi'
import {BrowserRouter as Router,Route,Link,Switch,useLocation} from "react-router-dom"

import Home from './Pages/Homepage';
import Projects from './Pages/Achievements';
import Problems from './Pages/Problems';
import ProblemList from './Pages/Problems/List';
import Problem1 from './Pages/Problems/Problem1';
import Problem2 from './Pages/Problems/Problem2';

function Website(){
    return (
        <div>
            <Router>
                <TopBar/>
                <Switch>
                    <Route path="/problemlist/2">
                        <Problem2/>
                    </Route>
                    <Route path="/problemlist/1">
                        <Problem1/>
                    </Route>
                    <Route path="/problemlist">
                        <ProblemList/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/problems">
                        <Problems/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
            {/* <div className="BottomBar">
                Website created with React <a href="https://github.com/HenrySTEM/HenrySTEM.github.io" target="_blank">[Source Code]</a>
            </div> */}
        </div>
        
    )
}

function TopBar() {
    let path = useLocation().pathname;

    return(
        <div className="Bar">
            <div className="BarLeft">
                {/* eslint-disable-next-line */}
                <Link className="Pagelink" to="/" style={{color: (path === "/" ? "rgb(34, 148, 255)" : "rgb(98, 195, 255)")}}>Henry Jiang</Link>
                {/* eslint-disable-next-line */}
                <Link className="Pagelink" to="/projects" style={{color: (path === "/projects" ? "rgb(34, 148, 255)" : "rgb(98, 195, 255)")}}>Achievements</Link>
                {/* eslint-disable-next-line */}
                <Link className="Pagelink" to="/problems" style={{color: (path === "/problems" ? "rgb(34, 148, 255)" : "rgb(98, 195, 255)")}}>Puzzles</Link>
            </div>
            
            <div className="BarRight">
                <a href="mailto: jiangstem@gmail.com" target="_blank"> <div className = "BarLink"> <GrMail/> Email </div> </a>
                <a href="https://github.com/HenrySTEM" target="_blank"> <div className = "BarLink"> <SiGithub/> Github </div> </a>
                <a href="https://artofproblemsolving.com/community/user/404771" target="_blank"> <div className = "BarLink"> <GiCube/> AoPS </div></a>
            </div>
        </div>
    )
}



export default Website;