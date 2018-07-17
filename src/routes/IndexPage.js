import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Table, Popconfirm, Button ,Carousel} from 'antd';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      <Button>123</Button>
    <Carousel autoplay>
      <div className={styles.slick_slide}><h3>1</h3></div>
      <div className={styles.slick_slide}><h3>2</h3></div>
      <div className={styles.slick_slide}><h3>3</h3></div>
      <div className={styles.slick_slide}><h3>4</h3></div>
    </Carousel>
    </div>
  );
}

function vipdetailmodel({auditList}){
  return {auditList}
}

export default connect(vipdetailmodel)(IndexPage);
