const dobInput = document.getElementById("dob")
const calculateBtn = document.getElementById("calculateBtn")
const languageSelect = document.getElementById("language")

let birthDate = null
let timer = null

const translations = {

en: {
title:"Age Calculator",
dob:"Date of Birth",
calculate:"Calculate Age",
years:"Years",
months:"Months",
days:"Days",
hours:"Hours",
minutes:"Minutes",
seconds:"Seconds"
},

tr:{
title:"Yaş Hesaplayıcı",
dob:"Doğum Tarihi",
calculate:"Yaşı Hesapla",
years:"Yıl",
months:"Ay",
days:"Gün",
hours:"Saat",
minutes:"Dakika",
seconds:"Saniye"
},

es:{
title:"Calculadora de Edad",
dob:"Fecha de Nacimiento",
calculate:"Calcular Edad",
years:"Años",
months:"Meses",
days:"Días",
hours:"Horas",
minutes:"Minutos",
seconds:"Segundos"
},

de:{
title:"Altersrechner",
dob:"Geburtsdatum",
calculate:"Alter Berechnen",
years:"Jahre",
months:"Monate",
days:"Tage",
hours:"Stunden",
minutes:"Minuten",
seconds:"Sekunden"
},

fr:{
title:"Calculateur d'Âge",
dob:"Date de Naissance",
calculate:"Calculer l'âge",
years:"Ans",
months:"Mois",
days:"Jours",
hours:"Heures",
minutes:"Minutes",
seconds:"Secondes"
},

it:{
title:"Calcolatore Età",
dob:"Data di Nascita",
calculate:"Calcola Età",
years:"Anni",
months:"Mesi",
days:"Giorni",
hours:"Ore",
minutes:"Minuti",
seconds:"Secondi"
},

pt:{
title:"Calculadora de Idade",
dob:"Data de Nascimento",
calculate:"Calcular Idade",
years:"Anos",
months:"Meses",
days:"Dias",
hours:"Horas",
minutes:"Minutos",
seconds:"Segundos"
},

ru:{
title:"Калькулятор возраста",
dob:"Дата рождения",
calculate:"Рассчитать возраст",
years:"Лет",
months:"Месяцев",
days:"Дней",
hours:"Часов",
minutes:"Минут",
seconds:"Секунд"
},

ar:{
title:"حاسبة العمر",
dob:"تاريخ الميلاد",
calculate:"احسب العمر",
years:"سنوات",
months:"أشهر",
days:"أيام",
hours:"ساعات",
minutes:"دقائق",
seconds:"ثواني"
},

zh:{
title:"年龄计算器",
dob:"出生日期",
calculate:"计算年龄",
years:"年",
months:"月",
days:"天",
hours:"小时",
minutes:"分钟",
seconds:"秒"
},

ja:{
title:"年齢計算機",
dob:"生年月日",
calculate:"年齢を計算",
years:"年",
months:"ヶ月",
days:"日",
hours:"時間",
minutes:"分",
seconds:"秒"
},

ko:{
title:"나이 계산기",
dob:"생년월일",
calculate:"나이 계산",
years:"년",
months:"개월",
days:"일",
hours:"시간",
minutes:"분",
seconds:"초"
},

hi:{
title:"आयु कैलकुलेटर",
dob:"जन्म तिथि",
calculate:"आयु गणना करें",
years:"वर्ष",
months:"महीने",
days:"दिन",
hours:"घंटे",
minutes:"मिनट",
seconds:"सेकंड"
}

}

function updateLanguage(lang){

const t = translations[lang]

document.getElementById("title").textContent = t.title
document.getElementById("dobLabel").textContent = t.dob
document.getElementById("calculateBtn").textContent = t.calculate
document.getElementById("yearsLabel").textContent = t.years
document.getElementById("monthsLabel").textContent = t.months
document.getElementById("daysLabel").textContent = t.days
document.getElementById("hoursLabel").textContent = t.hours
document.getElementById("minutesLabel").textContent = t.minutes
document.getElementById("secondsLabel").textContent = t.seconds

}

function updateAge(){

if(!birthDate) return

const now = new Date()
const diff = now - birthDate

const seconds = Math.floor(diff / 1000)
const minutes = Math.floor(seconds / 60)
const hours = Math.floor(minutes / 60)
const days = Math.floor(hours / 24)
const years = Math.floor(days / 365)
const months = Math.floor(days / 30)

document.getElementById("years").textContent = years
document.getElementById("months").textContent = months
document.getElementById("days").textContent = days
document.getElementById("hours").textContent = hours
document.getElementById("minutes").textContent = minutes
document.getElementById("seconds").textContent = seconds

}

calculateBtn.addEventListener("click",()=>{

const value = dobInput.value
if(!value) return

birthDate = new Date(value)

updateAge()

if(timer) clearInterval(timer)

timer = setInterval(updateAge,1000)

})

languageSelect.addEventListener("change",e=>{
updateLanguage(e.target.value)
})

updateLanguage("en")