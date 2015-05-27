(function(){

    //riot拡張
    riot.event  = riot.observable();

    riot.getData = function(dom, name) {
        if(!document.createElement('div').dataset) {
            return dom.getAttribute('data-' + name);
        }
        return dom.dataset[name];
    }

    riot.createCollection = function(opts){
        var collection = riot.observable(), opts = opts || {};

        collection.remote = opts.remote;
        collection.params = '';
        collection.isReady = function(){
            return ( this.models && this.models.length > 0 );
        }

        collection.on('get', function(params){
            var co = this;
            if(!params) params = co.params;
            ajax.get(this.remote + '?' + params, function(res){
                var models = JSON.parse(res);
                co.models = models;
                co.trigger('updated');
            });
        });

        collection.on('patch', function(id, params){
            var co = this;
            if(!id || !params) return;
            ajax.post(this.remote + '/update/' + id, function(res){
                var models = JSON.parse(res);
                co.models = models;
                collection.trigger('get');
            }, params);
        });
        collection.trigger('get'); //あとでrouteと合わせてparamを連動するよう修正

        return collection;
    }

    riot.collections  = {
      records : riot.createCollection({remote: '/records'}),
      sections : riot.createCollection({remote: '/sections'}),
      subsections : riot.createCollection({remote: '/subsections'})
    }

    document.ready(function(){
        riot.mount('*');
//        riot.mount('todo', {
//              title: 'TODO A',
//              remote: '/static_pages/test/'
//        });
//        riot.mount('#todoB', 'todo', {
//              items: [
//                  {
//                      title: 'Avoid excessive coffeine',
//                      done: true
//                  }
//                ]
//        });
//        riot.mount('tabs');
    });
})()
