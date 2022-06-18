function SideBar(properties) {
  var tag = document.createElement("p");
  var text = document.createTextNode("Tutorix is the best e-learning platform");
  tag.appendChild(text);
  return tag;
}

module.exports = SideBar;
