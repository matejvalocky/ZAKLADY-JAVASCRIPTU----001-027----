// KAPITOLA 1: VYPISANIE VYSLEDKU

console.log("David")
console.log("Martin")
console.log("Jana")

// ************************************************************************



// KAPITOLA 2: PREMENNÉ V JAVASCRIPTE

var firstName = "Matej";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);


var lastName = "Valocký"
console.log(lastName);

var age = 35;
console.log(age);

var job = "fotograf"
console.log(job);

// POZNAMKY
// rezervované slová sú napríklad function a nemožno ich použiť do názvu premennej
// taktiež nemožno použiť do názvu premennej názov, ktorý začína číslom
// názov premennej treba písať popisne, to znamená, ak píšeme krstné meno, tak firstName, priezvisko: lastName. ATĎ
// CONSOLE.LOG ZNAMENÁ, ZE MA TO VYPISAT HLASENIE (HLASENIE VYPISUJE NA STRANKE, POTOM DAME PRESKUMAT A POLOZKA CONSOLE)

// ************************************************************************



// KAPITOLA 3: DATOVE TYPY V PREMENNYCH

//NUMBER = ČÍSLO
var age = 18;
console.log(age);

//STRING = TEXT
var firstName = "Matej";
console.log(firstName);

//BOOLEAN = PRAVDA/NEPRAVDA
var adult = true; //pravda
var adult = false; //nepravda
console.log(adult);

//UNDEFINED = PREMENNA NEMA HODNOTU
var secondName; //nie je definované, čo v tej premennej je
console.log(secondName);

//NULL = PREMENNA NEEXISTUJE priklad odkomentuj, aby fungoval
//console.log(test); 

//dalsi priklad:

var age2 = 25;
    age2 ="David2"; //do čísla možno vložiť aj text - string a vždy berie poslednú hodnotu, v našom príklade David
console.log(age2);

// ************************************************************************



//KAPITOLA 4: KOMENTARE V JAVASCRIPTE

// CTRL + / = ZAKOMENTOVANIE JEDNORIADKOVANEHO KOMENTARA

//VIACRIADKOVY KOMENTAR SA ZAPISUJE TAKTO: 

    /*  viacriadkovy komentar
        viacriadkovy komentar
        viacriadkovy komentar
        viacriadkovy komentar
        viacriadkovy komentar
        viacriadkovy komentar
    */

        // ************************************************************************



// KAPITOLA 5: VYPIS VIAC PREMMENNYCH NARAZ

var firstName = "David";
var secondName = "Šetek";
var age = 35;
var stav = "slobodný"

console.log(firstName + " " + secondName + " " + age);
console.log("Tento človek sa volá " + firstName + " " + secondName + " " + "je mu" + " " + age + " " + "rokov, a jeho rodinny stav je " + stav + ".")

// ************************************************************************



//KAPITOLA 6: ALERT, PROMPT A CONFIRM


 
alert("Ahoj, ja som David"); 
//ALERT - text sa píše do úvodzoviek, je tu len tlačídlo OK

confirm("Si plnoletý?")
//CONFIRM - sú tu tlačidlá OK a ZRUŠIŤ



prompt("Koľko máš rokov? Toto si nikde nezapíšem")
//PROMPT - hlásenie, kde píšeme hodnoty

var age = prompt("Koľko máš rokov? A toto si už zapíšem")
console.log(age);
console.log(age - 18);

var adult = age - 18;
console.log(adult);

// ************************************************************************



// KAPITOLA 7: ZAKLADNE OPERATORY (SÚ "+", "-", "*", "/".)

var ageDavid = 15;
var ageJana = 20;

var year = 2020;

var birthDavid = year - ageDavid;
console.log(birthDavid);
console.log("David sa narodil v roku " + birthDavid)

var birthJana = year - ageJana;
console.log(birthJana);
console.log("Jana sa narodina v roku " + birthJana)

console.log(birthJana + 1000)
console.log(birthJana - 1000)
console.log(birthJana * 1000)
console.log(birthJana / 1000)

console.log(birthJana * 2 - 500);
console.log(5 + 5 * 10 + 10);

// ************************************************************************



