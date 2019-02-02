import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, List } from 'antd';
import Link from 'umi/link';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { mediaListTransTo } from '@/utils/utils';
import styles from '../Common.less';

const NUM = 60;
@connect(({ acgn, loading }) => ({
  acgn,
  loading: loading.models.acgn,
}))
class AnimationBangumiList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mediaList: [],
      totalElements: 0,
    };
  }

  componentDidMount() {
    this.getData(0);
  }

  getData (value) {
    console.log('getData...')
    this.setState({mediaList: []});
    const { dispatch } = this.props;
    dispatch({
      type: 'acgn/animationBangumiListFetch',
      payload: {
        page: value,
        size: NUM,
      },
    }).then(()=>{
      const {
        acgn,
      } = this.props;
      this.setState({ mediaList: mediaListTransTo(acgn.animationBangumiList.content) });
      this.setState({totalElements :acgn.animationBangumiList.totalElements})
    });
  }

  render() {
    const {
      loading,
    } = this.props;
    const { mediaList, totalElements } = this.state;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: NUM,
      total: totalElements,
      onChange: (page) => {
        this.getData(page -1);
      },
    };
    const list = mediaList ? (
      <List
        rowKey="id"
        loading={loading}
        pagination={paginationProps}
        grid={{ gutter: 24, lg: 6, md: 4, sm: 3, xs: 2 }}
        dataSource={mediaList}
        renderItem={item =>
          (
            <List.Item key={item.url}>
              <Card
                className={styles.card}
                hoverable
                cover={<img className={styles.listImgHeight} alt={item.name} src={item.img} />}
              >
                <Card.Meta
                  style={{textAlign: 'center'}}
                  title={<Link to={"/AnimationBangumi?url=".concat(item.url)} target="_blank">{item.name}</Link>}
                />
                <div className={styles.cardItemContent}>
                  <span>{item.updateTime}</span>
                </div>
              </Card>
            </List.Item>
          )
        }
      />
    ) : null;
    return (
      <PageHeaderWrapper title="动画列表">
        <div className={styles.cardList}>{list}</div>
      </PageHeaderWrapper>
    );
  }
}

export default AnimationBangumiList;
