import { PageContainer } from '@ant-design/pro-components';
import {  } from 'antd';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import styles from './index.less';

import FaceDetector from '@/components/FaceDetector';

const FaceComparison: React.FC = () => {
  const intl = useIntl();

  return (
    <PageContainer>
      <div className={styles.container}>
        <div className={styles.faceDetectorContainer}>
          <FaceDetector></FaceDetector>
          <FaceDetector></FaceDetector>
        </div>
      </div>
    </PageContainer>
  );
};

export default FaceComparison;
