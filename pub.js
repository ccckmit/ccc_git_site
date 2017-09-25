var converter = new showdown.Converter()
// converter.setOption('tables', true)
converter.setFlavor('github')

function md2html(mdText) {
//  var mdText = $('#mdText').html()
  var mdHtml = converter.makeHtml(mdText)
  // console.log('mdText=', mdText)
  // $('#mdHtml').html(mdHtml)
  document.getElementById('mdHtml').innerHTML = mdHtml
}

function show() {
  var file = window.location.hash.substring(1)
  console.log('file=', file)
  const req = new Request('./' + file, {method: 'GET', cache: 'reload'})
  fetch(req).then(function(response) {
    return response.text().then(function(text) {
      console.log('response.text() = '+ text)
      md2html(text)
    });
  }).catch(function(err) {
    alert(file + ' load error ! ' + err.message)
  })
  
  /*  
  $.ajax({
    url: file,
    success: function (text) {
//    $("#div1").html(result);
      md2html(text)
    }
  })
*/  
}

window.addEventListener('hashchange', show)
window.addEventListener("load", show)

// ------------------- side menu ---------------------
function openNav() {
    document.getElementById("sidemenu").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidemenu").style.width = "0";
}
