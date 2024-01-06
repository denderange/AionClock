import { useRef, useEffect, useState } from 'react'
// import './ClockColor.css'

const ClockColor = () => {
	const [dateState, setDateState] = useState((new Date()))

	const hoursDay = Array.apply(null, Array(12))
	const barSeconds = Array.apply(null, Array(60))

	const arrowHour = useRef<HTMLDivElement>(null)
	const arrowMinute = useRef<HTMLDivElement>(null)
	const arrowSecond = useRef<HTMLDivElement>(null)


	function getCurrentTime() {
		const currentHours = dateState.getHours()
		const currentMinutes = dateState.getMinutes()
		const currentSeconds = dateState.getSeconds()

		if (arrowHour.current && arrowMinute.current && arrowSecond.current) {
			arrowHour.current.style.transform = `rotateZ(${currentHours * 30 + currentMinutes / 2}deg)`
			arrowMinute.current.style.transform = `rotateZ(${currentMinutes * 6}deg)`
			arrowSecond.current.style.transform = `rotateZ(${currentSeconds * 6}deg)`
		}

		setDateState((new Date()))
	}

	useEffect(() => {
		const tick = setTimeout(getCurrentTime, 1000 - (dateState).getMilliseconds())
		return () => { clearTimeout(tick) }
	}, [dateState])

	return (
		<div className="wrapper">
			<div className="dial">

				<div className="bar-seconds">
					{barSeconds.map((item, index) => (
						<span key={index} style={{ "--index": index + 1 } as React.CSSProperties}>
							<i></i>
						</span>
					))}
				</div>

				<div className="number-hours">
					{hoursDay.map((item, index) => (
						<span key={index} style={{ "--index": index + 1 } as React.CSSProperties}>
							<div>{index + 1}</div>
						</span>
					))}
				</div>

				<div className="hands-box">
					<div className="hand hours" ref={arrowHour}><i></i></div>
					<div className="hand minutes" ref={arrowMinute}><i></i></div>
					<div className="hand seconds" ref={arrowSecond}><i></i></div>
				</div>

			</div>
		</div>
	)
}

export default ClockColor

// 1 sec = 360deg / 60sec = 6deg
// 1 min = 360deg / 60min = 6deg
// 1 hour = 360deg / 12hours = 30deg

// 1 hour is 30deg and 60 min is 30deg = 30/60 = 1/2deg
// hour rotate = hours*30 + minutes/2