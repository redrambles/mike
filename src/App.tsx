import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalSharedLayout from "./layouts/GlobalSharedLayout";
import SharedProjectLayout from "./layouts/SharedProjectLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import { Clients } from "./pages/Clients/";
import { SingleClient } from "./pages/Clients";
import { Projects } from "./pages/Projects";
import { SingleProject } from "./pages/Projects";
import "./App.css";
import SharedClientLayout from "./layouts/SharedClientLayout";


function App() {
	return (
			<BrowserRouter>
				<Routes>

					<Route path='/' element={<GlobalSharedLayout />}>

						<Route index element={<Home />} />
            <Route path="/about" element={<About />} />

						<Route path="/clients" element={<SharedClientLayout />} >
            	<Route index element={<Clients />} />
            	<Route path='/clients/:id' element={ <SingleClient />} />
						</Route>

            <Route path='/projects' element={ <SharedProjectLayout/>}>
              <Route index element={<Projects />} />
              <Route path='/projects/:id' element={ <SingleProject />} />
            </Route>

						<Route path='*' element={<Error />} />

					</Route>
				</Routes>
			</BrowserRouter>
	);
}

export default App;
