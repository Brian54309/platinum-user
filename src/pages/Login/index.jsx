import { useNavigate } from 'react-router-dom';
import './login.css';
import { Button, Form, Stack } from 'react-bootstrap';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  console.log(formData);
  const onInputChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  };

  const storeToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api-car-rental.binaracademy.org/customer/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const user = await response.json();
        storeToLocalStorage(user);
        navigate('/');
      } else {
        throw new Error(response.statusText);
      }
    } catch (e) {
      console.error(e);
    }
  };

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
                      onChange={onInputChange}
                      name="email"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="p-1">
                <h6>Password</h6>
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
                      onChange={onInputChange}
                      name="password"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="d-grid gap-2 signinbutton">
                <Button onClick={onHandleSubmit}>Sign In</Button>
              </div>
              <div className="p-2">
                <h1>
                  Don’t have an account?<a href="http://localhost:5173/Signup">Sign Up for free</a>
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
