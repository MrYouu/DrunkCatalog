function alcoholSelection( b, c, d, e, f)
{
    var a = f.innerHTML;

    if (a == 1)
    {
        b.style.backgroundColor = "#FCCB16";
        c.style.color = "#25252f";
        
        let alcoholNormalText = document.querySelectorAll(d);
        for (let i = 0; i < alcoholNormalText.length; i++)
            alcoholNormalText[i].style.color = "black";
        
        let availableCocktailsNumber = document.querySelectorAll(e);
        for (let i = 0; i < availableCocktailsNumber.length; i++)
            availableCocktailsNumber[i].style.color = "#555";
        
        f.innerHTML = "2";
    }
    else if (a == 2)
    {
        b.style.backgroundColor = "transparent";
        c.style.color = "#FCCB16";

        let alcoholNormalText = document.querySelectorAll(d);
        for (let i = 0; i < alcoholNormalText.length; i++)
            alcoholNormalText[i].style.color = "white";

        let availableCocktailsNumber = document.querySelectorAll(e);
        for (let i = 0; i < availableCocktailsNumber.length; i++)
            availableCocktailsNumber[i].style.color = "#bbb";
        
        f.innerHTML = "1";
    }
}

function openMenu()
{
    document.getElementById("sideBar").style.height = "calc(100% + 75px)";
    document.getElementById("html").style.overflowY = "hidden";
    document.getElementById("mainPageBackground").style.filter = "blur(5px)";
    document.getElementById("topBar").style.filter = "blur(5px)";
    document.getElementById("Stripes").style.filter = "blur(5px)";
}

function closeMenu()
{
    document.getElementById("sideBar").style.height = "0";
    document.getElementById("html").style.overflowY = "auto";
    document.getElementById("mainPageBackground").style.filter = "none";
    document.getElementById("topBar").style.filter = "none";
    document.getElementById("Stripes").style.filter = "none";
}