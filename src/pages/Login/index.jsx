import './login.css';
import { Button, Form, Stack } from 'react-bootstrap';

const Login = () => {
  return (
    <section>
      <div className="w-screen h-screen grid grid-rows-2 text-black md:grid-cols-2">
        {/* page kiri */}
        <div className="w-full h-full pagekiri md:h-screen">
          <Stack gap={3}>
            <div className="p-1">
              <Button variant="primary">Primary</Button>
            </div>
            <div className="p-1">
              <b>Welcome Back!</b>
            </div>
            <div className="p-1">
              <h6>Email</h6>
            </div>
            <div className="p-2">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="p-1">
              <h6>Password</h6>
            </div>
            <div className="p-2">
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
  );
};

export default Login;
