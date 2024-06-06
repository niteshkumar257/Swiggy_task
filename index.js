const readline=require('readline');
const Player=require('./player');
const fight=require('./fight');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let players=[];
let playerId=1;

function createPlayer(callback) {
    rl.question(`Enter name for Player ${playerId}: `, (name) => {
        rl.question(`Enter health for ${name}: `, (health) => {
            rl.question(`Enter strength for ${name}: `, (strength) => {
                rl.question(`Enter attack for ${name}: `, (attack) => {
                    const player = new Player(playerId++, name, parseInt(health), parseInt(strength), parseInt(attack));
                    players.push(player);
                    console.log('\nPlayer created successfully!');
                    callback();
                });
            });
        });
    });
}

function showPlayers() {
    console.table(players, ['id', 'name', 'health', 'strength', 'attack']);
}

function promptForPlayers() {
    createPlayer(mainMenu);
}

function promptForFight() {
    rl.question('Enter the ID of the first player to fight: ', (id1) => {
        const player1 = players.find(p => p.id === parseInt(id1));
        if (!player1) {
            console.log('Invalid ID. Please try again.');
            return promptForFight();
        }
        rl.question('Enter the ID of the second player to fight: ', (id2) => {
            const player2 = players.find(p => p.id === parseInt(id2));
            if (!player2) {
                console.log('Invalid ID. Please try again.');
                return promptForFight();
            }
            rl.close();
            fight(player1, player2);
        });
    });
}

function mainMenu() {
    console.log('\nChoose an option:');
    console.log('1. Create a new player');
    console.log('2. Show all players');
    console.log('3. Fight between players');
    console.log('4. Exit');

    rl.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                promptForPlayers();
                break;
            case '2':
                showPlayers();
                mainMenu();
                break;
            case '3':
                if (players.length < 2) {
                    console.log('You need at least two players to start a fight.');
                    mainMenu();
                } else {
                    promptForFight();
                }
                break;
            case '4':
                rl.close();
                break;
            default:
                console.log('Invalid choice, please try again.');
                mainMenu();
                break;
        }
    });
}

mainMenu();