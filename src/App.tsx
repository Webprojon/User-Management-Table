import { Toaster } from "react-hot-toast";
import UsersList from "./pages/Users-List";

function App() {
	return (
		<section className="bg-slate-700 h-screen p-10">
			<UsersList />
			<Toaster position="top-center" />
		</section>
	);
}

export default App;
