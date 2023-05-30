import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Login from "./components/authentication/login/Login";
import Signin from "./components/authentication/signin/Signin";
import Logout from "./components/authentication/logout/Logout";

import Complist from "./components/competitions/Complist";
import Homepage from "./components/home/Homepage";
import TeamList from "./components/teams/teamlist/Teamlist";
import Teamdetails from "./components/teams/teamdetails/Teamdetails";

export default function App() {
	return (
		<div className="App bg-gray-200">
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/logout" element={<Logout />} />
					<Route
						path="*"
						element={
							<>
								<Navbar />
								<Routes>
									<Route
										index
										element={
											<div>
												<Homepage />
											</div>
										}
									/>
									<Route path="/competitions" element={<Complist />} />
									<Route path="/teams" element={<TeamList />} />
									<Route path="/team/:id" element={<Teamdetails />} />
								</Routes>
							</>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}
