import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function queryAnimeList(params) {
  return request(`/api/anime_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}

// ================================= acgn request api =================================

export async function getCarouselList(params) {
  return request(`/api/v1/carousel/getCarouselList?${stringify(params)}`);
}
export async function getClicksList(params) {
  return request(`/api/v1/clicks/getClicksList?${stringify(params)}`);
}

export async function getAnimationBangumiList(params) {
  return request(`/api/v1/animation/getAnimationBangumiList?${stringify(params)}`);
}
export async function getComicMangaList(params) {
  return request(`/api/v1/comic/getComicMangaList?${stringify(params)}`);
}
export async function getGameGeimuList(params) {
  return request(`/api/v1/game/getGameGeimuList?${stringify(params)}`);
}
export async function getNovelNoberuList(params) {
  return request(`/api/v1/novel/getNovelNoberuList?${stringify(params)}`);
}

export async function getAnimationBangumiByUrl(params) {
  return request(`/api/v1/animation/getAnimationBangumiByUrl?${stringify(params)}`);
}
export async function getComicMangaByUrl(params) {
  return request(`/api/v1/comic/getComicMangaByUrl?${stringify(params)}`);
}
export async function getGameGeimuByUrl(params) {
  return request(`/api/v1/game/getGameGeimuByUrl?${stringify(params)}`);
}
export async function getNovelNoberuByUrl(params) {
  return request(`/api/v1/novel/getNovelNoberuByUrl?${stringify(params)}`);
}

export async function getMediaSearchListByName(params) {
  return request(`/api/v1/search/getMediaSearchListByName?${stringify(params)}`);
}
