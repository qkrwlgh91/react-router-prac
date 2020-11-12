import React, { useState, useRef } from 'react'

// useRef 기본 개념
/*
    javascript를 사용할때 특정 DOM을 선택해야 하는 상황에서 getElementById, querySelector같은 DOM Selector함수를 사용해서 한다.
    리액트에서 이러한 DOM을 직접 선택해야 하는 상황 또는 Video.js나 D3같은 외부라이브러리를 사용해야 할 때 ref라는 것을 사용한다.
    함수형 컴포넌트에서 ref를 사용할 때는 useRef라는 Hook 함수를 사용

*/


function UseRefSample() {
    const [ inputs, setInputs ] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통한 값 추출

    const onChange = e => {
        const { value, name } = e.target; // 우선 e.target에서 name과 value를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        // current 값은 원하는 DOM을 가르키도록 한다.
        nameInput.current.focus();
    };

    return (
        <div>
            <input 
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input 
                name="nickname"
                placeholder="닉 네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default UseRefSample;