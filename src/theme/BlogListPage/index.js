import React,{ useState,useEffect } from 'react';
import BlogLayout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { BsCheck } from "react-icons/bs";
import queryString from "query-string";

// import BlogListPaginator from '@theme/BlogListPaginator';
// import BlogPostItems from '@theme/BlogPostItems';

import styles from './index.module.css'

function useQuery() {
    const parsed = queryString.parse(window.location.search);
	return parsed
}

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
function TagBtn({tag,selectList,handleClick}){
	const isSelect = selectList.includes(tag.text)
	return(
		<>
			<div className={`${styles.tagBtn} ${isSelect?styles.tagBtnActive:styles.tagBtnOriginal}`} onClick={() => handleClick(tag.text)}>
				{isSelect?(<span  className={styles.tagBtnIcon}><BsCheck/> </span>):null}
				<span>{tag.text}</span>
			</div>
		</>
	)
}

function BlogListPageContent(props) {
	const { metadata, items } = props;
	const { siteConfig } = useDocusaurusContext();
	const tag = siteConfig.customFields.tag;

	//tag篩選
	let initialSelectList=[]
	let queryParams = useQuery() 
	if(Object.keys(queryParams).length==0){
		initialSelectList = tag.map(item => item.text);
	}else{
		initialSelectList.push(queryParams.tag)
	}
	const [selectList, setSelectList] = useState(initialSelectList)
	const [filterItem, setFilterItem] = useState(items);
	useEffect(() => {
		const filterItems = () => {
		  setFilterItem(items.filter(item =>
			item.content.metadata.tags.some(tag => selectList.includes(tag.label))
		  ));
		};
	
		filterItems();
	  }, [selectList]);

	function handleClick(val) {
		if(selectList.includes(val)){
			setSelectList(list=>list.filter(item=>item!=val))
		}else{
			setSelectList([...selectList,val])
		}
	}
	return (
		<>
		<section className={styles.container}>
			<section className={styles.flexContainer}>
				{tag.map((tags,idx)=>(
					<TagBtn key={'tag-'+idx} tag={tags} handleClick={handleClick} selectList={selectList}/>
				))}
			</section>
			<section className={styles.flexContainer}>
				{filterItem.map((item,idx)=>(
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
