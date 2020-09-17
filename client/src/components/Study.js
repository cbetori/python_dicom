import React, { useEffect, useState } from 'react'

function Study() {
	const [detail, detailSet] = useState({})

	let getDetail = () => {
		fetch('/study')
			.then((response) => response.json())
			.then((data) => cleanData(data))
	}

	let cleanData = (data) => {
		let cleanDate =
			data.studydate.slice(-2) +
			'/' +
			data.studydate.slice(4, 6) +
			'/' +
			data.studydate.slice(0, 4)
		data.studydate = cleanDate
		detailSet(data)
	}

	useEffect(() => {
		getDetail()
	}, [])

	useEffect(() => {}, [detail])

	return (
		<div id='patientContainer'>
			<div className='patientDetail'>
				<div className='patientTitle'>Date:</div>
				<div className='patientData'>{detail.studydate}</div>
			</div>
			<div className='patientDetail'>
				<div className='patientTitle'>Description: </div>
				<div className='patientData'>{detail.studydescription}</div>
			</div>
		</div>
	)
}

export default Study
