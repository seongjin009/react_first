import React from 'react';

function Header() {
	const handler = (text) => {
		console.log(text);
	};

	return (
		<header>
			<h1 className='title'>logo</h1>
			<p onClick={handler}>링크</p>
		</header>
	);
}

export default Header;
