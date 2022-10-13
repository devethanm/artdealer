import Image, { ImageProps } from 'next/image';

{/*A container to hold various groups 
of buttons within a navigation bar */}
const NavbarContainer: React.FC<{position: string}> = (props) => {
    return (
        <div className={`flex absolute top-1 ${props.position}-1`}>
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

{ /* TODO The item prop and the types below are likely 
very incorrect look into a better solution below */}
const NavbarContainerItem: React.FC<any> = ({ icon }: ImageProps) => (
    <div className="navbar-container-item">
        {icon}
    </div>
);


export default NavbarContainer;
