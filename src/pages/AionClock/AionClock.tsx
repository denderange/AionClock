import { useRef, useEffect, useState } from 'react'
import './AionClock.css'
import { useTheme } from '../../hooks/useTheme'
import Interval from '../../components/Interval/Interval'
import Tuning from '../../components/Tuning/Tuning'

const AionClock = () => {
	const { theme, setTheme } = useTheme()
	const [dateState, setDateState] = useState((new Date()))
	const currentHours = dateState.getHours()
	const currentMinutes = dateState.getMinutes()
	const currentSeconds = dateState.getSeconds()

	const hoursDay = Array.apply(null, Array(12))
	const barSeconds = Array.apply(null, Array(60))

	const arrowHour = useRef<HTMLDivElement>(null)
	const arrowMinute = useRef<HTMLDivElement>(null)
	const arrowSecond = useRef<HTMLDivElement>(null)

	const switchTheme = () => {
		setTheme((current) => (current === "dark" ? "light" : "dark"))
	}

	function getCurrentTime() {
		if (arrowHour.current && arrowMinute.current && arrowSecond.current) {
			arrowHour.current.style.transform = `rotateZ(${currentHours * 30 + currentMinutes / 2}deg)`
			arrowMinute.current.style.transform = `rotateZ(${currentMinutes * 6}deg)`
			arrowSecond.current.style.transform = `rotateZ(${(currentSeconds * 6) + 6}deg)`
		}
		setDateState((new Date()))
	}

	useEffect(() => {
		const tick = setTimeout(getCurrentTime, 1000 - (dateState).getMilliseconds())
		return () => { clearTimeout(tick) }
	}, [dateState])

	return (
		<div className="wrapper" id={theme}>
			<div className="content-container">

				<div className="aion-container">
					<div className="toggle-container">
						<p className="toggle__text">{theme} theme</p>
						<label className="toggle__label">
							<input type="checkbox" onChange={switchTheme} className="toggle__checkbox" />
							<span className="toggle__slider"></span>

						</label>
					</div>

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

						<div className="digital">
							<span className="digital__hours">
								{currentHours < 10 && "0"}{currentHours} : {' '}
							</span>
							<span className="digital__minutes">
								{currentMinutes < 10 && "0"}{currentMinutes} : {' '}
							</span>
							<span className="digital__seconds">
								{currentSeconds < 10 && "0"}{currentSeconds}
							</span>
						</div>

						<Interval />

					</div>
				</div>

				<Tuning />

			</div>
		</div>
	)
}

export default AionClock