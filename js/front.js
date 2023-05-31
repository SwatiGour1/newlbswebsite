const counters=document.querySelectorAll('.counter');
// console.log("hello");
counters.forEach((counter)=>{
counter.innerHTML=0;
const updatecounter=()=>{
const targetcount=+counter.getAttribute('data-target');
const startingCount=Number(counter.innerHTML);
const incr=targetcount/100;
if(startingCount<targetcount){
    counter.innerHTML=`${Math.round(startingCount+incr)}`;
    setTimeout(updatecounter,10)
}
else{
    counter.innerHTML=targetcount;
}
}
updatecounter();
})