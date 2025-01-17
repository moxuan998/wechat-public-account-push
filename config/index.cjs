/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4a52080bf2e9e8ae',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '5d92d3d83e8e18fcd17481c2ca99dbe2',

  PROVINCE: '三明',
  CITY: '屏山乡兴屏街',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小笨猪',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oE1Jz6QHxFLa-rQZo31jhAYBkZuM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '79dXti9uM2UOl8Oufa3lcSZ-dZHmUdiX3Rl1dxSqv0c',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-12',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小笨蛋', year: '2003', date: '03-12',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们认识已经有xxxx天了的配置
      customizedDateList: [
        // 在一起玩耍的日子
        { keyword: 'love_day', date: '2024-01-01' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '79dXti9uM2UOl8Oufa3lcSZ-dZHmUdiX3Rl1dxSqv0c',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oE1Jz6QHxFLa-rQZo31jhAYBkZuM',
    }
  ],

}

module.exports = USER_CONFIG

