var KAOSSDJ = {};

// The button that enables/disables scratching
KAOSSDJ.wheelTouch = function (channel, control, value, status, group) {
    if ((status & 0xF0) === 0x90) {    // If button down
  //if (value === 0x7F) {  // Some wheels send 0x90 on press and release, so you need to check the value
        var alpha = 1.0/8;
        var beta = alpha/32;
        engine.scratchEnable(KAOSSDJ.currentDeck, 128, 33+1/3, alpha, beta);
    } else {    // If button up
        engine.scratchDisable(KAOSSDJ.currentDeck);
    }
}
 
// The wheel that actually controls the scratching
KAOSSDJ.wheelTurn = function (channel, control, value, status, group) {
    // --- Choose only one of the following!
 
    // A: For a control that centers on 0:
    var newValue;
    if (value < 64) {
        newValue = value;
    } else {
        newValue = value - 128;
    }
 
    // B: For a control that centers on 0x40 (64):
    var newValue = value - 64;
 
    // --- End choice
 
    // In either case, register the movement
    if (engine.isScratching(KAOSSDJ.currentDeck)) {
        engine.scratchTick(KAOSSDJ.currentDeck, newValue); // Scratch!
    } else {
        engine.setValue('[Channel'+KAOSSDJ.currentDeck+']', 'jog', newValue); // Pitch bend
    }
}
