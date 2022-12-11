function handleAchievementsItemClick(id) {
    const element = document.getElementById(`${id}`)
    element.classList.toggle('active')
}

function changeLinkColor(id) {
    const element = document.getElementById(`${id}`)
    element.classList.toggle('change-color-link')
}

function handleLogoClick() {
    const containerElem = document.getElementById('main-container')
    containerElem.classList.add('main-container-active')

    const logoElem = document.getElementById('logo-primary-btn')
    logoElem.classList.add('logo-animation')

    primaryLogoHidden(logoElem)

}

function primaryLogoHidden(logo) {
    setTimeout(() => {
        if (logo) {
            logo.classList.toggle('logo-hidden')
            const iconInLogo=document.getElementById('icon-in-logo')
            if(iconInLogo){
                iconInLogo.style.visibility='visible'
            }
        }
    }, 1500)
}



