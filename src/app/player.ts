import sabin from '../../public/players/sabin.jpg'
import { StaticImageData } from 'next/image';
type Player = {
    name: string;
    position: string;
    img: string |  StaticImageData;
  };
  

export const  player:Player[]=[
    {
        name:"Sabin Neupane",
        position:"Forward/Goal keeper",
        img:sabin
    },
    {
        name:"Prajjwal Neupane",
        position:"Forward",
        img:"/players/prajjwal.jpg"
        
    },
    {
        name:"Subodh Neupane",
        position:"Midfilder",
        img:"/players/subodh.jpg"
        
    },
    {
        name:"Suman Neupane",
        position:"Defender",
        img:"/players/suman.jpg"
        
    }
]