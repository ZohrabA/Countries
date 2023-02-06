import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css'

const Foote =()=>{




    return(
        <div className="foote">
<span>Movie.Az © 2021</span>
<span>
<NavLink>Haqqımızda</NavLink>
<NavLink>Müəllif Hüquqları</NavLink>
<NavLink>İstifadə qaydaları</NavLink>
</span>

        </div>
    )
}

export default Foote