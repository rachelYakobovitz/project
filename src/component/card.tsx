import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import ISystem from "../model/system";
interface IProps {
}

interface IState {
    id:Number
    name:string
    description:string
    image:string
    link:string
}
class Card extends React.Component<IProps,IState>{
 constructor(props:ISystem){
    super(props)
    this.state={
        id:props.id,
        name:props.name,
        description:props.description,
        image:props.image,
        link:props.link
    }
 }

  visibility = React.useContext(VisibilityContext);

 //visible = this.visibility.isItemVisible(this.state.id);

 render(): React.ReactNode {
     return(
        <div
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "160px",
        userSelect: "none"
      }}
      tabIndex={0}
      className="card"
    >
      {/* <div>
        <div>{this.state.name}</div>
        <div style={{ backgroundColor: this.visible ? "transparent" : "gray" }}>
          visible: {JSON.stringify(this.visible)}
        </div>
      </div> */}
      <div
        style={{
          backgroundColor: "bisque",
          height: "200px"
        }}
      />
    </div>
     )
 }
}
export default Card;

// export function Card({ title, itemId }: { title: string; itemId: string }) {
//   const visibility = React.useContext(VisibilityContext);

//   const visible = visibility.isItemVisible(itemId);

//   return (
//     <div
//       role="button"
//       style={{
//         border: "1px solid",
//         display: "inline-block",
//         margin: "0 10px",
//         width: "160px",
//         userSelect: "none"
//       }}
//       tabIndex={0}
//       className="card"
//     >
//       <div>
//         <div>{title}</div>
//         <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
//           visible: {JSON.stringify(visible)}
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundColor: "bisque",
//           height: "200px"
//         }}
//       />
//     </div>
//   );
// }