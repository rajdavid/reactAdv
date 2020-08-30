import React from 'react'

function Hero({ heroname }) {
    
    if (heroname === 'joker')
    {
        throw new Error('joker was a villian !!!!')
        }


    return (
        <div>
            {heroname}
        </div>
    )
}
export default Hero
