module.exports = {
  title:"个人主页",
  description:"Zone cycloned",
  head:[//注入到当前HTML<head>中的标签
    ['link',{rel:'icon',href:'/public/Vegetables-06.svg'}],
  ],
  base:"/",
  markdown:{
    lineNumbers:false//代码块显示行数
  },
  themeConfig:{
    nav:[//导航栏配置
      {text:'前端基础',link:'/sure/'},
      {text:'算法题库',link:'/asd/'},
      {text:'百度',link:'https://www.baidu.com'},
    ],
    sidebar:'auto',//侧边栏配置
    sidebarDepth:2,//侧边栏显示二级
  },
}
