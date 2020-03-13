var table = document.getElementById("skill-set").getElementsByTagName('tbody')[0];

function AddRef()
{
    var new_name = document.getElementById("resp_name").value
    var new_skill = document.getElementById("resp_skill").value 
    var new_level = document.getElementById("resp_level").value
    var new_comments = document.getElementById("resp_comments").value
    var topush = {name: new_name, skill: new_skill, 
        level: new_level, comments: new_comments }
    var arr = [new_name, new_skill, new_level, new_comments] ; 
    
    var num_rows = table.rows.length;
    var row = table.insertRow(num_rows);
    row.id="rows";
    for(var j = 0; j < arr.length; j++) {
        var cell = row.insertCell(j);
        cell.innerHTML = arr[j] ;
    }
    
    var stringdata=window.localStorage.getItem("reflist")
    if(stringdata)
    {
        var data = JSON.parse(stringdata)
        data.push(topush)
       // console.log(data)
        window.localStorage.setItem("reflist", JSON.stringify(data))
    }
    else
    {
        //console.log("creating")
        var create_list = []
        create_list.push(topush)
        window.localStorage.setItem("reflist", JSON.stringify(create_list))
    }
}

function clearreflist()
{
    var create_list = []
    window.localStorage.setItem("reflist", JSON.stringify(create_list))
    location.reload();
}