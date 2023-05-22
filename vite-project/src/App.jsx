import React from 'react'
import "./App.css"
import TwitterFollowCard from './TwitterFollowCard'

const users = [
    {
        name:'Miguel Angel Duran',
        username: 'midudev',
        isFollowing: true,
    },
    {
        name: 'Yuniela Solorzano',
        username: 'itsmeyuniela',
        isFollowing: false,
    }
]


const App = () => {
  return(
    <section className='App'>

        {
            users.map(user => <TwitterFollowCard
                key={user.username} 
                username={user.username} 
                initialIsFollowing={user.isFollowing}>
                {user.name}
            </TwitterFollowCard>)
        }
        
    </section>
  )
}

export default App
