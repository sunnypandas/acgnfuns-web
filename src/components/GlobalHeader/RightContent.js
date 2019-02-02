import React, { PureComponent } from 'react';
import { formatMessage } from 'umi/locale';
import router from 'umi/router';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';


export default class GlobalHeaderRight extends PureComponent {

  render() {
    const {
      theme,
    } = this.props;
    let className = styles.right;
    if (theme === 'dark') {
      className = `${styles.right}  ${styles.dark}`;
    }
    return (
      <div className={className}>
        <HeaderSearch
          className={`${styles.action} ${styles.search}`}
          placeholder={formatMessage({ id: 'component.globalHeader.search' })}
          // dataSource={[]}
          onSearch={value => {
            console.log('input', value); // eslint-disable-line
          }}
          onPressEnter={value => {
            router.push('/MediaSearchList?keyword='.concat(value));
            // const windowReference = window.open();
            // new Promise(((resolve) => {
            //     setTimeout(() => resolve('MediaSearchList?keyword='.concat(value)), 1);
            //   }
            // )).then((result) => {
            //   if (windowReference === null || typeof(windowReference)==='undefined'){
            //     alert('窗口无法打开，请设置你的浏览器允许弹出窗口。')
            //   } else {
            //     windowReference.location = result;
            //   }
            // });
          }}
        />
      </div>
    );
  }
}
