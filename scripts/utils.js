const button = document.getElementById('infoButton');

button.addEventListener('click', function (){
    
    const myInfo = document.getElementById('myInfo');

    if (myInfo.classList.contains('d-none')){
        myInfo.classList.remove('d-none');
        button.textContent = 'Close Info';
    }
    else
    {
        myInfo.classList.add('d-none');
        button.textContent = 'Info and Experience';
    }

});