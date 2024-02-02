console.log("JS file connected");

const emailGraphic = document.querySelector('#envelope')

const homeGraphic = document.querySelector('#home')

const markerGraphic = document.querySelector('#marker')

const phonecallGraphic = document.querySelector('#phonecall')

const shareGraphic = document.querySelector('#share')

const userGraphic = document.querySelector('#user')

function logThisId() {
    console.log(this);
    console.log('clicked on this element', this.id);
}

emailGraphic.addEventListener('click', logThisId);

homeGraphic.addEventListener('click', logThisId);

markerGraphic.addEventListener('click', logThisId);

phonecallGraphic.addEventListener('click', logThisId);

shareGraphic.addEventListener('click', logThisId);

userGraphic.addEventListener('click', logThisId);