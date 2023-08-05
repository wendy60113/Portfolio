import React from 'react';
import Layout from '@theme/Layout';
import HomePage from '@site/src/components/HomePage';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