//KAPITOLA 8: LOGICKE OPERATORY - TRUE, FALSE

var result = ageJana < ageDavid; 
console.log(result);

//znamienko menší a väčší píšeme pravým ALTOM + znamienká nad ním

var porovnanie = ageJana == ageDavid;
console.log(porovnanie);

//porovnávanie používa znamienko ==

// ďalšie logické operatárory sú   <=   >=   ==   <   >   

// var resultConfirm = confirm("Si plnoletý?");
// console.log(resultConfirm);

// ************************************************************************



//KAPITOLA 9: ZISTOVANIE DATOVEHO TYPU

var ageDavid = 15;
var ageJana = 20;
var result = (ageDavid == ageJana);

console.log(typeof(ageDavid));  //number
console.log(typeof(ageJana));   //number
console.log(typeof(result));    //boolean (true alebo false)

console.log(typeof("David"));   //string
console.log(typeof("20"));      //string, lebo je to v úvodzovkách
console.log(typeof(20));        //nummber
console.log(typeof(false));     //boolean
console.log(typeof(true));      //boolean

// ************************************************************************



//KAPITOLA 10: ĎALŠIE OPERATORY

var x = 1;
console.log(x);         //vypíše 1


//chcem toto x zväčšiť o jedna, urobím to takto:

x = x + 1;
console.log(x);         //vypíše 2


//alebo takto:

x+= 1
console.log(x);         //vypíše 3


//alebo takto:

x++;
console.log(x);         //vypíše 4, toto sa dá použiť len keď sa číslo zvyšuje o jednotku a volá sa to INKREMENTÁCIA, a dá sa kombinovať aj so znamienkom - (mínus)

//všetky zápisy sa dajú kombinovať so všetkými znamienkami

// ************************************************************************



//KAPITOLA 11: PODMIENKY IF A ELSE

//  IF = AK
//  ELSE = V OPACNOM PRIPADE 

//obecny zapis:
//*********************************
var x = 10;
var y = 20;

if (x == y){
    console.log("x sa rovná y")
}else
    console.log("x sa nerovná y")
//**********************************


//príklad 1. s číslami
if (2>3){
    console.log("dva je väčšie ako tri") //do konzoly vypíš, ak je to pravda - true
}else{
    console.log("tri je väčšie ako dva") // do konzoly vypíš ak je to nepravda - false
}

//príklad 2. s premennymi
var ageDavid = 15;
var ageJana = 25;

if      (ageDavid > ageJana){
        console.log("David je starší ako Anna")
}else{
        console.log("Anna je staršia ako David")
}

if (ageDavid == ageJana){
    console.log("David je takisto starý ako Anna")
}else{
    console.log("David nie je takisto starý ako Anna")
}



// KAPITOLA 12: NACITANIE HODNOTY OD UZIVATELA A VYHODNOTENIE POMOCOU PODMIENKY

// var age = prompt("Koľko máš rokov?");    	            //odkomentuj ak chceš, aby sa to dalo použiť
 
if  (age >=18){
    console.log("Si plnoletý, môžeš vstúpiť")
}else{
    console.log("Ešte ti nebolo 18, nemôžeš vstúpiť")
}

// ************************************************************************



// KAPITOLA 13:  IF, ELSE a ELSE IF
// PRIKLAD:
var ageDavid = 35;
var ageJana = 20;

if (ageDavid > ageJana){
    console.log("David je starší než Jana") // ak je to true
}else{
    console.log("David je mladší než Jana") // ak je to false
}


// NOVY PRIKLAD S VIACERYMI PODMIENKAMI:
var ageDavid = 20;
var ageJana = 20;

if (ageDavid > ageJana){
    console.log("David je starší než Jana") 
}else if (ageDavid < ageJana){
    console.log("David je mladší než Jana")
}else if (ageDavid == ageJana){
    console.log("David je takisto starý ako Jana")
}


// NOVY PRIKLAD S VIACERYMI PODMIENKAMI S JEDNOU UPRAVOU:
var ageDavid = 20;
var ageJana = 20;

