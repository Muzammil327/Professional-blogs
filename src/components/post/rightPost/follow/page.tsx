import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function RightPostFollow() {
  return (
    <div className="rightpost">
      <div className="title">
        <h3>Follow Us</h3>
      </div>
      <div className="follow">
        <ul>
          <li className="bg-blue-600 hover:bg-blue-500">
            <Link
              href="/"
              rel="noopener noreferrer"
              target="_blank"
              title="facebook"
            >
              <span className="icon">
                <FaFacebook />{" "}
              </span>
              <span className="text">Facebook</span>
            </Link>
          </li>
          <li className="bg-sky-600 hover:bg-sky-500">
            <a
              href="/"
              rel="noopener noreferrer"
              target="_blank"
              title="twitter"
            >
              <span className="icon">
                <FaTwitter />{" "}
              </span>
              <span className="text">Twitter</span>
            </a>
          </li>
          <li className="youtube link-2 bg-red-600 hover:bg-red-500">
            <a
              className="fa-youtube btn"
              href=""
              rel="noopener noreferrer"
              target="_blank"
              title="youtube"
            >
              <span className="icon">
                <FaYoutube />{" "}
              </span>
              <span className="text">YouTube</span>
            </a>
          </li>
          <li className="bg-cyan-600 hover:bg-cyan-500">
            <a
              href=""
              rel="noopener noreferrer"
              target="_blank"
              title="instagram"
            >
              <span className="icon">
                <FaInstagram />{" "}
              </span>

              <span className="text">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
