const book ={

            title : 'Javascript / cypress Tutorials',
            description : 'my new book',
            numberOfPages : 8,
            author : 'paich',
            reading : true,
            books : [
              {
                 title : 'book1',
                 description : 'my new book 1',
                 numberOfPages : 9,
                 author : 'frank',
                 reading : true,

              },

             {
                 title : 'book2',
                 description : 'my new book 2',
                 numberOfPages : 10,
                 author : 'steve',
                 reading : false,

              },

             {
                 title : 'book3',
                 description : 'my new book 3',
                 numberOfPages : 11,
                 author : 'tola',
                 reading : true,

              }
           ],
   }
        
                for(let i=0; i<book.books.length;  i=i+1){
      
                // books[i] this gets all the obects in the array that are true 
                if(book.reading===true && book.books[i].reading===true){
      
                  console.log(book.books[i]);
                }
               
                
             }
