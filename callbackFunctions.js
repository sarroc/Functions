// callbacks are simply functions that are passed into other functions to be invoked within the outer function.

function child() {
    alert('Hey, wanna play?')
}

setTimeout(child, 2000)
// executes funtion after a set amount of time, in this case 5000 ms

// anonymous function
setTimeout(function () {
    alert("Let's get going!");
}, 5000);


// anonymous function
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    alert("Good to see you here!")
})