if (ageDavid > ageJana){
    console.log("David je starší než Jana") 
}else if (ageDavid < ageJana){
    console.log("David je mladší než Jana")
}else {                                                 // tu už netreba definovať čo sa má stať, lebo je to už len jedna s možností
    console.log("David je takisto starý ako Jana")
}

// ************************************************************************



// KAPITOLA 14: PREVOD DATOVYCH TYPOV A JEDNODUCHA KALKULACKA

var firstNumber     =  prompt("Zadaj prvé číslo");
var secondNumber    =  prompt("Zadaj druhé číslo");
var sign            =  prompt("Zadaj matematické znamienko");


// prevod textu na číslo prvý spôsob
firstNumber     = Number(firstNumber);
secondNumber    = Number(secondNumber);



// prevod textu na číslo druhý spôsob


var firstNumber     = Number(prompt("Zadaj prvé číslo"));
var sign            = String(prompt("Zadaj matematické znamienko"));
var secondNumber    = Number(prompt("Zadaj druhé číslo"));





if (sign == "+"){
    console.log(firstNumber + secondNumber);
}else if(sign == "-"){
    console.log(firstNumber - secondNumber);
}else{
    console.log("Túto matematickú operáciu nepoznám")
}




console.log(firstNumber);
console.log(secondNumber);
console.log(typeof(sign));

console.log(typeof(firstNumber));
console.log(typeof(secondNumber));

// prevod textu (stringu) na číslo:

console.log(typeof(Number(firstNumber)));
console.log(typeof(Number(secondNumber)));



console.log(firstNumber);
console.log(secondNumber);
console.log(sign);

 


Number("20");       // všeobecný zápis textu na číslo

String(20);         // všeobecný zápis čísla na text


//VYPISANIE VYSLEDKOV:
console.log(typeof(Number("20")));       // všeobecný zápis textu na číslo

console.log(typeof(String(20)));         // všeobecný zápis čísla na text

// ************************************************************************



// KAPITOLA 15: AND A OR 

// AND = && = a zároveň         (PRAVÝ ALT + C) 
                                
// OR = || = alebo              (PRAVÝ ALT + W)


// PRIKLAD NA PODMIENKU + A ZAROVEŇ
var ageDavid1 = 30;


if (ageDavid1 > 18 && ageDavid1 < 30){  //ak je vek Dávida väčší ako 18 A ZÁROVEŇ menší ako 30
// ak sú obe pravdivé, tak to bude TRUE
    console.log("Je to pravda")    
}else{
    // ak je jedna alebo obidve z nich nepravdivá bude to FALSE
    console.log("Je to nepravda")
}


// PRIKLAD NA PODMIENKU + ALEBO
var firstName1 = "David"
ageDavid2 = 17;

if (firstName1 == "David" || ageDavid2 > 18){
    // je to true keď sú obe pravda
    // je to true keď je aspoň jedna z možností pravda
    // je to false keď sú obidve možnosti
    console.log("Je to pravda. Volám sa David, alebo mám viac ako 18 rokov")                //ak je jedna z nich pravdivá = true
}else{
    console.log("Nie je to pravda. Buď sa nevolám David, alebo nemám viac ako 18 rokov")    // keď sú obe nepravda = false
}

// ************************************************************************




// KAPITOLA 16: DOPLNENIE KALKULACKY O NASOBENIE A DELENIE

var firstNumber     = Number(prompt("Zadaj prvé číslo"));
var sign            = String(prompt("Zadaj matematické znamienko"));
var secondNumber    = Number(prompt("Zadaj druhé číslo"));


// DEFINOVANIE KALKULAČKY

if (sign == "+") {
    console.log(firstNumber + secondNumber);
} else if (sign == "-") {
    console.log(firstNumber - secondNumber);
} else if (sign == "*") {
    console.log(firstNumber *  secondNumber);
} else if (sign == "/" && secondNumber != 0) {      // AK JE ZNAMIENKO "/" A ZAROVEN SA DRUHE CISLO NEROVNA 0  !=0
    console.log(firstNumber /  secondNumber);
} else if (sign == "/" && secondNumber == 0){       // AJ JE ZNAMIENKO "/" A ZAROVEN DRUHE CISLO SA ROVNA 0
    console.log("Nesmíš dělit nulou. Druhé číslo nesmí být nula při dělení!!!!");
} else {
    console.log("Nedokáži takovouto operaci provést.");
}

 // ************************************************************************



