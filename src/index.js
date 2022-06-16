import './styles/index.scss'
import $ from 'jquery'

const ss = {
  lolo: 'lol',
  lolo2: 'lol2'
}

const ss2 = {
  lol3: 'lol3',
  lolo4: 'lol4',
  ...ss
}

$('.block').html('jQuery is working')
console.log(ss2)

