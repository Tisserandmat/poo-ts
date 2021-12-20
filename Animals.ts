interface animals {
    name: string
    couleur: string
    pattes: number
}


class Chat implements animals {
    couleur: string;
    name: string;
    pattes = 4;

    constructor(couleur: string, name: string) {
        this.couleur = couleur;
        this.name = name;
    }

    miaule() {
        console.log("Le chat " + this.name + " miaule")
    }
}

class Chien implements animals {
    couleur: string;
    name: string;
    pattes: 4;

    constructor(couleur: string, name: string) {
        this.couleur = couleur;
        this.name = name;
    }

    aboyer() {
        console.log("Le chien " + this.name + " aboie")
    }
}

class Oiseau implements animals {
    couleur: string;
    name: string;
    pattes = 2;

    constructor(couleur: string, name: string) {
        this.couleur = couleur;
        this.name = name;
    }

    voler() {
        console.log("L'oiseau : " + this.name + " vole")
    }
}

class Poisson implements animals {
    couleur: string;
    name: string;
    pattes = 0;

    constructor(name: string) {
        this.name = name;
    }

    nager(poisson: Poisson) {
        console.log("Le poisson : " + poisson.name + " nage")
    }
}

class Asticot implements animals {
    couleur: string;
    name: string;
    pattes = 0;

    constructor(couleur: string, name: string) {
        this.couleur = couleur;
        this.name = name;
    }
}

function photo(animals: animals) {
    console.log("Vous avez pris en photo :" + animals.name)
}

function carresse(animals: animals) {
    if (animals.pattes == 4) {
        console.log("Vous carressez : " + animals.name)
    } else {
        console.log("Vous ne pouvez pas carresser : " + animals.name + " car il n'a pas 4 pattes")
    }
}

function nourrir(animals: animals) {
    if (animals.couleur == "noir") {
        console.log("Vous nourrissez : " + animals.name+" car il est noir")
    } else {
        console.log("Vous ne pouvez pas nourrir : " + animals.name + " car il est  : " + animals.couleur + " et pas noir")
    }
}


var tommyCat: Chat = new Chat("rouge", "Tommy");
carresse(tommyCat);
nourrir(tommyCat);
tommyCat.miaule();
photo(tommyCat);
var timmyBlackCat: Chat = new Chat("noir", "Timmy")
nourrir(timmyBlackCat);
var dylanDog: Chien = new Chien("rouge", "Dylan")