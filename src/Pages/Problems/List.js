import {Link} from "react-router-dom"
import { MathComponent } from 'mathjax-react'

export default function ProblemList() {
    return(
        <div className="Problemlistpage">
            <h1>This is a list of previous daily problems.</h1>
            <p>
                Easy problems are marked green, medium problems are marked yellow, and hard problems are marked red. <br/>
                <Link className="Mediumproblemlink" to="/problemlist/1">Problem 1 (April 20, 2021): There is a deck of 52 cards made up of 4 suits. However, there is not necessarily 13 cards...
                </Link> <br/>
                <Link className="Easyproblemlink" to="/problemlist/2">Problem 2 (April 21, 2021): Let the polynomial <MathComponent tex={'x^3 - 5x^2 + 20000x + 2'}/> have roots p,q,r ... 
                </Link> <br/>

            </p>
        </div>
    )
}