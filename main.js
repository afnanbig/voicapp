Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/R4pqPsbBv/",modelLoaded);

function modelLoaded(){
    console.log('ModelLoaded!');
}
function check()
{
    img=document.getElementById ('capture_image');
    classifier.classify(img,getResult);
}

function getResult (error, result){
    if(error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("results_objects_name").innerHTML=results[0].lable;
        document.getElementById("results_objects_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}