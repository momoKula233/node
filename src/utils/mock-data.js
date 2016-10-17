const messageData = [
  {
    index: 1,
    username: '郑宴',
    avatar: '../images/avatar-1.png',
    content: '手握999k纯金笔都不如最后落笔那一刻的爽快，是时候该轮到我们上场了！',
    img: '../images/pic-1.png',
    location: 'SAIC MOTOR Middle East FZE',
    time: '3分钟前',
    follows: ['金纪', '翁玉华', 'Lily', 'Rebecca', '简晰', '崔爽文', '葛文德', '张雅琴'],
    comments: [
      { user: '简晰', detail: '恭喜郑总！阿联酋最大的经销商都被你们拿下了！' },
      { user: '林晨', detail: '干得漂亮!' },
    ],
  },
  {
    index: 2,
    username: '穆青',
    avatar: '../images/avatar-2.png',
    content: '圣地亚哥车展，Let’shine! 今年的主题是第3代无人驾驶概念和全新的售后服务体系。总有人说不容易不容易，可我听见梦想在说 Why not?',
    img: '../images/pic-2.png',
    location: 'Santiago Chile Motor Show',
    time: '12分钟前',
    follows: ['Bob', '郑宴', '林晨', 'Andy', '王达文', 'Judy', 'Alice', '彭小华', '孙彦华'],
    comments: [
      { user: '林总', detail: '为梦想点赞👍👍👍' },
      { user: '王达文', detail: '规模一年比一年大了！' },
    ],
  },
  {
    index: 3,
    username: '贺平',
    avatar: '../images/avatar-3.png',
    content: 'Travel around Australia from south to north to get the first hand data.' +
    'The annual market analysis is always the most exciting part in the marketing section.',
    img: '../images/pic-3.png',
    location: 'Australia · Nelson Bay Rd · New South Wales',
    time: '3分钟前',
    follows: ['金纪', '翁玉华', 'Joan', 'Adam', '钟卢英', 'Henry', '袁琳琳', '高博', '陈于斌', 'David'],
    comments: [
      { user: '路遥', replyTo: null, detail: '贺哥辛苦了，果然是全能市调王啊！' },
      { user: '贺平', replyTo: '路遥', detail: '谢谢，知己知彼才能百战百胜☺️' },
      {
        user: 'Toy', replyTo: null,
        detail: 'Compared with Chile, yours is just called ‘short haul’😜😜',
      },
      { user: '贺平', replyTo: 'Toy', detail: 'hahahaha, u got it😂' },
    ],
  },
  {
    index: 4,
    username: '蒋一宁',
    avatar: '../images/avatar-4.png',
    content: '2017-2022入职整整5个年头。一路走来，收获比辛苦多，成长比付出多。最感恩收获一批志同道合的小伙伴，愿我们永葆初心，来日方长！',
    img: '../images/pic-4.png',
    location: '上海',
    time: '1小时前',
    follows: ['简晰', '穆青', 'Bob', '郑宴', '林晨', 'Andy', '王达文', 'Judy', 'Alice', '彭小华', '孙彦华', '祝晶晶',
      '罗小鹏', '刘佳颖', '宋佳', '金纪', '翁玉华', 'Lily', 'Rebecca', '崔爽', '葛文德', '张雅琴', '江志平', 'Joan', 'Adam',
      'David', 'Henry', '袁琳琳', '高博', '陈于斌'],
    comments: [
      { user: '穆青', replyTo: null, detail: '你是明信片，我是冰箱贴' },
      { user: '蒋一宁', replyTo: '穆青', detail: '我也有一整面冰箱贴' },
    ],
  },
  {
    index: 5,
    username: '王达文',
    avatar: '../images/avatar-5.png',
    content: '每次和工程师们切磋都是一件艰苦并享受的事。But, 所有的努力和汗水在最后都要一种毫不费力的姿态呈现。是的，其实我就是想说，在南非大草原飙车的感觉实在是太酷了！',
    img: '../images/pic-5.png',
    location: 'South Africa Kruger National Park',
    time: '3分钟前',
    follows: ['简晰', '穆青', 'Bob', '郑宴', '林晨', 'Andy', 'Lily', 'Rebecca', '崔爽', '葛文德',
      '张雅琴', '江志平', 'Joan'],
    comments: [
      { user: '穆青', replyTo: null, detail: '路测结果出来了？' },
      { user: '王达文', replyTo: '穆青', detail: '是滴，比预想中顺利。' },
      { user: '林慧雯', replyTo: null, detail: '达哥工作要不要这么拉风~！' },
      { user: '王达文', replyTo: '穆青', detail: '是滴，比预想中顺利。' },
    ],
  },
  {
    index: 6,
    username: '庄思捷',
    avatar: '../images/avatar-6.png',
    content: 'Today’s headline of NY times. Feel so proud to be a member of SAIC.',
    img: '../images/pic-6.png',
    location: '中国 · 上海',
    time: '2小时前',
    follows: ['简晰', '穆青', 'Bob', '郑宴', '林晨', 'Andy', '祝晶晶', '金纪', '翁玉华', 'Lily', 'Rebecca',
      '张雅琴', '江志平', 'Joan', 'Adam'],
  },
];
export default messageData;