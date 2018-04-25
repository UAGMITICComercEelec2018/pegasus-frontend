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
      id: "item1",
      title: "Pastel de zanahoria",
      description:
        "¿Quién habría adivinado que una piña, compota de manzana y zanahorias podrían ser parte de un postre tan sabroso?",
      price: 300.0,
      image:
        "https://t1.uc.ltmcdn.com/images/5/3/7/img_como_hacer_un_pastel_de_zanahoria_25735_600.jpg",
      shipping: "No shipping"
    },
    {
      id: "item2",
      title: "Torta Rellena Cremosa",
      description:
        "¡La combinación perfecta del dulce en un pastel esponjoso y sabroso!",
      price: 200.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGd5dGLJWS70NdaGbZGiNoUDjBr-5PI4SXDU-9-kW9bfv9lC_",
      shipping: "No shipping"
    },
    {
      id: "item3",
      title: "Cheesecake de caramelo",
      description: "Cheesecake con un toque dulce y fácil de hacer",
      price: 280.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3faog-9VCSsIC6BW-0EuDXlaCiLMuZcdAYpywqkvJ8CWHjY36",
      shipping: "No shipping"
    },
    {
      id: "item4",
      title: "Cheesecake de fresa",
      description: "Hecho con fresas naturales, simplemente irresistible.",
      price: 100.0,
      image:
        "http://www.lareposteriagdl.com/wp-content/uploads/2018/04/Cheesecake-fresa.jpg",
      shipping: "No shipping"
    },
    {
      id: "item5",
      title: "Cupcake de fresa con vainilla",
      description: "Un cupcake perfecto para regalarlo en una ocación especial",
      price: 30.0,
      image:
        "http://www.lareposteriagdl.com/wp-content/uploads/2018/04/Cupcake-con-vainilla.jpeg",
      shipping: "No shipping"
    },
    {
      id: "item6",
      title: "Muffin con de vainilla con nuez",
      description:
        "Una convinación que no podrás dejar comer",
      price: 30.0,
      image:
        "https://i.ytimg.com/vi/zJpV7PvgqNc/hqdefault.jpg",
      shipping: "No shipping"
    },
    {
      id: "item7",
      title: "Cupcake de vainilla",
      description: "El favorito de todos",
      price: 25.0,
      image:
        "http://www.lareposteriagdl.com/wp-content/uploads/2018/04/Cupcakes-vainilla.jpg",
      shipping: "No shipping"
    },
    {
      id: "item8",
      title: "Pastel de chocolate",
      description: "Simplemente un sabor irresistible.",
      price: 50.0,
      image:
        "http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/10/pasteldechocolatevegano.jpg",
      shipping: "No shipping"
    },
    {
      id: "item9",
      title: "Pay de guayaba",
      description: "No puedes decir que no te gusta hasta que pruebes nuestros",
      price: 60.0,
      image:
        "http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/09/paydeguayabasinhorno.jpg",
      shipping: "No shipping"
    },
    {
      id: "item10",
      title: "Flan napolitano",
      description: "Un flan tradicional que no podrás dejar de comer",
      price: 20.0,
      image:
        "https://i.ytimg.com/vi/wA2NR3O3b1s/hqdefault.jpg",
      shipping: "No shipping"
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
