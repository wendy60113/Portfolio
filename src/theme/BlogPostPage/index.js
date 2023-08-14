import React from 'react';
import BlogLayout from '@theme/BlogLayout';
// import BlogListPaginator from '@theme/BlogListPaginator'

// import BlogPostItems from '@theme/BlogPostItem';
function BlogPostPageContent(props) {
	const { content } = props;
    const { metadata } = content
	console.log(metadata)
	return (
		<BlogLayout>
			{/* <div>
				<BlogPostItems items={items} />
			</div>
			<BlogListPaginator metadata={metadata} /> */}
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