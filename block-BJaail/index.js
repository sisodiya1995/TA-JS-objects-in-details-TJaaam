class BookList {

 constructor (root ,book = []){
    this.Books = book ;
    this.root = root;
 }

 add(Title, Author ,Isbn) {

 let book = new Book(Title ,Author,Isbn);
    this.Books.push(book);
    this.CreateUI();
    return this.Books;
 }

 handleDelete (id){
  let index = this.Books.findIndex((book) =>book.id === id);
   this.Books.splice(index, 1);
   this.CreateUI();
 }
 CreateUI (){
     this.root.innerHTML = "";
     this.Books.forEach(book => {
         let ui = book.CreateUI()
         ui.querySelector("span").addEventListener("click" ,this.handleDelete.bind(this,book.id))
         this.root.append(ui);
     });
 }

}



class Book {

   constructor(Title , Author , Isbn){
     this.Title = Title;
     this.Author =Author;
     this.Isbn = Isbn; 
     this.id = `id -${Date.now()}`;

   }

   CreateUI() {

       let li = document.createElement('li');
       let title =document.createElement('p');
       title.innerText = this.Title;
       let Author =document.createElement('p');
        Author.innerText = this.Author;
       let Isbn =document.createElement('p');
         Isbn.innerText = this.Isbn;
       let del = document.createElement('span');
           del.innerText = "x";
         li.append(title ,Author ,Isbn ,del)
        
         return li;

   }

}

let input =document.querySelectorAll("input");
let myBook = new BookList(document.querySelector(".booklist"));

myBook.add("dad" ,"dfsg" ,"ffsg");
myBook.add("dad" ,"dfsg" ,"ffsg");

function handleSubmit(event){
 event.preventDefault();
 
 this.Title = title.value;
 this.Author =author.value;
 this.Isbn = isbn.value; 
 
 myBook.add(this.Title , this.Author ,this.Isbn );
   title.value = "";
   author.value =  "";
   isbn.value = "";


}

let form = document.querySelector('form');
let title = form.elements[0];
let author = form.elements[1];
let isbn = form.elements[2];

form.addEventListener("submit" ,this.handleSubmit.bind(this));