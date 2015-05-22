<todo>

    <h3>{ opts.title }</h3>

    <ul>
        <li each={ items } class={ hidden: hidden }>
            <label class={ completed: done }>
                <input type="checkbox" checked={ done } onclick={ parent.toggle }> { title }
            </label>
        </li>
    </ul>

    <form onsubmit={ add }>
        <input type="checkbox" checked={ checked } onclick={ check }><input name="input" onkeyup={ edit }>
        <button disabled={ !text }>Add #{ items.length + 1 }</button>
    </form>

    <script>
        
        var self = this;
        
        self.disabled = true

        self.items = opts.items
        self.checked = false
        
        
        Scatter.get('/static_pages/test/', '', function(xhr){
            var tasks = JSON.parse(xhr.response);
            self.addAjax(tasks);
        });
        

        edit(e) {
            self.text = e.target.value
        }
        
        addAjax(tasks) {
            tasks.forEach(function(task){
                self.items.push({
                    title: task.title,
                    done: task.done
                });
            });
            self.update();
        }

        add(e) {
            if (self.text) {
                self.items.push({
                    title: self.text,
                    done: self.checked
                })
                self.text = self.input.value = ''
            }
        }
        
        check(e) {
            self.checked = !self.checked
            return true
        }

        toggle(e) {
            var item = e.item
            item.done = !item.done
            return true
        }
        
        riot.observable(this);
        
        self.on('open', function() {
            self.items.push({
                title: 'open',
                done: true
            });
        });

    </script>

</todo>