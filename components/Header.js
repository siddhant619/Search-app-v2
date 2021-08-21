import { useRouter } from "next/router"
import { Search,X } from "heroicons-react";
import { useRef,useState } from 'react';
import HeaderOptions from './HeaderOptions'
import Recommendation from "./Recommendation/Recommendation";
import { SearchOptionContext } from "../contexts/SearchOptionContext";
const Header = () => {
    const router=useRouter();
    const searchInputRef=useRef(null);
    const [showHistory, setShowHistory]= useState(false);
    const [term, setTerm] = useState('');
    const [key, setKey] = useState(Date.now());

    //const {searchTerm,setSearchTerm,searchOption} = useContext(SearchOptionContext)
    const search=e=>{
        e.preventDefault();
        if(!term) return;
        const searchHistory=( JSON.parse(localStorage.getItem("searchHistory")) || []).filter(item=>{
            if(term===item.term) return false;
            return true;
          });
      
        searchHistory.unshift({term:term});
        localStorage.setItem('searchHistory',JSON.stringify(searchHistory));
        setKey(Date.now());
        router.push(`/search?term=${term}&type=${router.query.type}`);
      }
      const toggleShowHistory=()=>{
        setShowHistory(!showHistory);
      }
    return (
        <header className="sticky top-0 bg-white  border-b z-50">
            <div className="flex flex-col sm:flex-row items-center sm:p-6 p-3 w-full space-y-4 sm:space-y-0">
                <h1 onClick={()=>router.push("/")}
                    className="cursor-pointer text-2xl sm:text-4xl  leading-none font-bold tracking-tight ">
                    My
                    <span
                    className="bg-clip-text bg-gradient-to-r from-primary-500 to-primary-800 tracking-tight"
                    style={{ color: "transparent" }}
                    >
                    Search
                    </span>
                </h1>
                <form className={`relative sm:ml-10   
                    sm:max-w-2xl w-full border border-gray-200  
                    ${showHistory?'rounded-t-3xl':'rounded-3xl hover:shadow-lg '}
                    `} onClick={toggleShowHistory}>
                    <div className="flex items-center px-5 py-3 ">
                        <input value={term}  ref={searchInputRef} type="text" className=" focus:outline-none flex-grow "
                            onChange={e=>setTerm(e.target.value)}/>
                        <X className="h-5 mr-4 text-gray-500 cursor-pointer transition duration-200 transform hover:scale-125" 
                            onClick={()=>setTerm("")}
                        />
                        
                        
                        <button type="submit" className=" focus:outline-none "  onClick={search}><Search className="h-5 mr-1 text-primary-500 cursor-pointer transition duration-200 transform hover:scale-125" /></button>
                    </div>
                    <div className={`absolute bg-white z-50 flex flex-col w-full  shadow-lg  rounded-b-3xl
                          focus-within:shadow-lg pb-4  ${showHistory?'':'hidden'}`}>
                        <Recommendation key={key} term={ term } setTerm={setTerm}/> {/* not this application of nullish coalence */}
                    </div>
                </form>
            </div>
            {/* header opitons */}
            <HeaderOptions />
        </header>
    )
}

export default Header
