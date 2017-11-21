const j5 = require('johnny-five');
const board = new j5.Board();

board.on('ready', ()=>{
    const led = new j5.Led(13);
    led.blink(1000);
    const servo = new j5.Servo({
        pin: 10,
        center: true,
        range: [30, 120]
    })
    
    let direction = true;
    
    function sprinkler(){
        if( direction ){
            console.log('up');
            servo.to(30, 5000);
            direction = !direction
        } else {
            console.log('down');
            servo.to(120, 500);
            direction = !direction
        }
        
    }
    sprinkler();
    servo.on('move:complete', sprinkler)
})