import Styles from "./Footnote.module.scss";

function Footnote() {
  return (
    <div className={Styles.footnote}>
      <p>
        &copy; {new Date().getFullYear()} Shahaf Segal. All rights reserved.
      </p>
      <p>
        Built with <a href="https://reactjs.org/">React</a>, available on{" "}
        <a href="https://github.com/shahaf-segal/Portfolio_Shahaf">GitHub</a>
      </p>
    </div>
  );
}

export default Footnote;
