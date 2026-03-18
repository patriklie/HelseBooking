import { Link } from "react-router";

const Card = ({ children, icon, style, image, title, button, buttonIcon, buttonLink }) => {
  return (
    <>
      <div className="card-container" style={style}>
        {icon && <div className="icon-container">{icon}</div>}
        <div className="card-title-small">{title}</div>
        {children}

        <div className="graphic-container">
          <div className="box"></div>
        </div>
        {image && <img src={image} className="card-image" />}

				{button && <Link to={buttonLink} className="card-btn">{button}{buttonIcon}</Link>}
      </div>
    </>
  );
};

export default Card;
