let app = document.getElementById("app")

function handleOnLoad(){
    let html = `
    <div class="container">
    <div class="my-5">
        <div class="p-5 text-center bg-body-tertiary rounded">
        <div class="container py-5">
        <h1 class="display-3 fw-bold">Welcome to Beam</h1>
        <h3 class="fw-normal text-muted mb-3">The all in one mental health app!</h3>
        <div class="d-flex gap-3 justify-content-center lead fw-normal">
        <button class ="btn btn-primary" href="signup.html"><a href="signup.html" class="nav-link">Sign-up!</a></button>
        <button class = "btn btn-secondary" href="signin.html"><a href="signin.html" class="nav-link">Login!</a></button>
      </div>
            </div>
        </div>
    </div>
    </div>`

    document.getElementById('app').innerHTML = html;
}