const arr = ["asda", "adasd", 'adsd', 3, 5]
var arr1 = {name: 'asad', age: 34}

for (const a of arr)
{
    //console.log('Value is : ' + a )
}

//console.log(arr.map(c => ('value is: '+ c)))
//console.log(arr)

var newarr = arr
//console.log(newarr)

newarr.push("aadasdasdasdasd")
//console.log(newarr)

const newarr1 = {...arr1}
//console.log(newarr1)

newarr1.pus
//console.log(newarr)

let data = [];
data[0] = { "ID": "1", "Status": "Valid" };
data[1] = { "ID": "2", "Status": "Invalid" };

let tempData = [];

tempData= data.filter((item)=>item.Status!='Invalid')

//console.log(tempData)


var data1 = [{"ID": "1", "Status": "Valid"},{"ID": "2", "Status": "InValid"},{"ID": "3", "Status": "Valid"},{"ID": "4", "Status": "InValid"},{"ID": "5", "Status": "Valid"}]
var data2 = [];
var i=0;
for(let a of data1)
{
    //console.log(data1[i]); 
    if(a.Status!="InValid")
    {
        data2.push(data1[i]);
    }
    i++;
}

console.log(data2);

