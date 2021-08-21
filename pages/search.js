import Head from 'next/head' 
import { useContext } from 'react';
import Header from '../components/Header'
import Articles from '../components/Article/Articles'
import Images from '../components/Image/Images'
import Videos from '../components/Video/Videos'
import { SearchOptionContext } from '../contexts/SearchOptionContext';
import wiki from './api/wiki';
import unsplash from './api/unsplash';
import youtube from './api/Youtube';
import { ArticleDummyData, ImageDummyData,VideoDummyData } from '../Response';
import PaginationButtons from '../components/PaginationButtons';
import { useRouter } from 'next/router';
const Search = ({results}) => {
    //const {searchOption,searchTerm}=useContext(SearchOptionContext);
    const router=useRouter();
    const SearchComponent=(props)=>{
        if(router.query.type==="Articles" && results.ArticleResults){
            return <Articles results={results.ArticleResults} />
        }
        else if(router.query.type==="Images" && results.ImageResults){
            return <Images results={results.ImageResults} />
        }
        else if(router.query.type==="Videos")
            return <Videos results={results.VideoResults} />
        else
            return(<div>Please wait</div>)
    }
    return (
        <div>
            <Head>
                <title>{router.query.term} - MySearch</title>
            </Head>
            {/* Header */}
            <Header />

            {/* Search results */}
            <SearchComponent />
            <PaginationButtons />
        </div>
    )
}

export default Search
export async function getServerSideProps(context){
    const useDummyData=true;

    //console.log('inside getserversideprops');
    let results={
        ArticleResults:null,
        ImageResults:null,
        VideoResults:null,
    }
    if(context.query.type==="Articles"){
        if(useDummyData){
            results.ArticleResults=ArticleDummyData;
        }
        else{
            let offset;
            if(context.query.page)
                offset=Number(context.query.page)-1;
            else
                offset=0;
            const {data}=await wiki.get('',{
                params:{     
                    srsearch:context.query.term,
                    sroffset:10*(offset)
                }
            })
            results.ArticleResults=data.query.search;
        }
    }
    else if(context.query.type==="Images"){
        let offset=context.query.page || 1;
        if(useDummyData){
            results.ImageResults=ImageDummyData;
        }
        else{
            const data=await unsplash.get('/search/photos',{//axios returns a promise so we can use.... then/catch or async/await!
                params:{
                    query: context.query.term, 
                    per_page:10,
                    page: offset
                
                },
            });
            results.ImageResults=data.data.results;
        }
    }
    else if(context.query.type==="Videos"){
        if(useDummyData){
            results.VideoResults=VideoDummyData;
        }
        else{
            const currPageToken=context.query.current || '';
            const {data} =await youtube.get('/search',{
                params:{
                    q:context.query.term,
                    pageToken:currPageToken
                }
            });
            results.VideoResults=data;
        }
    }
    return(
        {
            props:{
                results:results
            }
        }
    )
}