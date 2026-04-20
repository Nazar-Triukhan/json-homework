export default function taskOne() {
    const inpRef = document.getElementById('bookmarkInput')
const btnRef = document.getElementById('addBookmarkBtn')
const listRef = document.getElementById('bookmarkList')



const arr = JSON.parse(localStorage.getItem('link')) || []

listRef.innerHTML = arr.map((e, i) => {
    return `<li><a target="_blank" href="${e}">${e}</a><button data-index="${i}" class="btn">x</button></li>`
}).join('')

btnRef.addEventListener('click', () => {
    if (inpRef.value.trim() === '') {
        return
    }

    arr.push(inpRef.value)
    inpRef.value = ''

    listRef.innerHTML = arr.map((e, i) => {
  return `<li><a target="_blank" href="${e}">${e}</a><button data-index="${i}" class="btn">x</button></li>`
    }).join('')

    localStorage.setItem('link', JSON.stringify(arr))
})

listRef.addEventListener('click',(e) => {
    if(e.target.tagName === "BUTTON"){
        console.log(e.target.dataset.index);

        arr.splice(e.target.dataset.index , 1)

        listRef.innerHTML = arr.map((e, i) => {
  return `<li><a target="_blank" href="${e}">${e}</a><button data-index="${i}" class="btn">x</button></li>`
    }).join('')


    localStorage.setItem('link', JSON.stringify(arr))
        
    }
    
})

}