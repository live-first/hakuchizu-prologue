import axiosBase from 'axios'
export const axios = axiosBase.create({
  baseURL: 'https://wonder-weed.microcms.io/api/v1/',
  headers: {
    'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
})
