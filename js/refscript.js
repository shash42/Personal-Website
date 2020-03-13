function visit()
{
    var stringdata=window.localStorage.getItem("visitcount")
    var data=0;
    if(stringdata)
    {
        data  = JSON.parse(stringdata)
        data=data+1;
       // console.log(data)
        window.localStorage.setItem("visitcount", JSON.stringify(data))
    }
    else
    {
        //console.log("creating")
        data=1;
        window.localStorage.setItem("visitcount", JSON.stringify(data))
    }
    var pagevisit=document.getElementById("visitcnt");
    pagevisit.innerHTML=data;
}
var table = document.getElementById("skill-set").getElementsByTagName('tbody')[0];
var tabledata= JSON.parse(window.localStorage.getItem("reflist"));
console.log(tabledata);

for(var i = 0; i < tabledata.length; i++) {
    var row = table.insertRow(i);
    row.id="rows";
    var j = 0 ; 
    var data = tabledata[i] ;

    for(entry in data) {
        var cell = row.insertCell(j++);
        cell.innerHTML = data[entry] ;
    }
}