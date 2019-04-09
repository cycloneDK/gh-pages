module.exports = {
  title:"Explorer",
  description:"cyclone",
  head:[
    ['link', { rel: 'icon', href: '/img/fa.png' }],
  ],
  base:'/blog/',//github部署相关配置
  markdown:true,//代码块显示行

  //顶部导航栏
  themeConfig:{
    sidebarDep:4,//e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdatad:'last Updatad',//文档更新时间
    //顶部导航栏
    nav:[
      // 单项 text：显示文字，link：指向链接
      {text:'博客',link:'/Blog/'},
      {text:'库',link:'/Library/'},
      {text:'面试',link:'/Interview/'},
      {text:'随笔',link:'/Thought/'},
      //多向下拉形式
      {
        text:'github',
        items:[
          {text:'Github首页',link:'https://github.com/cycloneDK'},
          {text:'Google',link:'https://www.baidu.com'},
          {text:'凑数',link:''}
        ]
      },
    ],
    //侧边栏
    sidebar:{

    }
  },
}
