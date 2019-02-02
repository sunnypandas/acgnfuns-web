/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import { connect } from 'dva';
import Banner1 from './Banner1';
import Content5 from './Content5';
import { getBanner10DataSource, getContent50DataSource, mediaListTransTo } from '@/utils/utils';
import {
  Banner10DataSource,
  Content50DataSource
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

@connect(({ acgn, loading }) => ({
  acgn,
  loading: loading.models.acgn,
}))
class Home extends React.Component {
  constructor(props) {
    super(props);
    if (isMobile)
    {
      window.location.href = 'http://m.acgnfuns.com';
      return;
    }
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除

      carouselList: [],
      indexAnimationBangumiList: [],
      indexComicMangaList: [],
      indexGameGeimuList: [],
      indexNovelNoberuList: [],
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */

    const { dispatch } = this.props;
    dispatch({
      type: 'acgn/carouselListFetch',
      payload: {
      },
    }).then(()=>{
      const {
        acgn,
      } = this.props;
      this.setState({ carouselList:  acgn.carouselList });
    });
    dispatch({
      type: 'acgn/indexAnimationBangumiListFetch',
      payload: {
        page: 0,
        size: 8,
        type: '动画'
      },
    }).then(()=>{
      const {
        acgn,
      } = this.props;
      this.setState({ indexAnimationBangumiList:  mediaListTransTo(acgn.indexAnimationBangumiList) });
    });
    dispatch({
      type: 'acgn/indexComicMangaListFetch',
      payload: {
        page: 0,
        size: 8,
        type: '漫画'
      },
    }).then(()=>{
      const {
        acgn,
      } = this.props;
      this.setState({ indexComicMangaList:  mediaListTransTo(acgn.indexComicMangaList) });
    });
    dispatch({
      type: 'acgn/indexGameGeimuListFetch',
      payload: {
        page: 0,
        size: 8,
        type: '游戏'
      },
    }).then(()=>{
      const {
        acgn,
      } = this.props;
      this.setState({ indexGameGeimuList:  mediaListTransTo(acgn.indexGameGeimuList) });
    });
    dispatch({
      type: 'acgn/indexNovelNoberuListFetch',
      payload: {
        page: 0,
        size: 8,
        type: '轻小说'
      },
    }).then(()=>{
      const {
        acgn,
      } = this.props;
      this.setState({ indexNovelNoberuList:  mediaListTransTo(acgn.indexNovelNoberuList) });
    });
  }

  render() {
    const children = [
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={getBanner10DataSource(Banner10DataSource, this.state.carouselList)}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={getContent50DataSource(Content50DataSource, this.state.indexAnimationBangumiList, '动画推荐', '最强新番等你来看')}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_1"
        key="Content5_1"
        dataSource={getContent50DataSource(Content50DataSource, this.state.indexComicMangaList, '漫画推荐', '人气漫画不容错过')}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_2"
        key="Content5_2"
        dataSource={getContent50DataSource(Content50DataSource, this.state.indexGameGeimuList, '游戏推荐', '3A大作等你来玩')}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_3"
        key="Content5_3"
        dataSource={getContent50DataSource(Content50DataSource, this.state.indexNovelNoberuList, '轻小说推荐', '文库作品一网打尽')}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}

export default Home;
