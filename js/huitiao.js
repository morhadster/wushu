setTimeout(function(){
  var simpleFormToken='eb9a015c630904b0a5e1e3921dbc2b48'

  var popup, a=document.getElementById('header').getElementsByTagName('a')[0]

  a.onclick=function(){
    if(popup) return hide()
    a.parentElement.appendChild(linpen())
    return false
  }

  function linpen(){
    popup=document.createElement('div')
    popup.innerHTML='<h2>Обратный звонок<a href="#" class="close" title="Закрыть">&times;</a></h2>\
<form>\
Укажите Ваш телефон<br>и мы Вам перезвоним:<br>\
<label><div>Имя</div><input type="text" name="name"></label>\
<label><div>Телефон (<span class="text-error">обязательно</span>)</div><input type="text" name="tel" autofocus required></label>\
<label><div>E-mail</div><input type="text" name="mail"></label>\
<label><div>Когда удобно звонить</div><input type="text" name="time"></label>\
<label><div>Примечания</div><textarea name="notes"></textarea></label>\
<br><input type="submit" value="Позвоните мне!">\
<div></div>\
</form>\
'
    popup.getElementsByTagName('a')[0].onclick=hide
    popup.getElementsByTagName('form')[0].onsubmit=send
    return popup
  }

  function hide(){
    popup.parentNode.removeChild(popup)
    popup=null
    return false
  }

  function info(txt, klass)
  {
    var z=popup.getElementsByTagName('div')
    z=z[z.length-1]
    z.innerHTML=txt
    if(klass) z.className=klass
    return false
  }

  function send()
  {
    var x={form_api_token: simpleFormToken, url: location.href}
    for(var i=this.length-1; i>=0; i--)
      if(this[i].name) x[this[i].name]=this[i].value.replace(/^\s+|\s+$/g, '')
    if(x.tel.replace(/\D+/g, '').length<7)
    {
      info('Неверный телефон', 'error')
      this.tel.focus()
      return false
    }
    return false
  }

}, 0)
