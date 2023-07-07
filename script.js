window.onload = function(){

    var stage = document.getElementById('stage');
    var ctx = stage.getContext('2d');
    document.addEventListener("keydown",keypush)
    setInterval(game, 40);

    const vel = 1;

    var vx = 0;
    var vy = 0;

    var px = 10;
    var py = 15;

    var lp = 20;
    var qp = 20;

    var ax = 15
    var ay = 15

    var trail = []
    var tail = 5

    function game() {
        px += vx
        py += vy

        if(px < 0)
        {
            px = lp -1
        }
        if (px > lp -1)
        {
            px = 0
        }

        if(py < 0) 
        {
            py = lp -1
        }

        if (py > lp -1)
        {
            py = 0
        }










    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,stage.width,stage.height);

    ctx.fillStyle = 'red';
    ctx.fillRect(ax*lp,ay*lp,lp,lp)

    ctx.fillStyle = 'green';
    for(let i =0;i < trail.length;i++)
    {
        ctx.fillRect(
                            trail[i].x * lp,
                            trail[i].y * lp,
                            lp,
                            lp
                          )

        if(trail[i].x == px && trail[i].y == py) 
        {
            vx = 0
            vy = 0
            tail = 5
        }
    
    }
    trail.push({x:px,y:py})
    while (trail.length > tail)
    {
        trail.shift();
    }

    if (ax === px && ay === py)
    {
        tail++;
        ax = Math.floor(Math.random()*qp)
        ay = Math.floor(Math.random()*qp)
    }
    }

    function keypush(event)
    {
        switch(event.keyCode){
            case 37: vx = -vel; vy = 0; break; //left
            
            case 38: vx = 0; vy = -vel; break; //up
            
            case 39: vx = vel; vy = 0; break; //right
            
            case 40: vx = 0; vy = vel; break; //down

            default:break;
        }
    }




















}