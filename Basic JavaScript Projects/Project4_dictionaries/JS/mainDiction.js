function myGameFunction1() {
    var VideoGame = {
        Sports:"Madden Football '21",
        RPG:"The Witcher",
        Racing:"Burnout",
        Adventure:"Shadows of War",
        Wrestling:"WWE 2K20"
    };
    document.getElementById("VideoGames1").innerHTML = VideoGame.Sports;
}

function myGameFunction2() {
    var VideoGame = {
        Sports:"Madden Football '21",
        RPG:"The Witcher",
        Racing:"Burnout",
        Adventure:"Shadows of War",
        Wrestling:"WWE 2K20"
    };
    delete VideoGame.Sports;
    document.getElementById("VideoGames2").innerHTML = VideoGame.Sports;
}