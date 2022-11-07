var mycountry=new Map();

mycountry.set("key1","dhaka");
mycountry.set("key2","ctg");
mycountry.set("key3","khulna");
mycountry.set("key4"," barishal");
mycountry.set("key5","narayan");
mycountry.set("key6","cumilla");
mycountry.set("key7","bhola");
mycountry.set("key8","cox");

mycountry.delete("key4");
// mycountry.clear();//shb clear hoye jabe map er 

mycountry.delete("key7");

for(let citygula of mycountry.values()){
    console.log(citygula);
}