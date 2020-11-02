function masonry(n){
    const container = document.querySelector("main");
    if(n>0)
    {
        for (let i = 0; i < n; i++) {
            const div = document.createElement('div');
            div.style.backgroundImage = `url(https://picsum.photos/500/500?random=${i})`;
            container.appendChild(div);
        }
    }
    else{
        const div = document.createElement('div');
        div.innerHTML ='<span class="ms-error" >ERROR: the number of tiles should be greater than 0</span>';
        container.appendChild(div);
    }
}

window.addEventListener('load',() => {
    masonry(15);
})