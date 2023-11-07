import React from 'react';
import { UserProfileProps } from './UserProfile.types';

import './UserProfile.css';

const UserProfile : React.FC<UserProfileProps> = ({userProfileAvatar, userName }) => {
    return (
        <div className='div-user-icon'>
            <img className='user-image' src={userProfileAvatar} alt={'user icon'} />
             <div>{userName}</div>
        </div>
    )
}

export default UserProfile
