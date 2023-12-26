import React from "react";
import Link from "next/link";
import FooterUpper from "@/src/components/layouts/footer/upper/page";
import Container from "@/src/components/elements/container/page";

export default function Page() {
  return (
    <div className="footer">
      <FooterUpper />
      <div className="inner">
        <Container>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="widgets">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link href="">Home</Link>
                </li>
                <li>
                  <Link href="">Mac OS</Link>
                </li>
                <li>
                  <Link href="">Contact</Link>
                </li>
                <li>
                  <Link href="">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="">Laptops</Link>
                </li>
                <li>
                  <Link href="">About Us</Link>
                </li>
              </ul>
            </div>
            <div className="widgets">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link href="">Home</Link>
                </li>
                <li>
                  <Link href="">Mac OS</Link>
                </li>
                <li>
                  <Link href="">Contact</Link>
                </li>
                <li>
                  <Link href="">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="">Laptops</Link>
                </li>
                <li>
                  <Link href="">About Us</Link>
                </li>
              </ul>
            </div>
            <div className="widgets">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link href="">Home</Link>
                </li>
                <li>
                  <Link href="">Mac OS</Link>
                </li>
                <li>
                  <Link href="">Contact</Link>
                </li>
                <li>
                  <Link href="">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="">Laptops</Link>
                </li>
                <li>
                  <Link href="">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="footerarea">
          <Container>
            <div className="footerarea-inner">
              <div className="copyright">
                <span>
                  Design by
                  <Link href="/" title="" rel="dofollow">
                    Muzammil Safdar
                  </Link>
                </span>
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">
                      About Us
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                  <Link href="/">
                      RTL Version
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
