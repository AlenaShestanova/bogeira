function handleAchievementsItemClick(id) {
    const element = document.getElementById(`${id}`)
    element.classList.toggle('active')
}

function changeLinkColor(id){
    const element = document.getElementById(`${id}`)
    element.classList.toggle('change-color-link')
}

