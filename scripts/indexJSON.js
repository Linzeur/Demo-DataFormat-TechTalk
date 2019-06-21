const URL_API =
  "https://lightning-talk-demo.herokuapp.com/products?format=json";

window.onload = function() {
  fetch(URL_API, { mode: "cors" })
    .then(response => response.json())
    .then(resJson => {
      let strHTML = resJson.reduce((concat, row) => {
        let str = "<tr>";
        for (var key in row) {
          str += "<td>";
          str += row[key];
          str += "</td>";
        }
        str += "</tr>";
        return concat + str;
      }, "");
      document.getElementById("tblProducts").innerHTML = strHTML;
    });
};
