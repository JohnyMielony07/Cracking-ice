

var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

var x;
var y;



$('canvas').on('click', function(e){
    
    drawLines(e, $(this));
});
function countOffsetX(e, object)
{
    return e.pageX - object.offset().left;
}
function countOffsetY(e, object)
{
    return e.pageY - object.offset().top;
}





function drawLines(e, obj)
{
    //cursor position
    x = countOffsetX(e, obj);
    y = countOffsetY(e, obj);

    
    ctx.moveTo(x,y);
    
    drawSingleCrack('left', x, y, ctx);
    drawSingleCrack('right', x, y, ctx);
    drawSingleCrack('top', x, y, ctx);
    //drawSingleCrack('right', x, y, ctx);
    
    //alert(x + ', ' + y);
}
function drawSingleCrack(direction, dir_x, dir_y, ctx)
{
    var x = dir_x;
    var y = dir_y;
    var random_y;
    var random_x;
    switch(direction)
    {
        case 'right':
            //ctx.lineTo(x + 30,y + 30);
            //ctx.lineTo(x + 15,y + 40);
            random_y = y +  Math.floor((Math.random() * 40) + 10);
            random_x = x + Math.floor((Math.random() * 40) + 10);
            ctx.lineTo(random_x, random_y);
            random_y = y + Math.floor((Math.random() * 40) + 10);
            random_x = x + Math.floor((Math.random() * 40) + 10);
            ctx.lineTo(random_x,random_y);

            ctx.stroke();
            ctx.moveTo(dir_x, dir_y);
            break;

        case 'left':
            random_y = y + Math.floor((Math.random() * 40) + 10);
            random_x = x - Math.floor((Math.random() * 40) + 10);
            ctx.lineTo(random_x, random_y);
            random_y = y + Math.floor((Math.random() * 40) + 10);
            random_x = x - Math.floor((Math.random() * 40) + 10);
            ctx.lineTo(random_x,random_y);

            ctx.stroke();
            ctx.moveTo(dir_x, dir_y);
            break;

        case 'top':
        random_y = y -  Math.floor((Math.random() * 40) + 10);
        random_x = x - Math.floor((Math.random() * 40) + 10);
        ctx.lineTo(random_x, random_y);
        random_y = y - Math.floor((Math.random() * 40) + 10);
        random_x = x - Math.floor((Math.random() * 40) + 10);
        ctx.lineTo(random_x,random_y);

        ctx.stroke();
        ctx.moveTo(dir_x, dir_y);


            ctx.stroke();
            break;
    }
    
    return 0;
}