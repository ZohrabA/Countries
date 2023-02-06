import React,{Component} from 'react';
import stylex from './header.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';


const HeaderO =()=> {

    const dismis = useDispatch()
    const getStat = useSelector(state=>state.storeCount);


    const getValue=event=>{
event.target.value = event.target.value.replace(/[0-9!@#\$%\^\&*\?\[\]\\|\/\:\;\"\'\~\`\ \)\(+=._-]/gi, "")
let x =   event.target.value ;

if(x==""){
    getStat[0].filter(cntry => cntry.translations.tur.official.toLowerCase().includes(x.toLowerCase())? dismis({
        type:"SIL",
        payload:cntry
    }): "Yoxdurda")
    document.getElementById("impo").style.display="none"

}else{
getStat[0].filter(cntry => cntry.translations.tur.official.toLowerCase().includes(x.toLowerCase())? dismis({
    type:"SIL",
    payload:cntry
}): "Yoxdurda")

getStat[0].filter(cntry => cntry.translations.tur.official.toLowerCase().includes(x.toLowerCase())? 

dismis({
    type:"NEV",
    payload:cntry
}): 
dismis({
    type:"Sill",
    payload:cntry
})
)
document.getElementById("impo").style.display="block"
}


}

const sett = useSelector(state=> state.storeN);
const getDataa=(e)=>{
    if(String(e).length>9){
      let a = String(e).slice(-3)
      let b = String(e).slice(-6,-3)
      let c = String(e).slice(-9,-6)
      let d = String(e).substr(0, String(e).length-(a.length+b.length+c.length)) 
   let x =d+"."+c+"."+b+"."+a
   return x
   }
    if(String(e).length>6 && String(e).length<10){
      let a = String(e).slice(-3)
      let b = String(e).slice(-6,-3)
      let c = String(e).substr(0, String(e).length-(a.length+b.length)) 
   let x =c+"."+b+"."+a
   return x
   }
    if(String(e).length>3 && String(e).length<7){
      let a = String(e).slice(-3)
      let b = String(e).substr(0, String(e).length-(a.length)) 
   let x =b+"."+a
   return x
   }
    if(String(e).length<4){
   return String(e)
   }
   }

 const setClick=()=>{
    document.getElementById("impo").style.display="none"

 }

  
    return(
        <>
        <header>

<div><NavLink to="/">COUNTRIES</NavLink></div>
<div> 
        <div className={stylex.divT}>
    <input type="text" placeholder='Axtar...' onKeyUpCapture={getValue}/>
    <button onClick={getValue}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
    </button>
    <div className={stylex.divO} id="impo">

        {
            sett&&sett.map((e, key)=>(
                
                <NavLink to="/mainPage" key={key} onClick={() => dismis({type: "Each", payload: e})&&(setClick())}>
<div><img alt="Yoxdur" src={e.flags.png}/></div>
<div className={stylex.ediv}><span>{e.translations==undefined?"Yoxdur":e.translations.tur.official}</span>
    <span><span>Region</span>{e.continents}</span>
    <span><span>Paytaxt</span>{e.capital==undefined?"Yoxdur":e.capital[0]}</span>
    <span ><span>Əhali</span>{e.population==e.population?getDataa(e.population):null}</span></div>
        </NavLink>
                
                ))
            }
            </div>
   
        </div>
</div>

        </header>
        
        </>
    )
}

export default HeaderO;