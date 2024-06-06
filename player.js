class Player{
    constructor(id,name,health,strength,attack){
        this.id=id;
        this.name=name;
        this.health=health;
        this.strength=strength;
        this.attack=attack;
    }
    rollDice(){
        return  Math.floor(Math.random()*6+1);
    }
    calculateDamage(roll)
    {
        return this.attack * roll;
    }
    calculateDefense(roll)
    {
        return this.strength * roll;
    }
}
module.exports=Player;