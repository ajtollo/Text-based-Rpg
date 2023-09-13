const hp = document.querySelector("#rpgHpI");
const days = document.querySelector("#rpgDsurvived");
const money = document.querySelector("#rpgMI");
const xp = document.querySelector("#rpgXpI");
const totalDay = document.querySelector("#totalDays");
const button1 = document.querySelector("#rpgB1");
const button2 = document.querySelector("#rpgB2");
const button3 = document.querySelector("#rpgB3");
const text = document.querySelector("#rpgText");
const rpg = document.querySelector("#rpgElements");
const monsterStats = document.querySelector("#rpgMonsterStats");
const monsterName = document.querySelector("#rpgMonsterName");
const monterHp = document.querySelector("#rpgMonsterHp");
const window1 = document.querySelector("#gamewindow1");
const window2 = document.querySelector("#gamewindow2");

class Human {
    constructor(){
        this._name = "";
        this.lvl = 1;
        this._health = 100;
        this._money = 100;
        this._xp = 0;
        this._atk = 5;
        this.inventory = ["stick"];
        this._IsAlive = true
        this.totalDay = 0;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    
    get health(){
        return this._health;
    }
    set health(value){
        if(value>100){
            this._health = 100;
        }
        else{
            this._health = value;
        }
    }
    get money(){
        return this._money;
    }
    set money(value){
        this._money = value;
    }
    get xp() {
        return this._xp;
    }
    set xp(value){
        this._xp = value;
        while(this._xp > 100){
            let x = this._xp % 100;
            this.level += 1;
            this._xp = x;
        }
    }

    get IsAlive(){
        return this._IsAlive;
    }
    set IsAlive(value){
        this.IsAlive = value;
    }
    Attack(){
        
    }

    Dodge(){
        
    }
    Rest(){

    }
    Run(){
        
    }
}
const Player = new Human();

// Implement different classes once reached specific level!
// Warrior, Archer, Mage, Merchant
const locations = [

    {
        name: "Welcome",
        "button text": [],
        "button functions":[],
        text: "Please input the name and press new game :>" +
        "This game will not be saved, once refereshed progress will be deleted"
    },
    {
        name:"town",
        "button text":["Go for an adventure","Rest at Inn", "Go to Shop"],
        "button functions":[goAdventure,goRest,goShop],
        text: "You have entered the town."
    },
    {
        name: "Adventure",
        "button text": ["Fight Monsters","Go back to town","Camp and rest"],
        "button functions":[goFight,goTown,goRest],
        text: "You have departed for an adventure"
    },
    {
        name: "Rest",
        "button text": [],
        "button functions":[],
        text: "You have rested for the day"
    },
    {
        name: "Shop",
        "button text": ["Upgrade Weapon","Enchance Weapon", "Go back to Town"],
        "button functions":[buyWeapon, sellWeapon, goTown],
        text: "You have entered the shop!"
    },
    {
        name: "Fight",
        "button text": ["Attack","Skill","Run"],
        "button functions":[Player.Attack,Player.Dodge,Player.Run],
        text: "Monster Encountered"
    },
    {
        name: "Run",
        "button text": ["Continue looking","Rest","Go back"],
        "button functions":[Player.Attack,Player.Rest,Player.Run],
        text: "You have retreated"
    },
    {
        name: "Win",
        "button text": [],
        "button functions":[],
        text: "You have defeated the demon lord! Congrats"
    },
    {
        name: "Lose",
        "button text": [],
        "button functions":[],
        text: "You died"
    },
    {
        name: "Monster slayed",
        "button text": [],
        "button functions":[],
        text: ""
    }

]

const monster = [
    {
        name: "Slime",
        level: 1
    },
    {
        name: "Goblin",
        level: 5
    },
    {
        name: "Goblin King",
        level: 10
    },
    {
        name: "Minotaur",
        level: 15
    },
    {
        name: "WereWolf",
        level: 20
    },
    {
        name: "Infant Dragon",
        level: 20
    },
    {
        name: "Young Dragon",
        level: 25
    },
    {
        name: "Adult Dragon",
        level: 30
    },
    {
        name: "Demon",
        level: 35
    },
    {
        name: "High Demon",
        level: 40
    },
    {
        name: "Demon General",
        level: 45
    },
    {
        name: "Arc Demon",
        level: 50
    },
    
    {
        name: "Demon kings: Attendant",
        level: 55
    },
    {
        name: "Demon King",
        level: 60
    },
]

const weapons = [
    //Human 1-3 (1-15)
    {
        name: "Stick",
        levelRep: 1,
        power: 1 
    },
    {
        name: "Rusty Sword",
        levelRep: 5,
        power: 10
    },
    {
        name: "Adventurer Sword",
        levelRep: 10,
        power: 15
    },
    // Class Based weapons => option 1
    // Warrior 1-3 advancement
    {
        name: "Long Sword",
        levelRep: 15,
        power: 20
    },
    {
        name: "Katana",
        levelRep: 25,
        power: 30
    },
    {
        name: "Dual Blade: Katana",
        levelRep: 35,
        power: 40
    },
    // Class Based weapons => option 2
    // Wizard 1-3 advancement
    {
        name: "Magic Wand",
        levelRep: 15,
        power: 30
    },
    {
        name: "Great Magic Wand",
        levelRep: 25,
        power: 50
    },
    {
        name: "Royal Casting Gloves",
        levelRep: 35,
        power: 70
    },
    // Class Based weapons => option 3
    // Ranger 1-3 advancement
    {
        name: "Rusty Gun",
        levelRep: 15,
        power: 30
    },
    {
        name: "Dual Gun: Polished",
        levelRep: 25,
        power: 50
    },
    {
        name: "Rifle",
        levelRep: 35,
        power: 70
    },
    // Class Based weapons => option 2
    // Druid 1-3 advancement
    {
        name: "Weed Staff",
        levelRep: 15,
        power: 30
    },
    {
        name: "Tree staff",
        levelRep: 25,
        power: 40
    },
    {
        name: "Great Tree staff",
        levelRep: 35,
        power: 60
    },
    
]

// Instantiate the values
firstRun(locations[0]);

function firstRun(locations){
    window2.style.display = "none";
    monsterStats.style.display = "none";
    rpg.style.display = "none";
    text.innerHTML = locations.text;
    Player.totalDay++;
    totalDay.innerHTML = Player.totalDay;
}

document.getElementById("rpgNewgame").onclick = function(){
    let name = String(document.getElementById("rpgNameInput").value);

    Player.name = name;
    window2.style.display = "block";
    window1.style.display = "none";
    document.getElementById("rpgName").innerHTML = "Name: " + Player.name;
    hp.innerHTML = Player.health;
    xp.innerHTML = Player.xp;
    money.innerHTML = Player.money;
    
    update(locations[1]);

}

function update(locations){
    monsterStats.style.display = "none";
    rpg.style.display = "block";
    button1.innerHTML = locations["button text"][0];
    button2.innerHTML = locations["button text"][1];
    button3.innerHTML = locations["button text"][2];
    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];
    text.innerHTML = locations.text;
}


//Location functions
function goTown(){
    update(locations[1]);
}


function goAdventure(){
    update(locations[2]);
    
}

function goShop(){
    update(locations[4]);
}

function goRest(){
    update(locations[3]);
}

function goFight(){
    update(locations[6]);
    let x = (Math.random() * Player.level) + 1;
}

// Action commands

function buyWeapon(){

}
function sellWeapon(){

}