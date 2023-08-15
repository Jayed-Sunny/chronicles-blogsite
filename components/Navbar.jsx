import Link from "next/link";
import routes from "@/data/routes.json";
import styles from "@/styles/component/navbar.module.css";
import Navlink from "./Navlink";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div>
                <Link href="/" className={styles.brand}>
                    <h1>Chronicles</h1>
                </Link>
                <div className={styles.navLinks} style={{ marginLeft: "auto" }}>
                    <div>
                        {routes.map((route) => {
                            return <Navlink key={`${route.title}-link`} route={route} />;
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
