import React from 'react'
import 'tachyons'
import './Card'

const Card = ({name, username, email, id}) => {
   
    return (
        <div  className='tc bg-washed-yellow br3 dib pa3 ma2 grow bw2 shadow-5-1 bb'> 
            <img alt='robots' src={`https://robohash.org/${id}?100x100`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{username}</p>
            </div>
        </div>
    )
}

export default Card

