function myDictFunction() {
    var Trombone = {
        Clef:"Bass Clef",
        Type:"Slide",
        Variance:"Tenor Trombone",
        Accessory:"F Attachment",
        Song:"Morceau Symphonique"
    };
    document.getElementById("Dictionary").innerHTML = Trombone.Song;
}