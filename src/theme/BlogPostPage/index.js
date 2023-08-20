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
				<div className={`${styles.col} ${styles.col4}`}>
					<label className={styles.title}>{props.content.metadata.title}</label>
					<MDXProvider components={MDXComponents}>
						<BlogPostContents />
					</MDXProvider>
				</div>

				<div className={`${styles.col} ${styles.col1}`}>
					<TOCInline
						// Only show h2 and h4 headings
						toc={toc.filter((node) => node.level === 2 || node.level === 4)}
						minHeadingLevel={2}
						// Show h4 headings in addition to the default h2 and h3 headings
						maxHeadingLevel={4}
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