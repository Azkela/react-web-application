import React, { useEffect, useState } from "react";
import { team_service } from "../../services/teams.service";
import Pagination from "../../components/pagination/Pagination";
import Loader from "../../components/loader/Loader";

const TeamList = () => {
	const [teamData, setTeamData] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const fetchTeamData = async () => {
			try {
				const { teams, totalPages } = await team_service.getTeamData(
					currentPage
				);
				setTeamData(teams);
				setTotalPages(totalPages);
			} catch (error) {
				console.error(
					"Erreur lors de la récupération des données d'équipe :",
					error
				);
				setTeamData([]);
				setTotalPages(0);
			}
		};

		fetchTeamData();
	}, [currentPage]);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	if (teamData.length === 0) {
		return (
			<div className="container min-w-min border-2 border-pink-600 mx-auto">
				<h1 className="text-4xl font-bold pt-4 pb-4 pl-64">
					Liste des équipes
				</h1>
				<div className="flex justify-center">
					<table className="m-8 min-w-[50%] bg-white justify-center border-gray-300 shadow-sm rounded-lg">
						<tbody className="flex justify-center divide-y pb-4">
							<Loader />
						</tbody>
					</table>
				</div>
			</div>
		);
	}

	return (
		<div className="container min-w-min border-2 border-pink-600 mx-auto">
			<h1 className="text-4xl font-bold pt-4 pb-4 pl-64">
				Liste des équipes
			</h1>
			<div className="flex justify-center">
				<table className="mt-8 min-w-[50%] bg-white justify-center shadow-sm rounded-lg">
					<tbody className="grid grid-cols-3 gap-5 p-8 divide-y">
						{teamData.map((team) => (
							<tr key={team.id}>
								<td className="flex items-center gap-x-2 border-2 bg-slate-200 border-green-950 py-3 px-4 rounded">
									<div className="max-w-[10vh] flex items-center aspect-[4/3] object-contain mr-2">
										<img src={team.imageUrl} alt="serie logo" />
									</div>
									<div>
										<span className="text-gray-700 text-lg font-medium whitespace-nowrap">
											{team.name}
										</span>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default TeamList;
