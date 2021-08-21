import axios from 'axios';
import React, { useEffect, useState } from 'react';
import wiki from '../../pages/api/wiki'

function Articles ({results}) {
    const renderedResults= results?.map ((result)=>{
        return (
            <div className="max-w-2xl mb-5" key={result.pageid}>
                <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank" class="">
                    <h2 className="truncate text-xl sm:text-2xl text-primary-600 0 font-medium hover:underline mb-1">
                        {result.title}
                    </h2>
                </a>
                <span class="line-clamp-2" dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                
            
            </div>
        );
    } )
    return (
        <div className="w-full mx-auto px-3 sm:pl-6 md:pl-16">
            
            <div className="ui celled list">
            
                {results.length===0?
                    <div className="ui header">No results found</div>
                :''           
                }
                {results? renderedResults:null}
            </div>
        </div>
    )
}

export default Articles
