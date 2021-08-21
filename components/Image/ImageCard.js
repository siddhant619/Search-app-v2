
import React from 'react'
import Image from 'next/image'


class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={spans:0};
        this.containerRef=React.createRef();//assigning ref to instance variable imageRef
    }
    setSpan=()=>{
        //const w=(this.containerRef.current.clientWidth); 
        const h=300*(this.props.image.height/this.props.image.width  );
        
        const spans=Math.ceil(h/10 );//gives no. of spans required( grid-auto-rows: 10px)
        this.setState({spans:spans});//update span
        //console.log('w is: ',this.props.image.description,w);
    }
    
    
    render(){
    return (
        <div style ={{gridRowEnd:`span ${this.state.spans}` }} ref={this.containerRef}>
            <Image
                src={this.props.image.urls.regular}
                alt={this.props.image.description}
                width={this.props.image.width} height={this.props.image.height} 
                layout="responsive"
                placeholder='blur'
                blurDataURL={this.props.image.urls.thumb}
                onLoad={this.setSpan}
                onLoadingComplete={(elem)=>{
                    console.log(elem)
                }}
            /> 
            
        </div>
    );
    }

}
export default ImageCard