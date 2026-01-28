        let c=document.getElementById('but');
        let d=document.getElementById('butt');
        let f=document.getElementById('buttt');
        let g=document.getElementById('butttt');
function goNext() {
        var name=c.value;
var password=d.value;
var email=f.value;
var phone=g.value;
localStorage.setItem('userdata',JSON.stringify({name,email,password,phone}));
console.log(name)
    if(name && password && email && phone){
    window.location.href = "table.html";
}}
let table = document.getElementById('table'); // your next page file    
let obj=JSON.parse(localStorage.getItem('userdata'));
if(obj){
    console.log(obj.name);
    table.innerHTML += `
        <tr>
            <td>${obj.name}</td>
            <td>${obj.password}</td>
            <td>${obj.email}</td>
            <td>${obj.phone}</td>
        </tr>
    `;  
}

