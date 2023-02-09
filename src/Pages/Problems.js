import {Link} from "react-router-dom"

export default function Problems(){
    return(
        <div className="Page">
            <h1> Math Puzzles </h1>
            <p>
                I post daily math problems. Many are from competitions such as the AMC, AIME, USA(J)MO, Mathcounts, and others. However, some will be made up by myself or 
                my friends. 
            </p>
            <h1>Today's Daily Problem</h1>
            <p>
                Can the projection of a solid cube onto a plane be a convex pentagon? (2018 HMMT Team Problem 5)
            </p>

            <p><Link className="Listlink" to="/problemlist">Problem List</Link></p>
            <p>
                <Link className="Listlinktext" to="/problemlist">A list of previous daily problems and other problems.</Link>
            </p>
        </div>
    )
}
