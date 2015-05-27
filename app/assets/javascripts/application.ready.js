(function(){
    var isReady = false,
        ready = function(func){
            ready.set(func);
        };

    ready.set = function (func) {
        if(!this.list) {
            this.list = [];
            this.list.push(func);

            if (document.readyState === "complete") {
                setTimeout( this.run );

            } else if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", completed, false);
                window.addEventListener("load", completed, false);

            } else {
                document.attachEvent("onreadystatechange", completed);
                window.attachEvent("onload", completed);
                var top = false;

                try {
                    top = window.frameElement == null && document.documentElement;
                } catch (e) {}

                if (top && top.doScroll) {
                    (function doScrollCheck() {
                        if (!isReady) {
                            try {
                                top.doScroll("left");
                            } catch (e) {
                                return setTimeout(doScrollCheck, 50);
                            }

                            detach();
                            this.run();
                        }
                    })();
                }
            }

        } else if (this.list.length === 0) {
            func();

        } else {
            this.list.push(func);
        }
    };

    ready.run = function(){
        if ( !document.body ) {
            return setTimeout( this.run );
        }

        isReady = true;

        while( this.list.length > 0 ){
            this.list.shift()();
        }
    }

    function completed(){
        if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
            document.ready.run();
            detach();
        }
    }

    function detach() {
        if ( document.addEventListener ) {
            document.removeEventListener( "DOMContentLoaded", completed, false );
            window.removeEventListener( "load", completed, false );

        } else {
            document.detachEvent( "onreadystatechange", completed );
            window.detachEvent( "onload", completed );
        }
    }

    document.ready = ready;
})();
