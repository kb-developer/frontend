class WorkTools {
    constructor() {}
    equalHeights(className,el) {
        let col = document.querySelectorAll(el);
        let tallest = 0;
        // Loop over matching divs
        for(i = 0; i < col.length; i++)
        {
            let element = col[i];
            let elementHeight = element.offsetHeight;
            tallest = (elementHeight>tallest ? elementHeight : tallest); /* look up ternary operator if you dont know what this is */
            element.style.height = tallest;
        }
    }
}