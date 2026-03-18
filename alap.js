const sor=15
const oszlop=15

let sz=""
for (let i = 0; i < sor; i++) {
    for (let j = 0; j < oszlop; j++) {
        sz+=`<button id="${i}_${j}" onclick="kattint(this.id)" style="width:20px;height:20px;background-color:lightgrey;border:1px solid grey;border-radius:2px"></button>`
        
        }
    sz+=`<br>`
    }
document.getElementById("keret").innerHTML=sz


function kattint(id){
    //alert(id)
    kecske=id.split("_")
    let idSor=parseInt(kecske[0])
    let idOszlop=parseInt(kecske[1])   

    
    if (document.getElementById(id).style.backgroundColor=="lightgrey")
        document.getElementById(id).style.backgroundColor="red" 
    else
        document.getElementById(id).style.backgroundColor="lightgrey" 

    //felette
    if (idSor-1>=0)
        if (document.getElementById(`${idSor-1}_${idOszlop}`).style.backgroundColor=="lightgrey")
            document.getElementById(`${idSor-1}_${idOszlop}`).style.backgroundColor="red"
        else 
            document.getElementById(`${idSor-1}_${idOszlop}`).style.backgroundColor="lightgrey"
    //alatta
    if (idSor+1<sor)
        if (document.getElementById(`${idSor+1}_${idOszlop}`).style.backgroundColor=="lightgrey")
            document.getElementById(`${idSor+1}_${idOszlop}`).style.backgroundColor="red"
        else
            document.getElementById(`${idSor+1}_${idOszlop}`).style.backgroundColor="lightgrey"
    
    //bal
    if (idOszlop-1>=0)
        if (document.getElementById(`${idSor}_${idOszlop-1}`).style.backgroundColor=="lightgrey")
            document.getElementById(`${idSor}_${idOszlop-1}`).style.backgroundColor="red"
        else 
            document.getElementById(`${idSor}_${idOszlop-1}`).style.backgroundColor="lightgrey"
    //jobb
    if (idOszlop+1<oszlop)
        if (document.getElementById(`${idSor}_${idOszlop+1}`).style.backgroundColor=="lightgrey")
            document.getElementById(`${idSor}_${idOszlop+1}`).style.backgroundColor="red"
        else
            document.getElementById(`${idSor}_${idOszlop+1}`).style.backgroundColor="lightgrey"
}




