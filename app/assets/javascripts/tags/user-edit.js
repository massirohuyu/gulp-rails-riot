riot.tag('user-edit', '<div class="table user-edit"> <div class="thead"> <div class="tr"> <div class="th" each="{ title, i in titles }">{ title }</div> </div> </div> <div class="tbody"> <div class="tr" each="{ this.users.models }"> <div class="td"> { this.id } </div> <div class="td"> { this.name } </div> <div class="td"> </div> <div class="td"> { this.using_books } </div> <div class="td"> </div> <div class="td"> </div> </div> </div> </div>', function(opts) {
        
        this.users = riot.collections.users;
        console.log(this.users.models);
      
        this.titles = ['id', 'name', 'password', 'using books', 'using credit', 'using cards'];

              
        var self = this;
      
        self.users.on('updated', function(){
            self.update();
        });

    
});