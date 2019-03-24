let body = document.getElementsByTagName("BODY")[0];
let insert_name, insert_date, insert_description , insert_image , insert_destination;
/////////////////////////////////////////////////////////////////////


insert_name = "Creating a P5.js sketch";
insert_date = "23 March 2019";
insert_description =
    "A small tutorial on how to get started with P5.js. Things such as creating the html, css and javascript are explained.";
insert_image = 'articles/noise1/p5js.png';
insert_destination = "articles/noise1/article.html";
addArticle(insert_name,insert_date,insert_description,insert_image,insert_destination);






/////////////////////////////////////////////////////
/// Methods used for adding articles
/////////////////////////////////////////////////////
function addArticle(title,dat,description,image,link)
{
    addSpacer();
    let div_outer = document.createElement("div");
    div_outer.className = "article";
    div_outer.onclick = function(){window.location.href=link};

    // Add border
    div_outer.appendChild(getBorder());

    let div_inner = document.createElement("div");
    div_inner.className = "article-content";
    div_outer.appendChild(div_inner);

    let article_picture = document.createElement("div");
    article_picture.className = "article-picure";
    div_inner.appendChild(article_picture);

    let picture = document.createElement("img");
    picture.src = image;
    picture.alt = 'alt';
    article_picture.appendChild((picture));

    let article_text = document.createElement("div");
    article_text.className = "article-text";
    div_inner.appendChild(article_text);

    let article_title = document.createElement("p");
    article_title.className = "article-title";
    article_text.appendChild(article_title);
    article_title.innerText = title;

    let date = document.createElement("span");
    date.className = "date";
    date.innerText = "[" + dat + "]";
    article_title.appendChild(date);

    let article_description = document.createElement("p");
    article_description.className = "article-desc";
    article_text.appendChild(article_description);
    article_description.innerText = description;

    div_outer.appendChild(getBorder());

    // Add border
    body.appendChild(div_outer);
}

function addSpacer()
{
    let spacer = document.createElement("p");
    spacer.className = "spacer";
    body.appendChild(spacer);
}

function getBorder()
{
    let border = document.createElement("div");
    border.className = "article-border";
    return border;
}

function goto(destination)
{
    window.location.href=destination;
}