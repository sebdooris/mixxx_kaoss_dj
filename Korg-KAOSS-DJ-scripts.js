var KAOSSDJ = {};

KAOSSDJ.wheelTouch = function (channel, control, value, status, group) {
    if ((status & 0xF0) === 0x90) {    // If button down
        var alpha = 1.0/8;
        var beta = alpha/32;
        engine.scratchEnable(KAOSSDJ.currentDeck, 128, 33+1/3, alpha, beta);
    } else {    // If button up
        engine.scratchDisable(KAOSSDJ.currentDeck);
    }
}
 
KAOSSDJ.wheelTurn = function (channel, control, value, status, group) {
    var newValue;
    if (value < 64) {
        newValue = value;
    } else {
        newValue = value - 128;
    }
    if (engine.isScratching(KAOSSDJ.currentDeck)) {
        engine.scratchTick(KAOSSDJ.currentDeck, newValue); // Scratch!
    } else {
        engine.setValue('[Channel'+KAOSSDJ.currentDeck+']', 'jog', newValue); // Pitch bend
    }
}