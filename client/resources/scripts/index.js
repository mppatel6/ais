let app = document.getElementById("app")

async function handleOnLoad(){
    let html = `
    <div class="my-5">
        <div class="p-5 text-center bg-body-tertiary">
        <div class="container py-5">
            <h1 class="text-body-emphasis">Your Health Hub!</h1>
            <p class="col-lg-8 mx-auto lead">
            Some text about the features we offer any why we're unique blah blah blah...
            </p>
            <button class ="btn btn-primary" href="signup.html"><a href="signup.html" class="nav-link">Sign-up!</a></button>
            <button class = "btn btn-secondary" href="signin.html"><a href="signin.html" class="nav-link">Login!</a></button>
        </div>
        </div>
    </div>`

    document.getElementById('app').innerHTML = html;
}