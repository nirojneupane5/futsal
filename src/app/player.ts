import sabin from '../../public/players/sabin.jpg'
import prajjwal from '../../public/players/prajjwal.jpg'
import subodh from '../../public/players/subodh.jpg'
import suman from '../../public/players/suman.jpg'
import { StaticImageData } from 'next/image';
type Player = {
    name: string;
    position: string;
    img: StaticImageData;
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
        img:prajjwal
        
    },
    {
        name:"Subodh Neupane",
        position:"Midfilder",
        img:subodh
        
    },
    {
        name:"Suman Neupane",
        position:"Defender",
        img:suman
        
    }
]