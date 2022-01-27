import { GlobeIcon } from "@heroicons/react/solid"

const Footer = () => {
    return (
        <footer className="flex sm:flex-col md:flex-row items-center md:justify-between px-3  bg-gray-100 text-gray-500 w-full">
            <div className="px-8 py-3">
                <p>Ethiopia</p>
            </div>
            <div className=" gap-y-4 md:flex-row lg:flex-row ">
                <div className="flex justify-center items-center md:col-span-2 ">
                    <GlobeIcon className="h-5 mr-1 text-green-700" />
                        Carbon neutral since 2007
                </div>  
                <div className="flex justify-center space-x-8 whitespace-nowrap mt-3">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How search works</p>
                </div> 
            </div>
            <div className="flex justify-center space-x-8">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
        </footer>
    )
}

export default Footer
