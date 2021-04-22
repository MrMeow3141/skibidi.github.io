import {Link} from "react-router-dom"
//var Latex

export default function ProblemList() {
    return(
        <div className="Problemlistpage">
            <h1>This is a list of previous daily problems.</h1>
            <p>
                Easy problems are marked green, medium problems are marked yellow, and hard problems are marked red. <br/>
                <Link className="Mediumproblemlink" to="/problemlist/1">Problem 1 (April 20, 2021): There is a deck of 52 cards made up of 4 suits. However, there is not necessarily 13 cards...
                </Link> <br/>
                <Link className="Easyproblemlink" to="/problemlist/2">Problem 2 (April 21, 2021): Let the polynomial x^3 + 2x + 5 have roots p,q,r ... </Link> <br/>
                <Link className="Hardproblemlink" to="/problemlist/3">Problem 3 (April 22, 2021): Let the orthocenter of a triangle ABC be H...</Link>

            </p>
        </div>
    )
}