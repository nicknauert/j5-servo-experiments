const j5 = require('johnny-five');
const board = new j5.Board();

board.on('ready', ()=>{
    const led = new j5.Led(13);
    led.blink(1000);
    const servo = new j5.Servo({
        pin: 10,
        center: true,
        range: [0, 160]
    })
    const servo2 = new j5.Servo({
        pin: 11,
        center: true,
        range: [0, 160]
    })
    
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

    const leftWalk = new j5.Animation(servo);
    const rightWalk = new j5.Animation(servo2);

    leftWalk.enqueue({
        cuePoints: [0, .33, 1],
        keyFrames: [80, {value: 0, easing: "linear"}, {value: 160, easing: "linear"}],
        duration: 3000,
        loop: true
    })
    rightWalk.enqueue({
        cuePoints: [0, .33, 1],
        keyFrames: [80, {value: 160, easing: "linear"}, {value: 0, easing: "linear"}],
        duration: 3000,
        loop: true
    })
    
    

})