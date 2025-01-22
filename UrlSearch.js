var UrlSearch = {
    globalURL:"",
    url:function (){
        return document.URL;
    },
    protocol:function (){
        var URL = this.url();
        return URL.substring(0,URL.indexOf("//")+2);
    },
    domin:function (){
        var URL = this.url();
        var name;
        if(this.protocol() == "file://"){
            name = URL.substring(URL.indexOf("//")+3,URL.length);
        }else{
            name = URL.substring(URL.indexOf("//")+2,URL.length);
        }

        if(name.indexOf("?") != -1){
            return name.substring(0,name.indexOf("?"));
        }else{
            return name.substring(0,name.indexOf("/"));
        }
    },
    allParams:function (){
        var URL = this.url();
        if(URL.indexOf("?") != -1){
            return URL.substring(URL.indexOf("?")+1,URL.length);
        }else{
            return URL;
        }
    },
    getParam:function (param){
        var all_params = this.allParams();
        var array = all_params.split("&");
        for(var i=0;i < array.length;i++){
            var array_2 = array[i].split("=");
            for(var e=0;e<array_2.length;e++){
                if(array_2[e] == param){
                    return array_2[1];
                }
            }
            
        }
    },
    setParam:function (key,value){
        this.globalURL += key + "=" + value + "&";
    },
    send:function (link){
        if(link != undefined){
            location.href = link + "?" + this.globalURL;
        }
    }
}