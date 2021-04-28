var kepek = ["kep1.jpg", "kep2.jpg", "kep3.jpg", "kep4.jpg", "kep5.jpg", "kep6.jpg", "kep7.jpg", "kep8.jpg", "kep9.jpg", "kep10.jpg", "kep1.jpg", "kep2.jpg", "kep3.jpg", "kep4.jpg", "kep5.jpg", "kep6.jpg", "kep7.jpg", "kep8.jpg", "kep9.jpg", "kep10.jpg"];
var kepekalt = ["lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny"];
var szamlalo = 0;
var kattintott = [];

$(function () {
    console.log("Hello Világ!");
    // kép elérés
//  $("article").append('<img src="kepek (1)/kepek/kep1.jpg" alt="kep1">');
//  $("article").append('<img src="kepek (1)/kepek/kep2.jpg" alt="kep2">');

    // végigmegy a kép tömbön
    for (var i = 0; i < kepek.length; i++) {
//        $("article").append('<img src="kepek/' + kepek[i] + '" alt="">');
        $("article").append('<img/>');
//        $("article img").eq(i).attr("src", "kepek/" + kepek[i]);
        $("article img").eq(i).attr("src", "hatter.jpg");
        $("article img").eq(i).attr("alt", "szörny háttér");
        $("article img").eq(i).attr("id", i);

    }
    $("article img").click(kattint);

});
// kattintásal meg változik
function kattint() {
    var id = $(this).attr("id");
    //console.log(id);
    $(this).attr("src", "kepek/" + kepek[id]);
    $(this).attr("alt", kepekalt[id]);
    szamlalo++;
    //console.log(szamlalo);
    kattintott [szamlalo] = id;

    if (szamlalo === 2) {     
        //ha két azonos van akkor tüntesük ell a képeket.
        if (kepek[kattintott[1]] === kepek[kattintott[2]]) {
            $("article img").eq(kattintott[1]).attr("src", "");
            $("article img").eq(kattintott[2]).attr("src", "");
            
        } else {

            setTimeout(visszaFordit, 1000);
        }


    }
}
function visszaFordit() {
    // visza álitjuk a háttérképeket, ha két különbözövan.
    $("article img").eq(kattintott[1]).attr("src", "hatter.jpg");
    $("article img").eq(kattintott[2]).attr("src", "hatter.jpg");
}


