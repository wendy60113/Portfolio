import React from 'react';
import BlogLayout from '@theme/Layout';
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "@theme/MDXComponents"

import styles from './index.module.css'
function BlogPostPageContent(props) {
	const { content:BlogPostContents } = props;
		console.log(props)
	return (
		<BlogLayout>
			<article className={styles.container}>
				<label className={styles.title}>{props.content.metadata.title}</label>
				<MDXProvider components={MDXComponents}>
					<BlogPostContents />
				</MDXProvider>
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