
    
    class HTMLElement{
     title = "title";
     header = "header";
     main = "main";
     footer = "footer";
     p = "p";
     a = "a";
     br = "br";
     button = "button";
     div = "div";
     h1 = "h1";
     h2 = "h2";
     h3 = "h3";
     h4 = "h4";
     h5 = "h5";
     img = "img";
     ol = "ol";
     li = "li";
     span = "span";
     table = "table";
     td = "td";
     th = "th";
     tr = "tr";
     table = "table";
     tbody = "tbody";
     audio = "audio";
     video = "video";
     source = "source";
     textarea = "textarea";
     select = "select";
     option = "option";
     form = "form";
     link = "link";
     YourSpesificElementName = "";
    }
    class elementProperties{
     className;
     id;
     href;
     src;
     width;
     height;
     alt;
    }
    class errorType{
        nullOrEmpty = "Element is null or empty"
    }
    
    function ElementCreator(elementName,elementProperties) {
        var ErrorType= new errorType();
        var htmlElement = new HTMLElement();
        if(!elementName)
        {
            return ErrorType.nullOrEmpty;
        }
        var element = document.createElement(elementName);
        element = basicAttributesControl(element,elementProperties);
        if(elementName ==htmlElement.a)
        {
            if(elementProperties.href)
            {
             element.href = elementProperties.href;
            }
           return element;
        }
        if(elementName == htmlElement.img)
        {
            if(elementProperties.src)
            {
             element.src = elementProperties.src;
            }
            if(elementProperties.width)
            {
             element.width = elementProperties.width;
            }
            if(elementProperties.height)
            {
             element.height = elementProperties.height;
            }
            if(elementProperties.alt)
            {
             element.alt = elementProperties.alt;
            }
           return element;
        }
    }

    function basicAttributesControl(element,elementProperties) {
        if(elementProperties.className){
            element.className = elementProperties.className;
        }
        if(elementProperties.id){
            element.id = elementProperties.id;
        }
        return element;
    }

    function deneme() {
        var elementnames= new HTMLElement();
        var nameelement = elementnames.img;

        var properties = new elementProperties();
        properties.alt = 'deneme';
        properties.src = 'deneme2';
        properties.height = '100';
        properties.width = '200';
        properties.className = 'classname'
        properties.source = 'dqwedqw';
        var x = ElementCreator(nameelement,properties);
        console.log(x);
    }