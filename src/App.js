import React, { Component, Fragment } from "react";
import logo from "./logo.png";
import imgPayPal from "./paypal.svg";
import imgOxxoPay from "./oxxopay.svg";
import imgCard from "./methods_statement_cards.png";
import "./App.css";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import { withAuthenticator } from 'aws-amplify-react';
import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
Analytics.record('myCustomEvent');


class App extends Component {

  componentDidMount() {
    Analytics.record('FIRST-EVENT-NAME');
 }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/productos/:id" component={Item} />
          <Route path="/paypal/success" component={PaypalSuccess} />
          <Route path="/paypal/error" component={PaypalError} />
          <Route path="/" exact strict component={Item} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

class PaypalSuccess extends Component {
  render() {
    return <p>Hola mundo</p>;
  }
}

class PaypalError extends Component {
  render() {
    return <p>Error en el pago</p>;
  }
}

export default withAuthenticator(App);

class Item extends Component {
  styles = {
    itemContainer: {
      display: "flex",
      height: "50rem",
      paddingTop: "5rem",
      paddingLeft: "15rem",
      paddingRight: "10rem"
    },
    navContainer: {
      position: "fixed",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "4rem",
      width: "100%",
      backgroundColor: "white",
      borderBottom: "1px solid rgba(0,0,0,.1)"
    },
    navLogo: {
      height: "80%"
    },
    navLinksContainer: {
      display: "flex",
      paddingRight: "4rem"
    },
    navLink: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "300",
      fontSize: "1.1rem",
      wordWrap: "break-word",
      textDecoration: "none",
      color: "inherit",
      marginRight: "1rem"
    },
    imageContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      height: "100%",
      flexGrow: 3
    },
    itemImage: {
      height: "80%",
      width: "auto"
    },
    detailsContainer: {
      paddingLeft: "6rem",
      paddingTop: "4rem",
      overflow: "auto",
      flexGrow: 7
    },
    title: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "300",
      fontSize: "2rem",
      wordWrap: "break-word"
    },
    description: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "400",
      fontSize: "1.1rem",
      wordWrap: "break-word"
    },
    details: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "300",
      fontSize: "1.1rem",
      wordWrap: "break-word"
    },
    price: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontSize: "1.2rem",
      fontWeight: "400",
      wordWrap: "break-word"
    },
    shipping: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontSize: "1.3rem",
      fontWeight: "500",
      wordWrap: "break-word"
    }
  };
  products = [
    {
      id: "1",
      title: "Pastel de zanahoria",
      description:
        "¿Quién habría adivinado que una piña, compota de manzana y zanahorias podrían ser parte de un postre tan sabroso?",
      price: 300.0,
      image:
        "https://t1.uc.ltmcdn.com/images/5/3/7/img_como_hacer_un_pastel_de_zanahoria_25735_600.jpg",
      shipping: "No shipping"
    },
    {
      id: "2",
      title: "Torta Rellena Cremosa",
      description:
        "¡La combinación perfecta del dulce en un pastel esponjoso y sabroso!",
      price: 200.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGd5dGLJWS70NdaGbZGiNoUDjBr-5PI4SXDU-9-kW9bfv9lC_",
      shipping: "No shipping"
    },
    {
      id: "3",
      title: "Cheesecake de caramelo",
      description: "Cheesecake con un toque dulce y fácil de hacer",
      price: 280.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3faog-9VCSsIC6BW-0EuDXlaCiLMuZcdAYpywqkvJ8CWHjY36",
      shipping: "No shipping"
    },
    {
      id: "producto1",
      title: "Camisa 1",
      description: "Descripción",
      price: 100.0,
      image:
        "https://vangogh.teespring.com/v3/image/oGRwVyoQlFfX-UDpYHwSIjMuDa0/480/560.jpg",
      shipping: "No shipping"
    },
    {
      id: "producto2",
      title: "Camisa 2",
      description: "Descripción",
      price: 100.0,
      image:
        "https://vangogh.teespring.com/v3/image/oGRwVyoQlFfX-UDpYHwSIjMuDa0/480/560.jpg",
      shipping: "No shipping"
    },
    {
      id: "cat",
      title: "My Cat Can Live A Better Life Shirt",
      description:
        "I Work Hard So My Cat Can Live A Better Life Shirt, Funny Cat Shirt",
      price: 100.0,
      image:
        "https://vangogh.teespring.com/v3/image/oGRwVyoQlFfX-UDpYHwSIjMuDa0/480/560.jpg",
      shipping: `Orders are printed and shipped when the time expires or earlier.
              You can expect your package to arrive 10 - 13 business days after
              the product prints. Expedited or Rush shipping may be available
              depending upon the product(s) selected and the destination
              country. Shipping costs start at: $3.99 for the first apparel item
              and $2.00 for each additional apparel item. Products are fulfilled
              in the US`
    }
  ];
  render() {
    const { styles, products } = this;
    const product = products.find(p => p.id == this.props.match.params.id) || {
      ...products[Math.floor(Math.random() * products.length)]
    };
    return (
      <Fragment>
        <div style={styles.navContainer}>
          <img style={styles.navLogo} src={logo} alt="calithecat" />
          <div style={styles.navLinksContainer}>
            <a style={styles.navLink} href="http://lareposteriagdl.com/">
              INICIO
            </a>
            <a
              style={styles.navLink}
              href="http://lareposteriagdl.com/contact/"
            >
              CONTACTO
            </a>
            <a style={styles.navLink} href="http://lareposteriagdl.com/about/">
              ACERCA DE
            </a>
          </div>
        </div>
        <div style={styles.itemContainer}>
          <div style={styles.imageContainer}>
            <img style={styles.img} src={product.image} alt="Product Image" />
          </div>
          <div style={styles.detailsContainer}>
            <h1 style={styles.title}>{product.title}</h1>
            <p style={styles.price}>${product.price} MXN</p>
            <p style={styles.shipping}>Shipping Info</p>
            <p style={styles.description}>{product.description}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
