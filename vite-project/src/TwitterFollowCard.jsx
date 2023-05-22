import React, { useState } from 'react'

const TwitterFollowCard = ({children, username = 'unknow', initialIsFollowing=false}) => {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo': 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar'
                alt="El avatar del usuario"
                src={`https://unavatar.io/${username}`}
            />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span
                    className='tw-followCard-infoUsername'
                >{username}</span>
            </div>
        </header>
        <aside>
            <button 
                className={buttonClassName}
                onClick={handleClick}
            >
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}

export default TwitterFollowCard;
