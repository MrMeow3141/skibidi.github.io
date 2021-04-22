import './Website.css';

import {GrMail} from 'react-icons/gr'
// eslint-disable-next-line
import {SiGithub,SiCodeforces,SiLeetcode} from 'react-icons/si'
import {GiCube} from 'react-icons/gi'
import {BrowserRouter as Router,Route,Link,Switch,useLocation} from "react-router-dom"

import Home from './Pages/Homepage';
import Projects from './Pages/Projects';
import Problems from './Pages/Problems';

function Website(){
    return (
        <div>
            <Router>
                <TopBar/>
                <Switch>
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
        </div>
        
    )
}

function TopBar() {
    let path = useLocation().pathname;

    return(
        <div className="Bar">
            <div className="BarLeft">
                <Link className="Pagelink" to="/" style={{color: (path == "/" ? "rgb(14, 108, 196)" : "rgb(98, 195, 255)")}}>Henry Jiang</Link>
                <Link className="Pagelink" to="/projects" style={{color: (path == "/projects" ? "rgb(14, 108, 196)" : "rgb(98, 195, 255)")}}>Projects</Link>
                <Link className="Pagelink" to="/problems" style={{color: (path == "/problems" ? "rgb(14, 108, 196)" : "rgb(98, 195, 255)")}}>Problems</Link>
            </div>
            <div className="BarRight">
                <a href="mailto: jiangstem@gmail.com" target="_blank"> <div className = "BarLink"><GrMail/> Email</div> </a>
                <a href="https://github.com/HenrySTEM" target="_blank"> <div className = "BarLink"><SiGithub/> Github</div> </a>
                <a href="https://artofproblemsolving.com/community/user/404771" target="_blank"> <div className = "BarLink"><GiCube/> AoPS </div></a>
            </div>
        </div>
    )
}

export default Website;