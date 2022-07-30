/*
    https://www.figma.com/file/h0MKma9TTWzGOMQ9Ia6ROW/Oldagram?node-id=0%3A1    

create first post
    use semantic html
    add hover effect to icons

    push:
        use js to render out all three posts
        increase likes when double clicking the post

    extra push:
        search bar
        carousel
*/

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// connect HTML elements
const slides = document.getElementsByClassName("carousel-item");
let headerName = document.getElementById('headerName');
let headerLocation = document.getElementById('headerLocation');
let likes = document.getElementById('likes');
let post = document.getElementById('usernameWords');
let username = document.getElementById("username");
let comment = document.getElementById('postWords');
let heartIcon = document.getElementById('heartIcon');
let commentIcon = document.getElementById('commentIcon');
let messageIcon = document.getElementById('messageIcon');
let picPoster = document.getElementById("picPoster");
let postPic = document.getElementById("postPic");

//set variables
let slidePosition = 0;
const totalSlides = posts.length;

//add event listeners   
    //double click to add likes
heartIcon.addEventListener("dblclick", () => {
    likesCount++;
    console.log(likesCount);
    likes.textContent = `${likesCount} likes`
    
})

document.getElementById("carousel-button-next").addEventListener('click', moveToNextSlide);
document.getElementById("carousel-button-prev").addEventListener('click', moveToPrevSlide);


function populatePost(){

        likesCount = posts[slidePosition].likes;
        likes.classList.add("bold");
        likes.textContent = `${likesCount} likes`;

        username.innerHTML = `${posts[slidePosition].username}`;
        username.classList.add("bold");
        comment.textContent = `${posts[slidePosition].comment}`;
        post.innerHTML= `<b>${username.innerHTML} </b>   ${comment.textContent}`;

        headerName.innerHTML= `<b>${posts[slidePosition].name} </b>`;
        headerLocation.textContent = posts[slidePosition].location;


        picPoster.src = `${posts[slidePosition].avatar}`;
        postPic.src = `${posts[slidePosition].post}`;
}

populatePost()

function moveToNextSlide(){
console.log(slidePosition)
console.log(totalSlides);
    if(slidePosition === totalSlides - 1){
        slidePosition = 0;
        console.log(slidePosition)
    } else {
        slidePosition++;
        console.log(slidePosition)
    }
    populatePost()
}

function moveToPrevSlide(){
    if(slidePosition === 0 ){
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    populatePost()
}