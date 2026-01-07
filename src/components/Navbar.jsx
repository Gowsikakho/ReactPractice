import react from '../assets/react.svg';
function Navbar(){
    return(
        <header>
            <nav>
                <img src={react} alt="React Logo" />
                <h1>React</h1>
            </nav>
        </header>
    )
}

export default Navbar;