import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import '../App.css'
import { NavLink,} from "react-router-dom";
import img from '../fonts/image.png'
const Mainpage =()=>{

const [sot, setSot]= useState()
const [sor, setSor]= useState()
const selec = useSelector((state)=> state.storeCount);
const secondDis =useDispatch();
const getData=(e)=>{
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
// const setChan =(e)=>{
//   if(e && e.target.value){
//    return e.target.value
// } else{
//   return undefined
// }

// }
// const setChange =(e)=>{
//   return e.target.value   }
 {/* <span>Sakinlər</span>{index.demonyms==undefined ? "Məlum Deyil" : index.demonyms.eng.f}  */}
const setSort=(a,b)=>{
  // console.log(setChan())

 if(sor==undefined){
  if(sot == undefined){
    return a.area-b.area
    }
    if(sot == "alfabe"){
  return b.translations.tur.official&&b.translations.tur.official>a.translations.tur.official&&a.translations.tur.official?1:-1
  }
    if(sot == "ahali"){
  return a.population-b.population
  }
    if(sot == "arazi"){
  return a.area-b.area
  }
 }
if(sor=="azalan"){

  if(sot == undefined){
    return b.area-a.area
    }
    if(sot == "alfabe"){
  return a.translations.tur.official&&a.translations.tur.official>b.translations.tur.official&&b.translations.tur.official?1:-1
  }
    if(sot == "ahali"){
  return b.population-a.population
  }
    if(sot == "arazi"){
  return b.area-a.area
  }
}
 if(sor=="artan"){
  if(sot == undefined){
    return a.area-b.area
    }
    if(sot == "alfabe"){
  return b.translations.tur.official&&b.translations.tur.official>a.translations.tur.official&&a.translations.tur.official?1:-1
  }
    if(sot == "ahali"){
  return a.population-b.population
  }
    if(sot == "arazi"){
  return a.area-b.area
  }
 }



}

    return(
        <>
<div className="optDiv">
    <span>Sırala</span>
<select id="selopt" name="selectOne" onChange={(e)=> e&&e? setSot(e.target.value):setSot(undefined)}>
            <option defaultValue value="arazi">&#8226;  Ərazisinə görə</option>
            <option value="ahali">&#8226;  Əhalisinə görə</option>
            <option value="alfabe">&#8226;  Əlifba sıralamasına görə</option>
        </select>
<select name="selectTwo" onChange={(e)=> e&&e? setSor(e.target.value):setSor(undefined)}>
            <option defaultValue value="artan" >&#8226;  Artan</option>
            <option value="azalan">&#8226;  Azalan</option>
        </select>
</div>
{
selec[0] && selec[0]
.sort((a,b) => setSort(a,b))
.map((eachdata, key)=>(

<div className="eachHead" key={key}><NavLink to="/mainPage" onClick={() => secondDis({type: "Each", payload: eachdata})}>
<div><img alt="Yoxdur" src={eachdata.flags.png}/></div>
<div className="coat">{<img alt="yoxdur" src={eachdata.coatOfArms.png==undefined?img:eachdata.coatOfArms.png} />}</div>
    <div>{eachdata.translations==undefined?"Yoxdur":eachdata.translations.tur.official}</div>
    <span><span>Region</span>{eachdata.continents}</span>
    <span><span>Paytaxt</span>{eachdata.capital==undefined?"Yoxdur":eachdata.capital[0]}</span>
    <span ><span>Əhali</span>{eachdata.population==eachdata.population?getData(eachdata.population):null}</span>
</NavLink>
</div>
))
}

        </>
    )
}

export default Mainpage;