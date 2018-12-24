let container = document.getElementsByClassName("navigation")[0];
let base_url = "/jefmeijvis.github.io";
addButton("Jef Meijvis", base_url + "/index.html","home");
addButton("Projects",base_url + "/projects.html","work_outline");
console.log(container);

function addButton(title, path,iconName)
{
    let element,text,icon,iconSelector;
    element = document.createElement("a");
    text = document.createTextNode(title);
    element.href = path;
    element.className = "headerLink";
    icon = document.createElement("i");
    icon.className = "material-icons";
    iconSelector = document.createTextNode(iconName);
    icon.appendChild(iconSelector);
    element.appendChild(icon);
    element.appendChild(text);
    container.appendChild(element);
}