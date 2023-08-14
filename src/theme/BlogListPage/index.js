import React from 'react';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
// import BlogPostItems from '@theme/BlogPostItems';

import style from './index.module.css'

function BlogListPageContent(props) {
	const { metadata, items } = props;
	console.log(items)
	return (
		<BlogLayout>
			<div className={style.BlogPostItems}>

				{/* <BlogPostItems items={items} /> */}
			</div>
			<BlogListPaginator metadata={metadata} />
		</BlogLayout>
	);
}

export default function BlogListPage(props) {
	return (
        <>
            <BlogListPageContent {...props} />
        </>
	);
}
