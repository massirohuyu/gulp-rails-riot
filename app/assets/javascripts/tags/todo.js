riot.tag('todo', '<h3>{ opts.title }</h3> <ul> <li each="{ items }" class="{ hidden: hidden }"> <label class="{ completed: done }"> <input type="checkbox" __checked="{ done }" onclick="{ parent.toggle }"> { title } </label> </li> </ul> <form onsubmit="{ add }"> <input type="checkbox" __checked="{ checked }" onclick="{ check }"><input name="input" onkeyup="{ edit }"> <button __disabled="{ !text }">Add #{ items.length + 1 }</button> </form>', function(opts) {
        this.disabled = true

        this.items = opts.items
        this.checked = false


        this.edit = function(e) {
            this.text = e.target.value
        }.bind(this);

        this.add = function(e) {
            if (this.text) {
                this.items.push({
                    title: this.text,
                    done: this.checked
                })
                this.text = this.input.value = ''
            }
        }.bind(this);

        this.check = function(e) {
            this.checked = !this.checked
            return true
        }.bind(this);

        this.toggle = function(e) {
            var item = e.item
            item.done = !item.done
            return true
        }.bind(this);

});
