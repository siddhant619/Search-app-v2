import React,{useState} from 'react'

const Test = ({results}) => {
    const [test, setTest] = useState("abc");
    console.log(results);
    return (
        <div>
            in test
        </div>
    )
}

export default Test

export async function getServerSideProps(context,test){
    
    const data={
        name:'sid'+test,
        age:22
    }
    return(
        {
            props:{
                results:context.params
            }
        }
    )
}