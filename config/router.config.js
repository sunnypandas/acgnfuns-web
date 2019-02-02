export default [
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // index
      { path: '/', redirect: '/Home' },
      {
        path: '/Home',
        name: 'index',
        icon: 'icon:anticon-shouye',
        component: './Acgn/Home',
      },
      {
        path: '/AnimationBangumiList',
        name: 'anime',
        icon: 'icon:anticon-donghua',
        component: './Acgn/Animation/AnimationBangumiList',
      },
      {
        path: '/ComicMangaList',
        name: 'manga',
        icon: 'icon:anticon-manhua',
        component: './Acgn/Comic/ComicMangaList',
      },
      {
        path: '/GameGeimuList',
        name: 'geimu',
        icon: 'icon:anticon-youxi',
        component: './Acgn/Game/GameGeimuList',
      },
      {
        path: '/NovelNoberuList',
        name: 'noberu',
        icon: 'icon:anticon-xiaoshuo',
        component: './Acgn/Novel/NovelNoberuList',
      },
      {
        path: '/AnimationBangumi',
        component: './Acgn/Animation/AnimationBangumi'
      },
      {
        path: '/ComicManga',
        component: './Acgn/Comic/ComicManga'
      },
      {
        path: '/GameGeimu',
        component: './Acgn/Game/GameGeimu'
      },
      {
        path: '/NovelNoberu',
        component: './Acgn/Novel/NovelNoberu'
      },
      {
        path: '/MediaSearchList',
        component: './Acgn/Search/MediaSearchList'
      },
      {
        path: '/Privacy',
        component: './Acgn/Privacy/Privacy'
      },
      {
        component: '404',
      },
    ],
  },
];
