var updatePage = document.getElementsByClassName("updatePage");
const submitNewPage =document.getElementsByClassName("fa-check")
var trash = document.getElementsByClassName("fa-book");
Array.from(updatePage).forEach(function(element) {
      element.addEventListener('click', function(){
        const div = this.parentNode.childNodes[11].childNodes[1].classList.toggle("hidden")
   
      });
});

Array.from(submitNewPage).forEach(function(element) {
  element.addEventListener('click', function(){
    
    const msg = this.parentNode.parentNode.parentNode.parentNode.childNodes[1].innerText
    const pageNum = parseFloat(this.parentNode.parentNode.parentNode.parentNode.childNodes[11].childNodes[1].childNodes[1].value)
    //$0.parentNode.parentNode.childNodes[11].childNodes[0].value
    
    fetch('personal', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'msg': msg,
        'pageNum':pageNum
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
