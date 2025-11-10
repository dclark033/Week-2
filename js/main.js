let table = document.getElementById("table");

//JSON array
const jsonData =
  '{"Singers":[{"name": "Howard Jones", "song": "Holy Diver", "album": "The End of Heartache"}, { "name": "Marko Hietala", "song": "While Your Lips Are Still Red", "album": "Crows Fly Black"}, { "name": "Ashley Lynn Barrett", "song": "We All Become", "album": "Transistor Soundtrack"}, { "name": "Ivan Moody", "song": "Bad Company", "album": "The Wrong Side of Heaven and the Righteous Side of Hell, Volume 1"}]}';

let singers = JSON.parse(jsonData);
singers = singers.Singers;
document.getElementById("remove").remove();

table.innerHTML +=
  "<tr><th>Singer</th><th>Best Song</th><th>Best Album</th></tr>";
for (let i = 0; i < singers.length; i++) {
  table.innerHTML +=
    "<tr>" +
    "<td>" +
    singers[i].name +
    "</td>" +
    "<td>" +
    singers[i].song +
    "</td>" +
    "<td>" +
    singers[i].album +
    "</td>" +
    "</tr>";
}
