import React from 'react';
import Layout from '@theme/Layout';
import HomePage from '@site/src/components/HomePage';
import IntroPage from '@site/src/components/IntroPage';
import SkillPage from '../components/SkillPage';
import ProjectPage from '../components/ProjectPage';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <main>
        <HomePage />
        <IntroPage/>
        <SkillPage/>
        <ProjectPage/>
      </main>
    </Layout>
  );
}
