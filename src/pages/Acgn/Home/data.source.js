import React from 'react';

export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'banner',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg', style: {backgroundImage: ''} },
        title: {
          className: 'banner1-title',
          children:
            '/banner-logo.png',
        },
        content: {
          className: 'banner1-content',
          children: (
            <span>
              <p>了解二次元的一切</p>
            </span>
          ),
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      }
    ],
  },
};
export const Content50DataSource = {
  wrapper: {
    className: 'home-page-wrapper content5-wrapper jq7k5qd5mhd-editor_css',
  },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>了解二次元的一切</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>了解二次元的一切</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'http://www.acgnfuns.com/images/full/63b575b29277d41bf559efab937dbc3827d4f974.jpg',
          },
          content: { children: 'Ant Design' },
        },
      }
    ],
  },
};
