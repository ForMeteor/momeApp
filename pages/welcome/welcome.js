"use strict";
import { EXTRA } from '../../config/router'
import { NAV_TO } from '../../utils/view_utils'
const app = getApp();
Page({
    data: {
        background: ['swiper-1', 'swiper-2', 'swiper-3'],
        menuList:[]
    },
    goNext(){
        NAV_TO('EXTRA')
    },
    onLoad: function () {
    },
    onReady(){
        let k = []
        for(let i = 0;i < 12;i++){
            k.push('')
        }
        this.setData({
            menuList: k
        })
    }
});