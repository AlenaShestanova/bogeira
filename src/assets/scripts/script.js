function handleAchievementsItemClick(id) {
    const element = document.getElementById(`${id}`)
    element.classList.toggle('active')
}

function changeLinkColor(id){
    const element = document.getElementById(`${id}`)
    element.classList.toggle('change-color-link')
}

function handleLogoClick(){
    const logo=document.getElementById('logo')

    // const coords=logo.getBoundingClientRect()
    //
    // var i=coords.x
    // for(i;i>0;i--){
    //     console.log(i,'I')
    //     setTimeout(()=>{
    //         logo.style.left = i + 'px';
    //     },5000)
    // }


    // let start = Date.now(); // запомнить время начала
    //
    // let timer = setInterval(function() {
    //     // сколько времени прошло с начала анимации?
    //     let timePassed = Date.now() - start;
    //
    //     if (timePassed >= 2000) {
    //         clearInterval(timer); // закончить анимацию через 2 секунды
    //         return;
    //     }
    //
    //     // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    //     // draw(timePassed);
    //
    // }, 20);

// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
//     function draw(timePassed) {
//         logo.style.left = timePassed / 5 + 'px';
//     }


}
