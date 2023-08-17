import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Link from '@docusaurus/Link';

import styles from './index.module.css';
export default function ProjectPage() {
  const { siteConfig } = useDocusaurusContext()
  const blog = siteConfig.customFields.blog
  function Tag({tags}){
    const tagLenght = tags.length
    const displayTags = tags.slice(0,2)
    return(
        <>
        {displayTags.map((tag,index)=>(
            <span key={'tag-'+index}>{tag}</span>
        ))}
        {tagLenght>2?<span>+{tagLenght-2}</span>:''}
        </>
    )
  }
  return (
    <>
    <section className={styles.container}>
        <label className={styles.title}>專案</label>
        <section className={styles.flexContainer}>
            {blog.map((item,idx)=>(
                <Link key={'proj-'+idx} className={styles.col} to={item.url}>
                    <div className={styles.proj}>
                        <img src={item.test_image} alt='test'></img>
                    </div>
                    <div className={styles.proj}>
                        <Tag tags={item.tags}/>
                    </div>
                    <div className={styles.proj} style={{margin:'2% 0 0 0'}}>
                        <label>{item.title}</label>
                    </div>
                </Link>
            ))}
        </section>
    </section>
    </>
  );
}
