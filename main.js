document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbs-input').addEventListener('input',(e)=>{
    document.getElementById('output').style.visibility = 'visible';

    let lbs = e.target.value;
    document.getElementById('grams-output').innerHTML=lbs/0.0022046;
    document.getElementById('kg-output').innerHTML=lbs/2.2046;
    document.getElementById('oz-output').innerHTML=lbs*16;
})