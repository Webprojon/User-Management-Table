import { Toaster } from "react-hot-toast";
import UsersList from "./pages/Users-List";

function App() {
	return (
		<section className="bg-slate-700 py-5 lg:h-[100vh] lg:pt-16">
			<UsersList />
			<Toaster position="top-center" />
		</section>
	);
}

export default App;
