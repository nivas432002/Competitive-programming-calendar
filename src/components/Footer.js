import { Link } from "react-router-dom";
import { FaPalette } from "react-icons/fa";
import {
  BiCodeAlt,
  BiInfoCircle,
  BiCopyright,
  BiData,
  BiCrown,
} from "react-icons/bi";

import { StyledFooter } from "./Footer.styled";

import Modal from "./Modal";

import { useState } from "react";
import { palettes } from "../styles/palettes";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <StyledFooter className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <Link className="footer__link" to="contest/about">
            <BiInfoCircle />
            about
          </Link>
        </li>
        <li className="footer__item">
          <Link className="footer__link" to="contest/">
            <BiCrown />
            competitions
          </Link>
        </li>
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://kontests.net/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiData />
            API
          </a>
        </li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item modal-btn">
          {isModalOpen && (
            <Modal
              data={palettes}
              closeModal={() => {
                setIsModalOpen(false);
              }}
            />
          )}
          <a
            className="footer__link"
            href="#"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <FaPalette />
            theme
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://github.com/nivas432002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiCopyright />
            nivas432002
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
