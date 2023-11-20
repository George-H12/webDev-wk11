
let theData;
let theBookData;
let theColor;
let bookTitle;
let authorName;
let theString;
let theTxt = document.getElementById("output");
let generateButton = document.getElementById("generate")
generateButton.addEventListener('click',generateResults);

function preload(){
    theData = loadJSON('crayola.json')
    theBookData = loadJSON('books.json')
}


function setup(){
    noLoop();
    noCanvas();
    console.log(theData.colors)
    console.log(theBookData.books)
}

function generateResults(){
    let theRandomColor = random(theData.colors)
    let theRandomBook = random(theBookData.books)
    theColor = theRandomColor.hex;
    bookTitle = theRandomBook.title;
    authorName = theRandomBook.author;
    document.body.style.backgroundColor = theColor;
    theString = "Title of Book: " + bookTitle + "<br><br> Author: " + authorName;
    theTxt.innerHTML = theString;
}