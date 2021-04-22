import {Link} from "react-router-dom"

export default function Problems(){
    return(
        <div className="Problempage">
            <h1> Math Puzzles </h1>
            <p>
                I post daily math problems. Many are from competitions such as the AMC, AIME, USA(J)MO, Mathcounts, and others. However, some will be made up by myself or 
                my friends. 
            </p>
            <h1>Today's Daily Problem</h1>
            <p>
                There is a deck of 52 cards made up of 4 suits. However, there is not necessarily 13 cards of each suit. At the start, I know how many cards are in each 
                suit. The 52 cards are face down. One at a time, I must guess the suit of the card on top and the card is taken off. If I always guess the suit that has 
                the most cards left (if multiple are tied, I guess a random one out of the ones tied), prove that I must guess at least 13 cards correctly. (Source: 
                AoPS Intermediate Counting and Probability).
            </p>

            <p><Link className="Listlink" to="/problemlist">Problem List</Link></p>
            <p>
                <Link className="Listlinktext" to="/problemlist">A list of previous daily problems and other problems.</Link>
            </p>
        </div>
    )
}
