import React, { useEffect, useState } from 'react'

function Patient() {
	const [detail, detailSet] = useState({})

	let getDetail = () => {
		fetch('/patient')
			.then((response) => response.json())
			.then((data) => detailSet(data))
	}

	useEffect(() => {
		getDetail()
	}, [])

	useEffect(() => {}, [detail])

	return (
		<div id='patientContainer'>
			<div className='patientDetail'>
				<div className='patientTitle'>ID:</div>
				<div className='patientData'>{detail.patientid}</div>
			</div>
			<div className='patientDetail'>
				<div className='patientTitle'>Name: </div>
				<div className='patientData'>{detail.patientname}</div>
			</div>
			<div className='patientDetail'>
				<div className='patientTitle'>Age:</div>
				<div className='patientData'>{detail.patientage}</div>
			</div>
		</div>
	)
}

export default Patient
