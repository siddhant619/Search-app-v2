import Link from "next/link"
import {useContext} from 'react'

import { useRouter } from "next/router"
import { ChevronLeft,ChevronRight } from "heroicons-react";
import { SearchOptionContext } from "../contexts/SearchOptionContext";

const PaginationButtons = () => {
    const router=useRouter();
    const currentPage= Number(router.query.page) || 1 ;
    const {currPageToken,nextPageToken,prevPageToken} = useContext(SearchOptionContext);
    const isFirstPage=()=>{
        if(router.query.type==="Videos"){
            return !prevPageToken
        }
        else{
            return currentPage<=1
        }

    }
    const getPrevPage=()=>{
        if(router.query.type==="Videos"){
            return !prevPageToken
        }
        else{
            return currentPage-1
        }
    }
    const getNextPage=()=>{
        if(router.query.type==="Videos"){
            return !prevPageToken
        }
        else{
            return currentPage+1
        }
    }
    return (
        <div className="flex justify-between max-w-lg text-primary-800 mb-10">
            
            {!isFirstPage() &&
                <Link href={`/search?term=${router.query.term}&type=${router.query.type}&page=${getPrevPage()}`}>
                    <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                        <ChevronLeft className="h-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            }
            <Link href={`/search?term=${router.query.term}&type=${router.query.type}&page=${getNextPage()}`}>
                <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                    <ChevronRight className="h-5"/>
                    <p>Next</p>
                </div>
            </Link>
        </div>
    )
}

export default PaginationButtons
