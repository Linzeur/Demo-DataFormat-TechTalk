const URL_API =
  "https://lightning-talk-demo.herokuapp.com/products?format=text";

window.onload = function() {
  fetch(URL_API, { mode: "cors" })
    .then(response => response.text())
    .then(resText => {
      let list = resText.split("_");
      let strHTML = list.reduce((concat, row) => {
        let str = "<tr>";
        let fields = row.split("|");
        let nFields = fields.length;
        for (let i = 0; i < nFields; i++) {
          str += "<td>";
          str += fields[i];
          str += "</td>";
        }
        str += "</tr>";
        return concat + str;
      }, "");
      document.getElementById("tblProducts").innerHTML = strHTML;
    });
};
