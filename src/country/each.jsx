import React from "react";
import { useSelector } from "react-redux";
import styles from "./each.module.css";
import img from '../fonts/image.png'

const Each =()=>{
    
    
    const secSel = useSelector((state)=> state.eachOne);
    const secFirst = useSelector((state)=> state.storeCount);
   const setDote=(e)=>{
      e= Math.round(Number(e));
    if(String(e).length>6){
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
      if(String(e).length<5){
     return String(e)
     }
    
   }
   const setDoteTwo=(e)=>{
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


   const setBorder=(e)=>{
let x =[]
       e.map((e, key)=>{


        for(let i =0; i< secFirst[0].length; i++){
           if(e==secFirst[0][i].cca3){
            key+=1;
            return x.push(key,".", secFirst[0][i].name.common, ".   ")
           }
          
        }
       })
return x

   }
   const setPhone =(e)=>{
      
let x =[]

e.suffixes&&e.suffixes.map((d)=>{
   let a = e.root;
   x.push(a+d,". ")
return x})
return x
   }


   const setCapital=(e)=>{
let x =[]
e.map((i)=>{
x.push(i +".  ")
return x })
return x
   }



    return(
        < >
{
    secSel&&secSel.map((index, key)=>(
        <div key={key} className={[styles.divOne, styles.otherOne].join(" ")}>
<div className={styles.besideo}>
<div className={styles.insideOne}><span>Bayrağı</span>{<img alt="yoxdur" src={index.flags.png} />}</div>
<div className={styles.insideTwo}><span>Gerbi</span>{<img alt="yoxdur" src={index.coatOfArms.png==undefined?img:index.coatOfArms.png} />}</div>
</div>
<div className={styles.besidet}>
<div><span className={styles.spanThree}>{index.name.official}</span></div>
<div><span className={styles.spanOne}>Öz Dillərində Rəsmi Adı:</span><span className={styles.spanTwo}>{index.altSpellings==undefined ?"Məlum Deyil": index.altSpellings[2]==undefined?"Məlum Deyil":index.altSpellings[2]}</span></div>
<div><span className={styles.spanOne}>Paytaxtı:</span><span className={styles.spanTwo}>{index.capital==undefined?"Yoxdur":setCapital(index.capital)}</span></div>
<div><span className={styles.spanOne}>Ərazisi:</span> <span className={styles.spanTwo}>{index.area==index.area? setDote(index.area):null} km <sup>2</sup></span></div>
<div><span className={styles.spanOne}>Əhalisi:</span><span className={styles.spanTwo}>{index.population==index.population? setDoteTwo(index.population) :null}</span></div>
<div><span className={styles.spanOne}>Rəsmi dili:</span><span className={styles.spanTwo}>{index.languages==undefined? "Məlum Deyil":index.languages[Object.keys(index.languages)[0]]}</span></div>
<div><span className={styles.spanOne}>Qitə və Materik:</span><span className={styles.spanTwo}>{index.continents==undefined? "Məlum Deyil":index.continents}</span></div>
<div><span className={styles.spanOne}>Region:</span> <span className={styles.spanTwo}>{index.region==undefined? "Məlum Deyil":index.region}</span></div>
<div><span className={styles.spanOne}>Subregion:</span><span className={styles.spanTwo}>{index.subregion==undefined? "Məlum Deyil":index.subregion}</span></div>
<div><span className={styles.spanOne}>Müstəqillik:</span><span className={styles.spanTwo}>{index.independent==undefined?"Məlum Deyil":index.independent==true? "Var":"Yoxdur"}</span></div>
<div><span className={styles.spanOne}>Dənizə Çıxışı:</span><span className={styles.spanTwo}>{index.landlocked==undefined?"Məlum Deyil":index.landlocked==true? "Var":"Yoxdur"}</span></div>
<div><span className={styles.spanOne}>Telefon Kodu:</span> <span className={styles.spanTwo}>{index.idd==undefined? "Məlum Deyil": setPhone(index.idd)}</span></div>
<div><span className={styles.spanOne}>Pul Vahidi:</span> <span className={styles.spanTwo}>{index.currencies == undefined? "Məlum Deyil":index.currencies[Object.keys(index.currencies)[0]].name}</span></div>
<div><span className={styles.spanOne}>Pul Vahidinin Simvolu: </span><span className={styles.spanTwo}>{index.currencies == undefined? "Məlum Deyil":index.currencies[Object.keys(index.currencies)[0]].symbol}</span></div>
<div><span className={styles.spanOne}>Gini Faizlə:   {index.gini==undefined?"": Object.keys(index.gini) +" ilin Məlumatı:"} </span> <span className={styles.spanTwo}>{index.gini ==undefined? "Məlum Deyil": index.gini[Object.keys(index.gini)[0]] +" %"}</span></div>
<div><span className={styles.spanOne}>Avtomobil sükanının istiqaməti: </span> <span className={styles.spanTwo}>{index.car==undefined?"Məlum Deyil":index.car.side=="right"?"Sol":"Sağ"}</span></div>
<div><span className={styles.spanOne}>Avtomobil nömrə nişanı: </span> <span className={styles.spanTwo}>{index.car.signs==undefined || index.car.signs=="" ?"Məlum Deyil":index.car.signs}</span></div>
<div><span className={styles.spanOne}>Saat Qurşağı:</span><span className={styles.spanTwo}>{index.timezones==undefined? "Məlum Deyil":index.timezones[0]}</span></div>
<div><span className={styles.spanOne}>Top Level Domain:</span><span className={styles.spanTwo}>{index.tld==undefined? "Məlum Deyil":index.tld[0]}</span></div>
<div><span className={styles.spanOne}>Qonşuları:</span> <span className={styles.spanTwo}>{index.borders==undefined?"Yoxdur":setBorder(index.borders)}</span></div>
</div>
        </div>
    ))
}
        </>
    )
}

export default Each;



// salam, mən bəşər tinayev, 
//  orta tehsilliyem, herbi xidmetde olmamisam, subayam,  
//  yeni nesil texnalogiyalar haqda melumat toplamagi və  insanlarla unsiyetde olmagi xoslayiram
// Baleken rayonunda yasamagima baxmayaraq kantak homun zaqatala filiali yasadigim unvanin
//    10 kilometrliyinde yerlesir