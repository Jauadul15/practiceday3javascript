
var desh= new Set()
desh.add("bd");
desh.add("cd");
desh.add("ed");
desh.add("bd");//set doesnt contain duplicate value but map does
desh.add("fd");
desh.add("gd");
desh.add("bd");
// desh.clear();//cleaar method
//desh.delete("bd");//dlt method


if(desh.has("gd")){
    console.log("haa");
}else{
    console.log("nai");
}
//console.log(desh.size);//size method

