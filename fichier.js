alert("Hello ODC ")
let htmlSection= document.querySelector("#html > h2 > span")
function greenIt(){htmlSection.style.color="green"} 
console.log(htmlSection)
const toggleGreen = () => {
    htmlSection.style.color !== "green" ? htmlSection.style.color ="green" : '' } 
 const colorIt= (color) => {
        htmlSection.style.color !== color ? htmlSection.style.color = color  : '' } 
setTimeout(()=>colorIt("salmon"),3000)
var message= 'We are the best'
let message2 = 'We are the best'
const message3 = 'We are the best'
function updateValues(){
    message = message3 + "for var"
    message3 = message2
}
updateValues()

console.error("# var, let & const")
console.log(message)
console.log(message2)
console.log(message3)