// KAPITOLA 17: TERNARNY OPERATOR

var ageDavid3 = 18;

if (ageDavid3 >= 18){
    console.log("David je plnolety")
} else {
    console.log("David je dieťa")
}

// zápis v ternárnom operátore takto:

ageDavid3 >= 18 
? console.log("David je plnolety")  // ak je to TRUE
: console.log("David je dieťa")     // ak je to FALSE

/**********************************/

// dalsi priklad

if (ageDavid3 >= 18){
    var drink = "Bude piť pivo, lebo je už dospelý";
} else {
    var drink = "Bude piť vodu, lebo je mladistvý alebo dieťa";
}
console.log(drink);


// prepis do ternárneho operátora 1
ageDavid >=18
?console.log(drink)
:console.log(drink)


// prepis do ternárneho operátora 2
var drink = ageDavid3 >= 18
? "pivo"
: "voda";

console.log(drink);

// ************************************************************************



// KAPITOLA 18 - SWITCH

var pet = "dog";

switch(pet){
    case "dog":
        console.log("Máme psa");
        break;
    case "cat":
        console.log("Máme mačku");
        break;
    case "fish":
        console.log("Máme rybu");
        break;
    case "":
        console.log("Nenapísal si mi nič")
        break;
    default: 
        console.log("Také zviera nepoznám Ferko, je to iné zvieratko")
}

// ďalší príklad na SWITCH


var ageDavid4 = 7;

/* if (ageDavid4 >= 18){
   console.log("David je dospělý");
} else if (ageDavid4 <= 18 && ageDavid4 >= 8) {
   console.log("David je mladiství");
} else {
   console.log("David je dítě");
} */

// prepis pomocou switchu:

switch(true){
        case ageDavid4 >= 18:
            console.log("David je dospělý");
            break;
        case ageDavid4 <= 18 && ageDavid4 >= 8:
            console.log("David je mladiství");
            break;
        default:
            console.log("David je dítě");
}

// ************************************************************************



// KAPITOLA 19: FUNKCIE A DRY PRINCIP

// DRY = DO NOT REPEAT YOURSELF - NEOPAKUJ SA


// príklad: vypočítame vek POMOCOU CONSOLE.LOG

function calculateAGE1(birth){
    console.log(2021 - birth);
}

calculateAGE1(1986);
calculateAGE1(1954);
calculateAGE1(1952);
calculateAGE1(1980);
calculateAGE1(1990);



// príklad: vypočítame vek POMOCOU RETURN

function calculateAGE2(birth){
    return 2021 - birth;
}

var ageMatej = calculateAGE2(1986);
var ageOtec = calculateAGE2(1954);
var ageVierka = calculateAGE2(1952);
var ageMiska = calculateAGE2(1980);
var ageHenten = calculateAGE2(1990);

console.log(ageMatej, ageOtec, ageVierka, ageMiska, ageHenten)

// ************************************************************************



// KAPITOLA 20: ZLOŽITEJŠIE FUNKCIE

// Vypočítame vek cez funkciu:

function calculateAge(birth){
    return 2020 - birth;
}

// potom túto funkciu vnoríme do ďalšej funkcie:

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
// a do tejto funkcie vnoríme podmienku

    if (retirement >= 0){
        console.log("Do dôchodku ostáva odrobiť " + retirement + " rokov" + " u " + firstName + ".");
    } else {
        retirement = -(retirement);
        console.log(firstName + " už je na dôchodku " + retirement + " rokov.")
    }
}

// tu sa nám zobrazia výsledky

yearsUntilRetirement(2020, "David");
yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1980, "Diana");
yearsUntilRetirement(1920, "Matej");
yearsUntilRetirement(1955, "Jozef");

// VYMYSLENY PRIKLAD NA FUNKCIE

// výpočet veku 

function vypocetVeku(rokNarodenia){
        console.log(2021-rokNarodenia);
}
        
vypocetVeku(1986);  
vypocetVeku(1980);
vypocetVeku(1954);
vypocetVeku(1983);

