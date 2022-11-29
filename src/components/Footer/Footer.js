import github from "../../recources/img/github.svg";
import telegram from "../../recources/img/telegram.svg";
import linkedIn from "../../recources/img/linkedin.svg";

import "./style.scss"

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__links">
          <div>
            <p>
              created by <br/>Alexandr Savitsky
            </p>
          </div>
          <ul class="social-links">
            <li>
              <a target="_blank" href="https://github.com/AlexSavitsky">
                <img src={github} alt="github" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://.me/Sava_Savitsky">
                <img src={telegram} alt="telegram" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/alexandr-savitsky/">
                <img src={linkedIn} alt="linkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
