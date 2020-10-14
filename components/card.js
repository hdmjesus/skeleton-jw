import sass from "../styles/style.scss";

class Card extends React.Component {
  render() {
    return (
      <section className={sass.card__container}>
        <a className={sass.card__img}><img src={this.props.img} /></a>
        <h2 className={sass.card__title}>{this.props.title}</h2>
        <p className={sass.card__excerpt}>{this.props.excerpt}</p>
      </section>
    );
  }
}

export default Card;
