import React from 'react';
import BlogLayout from '@theme/Layout';
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "@theme/MDXComponents"
import TOCInline from '@theme/TOCInline';

import styles from './index.module.css'
function BlogPostPageContent(props) {
	
	const { content:BlogPostContents } = props;
	console.log(props)
	const toc = props.content.toc
	
	return (
		<BlogLayout>
			<article className={styles.container}>
				<div className={styles.banner}>
					<img src={props.content.frontMatter.banner_img}></img>
				</div>
				<div className={`${styles.col} ${styles.col4}`}>
					<label className={styles.title}>{props.content.metadata.title}</label>
					<div className={styles.tag}>
						{props.content.frontMatter.tags.map((item,idx)=>(
							<span key={'tag-'+idx}>{item}</span>
						))}
					</div>
					<div className={styles.info}>
						<span className={styles.title}>日期</span>
						<span className={styles.content}>{props.content.metadata.formattedDate}</span>
					</div>
					<div className={styles.info}>
						<span className={styles.title}>負責項目</span>
						<span className={styles.content}>{props.content.frontMatter.description}</span>
					</div>
					<div className={styles.info}>
						<span className={styles.title}>使用工具</span>
						<span className={styles.content}>{props.content.frontMatter.tool}</span>
					</div>
					<div className={styles.mdxContent}>
						<MDXProvider components={MDXComponents}>
							<BlogPostContents />
						</MDXProvider>
					</div>
				</div>

					<div className={`${styles.col} ${styles.col1}`}>
						<TOCInline
							// Only show h2 and h4 headings
							toc={toc.filter((node) => node.level === 2 || node.level === 3)}
							minHeadingLevel={2}
							// Show h4 headings in addition to the default h2 and h3 headings
							maxHeadingLevel={3}
						/>
					</div>
			</article>
		</BlogLayout>
	);
}

export default function BlogPostPage(props) {
	return (
        <>
            <BlogPostPageContent {...props} />
        </>
	);
}