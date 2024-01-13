import { useState } from 'react'
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import './Tuning.css'

type intervalItems = {
	// id: number,
	hourStart?: any,
	hourEnd?: any,
	minutesStart?: any,
	minutesEnd?: any
}

const Tuning = () => {
	const [timePickerActive, setTimepickerActive] = useState(false)
	const [timeIntervals, setTimeIntervals] = useState<intervalItems[]>([])

	const handleBtnAddInterval = () => {
		setTimepickerActive(true)
	}

	const handleTimePicker = (time: any) => {

		setTimeIntervals([...timeIntervals, {
			hourStart: time["$H"],
			minutesStart: time["$m"],
		}])

		setTimepickerActive(false)

		console.log(timeIntervals)
		console.log(time)

		// console.log(time)
		// console.log(time["$H"]);
		// console.log(time["$m"]);
	}

	const handleUpdateInterval = (id: number) => {
		const newValues = timeIntervals.map(interval => {
			if (timeIntervals.indexOf(interval) === id) {
				return {
					...interval,
					hourStart: 111,
					minutesStart: 222,
					hourEnd: 666,
					minutesEnd: 777
				}
			}

			return interval
		})

		setTimeIntervals(newValues)

		console.log("handled interval id is: " + id)

		console.log(timeIntervals[id])

		console.log(timeIntervals);


		// if (timeIntervals[id].hourStart) {
		// 	console.log(timeIntervals[id].hourStart)
		// } else if (timeIntervals[id].hourStart === 0) {
		// 	console.log('time === 0')
		// } else {
		// 	console.log('no time provided')
		// }
	}


	return (
		<div className="tuning-container">
			<div className='tuning'>
				<h1 className="tuning__title">Настройка времени</h1>

				<div className='time-picker'>

					<button
						className={!timePickerActive ? "time-picker__button" : "hidden"}
						onClick={handleBtnAddInterval}
					>
						Добавить интервал
					</button>

					<StaticTimePicker
						className={timePickerActive ? "" : "hidden"}

						onAccept={(time) => {
							handleTimePicker(time);
						}}
					/>
				</div>

				{timeIntervals.length ? (
					<h2>Заданные интервалы:</h2>
				) :
					(
						<h2>Нет заданных интервалов</h2>
					)
				}

				<ul>
					{timeIntervals.map((interval, index) => (
						<li
							key={index}
							onClick={() => handleUpdateInterval(index)}
							className="interval-list__item"
						>
							{interval.hourStart} : {' '}
							{interval.minutesStart < 10 ?
								"0" + interval.minutesStart :
								interval.minutesStart} - {interval.hourEnd || "**"} : {interval.minutesEnd || "**"}
						</li>
					))}
				</ul>

			</div>
		</div>
	)
}

export default Tuning