const Player = require('./Player');  
const fight = require('./Fight');    

describe('Player Class', () => {
    it('should create a player with the correct attributes', () => {
        const player = new Player(1, 'Player A', 50, 5, 10);
        expect(player.id).toBe(1);
        expect(player.name).toBe('Player A');
        expect(player.health).toBe(50);
        expect(player.strength).toBe(5);
        expect(player.attack).toBe(10);
    });

    it('should roll a die and return a number between 1 and 6', () => {
        const player = new Player(1, 'Player A', 50, 5, 10);
        for (let i = 0; i < 100; i++) {
            const roll = player.rollDice();
            expect(roll).toBeGreaterThanOrEqual(1);
            expect(roll).toBeLessThanOrEqual(6);
        }
    });

    it('should calculate correct attack damage', () => {
        const player = new Player(1, 'Player A', 50, 5, 10);
        const damage = player.calculateDamage(3);
        expect(damage).toBe(30);
    });

    it('should calculate correct defense value', () => {
        const player = new Player(1, 'Player A', 50, 5, 10);
        const defense = player.calculateDefense(4);
        expect(defense).toBe(20);
    });
});

describe('Fight Function', () => {
    it('should reduce health correctly during a fight', () => {
        const playerA = new Player(1, 'Player A', 50, 5, 10);
        const playerB = new Player(2, 'Player B', 100, 10, 5);

        const mockRollDie = jest.spyOn(playerA, 'rollDice');
        mockRollDie.mockReturnValueOnce(5).mockReturnValueOnce(2);

        const mockRollDieB = jest.spyOn(playerB, 'rollDice');
        mockRollDieB.mockReturnValueOnce(2).mockReturnValueOnce(4);

        fight(playerA, playerB);

        expect(playerA.health).toBeLessThanOrEqual(50); 
        expect(playerB.health).toBeLessThanOrEqual(70); 
        mockRollDie.mockRestore();
        mockRollDieB.mockRestore();
    });

    it('should declare the correct winner', () => {
        const playerA = new Player(1, 'Player A', 50, 5, 10);
        const playerB = new Player(2, 'Player B', 10, 10, 5);

        const mockRollDie = jest.spyOn(playerA, 'rollDice');
        mockRollDie.mockReturnValue(6);

        const mockRollDieB = jest.spyOn(playerB, 'rollDice');
        mockRollDieB.mockReturnValue(1);

        fight(playerA, playerB);

        expect(playerA.health).toBeGreaterThan(0);
        expect(playerB.health).toBe(0);

        mockRollDie.mockRestore();
        mockRollDieB.mockRestore();
    });
});
