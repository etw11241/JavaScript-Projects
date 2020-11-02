function myDictFunction() {
    var Trombone = {
        Clef:"Bass Clef",
        Type:"Slide",
        Variance:"Tenor Trombone",
        Accessory:"F Attachment",
        Song:"Morceau Symphonique"
    };
    delete Trombone.Song;
    document.getElementById("Dictionary").innerHTML = Trombone.Song;
}