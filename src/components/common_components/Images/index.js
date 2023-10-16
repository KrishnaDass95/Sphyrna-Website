import "./image.css";

export const Image = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img class="image-main" src={src} alt={alt} />
    </div>
  );
};
