if(rangeElement = document.querySelector('.input-range input[type=range]')){
    rangeElement.addEventListener('mousemove', function(){
        let label = document.querySelector('.input-range label.value');
        if(label){
            label.innerText = this.value;
        }
    });
}
