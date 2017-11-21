const j5 = require('johnny-five');
const board = new j5.Board();

board.on('ready', () => {
    const servo = new j5.Servo({
        pin: 10,
        startAt: 80,
        range: [0, 160]
    })
    const servo2 = new j5.Servo({
        pin: 11,
        startAt: 80,
        range: [0, 160]
    })
    const leftWalk = new j5.Animation(servo);
    const rightWalk = new j5.Animation(servo2);

    setTimeout(startWalkAnim, 2000);
    
    function startWalkAnim(){
        leftWalk.enqueue({
            cuePoints: [0, .5, 1],
            keyFrames: [80, {value: 0, easing: "linear"}, {value: 160, easing: "linear"}],
            duration: 3000,
            loop: true
        })
        rightWalk.enqueue({
            cuePoints: [0, .5, 1 ],
            keyFrames: [80, {value: 160, easing: "linear"}, {value: 0, easing: "linear"}],
            duration: 3000,
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