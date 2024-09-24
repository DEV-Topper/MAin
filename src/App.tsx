
import { useEffect } from "react";
import { useUserCookie } from "./hooks/userHooks";
import RouterScreen from "./router/RouterScreen";

const App = () => {
	const {data} = useUserCookie()

	useEffect(() => {
		console.countReset(data)
	}, [data])

	return (
		<div className="font-sans">
			<RouterScreen />
		</div>
	);
};

export default App;
//coinx42@gmail.com