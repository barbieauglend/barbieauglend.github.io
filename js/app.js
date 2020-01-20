const getRealPath = (pathname, desc = false) => {
  if (!pathname) {
    pathname = window.location.pathname;
  }
  let names = pathname.split("/");
  if (desc === false) {
    for (let i = names.length - 1; i >= 0; --i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  } else {
    for (let i = 0; i < names.length; ++i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  }
  return "/";
};
let links = document.querySelectorAll(".barbie-list-item");
let rootRealPath = getRealPath(window.location.pathname, true);
for (let link of links) {
  let linkPath = link.getAttribute("href");
  if (linkPath && getRealPath(linkPath, true) === rootRealPath) {
    link.className = "active barbie-list-item mdui-list-item mdui-ripple";
  }
}
$("table")
  .has("img")
  .addClass("barbie-album");

$("#barbie-content img").each(function() {
  $(this).attr("data-src", $(this).attr("src"));
  $(this).attr("src", "");
  $(this).addClass("lazyload");
  $(this).attr("referrerPolicy", "no-referrer");
});

$("article:not(.barbie-py) img").each(function() {
  var element = document.createElement("a");
  $(element).attr("data-fancybox", "gallery");
  $(element).attr("href", $(this).attr("data-src"));
));
  $(this).wrap(element);
});

$("#barbie-sidebar a").addClass("mdui-ripple");
mdui.mutation();
