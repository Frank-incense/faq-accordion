const dropdown = document.getElementsByClassName('dropbar');

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function() {
        this.classList.toggle("active")

        const panel = document.getElementsByClassName("info");
        const plus = document.getElementsByClassName("plus")
        if (panel[i].style.display === 'block') {
            console.log('im here')
            panel[i].style.display = 'none';
            plus[i].style.background =  'url(assets/images/icon-plus.svg)';
        } else {
            panel[i].style.display = "block";
            plus[i].style.background =  'url(assets/images/icon-minus.svg)';
        }
    })
}