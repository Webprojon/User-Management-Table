import { Toaster } from "react-hot-toast";
import UsersList from "./pages/Users-List";

function App() {
	return (
		<section className="bg-slate-700 py-4 h-screen lg:pt-16">
			<UsersList />
			<Toaster position="top-center" />
		</section>
	);
}

export default App;
