import React from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import HomePage from './components/pages/HomePage';

function App() {
	return (
		<div className="App">
			<Header />
			<HomePage />
			<Footer />
		</div>
	);
}

export default App;
