"use script";

class Killer{
    constructor(name,hp){
        this.name=name;
        this.hp=hp;
    }
    attack(survivor){
        if(Math.random>survivor.deathProb){
            dead.push(survivor);
        }else if(survivor.damageProb<Math.random){
            this.hp -=10;   
        }else{
            dead.push(survivor);
            this.hp -=15;
        }
    }
}
class Survivor{
    constructor(name,deathProb,damageProb,suicideProb){
        this.name=name;
        this.deathProb=deathProb;
        this.damageProb=damageProb;
        this.suicideProb=suicideProb;
    }
}
let names = ["riri","fifi","loulou","donald","pierre","caillou","alex","zoey","xav","bk","eduardeau"];
let probs = [0.3,0.5,0.2,0.4];
let survivors = [];
let dead= [];
for(let i=0;i<5;i++){
    survivors.push(new Survivor(names[Math.floor(Math.random()*names.length)],probs[Math.floor(Math.random()*probs.length)],probs[Math.floor(Math.random()*probs.length)],probs[Math.floor(Math.random()*probs.length)]));
}
jason = new Killer("Jason",100);

while(jason.hp>0 && dead.length<5){
    jason.attack(survivors[Math.floor(Math.random()*survivors.length)]);
    if(dead.length==5){
        alive=false;
    }
}
if(dead.length==5){
    console.log(`les survivants ont gagnés`);
    for(let i=0;dead.length;i++){
        console.log(dead[i]);
    }
    console.log("sont morts");
}else{
    console.log(`tous les survivants sont morts et Jason a ${jason.hp} points de vie`);
}
