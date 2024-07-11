const leveling = {
    characters: [],
  
    addCharacter: function(character) {
      this.characters.push(character);
    },
  
    levelUp: function(characterName) {
      const character = this.characters.find(char => char.name === characterName);
      if (character) {
        character.level++;
        console.log(`${characterName} has leveled up to level ${character.level}`);
      } else {
        console.log(`Character ${characterName} not found`);
      }
    },
  
    battle: function(character1, character2) {
      const char1 = this.characters.find(char => char.name === character1);
      const char2 = this.characters.find(char => char.name === character2);
  
      if (!char1 || !char2) {
        console.log("Invalid characters for battle");
        return;
      }
  
      const winner = Math.random() < 0.5 ? char1 : char2;
      console.log(`The winner of the battle is ${winner.name}`);
    },
  
    getCharacter: function(characterName) {
      return this.characters.find(char => char.name === characterName);
    }
  };
  
  module.exports = leveling;