import avatarUrl from '../asserts/a.jpg'
import '../style/index.less'

let avatar = new Image()
avatar.src = avatarUrl  
avatar.classList.add('avatar')
 let root = document.querySelector('.app')
 root?.append(avatar)