import hero from "../../assets/denise-jans-Lq6rcifGjOU-unsplash.jpg";

export default function Home() {
  return (
    <div>
      <img src={hero} alt="film" />
      <p>
        Photo by{" "}
        <a href="https://unsplash.com/@dmjdenise?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Denise Jans
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/movie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </div>
  );
}
