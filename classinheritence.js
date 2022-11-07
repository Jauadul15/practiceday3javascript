class papa{

    jaiga1(){
        console.log("ekta jomi");
    }
    jaiga2(){
        console.log("duita jomi");
    }
    jaiga3(){
        console.log("thinta jomi");
    }
}

class ami extends papa{
    jaiga3(){
        console.log("onk jomi r thinta jomi");//modify korte parbe child
        //extra power aitai child modify korte parbe ja eccha
    }


}
var obj=new ami();
obj.jaiga3();