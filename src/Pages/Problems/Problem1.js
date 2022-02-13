import { MathComponent } from 'mathjax-react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export default function Problem1() {
    return(
        <div>
            <div className = "Problemcontent">
                {/* <Link to="/problemlist" className="Backarrow"><AiOutlineArrowLeft/> Back to problem list</Link> */}
                <h1>Problem</h1>
                <p>
                    This was the daily problem for April 20, 2021.
                </p>
                <p>
                There is a deck of 52 cards made up of 4 suits. However, there is not necessarily 13 cards of each suit. At the start, I know how many cards are in each suit. The 
                52 cards are face down. One at a time, I must guess the suit of the card on top and the card is taken off. If I always guess the suit that has the most cards left 
                (if multiple are tied, I guess a random one out of the ones tied), prove that I must guess at least 13 cards correctly. (Source: AoPS Intermediate Counting and Probability).
                </p>
                <h1>Hints</h1>
                <h1>Solution</h1>
            </div>
        </div>
    )
}