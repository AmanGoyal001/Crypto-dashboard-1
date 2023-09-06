import React from "react";
import Button from "../Button";
import './styles.css';
import TemporaryDrawer from "./Drawer";

function Header(){
    return(
    <div className="header">
    <h1>
        CryptoTracker<span style={{color:"var(--red)" }}>.</span>
    </h1>
    <div className="links">
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
           <Button text={"dashboard"} onClick={()=> alert("This Website is in Building Phase.")} />
        </a>

    </div>
     <div className="Drawer-component">
      <TemporaryDrawer />
      </div>
    </div>
    );
        
    
}
export default Header;

