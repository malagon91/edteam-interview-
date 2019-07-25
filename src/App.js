import React from 'react';
import './App.css';
import { Info } from './components/Info';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes } from './Routes';
function App() {
	return (
		<div className="App">
			<main>
				Main
				<Header />
				<Info />
				<Routes />
				<Footer />
			</main>
		</div>
	);
}

export default App;
