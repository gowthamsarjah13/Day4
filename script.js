
// to compare two json object:

/*

obj1[i] == obj2[i]


*/


let request = new XMLHttpRequest() ;

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){
    
    let result = JSON.parse(request.response);
    // console.log(result);

    for(let i=0 ; i<result.length ; i++){
        console.log(result[i].flag);
        console.log(result[i].name, result[i].region, result[i].subregion, result[i].population);

    }

}





