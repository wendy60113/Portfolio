import React from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

function Tag({tags}){
  const tagLenght = tags.length
  const displayTags = tags.slice(0,2)
  return(
      <>
      {displayTags.map((tag,index)=>(
          <span key={'tag-'+index}>{tag.label}</span>
      ))}
      {tagLenght>2?<span>+{tagLenght-2}</span>:''}
      </>
  )
}

export default function BlogPostItemHeaderTitle({className}) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {permalink, title, tags} = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  console.log(tags)
  return (
    <>
    <TitleHeading className={`${styles.title} ${className}`} itemProp="headline">
      {isBlogPostPage ? (
        title
      ) : (
        <Link itemProp="url" to={permalink}>
          {title}
        </Link>
      )}
    </TitleHeading>

    <Tag tags={tags}/>
    </>
  );
}
