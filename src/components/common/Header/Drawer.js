import  React, {useState} from 'react';

import Drawer from '@mui/material/Drawer';

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';


export default function TemporaryDrawer() {
 const[open,setOpen]= useState(false);

  return (
    <div>
    
        <IconButton onClick={()=> setOpen(true)}>
            <MenuIcon className="link" />
        </IconButton>
          <Drawer 
          
            anchor={"right"}    /*this is the anchor which tells from where the drawer will pop-out*/
            open={open}
            onClose={()=>setOpen(false)}>
    <div className="drawer-div">
        <a href="/">
            <p className="link">Home</p>
        </a>
        <a href="/Compare">
            <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
            <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
           <p className="link">Dashboard</p>
        </a>

    </div>
            
           </Drawer>
    </div>
  );
}
