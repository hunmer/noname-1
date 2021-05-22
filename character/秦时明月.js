game.import('character',
function(lib, game, ui, get, ai, _status) {
  return {
    character: {
      MYxichubawang: ["male", "shu", 4, ["MYchongfeng", "MYziwen"], ["ext:秦时明月/MYxichubawang.jpg"]],
      MYheiqilin: ["none", "wu", 3, ["MYyirong"], ["ext:秦时明月/MYheiqilin.jpg"]],
      MYxufuzi: ["male", "shu", 4, ["MYzhujian", "MYzengqi"], ["ext:秦时明月/MYxufuzi.jpg"]],
      MYduannurong: ["female", "shu", 3, ["MYyixian", "MYyinzhen"], ["ext:秦时明月/MYduannurong.jpg"]],
      MYzhaogao: ["male", "wei", 3, ["MYnongquan", "MYluowang", "MYliujiannu"], ["ext:秦时明月/MYzhaogao.jpg"]],
      MYchilian: ["female", "wu", 3, ["MYshedu", "MYhuomeishu"], ["ext:秦时明月/MYchilian.jpg"]],
      MYciyage: ["male", "wei", 4, ["MYziya", "MYhunao"], ["ext:秦时明月/MYciyage.jpg"]],
      MYdatiechui: ["male", "shu", 4, ["MYleishenchui"], ["ext:秦时明月/MYdatiechui.jpg"]],
      MYshengqi: ["male", "wu", 4, ["MYjuque"], ["ext:秦时明月/MYshengqi.jpg"]],
      MYbaifeng: ["male", "wu", 4, ["MYliuhuan", "MYjuniao", "MYyuren"], ["ext:秦时明月/MYbaifeng.jpg"]],
      MYdaozhi: ["male", "shu", 4, ["MYdaosheng", "MYdianshenbu"], ["ext:秦时明月/MYdaozhi.jpg"]],
      MYgaojianli: ["male", "shu", 4, ["MYbingdun", "MYyishuihan"], ["ext:秦时明月/MYgaojianli.jpg"]],
      MYlongju: ["male", "wei", 4, ["MYshisi", "MYmashu"], ["ext:秦时明月/MYlongju.jpg"]],
      MYxuenv: ["female", "shu", 3, ["MYlingbo", "MYfeiyan", "MYbaixue"], ["ext:秦时明月/MYxuenv.jpg"]],
      MYshaoyu: ["male", "shu", 4, ["MYpojia", "MYwanrendi"], ["ext:秦时明月/MYshaoyu.jpg"]],
      MYlisi: ["male", "wei", 4, ["MYjiedang", "MYhuzhi"], ["ext:秦时明月/MYlisi.jpg"]],
      MYzhangliang: ["male", "qun", 3, ["MYmoushi", "MYruya"], ["ext:秦时明月/MYzhangliang.jpg"]],
      MYjingke: ["male", "qun", 4, ["MYyiyong", "MYcisha"], ["ext:秦时明月/MYjingke.jpg"]],
      MYjiruqianlong: ["female", "qun", 3, ["MYtianfu", "MYjuenian"], ["ext:秦时明月/MYjiruqianlong.jpg"]],
      MYcanglangwang: ["male", "wu", 3, ["MYlangqun", "MYyehou"], ["ext:秦时明月/MYcanglangwang.jpg"]],
      MYwushuanggui: ["male", "wu", 3, ["MYroujia", "MYchongzao"], ["ext:秦时明月/MYwushuanggui.jpg"]],
      MYguiguzi: ["male", "qun", 4, ["MYzongheng", "MYbaihe"], ["ext:秦时明月/MYguiguzi.jpg"]],
      MYyinfu: ["male", "wu", 4, ["MYshitong", "MYfuxieshu"], ["ext:秦时明月/MYyinfu.jpg"]],
      MYweizhuang: ["male", "wu", 4, ["MYhengjian", "MYliusha"], ["ext:秦时明月/MYweizhuang.jpg"]],
      MYchunangong: ["male", "qun", 3, ["MYhaoyan", "MYnance"], ["ext:秦时明月/MYchunangong.jpg"]],
      MYdonghuangtaiyi: ["male", "qun", 4, ["MYdadao", "MYwuji"], ["ext:秦时明月/MYdonghuangtaiyi.jpg"]],
      MYdasiming: ["female", "qun", 3, ["MYxueshou", "MYliuhunzhou"], ["ext:秦时明月/MYdasiming.jpg"]],
      MYbandashi: ["male", "shu", 4, ["MYjiguan", "MYmuniao"], ["ext:秦时明月/MYbandashi.jpg"]],
      MYgongshuchou: ["male", "wei", 4, ["MYbadao", "MYzhugong"], ["ext:秦时明月/MYgongshuchou.jpg"]],
      MYgenie: ["male", "wei", 4, ["MYzongjian", "MYjiansheng"], ["ext:秦时明月/MYgenie.jpg"]],
      MYgaoyue: ["female", "shu", 3, ["MYconghui", "MYyinlu"], ["ext:秦时明月/MYgaoyue.jpg"]],
      MYyueshen: ["female", "qun", 4, ["MYyuzhi", "MYzhouyin"], ["ext:秦时明月/MYyueshen.jpg"]],
      MYtianming: ["male", "shu", 4, ["MYkaoji", "MYjuexing"], ["ext:秦时明月/MYtianming.jpg"]],
      MYxinghun: ["male", "qun", 3, ["MYquhun", "MYjuqi", "MYchengren"], ["ext:秦时明月/MYxinghun.jpg"]],
      MYshaosiming: ["female", "qun", 3, ["MYguiye", "MYwuyan"], ["ext:秦时明月/MYshaosiming.jpg"]],
      MYyingzheng: ["male", "wei", 4, ["MYjiquan", "MYbaye"], ["ext:秦时明月/MYyingzheng.jpg"]],
      MYgongsunlinglong: ["female", "wei", 3, ["MYmianju", "MYyanbian"], ["ext:秦时明月/MYgongsunlinglong.jpg"]],
      MYyandan: ["male", "wei", 4, ["MYjituo", "MYchuanren"], ["ext:秦时明月/MYyandan.jpg"]],
      MYxiaoyaozi: ["male", "qun", 4, ["MYrenzong", "MYtiandao"], ["ext:秦时明月/MYxiaoyaozi.jpg"]],
      MYkuangxiu: ["male", "qun", 4, ["MYzhiyin", "MYqinxian"], ["ext:秦时明月/MYkuangxiu.jpg"]],
      MYyunzhongjun: ["male", "qun", 4, ["MYqishu", "MYxiandan"], ["ext:秦时明月/MYyunzhongjun.jpg"]],
      MYmengtian: ["male", "wei", 4, ["MYshuzhan"], ["ext:秦时明月/MYmengtian.jpg"]],
      MYxiadaojuzi: ["male", "shu", 5, ["MYxiayi", "MYmogong"], ["ext:秦时明月/MYxiadaojuzi.jpg"]],
      MYpaoding: ["male", "shu", 4, ["MYjieniu", "MYdaofa"], ["ext:秦时明月/MYpaoding.jpg"]],
      MYyanlu: ["male", "wei", 4, ["MYzhishu", "MYhanguang"], ["ext:秦时明月/MYyanlu.jpg"]],
      MYzhanghan: ["male", "wei", 4, ["MYjiansuo", "MYyingwei"], ["ext:秦时明月/MYzhanghan.jpg"]],
      MYshushanxiaoyu: ["female", "shu", 3, ["MYmeiwu", "MYanfu"], ["ext:秦时明月/MYshushanxiaoyu.jpg"]],
      MYshilan: ["female", "shu", 3, ["MYxiaosheng", "MYhuadie"], ["ext:秦时明月/MYshilan.jpg"]],
      MYhanxin: ["male", "wu", 3, ["MYzhanshen", "MYbingxian"], ["ext:秦时明月/MYhanxin.jpg"]],
      MYfunian: ["male", "wu", 4, ["MYtaie", "MYzhangmen"], ["ext:秦时明月/MYfunian.jpg"]],
      MYxiaomeng: ["female", "wei", 3, ["MYtianzong", "MYxuandao", "MYzhishui"], ["ext:秦时明月/MYxiaomeng.jpg"]],
      MYyanji: ["female", "qun", 3, ["MYdongjun", "MYjinwu", "MYfenyan"], ["ext:秦时明月/MYyanji.jpg"]],
      MYxiangliang: ["male", "shu", 4, ["MYxiaoyong", "MYshanzhan"], ["ext:秦时明月/MYxiangliang.jpg"]],
      MYfanzeng: ["male", "wu", 4, ["MYyushi", "MYquanyan"], ["ext:秦时明月/MYfanzeng.jpg"]],
      MYfusu: ["male", "wei", 4, ["MYzhushu", "MYzhaoci"], ["ext:秦时明月/MYfusu.jpg"]],
      MYxunzi: ["male", "wu", 4, ["MYjunzhou", "MYminshui"], ["ext:秦时明月/MYxunzi.jpg"]],
      MYliujiannu: ["none", "wei", 4, ["MYzhengang", "MYwangzhen"], ["ext:秦时明月/MYliujiannu.jpg"]],
      MYyanchunjun: ["male", "wu", 6, ["MYquanheng"], ["ext:秦时明月/MYyanchunjun.jpg"]],
      MYagang: ["male", "qun", 4, ["MYyixiong", "MYfusi"], ["ext:秦时明月/MYagang.jpg"]],
      MYyanyi: ["male", "wu", 4, ["MYzhangshi", "MYxinqiren"], ["ext:秦时明月/MYyanyi.jpg"]],
      MYzinu: ["male", "wu", 4, ["MYshabi"], ["ext:秦时明月/MYzinu.jpg"]],
      MYjueying: ["male", "qun", 4, ["MYjuesha"], ["ext:秦时明月/MYjueying.jpg"]],
      MYwangjian: ["male", "wei", 4, ["MYbaizhan", "MYzhangong"], ["ext:秦时明月/MYwangjian.jpg"]],
    },
    card: {
      MYzhenyuqianye: {
        image: "ext:秦时明月/MYzhenyuqianye.png",
        audio: "true",
        fullskin: "true",
        type: "trick",
        enable: "true",
        selectTarget: "-1",
        reverseOrder: "true",
        filterTarget: function(card, player, target) {
          return target != player;
        },
        content: function() {
          target.damage();
        },
        ai: {
          basic: {
            order: "9",
            useful: [5, 1],
            value: "5",
          },
          result: {
            target: "-2",
          },
          tag: {
            respond: "1",
            respondSha: "1",
            damage: "1",
            multitarget: "1",
            multineg: "1",
          },
        },
      },
      MYchilianwangshe: {
        image: "ext:秦时明月/MYchilianwangshe.png",
        type: "equip",
        subtype: "equip2",
        onLose: function() {
          player.draw();
        },
        skills: ["chilianwangshe"],
        ai: {
          basic: {
            equipValue: "6.5",
            order: function(card, player) {
              if (player && player.hasSkillTag('reverseEquip')) {
                return 8.5 - get.equipValue(card, player) / 20;
              } else {
                return 8 + get.equipValue(card, player) / 20;
              }
            },
            useful: "2",
            value: function(card, player, index, method) {
              if (player.isDisabled(get.subtype(card))) return 0.01;
              var value = 0;
              var info = get.info(card);
              var current = player.getEquip(info.subtype);
              if (current && card != current) {
                value = get.value(current, player);
              }
              var equipValue = info.ai.equipValue;
              if (equipValue == undefined) {
                equipValue = info.ai.basic.equipValue;
              }
              if (typeof equipValue == 'function') {
                if (method == 'raw') return equipValue(card, player);
                if (method == 'raw2') return equipValue(card, player) - value;
                return Math.max(0.1, equipValue(card, player) - value);
              }
              if (typeof equipValue != 'number') equipValue = 0;
              if (method == 'raw') return equipValue;
              if (method == 'raw2') return equipValue - value;
              return Math.max(0.1, equipValue - value);
            },
          },
          result: {
            target: function(player, target, card) {
              return get.equipResult(player, target, card.name);
            },
          },
        },
        fullskin: "true",
        enable: "true",
        selectTarget: "-1",
        filterTarget: function(card, player, target) {
          return target == player;
        },
        modTarget: "true",
        allowMultiple: "false",
        content: function() {
          if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
        },
        toself: "true",
      },
      MYpotuqilang: {
        image: "ext:秦时明月/MYpotuqilang.png",
        type: "equip",
        subtype: "equip1",
        distance: {
          attackFrom: "-1",
        },
        skills: ["potuqilang"],
        ai: {
          basic: {
            equipValue: "2",
            order: function(card, player) {
              if (player && player.hasSkillTag('reverseEquip')) {
                return 8.5 - get.equipValue(card, player) / 20;
              } else {
                return 8 + get.equipValue(card, player) / 20;
              }
            },
            useful: "2",
            value: function(card, player, index, method) {
              if (player.isDisabled(get.subtype(card))) return 0.01;
              var value = 0;
              var info = get.info(card);
              var current = player.getEquip(info.subtype);
              if (current && card != current) {
                value = get.value(current, player);
              }
              var equipValue = info.ai.equipValue;
              if (equipValue == undefined) {
                equipValue = info.ai.basic.equipValue;
              }
              if (typeof equipValue == 'function') {
                if (method == 'raw') return equipValue(card, player);
                if (method == 'raw2') return equipValue(card, player) - value;
                return Math.max(0.1, equipValue(card, player) - value);
              }
              if (typeof equipValue != 'number') equipValue = 0;
              if (method == 'raw') return equipValue;
              if (method == 'raw2') return equipValue - value;
              return Math.max(0.1, equipValue - value);
            },
          },
          result: {
            target: function(player, target, card) {
              return get.equipResult(player, target, card.name);
            },
          },
        },
        fullskin: "true",
        enable: "true",
        selectTarget: "-1",
        filterTarget: function(card, player, target) {
          return target == player;
        },
        modTarget: "true",
        allowMultiple: "false",
        content: function() {
          if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
        },
        toself: "true",
      },
      MYliuhunkongzhou: {
        image: "ext:秦时明月/MYliuhunkongzhou.png",
        audio: "true",
        fullskin: "true",
        type: "trick",
        enable: "true",
        filterTarget: function(card, player, target) {
          return target != player && !target.isTurnedOver();
        },
        content: function() {
          target.turnOver();
        },
        ai: {
          basic: {
            order: "9",
            value: "3",
            useful: "1",
          },
          result: {
            target: "-2",
          },
          tag: {
            loseHp: "1",
          },
        },
        selectTarget: "1",
      },
      MYjiguanzhuque: {
        image: "ext:秦时明月/MYjiguanzhuque.png",
        fullskin: "true",
        type: "equip",
        subtype: "equip3",
        distance: {
          globalTo: "2",
        },
        enable: "true",
        selectTarget: "-1",
        filterTarget: function(card, player, target) {
          return target == player;
        },
        modTarget: "true",
        allowMultiple: "false",
        content: function() {
          target.equip(card);
        },
        toself: "true",
        ai: {
          basic: {
            order: function(card, player) {
              if (player && player.hasSkillTag('reverseEquip')) {
                return 8.5 - get.equipValue(card, player) / 20;
              } else {
                return 8 + get.equipValue(card, player) / 20;
              }
            },
            useful: "2",
            equipValue: "7",
            value: function(card, player) {
              var value = 0;
              var info = get.info(card);
              var current = player.getEquip(info.subtype);
              if (current && card != current) {
                value = get.value(current, player);
              }
              var equipValue = info.ai.equipValue;
              if (equipValue == undefined) {
                equipValue = info.ai.basic.equipValue;
              }
              if (typeof equipValue == 'function') return equipValue(card, player) - value;
              if (typeof equipValue != 'number') equipValue = 0;
              return equipValue - value;
            },
          },
          result: {
            target: function(player, target, card) {
              return get.equipResult(player, target, card.name);
            },
          },
        },
      },
      MYjiguanbaihu: {
        image: "ext:秦时明月/MYjiguanbaihu.png",
        fullskin: "true",
        type: "equip",
        subtype: "equip4",
        distance: {
          globalFrom: "0",
        },
        enable: "true",
        selectTarget: "-1",
        filterTarget: function(card, player, target) {
          return target == player;
        },
        modTarget: "true",
        allowMultiple: "false",
        content: function() {
          target.equip(card);
        },
        toself: "true",
        skills: ["jiguanbaihu"],
        ai: {
          basic: {
            order: function(card, player) {
              if (player && player.hasSkillTag('reverseEquip')) {
                return 8.5 - get.equipValue(card, player) / 20;
              } else {
                return 8 + get.equipValue(card, player) / 20;
              }
            },
            useful: "2",
            equipValue: "4",
            value: function(card, player) {
              var value = 0;
              var info = get.info(card);
              var current = player.getEquip(info.subtype);
              if (current && card != current) {
                value = get.value(current, player);
              }
              var equipValue = info.ai.equipValue;
              if (equipValue == undefined) {
                equipValue = info.ai.basic.equipValue;
              }
              if (typeof equipValue == 'function') return equipValue(card, player) - value;
              if (typeof equipValue != 'number') equipValue = 0;
              return equipValue - value;
            },
          },
          result: {
            target: function(player, target, card) {
              return get.equipResult(player, target, card.name);
            },
          },
        },
      },
    },
    skill: {},
    characterSort: {秦时明月: {
        qinshimingyue: ["MYxichubawang", "MYheiqilin", "MYxufuzi", "MYduannurong", "MYzhaogao", "MYchilian", "MYciyage", "MYdatiechui", "MYshengqi", "MYbaifeng", "MYdaozhi", "MYgaojianli", "MYlongju", "MYxuenv", "MYshaoyu", "MYlisi", "MYzhangliang", "MYjingke", "MYjiruqianlong", "MYcanglangwang", "MYwushuanggui", "MYguiguzi", "MYyinfu", "MYweizhuang", "MYchunangong", "MYdonghuangtaiyi", "MYdasiming", "MYbandashi", "MYgongshuchou", "MYgenie", "MYgaoyue", "MYyueshen", "MYtianming", "MYxinghun", "MYshaosiming", "MYyingzheng", "MYgongsunlinglong", "MYyandan", "MYxiaoyaozi", "MYkuangxiu", "MYyunzhongjun", "MYmengtian", "MYxiadaojuzi", "MYpaoding", "MYyanlu", "MYzhanghan", "MYshushanxiaoyu", "MYshilan", "MYhanxin", "MYfunian", "MYxiaomeng", "MYyanji", "MYxiangliang", "MYfanzeng", "MYfusu", "MYxunzi", "MYliujiannu", "MYyanchunjun", "MYagang", "MYyanyi", "MYzinu", "MYjueying", "MYwangjian"],
      },
    },
    translate: {
      MYxichubawang: "西楚霸王",
      MYheiqilin: "黑麒麟",
      MYxufuzi: "徐夫子",
      MYduannurong: "端木蓉",
      MYzhaogao: "赵高",
      MYchilian: "赤练",
      MYciyage: "呲牙哥",
      MYdatiechui: "大铁锤",
      MYshengqi: "胜七",
      MYbaifeng: "白凤",
      MYdaozhi: "盗跖",
      MYgaojianli: "高渐离",
      MYlongju: "龙且",
      MYxuenv: "雪女",
      MYshaoyu: "少羽",
      MYlisi: "李斯",
      MYzhangliang: "张良",
      MYjingke: "荆轲",
      MYjiruqianlong: "姬如千珑",
      MYcanglangwang: "苍狼王",
      MYwushuanggui: "无双鬼",
      MYguiguzi: "鬼谷子",
      MYyinfu: "隐蝠",
      MYweizhuang: "卫庄",
      MYchunangong: "楚南公",
      MYdonghuangtaiyi: "东皇太一",
      MYdasiming: "大司命",
      MYbandashi: "班大师",
      MYgongshuchou: "公输仇",
      MYgenie: "盖聂",
      MYgaoyue: "高月",
      MYyueshen: "月神",
      MYtianming: "天明",
      MYxinghun: "星魂",
      MYshaosiming: "少司命",
      MYyingzheng: "嬴政",
      MYgongsunlinglong: "公孙玲珑",
      MYyandan: "燕丹",
      MYxiaoyaozi: "逍遥子",
      MYkuangxiu: "旷修",
      MYyunzhongjun: "云中君",
      MYmengtian: "蒙恬",
      MYxiadaojuzi: "侠道巨子",
      MYpaoding: "庖丁",
      MYyanlu: "颜路",
      MYzhanghan: "章邯",
      MYshushanxiaoyu: "蜀山小虞",
      MYshilan: "石兰",
      MYhanxin: "韩信",
      MYfunian: "伏念",
      MYxiaomeng: "晓梦",
      MYyanji: "焱妃",
      MYxiangliang: "项梁",
      MYfanzeng: "范增",
      MYfusu: "扶苏",
      MYxunzi: "荀子",
      MYliujiannu: "六剑奴",
      MYyanchunjun: "雁春君",
      MYagang: "阿纲",
      MYyanyi: "晏懿",
      MYzinu: "子慕",
      MYjueying: "绝影",
      MYwangjian: "王翦",
      MYzhenyuqianye: "鸩羽千夜",
      MYchilianwangshe: "赤练王蛇",
      MYpotuqilang: "破土七郎",
      MYliuhunkongzhou: "六魂恐咒",
      MYjiguanzhuque: "机关朱雀",
      MYjiguanbaihu: "机关白虎",
      qinshimingyue: "qinshimingyue",
    },
    name: "秦时明月",
    connect: "true",
    characterIntro: {},
    characterTitle: {},
  }
});