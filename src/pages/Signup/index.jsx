import './signup.css';
import { Button, Form, Stack } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <section id="welcome back">
        <div className="w-screen h-screen grid grid-rows-2 text-black md:grid-cols-2">
          {/* page kiri */}
          <div className="w-full h-full pagekiri md:h-screen">
            <Stack gap={3}>
              <div className="p-1">
                <img
                  src="/icon_persegi.svg"
                  alt=""
                />
              </div>
              <div className="p-1">
                <b>Sign Up</b>
              </div>
              <div className="p-1">
                <h6>Name*</h6>
              </div>
              <div className="p-2">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="Name"
                      placeholder="Nama Lengakap"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="p-1">
                <h6>Email*</h6>
              </div>
              <div className="p-2 ">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="Email"
                      placeholder="Contoh:johndee@gmail.com"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="p-1">
                <h6>Create Password*</h6>
              </div>
              <div className="p-2 ">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="password"
                      placeholder="6+ karakter"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="d-grid gap-2 signinbutton">
                <Button>Sign Up</Button>
              </div>
              <div className="p-2">
                <h1>
                  Already have an account?<a href="http://localhost:5173/login">Sign In here</a>
                </h1>
              </div>
            </Stack>
          </div>

          {/* page kanan */}
          <div className="w-full h-full pagekanan md:h-screen">
            <div className="typography">Binar Car Rental</div>
            <img
              className="absolute botton-0 right-0"
              src="/landingpage.jpg"
              alt="landingpage"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
