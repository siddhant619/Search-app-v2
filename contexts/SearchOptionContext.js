import router, { useRouter } from 'next/router';
import React,{createContext,useState,useEffect} from 'react'

export const SearchOptionContext = createContext();

export const SearchOptionProvider=(props)=>{
    const [searchOption, setSearchOption] = useState("Articles");
    const [searchTerm, setSearchTerm] = useState("");
    const [currPageToken, setCurrPageToken] = useState('');
    const [nextPageToken, setNextPageToken] = useState('');
    const [prevPageToken, setPrevPageToken] = useState('');
    const router=useRouter();
    const changeSearchOption=(option)=>{
        console.log('option selected ' , option);
        setSearchOption(option);
        
    }
    useEffect(() => {
        console.log('in useeff', searchTerm,searchOption);
        if(router.query.term)
            router.push(`/search?term=${router.query.term}&type=${searchOption}`)
    }, [searchOption])
    return(
        <SearchOptionContext.Provider 
        value={{searchOption,changeSearchOption,searchTerm,setSearchTerm,currPageToken, setCurrPageToken,nextPageToken, setNextPageToken,prevPageToken, setPrevPageToken}}>
            {props.children}
        </SearchOptionContext.Provider>
    )
}
