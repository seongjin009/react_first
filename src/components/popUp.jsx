import { useEffect } from 'react';
import { useState } from 'react';
//useEffect: 컴포넌트의 생성, 변화, 소멸의 특정 상태마다 원하는 이벤트 연결가느ㅇ
//useEffect(실행할함수, 의존성배열)
//의존성배열이 비어있는 상태에서 함수안쪽에 구문을 입력하면 (컴포넌트 마운트시 한번만 실행)
//의존성배열이 비어있는 상태에서 리턴되는 함수안쪽에 구문을 입력하면 (컴포넌트 언마운트시 한번만 사용)
//의존성배열에특정 state를 담아두고 함수 안쪽에 구문을 입력하면 (해당 state값이 변경될 때 마다 실행)

function Popup() {
	const [Num, setNum] = useState(0);

	useEffect(() => {
		//컴포넌트 mount시 한번만 실행
		console.log('팝업생성');

		return () => {
			//컴포넌트가 umount시 한번만 실행
			console.log('팝업소멸');
		};
	}, []);

	useEffect(() => {
		console.log('popup의 Num 상태변화');
	}, [Num]);

	return (
		<aside>
			<h1>{Num}</h1>
			<button onClick={() => setNum(Num - 1)}>minus</button>
			<button onClick={() => setNum(Num + 1)}>plus</button>
		</aside>
	);
}
export default Popup;
