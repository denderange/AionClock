import './ClockColor.css'

const ClockColor = () => {
	const hoursDay = Array.apply(null, Array(12))
	return (
		<div className="wrapper">
			<div className="dial">

				<div className="number-hours">
					{hoursDay.map((item, index) => (
						<span key={index} style={{ "--index": index + 1 } as React.CSSProperties}>
							<p>{index + 1}</p>
						</span>
					))}
				</div>

				<div className="hands-box">
					<div className="hand hours"><i></i></div>
					<div className="hand minutes"><i></i></div>
					<div className="hand seconds"><i></i></div>
				</div>

			</div>
		</div>
	)
}

export default ClockColor