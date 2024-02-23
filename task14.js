const books = {
        title : 'Javascript / cypress Tutorials',
        description : 'my new book',
        numberOfPages : 8,
        author : 'obinna',
        reading : true,
        toggleReadingStatus : function(){
        if(books.reading===true){
        books.reading = false
        }
        else{
        books.reading = true
        }
        }
        }
        books.toggleReadingStatus();
        console.log(books.reading);
