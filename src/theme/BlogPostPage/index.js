import React from 'react';
import BlogLayout from '@theme/BlogLayout';
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "@theme/MDXComponents"


// import BlogListPaginator from '@theme/BlogListPaginator'

// import BlogPostItems from '@theme/BlogPostItem';
function BlogPostPageContent(props) {
	const { content:BlogPostContents } = props;
	// const { metadata } = BlogPostContents
		console.log(props)
	return (
		<BlogLayout>
			{/* <div>
				<BlogPostItems items={items} />
			</div>
			<BlogListPaginator metadata={metadata} /> */}
			<article>
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