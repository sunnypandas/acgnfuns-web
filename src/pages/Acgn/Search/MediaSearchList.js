import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, List } from 'antd';
import Link from 'umi/link';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { mediaListTransTo } from '@/utils/utils';
import styles from '../Common.less';

@connect(({ acgn, loading }) => ({
  acgn,
  loading: loading.models.acgn,
}))
class MediaSearchList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mediaSearchList: [],
    };
  }

  componentDidMount() {
    this.getData(0);
  }

  getData () {
    console.log('getData...')
    this.setState({mediaSearchList: []});
    const { dispatch, location } = this.props;
    dispatch({
      type: 'acgn/mediaSearchListFetch',
      payload: {
        name: location.query.keyword,
      },
    }).then(()=>{
      const {
        acgn,
      } = this.props;
      this.setState({ mediaSearchList: mediaListTransTo(acgn.mediaSearchList) });
    });
  }

  render() {
    const {
      loading,
    } = this.props;
    const { mediaSearchList } = this.state;

    const list = mediaSearchList ? (
      <List
        rowKey="id"
        loading={loading}
        grid={{ gutter: 24, lg: 6, md: 4, sm: 3, xs: 2 }}
        dataSource={mediaSearchList}
        renderItem={item =>
          (
            <List.Item key={item.url}>
              <Card
                className={styles.card}
                hoverable
                cover={<img className={styles.listImgHeight} alt={item.name} src={item.img} />}
              >
                {item.category==='动画'&&<Card.Meta
                  style={{textAlign: 'center'}}
                  title={<Link to={"/AnimationBangumi?url=".concat(item.url)} target="_blank">{item.name}</Link>}
                />}
                {item.category==='漫画'&&<Card.Meta
                  style={{textAlign: 'center'}}
                  title={<Link to={"/ComicManga?url=".concat(item.url)} target="_blank">{item.name}</Link>}
                />}
                {item.category==='游戏'&&<Card.Meta
                  style={{textAlign: 'center'}}
                  title={<Link to={"/GameGeimu?url=".concat(item.url)} target="_blank">{item.name}</Link>}
                />}
                {item.category==='轻小说'&&<Card.Meta
                  style={{textAlign: 'center'}}
                  title={<Link to={"/NovelNoberu?url=".concat(item.url)} target="_blank">{item.name}</Link>}
                />}
                <div className={styles.cardItemContent}>
                  <span>{item.category}</span>
                </div>
              </Card>
            </List.Item>
          )
        }
      />
    ) : null;
    return (
      <PageHeaderWrapper title="搜索列表">
        <div className={styles.cardList}>{list}</div>
      </PageHeaderWrapper>
    );
  }
}

export default MediaSearchList;