// ************************************************************************



//KAPITOLA 21: FUNCTION STATEMENTS A FUNCTION EXPRESSIONS


// FUNKCIE SA DAJU ZAPISAT DVOMA SPOSOBMI:

// 1. FUNCTION STATEMENTS

function calculateAge(birth){
    return 2020 - birth;
}

console.log(calculateAge(2000));



// 2. FUNCTION EXPRESSIONS

var calculateAge = function(birth){
    return 2020 - birth;
}

console.log(calculateAge(2000));



// FUNCTION EXPRESSION CVICENIE

var myJob = function(job, firstName){
    switch(job){
        case "učiteľ":
            return firstName + " je " + job;            // ak je return, tak netreba davať break
        case "manager":
            return firstName + " je " + job;
            default:
            return "Neviem, čo má " + firstName + " za prácu."

    }
}

console.log(myJob("učiteľ", "Dávid"));
console.log(myJob("manager", "Jane"));
console.log(myJob("hrobár", "John" ));

// KONIEC CVIČENIA

// ************************************************************************



// KAPITOLA 22. FALSY A TRUTHY HODNOTA V JAVASCRIPTE



// falsy = undefined, 0, "" (prázdny string), NaN, null
// truthy = to, čo nie je falsy

//undefined
var job;
console.log(job);               //vypiše UNDEFINED

//príklad na undefined v podmienke
if (job){
    console.log("Hodnota undefined je true");
} else{
    console.log("Hodnota undefined je false");          // vypíše FALSE

}

// prázdny string ""

var salary = "";
if (salary){
    console.log("Hodnota prázdny string je true");
} else{
    console.log("Hodnota prázdny string je false");     // vypíše FALSE
}



var salary = 0;
if (salary){
    console.log("Hodnota 0  je true");
} else{
    console.log("Hodnota 0 je false");                  // vypíše FALSE
}



var salary = 100;
if (salary){
    console.log("Hodnota číslo  je true");              // vypíše TRUE
} else{
    console.log("Hodnota číslo je false");  
}



var salary ="sto";
if (salary){
    console.log("Hodnota vyplnený string  je true");    // vypíše TRUE
} else{
    console.log("Hodnota vyplnený string je false");  
}


var salary = 0;
if (salary || salary === 0){
    console.log("Hodnota 0 je true keď použijeme || salary === 0 ");                  // vypíše TRUE
} else{
    console.log("Hodnota 0 je false keď použijeme || salary === 0");                  
}


// KONIEC CVIČENIA

// ************************************************************************



// KAPITOLA 23. Ovládni JavaScript - Rozdíl mezi == a === v porovnání v JavaScriptu

var salary;

console.log(typeof(0));         // number
console.log(typeof("0"));       // string



/**********************************************/


// príklad na ==

var salary = "0";

if (salary == 0){
    console.log(true);  // vypíše true lebo je mu jedno či je to string alebo číslo
    
} else {
    console.log(false);
}


// príklad na ===

var salary = "0";

if (salary === 0){
    console.log(true);
    
} else {
    console.log(false); // vypíše false, lebo nula musí byť dátový typ číslo a dátový typ string sa nerovná dátovému typu číslo
}


// KONIEC CVICENIA

// ************************************************************************



// KAPITOLA 24. Ovládni JavaScript - Pole v JavaScriptu


// POLE = ARRAY (POLE)

var name = "David"; // da sa pripradiť len jedna hodnota (nie je to pole)


// pole je toto:

var employees = ["David", "Jane", "Diana"];

/* hranaté zátvorky píšeme cez:  
PRAVY ALT + F = [
PRAVY ALT + G = ], 
*/ 

console.log(employees);         //vypíše [David, Jane, Diana]

// INDEXY SA CISLUJU OD NULY
console.log(employees[0]);          //DAVID JE INDEX 0
console.log(employees[1]);          //JANE JE INDEX 1
console.log(employees[2]);          //DIANA JE INDEX 2




var age = [30, 20, 40];

console.log(age);               //vypíše [30, 20, 40]

console.log(age[0]);            //30
console.log(age[1]);            //20
console.log(age[2]);            //40



