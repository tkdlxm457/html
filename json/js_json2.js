var txt = '{"name":"대현", "age":23, "city":"서울"}'
var obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", " + obj.city;