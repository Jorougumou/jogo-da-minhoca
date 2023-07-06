window.onload = function(){

    var tela = document.getElementById('tela');
    var conteudo = tela.getContext('2d');

    setinterval(game(), 1000/60);

    const vel = 1;

    var vx = 0;
    var vy = 0;

    var px = 10;
    var py = 10;

    var tamQ = 20;
    var QQ = 20;

    var applex = 15
    var appley = 15

    var trail = []
    var tail = 5

    function game() {
        px += vx
        py += vy

        if(px < 0)
        {
            px = qp -1
        }
        if (px > qp -1)
        {
            px = 0
        }

        if(py < 0) 
        {
            py = qp -1
        }

        if (py > qp -1)
        {
            py = 0
        }










    conteudo.fillStyle = 'black';
    conteudo.fillRect(0,0,tela.width,tela.height);

    conteudo.fillStyle = 'red';
    conteudo.fillRect = (applex*tamQ,appley*tamQ,tamQ,tamQ)

    conteudo.fillStyle = 'green';
    for(let i =0;i < trail.length;i++)
    {
        conteudo.fillRect = (
                            trail[i].x * tamQ,
                            trail[i].y * tamQ,
                            tamQ,
                            tamQ
                            )

        if(trail[i].x == p && trail[i].y == pp) 
        {
            vx = 0
            vy = 0
        }
    
    }
    trail.push({x:px,y:py})
    while (trail.length > tail)
    {
        trail.shift
    }


    }









}