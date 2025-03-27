const libraryDiv = document.querySelector(".library");
const newBookButton = document.querySelector(".new-book-button");
const formDiv = document.querySelector(".new-book-form");
const form = document.querySelector("#new-book-form");
const submitBookButton = document.querySelector(".submit-book-button");

const myLibrary = [
    // {
    //     id: crypto.randomUUID(),
    //     title: "boop",
    //     author: "beep",
    //     numOfPages: 10
    // },
    // {
    //     id: crypto.randomUUID(),
    //     title: "boop",
    //     author: "bop",
    //     numOfPages: 10
    // },
    // {
    //     id: crypto.randomUUID(),
    //     title: "bap",
    //     author: "beep",
    //     numOfPages: 10
    // },
];

function Book(id, title, author, numOfPages, readStatus) {
    this.id = id,
        this.title = title,
        this.author = author,
        this.numOfPages = numOfPages.Book,
        this.readStatus = readStatus;
}

Book.prototype.hasBeenRead = function() {
    console.log('inside hasbeenread');
    console.log(this.readStatus);
    if (this.readStatus == 'read') {
        this.readStatus = "unread"
    } else {
        this.readStatus = 'read';
    }
}

newBookButton.addEventListener("click", () => {
    displayForm();
})

function displayForm() {
    formDiv.removeAttribute("hidden");
}

function addBookToLibrary(title, author, numOfPages) {
    myLibrary.push(new Book(crypto.randomUUID(), title, author, numOfPages, 'read'));
}

function displayLibrary() {
    while (libraryDiv.lastChild) {
        libraryDiv.removeChild(libraryDiv.lastChild);
    }
    let libraryLength = myLibrary.length;
    for (let i = 0; i < libraryLength; i++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute("class", "new-book-div");
        newDiv.setAttribute("data-index", myLibrary[i].id);

        let newP = document.createElement('p');
        newP.textContent = myLibrary[i].title + " by " + myLibrary[i].author + ". page count: " + myLibrary[i].numOfPages + ". id: " + myLibrary[i].id + " | read status: " + myLibrary[i].readStatus;

        let removeBookButton = document.createElement('button');
        removeBookButton.addEventListener("click", () => {
            removeBook(myLibrary[i].id);
        })
        removeBookButton.textContent = "remove";

        let readButton = document.createElement('button');
        readButton.textContent = 'toggle read/unread';
        readButton.addEventListener("click", () => {
            toggleReadStatus(myLibrary[i].id);
        })

        newDiv.appendChild(newP);
        newDiv.appendChild(removeBookButton);
        newDiv.appendChild(readButton);
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
    displayLibrary();
    document.querySelector("#book-title").value = "";
    document.querySelector("#book-author").value = "";
    document.querySelector("#num-of-pages").value = "";
    formDiv.setAttribute('hidden', 'hidden');
})

function removeBook(id) {
    let libraryLength = myLibrary.length;
    for (let i = 0; i < libraryLength; i++) {
        if (id === myLibrary[i].id) {
            myLibrary.splice(myLibrary.indexOf(i), 1);
            displayLibrary();
        }
    }
}

function toggleReadStatus(id) {
    let libraryLength = myLibrary.length;
    for (let i = 0; i < libraryLength; i++) {
        if (id === myLibrary[i].id) {
            myLibrary[i].hasBeenRead();
            displayLibrary();
        }
    }
}