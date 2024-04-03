import "../globals.css";
import "./page.css";
import Image from "next/image";

export default function hw2() {
  return (
    <main className="container column">
      <div className="top column">
        <ul className="top_list row">
          <li>
            <h1>+10</h1>
            <h4>Happy Client</h4>
          </li>
          <li>
            <h1>+20</h1>
            <h4>Work Success</h4>
          </li>
          <li>
            <h1>+10</h1>
            <h4>Offline Office</h4>
          </li>
          <li>
            <h1>+20</h1>
            <h4>Awwards Winning</h4>
          </li>
        </ul>
      </div>
      <div className="buttun column">
        <Image
          src={"/images/תמונה1.png"}
          alt={"no image"}
          width={80}
          height={80}
        />
        <div className="text column">
          <h2 className="text_center">
            Looking to reimagine your space?
            <br />
            Lets get to work!
          </h2>
          <h3 className="text_center">SAMPURASUN@STUDIOWANGUN.COM</h3>
        </div>
        <div className="buttun_list row">
          <div className="left">
            <div className="left_top">
              <h5>Call Us</h5>
              <h4>+62 8212 999 1326</h4>
            </div>
            <div className="left_buttun">
              <h5>Discover Us</h5>
              <h4>INSTAGRAM</h4>
            </div>
          </div>
          <div className="right">
            <div className="right_top">
              <h6>Address</h6>
              <h5>
                PT POT Dharma Kultiva JI Pesantren No 39A, Bandung, Indonesia
                40191
              </h5>
            </div>
            <div className="right_buttun">
              <h6>Habitat Design Group</h6>
              <h5>
                POT Branding House TABO Construct Indonesia, Studio Mahardika
              </h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
