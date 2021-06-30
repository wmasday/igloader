import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Button, Form } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';
import React from 'react';

export default class App extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.get("/api", {
        params: {
          url: user.name
        }
      }
    )
      .then(res => {
        window.location = res.data;
      })
  }

  render() {
  return (
    <Container>
      <div className="text-center align-self-center my-5">
           <div className="headText">>_Igloader</div>
           <div className="teks-2 text-center mx-auto mt-2 pb-5  w-75">Download Instagram Reels, Video, & IGTV</div>
         <Form className="w-75 mx-auto my-5" onSubmit={this.handleSubmit}>
            <Form.Group controlId="postUrl">
               <Form.Control type="text" name="name" onChange={this.handleChange} className="mx-auto border-0 rounded shadow-sm bg-light" placeholder="Url"/>
               <Button variant="dark" className="my-4" type="submit">Find</Button>
            </Form.Group>
         </Form>

         <div className="mx-auto text-justify teks-2 w-75 my-4">
            This tool was made when I was bored, and just for fun. Made using ReactJs & ExpressJs. With several modules like axios, react bootstrap, react bootstrap icons. FYI: this website was made using my phone (Xiaomi Redmi Note 7😎). Installing React & ExpressJs to slim coding in Termux.
         </div>
         <div className="contact" id="contact">
            <Button variant="none" className="d-inline text-dark bi bi-instagram" href="https://instagram.com/akuhidayatt"></Button>
            <Button variant="none" className="d-inline text-dark bi bi-github" href="https://github.com/akuhidayat"></Button>
            <Button variant="none" className="d-inline text-dark bi bi-twitter" href="https://twitter.com/yatjago?s=08"></Button>
            <Button variant="none" className="d-inline text-dark bi bi-telegram" href="https://t.me/chatajakak"></Button>
            <Button variant="none" className="d-inline text-dark bi bi-envelope" href="mailto:hiidayt18@gmail.com"></Button>
         </div>
         <footer className="text-center p-2 mb-4 mt-5">Dibuat Dengan Xiaomi Redmi Note 7ðŸ˜Ž
            <br/>
            Copyright Â© Aku Hidayat 2021 â€¢ All rights reserved.
         </footer>
      </div>
    </Container>
    )
  }
}
