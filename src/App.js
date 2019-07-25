import React from 'react';
import './App.css';
import { Info } from './components/Info';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';

function App() {
	return (
		<div className="App">
			<main>
				Main
				<Header />
				<Info />
				<Content />
				<Footer />
			</main>
		</div>
	);
}

export default App;
