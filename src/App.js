import Input from './components/input/Input'
import Login from './components/login/Login'
import { useState } from 'react'
function App() {
	const [log, setLog] = useState(false)
	const getInpLog = (email, login, password) => {
		console.log(password)
		setLog((prev) => !prev)
	}
	const logoutHandler = () => {
		setLog((prev) => !prev)
	}
	return (
		<div className='App'>
			{!log && <Input getInpLog={getInpLog} />}
			{log && <Login onLogout={logoutHandler} />}
		</div>
	)
}

export default App
