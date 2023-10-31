import React from 'react'
import { UserProfileProps } from './UserProfile.types'

import './UserProfile.css'

const UserProfile : React.FC<UserProfileProps> = ({imageUrl, UserName }) => {
    return (
        <div className='div-user-icon'>
            <img className='user-image' src={imageUrl} alt={'user icon'} />
             <div>{UserName}</div>
        </div>
    )
}

export default UserProfile
