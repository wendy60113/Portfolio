import React from 'react';
import Layout from '@theme/Layout';
import HomePage from '@site/src/components/HomePage';
import IntroPage from '@site/src/components/IntroPage';
import SkillPage from '../components/SkillPage';
import ProjectPage from '../components/ProjectPage';
import NewPost from '../components/NewPost';
import styles from './index.module.css';
import { useRef } from "react";
import { useLocation } from "react-router-dom";



export default function Home() {
  const ref = useRef(null)
  const location = useLocation()
  const scrollingTop = (event) => {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start"
      });
    };
    if(location.hash=='#ref'&&ref.current!=null){
      scrollingTop()
    }
  return (
    <Layout>
      <main>
        <HomePage />
        <NewPost/>
        <IntroPage/>
        <SkillPage ref={ref} />
        <ProjectPage/>
      </main>
    </Layout>
  );
}
