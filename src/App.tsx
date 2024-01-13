import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AionClock from "./pages/AionClock/AionClock"
import Tuning from './components/Tuning/Tuning';
// import ClockColor from "./pages/ClockColor/ClockColor"

const App = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<>
				{/* <Clock /> */}
				{/* <ClockColor /> */}
				{/* <AionClock /> */}
				<Tuning />
			</>
		</LocalizationProvider>
	)
}

export default App