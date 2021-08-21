import React,{useState,useEffect} from 'react'
import {ClockIcon,XIcon} from  "@heroicons/react/outline";

const Recommendation = ({term,setTerm,setShowHistory}) => {
    const [history, setHistory] = useState([]);
    useEffect(() => {
        setHistory(JSON.parse(localStorage.getItem("searchHistory")) || []);
        
    }, []) //runs only on first render

    const deleteItem=(term)=>{
        const newHistory=history.filter(item=>{
            if(item.term===term) 
                return false;
            return true;
        })
        setHistory(newHistory);
        localStorage.setItem('searchHistory',JSON.stringify(newHistory));
    }
    const results=history.map((item,index)=>{
        if(item.term.toLowerCase().startsWith(term.toLowerCase()) && index<10)
        { 
            return(
                <div className="px-5 flex items-center justify-between py-1 hover:bg-gray-100"
                    onClick={()=>setTerm(item.term)}>
                    <div className="flex items-center">
                        <ClockIcon className="h-5 mr-1 text-gray-500 " />
                        <div>{item.term}</div>
                    </div>
                    <XIcon  
                        onClick={(e)=>{
                            deleteItem(item.term);
                            e.stopPropagation();
                        }}
                        className="h-5 mr-1 text-gray-500 hover:text-gray-900   cursor-pointer" />
                </div>
            )
        }
        else
            return null;
    })
    return (
        <div>
            {results}
            {/* <div className="px-5 flex items-center justify-between py-1 hover:bg-gray-100">
              <div className="flex items-center">
                <ClockIcon className="h-5 mr-1 text-gray-500 " />
                <div>lorem ipsum</div>
              </div>
              <XIcon  className="h-5 mr-1 text-gray-500 hover:text-gray-800  cursor-pointer" />
            </div>
            <div className="px-5 flex items-center justify-between py-1 hover:bg-gray-100 ">
              <div className="flex items-center">
                <ClockIcon className="h-5 mr-1 text-gray-500 " />
                <div>lorem ipsum</div>
              </div>
              <XIcon  className="h-5 mr-1 text-gray-500 hover:text-gray-800  cursor-pointer" />
            </div> */}
        </div>
    )
}

export default Recommendation
