import React, { useRef } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import UseRefSample from './UseRefSample';
import UserList from './UserList';

// useRef 2번째 기능
/*
  컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것
  useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않는다.
  리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회할 수 있는 반면,
  useRef로 관리하고 있는 변수는 설정 후 바로 조회할 수 있음.
  useRef로 관리 할수 있는 값
  setTimeout, setInterval
  scroll 위치
  외부 라이브러리를 사용하여 생성된 인스턴스
*/

const App = () => {
  const users = [
    {
      id: 1,
      username: 'pjh111',
      email: 'qkrw@sf.com'
    },
    {
      id: 2,
      username: 'asg32',
      email: '32ags@sf.com'
    },
    {
      id: 3,
      username: 'arb34',
      email: 'qsfaw@sf.com'
    },
  ]

  const nextId = useRef(4);

  // useRef()를 사용할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 됨
  // 값 수정시에는 .current 값을 수정하면 됨
  // 조회할 때는 .current 값을 조회

  const onCreate = () => {
    
    nextId.current += 1;
  }

  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
        <li>
          <Link to="/userefS">useRef Sample</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route path="/userefS" component={UseRefSample} />
        <Route 
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
      <UserList users={users} />
    </div>
  )
}

export default App

