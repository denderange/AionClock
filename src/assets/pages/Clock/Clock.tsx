import { useRef, useEffect } from 'react'
import './Clock.css'

const Clock = () => {
	const arrowHour = useRef<HTMLDivElement>(null)
	const arrowMinute = useRef<HTMLDivElement>(null)
	const arrowSecond = useRef<HTMLDivElement>(null)

	const dergees = 6 // 6 is 360/60

	useEffect(() => {
		// const ticker = setInterval(() => {
		// 	const toDay = new Date()

		// 	const hours = toDay.getHours() * 30 // 30 is 360/12
		// 	const minutes = toDay.getMinutes() * dergees
		// 	const seconds = toDay.getSeconds() * dergees

		// 	// arrowHour?.current?.style.transform = `rotateZ(${hours + (minutes/12)}deg)`
		// 	if (arrowHour.current && arrowMinute.current && arrowSecond.current) {
		// 		arrowHour.current.style.transform = `rotateZ(${hours + (minutes / 12)}deg`
		// 		arrowMinute.current.style.transform = `rotateZ(${minutes}deg)`
		// 		arrowSecond.current.style.transform = `rotateZ(${seconds}deg)`
		// 	}

		// }, 0)

		// return () => { clearInterval(ticker) }
	}, [])

	return (
		<div className="wrapper">
			<div className="clock">
				<div className="clock__arrows">
					<div className="hours" ref={arrowHour}></div>
					<div className="minutes" ref={arrowMinute}></div>
					<div className="seconds" ref={arrowSecond}></div>
				</div>

				{/* <div className="minute">
				</div>

				<div className="second">
				</div> */}
			</div>
		</div>
	)
}

export default Clock