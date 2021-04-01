

var time = Date.now();
function update(){
    window.requestAnimationFrame(update)
    if (Date.now()-time>2){
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
}
update();