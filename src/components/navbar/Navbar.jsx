import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

// import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			
			<nav ref={navRef} id = "nav">
				<HashLink to="/#about-me">About Me</HashLink>
				<HashLink to="/#skills">Skills</HashLink>
				<HashLink to="/#Portfolio">Portfolio</HashLink>
				<HashLink to="/#contact">Contact Me</HashLink>
				<HashLink to="/#my-info">Resume</HashLink>


                <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;