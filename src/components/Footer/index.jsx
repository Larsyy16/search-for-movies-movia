import "./style.scss";
export default function Footer({ theme }) {
  return (
    <footer className={`${theme === "dark" ? "dark" : "light"}`}>
      <p>
        {" "}
        <i>Developed by Larsyy</i>
      </p>
    </footer>
  );
}
