const timer=()=>{
  let date=new Date();
  let hh=date.getHours();
  let min=date.getMinutes();
  let sec=date.getSeconds();
  let x=hh>=12? 'pm' : 'am';


  if(hh>=12){
    hh -= 12;

  }
  else if(hh==0){
    hh=12;
    
  }
 
  document.getElementById("hours").innerHTML=hh;
  
  document.getElementById("min").innerHTML=min;
  document.getElementById("sec").innerHTML=sec+1;
  document.getElementById("amorpm").innerHTML=x;

//  const store1=document.getElementById("amorpm")
//  const element= document.getElementById("hours")
//  const wish=document.getElementById("ele");


  if(timings.value.slice[0,4]==hh && timings.value.slice[0,4]==amorpm){
    var g=document.getElementById("picnic");
    g.src="wakeup.png";
    

    var say=document.getElementById("five1")
    say.innerText="lets have some breakfast"
    var g1=document.getElementById("five1");
    g1.appendChild(g);
  }
  else if(timings2.value==hh && timings2.value==amorpm){
    var r=document.getElementById("picnic");
    r.src="lunch.png";

    var say=document.getElementById("five1")
    say.innerText="lets have some lunch"
    var r1=document.getElementById("five1");
    r1.appendChild(r);
  }
  else if (timings3.value==hh && timings3.value==amorpm){
    var e=document.getElementById("picnic");
    e.src="night.png";

    var say=document.getElementById("five1")
    say.innerText="lets have some lunch"
    var e1=document.getElementById("five1");
    e1.appendChild(e);

  }
  else{
      const g3=document.getElementById("picnic");
      const say3=document.getElementById("five1")
      say3.innerText="Hii buddy,Hope ur doing well :)"

  }
  
}
setInterval(timer,1000);



const hii=()=>
{
  const e=document.getElementById("a1");
  e.setAttribute("class","a2");
  console.log(e);

  const c1=document.getElementById("a6");
  c1.setAttribute("class","a5");

  const c2=document.getElementById("a3");
  c2.setAttribute("class","a4");

  const c3=document.getElementById("a7");
  c3.setAttribute("class","a8");

  const change=()=>
  {
    
    const d=document.getElementById("timings").value;
    console.log(d);
    if(d=="")
    {

    }
    else{
      document.getElementById("a6").innerText="wake up time:"+d;
    }
    
    

    const d1=document.getElementById("timings2").value;
    console.log(d1);
    if(d1=="")
    {

    }
    else{
      document.getElementById("a3").innerText="lunch time:"+d1;
    }
    
    const d2=document.getElementById("timings3").value;
    console.log(d2);
    if(d2=="")
    {

    }
    else
    {
      document.getElementById("a7").innerText="dinner time:"+d2;
    }
  }
  change()
}















































  








































