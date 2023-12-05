import React from "react";
import Link from "@docusaurus/Link";

import styles from "./index.module.css";
export default function NewPost() {
  return (
    <>
      <section className={styles.container}>
        <label className={styles.title}>New Post</label>
        <section className={styles.flexContainer}>
            <div className={styles.banner}>
                <Link to="/blog/proj_5">
                    <img src="/portfolio/img/banner/cafelist_06.jpg" alt="new post banner"></img>
                </Link>
            </div>
        </section>
      </section>
    </>
  );
}
