import { Container } from "postcss";
import Image from 'next/image';

{/*A container to hold various groups 
of buttons within a navigation bar */}
const NavbarContainer : any = (numItems: number) => {
    return (
        <div className="flex">
        {/* Make these ALL BUTTONS so user cant drag them */}
            <NavbarContainerItem
                icon={
                <Image 
                    src="/icons/add.png"
                    width={30}
                    height={30}
                />}>
            </NavbarContainerItem>
            <NavbarContainerItem 
                icon={
                <Image 
                    src="/icons/apps.png"
                    width={30}
                    height={30}
                />}>
            </NavbarContainerItem>
             <NavbarContainerItem 
                icon={
                <Image 
                    src="/icons/search.png"
                    width={30}
                    height={30}
                />}>
            </NavbarContainerItem>           
            <NavbarContainerItem 
                icon={
                <Image 
                    src="/icons/ban.png"
                    width={30}
                    height={30}
                />}>
            </NavbarContainerItem>
        </div>
    );
}

const NavbarContainerItem = ({ icon }: any) => (
    <div className="navbar-container-item">
        {icon}
    </div>
);


export default NavbarContainer;