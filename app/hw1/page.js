import "../globals.css";
import "./page.css";
import Image from "next/image";

export default function hw1() {
  return (
    <main className="container column">
      <div className="navbar row">
        <div className="left">
            <button>studio <br /> wangun</button>
        </div>
        <div className="right">
            <button>Work</button>
            <button>About</button>
            </div>
      </div>
      <div className="text column">
        <h1>Merancang</h1>
        <h1>kenyamanan dan</h1>
        <h1>ekspresi ruang bangun</h1>
      </div>
      <div className="my_img">
        <Image
          src={"/images/Screenshot 2024-03-31 104147.png"}
          alt={"no image"}
          width={250}
          height={250}
        />
      </div>
    </main>
  );
}
