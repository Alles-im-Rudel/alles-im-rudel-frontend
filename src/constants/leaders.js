/* eslint-disable quotes */
import dayjs from 'dayjs';

export default {
  SILAS_BECKMANN: {
    fullName: 'Silas Beckmann',
    image: '/assets/leading/left.png',
    text: dayjs().diff('1998-04-20', 'years') + ' Jahre alt',
    socials: {
      instagram: 'silas098',
      snapchat: 'silas098',
      linkedin: 'silas-beckmann'
    }
  },
  TIMM_VOLLBORN: {
    fullName: 'Timm Vollborn',
    image: '/assets/leading/center.png',
    text: dayjs().diff('1999-01-30', 'years') + ' Jahre alt',
    socials: {
      instagram: 't.vollborn',
      snapchat: 't.vollborn',
      linkedin: 'timm-vollborn'
    }
  },
  NICK_NICKELS: {
    fullName: 'Nick Nickels',
    image: '/assets/leading/right.png',
    text: dayjs().diff('1998-12-28', 'years') + " Jahre alt",
    socials: {
      instagram: 'air_nj',
      snapchat: 'nickels_nick',
      linkedin: 'nick-nickels'
    }
  },
};