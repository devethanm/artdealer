import Image from "next/image";

const Artwork: React.FC<{image: string, footer1: string, footer2: string}> = ({image, footer1, footer2}) => {
    return (
        <div className="flex justify-center text-center bg-white text-white pb-10 pt-10 shadow-lg w-1/3 h-96"> 
            <div id="pictureContainer" className="flex-grow bg-blue-500">
                <Image
                    src={image}
                    alt="placeholder" 
                    width="1024"
                    height="1024"
                />
            </div>
            <div id="footer" className="bg-red-800">
                <p>{footer1}</p>
                <p>{footer2}</p>
            </div>
        </div>
    )
}

export default Artwork;