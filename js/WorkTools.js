class WorkTools {
    constructor() {}
    equalHeights(className,el) {
        let div = document.querySelectorAll(el);
        let tallest = 0;
        // Loop over matching divs
        for(i = 0; i < div.length; i++)
        {
            let element = div[i];
            let elementHeight = element.offsetHeight;
            tallest = (elementHeight>tallest ? elementHeight : tallest); /* look up ternary operator if you dont know what this is */
        }
        let findClass = document.getElementsByClassName(className);
        for(i = 1; i < findClass.length; i++)
        {
            findClass[i].style.height = tallest + "px";
        }
    }
}