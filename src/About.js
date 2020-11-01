import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const detail = query.detail === 'true'; // 쿼리의 파싱결과값은 문자열
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 이랙트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
            {detail && <p>추가적인 정보를 요청합니다.</p>}
        </div>
    )
}

export default About;

