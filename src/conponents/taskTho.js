 export default function taskTho(){
    const userNameRef = document.getElementById('username')
const userPaswordRef = document.getElementById('password')
const saveBtnRef = document.getElementById('saveBtn')

let user = {}

if(localStorage.getItem('user') === null){
    return
} else{
    user = JSON.parse(localStorage.getItem('user'))
    userNameRef.value = user.name
userPaswordRef.value = user.pasword
}


saveBtnRef.addEventListener('click',() => {
    user.name = userNameRef.value
    user.pasword = userPaswordRef.value

    localStorage.setItem('user',JSON.stringify(user))
    
})
 
}