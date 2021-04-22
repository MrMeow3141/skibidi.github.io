import { MathComponent } from 'mathjax-react'

export default function Problem2() {
    return(
        <div>
            <div className = "Problemcontent">
                <h1>Problem</h1>
                <p>
                    This was the daily problem for April 21, 2021.
                </p>
                <p>
                    Let the polynomial <MathComponent tex={'x^3 - 5x^2 + 20000x + 2'}/> have roots p,q,r. Find the sum of the coefficients of the polynomial with roots pq, pr, and qr.
                </p>
                <h1>Hints</h1>
                <h1>Solution</h1>
            </div>
        </div>
    )
}