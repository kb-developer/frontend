class WorkTools {
    constructor() {}
    equalHeights(className,el) {
        let col = document.querySelectorAll(el);
        let tallest = 0;

        for(i = 0; i < col.length; i++)
        {
            let element = col[i];
            let elementHeight = element.offsetHeight;
            tallest = (elementHeight>tallest ? elementHeight : tallest);
            element.style.height = tallest;
        }
    }
}