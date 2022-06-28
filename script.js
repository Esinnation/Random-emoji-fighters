
const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕 ","🦁"]

const stageEl = document.getElementById("stage")
const playerOne = document.getElementById("playerOne")
const playerTwo= document.getElementById("playerTwo")
const resetBtn = document.getElementById("reset-btn")
let canRender=true



playerOne.addEventListener("click", function(){
    const randomIndexOne = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = `${fighters[randomIndexOne]} vs  `
    canRender=true
    playerTwo.addEventListener("click", function() {
        const randomIndexTwo = Math.floor(Math.random() * fighters.length)
        if(canRender===true ){
            stageEl.textContent += `  ${fighters[randomIndexTwo]} ` 
            canRender=false
        } 
    })
})



resetBtn.addEventListener("click",function(){
    stageEl.textContent = 'Please select fighters '
    canRender=false
    
})