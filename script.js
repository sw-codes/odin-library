let libraryDiv = document.querySelector(".library");

const myLibrary = [
    {
        id: crypto.randomUUID(),
        title: "boop",
        author: "beep"
    },
    {
        id: crypto.randomUUID(),
        title: "boop",
        author: "bop"
    },
    {
        id: crypto.randomUUID(),
        title: "bap",
        author: "beep"
    },
];

function Book(id, title, author) {
    this.id = id,
    this.title = title,
    this.author = author
}

function addBookToLibrary(title, author) {
    myLibrary.push(new Book(crypto.randomUUID(), title, author));
}

function displayLibrary() {
    let libraryLength = myLibrary.length;
    for (let i = 0; i < libraryLength; i++) {
        let newP = document.createElement('p');
        newP.textContent = myLibrary[i].title + " by " + myLibrary[i].author + ". id: " + myLibrary[i].id;
        libraryDiv.appendChild(newP);
    }
}
displayLibrary();