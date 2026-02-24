import { SelectedItemType, VotingType } from '@/domain/sparking'

export const votingMaster: VotingType = {
  vip: {
    price: 7500,
    voting: 5,
    items: [
      { id: '300', amount: 5 },
      { id: '301', amount: 10 },
      { id: '302', amount: 1 },
      { id: '303', amount: 10 },
    ],
  },
  general: {
    price: 4000,
    voting: 2,
    items: [
      { id: '300', amount: 2 },
      { id: '301', amount: 5 },
      { id: '303', amount: 2 },
    ],
  },
  common: {
    price: 2000,
    voting: 1,
    items: [],
  },
  ouen: {
    price: 1000,
    voting: 1,
    items: [
      { id: '300', amount: 1 },
      { id: '301', amount: 1 },
      { id: '303', amount: 1 },
    ],
  },
  kuji: {
    price: 1000,
    voting: 1,
    items: [],
  },
  shoutai: {
    price: 0,
    voting: 0,
    items: [{ id: '301', amount: 1 }],
  },
}

export const initSelectedItem: SelectedItemType = {
  vip: 0,
  general: 0,
  common: 0,
  ouen: 0,
  kuji: 0,
  shoutai: 0,
}
