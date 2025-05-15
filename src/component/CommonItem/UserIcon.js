import React from 'react';


function UserIcon({ image }) {
    return (

        <div className='user-icon'
            style={{
                width: 'clamp(60px, 10vw, 100px)',
                height: 'clamp(60px, 10vw, 100px)',
                borderRadius: '50%',
                overflow: 'hidden',
            }}
        >
            <img
                src={image}
                alt="user icon"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', 
                }}
            />

        </div>
    );
};

export default UserIcon;