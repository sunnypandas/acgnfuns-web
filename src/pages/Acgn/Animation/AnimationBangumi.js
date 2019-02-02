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
class AnimationBangumi extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      media: {},
    };
  }

  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch({
      type: 'acgn/animationBangumiByUrlFetch',
      payload: {
        url: location.query.url,
      },
    }).then(()=>{
      const {
        acgn,
      } = this.props;
      const tempMedia = acgn.animationBangumi;
      const mediaObj = {
        'url': tempMedia.url,
        'img': getImageUrl(tempMedia.images),
        'name': tempMedia.name,
        'authorNames': tempMedia.authorNames,
        'actorNames': tempMedia.actorNames,
        'directorNames': tempMedia.directorNames,
        'showDate': tempMedia.showDate,
        'areaNames': tempMedia.areaNames,
        'language': tempMedia.language,
        'status': tempMedia.status,
        'type': tempMedia.type,
        'introduction': htmlClear(tempMedia.introduction),
        'updateTime': tempMedia.updateTime,
        'category': tempMedia.category,
      };
      this.setState({ media: mediaObj });
    });
  }

  render() {
    const { media } = this.state;
    return (
      <PageHeaderWrapper title="动画详情页">
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
            <Description term="时间">{media.showDate}</Description>
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

export default AnimationBangumi;
