function result(){
    var form= document.getElementById('quiz');
    var szin = form.elements['szin'].value;
    var allat = form.elements['allat'].value;
    var hely = form.elements['hely'].value;
    var etel = form.elements['etel'].value;
    var a=0
    var b=0
    var c=0
    var d=0
    var e=0
    var f=0
    var g=0
    var h=0
    if (szin==='a'){
        a++
    }
    else if (szin==='b'){
        b++
    }
    else if (szin==='c'){
        c++
    }
    else if (szin==='d'){
        d++
    }
    else if (szin==='e'){
        e++
    }
    else if (szin==='f'){
        f++
    }
    else if (szin==='g'){
        g++
    }
    else if (szin==='h'){
        h++
    }

    if (allat==='a'){
        a++
    }
    else if (allat==='b'){
        b++
    }
    else if (allat==='c'){
        c++
    }
    else if (allat==='d'){
        d++
    }
    else if (allat==='e'){
        e++
    }
    else if (allat==='f'){
        f++
    }
    else if (allat==='g'){
        g++
    }
    else if (allat==='h'){
        h++
    }

    if (hely==='a'){
        a++
    }
    else if (hely==='b'){
        b++
    }
    else if (hely==='c'){
        c++
    }
    else if (hely==='d'){
        d++
    }
    else if (hely==='e'){
        e++
    }
    else if (hely==='f'){
        f++
    }
    else if (hely==='g'){
        g++
    }
    else if (hely==='h'){
        h++
    }

    if (etel==='a'){
        a++
    }
    else if (etel==='b'){
        b++
    }
    else if (etel==='c'){
        c++
    }
    else if (etel==='d'){
        d++
    }
    else if (etel==='e'){
        e++
    }
    else if (etel==='f'){
        f++
    }
    else if (etel==='g'){
        g++
    }
    else if (etel==='h'){
        h++
    }

    if (a>b && a>c && a>d && a>e && a>f && a>g && a>h){
        document.getElementById('carol').style.display = 'block';
    }
    else if (b>a && b>c && b>d && b>e && b>f && b>g && b>h){
        document.getElementById('michonne').style.display = 'block';
    }
    else if (c>a && c>b && c>d && c>e && c>f && c>g && c>h){
        document.getElementById('carl').style.display = 'block';
    }
    else if (d>a && d>b && d>c && d>e && d>f && d>g && d>h){
        document.getElementById('rick').style.display = 'block';
    }
    else if (e>a && e>b && e>c && e>d && e>f && e>g && e>h){
        document.getElementById('negan').style.display = 'block';
    }
    else if (f>a && f>b && f>c && f>d && f>e && f>g && f>h){
        document.getElementById('eugene').style.display = 'block';
    }
    else if (g>a && g>b && g>c && g>d && g>e && g>f && g>h){
        document.getElementById('maggie').style.display = 'block';
    }
    else if (h>a && h>b && h>c && h>d && h>e && h>f && h>g){
        document.getElementById('daryl').style.display = 'block';
    }
    else if ((a==b && b==2)||(a==c && c==2)||(a==d && d==2)||(a==e && e==2)||(a==f && f==2)||(a==g && g==2)||(a==h && h==2)){
        document.getElementById('morgan').style.display = 'block';
    }
    else if ((c==b && b==2)||(b==d && d==2)||(b==e && e==2)||(b==f && b==2)||(b==g && g==2)||(b==h && h==2)){
        document.getElementById('glenn').style.display = 'block';
    }
    else if ((c==d && d==2)||(c==e && e==2)||(c==f && f==2)||(c==h && h==2)){
        document.getElementById('abraham').style.display = 'block';
    }
    else if ((e==d && d==2)||(d==f && f==2)||(d==g && g==2)||(d==h && h==2)){
        document.getElementById('rosita').style.display = 'block';
    }
    else if ((e==f && f==2)||(e==g && g==2)||(e==h && h==2)){
        document.getElementById('tara').style.display = 'block';
    }
    else if ((g==f && f==2)||(f==h && f==2) (g==h && h==2)||(g==h && h==1)){
        document.getElementById('jesus').style.display = 'block';
    }
    else {
        document.getElementById('ezekiel').style.display = 'block';
    }
    teszt.disabled=true;
}
