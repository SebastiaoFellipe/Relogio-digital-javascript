// função para alterar o background e as cores a partir da hora atual, sendo dividido em manhã, tarde e noite
const changeBackground = (h) => {
    let body = document.querySelector('body')
    let clock_color = document.querySelector('#clock')
    let settings_color = document.querySelector('#settings')
    let footer_color = document.querySelector('footer')
    let dark_color = '#3d3d3d' 
    if(h>=6 && h<12){
        clock_color.style.color = dark_color
        settings_color.style.color = dark_color
        footer_color.style.color = dark_color
        body.style.backgroundImage = "url('img/morning.jpg')"
    } else if(h>=12 && h<18){
        body.style.backgroundImage = "url('img/afternoon.jpg')"
    } else {
        body.style.backgroundImage = "url('img/night.jpg')" 
    }
}
// função para identifica se o sistema AM/PM esta ativo
function ampmSystem(){
    let ampmcheckbox = document.querySelector('#ampmcheckbox')
    if (ampmcheckbox.checked) {
        return true
    } else {
        return false
    }
}
// função para mostrar as horas em tempo real
function showTime(){
    let hh = new Date().getHours()
    let mm = new Date().getMinutes()
    let ss = new Date().getSeconds()
    changeBackground(hh)
    // arrow function para transformar um digito em formato duplo (00)
    let twoDigits = (num) => {
        num = num<10 ? '0'+num : num
        return num
    }
    let ampm = document.querySelector('#ampm')
    let ampmText = hh<12 ? 'AM' : 'PM' 
    ampm.innerHTML = ampmText
    // verifica o sistema AM/PM  e faz a conversão de horas
    if(ampmSystem()){
        hh = hh - 12
        ampm.style.display = 'block'
    } else {
        ampm.style.display = 'none'
    }
    let hours = document.querySelector('#hours')
    let minutes = document.querySelector('#minutes')
    let seconds = document.querySelector('#seconds')
    hh = twoDigits(hh)
    mm = twoDigits(mm)
    ss = twoDigits(ss)
    hours.innerHTML = hh
    minutes.innerHTML = mm
    seconds.innerHTML = ss
}
console.log('Start clock')
showTime()
// chama a função a cada 1 segundo
setInterval(showTime, 1000)

//função para abrir as configurações
function toggleSettings() {
    let settings = document.querySelector('#settings')
    if(settings.style.display == 'flex'){
        settings.style.display = 'none';
    } else {
        settings.style.display = 'flex';
    }
}