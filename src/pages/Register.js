export default function Register() {
  return (
    <>
      <h2 style={{ textAlign: "left", marginTop: "30px" }}>Register</h2>
      <div
        class="card"
        style={{
          width: "600px",
          height: "400px",
          backgroundColor: "white",
          padding: "50px",
        }}
      >
        <div class="card-body">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating">
            <input
              type="number"
              class="form-control"
              id="floatingNophone"
              placeholder="nophone"
            />
            <label for="floatingnumber">No Phone</label>
          </div>
          <div
            class="d-grid gap-2 col-6 mx-auto"
            style={{
              width: "465px",
              height: "50px",
              margin: "20px",
              borderRadius: "10px",
            }}
          >
            <button class="btn btn-dark" type="button">
              Register
            </button>
            <a
              class="link-offset-2 link-underline link-underline-opacity-0"
              href="/"
              style={{ textAlign: "right" }}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
