import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import About from "./pages/about/about";
import Catalog from "./pages/catalog/catalog";
import Contact from "./pages/contact/Contact";
import Landing from "./pages/landing/landing";
import New from "./pages/new/new";
import Properties from "./pages/properties/properties";
import Property from "./pages/property/property";
import Privacy from "./pages/terms/privacy";
import Terms from "./pages/terms/terms";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Landing />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/properties' element={<Properties />}></Route>
				<Route path='/property' element={<Property />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
				<Route
					path='/login'
					element={
						<Login
							title='Sign in to your Account'
							link='signup'
							name='Login'
							text="Don't have an Account?"
							to='Sign Up'
						/>
					}></Route>
				<Route
					path='/signup'
					element={
						<Login
							title='Sign up to  get started'
							link='login'
							name='Sign Up'
							text='Already have an Account?'
							to='Login'
						/>
					}></Route>
				<Route path='/catalog' element={<Catalog />}></Route>
				<Route path='/new' element={<New />}></Route>
				<Route path='/terms' element={<Terms />}></Route>
				<Route path='/privacy' element={<Privacy />}></Route>
			</Routes>
		</div>
	);
}

export default App;
