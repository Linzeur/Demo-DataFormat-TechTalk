const URL_API = "https://lightning-talk-demo.herokuapp.com/products?format=xml";

window.onload = function() {
  fetch(URL_API, { mode: "cors" })
    .then(response => response.text())
    .then(resXML => {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(resXML, "text/xml");
      let children = xmlDoc.documentElement.childNodes;
      let nChilds = children.length;
      let nFields = children[1].childNodes.length;
      let str = "";
      for (let i = 0; i < nChilds; i++) {
        let fields = children[i].childNodes;
        if (fields.length > 0) {
          str += "<tr>";
          for (let j = 0; j < nFields; j++) {
            if (fields[j].childNodes.length > 0) {
              str += "<td>";
              str += fields[j].childNodes[0].nodeValue;
              str += "</td>";
            }
          }
          str += "</tr>";
        }
      }
      document.getElementById("tblProducts").innerHTML = str;
    });
};
