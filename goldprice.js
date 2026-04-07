let loading=true;

let loadingtext=document.getElementById('loadingtext')


async function getdata() {

try{
 loadingtext.style.display="block";
   const res=await fetch("")
    const data= await res.json()
loadingtext.style.display="none";
}
catch(error){
    loadingtext.innerHTML="<h1> loading failed </h1>"

}
  



}

let  data1 = getdata();








