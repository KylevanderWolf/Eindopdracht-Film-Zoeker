let allMoviesBtn = document.getElementById("btn1")
let latestMoviesBtn = document.getElementById("btn2")
let avengersMoviesBtn = document.getElementById("btn3")
let xmenMoviesBtn = document.getElementById("btn4")
let princessMoviesBtn = document.getElementById("btn5")
let batmanMoviesBtn = document.getElementById("btn6")

//Create All Array Movies
let allMovies = movies.map(e => e)

//Create Array Latest Movies
let allLatestMovies = movies.map(e => e).filter(e => e.Year >= 2014)

//Create Array Avengers Movies
let allAvengerMovies = movies.map(e => e).filter(e => e.Title.includes("Avengers"))

//Create Array X-men Movies
let allXMovies = movies.map(e => e).filter(e => e.Title.includes("X-Men"))

//Create Array Princess Movies
let allPrincessMovies = movies.map(e => e).filter(e => e.Title.includes("Princess"))

//Create Array Batman Movies
let allBatmanMovies = movies.map(e => e).filter(e => e.Title.includes("Batman"))


//RadioButtons click, show selected movies
let btnArray = [allMoviesBtn, latestMoviesBtn, avengersMoviesBtn, xmenMoviesBtn, princessMoviesBtn, batmanMoviesBtn]
let checkedButton = () => {
    btnArray.map((e, i) => {
        e.addEventListener("click", () => {
            switch (i) {
                case 0:
                    return createCards(allMovies);
                case 1:
                    return createCards(allLatestMovies);
                case 2:
                    return createCards(allAvengerMovies);
                case 3:
                    return createCards(allXMovies);
                case 4:
                    return createCards(allPrincessMovies);
                case 5:
                    return createCards(allBatmanMovies)
                default:
                    return null;
            }
        })
    })
}
checkedButton()


//Create Elements based on clicked/checked radio Button in navbar
let createCards = (arrayMovieList) => {
    let movieList = document.getElementsByTagName("ul")[0]
    movieList.innerHTML = "";

    //Create All the Cards
    for (i = 0; i < arrayMovieList.length; i++) {

        //Create Card and apply Style
        let createCard = document.createElement('li');
        createCard.classList.add('moviesList-Card');

        //Create Link
        let createLink = document.createElement('a')
        createLink.href = "https://www.imdb.com/title/" + arrayMovieList[i].imdbID + "/";

        //Create IMG and apply Style
        let createImg = document.createElement('img')
        createImg.classList.add('img')
        createImg.src = arrayMovieList[i].Poster;

        //Create Title and apply Style
        let createTitle = document.createElement('h2')
        createTitle.classList.add('title')
        createTitle.innerHTML = arrayMovieList[i].Title;

        //Create year and apply Style
        let createYear = document.createElement('h3')
        createYear.classList.add('date')
        createYear.innerHTML = arrayMovieList[i].Year;

        //Create button and apply Style
        let createButton = document.createElement('button')
        createButton.classList.add('btn')
        createButton.innerHTML = "More info"

        //show button on hover card
        createCard.addEventListener("mouseenter", () => {
            createButton.classList.add('btnShow')
            createImg.classList.add('imgOpacity')
        })

        //hide button on hover card
        createCard.addEventListener("mouseleave", () => {
            createButton.classList.remove('btnShow')
            createImg.classList.remove('imgOpacity')
        })

        //Go to website onclick button
        createButton.addEventListener("click", () => {
            window.open(createLink.href);
        })

        //Append
        movieList.appendChild(createCard)
        createCard.appendChild(createImg)
        createCard.appendChild(createTitle)
        createCard.appendChild(createYear)
        createCard.appendChild(createLink)
        createCard.appendChild(createButton)
    }
}


//First buttons is checked , show all movies
let showAllMovies = () => {
    if (btnArray[0].checked) {
        createCards(allMovies);
    }
}
showAllMovies()



//Search Filter Movies
let SearchMovies = () => {
    let searchBtn = document.getElementById("searchBtn")
    searchBtn.addEventListener("click", () => {
        //Select Search Input
        let searchInput = document.getElementById("search")
        //Input search value
        inputValue = searchInput.value.toUpperCase()
        //check if input is in any of the movie titles
        let filter = movies.map(e => e).filter(e => e.Title.toUpperCase().includes(inputValue))
        if (filter.length >= 1) {
            //CreateCards
            createCards(filter);
        }
        else {
            nothingFoundMessage()
        }
    })
}
SearchMovies()


//Message if nothing is found
let nothingFoundMessage = () => {
    let movieList = document.getElementsByTagName("ul")[0]
    movieList.innerHTML = "";
    //Create message and apply Style
    let noMoviesFound = document.createElement('span');
    noMoviesFound.classList.add('message')
    noMoviesFound.innerHTML = "Sorry, no movies found!"
    movieList.appendChild(noMoviesFound)
}


