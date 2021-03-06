riot.tag2('todo', '<h3>{title}</h3> <ul> <li each="{items}" class="{hidden: hidden}"> <label class="{completed: done}"> <input type="checkbox" __checked="{done}" onclick="{parent.toggle}"> {title} </label> </li> </ul> <form onsubmit="{add}"> <input type="checkbox" __checked="{checked}" onclick="{check}"><input name="input" onkeyup="{edit}"> <button __disabled="{!text}">Add #{items.length + 1}</button> </form>', '', '', function(opts) {

        var self = this;

        self.disabled = true

        self.title = opts.title || 'TODO LISTS'
        self.items = opts.items || []
        self.checked = false

        if( opts.remote ){
          ajax.get(opts.remote, function(res){
              var tasks = JSON.parse(res);
              self.addAjax(tasks);
          });
        }

        this.edit = function(e) {
            self.text = e.target.value
        }.bind(this)

        this.addAjax = function(tasks) {
            tasks.forEach(function(task){
                self.items.push({
                    title: task.title,
                    done: task.done
                });
            });
            self.update();
        }.bind(this)

        this.add = function(e) {
            if (self.text) {
                self.items.push({
                    title: self.text,
                    done: self.checked
                })
                self.text = self.input.value = ''
            }
        }.bind(this)

        this.check = function(e) {
            self.checked = !self.checked
            return true
        }.bind(this)

        this.toggle = function(e) {
            var item = e.item
            item.done = !item.done
            return true
        }.bind(this)

});