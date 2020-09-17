import React from 'react'
import Image from './components/Image'
import Patient from './components/Patient'
import Study from './components/Study'
import './App.css'

function App() {
	return (
		<div id='app'>
			<Patient />
			<Image />
			<Study />
		</div>
	)
}

export default App
