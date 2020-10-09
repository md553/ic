function modelready()
{
    console.log('Model is ready!!!');
    
}

function setup (){
    createCanvas(640,480);
    background(0);
    mobilnet =ml5.imageClassifier('Mobilenet',modelready);//callback function

}