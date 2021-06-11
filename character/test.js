'use strict';
game.import('character', function(lib, game, ui, get, ai, _status) {
    return {
        name: 'test',
        connect: true,
        character: {
            test_jcynsyz_qxs: ["female", "wu", 4, ["jcynsyz_shufu"]],
            test_jcynsyz_jcyn: ["female", "shu", 4, ["mankai_jcyn", "yzzq"]],
            jcynsyz_shxl: ["female", "shu", 4, ["jcynsyz_skill_jr", "jcynsyz_skill_zj"]],
            jcynsyz_test: ["female", "wei", 3, ["jcynsyz_skill_test1", 'jcynsyz_skill_test2']],
            jcynsyz_test_1: ["female", "wei", 3, ["jcynsyz_skill_test3", 'jcynsyz_skill_test4']],
            jcynsyz_test_2: ["female", "wei", 3, ["jcynsyz_skill_test6"]],
            jcynsyz_test_3: ["female", "shu", 3, ["jcynsyz_skill_test7", "jcynsyz_skill_test8"]],
            jcynsyz_test_4: ["female", "shu", 4, ["jcynsyz_skill_test9"]],
            jcynsyz_test_5: ["female", "qun", 3, ["jcynsyz_skill_test10", 'jcynsyz_skill_test11']],
            jcynsyz_test_6: ["female", "qun", 4, ["qjcuidu"]],
            caocao_1: ["male", "wei", 4, ['test_bulue', 'test_xumo', 'test_duange', 'test_nayan']],
        },
        characterSort: {
            test: {
                jcynsyz: ["test_jcynsyz_qxs", "test_jcynsyz_jcyn", "jcynsyz_shxl"],
                cs2: ["jcynsyz_test_1", "jcynsyz_test_2", "jcynsyz_test_3", "jcynsyz_test_4", "jcynsyz_test_5", "jcynsyz_test_6", "jcynsyz_test"],
                cs1: ["caocao_1"],

            }
        },
        characterIntro: {
            test_jcynsyz_qxs: '犬吠埼风的妹妹，黄色短发。  对姐姐风很尊敬，但经常让风感到没办法。  性格内向，很依赖姐姐而对自己的立场抱有疑问，希望有一天能够帮到姐姐。  很喜欢唱歌，却没办法在人前好好表现。但最终在勇者部众人的帮助下克服这一缺点，从而产生了想要当歌手的梦想。  擅长塔罗牌占卜，准确度极高。  勇者装为西式绿色修女装，使用一只可以发出细线的手环作为武器。满开计数器在后背呈现出深绿色小朵朱槿花  满开后使用悬浮在背后的圆环进行攻击，可以发出更多的细线',
            test_jcynsyz_jcyn: '本作主角，讃州中学二年级生。平常是红色短发，在变身之后变为粉色长发。  个性活泼开朗，总是能够保持乐观，即使受到打击也能很快振作起来。勇者适合性是全四国第一，整个勇者部实际上也是大赦围绕她建立起来的。  喜欢帮助他人，在听到了犬吠埼风的劝诱之后立即加入了勇者部。擅长运动，常常给其他运动社团当帮手。  特技是双亲教给她的武术。然而动画除了战斗就是勇者部的社区志愿服务，并没有日常练武的镜头，这个设定仅仅显示在花结手游的卡面中……  勇者装是粉白配色的轻型格斗装，满开计数器在拳套上，图案为樱花，主要攻击方式为拳击和飞踢。满开装附加了一对巨型拳头小拳石。  在东乡搬到隔壁时与其相识，两人关系非常亲密。友奈：“我想每天都能吃到东乡桑的点心！”  城乡结合部万岁，城乡一体化不可避',
            jcynsyz_shxl: '大赦派来的勇者。接受过正式的训练，精灵也是特殊的人型。有实力但比较骄傲，不擅长与人交往。',
            jcynsyz_test: '',
            jcynsyz_test_1: '',
            jcynsyz_test_2: '',
            jcynsyz_test_3: '',
            jcynsyz_test_4: '',
            jcynsyz_test_5: '',
        },
        characterTitle: {
            test_jcynsyz_jcyn: '#bRewrite',
            caocao_1: '#b毅謀定北',
        },
        skill: {
            test_bulue: {
                trigger: {
                    player: "phaseZhunbeiBegin",
                },
                mark: true,
                marktext: '谋',
                intro: {
                    name: "谋",
                    content: "当前有#个“谋”",
                  },
                direct: true,
                content: function() {
                    'step 0'

                    player.chooseTarget([1, Math.min(player.hp, game.countPlayer() - 1 )], get.translation('test_bulue'), function(card, pl, target) {
                        return target != pl
                    });
                    'step 1'
                    if (result.bool) {
                        for (let p of result.targets) {
                            p.storage.test_bulue = player;
                            if (p.storage.test_lue == undefined) {
                                p.storage.test_lue = [];
                            }
                            p.storage.test_lue.addArray(get.cards(1));
                            p.addSkill('test_lue');
                            p.markSkill('test_lue', true);
                        }
                    }
                }
            },
            test_lue: {
                marktext: '略',
                intro: {
                    content: 'cards',
                },
                filter: (event, player) => {
                    console.log(player)
                    return event.targets.length && event.targets[0] == player.storage.test_bulue;
                },
                group: 'test_bulue_beTarget',
                 direct: true,
                trigger: {
                    player: "phaseZhunbeiBegin",
                },
                filter: function(event, player) {
                    return player.storage.test_lue && player.storage.test_lue.length;
                },
                content: () => {
                    'step 0'
                    var cards = player.storage.test_lue;
                     while (cards.length) {
                      ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
                    }
                     player.storage.test_lue = [];
                    player.removeSkill('test_lue');
                    'step 1'
                    event.num++;
                },
                group: ['test_lue_draw', 'test_lue_beTarget'],
                subSkill: {
                    draw: {
                        trigger: {
                            player: "phaseDrawBegin",
                          },
                          forced: "true",
                          content: function() {
                            trigger.num += 1;
                          },
                    },
                    beTarget: {
                          trigger: {
                            target: "useCardToTargeted",
                          },
                          filter: function(event, player) {
                            return event.player.hasSkill('test_bulue') && player.storage.test_bulue != undefined && event.player == player.storage.test_bulue;
                          },
                        direct: true,
                        content: () => {
                            event._target = player.storage.test_bulue;
                            'step 0'
                            var cards = player.storage.test_lue;
                            player.$throw(cards, player, false);
                            player.storage.test_lue = [];
                            event._target.gain(cards, 'gain2');
                            event._target.$gain2(cards);
                            'step 1'
                            if(!event._target.storage.test_xumo){
                            	event._target.addMark('test_bulue',1);
                            }
                            // if(player.countMark('test_bulue') >= 1){}
                            player.removeSkill('test_lue');
                        }
                    },
                }
            },
            test_xumo: {
                skillAnimation: "epic",
                animationColor: "thunder",
                juexingji: "true",
                trigger: {
                    global: "phaseJieshuBegin",
                },
                forced: "true",
                unique: "true",
                audio: "2",
                filter: function(event, player) {
                    return !player.storage.test_xumo && player.countMark('test_bulue') >= 3;
                },
                content: function() {
                    player.loseMaxHp();
                    player.addSkill('test_duange');
                    player.awakenSkill('test_xumo');
                    player.storage.test_xumo = true;
                },
            },

            test_duange: {
                usable: 1,
                enable: 'chooseToUse',
                filter: function(event, player) {
                     return player.storage.test_xumo && player.countMark('test_bulue');
                },
                chooseButton: {
                    dialog: function(event, player) {
                        var list = [];
                        var name;
                        for (var i = 0; i < lib.inpile.length; i++) {
                            name = lib.inpile[i];
                            if (get.type(name) == 'trick' && name != 'shandian') {
                                list.push(['锦囊', '', name]);
                            }
                        }
                        return ui.create.dialog('短歌', [list, 'vcard'], 'hidden');
                    },
                    filter: function(button, player) {
                        return _status.event.getParent().filterCard({
                                name: button.link[2]
                            },
                            player, _status.event.getParent());
                    },
                    backup: function(links, player) {
                    	player.storage.test_duange = links[0][2];
                        return {
                            selectCard: 0,
                            popname: true,
                            filterCard: false,
                            position: 'he',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3]
                            },
                        }
                    },
                    prompt: function(links, player) {
                        return '视为' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
                    },
                },
                sub: true,
                group: 'test_duange_use',
                subSkill: {
                    use:{
                        trigger:{player:'useCard2'},
                        direct:true,
                        filter:function(event,player){
                            return player.storage.test_xumo && player.countMark('test_bulue') && event.card.name == player.storage.test_duange;
                        },
                        line:true,
                        content:function(){
                            'step 0'
                            //  && event.targets.length>=game.countPlayer() - 1
                            if(!['wanjian', 'nanman', 'taoyuan', 'wugu'].contains(trigger.card.name)){
                            		player.removeMark('test_bulue', 1);
                            		return event.finish();
                            }
                            'step 1'
                            player.chooseTarget('',[1, Math.min(game.countPlayer(), player.countMark('test_bulue'))],'为'+get.translation(trigger.card)+'指定目标（不指定为全体）',function(card,player,target){
                            		return true;
                                //return _status.event.targets.contains(target)
                            }).set('targets',trigger.targets).set('ai',function(target){
                                var player=_status.event.player;
                                return -get.effect(target,_status.event.getTrigger().card,player,player)
                            });
                            'step 2'
                            if(result.bool){
                            		player.removeMark('test_bulue', result.targets.length);
                                player.logSkill('test_duange_use',result.targets);
                                trigger.targets = result.targets;
                            }
                        },
                    },
                }
            },
            test_nayan: {
              unique: "true",
              zhuSkill: "true",
              trigger: {
                global: {
                    player: 'phaseUseEnd'
                }
              },
                discard:false,
                lose:false,
                delay:false,
                line:true,
                direct:true,
                clearTime:true,
                prepare:function(cards,player,targets){
                    targets[0].logSkill('huangtian');
                },
                prompt:function(){
                    var player=_status.event.player;
                    var list=game.filterPlayer(function(target){
                        return target!=player&&target.hasZhuSkill('huangtian',player);
                    });
                    var str='将一张【闪】或【闪电】交给'+get.translation(list);
                    if(list.length>1) str+='中的一人';
                    return str;
                },
                filter:function(event,player){
                    if(player.group!='wei') return false;
                    var cnt = 0;
                    for (var i = 0; i < player.getCards('he').length; i++) {
                      if (get.type(event.cards[i]) != 'basic') {
                        cnt++;
                      }
                    }
                    return cnt > 0;
                },
                filterCard:function(card){
                    return get.type(card) != 'basic'
                },
                log:false,
                visible:true,
                filterTarget:function(card,player,target){
                    return target!=player&&target.hasZhuSkill('test_nayan',player);
                },
                content:function(){
                    target.gain(cards,player,'giveAuto');
                    target.addTempSkill('huangtian3','phaseUseEnd');
                },
                ai:{
                    expose:0.3,
                    order:10,
                    result:{
                        target:5
                    }
                }
            },

            qjcuidu: {
                group: ["qjcuidu_qjcuidu1"],
                subSkill: {
                    qjcuidu1: {
                        trigger: {
                            source: "damageBegin",
                        },
                        filter: function(event, player) {
                            return event && event.player;
                        },
                        forced: true,
                        content: function() {
                            var num = trigger.num;
                            trigger.player.addSkill('qjcuidu_qjcuidu2');
                            trigger.player.addMark('qjcuidu_qjcuidu2', num);
                            trigger.cancel();
                            player.draw();
                        },
                    },
                    qjcuidu2: {
                        audio: 2,
                        trigger: {
                            player: "damageBegin",
                        },
                        filter: function(event, player) {
                            return player.countMark('qjcuidu_qjcuidu2');
                        },
                        content: function() {
                            var num = player.countMark('qjcuidu_qjcuidu2');
                            trigger.num += num;
                            delete player.storage.qjcuidu_qjcuidu2;
                            player.removeSkill('qjcuidu_qjcuidu2');
                        },
                        marktext: '毒',
                        locked: true,
                        intro: {
                            content: 'mark',
                        }
                    },
                },
            },

            jcynsyz_skill_test11: {
                enable: 'phaseUse',
                filter: (event, player) => {
                    return Object.keys(player.storage.jcynsyz_skill_test10.players).length;
                },
                forced: true,
                content: () => {
                    var getSkills = (player, target) => {
                        var skills = [];
                        var list = [];
                        if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                        if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                        if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);

                        for (let skill of list) {
                            var info = get.info(skill);
                            if (!info || info.charlotte || info.hiddenSkill || info.zhuSkill || info.juexingji || info.limited || (info.unique && !info.gainable) || lib.skill.drlt_duorui.bannedList.contains(skill) || player.getSkills().contains(skill)) {
                                continue;
                            }
                            skills.push(skill);
                        }
                        return skills;
                    }
                    'step 0'
                    player.loseHp();
                    'step 1'
                    if (!player.isAlive()) return event.finish();
                    player.chooseTarget(get.prompt2('jcynsyz_skill_test11'),
                        function(card, player, target) {
                            return target != player && getSkills(player, target).length;
                        });
                    'step 2'
                    if (!result.targets) return event.finish();
                    var skills = getSkills(player, result.targets[0]);
                    if (!skills.length) return event.finish();
                    player.storage.jcynsyz_skill_test10.player = result.targets[0];
                    skills.push('取消');
                    player.chooseControl(skills).set('prompt', '选择获得一项技能');
                    'step 3'
                    if (result.control == '取消') return event.finish();
                    player.storage.jcynsyz_skill_test10.selectedSkill = result.control;
                    var skills = [];
                    for (var name in player.storage.jcynsyz_skill_test10.players) {
                        skills.addArray(player.storage.jcynsyz_skill_test10.players[name]);
                    }
                    skills.push('取消');
                    player.chooseControl(skills).set('prompt', '选择丢弃一项技能');
                    'step 4'
                    if (result.control == '取消') return event.finish();
                    var id;
                    var skill = result.control;
                    player.removeSkill(skill);
                    for (var name in player.storage.jcynsyz_skill_test10.players) {
                        var index = player.storage.jcynsyz_skill_test10.players[name].contains(skill);
                        if (index != -1) {
                            player.storage.jcynsyz_skill_test10.players[name].splice(index, 1);
                            if (!player.storage.jcynsyz_skill_test10.players[name].length) {
                                delete player.storage.jcynsyz_skill_test10.players[name];
                            }
                            var pl;
                            if (game.hasPlayer(function(current) {
                                    var b = current.name == name;
                                    if (b) {
                                        pl = current;
                                    }
                                    return b;
                                })) {
                                pl.addSkill(skill);
                            }
                        }
                    }

                    var target = player.storage.jcynsyz_skill_test10.player;
                    skill = player.storage.jcynsyz_skill_test10.selectedSkill;

                    target.removeSkill(skill);
                    player.addSkill(skill);

                    var id = target.name;
                    if (player.storage.jcynsyz_skill_test10.players[id] == undefined) {
                        player.storage.jcynsyz_skill_test10.players[id] = [];
                    }
                    player.storage.jcynsyz_skill_test10.players[id].push(skill);
                    player.logSkill('jcynsyz_skill_test10', target);
                    player.say('你的技能现在是我的啦!');
                    game.log(player, '窃取了' + get.translation(target) + '的技能: ' + get.translation(skill));

                }
            },
            jcynsyz_skill_test10: {
                trigger: {
                    player: 'dyingAfter',
                    global: "gameDrawAfter",
                },
                direct: true,
                init: (player) => {
                    player.storage.jcynsyz_skill_test10 = {
                        player: undefined,
                        players: {},
                    }
                },

                filter: (event, player) => {
                    return player.maxHp > 1;
                },
                content: () => {
                    var getSkills = (player, target) => {
                        var skills = [];
                        var list = [];
                        if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                        if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                        if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);

                        for (let skill of list) {
                            var info = get.info(skill);
                            // forced 是锁定技？
                            if (!info || info.charlotte || info.hiddenSkill || info.zhuSkill || info.juexingji || info.limited || (info.unique && !info.gainable) || lib.skill.drlt_duorui.bannedList.contains(skill) || player.getSkills().contains(skill)) {
                                continue;
                            }
                            skills.push(skill);
                        }
                        return skills;
                    }
                    'step 0'
                    player.chooseTarget(get.prompt2('jcynsyz_skill_test10'),
                        function(card, player, target) {
                            return target != player && getSkills(player, target).length && player.storage.jcynsyz_skill_test10.players[target.name] == undefined;
                        });
                    'step 1'
                    if (!result.targets) {
                        return event.finish();
                    }
                    var skills = getSkills(player, result.targets[0]);
                    if (!skills.length) {
                        return event.finish();
                    }
                    player.storage.jcynsyz_skill_test10.player = result.targets[0];
                    player.chooseControl(skills);
                    'step 2'
                    var target = player.storage.jcynsyz_skill_test10.player;
                    var skill = result.control;
                    target.removeSkill(skill);
                    player.addSkill(skill);

                    var id = target.name;
                    if (player.storage.jcynsyz_skill_test10.players[id] == undefined) {
                        player.storage.jcynsyz_skill_test10.players[id] = [];
                    }
                    player.storage.jcynsyz_skill_test10.players[id].push(skill);
                    player.logSkill('jcynsyz_skill_test10', target);
                    player.loseMaxHp();
                    player.say('你的技能现在是我的啦!');
                    game.log(player, '窃取了' + get.translation(target) + '的技能: ' + get.translation(skill));

                },
                group: 'jcynsyz_skill_test10_death',
                subSkill: {
                    death: {
                        trigger: {
                            player: 'dieBefore'
                        },
                        direct: true,
                        content: () => {
                            console.log('die', player.storage.jcynsyz_skill_test10);
                            for (let id in player.storage.jcynsyz_skill_test10.players) {
                                var pl;
                                if (game.hasPlayer(function(current) {
                                        var b = current.name == id;
                                        if (b) {
                                            pl = current;
                                        }
                                        return b;
                                    })) {
                                    for (var skill of player.storage.jcynsyz_skill_test10.players[pl.name]) {
                                        pl.addSkill(skill);
                                        player.removeSkill(skill);
                                    }
                                }
                            }
                            player.say('啊!!!我的技能...');
                            player.storage.jcynsyz_skill_test10.players = [];
                        }
                    }
                }
            },
            jcynsyz_skill_test9: {
                trigger: {
                    target: 'useCardToTargeted'
                },
                filter: (event, player) => {
                    if (event.targets.length != 1) return false;
                    let num = get.number(event.card);
                    let trick = get.type(event.card) == 'trick';
                    let skip = true;
                    for (let card of player.getCards('he')) {
                        if (trick) {
                            if (get.number(card) <= num) {
                                skip = false;
                                break;
                            }
                        } else {
                            if (get.number(card) >= num) {
                                skip = false;
                                break;
                            }
                        }
                    }
                    return !skip;
                },
                direct: true,
                content: () => {
                    'step 0'
                    let trick = get.type(trigger.card) == 'trick';
                    player.chooseCardTarget({
                        filterCard: (card) => {
                            if (trick) {
                                return get.number(card) <= get.number(trigger.card);
                            }
                            return get.number(card) >= get.number(trigger.card);
                        },
                        filterTarget: (card, player, target) => {
                            return player != target;
                        },
                        prompt: get.prompt('jcynsyz_skill_test9'),
                        prompt2: '弃置一张牌，将此【' + get.translation(trigger.card) + '】转移给其他角色',
                        position: 'he',
                        selectCard: 1
                    });
                    'step 1'
                    if (result.bool) {
                        trigger.untrigger();
                        trigger.getParent().targets = result.targets;
                        player.discard(result.cards);
                    }
                }
            },
            jcynsyz_skill_test7: {
                trigger: {
                    player: 'damageEnd',
                },
                direct: true,
                filter: (event, player) => {
                    return event.source && event.source != player && player.countCards('he', { color: 'red' }) > 0;
                },

                filterTarget: function(card, player, target) {
                    return player != target;
                },
                content: () => {
                    'step 0'
                    var next = player.chooseCardTarget({
                        prompt: get.prompt2('jcynsyz_skill_test7'),
                        position: 'he',
                        selectTarget: 2,
                        discard: true,
                        filterCard: (card) => {
                            return get.color(card) == 'red'
                        },
                        ai1: function(card) {
                            return 7 - get.value(card);
                        },
                        ai2: function(target) {

                        },
                        filterTarget: function(card, player, target) {
                            return player != target && target.countCards('he');
                        }
                    });
                    'step 1'
                    if (!result.bool || !result.targets[0].canCompare(result.targets[1])) {
                        return event.finish();
                    }
                    player.discard(result.cards);
                    // player.$throw(result.cards, player, false);
                    result.targets[0].chooseToCompare(result.targets[1]);
                    'step 2'
                    var winner = result.winner;
                    if (result.bool && result.num1 != result.num2) {
                        winner.chooseBool('是否令 ' + get.translation(player) + ' 回复一点体力？').ai = function(event, player) {
                            return winner.isFriendOf(player);
                        }
                    }
                    'step 3'
                    if (result.bool) {
                        player.recover(winner);
                    }
                },
            },
            jcynsyz_skill_test8: {
                trigger: {
                    player: 'recoverAfter'
                },
                fliter: (event, player) => {
                    return event.source && event.source != player && event.num > 0;
                },
                content: () => {
                    console.log(trigger);
                    'step 0'
                    player.chooseControl('heart', 'diamond', 'club', 'spade');
                    'step 1'
                    console.log(result);
                    game.log(player, '选择了' + get.translation(result.control));
                    var card = get.cardPile2(function(card) {
                        return get.suit(card) == result.control && get.type(card) == 'basic';
                    });
                    console.log(card);
                    if (!card) {
                        return event.finish();
                    }
                    player.showCards(card);
                    game.delay(1);
                    player.chooseTarget('选择一名角色获得 ' + get.translation(card));
                    'step 2'
                    console.log(result);
                    if (result.bool) {
                        result.targets[0].gain(card, 'gain2');
                    }
                },
            },
            jcynsyz_skill_test6: {
                trigger: {
                    player: 'phaseZhunbeiBegin'
                },
                init: (player) => {
                    player.storage.jcynsyz_skill_test6 = false;
                },
                usable: 1,
                mod: {
                    ignoredHandcard: function(card, player) {
                        return player.storage.jcynsyz_skill_test6;
                    },
                },
                content: () => {
                    let cnt = player.countCards('h');
                    if (cnt <= 0) cnt = 1;
                    if (cnt > 3) cnt = 3;
                    player.discard(player.getCards('h'));
                    player.storage.jcynsyz_skill_test6 = cnt < player.hp; // 手牌小于血量
                    player.draw(player.hp);
                    player.maxHp = cnt;
                    player.hp = cnt;
                },
            },
            jcynsyz_skill_test3: {
                direct: true,
                marktext: '牌',
                intro: {
                    content: 'cards'
                },
                trigger: {
                    player: 'phaseDiscardAfter'
                },
                init: (player) => {
                    player.storage.jcynsyz_skill_test3 = [];
                },
                filter: (event, player) => {
                    return player.countCards('h');
                },
                content: () => {
                    'step 0'
                    player.chooseCard('选择置于武将上的牌', 'h', [1, player.countCards('h')]).set('ai',
                        function(card) {
                            if (get.position(card) == 'e') return 1 - get.value(card);
                            if (card.name == 'shan' || card.name == 'du' || !player.hasValueTarget(card)) return 1;
                            return 4 - get.value(card);
                        });
                    'step 1'
                    if (result.bool) {
                        // player.logSkill('kongsheng');
                        player.storage.jcynsyz_skill_test3.addArray(result.cards);
                        player.lose(result.cards, ui.special, 'toStorage');
                        game.log(player, '将', result.cards, '置于其武将牌上');
                        player.markSkill('jcynsyz_skill_test3', true);
                    }
                },
                group: ['jcynsyz_skill_test3_roundStart'],
                subSkill: {
                    roundStart: {
                        direct: true,
                        trigger: {
                            player: 'phaseZhunbeiBegin'
                        },
                        fliter: (event, player) => {
                            return player.storage.jcynsyz_skill_test3.length;
                        },
                        content: () => {
                            player.gain(player.storage.jcynsyz_skill_test3, 'gain2', 'fromStorage', 'log');
                            player.storage.jcynsyz_skill_test3 = [];
                            player.markSkill('jcynsyz_skill_test3', true);
                        }
                    }
                }
            },
            jcynsyz_skill_test4: {
                trigger: {
                    player: 'phaseAfter'
                },
                direct: true,
                filter: (event, player) => {
                    return player.countCards('h')
                },
                content: () => {
                    'step 0'
                    player.chooseTarget(get.prompt2('jcynsyz_skill_test4'),
                        function(card, player, target) {
                            return target != player;
                        });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        target.gain(player.getCards('h'), 'give', player);
                        target.storage.jcynsyz_skill_test5 = player.countCards('h') + 2;
                        target.storage.jcynsyz_skill_test5_player = player;
                        target.addSkill('jcynsyz_skill_test5');
                    }
                }
            },
            jcynsyz_skill_test5: {
                direct: true,
                marktext: '牌',
                mark: true, // 实时更新
                intro: {
                    content: (storage, player) => {
                        return '弃牌阶段开始时你需交给' + get.translation(player.storage.jcynsyz_skill_test5_player) + ' ' + player.storage.jcynsyz_skill_test5 + '共计张牌';
                    }
                },
                trigger: {
                    player: 'phaseDiscardBegin'
                },
                filter: (event, player) => {
                    return player.storage.jcynsyz_skill_test5_player.isAlive();
                },
                onremove: true,
                content: () => {
                    'step 0'
                    if (player.countCards('he') <= player.storage.jcynsyz_skill_test5) {
                        player.storage.jcynsyz_skill_test5_player.gain(player.getCards('he'), 'give', player);
                        player.damage();
                        event.finish();
                    }
                    'step 1'
                    player.chooseCardButton(get.prompt('jcynsyz_skill_test5'), player.getCards('he'), player.storage.jcynsyz_skill_test5);
                    'step 2'
                    if (result.bool) {
                        player.storage.jcynsyz_skill_test5_player.gain(result.links, 'give', player);
                        player.removeMark('jcynsyz_skill_test5', player.storage.jcynsyz_skill_test5);
                    }
                }
            },

            jcynsyz_skill_test1: {
                forced: true,
                trigger: {
                    player: 'damageEnd'
                },
                init: (player) => {
                    player.storage.jcynsyz_skill_test1 = 0;
                },
                filter: (event, player) => {
                    return event.num > 0 && event.source && event.source != player;
                },
                marktext: '标',
                intro: {
                    content: (storage, player) => {
                        return player.storage.jcynsyz_skill_test1;
                    }
                },
                content: () => {
                    player.storage.jcynsyz_skill_test1 += trigger.num;
                    player.markSkill('jcynsyz_skill_test1', true);
                },
                group: ['jcynsyz_skill_test1_roundStart'],
                subSkill: {
                    roundStart: {
                        sub: true,
                        trigger: {
                            player: 'phaseDrawBegin'
                        },
                        forced: true,
                        filter: (event, player) => {
                            return player.storage.jcynsyz_skill_test1 > 0;
                        },
                        content: () => {
                            player.storage.jcynsyz_skill_sha = player.storage.jcynsyz_skill_test1;
                            player.addTempSkill('jcynsyz_skill_sha', {
                                player: 'phaseAfter'
                            });
                            trigger.num += player.storage.jcynsyz_skill_test1 * 2;
                            player.storage.jcynsyz_skill_test1 = 0;
                            player.markSkill('jcynsyz_skill_test1', true);
                        }
                    },
                },
            },
            jcynsyz_skill_test2: {
                trigger: {
                    player: 'dieBegin'
                },
                unique: "true",
                direct: true,
                forced: true,
                filterTarget: function(card, player, target) {
                    return player != target;
                },
                filter: (event, player) => {
                    return player.storage.jcynsyz_skill_test1 > 0;
                },
                content: () => {
                    'step 0'
                    player.chooseTarget([1, player.storage.jcynsyz_skill_test1], '你可以移除对至多' + player.storage.jcynsyz_skill_test1 + '玩家造成一点伤害', function(card, pl, target) {
                        return target != pl
                    });
                    'step 1'
                    if (result.bool) {
                        for (let p of result.targets) p.damage();
                    }
                },
            },

            jcynsyz_skill_sha: {
                mark: true,
                marktext: '杀',
                intro: {
                    content: '出杀次数+#'
                },
                filter: (event, player) => {
                    return player.storage.jcynsyz_skill_sha > 0;
                },
                init: function(player, skill) {
                    if (!player.storage.jcynsyz_skill_sha) player.storage.jcynsyz_skill_sha = 0;
                },
                onremove: true,
                mod: {
                    // maxHandcard:function(player,num){
                    //  return num+player.storage.mingjian2;
                    // },
                    cardUsable: function(card, player, num) {
                        if (card.name == 'sha') {
                            player.markSkill('jcynsyz_skill_sha', true);
                            return num + player.storage.jcynsyz_skill_sha;
                        }
                    }
                },
            },

            // test skill
            sanhua: {
                forced: true,
                trigger: {
                    player: "discardAfter",
                },
                filter: function(event, player) {
                    return player.storage.disableEquip.length >= 5;
                },
                onremove: true,
                content: function() {
                    player.judge(function(card) {
                        if (get.suit(card) !== 'heart') {
                            lib.element.player.die.apply(player, []);
                        }
                    })
                },
            },
            ryjnp: {
                enable: "phaseUse",
                usable: "1",
                filter: function(event, player) {
                    return player.countCards('he');
                },
                chooseButton: {
                    dialog: function(event, player) {
                        var list = [];
                        var name;
                        for (var i = 0; i < lib.inpile.length; i++) {
                            name = lib.inpile[i];
                            if (get.type(name) == 'trick') {
                                list.push(['锦囊', '', name]);
                            }
                        }
                        return ui.create.dialog('满开', [list, 'vcard'], 'hidden');
                    },
                    filter: function(button, player) {
                        return _status.event.getParent().filterCard({
                                name: button.link[2]
                            },
                            player, _status.event.getParent());
                    },
                    backup: function(links, player) {
                        return {
                            selectCard: 1,
                            popname: true,
                            filterCard: false,
                            position: 'he',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3]
                            },
                        }
                    },
                    prompt: function(links, player) {
                        return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
                    },
                },
                sub: true,
            },
            ryjbp: {
                enable: "phaseUse",
                usable: "1",
                filter: function(event, player) {
                    return player.countCards('he');
                },
                chooseButton: {
                    dialog: function(event, player) {
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if (name == 'du' || name == 'shan') continue;
                            if (name == 'sha') {
                                list.addArray([
                                    ['基本', '', 'sha'],
                                    ['基本', '', 'sha', 'fire'],
                                    ['基本', '', 'sha', 'thunder'],
                                    ['基本', '', 'sha', 'ice'],
                                ]);
                            } else if (get.type(name) == 'basic') {
                                list.push(['基本', '', name]);
                            }
                        }
                        return ui.create.dialog('满开', [list, 'vcard'], 'hidden');
                    },
                    backup: function(links, player) {
                        return {
                            filterCard: false,
                            selectCard: 1,
                            popname: true,
                            position: 'he',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3]
                            },
                        }
                    },
                    prompt: function(links, player) {
                        return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
                    },
                },
                sub: true,
            },
            yzzq: {
                audio: "2",
                usable: "1",
                trigger: {
                    player: "useCardToPlayered",
                },
                forced: "true",
                logTarget: "player",
                filter: function(event, player) {
                    return event.card.name == 'sha';
                },
                filterCard: false,
                content: function() {
                    'step 0'
                    var list = ['此杀需要两张闪才能抵消'];
                    if (player.countCards('he')) list.push('弃置一张牌令此杀造成的伤害+1');
                    player.chooseControl().set('prompt', '勇者之拳：请选择一项').set('choiceList', list).set('ai',
                        function() {
                            var target = _status.event.getTrigger().target;
                            var player = _status.event.player;
                            var num = target.mayHaveShan() ? 1 : 0;
                            if (get.attitude(player, target) > 0) num = 1 - num;
                            return num;
                        });
                    'step 1'
                    if (result.index == 0) {
                        var id = trigger.target.playerid;
                        var map = trigger.getParent().customArgs;
                        if (!map[id]) map[id] = {};
                        if (typeof map[id].shanRequired == 'number') {
                            map[id].shanRequired++;
                        } else {
                            map[id].shanRequired = 2;
                        }
                        event.finish();
                    }
                    if (result.index == 1) {
                        player.chooseToDiscard('弃置一张牌使伤害+1', 'he', true);
                    }
                    "step 2"
                    if (result.bool) {
                        var id = trigger.target.playerid;
                        var map = trigger.customArgs;
                        if (!map[id]) map[id] = {};
                        if (!map[id].extraDamage) map[id].extraDamage = 0;
                        map[id].extraDamage++;
                    }
                },
            },
            "mankai_jcyn": {
                audio: "ext:结城友奈是勇者:2",
                trigger: {
                    player: "phaseZhunbeiBegin",
                },
                filter: function(event, player) {
                    return player.storage.disableEquip != undefined && player.storage.disableEquip.length < 5;
                },
                content: function() {
                    "step 0"
                    player.chooseToDisable(true);
                    "step 1"
                    if (!result.control) {
                        event.finish();
                    }
                    switch (player.storage.disableEquip.length) {
                        case 1:
                            player.addTempSkill('ryjbp', {
                                player: 'phaseAfter'
                            });
                            break;
                        case 2:
                            player.addTempSkill('ryjnp', {
                                player: 'phaseAfter'
                            });
                            break;
                        case 3:
                            player.addTempSkill('mankai_3', {
                                player: 'phaseAfter'
                            });
                            break;
                        case 4:
                            player.addSkill('daijia');
                            break;
                        case 5:
                            player.addTempSkill('mankai_5', {
                                player: 'phaseAfter'
                            });
                            break;
                    }
                },
                group: "sanhua",
            },
            "mankai_3": {
                skillAnimation: "epic",
                animationColor: "gray",
                enable: "phaseUse",
                usable: "1",
                content: function() {
                    "step 0"
                    event.current = player.next;
                    "step 1"
                    event.current.animate('target');
                    event.current.chooseToDiscard(2, 'he', '弃置2张牌或令' + get.translation(player) + '摸1张牌').set('num', 2).set('ai',
                        function(card) {
                            var evt = _status.event.getParent();
                            if (get.attitude(_status.event.player, evt.player) > 2) {
                                if (card.name == 'jiu') return 120;
                                if (card.name == 'tao') return 110;
                            }
                            return 100 - get.value(card);
                        });
                    "step 2"
                    if (!result.bool) {
                        player.draw();
                    }
                    game.delay(0.5);
                    "step 3"
                    event.current = event.current.next;
                    if (event.current != player) event.goto(1);
                },
                mod: {
                    ignoredHandcard: function(card, player) {
                        return true;
                    },
                    cardDiscardable: function(card, player, name) {
                        return false;
                    },
                },
            },
            daijia: {
                marktext: "代",
                mark: "true",
                intro: {
                    content: "已经没有退路了",
                },
                mod: {
                    cardname: function(card, player, name) {
                        if (card.name == 'shan' || card.name == 'tao') return 'sha';
                    },
                },
                trigger: {
                    source: "damageSource",
                },
                forced: "true",
                filter: function(event, player) {
                    return event.card.name == 'sha';
                },
                content: function() {
                    player.getStat().card.sha--;
                },
            },
            dcy: {
                mark: true,
                mod: {
                    "cardEnabled2": function(card) {
                        return false;
                    },
                },
                intro: {
                    content: "不能使用或打出手牌",
                },
            },
            "mankai_5": {
                enable: "phaseUse",
                usable: "1",
                content: function() {
                    var num = player.maxHp - player.countCards('h');
                    if (num > 0) player.draw(num);
                },
            },
            "jcynsyz_shufu": {
                audioname: "jcynsyz_shufu",
                trigger: {
                    player: "phaseJieshuBegin",
                },
                direct: "true",
                content: function() {
                    'step 0'
                    player.chooseTarget(get.prompt2('jcynsyz_shufu'),
                        function(card, player, target) {
                            return target != player;
                        });
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        target.addSkill('jcynsyz_shufu_target');
                        player.storage.shufu = target;
                    }
                },
                group: "jcynsyz_shufu_reset",
                subSkill: {
                    reset: {
                        forced: true,
                        silent: true,
                        trigger: {
                            player: "phaseBegin",
                        },
                        content: function() {
                            var target = player.storage.shufu;
                            if (target) {
                                target.removeSkill('jcynsyz_shufu_target');
                                delete target.storage.shufu_suits;
                                delete player.storage.shufu;
                            }
                        },
                        sub: true,
                        popup: false,
                    },
                    target: {
                        trigger: {
                            global: ["useCardAfter", "respondAfter"],
                        },
                        marktext: "缚",
                        mark: "true",
                        intro: {
                            content: "每种花色卡牌限用一次",
                        },
                        silent: "true",
                        init: function(player) {
                            player.storage.shufu_suits = [];
                        },
                        content: function() {
                            var suit = get.suit(trigger.card);
                            if (suit) {
                                player.storage.shufu_suits.add(suit);
                            }
                        },
                        mod: {
                            "cardEnabled2": function(card, player) {
                                return !player.storage.shufu_suits.contains(get.suit(card));
                            },
                        },
                        sub: true,
                        forced: true,
                        popup: false,
                    },
                }
            },
            jcynsyz_skill_zj: {
                audioname: "jcynsyz_skill_zj",
                forced: true,
                trigger: {
                    global: "damageEnd",
                },
                filter: function(event, player) {
                    console.log(event);
                    return event.source && event.card.name == 'sha' && event.player != player && !player.isPhaseUsing() && event.player.isAlive() && player.hasSha() && event.player.inRangeOf(player);
                },
                direct: "true",
                frequent: "true",
                content: function() {
                    "step 0"
                    player.chooseToUse({ name: 'sha' }, '追击：是否对' + get.translation(trigger.player) + '使用一张杀？', trigger.player);
                    "step 1"
                    if (result.bool) {
                        player.$throw(result.card, player, false);
                        player.storage.jcynsyz_skill_jr_global.removeArray(result.card);
                        player.markSkill('jcynsyz_skill_jr_global', true);
                    }
                },
            },
            jcynsyz_skill_jr: {
                audio: "2",
                trigger: {
                    player: "phaseDiscardBegin",
                },
                init: function(player) {
                    player.storage.jr_suit = '';
                    player.storage.jcynsyz_skill_jr_global = [];
                },
                filter: (event, player) => {
                    return player.countCards('he') && player.storage.jcynsyz_skill_jr_global.length < 3;
                },
                marktext: "集",
                mark: "true",
                intro: {
                    content: function(storage, player) {
                        return player.storage.jcynsyz_skill_jr_global.length >= 3 ? '刀刃已满' : player.storage.jr_suit == '' ? '未发动' : '正在收集造成过伤害的' + get.translation(player.storage.jr_suit) + '杀';
                    }
                },
                content: function() {
                    'step 0'
                    player.chooseToDiscard('【' + get.translation('jcynsyz_skill_jr') + '】' + '弃置一张牌', 'he', true).set('ai',
                        function(card) {
                            return 6 - get.value(card);
                        });
                    "step 1"
                    if (result.bool) {
                        player.storage.jr_suit = get.color(result.cards[0]);
                    }
                },
                group: ['jcynsyz_skill_jr_roundStart', "jcynsyz_skill_jr_global", "jcynsyz_skill_jr_chooseToRespond", "jcynsyz_skill_jr_chooseToUse"],
                subSkill: {
                    roundStart: {
                        forced: true,
                        silent: true,
                        trigger: {
                            player: "phaseBegin",
                        },
                        popup: false,
                        content: () => {
                            player.storage.jr_suit = '';
                        }
                    },
                    global: {
                        silent: true,
                        forced: true,
                        trigger: {
                            global: "damageEnd",
                        },
                        marktext: "刃",
                        intro: {
                            content: "cards",
                            onunmark: function(storage, player) {
                                if (storage && storage.length) {
                                    player.$throw(storage, 1000);
                                    game.cardsDiscard(storage);
                                    storage.length = 0;
                                }
                            },
                        },
                        filter: function(event, player) {
                            return event.card && event.card.name == 'sha' && event.source != player && get.color(event.card) == player.storage.jr_suit && player.storage.jcynsyz_skill_jr_global.length < 3;
                        },
                        frequent: "true",
                        content: function() {
                            player.$give(trigger.cards, player, false);
                            player.storage.jcynsyz_skill_jr_global.addArray(trigger.cards);
                            player.markSkill('jcynsyz_skill_jr_global', true);
                        },
                    },
                    chooseToRespond: {
                        trigger: { player: 'chooseToRespondBegin' },
                        filter: function(event, player) {
                            if (event.responded) return false;
                            var cards = player.getStorage('jcynsyz_skill_jr_global');
                            if (!cards) return false;
                            for (var i = 0; i < cards.length; i++) {
                                if (event.filterCard(cards[i], player, event) && lib.filter.cardRespondable(cards[i], player, event)) return true;
                            }
                            return false;
                        },
                        direct: true,
                        content: function() {
                            "step 0"
                            player.chooseButton([get.prompt('jcynsyz_skill_jr_global'), player.getStorage('jcynsyz_skill_jr_global')]).set('filterButton', function(button) {
                                var evt = _status.event.getTrigger();
                                if (evt && evt.filterCard) {
                                    return evt.filterCard(button.link, _status.event.player, evt) && lib.filter.cardRespondable(button.link, _status.event.player, evt);
                                }
                                return true;
                            });
                            "step 1"
                            if (result.bool) {
                                trigger.untrigger();
                                trigger.responded = true;
                                trigger.result = {
                                    bool: true,
                                    card: result.links[0],
                                    cards: result.links.slice(0),
                                    skill: 'jcynsyz_skill_jr_global',
                                }
                                player.unmarkAuto('jcynsyz_skill_jr_global', result.links);
                            }
                        }
                    },
                    chooseToUse: {
                        enable: 'chooseToUse',
                        filter: function(event, player) {
                            var cards = player.getStorage('jcynsyz_skill_jr_global');
                            if (!cards) return false;
                            for (var i = 0; i < cards.length; i++) {
                                if (event.filterCard(cards[i], player, event)) return true;
                            }
                            return false;
                        },
                        chooseButton: {
                            dialog: function(event, player) {
                                return ui.create.dialog('集刃', player.getStorage('jcynsyz_skill_jr_global'), 'hidden');
                            },
                            filter: function(button, player) {
                                var evt = _status.event.getParent();
                                if (evt && evt.filterCard) {
                                    return evt.filterCard(button.link, player, evt);
                                }
                                return true;
                            },
                            backup: function(links, player) {
                                return {
                                    audio: 'jcynsyz_skill_jr_global',
                                    filterCard: function() { return false },
                                    selectCard: -1,
                                    viewAs: links[0],
                                    onuse: function(result, player) {
                                        var cards = player.getStorage('jcynsyz_skill_jr_global');
                                        if (cards) {
                                            player.unmarkAuto('jcynsyz_skill_jr_global', [result.card]);
                                        }
                                    }
                                }
                            },
                            prompt: function(links) {
                                return '选择' + get.translation(links) + '的目标';
                            },
                        },
                    },
                },
            },

        },
        translate: {
            jcynsyz_test: '测试',
            jcynsyz_test_1: '测试1',
            jcynsyz_test_3: '测试3',
            jcynsyz_test_2: '测试2',
            jcynsyz_test_4: '测试4',
            jcynsyz_test_5: '测试5',
            jcynsyz: "结城友奈是勇者",
            "test_jcynsyz_qxs": "犬吠埼树",
            "test_jcynsyz_jcyn": "结城友奈",
            "jcynsyz_shxl": "三好夏凛",
            jcynsyz_skill_jr: "集刃",
            jcynsyz_skill_jr_info: "弃牌阶段开始时，你可以弃置一张牌，直到你的回合开始前，每有一张跟你弃置的牌颜色相同的【杀】造成伤害时，若伤害来源不是你，则你可以将这张牌置于你的武将牌上，称为【刃】。当你需要使用或者打出杀时，你可以使用这些刃。你最多拥有三张【刃】",
            jcynsyz_skill_zj: "追击",
            jcynsyz_skill_zj_info: "你的回合外，当有角色受到杀造成的伤害后，若该玩家在你的攻击范围内，则你可以继续对该玩家使用杀",

            sanhua: "散华",
            "sanhua_info": "",
            ryjnp: "任意锦囊牌",
            "ryjnp_info": "",
            ryjbp: "任意基本牌",
            "ryjbp_info": "出牌阶段限一次，你可以选择两名其他角色，令其中一名角色获得另一名角色的一张牌。若以此法移动的牌不来自装备区，则你摸一张牌。然后你可以令二者中手牌数较少的一名角色摸一张牌。",
            yzzq: "勇者之拳",
            "yzzq_info": "回合限一次,当你使用杀指定目标后,你可以选择一项: ①你可以弃置一张牌令此杀伤害数值＋1 ②此杀需要两张闪才能抵消",
            "mankai_jcyn": "满开",
            "mankai_jcyn_info": "准备阶段开始时，你可以废除一个装备栏,根据X值发动以下效果直到回合结束: X=1,出牌限一次,你可以将一张牌当作任意基本牌使用， X=2,出牌限一次,你可以将一张牌当作任意锦囊牌使用(可以添加或者移除一个目标)， X=3,你可以令所有玩家选择一项: 交给你一张牌或者弃置两张牌且你本回合跳过弃牌阶段, X>=4,获得【代价】标记直到你死亡, X=5,将手牌摸至体力上限.回合结束后你进行一次判定，若结果不为红桃你立即死亡. (X为你已废除的装备牌数量)",
            "mankai_3": "满开",
            "mankai_3_info": "弃置两张牌或者令发动者摸一张牌",
            daijia: "代价",
            "daijia_info": "",
            "mankai_5": "先驱",
            "mankai_5_info": "",
            "jcynsyz_shufu": "束缚",
            "jcynsyz_shufu_info": "回合结束阶段,你可以选择一名其他玩家，该玩家直到你的回合每种花色只能打出或使用一张",
            jcynsyz_skill_test1: '技能1',
            jcynsyz_skill_test1_info: '每当你受到一点伤害后，你获得一个标记。你的摸牌阶段开始时，额外摸取X2张牌.且本回合杀上限+ X (X为你的标记数量)',
            jcynsyz_skill_test2: '技能2',
            jcynsyz_skill_test2_info: '当你死亡时，你可以移除所有标记，并对等量的玩家造成一点伤害。',

            jcynsyz_skill_test3: '技能1',
            jcynsyz_skill_test3_info: '弃牌阶段结束后，你可以将任意张手牌置于你的武将牌上，你的下回合开始你可以获得这些牌',
            jcynsyz_skill_test4: '技能2',
            jcynsyz_skill_test4_info: '回合结束阶段，你可以将所有手牌X交给一名玩家，该玩家出牌阶段结束后，须交给你X+2张手牌（如不足则全给且流失一点体力）',

            jcynsyz_skill_test6: '技能1',
            jcynsyz_skill_test6_info: '回合开始时，你可以交换你的血量与手牌值且本回合内手牌上限无限（最小值为1，最大值为5）',

            jcynsyz_skill_test7: '技能1',
            jcynsyz_skill_test8: '技能2',
            jcynsyz_skill_test7_info: '你的回合外受到伤害时，你可以弃置一张红色的手牌，指定两个玩家进行拼点，点数大的玩家可以让你回复一点体力',
            jcynsyz_skill_test8_info: '当其他角色令你回复体力后，你可以让一名玩家从牌堆中获得一张指定花色的基本牌。',

            jcynsyz_skill_test9: '技能1',
            jcynsyz_skill_test9_info: '当你成为基本牌的目标时，你可以弃置一张点数大于或等于此牌的牌转移给其他目标。当你成为锦囊牌的目标是，你可以弃置一张点数小于或等于此牌的牌转移给其他目标。',

            jcynsyz_skill_test10: '技能1',
            jcynsyz_skill_test10_info: '游戏开始或脱离濒死状态时,如果你的血量上限大于1，你可以失去一点体力上限并窃取场上一名玩家的非限定技技能。你死亡后，你归还所有技能',

            jcynsyz_skill_test11: '技能2',
            jcynsyz_skill_test11_info: '出牌阶段，若你已窃取1个技能以上，你可以失去1点体力并选择场上一名其他玩家,窃取其一个技能并归还一个技能',

            qjcuidu: '技能1',
            qjcuidu_info: '你造成伤害时若对方没有毒标记，防止伤害改为获得等量毒标记并摸一张牌',

            test_bulue: '布略',
            test_bulue_info: '准备阶段开始时，你可以选择最多X名其他玩家，各将牌堆顶的一张牌置于其武将牌上，称为【略】。当你对有【略】玩家使用的牌生效后，你可以获得其武将牌上的略并获得一枚【谋】标记。其他玩家准备阶段开始时，若其武将牌上有【略】，则将这些略置于牌堆顶，然后此玩家摸牌阶段多摸一张牌（X为你当前的体力值)',

             test_xumo: '蓄谋',
            test_xumo_info: '觉醒技，在你获得【谋】标记后，若你的【谋】标记不小于3，你减少1点体力上限并获得技能【短歌】，并无法再次获得【谋】',

            test_duange: '短歌',
            test_duange_info: '每回合限一次，当你需要使用一张除【闪电】外的锦囊牌时，你可以移除任意数量的【谋】并视为使用了此牌。若此牌指定的目标包含场上所有角色，则你可以将目标数指定为你弃置【谋】的数量',

            test_nayan: '纳言',
            test_nayan_info: '主公技，其他魏势力角色的出牌阶段结束时，其可以交给你一张非基本牌',
            caocao_1: '曹操',

            test_lue: '略',
            cs1: "测试角色",
            cs2: "测试角色"

        },
    }
});