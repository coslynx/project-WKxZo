const tradeCharacter = (sender, receiver, characterId) => {
    // Check if sender and receiver exist
    if (!users[sender] || !users[receiver]) {
        return "Sender or receiver does not exist.";
    }

    // Check if character exists in sender's collection
    if (!users[sender].characters.includes(characterId)) {
        return "Character does not exist in sender's collection.";
    }

    // Remove character from sender's collection and add it to receiver's collection
    users[sender].characters = users[sender].characters.filter(id => id !== characterId);
    users[receiver].characters.push(characterId);

    return "Character successfully traded.";
};