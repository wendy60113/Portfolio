import React from 'react';
import Layout from '@theme/Layout';
import HomePage from '@site/src/components/HomePage';
import IntroPage from '@site/src/components/IntroPage';
import SkillPage from '../components/SkillPage';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

import styles from './index.module.css';

export default function Home(props) {
  const { siteConfig } = useDocusaurusContext()
  const blog = siteConfig.customFields.blog
  console.log(blog)
  return (
    <Layout>
      <main>
        <HomePage />
        <IntroPage/>
        <SkillPage/>
      </main>
    </Layout>
  );
}
