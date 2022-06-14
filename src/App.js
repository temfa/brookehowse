import { Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import Catalog from "./pages/catalog/catalog";
import Contact from "./pages/contact/Contact";
import Landing from "./pages/landing/landing";
import Login from "./pages/login/login";
import New from "./pages/new/new";
import Properties from "./pages/properties/properties";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Landing />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/properties' element={<Properties />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/catalog' element={<Catalog />}></Route>
				<Route path='/new' element={<New />}></Route>
			</Routes>
		</div>
	);
}

export default App;
