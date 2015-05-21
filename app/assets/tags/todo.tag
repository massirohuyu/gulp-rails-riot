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
        this.disabled = true

        this.items = opts.items
        this.checked = false
        

        edit(e) {
            this.text = e.target.value
        }

        add(e) {
            if (this.text) {
                this.items.push({
                    title: this.text,
                    done: this.checked
                })
                this.text = this.input.value = ''
            }
        }
        
        check(e) {
            this.checked = !this.checked
            return true
        }

        toggle(e) {
            var item = e.item
            item.done = !item.done
            return true
        }
    </script>

</todo>