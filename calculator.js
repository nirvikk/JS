<!DOCTYPE html>
<html>
<body>
<input type="text" id="txt1">
<input type="text" id="txt2"><br/>
<button id="plus">Add</button>
<button id="minus">Substract</button>
<button id="divide">Divide</button>
<button id="multiply">Multiply</button><br/>
<button id="min">Minimum</button>
<button id="max">Maximum</button>
<button id="pow">Power</button>
</body>
<script>
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var min = document.getElementById("min");
var max = document.getElementById("max");
var pow = document.getElementById("pow");

plus.onclick = function()
{
alert(parseInt(txt1.value) + parseInt(txt2.value));
}

minus.onclick = function()
{
alert(parseInt(txt1.value) - parseInt(txt2.value));
}
divide.onclick = function()
{
alert(parseInt(txt1.value) / parseInt(txt2.value));
}
multiply.onclick = function()
{
alert(parseInt(txt1.value) * parseInt(txt2.value));
}
min.onclick = function()
{
if(parseInt(txt1.value)<parseInt(txt2.value))
alert("Min value is: "+txt1.value)
else
alert("Min value is: "+txt2.value)
}
max.onclick = function()
{
if(parseInt(txt1.value)>parseInt(txt2.value))
alert("Max value is: "+txt1.value)
else
alert("Max value is: "+txt2.value)
}
pow.onclick = function()
{
var c = parseInt(txt1.value);
var d = parseInt(txt2.value);
var i = 1;
for(j=1;j<=d;j++)
i*=c;
alert(i);
}

</script>

</html>
