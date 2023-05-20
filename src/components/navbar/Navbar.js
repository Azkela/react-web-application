import React from "react";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faPuzzlePiece,
    faPeopleGroup,
    faTrophy,
    faStarHalfStroke,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {auth_service} from "../../services/auth.service";

const Navbar = () => {
    const [state, setState] = useState(false);
    // Replace # paths with your paths
    const navigation = [
        {title: "Équipes", path: "#", icon: faPeopleGroup},
        {title: "Compétition", path: "#", icon: faTrophy},
        {title: "Suivis", path: "#", icon: faStarHalfStroke},
        {title: "Mini-jeux", path: "#", icon: faPuzzlePiece},
    ];
    const logo = process.env.PUBLIC_URL + "/logo.png";

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    const isAuthenticated = auth_service.is_logged();

    return (
        <nav
            className={`bg-gray-200 border-b border-cyan-950 md:text-l ${
                state
                    ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
                    : ""
            }`}
        >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <a href="/">
                        <img src={logo} width={70} alt="LGM logo"/>
                    </a>
                    <div className="md:hidden">
                        <button
                            className="menu-btn text-gray-500 hover:text-blue-500"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                        state ? "block" : "hidden"
                    } `}
                >
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {navigation.map((item, idx) => {
                            return (
                                <li key={idx} className="text-gray-700 hover:text-gray-900">
                                    <a href={item.path} className="block">
                                        <FontAwesomeIcon icon={item.icon}/>
                                        <span className="ml-1">{item.title}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div
                        className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                        {!isAuthenticated && <Link
                            to="/signin"
                            className="flex items-center text-gray-700 hover:text-gray-900"
                        >
                            <FontAwesomeIcon className="pr-1" icon={faUserPlus}/>
                            Inscription
                        </Link>}
                        {!isAuthenticated && <Link
                            to="/login"
                            className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-cyan-900 hover:bg-cyan-700 active:bg-cyan-950 rounded-full md:inline-flex"
                        >
                            Connexion
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </Link>}
                        {isAuthenticated && <Link
                            to="/logout"
                            className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-cyan-900 hover:bg-cyan-700 active:bg-cyan-950 rounded-full md:inline-flex"
                        >
                            Se déconnecter
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </Link>}
                    </div>
                </div>
            </div>
        </nav>
    )
        ;
};

export default Navbar;