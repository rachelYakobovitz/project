import { Component, ReactNode } from "react";
import React  from "react";
import  { useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardActionArea from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ISystem from "../model/system";
import { LeftArrow, RightArrow } from "./arrows";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { VisibilityContext } from "react-horizontal-scrolling-menu";
// interface IProps {
// }

// interface IState {
//     id:string
//     name:string
//     description:string
//     image:string
//     link:string
// }
type CounterProps = {
  system:ISystem,
  onNextClick:()=>void
};

type CounterState = {
 
};
// <IProps,IState>
class System extends Component <CounterProps,CounterState>{

    // constructor(props:{system:ISystem,onNextClick:()=>void}){
    //     super(props)
       state={
     flag:false
   
      }
      systems:ISystem[]=[];
 

    //  }
    addfavorite(){
   
    
const syst:ISystem[]=[]
      const s=sessionStorage.getItem("system")
      sessionStorage.removeItem("system")
      if(s){
        const dat=JSON.parse(s)
        dat.forEach((r:ISystem) => {
          syst.push(r)
        });
     
      }
      syst.push(this.props.system)

  this.setState({flag:true})

      sessionStorage.setItem("system",JSON.stringify(syst))
     console.log(this.props.system);



    }
    removefavorite(){
      this.setState({flag:false})
      const syst:ISystem[]=[]
      const s=sessionStorage.getItem("system")
      sessionStorage.removeItem("system")
      if(s){
        const dat=JSON.parse(s)
        dat.forEach((r:ISystem) => {
          if(r.name!=this.props.system.name){
            syst.push(r)
          }
          
        });
     
      }
      //syst.push(this.props.system.name)

  //this.setState({flag:true})

      sessionStorage.setItem("system",JSON.stringify(syst))
     console.log(this.props.system);


    }
    componentDidMount(): void {
      const systems:ISystem[]=[]
      var data=sessionStorage.getItem("system")
      if(data){
        const res=JSON.parse(data)
        res.forEach((system:ISystem) => {
          systems.push(system)
        });
       
      
      }
      systems.forEach((element:ISystem) => {
        if(element.id==this.props.system.id)
        {
          this.setState({flag:true})
        }
      });
      
      
     // if(this.props.system in data)
    }
    
render(){
   return(
    <>
    
         <Card sx={{ maxWidth: "345px", height: '30vh', display: 'flex', flexDirection: 'column', margin: '5px' }}  
>
   
      <a href={this.props.system.link} target="_blank">
      {/* <CardMedia
        component=""
        height="140"
        title={this.props.system.name}
     
     
 style={{backgroundImage: `url(${this.props.system.image})`}}

    />  */}
      <CardContent sx={{ maxWidth: "450px", height: '15vh', display: 'flex', flexDirection: 'column', margin: '5px' }} style={{backgroundImage: `url(${this.props.system.image})`}}>

     
        <Typography gutterBottom variant="h5" component="div">
          {this.props.system.name}
        </Typography>
        
          <Typography variant="body2" color="text.secondary" style={{ maxWidth: '100vh', maxHeight: "30vh" }}>
            {this.props.system.description}

          </Typography>
      </CardContent>
      </a>
      {/* להוסיף את הכפתור של המועדפים */}
      <CardActions style={{ height: "20vh" }}>
      {this.state.flag?<h6>הסרה מרשימת המועדפים</h6>: <h6>הוספה למועדפים</h6>}
    { this.state.flag ? <FavoriteIcon onClick={()=>{this.removefavorite()}}></FavoriteIcon> :

     <FavoriteBorderIcon onClick={()=>{this.addfavorite()}}></FavoriteBorderIcon>
   } 
      </CardActions>
    
    </Card>
    
   
        </>
   );
      
}


}
export default System;



//function Card({ onClick, selected, title, itemId }) {
    //   const visibility = React.useContext(VisibilityContext);
    
    //   return (
    //     <div
    //       onClick={() => onClick(visibility)}
    //       style={{
    //         width: '160px',
    //       }}
    //       tabIndex={0}
    //     >
    //       <div className="card">
    //         <div>{title}</div>
    //         <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
    //         <div>selected: {JSON.stringify(!!selected)}</div>
    //       </div>
    //       <div
    //         style={{
    //           height: '200px',
    //         }}
    //       />
    //     </div>
    //   );
    // }




        