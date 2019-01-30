function getSum(total, num) {
  return total + num;
}
var fibonacci = () => {
    var x = parseInt(document.getElementById("number1").value);
    var y = parseInt(document.getElementById("number2").value);
    var z = x + y;
    var serie = [];
    for (var i = 1; i <= 10; i++) {
        x = y;
        y = z;
        serie.push(y);
        z = y + x;
    }
    document.getElementById('label1').innerHTML = ("el pinche resultado es : " + serie + "<br/> y la pinche suma es: " + serie.reduce(getSum));
    save(serie);   
}

var save = (serie) => {
    var data = JSON.stringify({
        "name": serie.toString()
      });
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:5000/api/todo",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        "processData": false,
        "data": data
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}