// Return a popup table using the input feature properties
function popupTemplate(feature) {
  var name = feature.properties.Name;
  var birth = feature.properties.Birth;
  var death = feature.properties.Death;

  templateString = `
        <table class="popup-table">
            <tr>
                <th>Name</th>
                <td>${name}</td>
            </tr>
            <tr>
                <th>Birth year</th>
                <td>${birth}</td>
            </tr>
            <tr>
                <th>Death year</th>
                <td>${death}</td>
            </tr>
        </table>
    `;
  return templateString;
}

// Return a popup table using the input feature properties
function videoPopupTemplate(feature) {
  var name = feature.properties.Name;
  var birth = feature.properties.Birth;
  var death = feature.properties.Death;

  //  Try splitting the name into first and last
  try {
    var first_name = name.split(" ")[0];
  } catch (err) {
    // Leave the names empty if they aren't found
    var first_name = "";
  }
  try {
    var last_name = name.split(" ")[1];
  } catch (err) {
    var last_name = "";
  }

  templateString = `
        <table class="popup-table">
            <tr>
                <td colspan="2">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/wg3ywGdyCm8" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </td>
            </tr>
            <tr>
                <th>Name</th>
                <td>${name}</td>
            </tr>
            <tr>
                <th>Birth year</th>
                <td>${birth}</td>
            </tr>
            <tr>
                <th>Death year</th>
                <td>${death}</td>
            </tr>
            <tr>
                <td colspan="2" class="table-button-row">
                    <a href="https://www.ancestry.com/search/?name=${first_name}_${last_name}&birth=${birth}" target="_blank">
                        <button>Find ${name} on Ancestry.com</button>
                    </a>
                </td>
            </tr>
        </table>
    `;
  return templateString;
}
