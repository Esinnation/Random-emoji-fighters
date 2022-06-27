
const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕 ","🦁"]

const stageEl = document.getElementById("stage")
const playerOne = document.getElementById("playerOne")
const playerTwo= document.getElementById("playerTwo")
const resetBtn = document.getElementById("reset-btn")



playerOne.addEventListener("click", function(){
    const randomIndexOne = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = `${fighters[randomIndexOne]} vs  `

})

playerTwo.addEventListener("click", function() {
    const randomIndexTwo = Math.floor(Math.random() * fighters.length)
        stageEl.textContent += `  ${fighters[randomIndexTwo]}   `
    
})
resetBtn.addEventListener("click",function(){
    stageEl.textContent = 'Please select fighters '
    
})







// const randomIndexTwo = Math.floor(Math.random() * fighters.length)fighters[randomIndexTwo]