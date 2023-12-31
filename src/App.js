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
import Tournamentlist from "./components/home/sidebar/components/tournamentlist/Tournamentlist";
import Profilepage from "./components/profile/Profilepage";
import Mainpage from "./components/games/mainpage/Mainpage";
import Clicu from "./components/games/clicu/Clicu";
import Snaku from "./components/games/snaku/Snaku";
import Quizu from "./components/games/quizu/Quizu";
import Favorite from "./components/favorite/Favorite";
import Footer from "./components/footer/Footer";
import Memoryu from "./components/games/memoryu/Memoryu";

export default function App() {
	return (
		<div className="App bg-gray-200 min-h-screen">
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
									<Route path="/games" element={<Mainpage />} />
									<Route path="/game/clicu" element={<Clicu />} />
									<Route path="/game/snaku" element={<Snaku />} />
									<Route path="/game/quizu" element={<Quizu />} />
									<Route path="/game/memoryu" element={<Memoryu />} />
									<Route path="/profile" element={<Profilepage />} />
									<Route path="/favorite" element={<Favorite />} />
									<Route path="/competitions" element={<Complist />} />
									<Route path="/teams" element={<TeamList />} />
									<Route path="/team/:id" element={<Teamdetails />} />
									<Route path="/competition/:id" element={<Tournamentlist />} />
								</Routes>
								<Footer />
							</>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}
