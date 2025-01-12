import React from 'react'
import './Sports.css'

const Sports = () => {
  return (
    <>
        <div className="main_sports">
            <div className="container">
                <div className="Sports_logo">
                    <img src="/img/x.png" alt="" />
                </div>
                <div className="Sports_main_text">
                    <h1>Extreme Sports Will Test Your Limits And Push The
                    Boundaries To The Max</h1>
                    <p>Be Prepared To Experience The New Adventures</p>
                </div>
                <div className="sports_button">
                    <button>Join Our Club</button>
                    <button>View The Demo</button>
                </div>
                <div className="sports_cards">
                    <div className="card1">
                        <div className="card_text">
                            <h2>Sports Videos</h2>
                            <p>Get Inspired</p>
                            <div className='line'></div>
                            <h3>Dolor sit amet magna</h3>
                        </div>
                    </div>
                    <div className="card1 hum1">
                        <div className="card_text">
                            <h2>Sports Videos</h2>
                            <p>Get Inspired</p>
                            <div className='line'></div>
                            <h3>Dolor sit amet magna</h3>
                        </div>
                    </div>
                    <div className="card1 hum2">
                        <div className="card_text">
                            <h2>Meet Our Team</h2>
                            <p>Get Inspired</p>
                            <div className='line'></div>
                            <h3>Dolor sit amet magna</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Sports