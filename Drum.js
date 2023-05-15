document.querySelector('#item1').addEventListener('click',function(element){
    let elem=document.querySelector('#item1');
    elem.innerHTML=`<audio controls autoplay><source src="Drumsounds/tom-1.mp3" type="audio/mp3"></audio>`;
});
document.querySelector('#item2').addEventListener('click',function(element){
    let elem=document.querySelector('#item2');
    elem.innerHTML=`<audio controls autoplay><source src="Drumsounds/tom-2.mp3" type="audio/mp3"></audio>`;
});
document.querySelector('#item3').addEventListener('click',function(element){
    let elem=document.querySelector('#item3');
    elem.innerHTML=`<audio controls autoplay><source src="Drumsounds/kick-bass.mp3" type="audio/mp3"></audio>`;
});
document.querySelector('#item4').addEventListener('click',function(element){
    let elem=document.querySelector('#item4');
    elem.innerHTML=`<audio controls autoplay><source src="Drumsounds/tom-3.mp3" type="audio/mp3"></audio>`;
});
document.querySelector('#item5').addEventListener('click',function(element){
    let elem=document.querySelector('#item5');
    elem.innerHTML=`<audio controls autoplay><source src="Drumsounds/tom-4.mp3" type="audio/mp3"></audio>`;
});
document.querySelector('#item6').addEventListener('click',function(element){
    let elem=document.querySelector('#item6');
    elem.innerHTML=`<audio controls autoplay><source src="Drumsounds/crash.mp3" type="audio/mp3"></audio>`;
});
document.querySelector('#item7').addEventListener('click',function(element){
    let elem=document.querySelector('#item7');
    elem.innerHTML=`<audio controls autoplay><source src="Drumsounds/snare.mp3" type="audio/mp3"></audio>`;
});
//For images Trying short method 
// Array.from(document.getElementsByClassName('item')).forEach(function(element){
//     element.addEventListener('click',function(e){

//     });
// });
//For Keys
document.addEventListener('keydown',fun1);
function fun1(e){
    let sound;
    if(e.key=='a'){
        sound='tom-1';
    }
    else if(e.key=='s'){
        sound='tom-2';
    }
    else if(e.key=='w'){
        sound='kick-bass';
    }
    else if(e.key=='d'){
        sound='tom-3';
    }
    else if(e.key=='j'){
        sound='tom-4';
    }
    else if(e.key=='k'){
        sound='crash';
    }
    else if(e.key=='l'){
        sound='snare';
    }
    else{
        return;
    }
    document.querySelector('#audio').setAttribute('src',`Drumsounds/${sound}.mp3`);
};