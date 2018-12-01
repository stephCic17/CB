function dropdown_magazine_open(id)
{
  if (id == "menu-magazine")
  {
    document.getElementById('loupe').style.display = "none";
    document.getElementsByClassName("menu-decouvrir")[0].style.display = "none"; 
    document.getElementsByClassName("menu-image")[0].style.display = "none";

  }
  else if (id == "menu-decouvrir")
  {
    document.getElementById('loupe').style.display = "none";

    document.getElementsByClassName("menu-magazine")[0].style.display = "none"; 
    document.getElementsByClassName("menu-image")[0].style.display = "none";
  }
  else if (id == "menu-image")
  {
    document.getElementById('loupe').style.display = "none";

    document.getElementsByClassName("menu-decouvrir")[0].style.display = "none"; 
    document.getElementsByClassName("menu-magazine")[0].style.display = "none";
  }

  document.getElementsByClassName(id)[0].style.display = "block";
}


function dropdown_magazine__launch_open(id)
{
  if (id == "menu-magazine-launch")
  {
    document.getElementById('loupe').style.display = "none";
    document.getElementsByClassName("menu-decouvrir-launch")[0].style.display = "none"; 
    document.getElementsByClassName("menu-image-launch")[0].style.display = "none";

  }
  else if (id == "menu-decouvrir-launch")
  {
    document.getElementById('loupe').style.display = "none";

    document.getElementsByClassName("menu-magazine")[0].style.display = "none"; 
    document.getElementsByClassName("menu-image-launch")[0].style.display = "none";
  }
  else if (id == "menu-image-launch")
  {
    document.getElementById('loupe').style.display = "none";

    document.getElementsByClassName("menu-decouvrir-launch")[0].style.display = "none"; 
    document.getElementsByClassName("menu-magazine-launch")[0].style.display = "none";
  }

  document.getElementsByClassName(id)[0].style.display = "block";
}


function dropdown_magazine_close(id)
{
  document.getElementsByClassName(id)[0].style.display = "none";
  document.getElementById('loupe').style.display = "block";

}

function dropdown_menu_open(){
  if (document.getElementsByClassName('menu-mobile-launch')[0].style.display == "block")
  {
    document.getElementsByClassName('menu-mobile-launch')[0].style.display = "none";
  }
  else
    document.getElementsByClassName('menu-mobile-launch')[0].style.display = "block";

}

function menuTop()
{

  document.getElementById("launch").style.display = "none";
  document.getElementById("menu-launch").style.display = "block";
}

function dropdown_menu_mobile_open(id) 
{
  console.log(id);
  if (document.getElementsByClassName(id)[0].style.display == "block")
    document.getElementsByClassName(id)[0].style.display = "none";
  else
    document.getElementsByClassName(id)[0].style.display = "block";
}

function dropdown_menu_mobile_open(id) 
{
  console.log(id);
  if (document.getElementsByClassName(id)[0].style.display == "block")
    document.getElementsByClassName(id)[0].style.display = "none";
  else
    document.getElementsByClassName(id)[0].style.display = "block";
}

function showSearch()
{

  if (document.getElementById("searchForm").style.display == "none")  
  {
    document.getElementById("primaryMenu").style.display = "none";
    document.getElementById("loupe").style.display = "none";        
    document.getElementById("searchForm").style.display = "block";
  }
  else
  {
    document.getElementById("primaryMenu").style.display = "block";   
    document.getElementById("loupe").style.display = "block";     
    document.getElementById("searchForm").style.display = "none";
  }
}