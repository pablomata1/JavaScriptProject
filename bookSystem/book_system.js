let books =  [];


//The function retrieves the values entered by the user in the HTML input fields for book name, author name, book description, and number of pages. 
//It uses document.getElementById('elementId').value to access these values. The code then checks if all fields have been filled (bookName, authorName, bookDescription) and ensures that pagesNumber is a valid number (using !isNaN(pagesNumber)). 
//If any field is empty or if pagesNumber is not a valid number, an alert prompts the user to fill in all fields correctly.
//Then creates a book and adds it to the books array.
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
        if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
            const book = {
                name: bookName,
                authorName: authorName,
                bookDescription: bookDescription,
                pagesNumber: pagesNumber
            };
            books.push(book);
            showbooks();
            //resets all input fields
            clearInputs();
        } else {
                alert('Please fill in all fields correctly.');
        }
}

//Delete book
function deleteBook(index){
    books.splice(index, 1);
    showbooks();
}

//Display all books 
function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="deleteBook(${index})">Delete</button>`
    );
    
    document.getElementById('books').innerHTML = booksDiv.join('');
   

}

//Clear inputs by setting inputs to ''
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}