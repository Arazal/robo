import React from 'react'
import Card from '../Card/Card'


const CardList = ({ robots }) => {
  
    return (
        <div className='bg-hot-pink'>
            {
                robots.map(item  => {
                    return (
                        <Card   key={item.id}
                                id={item.id} 
                                name={item.name} 
                                username={item.username} 
                                email={item.email}/>
                    )
                })
            }
        </div>
    )
                
}

export default CardList