var david = ["David", "Šetek", 33, 1980, true];

console.log(david[0]);      //David
console.log(david[1]);      //Šetek
console.log(david[2]);      //33
console.log(david[3]);      //1980
console.log(david[4]);      //true



/********************************************/

// pole sa dá zapísať aj iným spôsobom


var employees = ["David", "Jane", "Diana"];

// prepíšeme to takto:

var employees = new Array("David", "Jane", "Diana");

//obidva zápisy fungujú takisto

// KONIEC CVICENIA

// ************************************************************************



// KAPITOLA 25. Ovládni JavaScript - Práce s polem v JavaScriptu

var employees = ["David", "Jane", "Diana"];

employees[0] = "Martin";        //  prepíše Davida = index 0
employees[1] = "Anna";          //  prepíše Jane = index 0
employees[5] = "Eduard";        //  doplní index 5. index 3 a 4 napíše empty = 2x empty


console.log(employees);         //vypíše toto: ['Martin', 'Anna', 'Diana', empty × 2, 'Eduard']




//novy priklad

var employees = ["David", "Jane", "Diana"];

/*  push - pridá na koniec,
    unshift - pridá na začiatok,
    
    pop - odoberie posledný,
    shift - odoberie prvý.
*/

employees.push("John");
employees.push("John2");

employees.unshift("Albert");            // menia sa indexy
employees.pop();                        // odobralo Johna na konci
employees.pop();                        // odobralo Johna2 na konci
employees.shift();                      // odobralo Alberta na začiatku



console.log(employees);

// KONIEC CVICENIA

// ************************************************************************



// KAPITOLA 26. Ovládni JavaScript - Pole a indexOf a length v JavaScriptu


var employees = ["David", "Jane", "Diana", "Martin", "Eduard"];

console.log(employees.indexOf("David"));        //vypíše index toho človeka, ktorého tam zadáme = 0
console.log(employees.indexOf("Eduard"));       // vypíše index 4
console.log(employees.indexOf("Natalia"));      // vypíše -1 ak hodnotu v poli nenájde
console.log(employees.indexOf("Peter"));

var employees = ["David", "Jane", "David", "Martin", "Eduard"];

console.log(employees.indexOf("David"));        //vypíše index toho človeka, ktorého tam zadáme = 0, a už nevypíše index 2



if (employees.indexOf(prompt("Zadaj meno"))>= 0){
    console.log("Našli sme osobu v databáze")
} else {
    console.log("Nenašli sme osobu v databáze")
}


employees.length;                       // koľko mien je v tom employees?

console.log(employees.length);          //vypíše 5, počíta už normálne od jednotky


// chceme vypísať posledné pole z employees

console.log(employees[employees.length - 1]);       // obecný zápis posledného v poli - employees.length - 1 = prevod počtu osôb na index



// KONIEC CVIČENIA

// ************************************************************************



// KAPITOLA 27. Ovládni JavaScript - Objekty v JavaScriptu

// pole = hodnotám sú priradené indexy, záleží na poradí

var employees = ["David", "Jane", "Diana"];



// objekt = hodnotám sú priradené iné hodnody, nezáleží na poradí

var david = {
    firstName: "David",
    lastName: "Setek",
    birthYear: 1980,
    driveLicence: true,
    family: ["John", "Anna","Diana"]
}
// kľúč         hodnota



// vypíšeme to takto:

console.log(david);             // vypíše sa nám celý objekt

//tento zápis

console.log(david.firstName);
console.log(david.lastName);
console.log(david.driveLicence);

// sa rovná tomuto zápisu

console.log(david["firstName"]);
console.log(david["lastName"]);
console.log(david["driveLicence"]);


// Druhá možnosť ako zapísať objekt

var diana = new Object();
diana.firstName = "Diana";
diana.lastName = "Novotna";
diana.birthYear = "1990";
diana.driveLicence = "false";

// výpis poľa takto

console.log(diana);




david.firstName = "Martin";
david.birthYear = "2000";
david.driveLicence = "false";

console.log(david);     // prepíše nam firstName

// KONIEC CVIČENIA

// ************************************************************************



// KAPITOLA 28. 






