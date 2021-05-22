game.import('character',
    function(lib, game, ui, get, ai, _status) {
        return {
            characterSort: {
                天行九歌: {
                    mode_extension_天行九歌: ["TXhanfeizi", "TXweizhuang", "TXzinv", "TXyanlingji", "TXjiwuye", "TXmoya", "TXhonglian", "TXnongyu", "TXzhangliang"],
                },
            },
            character: {
                TXhanfeizi: ["male", "wu", 4, ["TXnilin", "TXlvzhi"],
                    ["ext:天行九歌/TXhanfeizi.jpg"]
                ],
                TXweizhuang: ["male", "wu", 4, ["TXhengguan"],
                    ["ext:天行九歌/TXweizhuang.jpg"]
                ],
                TXzinv: ["female", "wu", 3, ["GSrouqing", "GSlengyan"],
                    ["ext:天行九歌/TXzinv.jpg"]
                ],
                TXyanlingji: ["female", "shu", 4, ["TXyanhuo", "TXliwu"],
                    ["ext:天行九歌/TXyanlingji.jpg"]
                ],
                TXjiwuye: ["male", "wei", 4, ["TXjunquan"],
                    ["ext:天行九歌/TXjiwuye.jpg"]
                ],
                TXmoya: ["male", "wei", 4, ["TXyingyi", "TXhuanmo"],
                    ["ext:天行九歌/TXmoya.jpg"]
                ],
                TXhonglian: ["female", "qun", 3, ["TXhanqing", "TXlianhua"],
                    ["ext:天行九歌/TXhonglian.jpg"]
                ],
                TXnongyu: ["female", "wu", 3, ["TXkongshan", "TXniaoyu"],
                    ["ext:天行九歌/TXnongyu.jpg"]
                ],
                TXzhangliang: ["male", "wu", 4, ["TXlingxu", "TXyukong"],
                    ["ext:天行九歌/TXzhangliang.jpg"]
                ],
            },
            translate: {
                TXhanfeizi: "韩非子",
                TXweizhuang: "卫庄",
                TXzinv: "紫女",
                TXyanlingji: "焰灵姬",
                TXjiwuye: "姬无夜",
                TXmoya: "墨鸦",
                TXhonglian: "红莲",
                TXnongyu: "弄玉",
                TXzhangliang: "张良",
                TXnilin: "逆鳞",
                TXnilin_info: "当你使用[杀]时，你可以弃置目标一张牌并随机获得两张锦囊牌。",
                TXlvzhi: "律制",
                TXlvzhi_info: "当你受到伤害后，你可以弃置伤害来源一张牌，并令其非锁定技失效直到其受到伤害。",
                TXhengguan: "横贯",
                TXhengguan_info: "锁定技，你使用的[杀]无视距离，并且可以指定任意名目标；当你体力值大于2时，此杀不可闪避，体力值小于等于2时，此杀伤害+1。",
                GSrouqing: "柔情",
                GSrouqing_info: "准备阶段，你可以令一名角色摸一张并展示之，根据牌的类型执行效果：装备牌其立即装备之并摸一张牌，锦囊牌其增加一点体力上限，基本牌其回复一点体力。",
                GSlengyan: "冷艳",
                GSlengyan_info: "回合结束，你可以与一名其他角色拼点，若你赢，令其失去一点体力，若你没赢，获得其一张牌。",
                TXyanhuo: "艳火",
                TXyanhuo_info: "你造成的伤害均视为火焰伤害。",
                TXliwu: "丽舞",
                TXliwu_info: "每当你使用或打出一张牌，你可以选择一名未横置的角色，令其武将牌横置并弃置其一张牌。",
                TXjunquan: "军权",
                TXjunquan_info: "锁定技，其他角色使用的杀，你获得之；你可以额外使用X张杀(X为你的体力值)。",
                TXyingyi: "影移",
                TXyingyi_info: "出牌阶段限一次，你可以弃置一张手牌，和一名存活的角色交换位置。该目标进行判定，若结果为红色，你对其造成一点伤害，否则你获得其一张牌。",
                TXhuanmo: "幻墨",
                TXhuanmo_info: "当你受到伤害时，你可以取消之，然后将自己武将牌翻面，并对一名其他角色造成一点伤害。",
                TXhanqing: "含情",
                TXhanqing_info: "当你造成或受到伤害时，你可以选择一名未获得'情'标记的角色，令其获得标记，拥有标记的角色准备或结束阶段，摸两张牌并弃置此标记。",
                TXlianhua: "莲花",
                TXlianhua_info: "每当你使用或打出一张红桃牌，你可以回复一点体力，若未损失体力改为摸一张牌。",
                TXkongshan: "空山",
                TXkongshan_info: "出牌阶段限一次，你可以将所有手牌交给一名其他角色，若如此做，你获得一点护甲，该角色获得'空山'标记到其回合结束。",
                TXniaoyu: "鸟语",
                TXniaoyu_info: "锁定技，拥有“空山”标记的角色，每使用一张非装备牌，你摸一张牌。",
                TXlingxu: "灵虚",
                TXlingxu_info: "当你使用或打出一张【杀】时，你获得一枚'灵虚'标记，出牌阶段你可以将此标记当任意一张基本牌使用。",
                TXyukong: "御空",
                TXyukong_info: "当你使用或打出一张【闪】时，你获得一枚'御空'标记，你可以将此标记当任意一张非延时锦囊牌使用。",
                mode_extension_天行九歌: "mode_extension_天行九歌",
            },
            card: {},
            skill: {
                TXnilin: {
                    audio: "ext:天行九歌:1",
                    trigger: {
                        player: "shaBegin",
                    },
                    check: function(event, player) {
                        return get.attitude(player, event.target) <= 0;
                    },
                    content: function() {
                        player.discardPlayerCard(true, trigger.target, 'he');
                        var list = get.inpile('trick', 'trick');
                        var list2 = [];
                        for (var i = 0; i < 2; i++) {
                            list2.push(game.createCard(list.randomGet()));
                        }
                        player.gain(list2, 'draw');
                    },
                },
                TXlvzhi: {
                    trigger: {
                        player: "damageEnd",
                    },
                    filter: function(event, player) {
                        return event.source != player;
                    },
                    check: function(event, player) {
                        return get.attitude(player, event.source) < 0;
                    },
                    logTarget: "source",
                    content: function() {
                        trigger.source.addTempSkill('fengyin', {
                            player: 'damageEnd'
                        });
                        player.discardPlayerCard(trigger.source, 'he', true);
                    },
                    ai: {
                        maixie_defend: "true",
                    },
                },
                TXhengguan: {
                    mod: {
                        targetInRange: function(card, player, target, now) {
                            if (card.name == 'sha') return true;
                        },
                        selectTarget: function(card, player, range) {
                            if (card.name == 'sha' && range[1] != -1) range[1] += Infinity;
                        },
                    },
                    trigger: {
                        player: "shaBegin",
                    },
                    forced: "true",
                    filter: function(event, player) {
                        return event.card && player.hp > 2;
                    },
                    content: function() {
                        game.playTX('TXhengguan1');
                        trigger.directHit = true;
                    },
                    group: ["TXhengguan_1"],
                    subSkill: {
                        1: {
                            trigger: {
                                source: "damageBegin",
                            },
                            forced: "true",
                            unique: "true",
                            filter: function(event, player) {
                                return event.card.name == 'sha' && player.hp <= 2;
                            },
                            content: function() {
                                game.playTX('TXhengguan2');
                                trigger.num++;
                            },
                            sub: "true",
                        },
                    },
                },
                GSrouqing: {
                    audio: "ext:天行九歌:1",
                    trigger: {
                        player: "phaseBegin",
                    },
                    direct: "true",
                    content: function() {
                        "step 0"
                        player.chooseTarget(get.prompt('GSrouqing')).set('ai',
                            function(target) {
                                return get.attitude(_status.event.player, target);
                            });
                        "step 1"

                        if (result.bool) {
                            event.target = result.targets[0];
                            player.logSkill('GSrouqing', result.targets);
                        } else {
                            event.finish();
                        }
                        "step 2"

                        var cards = get.cards();
                        var card = cards[0];
                        switch (get.type(card, 'trick')) {
                            case 'basic':
                                event.effect = 'recover';
                                break;
                            case 'trick':
                                event.effect = 'gainMaxHp';
                                break;
                            case 'equip':
                                event.effect = 'draw';
                                break;
                        }
                        if (get.type(card) == 'equip') {
                            event.target.equip(card);
                            event.target.$draw(card);
                            game.delay();
                        } else {
                            event.target.gain(cards, 'gain2', 'log');
                        }
                        "step 3"

                        switch (event.effect) {
                            case 'recover':
                                event.target.recover();
                                break;
                            case 'draw':
                                event.target.draw();
                                break;
                            case 'gainMaxHp':
                                event.target.gainMaxHp();
                                break;
                        }
                    },
                    ai: {
                        expose: "0.2",
                        threaten: "1.2",
                    },
                },
                GSlengyan: {
                    trigger: {
                        player: "phaseUseAfter",
                    },
                    direct: "true",
                    filter: function(event, player) {
                        return player.countCards('h');
                    },
                    content: function() {
                        'step 0'
                        player.chooseTarget(get.prompt('GSlengyan'),
                            function(card, player, target) {
                                return target != player && target.countCards('h');
                            }).set('ai',
                            function(target) {
                                if (!_status.event.goon) return 0;
                                return -get.attitude(_status.event.player, target);
                            }).set('goon', player.needsToDiscard() || player.hasCard(function(card) {
                            var val = get.value(card);
                            if (val < 0) return true;
                            if (val <= 5) {
                                return card.number >= 11;
                            }
                            if (val <= 6) {
                                return card.number >= 12;
                            }
                            return false;
                        }));
                        'step 1'

                        if (result.bool) {
                            player.logSkill('GSlengyan', result.targets);
                            event.target = result.targets[0];
                            player.chooseToCompare(event.target);
                        } else {
                            event.finish();
                        }
                        'step 2'

                        if (result.bool) {
                            target.loseHp();
                        } else {
                            player.gainPlayerCard(target, 'he', true);
                        }
                    },
                },
                TXyanhuo: {
                    trigger: {
                        source: "damageBefore",
                    },
                    direct: "true",
                    priority: "10",
                    filter: function(event) {
                        return event.nature != 'fire';
                    },
                    content: function() {
                        game.playTX('TXyanhuo1');
                        trigger.nature = 'fire';

                    },
                },
                TXliwu: {
                    trigger: {
                        player: ["useCard", "respondAfter"],
                    },
                    filter: function(event, player) {
                        return game.hasPlayer(function(current) {
                            return !current.isLinked();
                        });
                    },
                    direct: "true",
                    content: function() {
                        "step 0"
                        player.chooseTarget(get.prompt('TXliwu'),
                            function(card, player, target) {
                                return !target.isLinked();
                            }).set('autodelay', trigger.name == 'respond' ? 0.5 : 1).ai = function(target) {
                            return -get.attitude(player, target);
                        };
                        "step 1"

                        if (result.bool) {
                            var target = result.targets[0];
                            player.logSkill('TXliwu', target);
                            target.link();
                            player.discardPlayerCard(target, true);
                        }
                    },
                    ai: {
                        threaten: "0.7",
                    },
                },
                TXjunquan: {
                    trigger: {
                        global: "useCardAfter",
                    },
                    forced: "true",
                    filter: function(event, player) {
                        return (event.card.name == 'sha' && event.player != player && get.position(event.card) == 'd' && get.itemtype(event.card) == 'card');
                    },
                    content: function() {
                        game.playTX('TXjunquan1');
                        player.gain(trigger.card);
                        player.$gain2(trigger.card);
                    },
                    group: ["TXjunquan_1"],
                    subSkill: {
                        1: {
                            mod: {
                                cardUsable: function(card, player, num) {

                                    if (card.name == 'sha') return (player.hp) + 1;
                                },
                            },
                            trigger: {
                                player: "shaBefore",
                            },
                            forced: "true",
                            content: function() {
                                game.playTX('TXjunquan2');

                            },
                            sub: "true",
                        },
                    },
                },
                TXyingyi: {
                    audio: "ext:天行九歌:1",
                    enable: "phaseUse",
                    usable: "1",
                    filterTarget: function(card, player, target) {
                        return player != target;
                    },
                    filterCard: "true",
                    check: function(card) {
                        return 6 - ai.get.value(card);
                    },
                    content: function() {

                        "step 0"
                        game.swapSeat(player, target);
                        "step 1"
                        target.judge(function(card) {
                            return (get.color(card) == 'red') ? 1.5 : -0.5
                        });
                        "step 2"

                        if (result.judge > 0) {
                            target.damage();
                        } else {
                            player.gainPlayerCard(target, 'he', true);
                        }
                    },
                    ai: {
                        order: "9",
                        result: {
                            target: "-0.5",
                        },
                        threaten: "1.2",
                    },
                },
                TXhuanmo: {
                    trigger: {
                        player: "damageBefore",
                    },
                    filter: function(event, player) {
                        return !player.isTurnedOver();
                    },
                    content: function() {
                        'step 0'
                        trigger.cancel();
                        player.turnOver();
                        'step 1'
                        player.chooseTarget('幻墨：对一名其他角色造成一点伤害',
                            function(card, player, target) {
                                return target != player;
                            }).set('ai',
                            function(target) {
                                return -get.attitude(player, target) / (1 + target.hp);
                            });
                        'step 2'

                        if (result.bool) {
                            player.logSkill('TXhuanno', result.targets[0]);
                            result.targets[0].damage();
                            game.playTX('TXhuanmo1');
                        }
                    },
                    ai: {
                        threaten: "1.5",
                        expose: "0.2",
                    },
                },
                TXhanqing: {
                    trigger: {
                        player: "damageEnd",
                        source: "damageEnd",
                    },
                    direct: "true",
                    content: function() {
                        'step 0'
                        player.chooseTarget('含情：选择一名未获得"情"标记的角色，令其获得标记',
                            function(card, player, target) {
                                return !target.hasSkill('TXqing');
                            }).ai = function(target) {
                            var player = _status.event.player;
                            if (get.attitude(player, target) > 0) {
                                return get.recoverEffect(target, player, player) + 1;
                            }
                            return 0;
                        };
                        'step 1'

                        if (result.bool) {
                            game.playTX('TXhanqing1');
                            player.logSkill('TXhanqing', result.targets[0]);
                            result.targets[0].addSkill('TXqing');

                        }
                    },
                },
                TXlianhua: {
                    trigger: {
                        player: ["useCard", "respondEnd"],
                    },
                    frequent: "true",
                    filter: function(event) {
                        return get.suit(event.card) == 'heart';

                    },
                    content: function() {
                        if (player.hp < player.maxHp) {
                            player.recover();
                        } else {
                            player.draw();
                        }

                    },
                    ai: {
                        expose: "0.3",
                        threaten: "1.5",
                    },
                },
                TXkongshan: {
                    audio: "ext:天行九歌:1",
                    enable: "phaseUse",
                    usable: "1",
                    filterTarget: function(card, player, target) {
                        return player != target && !target.hasSkill('TXkongshan_mark');
                    },
                    filter: function(event, player) {
                        return player.countCards('h') > 0;
                    },
                    filterCard: "true",
                    selectCard: "-1",
                    discard: "false",
                    lose: "true",
                    content: function() {
                        player.$give(cards.length, target);
                        target.gain(cards, player);
                        player.changeHujia();
                        target.addTempSkill('TXkongshan_mark', {
                            player: 'phaseAfter'
                        });

                    },
                    subSkill: {
                        mark: {
                            mark: "true",
                            intro: {
                                content: "每当你使用一张非装备牌，弄玉摸一张牌，直到你回合结束",
                            },
                            sub: "true",
                        },
                    },
                    ai: {
                        order: "3",
                        result: {
                            target: "1",
                        },
                        combo: "TXniaoyu",
                        threaten: "1.4",
                    },
                },
                TXniaoyu: {
                    init: function(player) {
                        player.storage.TXniaoyu = 0;
                    },
                    audio: "ext:天行九歌:1",
                    trigger: {
                        global: "useCard",
                    },
                    forced: "true",
                    filter: function(event, player) {
                        return event.player != player && event.player.hasSkill('TXkongshan_mark') && get.type(event.card) != 'equip';
                    },
                    content: function() {
                        player.draw();
                        player.storage.guju++;
                        player.markSkill('TXniaoyu');
                    },
                    ai: {
                        combo: "zongkui",
                    },
                },
                TXlingxu: {
                    group: ["TXlingxu2"],
                    init: function(player) {
                        player.storage.TXlingxu = 0;
                    },
                    intro: {
                        content: "mark",
                    },
                    forced: "true",
                    trigger: {
                        player: ["useCard", "respondAfter"],
                    },
                    filter: function(event, player) {
                        return event.card.name == 'sha';
                    },
                    content: function() {
                        game.playTX('TXlingxu1');
                        player.storage.TXlingxu++;
                        player.syncStorage('TXlingxu');
                        player.markSkill('TXlingxu');
                    },
                    ai: {
                        combo: "fanpu",
                    },
                },
                TXyukong: {
                    group: ["TXyukong2"],
                    init: function(player) {
                        player.storage.TXyukong = 0;
                    },
                    intro: {
                        content: "mark",
                    },
                    trigger: {
                        player: ["respond", "useCard"],
                    },
                    filter: function(event, player) {
                        return event.card.name == 'shan';
                    },
                    forced: "true",
                    content: function() {
                        game.playTX('TXyukong1');
                        player.storage.TXyukong++;
                        player.syncStorage('TXyukong');
                        player.markSkill('TXyukong');
                    },
                    ai: {
                        combo: "fanpu",
                    },
                },
            },
            name: "天行九歌",
            connect: "true",
            characterIntro: {},
            characterTitle: {},
        }
    });