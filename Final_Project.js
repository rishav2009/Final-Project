function show( id )
{
    var content = document.getElementsByClassName( "content" ) ;
    for( var i = 0 ; i < content.length ; i++)
    {
        content[i].style.display = "none" ;
    }

    document.getElementById( id ).style.display = "block" ;
}

var image = [ "Laptop.jpg", "TV_Wallpaper.jpg", "Mobile_MI.png", "Earphones.jpg" ] ;

x = 0 ;

function change()
{
    x++
    if( x > image.length ) { x = 0  }
    document.getElementById( "contain" ).style.backgroundImage = "url(" + image[x] + ")" ;
}
setInterval( change, 2000)

function loading()
{
    document.getElementById( "load" ).style.display = "none" ;
    document.getElementById( "loader" ) .style.display = "none" ;
    document.getElementById( "navbar" ).style.display = "block" ;
    document.getElementById( "home" ).style.display = "block" ;
}
setTimeout( loading, 5000)

