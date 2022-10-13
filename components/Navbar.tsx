import NavbarContainer from "./NavbarContainer";

const Navbar = () => {
    return (
        <div className="relative top-0 bg-white text-white pb-2 pt-2 shadow-lg h-10"> 
            <NavbarContainer position="right"></NavbarContainer>
            <NavbarContainer position="left"></NavbarContainer>
        </div>
    )
}

export default Navbar;
