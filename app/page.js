import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import Pic01 from "../public/pic01.png";
import Pic02 from "../public/pic02.png";
import Pic03 from "../public/pic03.png";
import Pic04 from "../public/pic04.png";
import Pic05 from "../public/pic05.png";
import Pic06 from "../public/pic06.jpeg";



export default function Home() {
  return (
   <div>
      <h1 className="my-6 text-2xl text-center">ミミコ ID・パスワード一覧</h1>

      <div className="flex flex-wrap justify-center gap-6 m-4">
        <article className={styles.parent}>
          <Link href="./eneos" className="block flex flex-col items-center gap-2 w-full h-full">
          <Image src={Pic01} alt="pic"></Image>
          <p>ENEOS</p>
          </Link>
        </article>

        <article className={styles.parent}>
          <Link href="#" className="block flex flex-col items-center gap-2 w-full h-full">
          <Image src={Pic02} alt="pic"></Image>
          <p>イオン</p>
          </Link>
        </article>

        <article className={styles.parent}>
          <Link href="#" className="block flex flex-col items-center gap-2 w-full h-full">
          <Image src={Pic03} alt="pic"></Image>
          <p>楽天</p>
          </Link>
        </article>

        <article className={styles.parent}>
          <Link href="#" className="block flex flex-col items-center gap-2 w-full h-full">
          <Image src={Pic04} alt="pic"></Image>
          <p>サンドラッグ</p>
          </Link>
        </article>

        <article className={styles.parent}>
          <Link href="#" className="block flex flex-col items-center gap-2 w-full h-full">
          <Image src={Pic05} alt="pic"></Image>
          <p>アマゾン</p>
          </Link>
        </article>

        <article className={styles.parent}>
          <Link href="#" className="block flex flex-col items-center gap-2 w-full h-full">
          <Image src={Pic06} alt="pic"></Image>
          <p>中部電力</p>
          <p className="text-xs">(カテエネ)</p>
          </Link>
        </article>
      </div>
   </div>
  );
}
