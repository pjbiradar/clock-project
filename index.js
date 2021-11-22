const timer=()=>{
  let date=new Date();
  let hh=date.getHours();
  let min=date.getMinutes();
  let sec=date.getSeconds();
  let x=hh>=12? 'PM' : 'AM';


  if(hh>=12){
    hh -= 12;

  }
  else if(hh==0){
    hh=12;
    
  }
 
 
  document.getElementById("hours").innerHTML=hh;
  // console.log(x);
  document.getElementById("min").innerHTML=min;
  document.getElementById("sec").innerHTML=sec+1;
  document.getElementById("amorpm").innerHTML=x;

  var d=document.getElementById("timings").value;
  var value1=d.slice(0,1);
  // console.log(value1);
  var local=d.slice(-2);
  // console.log(local);

  var d1=document.getElementById("timings2").value;
  var value2=d1.slice(0,1);
  var local2=d1.slice(-2);
  // console.log(local2);

  var d2=document.getElementById("timings3").value;
  var value3=d2.slice(0,1);
  var local3=d2.slice(-2);
  // console.log(value3);
  // console.log(local3);  
  
  

  if((value1==hh) && (local==x)){
    var g=document.getElementById("picnic");
    g.src="wakeup.png"
    var say=document.getElementById("five1")
    say.innerText="**lets have some breakfast **"
    say.appendChild(g);
  }
  else if((value2==hh) && (local2==x)){
    var r=document.getElementById("picnic");
    r.src="lunch.png";
    var say1=document.getElementById("five1")
    say1.innerText="lets have some lunch!!"
    say1.appendChild(r);
  }
  else if ((value3==hh) && (local3==x)){
    var e=document.getElementById("picnic");
    e.src="night.png";
    var say2=document.getElementById("five1")
    say2.innerText="lets get some sleep!!!"
    say2.appendChild(e);

  }
  else{
      const g3=document.getElementById("picnic");
      const say3=document.getElementById("five1")
      say3.innerText="Hii buddy,Hope ur doing well :)"
      say3.style.fontSize="30px";
      say3.style.color="hotpink";
      say3.style.marginTop="10px";


  }
  
}
setInterval(timer,1000);



const hii=()=>
{
  var c=document.getElementById("a1");
  c.setAttribute("class","a2");
  console.log(c);

  var c1=document.getElementById("a6");
  c1.setAttribute("class","a5");

  var c2=document.getElementById("a3");
  c2.setAttribute("class","a4");

  var c3=document.getElementById("a7");
  c3.setAttribute("class","a8");

  const change=()=>
  {
    var d=document.getElementById("timings").value;
    var value1=d.slice(0,1);
    var ampm=d.slice(-2);
    // console.log(value1);
  
    var d1=document.getElementById("timings2").value;
    var value2=d1.slice(0,4);
    // console.log(value2);
  
    var d2=document.getElementById("timings3").value;
    var value3=d2.slice(0,4);
    // console.log(value3);  
    
   
    if(d=="")
    {

    }
    else{
      document.getElementById("a6").innerText="wake up time:"+d;
    }
    
    if(d1=="")
    {

    }
    else{
      document.getElementById("a3").innerText="lunch time:"+d1;
    }
    
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















































  








































