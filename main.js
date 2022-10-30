document.getElementById("lll").style.display="none";
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90

});
 camera = document.getElementById("camera");
Webcam.attach( '#camera' ) ;
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
        document.getElementById("lll").style.display="block";
    }
    )
}

console.log(ml5.version);
var classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zyYbnPH1V/",modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
}
function check(){
    v

}