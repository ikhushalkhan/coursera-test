var names = ["Khushal", "Behram", "Ishaq","Javed","Jasmine","John"];
for(var i=0; i<names.length; i++){
 var name=names[i];
 if(name.charAt(0).toLowerCase()==='j'){   
    console.log("GoodBye "+name);
 }
 else{
    console.log("Hello "+ name);
 }
}