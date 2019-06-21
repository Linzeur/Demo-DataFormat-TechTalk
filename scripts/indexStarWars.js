const URL_API = "https://swapi.co/api/people/";

var doRecursiveRequest = url =>
  fetch(url)
    .then(response => response.json())
    .then(resJson => {
      if (resJson["next"]) return doRecursiveRequest(resJson["next"]);
      return resJson["results"];
    });

window.onload = async function() {
  doRecursiveRequest(URL_API).then(result => {
    let strHTML = result.reduce((concat, row) => {
      let str = "<tr>";
      let arrFields = [
        "name",
        "height",
        "hair_color",
        "skin_color",
        "eye_color",
        "birth_year",
        "gender"
      ];
      for (let key of arrFields) {
        str += "<td>";
        str += row[key];
        str += "</td>";
      }
      str += "</tr>";
      return concat + str;
    }, "");
    document.getElementById("tblCharacters").innerHTML = strHTML;
  });
};
