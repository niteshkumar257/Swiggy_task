# Swiggy Task

This project simulates a magical arena where players can fight each other. Each player has attributes like health, strength, and attack, and they take turns attacking and defending in a match until one player's health reaches zero.

## Features

- Create new players with specific attributes.
- Display all players in a table format.
- Simulate fights between players, with each player's turn determined by their health.
- Dice rolls determine attack damage and defense value.
- The game continues until one player's health reaches zero.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repository/magical-arena.git
    cd magical-arena
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the game:
    ```sh
    node index.js
    ```

## Usage

1. Upon running the game, you will be presented with a menu:

    ```
    Choose an option:
    1. Create a new player
    2. Show all players
    3. Fight between players
    4. Exit
    ```

2. Select option `1` to create a new player. You will be prompted to enter the player's name, health, strength, and attack.

3. Select option `2` to display all created players in a table format.

4. Select option `3` to initiate a fight between two players. You will be prompted to enter the IDs of the two players.

5. Select option `4` to exit the game.

## Testing

To run the unit tests, follow these steps:

1. Ensure you have Jest installed. If not, install it using the following command:
    ```sh
    npm install --save-dev jest
    ```

2. Add the following script to your `package.json`:
    ```json
    "scripts": {
        "test": "jest"
    }
    ```

3. Run the tests using the following command:
    ```sh
    npm test
    ```

