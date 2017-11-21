const j5 = require('johnny-five');
const board = new j5.Board();

board.on('ready', () => {
    const servos = new j5.Servos([10, 11])
    const leftWalk = new j5.Animation(servos);

    setTimeout(startWalkAnim, 1000);
    
    function startWalkAnim(){
        leftWalk.enqueue({
            cuePoints: [0, .33, .66, 1],
            keyFrames: [
                [{degrees: 80}, {degrees: 0}, {degrees: 80}, {degrees: 160}],
                [{degrees: 80}, {degrees: 160}, {degrees: 80}, {degrees: 0}]
            ],
            duration: 1500,
            loop: true
        })
    }







     // let direction = true;
    // function sprinkler(){
    //     if( direction ){
    //         console.log('up');
    //         servo.to(0, 500);
    //         servo2.to(160, 500);
    //         direction = !direction
    //     } else {
    //         console.log('down');
    //         servo.to(160, 500);
    //         servo2.to(0, 500);
    //         direction = !direction
    //     }
    // }
    // sprinkler();
    // servo.on('move:complete', sprinkler)
})