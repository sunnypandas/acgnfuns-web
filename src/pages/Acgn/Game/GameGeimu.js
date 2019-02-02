import React, { Component } from 'react';
import { connect } from 'dva';
import { Avatar, Card, Divider } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { getImageUrl, htmlClear } from '@/utils/utils';

const { Description } = DescriptionList;

@connect(({ acgn, loading }) => ({
  acgn,
  loading: loading.models.acgn,
}))
class GameGeimu extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      media: {},
    };
  }

  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch({
      type: 'acgn/gameGeimuByUrlFetch',
      payload: {
        url: location.query.url,
      },
    }).then(()=>{
      const {
        acgn,
      } = this.props;
      const tempMedia = acgn.gameGeimu;
      const mediaObj = {
        'url': tempMedia.url,
        'img': getImageUrl(tempMedia.images),
        'name': tempMedia.name,
        'zhName': tempMedia.zhName,
        'enName': tempMedia.enName,
        'creatorNames': tempMedia.creatorNames,
        'publisherNames': tempMedia.publisherNames,
        'areaNames': tempMedia.areaNames,
        'language': tempMedia.language,
        'type': tempMedia.type,
        'updateTime': tempMedia.updateTime,
        'publishDate': tempMedia.publishDate,
        'showDate': tempMedia.showDate,
        'size': tempMedia.size,
        'status': tempMedia.status,
        'introduction': htmlClear(tempMedia.introduction),
        'category': tempMedia.category,
      };
      this.setState({ media: mediaObj });
    });
  }

  render() {
    const { media } = this.state;
    return (
      <PageHeaderWrapper title="游戏详情页">
        <Card bordered={false}>
          <DescriptionList size="large" title="基本信息" style={{ marginBottom: 32 }}>
            <Description><a href={media.url} target="_blank"><Avatar size="large" alt={media.name} src={media.img} /></a></Description>
            <Description term="名称">{media.name}</Description>
            <Description term="语言">{media.language}</Description>
            <Description term="地区">{media.areaNames}</Description>
            <Description />
            <Description term="状态">{media.status}</Description>
            <Description />
            <Description term="更新">{media.updateTime}</Description>
            <Description term="大小">{media.size}</Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList size="large" title="简介" style={{ marginBottom: 32 }}>
            <p dangerouslySetInnerHTML={{__html: media.introduction}} />
          </DescriptionList>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default GameGeimu;
