import HeaderOption from "./headerOption"
import { DotsVerticalIcon, PhotographIcon, NewspaperIcon, MapIcon, PlayIcon, SearchIcon  } from "@heroicons/react/outline"



const HeaderOptions = () => {
    return (
        <div className="flex justify-evenly text-gray-700 w-full lg:text-base text-sm lg:justify-start lg:space-x-36 lg:pl-52 border-b">
            {/* left */}
            <div className="flex space-x-4 item-center">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="Images" />
                <HeaderOption Icon={PlayIcon} title="Videos"  />
                <HeaderOption Icon={NewspaperIcon} title="News"  />
                <HeaderOption Icon={MapIcon} title="Maps"  />
                <HeaderOption Icon={DotsVerticalIcon} title="More"  />
            </div>

            {/* right */}
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
