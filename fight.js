function fight(player1,player2)
{
    let attacker=player1.health<=player2.health? player1 : player2;
    let defender=attacker===player1 ? player2 : player1;

    while(player1.health>0 && player2.health>0)
        {
            console.log(`\n${attacker.name} attacks ${defender.name}`);
            const attackRoll=attacker.rollDice();
            const attackDamage=attacker.calculateDamage(attackRoll);

            const defenseRoll=defender.rollDice();
            const defenseValue=defender.calculateDefense(defenseRoll);

            const damage=Math.max(0,attackDamage-defenseValue);
            defender.health=Math.max(0,defender.health-damage);
            console.log(`${attacker.name} rolls ${attackRoll}, attack damage: ${attackDamage}`);
            console.log(`${defender.name} rolls ${defenseRoll}, defense value: ${defenseValue}`);
            console.log(`${defender.name} takes ${damage} damage, health now: ${defender.health}`);

            [attacker,defender]=[defender,attacker];
            // swap the values


        }

        const winner = player1.health > 0 ? player1 : player2;
        console.log(`\n${winner.name} wins the match!`);

}

module.exports=fight;