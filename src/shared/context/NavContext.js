import {createContext} from 'react';

export const NavContext=createContext({
    
    open:true,
    drawerOpen:()=>{},
    drawerClose:()=>{}
})