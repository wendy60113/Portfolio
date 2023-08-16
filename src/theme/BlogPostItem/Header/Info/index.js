import React from 'react';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

function Img({image}){
  return (
      <img src={image} alt='test' />
  )
}
export default function BlogPostItemHeaderInfo({className}) {
  const {metadata} = useBlogPost();
  const {frontMatter} = metadata;
  return (
    <div className={styles.proj}>
      <Img image={frontMatter.test_image}/>
    </div>
  );
}
