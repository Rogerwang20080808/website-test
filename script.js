(function(){
    var doc = document,
        style=doc.createElement('style'),
        Timmer = null;
    style.innerHTML = setStyle();
    doc.getElementsByTagName('head')[0].appendChild(style);
  
    /*屏幕翻转*/
    window.addEventListener(window['onorientationchange'] ? 'orientationchange' : 'resize', function(){
        clearTimeout(Timmer);
        Timmer = setTimeout(function(){
            style.innerHTML = setStyle();
        },200);
  
    }, false);
  
    /*生成样式*/
    function setStyle(){
        var w = doc.documentElement.clientWidth;
        return '#LM-wall320{width: 320px;-webkit-transform:scale('+w/320+');-webkit-transform-origin: left top;}';
    }
  