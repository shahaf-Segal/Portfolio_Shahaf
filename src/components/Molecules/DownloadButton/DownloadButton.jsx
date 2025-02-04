import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import Styles from "./DownloadButton.module.scss";

const DownloadButton = ({ FileLink, text = "Download" }) => {
  return (
    <div className={Styles.download_button}>
      <a href={FileLink} download>
        {text}
        <FontAwesomeIcon icon={faDownload} />
      </a>
    </div>
  );
};

DownloadButton.propTypes = {
  text: PropTypes.string,
  FileLink: PropTypes.string.isRequired,
};

export default DownloadButton;
