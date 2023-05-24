import { Component, ReactNode } from "react";
//import db from '../data/dataSystem.json'
import System from "./system";
import ISystem from "../model/system";
import { log } from "console";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from "./arrows";
//import  Card  from "./card";
import { Box } from "@mui/material";
import img from '../../image/apl.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { CacheProvider } from "@emotion/react";


interface IProps {
}

interface IState {
    systems: ISystem[];
}
class SystemList extends Component<IProps, IState>{
    constructor(props: any) {
        super(props)

        let arr: ISystem[] = [];
        this.state = {
            systems: arr
        }
        // let systemarr : ISystem[]=[];
        // db.system.forEach((e: ISystem) =>
        //     systemarr.push(e)
        // )


    }
    systmarr: ISystem[] = [
        {
            id: 1,
            name: "iTunes",
            description: "iTunes הוא הדרך הפשוטה ביותר ליהנות מכל אמצעי הבידור שצריך – מוסיקה, סרטים ותכניות טלוויזיה – ולמצוא אותם בצורה מסודרת ונגישה. ניתן לשכור או לקנות סרטים, להוריד את תכניות הטלוויזיה המועדפות עליך, ועוד",
            image: '../../image/iTunes.png',
            link: "https://apps.microsoft.com/store/detail/itunes/9PB2MZ1ZMB1S?hl=he-il&gl=il"
        },
        {
            id: 2,
            name: "WhatsApp",
            description: "WhatsApp from Meta היא אפליקציה חינמית לשליחה ולקבלה של הודעות. משתמשים בה יותר מ-2 מיליארד אנשים, ביותר מ-180 מדינות. היא קלה לשימוש, אמינה ופרטית, כך שתוכלו לשמור על קשר עם החברים והמשפחה בקלות. ",
            image: '../../image/apl.png',
            link: "https://apps.microsoft.com/store/detail/whatsapp/9NKSQGP7F2NH?hl=he-il&gl=il"
        },
        {
            id: 3,
            name: "iCloud ",
            description: "עם iCloud עבור Windows באפשרותך לדעת שהתמונות, הסרטים, הודעות הדואר, לוח השנה וכל מידע חשוב אחר שאחסנת יהיה תמיד מעודכן וזמין עבורך במחשב ה‏-‏Windows PC שלך.",
            image: '../../image/iCloud.png',
            link: "https://apps.microsoft.com/store/detail/icloud/9PKTQ5699M62?hl=he-il&gl=il"
        },
        {
            id: 4,
            name: "Facebook ",
            description: "The Facebook app helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family, as well as discovering new ones, is easy with features such as Groups, Watch and Marketplace.",
            image: '../../image/facebook.png',
            link: "https://apps.microsoft.com/store/detail/facebook/9WZDNCRFJ2WL?hl=he-il&gl=il"
        }//,
        // {
        //     id: "10",
        //     name: " Power BI ",
        //     description: "Power BI Desktop puts visual analytics at your fingertips. With this powerful authoring tool, you can create interactive data visualizations and reports.",
        //     image: '../../image/bi.png',
        //     link: "https://apps.microsoft.com/store/detail/power-bi-desktop/9NTXR16HNW1T?hl=he-il&gl=il"
        // },///////////////////////////////////////////////
        // {
        //     id: "10",
        //     name: " Power BI ",
        //     description: "Power BI Desktop puts visual analytics at your fingertips. With this powerful authoring tool, you can create interactive data visualizations and reports.",
        //     image: '../../image/bi.png',
        //     link: "https://apps.microsoft.com/store/detail/power-bi-desktop/9NTXR16HNW1T?hl=he-il&gl=il"
        // },
        // {
        //     id: "10",
        //     name: " Power BI ",
        //     description: "Power BI Desktop puts visual analytics at your fingertips. With this powerful authoring tool, you can create interactive data visualizations and reports.",
        //     image: '../../image/bi.png',
        //     link: "https://apps.microsoft.com/store/detail/power-bi-desktop/9NTXR16HNW1T?hl=he-il&gl=il"
        // },
        // {
        //     id: "10",
        //     name: " Power BI ",
        //     description: "Power BI Desktop puts visual analytics at your fingertips. With this powerful authoring tool, you can create interactive data visualizations and reports.",
        //     image: '../../image/bi.png',
        //     link: "https://apps.microsoft.com/store/detail/power-bi-desktop/9NTXR16HNW1T?hl=he-il&gl=il"
        // }
    ]




    getData() {
        const data = async () => {
            const res = await fetch('../data/dataSystem.json', { method: "GET" })
            const final = await res.json();
            //.then((response)=>{console.log(response);  console.log(data);
            console.log(final);
            console.log(res);

        }

        //)
        // console.log(data);



    }
    //.then((json)=>console.log(json))

    //    const api = async () => {
    //     const data = await fetch("https://randomuser.me/api", {
    //       method: "GET"
    //     });
    //     const jsonData = await data.json();
    //     setResult(jsonData.results);
    //   };


    componentDidMount(): void {
        //console.log(db)
        console.log("hhhh");

        console.log(this.systmarr)
        this.setState({ systems: this.systmarr })

        console.log(this.state.systems);
        sessionStorage.setItem("systems",JSON.stringify(this.systmarr));

        this.getData()
    }
    

    render() {
        return (
            <>
            <div>
        
       
      
                {/* <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}> */}
                
                <Box sx={{ display: "flex" ,alignItems:"center",justifyContent:"center"}}  style={{ width: "75vw" }}>
{/* <div  className="relative flax items-center">
    <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
        <div  className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"> */}
                    {this.systmarr?.map((e: ISystem,index:number) =>
                    <System   key={index} system={e} onNextClick={()=>{}}></System>


                )}
                {/* </div>
                </div>
                </div> */}
                  </Box>
            

                    {/* {this.systmarr.map((e: ISystem) => (
                        <Card
                            {...e}
                        />
                    ))} */}
                {/* </ScrollMenu> */}
              
                </div>
            </>
        );
    }


}
export default SystemList;


