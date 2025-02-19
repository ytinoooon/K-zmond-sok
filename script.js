let aktualis_kozmondas;
//A mondásokat egy tömbbe raktam
let mondasok = [
"A harag rossz tanácsadó!",

"A könyvek néma mesterek.",

"A szerelem vak.",

"A szükség a legnagyobb tanítómester.",

"A tiltott gyümölcs a legédesebb.",

"Addig jár a korsó a kútra, míg el nem törik.",

"Addig nyújtózkodj, ameddig a takaród ér.",

"Adj a tótnak szállást, kiver a házadból.",

"A hazug embert hamarabb utolérik, mint a sánta kutyát.",
    
"Ajándék lónak ne nézd a fogát!",

"Aki hibátlan lovat keres, járhat gyalog.",

"Aki másnak vermet ás, maga esik bele.",

"Apád nem volt üveges.",

"Az orvosokból lesz a legrosszabb beteg.",

"Ágyúval lő verébre.",

"Átesett a ló túlsó oldalára.",

"Bolond likból bolond szél fúj.",

"Boszorkányok pedig nincsenek.",

"Csak a fejét üsd, hogy meg ne sántuljon! ",

"Csalánba nem üt a mennykő.",

"Ebül szerzett jószág ebül vész el.",

"Egy bolond százat csinál.",

"Egy fecske nem csinál nyarat.",

"Egyik kutya, másik eb.",

"Egyik tizenkilenc, másik egy híján húsz.",

"Éhes disznó makkal álmodik.",

"Él, mint hal a vízben. ",

"Él, mint Marci Hevesen. ",

"Gyáva, mint a nyúl",

"Ha rövid a kardod, toldd meg egy lépéssel.",

"Hallgatni arany.",

"Ha hallgattál volna, bölcs maradtál volna. ",

"Holló a hollónak nem vájja ki a szemét.",

"Ízlések és pofonok különbözőek.",

"Rövid lezárása egy esztétikai vitának.",

"Járt utat a járatlanért el ne hagyj!",

"Jó bornak nem kell cégér.",

"Jó kezdet, fél siker.",

"Jó munkához idő kell.",

"Jó pap holtig tanul.",

"Jó tett helyébe jót várj.",

"Jobb adni, mint kapni.",

"Jobb félni, mint megijedni.",

"Jobb ma egy veréb, mint holnap egy túzok.",

"Jóból is megárt a sok.",

"Ki korán kel, aranyat lel!",

"Ki mint vet, úgy arat.",

"Ki mint veti ágyát, úgy alussza álmát!",

"Kicsi a bors, de erős.",

"Kinek a pap, kinek a papné.",

"Kiugrasztani a nyulat a bokorból.",

"Kutyából nem lesz szalonna.",

"Kutyaharapást szőrével.",

"Láttam én már karón varjút. ",

"Legjobb szakács az éhség.",

"A lónak négy lába van, mégis megbotlik.",

"Madarat tolláról, embert barátjáról.",

"Más kárán tanul az okos.",

"Minden kezdet nehéz.",

"Meghaltam és vidéken vagyok eltemetve! ",

"Minden jó, ha vége jó",

"Nagyobb a füstje, mint a lángja. ",

"Nagy az Isten állatkertje! ",

"Nem esik messze az alma a fájától.",

"Nem mind arany, ami fénylik!",

"Nem zörög a haraszt, ha a szél nem fújja.",

"Ne ítélj, hogy ne ítéltess.",

"Nem, nem, soha! ",

"Okos enged, szamár szenved.",

"Olcsó húsnak híg a leve.",

"Ökör iszik magában.",

"Öntsünk tiszta vizet a pohárba.",

"Örül, mint majom a farkának. ",

"Nagyon örül valaminek. ",

"Pénz beszél, kutya ugat.",

"Rázza a rongyot. ",

"Reszket, mint a kocsonya. ",

"Ritka, mint a fehér holló. ",

"Vak, mint a bányaló. ",

"Rossz fát tesz a tűzre. ",

"Segíts magadon, és Isten is megsegít.",

"Sok lúd disznót győz!",

"Sokat ígér a világ, de keveset ad.",

"Sörre bor - mindenkor, borra sör - meggyötör.",

"Sötét, mint az éjszaka. ",

"Sötétben minden tehén fekete.",

"Sárga rigónak is fekete a füttye.",

"Szegény embert még az ág is húzza.",

"Szemet szemért, fogat fogért.",

"Szép felé száll a füst, de bolond aki állja.",

"Szikrát hány a szeme.",

"Szó elszáll, írás megmarad.",

"Szükség törvényt bont.",

"Hol van már a Tavalyi hó.",

"Temetni tudunk. ",

"Tévedni emberi dolog.",

"Tiszta lappal indul. ",

"Több nap, mint kolbász",

"Többet ésszel, mint erővel.",

"Türelem rózsát terem.",

"Tűt keres a szénakazalban. ",

"Új seprű jól seper.",

"Vaj van a fején. ",

"Van vér a pucájában. ",

"Vak tyúk is talál szemet.",

"Vak vezet világtalant.", 

"Vakok között félszemű a király.",

"Valami szöget üt a fejébe. ",

"Valami van a füle mögött. ",

"Van mit a tejbe aprítani.",

"Van sütnivalója. ",

"Vág az esze, mint a borotva! ",

"Vén kecske is megnyalja a sót.",

"Veri az ördög a feleségét. ",

"Vér vízzé nem válik.",

"Világos, mint a vakablak. ",

"Vizet hord a Dunába. ",

"Vizet prédikál, és bort iszik.",

"Veszi a lapot. "
]
//Felbontottam szavakra a mondásokat
let szavak = [];
for(let i = 0; i<mondasok.length;i++){
    szavak[i] = mondasok[i].trim().split(/\s+/);
}
//Egy tömbbe raktam az első részhez tartozó szavakat és egy másikba a második részhez tartozó szavakat 
let elso_reszek = [];
let masodik_reszek = [];
for(let i = 0; i<szavak.length;i++){
    let k = ((szavak[i].length)/2) | 0;
    elso_reszek[i] = szavak[i].slice(0, k);
    masodik_reszek[i]=szavak[i].slice(k);  
}
function random_szam(min,max){
    return (Math.random() * (max - min + 1))|0 + min;
}
// A gomb lenyomásakor ezek a parancsok futnak le
function uj_szolas(){
    //kivallaszt tetszőlegesen egy első részt és egy második részt majd egy stringet csinál bejöllük 
    let elso_resz = elso_reszek[random_szam(0,119)];
    let masodik_resz = masodik_reszek[random_szam(0,119)];
    aktualis_kozmondas = [...elso_resz,...masodik_resz].join(' ');
    console.log(aktualis_kozmondas); 
    //Kicserélem az aktuális közmondásra a paragrafust
    let p = document.getElementById("szolas_paragrafus");
    p.innerHTML = aktualis_kozmondas;
}