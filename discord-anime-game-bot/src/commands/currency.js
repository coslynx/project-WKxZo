const currency = {
    userCurrency: {},

    initializeCurrency: function(userId) {
        if (!this.userCurrency[userId]) {
            this.userCurrency[userId] = 0;
        }
    },

    getUserCurrency: function(userId) {
        this.initializeCurrency(userId);
        return this.userCurrency[userId];
    },

    addUserCurrency: function(userId, amount) {
        this.initializeCurrency(userId);
        this.userCurrency[userId] += amount;
    },

    deductUserCurrency: function(userId, amount) {
        this.initializeCurrency(userId);
        if (this.userCurrency[userId] >= amount) {
            this.userCurrency[userId] -= amount;
            return true;
        } else {
            return false;
        }
    }
};

module.exports = currency;