// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){log.history = log.history || [];log.history.push(arguments);if(this.console) {var args = arguments, newarr;args.callee = args.callee.caller;newarr = [].slice.call(args);if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.


    //funcion para mostrar en pantalla en ancho y alto de la ventana y el container
     function echoSize() {
            $("#anchov").text($(window).width())
            $("#altov").text($(window).height())
            $("#anchoc").text($("#container").width())
            $("#altoc").text($("#container").height())
            $("body").css({"height":"100%"});
        }
       //----funciones de geolocalizacion---------//
       function mostrarMapa(posicion){
           var lat = posicion.coords.latitude;
           var lon = posicion.coords.longitude;
           $("#status").text("Estas ubicado en: "+lat+", "+lon);
       }
       function errorMapa(err){
           $("#status").text("No nos diste permisos");
       }
       function geolocalizar(){
           $("#status").text("Te Estamos buscando...");
           navigator.geolocation.getCurrentPosition(mostrarMapa,errorMapa);
       }
       //----finalizan funciones de geolocalizacion---------//
       
       function main(){
           geolocalizar();//llamar a la geolocalizacion
           echoSize();//escuchar un cambio del tamaño del navegador
           window.onresize = echoSize; //escuchar cada que se redimensione el navegador
       }
       $(document).on("ready",main)//llamado a la primera funcion en ejecutarse
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       