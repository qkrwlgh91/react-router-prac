import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
    return (
        <div>
            <h3>유저목록: </h3>
            <ul>
                <li>
                    <NavLink to="/profiles/pjh060724"
                        activeStyle={{ background: 'black', color: 'white'}}
                    >pjh060724</NavLink>
                </li>
                <li>
                    <NavLink to="/profiles/pmk910830"
                        activeStyle={{ background: 'black', color: 'white'}}
                    >pmk910830</NavLink>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>유저를 선택해주세요</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
            <WithRouterSample />
        </div>
    )
}

export default Profiles;