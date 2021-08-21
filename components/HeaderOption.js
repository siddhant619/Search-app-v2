import { SearchOptionContext } from "../contexts/SearchOptionContext"
import { useContext } from 'react';
import router, { useRouter } from "next/router";

const HeaderOption = ({Icon, title, selected}) => {
    //const {changeSearchOption} = useContext(SearchOptionContext);
    const router=useRouter();
    return (
        <div className={`flex items-center space-x-1 
            cursor-pointer border-b-4 border-transparent hover:border-primary-500 sm:pb-2 pb-1 hover:text-primary-800
            ${selected &&'border-primary-500 text-primary-800'}`}
            onClick={()=>{
                if(router.query.term)
                    router.push(`/search?term=${router.query.term}&type=${title}`)
            }}
            >
            
            <Icon className="h-5" />
            <p className="hidden sm:inline-flex">{title}</p>

        </div>
    )
}

export default HeaderOption
