const libraryDiv = document.querySelector(".library");
const newBookButton = document.querySelector(".new-book-button");
const formDiv = document.querySelector(".new-book-form");
const form = document.querySelector("#new-book-form");
const submitBookButton = document.querySelector(".submit-book-button");

const myLibrary = [
    {
        id: crypto.randomUUID(),
        title: "boop",
        author: "beep",
        numOfPages: 10
    },
    {
        id: crypto.randomUUID(),
        title: "boop",
        author: "bop",
        numOfPages: 10
    },
    {
        id: crypto.randomUUID(),
        title: "bap",
        author: "beep",
        numOfPages: 10
    },
];

function Book(id, title, author, numOfPages) {
    this.id = id,
        this.title = title,
        this.author = author,
        this.numOfPages = numOfPages
}

newBookButton.addEventListener("click", () => {
    displayForm();
})

function displayForm() {
    formDiv.removeAttribute("hidden");
}

function addBookToLibrary(title, author, numOfPages) {
    myLibrary.push(new Book(crypto.randomUUID(), title, author, numOfPages));
}

function displayLibrary() {
    while (libraryDiv.lastChild) {
        libraryDiv.removeChild(libraryDiv.lastChild);
    }
    let libraryLength = myLibrary.length;
    for (let i = 0; i < libraryLength; i++) {
        let newDiv = document.createElement('div');
        let newP = document.createElement('p');
        newP.textContent = myLibrary[i].title + " by " + myLibrary[i].author + ". page count: " + myLibrary[i].numOfPages + ". id: " + myLibrary[i].id;
        newDiv.appendChild(newP);
        libraryDiv.appendChild(newDiv);
    }
}
displayLibrary();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputBookTitle = document.querySelector("#book-title").value;
    const inputBookAuthor = document.querySelector("#book-author").value;
    const inputBookNumOfPages = document.querySelector("#num-of-pages").value;
    addBookToLibrary(
        title = inputBookTitle,
        author = inputBookAuthor,
        numOfPages = inputBookNumOfPages
    )
    console.log(myLibrary);
    displayLibrary();
})