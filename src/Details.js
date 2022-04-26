import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();

    this.setState({
      loading: false,
      name: json.pets[0].name,
      animal: json.pets[0].animal,
      id: json.pets[0].id,
      breed: json.pets[0].breed,
      city: json.pets[0].city,
      state: json.pets[0].state,
      images: json.pets[0].images,
      description: json.pets[0].description,
    });

    // OR ->
    // this.setState(
    //   Object.assign(
    //     {
    //       loading: false,
    //     },
    //     json.pets[0]
    //   )
    // );
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    console.log(this.state);
    const { animal, breed, city, state, description, name, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
