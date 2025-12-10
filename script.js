class Auto {

    constructor(rok, przebieg, cena_wyjsciowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
    }

    zwiekszCeneWyjsciowa() {
        this.cena_wyjsciowa += 1000;
        this.cena_koncowa = this.cena_wyjsciowa;
    }

    obnizZaWiek() {
        const aktualnyRok = new Date().getFullYear();
        const wiek = aktualnyRok - this.rok;
        this.cena_koncowa -= wiek * 1000;
    }

    obnizZaPrzebieg() {
        const ileSetek = Math.floor(this.przebieg / 100000);
        this.cena_koncowa -= ileSetek * 10000;
    }

    aktualizujDane(nowyRok, nowyPrzebieg) {
        this.rok = nowyRok;
        this.przebieg = nowyPrzebieg;

        this.cena_koncowa = this.cena_wyjsciowa;
        this.obnizZaWiek();
        this.obnizZaPrzebieg();
    }
}

let tablica = [];

function dopiszDoTablicy(auto) {

    auto.aktualizujDane(auto.rok, auto.przebieg);

    if (auto.cena_koncowa > 10000) {
        tablica.push(auto);
    }
}


function zwiekszRok() {
    tablica.forEach(a => {
        a.rok += 1;
    });
}

let a1 = new Auto(2023, 200000, 9000);
let a2 = new Auto(2024, 300000, 40000);
let a3 = new Auto(2024, 200000, 50000);
let a4 = new Auto(2024, 400000, 86500);

dopiszDoTablicy(a1);
dopiszDoTablicy(a2);
dopiszDoTablicy(a3);
dopiszDoTablicy(a4);

zwiekszRok();

console.log("Tablica aut:", tablica);


class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {

    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this._oceny = [];
        this.srednia = 0;
    }

    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.srednia}.`;
    }

    set oceny(x) {
        if (x instanceof Ocena) {
            this._oceny.push(x);
            this.przeliczSrednia();
        }
    }

    get oceny() {
        return this._oceny
            .map(o => `Przedmiot: ${o.przedmiot} - ocena ${o.wartosc}.`)
            .join(' ');
    }
    
    przeliczSrednia() {
        if (this._oceny.length === 0) {
            this.srednia = 0;
            return;
        }
        const suma = this._oceny.reduce((acc, el) => acc + el.wartosc, 0);
        this.srednia = (suma / this._oceny.length).toFixed(2);
    }
}

let s = new Student("Jan", "Kowalski");

console.log(s.hello());

s.oceny = new Ocena("Polski", 5);
s.oceny = new Ocena("Matma", 2);
s.oceny = new Ocena("Angielski", 3);

console.log(s.oceny);
console.log(s.hello());