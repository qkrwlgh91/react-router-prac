import React from 'react';

// 프로필에서 사용할 데이터
const profileData = {
    pjh060724: {
        name: 'pjh',
        description: 'Frontend'
    },
    pmk910830: {
        name: 'pmk',
        description: 'Backend'
    }
}

const Profile = ({ match }) => {
    // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조
    const { username } = match.params;
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;