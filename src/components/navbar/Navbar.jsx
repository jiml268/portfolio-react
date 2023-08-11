import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
				<a href="/#intro" onClick={showNavbar}>Home</a>
				<a href="/#about-me" onClick={showNavbar}>About Me</a>
				<a href="/#skills"  onClick={showNavbar}>Skills</a>
				<a href="/#Portfolio"  onClick={showNavbar}>Portfolio</a>
				<a href="/#contact"  onClick={showNavbar}>Contact Me</a>
				<a href="/#my-info"  onClick={showNavbar}>Resume</a>

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