class WorkTools {
    constructor() {}
    equalHeights(className) {
        var div = document.getElementsByTagName("div");
        var tallest = 0;
        // Loop over matching divs
        for(i = 0; i < div.length; i++)
        {
            var ele = div[i];
            var eleHeight = ele.offsetHeight;
            tallest = (eleHeight>tallest ? eleHeight : tallest); /* look up ternary operator if you dont know what this is */
        }
        var findClass = document.getElementsByClassName(className);
        for(i = 1; i < findClass.length; i++)
        {
            findClass[i].style.height = tallest + "px";
        }
    }
}