import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export const recommend =
  {"code":0,
    "data":{
      "slider":[
        {
          "linkUrl":"http://ydh5res.onlineweixin.com/H5-RES/2018/201802/qqyy/index.html?_video=true",
          "picUrl":"http://y.gtimg.cn/music/photo_new/T003R720x288M000004dfl7Y4X0Ieh.jpg",
          "id":14469
        },{
          "linkUrl":"http://y.qq.com/w/album.html?albummid=003rCgJy3qLwi9",
          "picUrl":"http://y.gtimg.cn/music/photo_new/T003R720x288M000003imJH71P5jwb.jpg",
          "id":14468
        },{
          "linkUrl":"https://y.qq.com/m/act/HiddenSinger2/v3/index.html?ADTAG=jiaodiantu&_video=true",
          "picUrl":"http://y.gtimg.cn/music/photo_new/T003R720x288M000003OSrlC3gNLoy.jpg",
          "id":14411
        },{
          "linkUrl":"https://y.qq.com/msa/cdreview/0_4607.html",
          "picUrl":"http://y.gtimg.cn/music/photo_new/T003R720x288M0000049pzNM4b1qku.jpg",
          "id":13025
        },{
          "linkUrl":"https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=589170",
          "picUrl":"http://y.gtimg.cn/music/photo_new/T003R720x288M0000024lT0x3fK2Mo.jpg",
          "id":14269
        }],
      "radioList":[
        {
          "picUrl":"http://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg",
          "Ftitle":"热歌",
          "radioid":199
        },{
          "picUrl":"http://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg",
          "Ftitle":"一人一首招牌歌",
          "radioid":307
        }],
      "songList":[
        {
          "songListDesc":"催泪大杀器！盘点演唱会经典万人大合唱",
          "picUrl":"http://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3QTL2eX2QziaJmaL0ZAmsvtW71ic9IDUoYzg/300?n=1",
          "id":"2646688496",
          "accessnum":7922404,
          "songListAuthor":"Harry",
          "pic_mid":"00333So02drvak",
          "album_pic_mid":""
        },{
          "songListDesc":"纳尼？这些华语歌手竟然会唱日语歌！",
          "picUrl":"http://p.qpic.cn/music_cover/z8wAFqicQ1qhImeiajkrgiaR4hYM3pzsUULFnicXshFXdw9uGkm261Ex9g/300?n=1",
          "id":"1144416825",
          "accessnum":635323,
          "songListAuthor":"风吹草地",
          "pic_mid":"0013j8zs1jRnLQ",
          "album_pic_mid":""
        },{
          "songListDesc":"精选内地十大民谣歌手代表作",
          "picUrl":"http://p.qpic.cn/music_cover/hVUsfUFG2DV466URqw7PT7X66OknPIhic2mKDgicawN4qThIR7yhYY1w/300?n=1",
          "id":"2043041547",
          "accessnum":910394,
          "songListAuthor":"１'s ヽ",
          "pic_mid":"004bFmjW2PXSqF",
          "album_pic_mid":"0032YJyg2yF6Dd"
        },{
          "songListDesc":"$doopeBoi关注我网易yun歌手页",
          "picUrl":"http://p.qpic.cn/music_cover/tkduvk4dwqBxwzZhsNe0nwkwyiaLHVkxtla7REsX0yNkhibOH3Bdb2og/300?n=1",
          "id":"2040362185",
          "accessnum":1156640,
          "songListAuthor":"SdoopeBoi_7",
          "pic_mid":"002s71FW1GD8go",
          "album_pic_mid":"001iJq1y1Uq3zV"
        },{
          "songListDesc":"浮光掠影：ACG纯音乐赏析合辑",
          "picUrl":"http://p.qpic.cn/music_cover/XMPAjfs5uwGZdWII3osvAvCRyNWx8Pqy5Yice41OCZlBhLtk0p0icNvg/300?n=1",
          "id":"1723063372",
          "accessnum":911639,
          "songListAuthor":"肥喵",
          "pic_mid":"000xFtbN1l8ye8",
          "album_pic_mid":"002egQPg3DWcCS"
        },{
          "songListDesc":"trip-hop单曲大推荐",
          "picUrl":"http://y.gtimg.cn/music/photo_new/T005R600x600M000002CJKAY1LKpcz.jpg?n=1",
          "id":"3482605622",
          "accessnum":356831,
          "songListAuthor":"哑忍",
          "pic_mid":"",
          "album_pic_mid":"004aOQhn3PPOpK"
        }]}
  }

//https://u.y.qq.com/cgi-bin/musicu.fcg?
// callback=recom10270915231671651&
// g_tk=5381&
// jsonpCallback=recom10270915231671651&
// loginUin=0&
// hostUin=0&
// format=jsonp&
// inCharset=utf8&
// outCharset=utf-8&
// notice=0&
// platform=yqq&
// needNewCode=0&
// data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%7D
