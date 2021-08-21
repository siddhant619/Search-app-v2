import { Photograph,Newspaper,VideoCamera } from "heroicons-react";
import { SearchOptionContext } from "../contexts/SearchOptionContext"
import { useContext } from 'react';
import HeaderOption from "./HeaderOption";
import { useRouter } from "next/router";
const HeaderOptions = () => {
    //const {searchOption} = useContext(SearchOptionContext);
    const router=useRouter();
    return (
        <div className="flex justify-center sm:ml-60 sm:justify-start">
            <div className="flex space-x-6 text-gray-700 
                text-sm lg:text-base justify-evenly lg:justify-start
            ">
                <HeaderOption Icon={Newspaper} title="Articles"  selected={router.query.type==="Articles"?true:false} />
                <HeaderOption Icon={Photograph} title="Images"   selected={router.query.type==="Images"?true:false}/>
                <HeaderOption Icon={VideoCamera} title="Videos"   selected={router.query.type==="Videos"?true:false}/>
                
            </div>
        </div>
    )
}

export default HeaderOptions
