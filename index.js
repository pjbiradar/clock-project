let t=""
let t1=""
let t2=""
let t3=""

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
  console.log(hh);
  console.log(min);
  console.log(sec);
  document.getElementById("hours").innerHTML=hh;
  
  document.getElementById("min").innerHTML=min;
  document.getElementById("sec").innerHTML=sec+1;
  document.getElementById("amorpm").innerHTML=x;

 const store1=document.getElementById("amorpm")
 const element= document.getElementById("hours")

  switch(true)
  {
  case(t.includes(element)&&t.includes(store1)):
  const g=document.getElementById("picnic");
  g.src="wakeup.png"
  const say=document.getElementById("five1")
  say.innerText="lets have some breakfast"
  break;
  case(t1.includes(element)&&t1.includes(store1)):
  const g1=document.getElementById("picnic");
  g1.src="lunch.png"
  const say1=document.getElementById("five1")
  say1.innerText="lets have some lunch"
  break;
  case(t2.includes(element)&&t2.includes(store1)):
  const g2=document.getElementById("picnic");
  g2.src="night.png"
  const say2=document.getElementById("five1")
  say2.innerText="lets have supper"
  break;
  default:
  const g3=document.getElementById("picnic");
  g3.src="default image"
  const say3=document.getElementById("five1")
  say3.innerText="Hii buddy,Hope ur doing well :)"
  break;

  }
  
  
}
setInterval(timer,1000);


let child=hii();

function hii ()
{
  let key=document.createElement("div");
  key.setAttribute("id","key1");
  key.style.height="110px";
  key.style.width="250px";
  key.style.backgroundColor="blue";
  key.style.borderRadius="7px";
  key.style.position="absolute";
  key.style.bottom="20px";
  key.style.left="160px";

  let morning=document.createElement("p");
  morning.setAttribute("id", "morning");
  morning.style.fontSize = "18px";
  morning.style.color = "white";
  morning.style.marginTop = "10px";
  morning.style.marginLeft = "15px";

  let after=document.createElement("p");
  after.setAttribute("id", "after");
  after.style.fontSize = "18px";
  after.style.color = "white";
  after.style.marginTop = "10px";
  after.style.marginLeft = "15px";

  let night=document.createElement("p");
  night.setAttribute("id", "night");
  night.style.fontSize = "18px";
  night.style.color = "white";
  night.style.marginTop = "10px";
  night.style.marginLeft = "15px";
  return function change()
  {
    let z=document.getElementById("whole").appendChild(key)
    console.log(z);
    let j = document.getElementById("timings").value
    morning.innerText = "Wake up : " + j
    document.getElementById("key").appendChild(morning)

    let j1 = document.getElementById("timings2").value
    after.innerText = "Lunch : " + j1
    document.getElementById("key").appendChild(after)

    let j3 = document.getElementById("timings3").value
    night.innerText = "Nap : " + j3
    document.getElementById("key").appendChild(night)

    t = (document.getElementById("timings").value).slice(0, 4)
    t1 = (document.getElementById("timings2").value).slice(0, 4)
    t2 = (document.getElementById("timings3").value).slice(0, 4)
  }
}
  







































































  








































