import './style.scss';
import { useState, useRef } from 'react';

//리엑트 개발 시 불변성이 중요한 이유
//리엑트는 원본이 있어야 본ㄱ사본을 통해서 차이점을 비교분석
//리엑트안에서 배열이나, 객체같은 참조형 자료는 무조건 deep copy를 해서 데이터를 변경해야됨

//전개연산자 (Spread Operator) heap 메모리에 있는 값을 물리적으로 꺼내서 전개
//전개연산자를 이용하면 원본을 훼손시키지 않으면 참조형 자료를 deep copy가능
//배열1
//배열 2 = [...배열1]

function App() {
	//const [상태값,상태변경전용함수] = useState(초기값);
	//리엑트 컴포넌트는 State값이 state변경함수로 변경되어야지만 컴포넌트가 재랜더링됨
	//숫자를 증가, 감소 시킬 때 전위증감 연산자를 꺼야지만 해당 랜더링 사이클에서 바로 값이 변경되면서 다음번 랜더링에 반영됨
	//State에 담기는 값이 바뀔때에만 화면의 갱신이 일어나기 때문에
	//State에 담기는 데이터만 관리하면 되므로 유지보수가 편함
	let box = useRef(null);
	let Num = useRef(0);
	const prev = () => {
		box.current.style.transform = `rotate(${--Num.current * 45}deg)`;
	};
	const next = () => {
		box.current.style.transform = `rotate(${++Num.current * 45}deg)`;
	};

	return (
		<>
			<button onClick={prev}>prev</button>
			<button onClick={next}>next</button>
			<article ref={box}></article>
		</>
	);
}

/*
state: 해당 값이 변경되면 무조건 컴포넌트 재랜더링됨, 이전랜더링 사이클의 값이 유지됨
변수: 컴포넌트 안에 값을 만듬, 컴포넌트가 재랜더링 될 때마다 값이 계속 초기화 됨
useRef: useRef를 통해서 참조객체를 만들고 해당 참조객체에 저장되어 있는 값은 컴포넌트가 재랜더링 되더라도 값이 유지됨
단, useRef의 값이 변경이 되더라도 컴포넌트가 재ㄹ랜더링되지는 않음

useRef 실사용 사례
-모션작업을 할 때 특정 ㅌ스타일이 변경되더라도 컴포넌트를 불팔요하게 재호추랗고 싶지 않을때
useRef실사용 사례2
-가상돔요소를 실제적으로 선택해서 가져와야 할 때
*/

export default App;
/*
	SSR cs CSR

	SSR - Server Side Rendering 구성
-페이지 이동시마다 일일이 서버쪽에 HTML파일을 요청해서 가져오는 방식
-장점 : 초기 로딩속도사 빠름, 검색엔진 최적화 (SED종용)
-단점 : 페이지 이동시마다 일일이 서버쪽에 파일을 요청해야 하기 때문에 페이지 깜빡거림

	CSR - Client Side Rendering
	- 초기에 빈 HTML파일을 서버쪽에서 가져오고 화면에 출력될 모든 데이터를 자바스크립트로 Chunk단위의 모든 데이터 파일 가져온 후 빈 HTML파일에 동적으로 출력
	-장점 : 한번에 서브페이지 포함한 모든 데이터를 불러오기 때문에 페이지 이동시마다 새롭게 파일을 요청할 필요가 없기 때문에 페이지 전환이 자연스러움
	-단점 : 모든 페이지에 대한 데이터를 한번에 다 가져오기 때문에 초기로딩속도가 SSR방식에 비해서 늦음, 검색엔진 최적화가 안되어 있음


	Real DOM (실제 돔)
	-HTML태그를 이용해서 구조를 만들면 브라우저가 이를 해석해서 실제 DOM형태로 객체를 만들고 화면에 랜더링

	Virtual DOM (가상동)
	-브라우저에 의해 Real DOM으로 변경되기 전 자바스크립트에 의해서 메모리상으로 가상의 DOM을 만들어서 기존의 DOM구조와 차이점을 분석하고 바뀐 부분을 다시 랜더링하는 형태

	JSK
	-리엑트에 DOM을 효율적으로 생성하기 위한 HTML의 규칙성을 따라한 자바스크립트 돔 제작방식

	컴포넌트 생성시 주의점
	-무조건 JSX를 리턴
	-함수 이름은 대문자로 시작
	-export로 내보야지 다른 컴포넌트를 불러올 수 있음
	-하나의 컴포넌트 함수는 단인 JSX를 리턴 가능
	-복수개의 JSX를 리턴하고 싶을때는 wrapping El로 묶어서 그룹화한뒤 리턴
	-중첩된 Element노드를 생성하지 않고 복수개의 JSX를 리턴하고 싶을때는 <></>을 사용한다
*/

/*
hooks 
-리엑트 16버전부터 새로나온 개녑으로 리엑트에서 자주쓰이는 상태관리, 생명주기에 관련된 내용들을 
-hook이라는 향태의 내장함수로 편의기능을 제공
-hook이 나오기 전까지는 class방식으로 컴포넌트를 생성 및 기능 확장을 비효율적으로 처리

자주쓰는 hook 3대장
useState - 컴포넌트의 화ㅗ면의 랜더링을 담당하는 중요한 정보값 관리
useEffect - 컴포넌트의 생명주기에 관련된 함수 (생성, 변화, 소멸)
useRef - 컴포넌트 안쪽에서 특정 값을 참조객체에 담을 때 

리엑트의 성능관리를 hook
리엑트에서의 memorization - 메모리점유율을 늘려서 성능을 개선
자바스크립트는 기본적으로 Garbage collector에 의해서 메모리가 관리됨
아래의 hook을 통해서 특정 값을 강제 메모이제이션 처리하면 가비지컬렉터에서 제외함


memo : (컴포넌트 자체를 메모이제이션)
useCallback : (컴포넌트 안쪽의 핸들러 함수 자체를 메모이제이션)
useMemo : (특정 핸들러함수의 리턴값을 메모이제이션)
*/
