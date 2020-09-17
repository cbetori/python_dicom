import React, { useEffect, useState } from 'react'

function Image() {
	const [image, imageSet] = useState([])

	let getImage = () => {
		fetch('/image')
			.then((response) => response.json())
			.then((data) => imageSet(JSON.parse(data)))
	}

	let createImage = () => {
		const canvas = document.getElementById('canvas')
		canvas.width = image[0].length
		canvas.height = image.length
		const ctx = canvas.getContext('2d')
		var imgData = ctx.createImageData(image[0].length, image.length)
		let pixelData = imageToArray()
		console.log(pixelData.length * 4)
		console.log(imgData.data.length)
		for (var i = 0; i < pixelData.length; i++) {
			imgData.data[4 * i] = (pixelData[i] * 255) / 4095
			imgData.data[4 * i + 1] = (pixelData[i] * 255) / 4095
			imgData.data[4 * i + 2] = (pixelData[i] * 255) / 4095
			imgData.data[4 * i + 3] = 255
		}
		console.log(imgData)
		ctx.putImageData(imgData, 0, 0)
	}

	let imageToArray = () => {
		let result = []
		console.log(image[0].length)
		console.log(image.length)
		for (let i = 0; i < image.length; i++) {
			for (let x = 0; x < image[i].length; x++) {
				result.push(image[i][x])
			}
		}
		console.log(result)
		return result
	}

	useEffect(() => {
		getImage()
	}, [])

	useEffect(() => {
		if (image !== [] && image.length > 0) {
			createImage()
		}
	}, [image])

	return (
		<div>
			<canvas id='canvas'></canvas>
		</div>
	)
}

export default Image
