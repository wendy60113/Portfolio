import React from 'react';
import BlogLayout from '@theme/Layout';
import Link from '@docusaurus/Link';
// import BlogListPaginator from '@theme/BlogListPaginator';
// import BlogPostItems from '@theme/BlogPostItems';

import styles from './index.module.css'
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
function BlogListPageContent(props) {
	const { metadata, items } = props;
	console.log(items)
	return (
		<>
		<section className={styles.container}>
			<section className={styles.flexContainer}>
				{items.map((item,idx)=>(
					<Link to={item.content.metadata.permalink}  key={'proj-'+idx} className={styles.col}>
						<div className={styles.proj}>
							<img src={item.content.frontMatter.test_image} alt='test'></img>
						</div>
						<div className={styles.proj}>
							<Tag tags={item.content.frontMatter.tags}/>
						</div>
						<div className={styles.proj} style={{margin:'2% 0 0 0'}}>
							<label>{item.content.frontMatter.title}</label>
						</div>
					</Link>
				))}
			</section>
		</section>
			{/* <div className={style.BlogPostItems}>

				<BlogPostItems items={items} />
			</div> */}
		</>
	);
}

export default function BlogListPage(props) {
	return (
        <>
		<BlogLayout>
            <BlogListPageContent {...props} />
		</BlogLayout>
        </>
	);
}
