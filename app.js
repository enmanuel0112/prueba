const menu = document.getElementById('Menu-lateral', ),  show = document.getElementById('aside-bar');
const Delete = document.getElementById('hidden'), back = document.getElementById('aside-bar');
  



    menu.addEventListener('click',() =>{
        show.classList.toggle('show')
    });

    Delete.addEventListener('click',() =>{
        back.classList.toggle('back')
    });
  