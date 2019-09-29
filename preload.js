window.addEventListener("DOMContentLoaded", () => {
    let btn = document.createElement("button");
    btn.classList.add("float-right", "close");
    btn.innerHTML = "&times;";
    btn.onclick = window.close;
    btn.style.marginRight = "12px";
    document.getElementById("menubar").appendChild(btn);
    btn.style.webkitAppRegion = "no-drag";
    document.body.style.overflow = "hidden";
    let title = document.createElement("span");
    let curProj = JSON.parse(localStorage["curProj"]);
    title.innerHTML = "MakerBuild IDE - " +
    JSON.parse(
      curProj && "project.json" in curProj
        ? curProj["project.json"]
        : '{"name": "<No Project>"}'
    ).name;
    // title.style.display = "inline-block";
    title.style.position = "absolute";
    title.style.left = "50%";
    title.style.top = "1px";
    document.getElementById("menubar").appendChild(title);
})