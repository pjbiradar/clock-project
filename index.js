const timer=()=>{
  let date=new Date();
  let hh=date.getHours();
  let min=date.getMinutes();
  let sec=date.getSeconds();
  let x=hours>=12? 'pm' : 'am';


  if(hours>=12){
    hours -= 12;

  }
  else if(hours==0){
    hours=12;
    
  }

  document.getElementById("hours").innerHTML=hh;
  document.getElementById("min").innerHTML=min;
  document.getElementById("sec").innerHTML=sec+1;
  document.getElementById("amorpm").innerHTML=x;
  // setTimeout(timer,1000)
}
setTimeout(timer,1000)


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




// const key=()=>{
//   switch(true)
//   {
//   case(t.includes(element)&&t.includes(store1)):
//   const g=document.getElementById("picnic");
//   g.src="wakeup.png"
//   const say=document.getElementById("five1")
//   say.innerText="lets have some breakfast"
//   break;
//   case(t1.includes(element)&&t1.includes(store1)):
//   const g1=document.getElementById("picnic");
//   g1.src="lunch.png"
//   const say1=document.getElementById("five1")
//   say1.innerText="lets have some lunch"
//   break;
//   case(t2.includes(element)&&t2.includes(store1)):
//   const g2=document.getElementById("picnic");
//   g2.src="night.png"
//   const say2=document.getElementById("five1")
//   say2.innerText="lets have supper"
//   break;
//   case(t3.includes(element)&&t3.includes(store1)):
//   const say3=document.getElementById("picnic");
//   g3.src="default image"
//   const say3=document.getElementById("five1")
//   say3.innerText="Hello Girl,Hope ur doing Fine :)"
//   break;

//   }

// }

// key()










































































  








































