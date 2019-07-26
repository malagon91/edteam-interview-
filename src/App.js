import React from 'react';
import './App.css';
import { Info } from './components/Info';
import { Header } from './components/Header';
import { MyInfo } from './components/MyInfo';
import { Content } from './components/Content';

function App() {
	return (
		<div className="App">
			<main>
				<MyInfo />
				<Header />
				<Info />
				<Content />
			</main>
		</div>
	);
}

export default App;
