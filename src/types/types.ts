
//C'est normal que j'ai désactivé eslint ici les type sont  partagé dans tout le projet a chaque que vous typer
//metter eslint-disable-next-line @typescript-eslint/no-unused-vars pour éviter les erreurs

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type User = {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
};

