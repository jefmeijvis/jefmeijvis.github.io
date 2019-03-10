let container = document.getElementsByClassName("navigation")[0];
let base_url = "/jefmeijvis.github.io";
addButton(" Jef Meijvis", base_url + "/index.html","home");
addButton(" Projects",base_url + "/projects.html","work");
addButton(" Articles",base_url + "/articles.html","book");
setFavicon();

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

function setFavicon()
{
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href =  base_url + '/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
}