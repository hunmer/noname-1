game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"神机天算",content:function(config,pack){
    lib.skill._chaodao_skill={
        trigger:{
        player:"damageBegin",
    },
    forced:true,
    content:function(){
       if(player.hasSkill('buff_dongshang')&&player.hasSkill('buff_mabi')){
           player.removeSkill('buff_dongshang');
       player.removeSkill('buff_mabi');
           trigger.num++;
      player.logSkill('buff_chaodao');
       }
    },
    }
    lib.skill._gandian_skill={
        trigger:{
        global:"damageBegin",
    },
    forced:true,
    content:function(){
       if(player.hasSkill('buff_mabi')&&player.hasSkill('buff_chaoshi')&&trigger.player!=player){
           player.damage(trigger.num,trigger.source)
           player.removeSkill('buff_mabi');
           player.removeSkill('buff_chaoshi');
           player.logSkill('buff_gandian');
       }
    },
    }
    lib.skill._zhengfa_skill={
       
    trigger:{
        global:"useCard",
    },
    forced:true,
    content:function(){
        if(player.hasSkill('buff_zhuoshao')&&player.hasSkill('buff_chaoshi')){
        player.removeSkill('buff_zhuoshao');
        player.removeSkill('buff_chaoshi');
        player.damage();
        player.logSkill('buff_zhengfa');
        }
        },
    }
        lib.skill._ronghua_skill={
       
    trigger:{
        global:"useCard",
    },
    forced:true,
    content:function(){
        if(player.hasSkill('buff_zhuoshao')&&player.hasSkill('buff_dongshang')){
        player.removeSkill('buff_zhuoshao');
        player.removeSkill('buff_dongshang');
        player.damage();
    player.logSkill('buff_ronghua');
        }
        },
        }
    lib.skill._chaozai_skill={
       
    trigger:{
        global:"useCard",
    },
    forced:true,
    content:function(){
        if(player.hasSkill('buff_zhuoshao')&&player.hasSkill('buff_mabi')){
        player.removeSkill('buff_zhuoshao');
        player.removeSkill('buff_mabi');
        player.damage();
    player.logSkill('buff_chaozai');
        }
    },
        }
    lib.skill._dongjie_skill={
       
    trigger:{
        global:"useCard",
    },
    forced:true,
    content:function(){
        if(player.hasSkill('buff_chaoshi')&&player.hasSkill('buff_dongshang')){
        player.removeSkill('buff_chaoshi');
        player.removeSkill('buff_dongshang');
        player.skip('phaseDraw');
        player.skip('phaseUse');
        player.skip('phaseDiscard');
    player.logSkill('buff_dongjie');
        }
    },
        }
        if(config.riderSJ2==true){
       if(lib.config.mode=="brawl"){
if(!lib.storage.stage) lib.storage.stage={};
if(!lib.storage.stage["骑士大战"]){
lib.storage.stage["骑士大战"]={
    name:"骑士大战",
    intro:"<img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/骑士大战.jpg' width='256' height='200'>",
    scenes:[{"name":"骑士壹章","intro":"","players":[{"name":"Rdecade","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"Rkuuga","name2":"none","identity":"zhong","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"random","name2":"none","identity":"fan","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"骑士贰章","intro":"","players":[{"name":"Rdecade","name2":"none","identity":"zhu","position":2,"hp":null,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},{"name":"Rdecade","name2":"none","identity":"fan","position":3,"hp":null,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"Rden-o","name2":"none","identity":"zhong","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"Rdecade","name2":"none","identity":"fan","position":1,"hp":null,"maxHp":4,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true},{"name":"骑士叁章","intro":"","players":[{"name":"Rhibiki","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"Rkiva","name2":"none","identity":"nei","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"Ragito","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"Rblade","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"Rfaiz","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"Rkabuto","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"Rryuki","name2":"none","identity":"fan","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},{"name":"Rdecade","name2":"none","identity":"zhu","position":0,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[["renwang","spade","1"],["jueying","spade","13"]],"judges":[]}],"cardPileTop":[],"cardPileBottom":[],"discardPile":[],"gameDraw":true}],
    mode:"normal",
    level:0,
};
_status.extensionstage=true;}
if(!_status.extensionmade) _status.extensionmade=[];
_status.extensionmade.push("骑士大战");
}
    }
    if(config.shiliSJ==true){
        lib.skill._damage_skill={
        trigger:{
        player:"damageBegin",
    },
    forced:true,
    filter:function(event){
        return game.countGroup()>1&&event.source.group==event.player.group;
    },
    content:function(){
        trigger.cancel();
    },
        }
    }
if(config.riderSJ==true){
        lib.skill._card4_skill={
        trigger:{
        player:"gainEnd",
    },
    forced:true,
    filter:function(player){
     return player.countCards('h')>4;
        
    },
    content:function(){
       if(!player.hasSkill('Rjiqing'))player.randomDiscard(player.countCards('h')-4,true,'h');
    },
        },
        lib.skill._hp_skill={
        trigger:{
        player:["gainMaxHpBegin","loseMaxHpBegin"],
    },
    forced:true,
    content:function(){
        trigger.cancel();
    },        },
        lib.skill._card0_skill={
        trigger:{
        player:"phaseDiscardBefore",
        global:"gameDrawAfter",
    },
    forced:true,
    content:function(){
        if(!player.hasSkill('Rjiqing'))player.chooseToDiscard(player.countCards('h'),'h',true);
    
    },        },
        lib.skill._draw_skill={
        trigger:{
        player:"phaseDrawBegin",
    },
    forced:true,
    content:function(){
        if(!player.hasSkill('Rjiqing'))player.draw(2);
    },
        }
        }
},precontent:function(){
			 
},help:{"元素反应":"寄生+灼烧=燃烧(弄好别的突然发现忘了写这个)<br><img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/元素反应.jpg' width='512' height='325'>"},config:{"riderSJ":{"init":false,"intro":"开启此模式后，所有角色的手牌数为4;所有角色的体力上限不能被更改;所有角色的手牌上限为0;每名角色于摸牌阶段获得两张牌","name":"[骑士大战]模式"},"shiliSJ":{"init":false,"intro":"开启此模式后，若场上势力数大于1，同势力角色不能对与自己相同势力的角色造成伤害。","name":"[统一战线]模式"},"riderSJ2":{"init":false,"intro":"开启自动下载副本[骑士大战]，此副本请配套[骑士大战]模式使用","name":"[骑士大战]副本"}},package:{
    character:{
        character:{
            zhugeliangSJ:["male","shu",4,["shenjiSJ","tiansuanSJ","yushanSJ"],[]],
            zhaoyunSJ:["male","shu",3,["yinqiangSJ","qinggangSJ","longqiaoSJ"],[]],
            jiangweiSJ:["male","wei",4,["guihanSJ","jizhiSJ","caijianSJ","jizhiSJ_mark"],[]],
            fazhengSJ:["male","shu",3,["tonghuoSJ","qingyuanSJ","ensuanSJ","xingzhuSJ"],[]],
            guiguziSJ:["male","qun",4,["shouyeSJ","zongheSJ"],[]],
            Rkuuga:["male","shen",4,["Rshenghua"],["forbidai"]],
            Ragito:["male","shen",3,["Rshanyao","Rjuexing"],["forbidai"]],
            Rryuki:["male","shen",4,["Rjianglin"],["forbidai"]],
            Rfaiz:["male","shen",3,["Rshipei","Rjiasu"],["forbidai"]],
            Rblade:["male","shen",4,["Rwangpai"],["forbidai"]],
            Rhibiki:["male","shen",4,["Rneigui","Rguihuo"],["forbidai"]],
            Rkabuto:["male","shen",3,["Rtuibian","Rshizhi"],["forbidai"]],
            "Rden-o":["male","shen",4,["Rlieche"],["forbidai"]],
            Rkiva:["male","shen",4,["Rxuexian","Rneigui"],["forbidai"]],
            Rdecade:["male","shen",5,["Rshixing","Rluqi"],["forbidai"]],
            liuxieSJ:["male","qun",4,["mingxunSJ","kuishengSJ","zhaoshuSJ","anyangSJ"],["zhu"]],
            simayiSJ:["male","wei",4,["xiejiSJ","meisuanSJ","molianSJ"],[]],
            zhouyuSJ:["male","wu",4,["huoshiSJ","shuishiSJ","chibiSJ"],[]],
            pangtongSJ:["male","wei",4,["fujiaSJ","zhanchiSJ","jiechengSJ"],[]],
            Testgamer:["none","shen",Infinity,["Test"],["forbidai"]],
        },
        translate:{
            zhugeliangSJ:"神机诸葛亮",
            zhaoyunSJ:"仁将赵云",
            jiangweiSJ:"龙鳞姜维",
            fazhengSJ:"诀睚法正",
            guiguziSJ:"逐利鬼谷子",
            Rkuuga:"空我",
            Ragito:"亚极陀",
            Rryuki:"龙骑",
            Rfaiz:"555",
            Rblade:"剑",
            Rhibiki:"响鬼",
            Rkabuto:"甲斗王",
            "Rden-o":"电王",
            Rkiva:"月骑",
            Rdecade:"帝骑",
            liuxieSJ:"真龙刘协",
            simayiSJ:"魇世司马懿",
            zhouyuSJ:"涡鸦周瑜",
            pangtongSJ:"绘凰庞统",
            Testgamer:"测试用武将",
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
            shenjiSJ:{
                audio:"ext:神机天算:2",
                filter:function (event,player){
        return event.skill!="shenjiSJ";
    },
                trigger:{
                    player:"useSkillEnd",
                },
                frequent:true,
                content:function(){
        player.draw();
    },
            },
            tiansuanSJ:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:神机天算:2",
                filterTarget:function(card,player,target){
        return player!=target;
    },
                filter:function(event,player){
        return player.countCards('h')>0;
    },
                filterCard:true,
                selectCard:1,
                discard:false,
                lose:false,
                delay:false,
                content:function(){
        "step 0"
        target.gain(cards,player,'giveAuto');
        "step 1"
        player.gainPlayerCard('h',target,true);
        "step 2"
                    var list=get.gainableSkills(function(info){
                        if(typeof info.enable=='string') return info.enable=='phaseUse';
                        if(Array.isArray(info.enable)) return info.enable.contains('phaseUse');
                    },target);
                    list.remove(target.getSkills());
                    list=list.randomGets(3);
                    event.skillai=function(){
                        return get.max(list,get.skillRank,'item');
                    };
                    if(event.isMine()){
                        var dialog=ui.create.dialog('forcebutton');
                        dialog.add('天算：选择获得一项技能');
                        var clickItem=function(){
                            _status.event._result=this.link;
                            dialog.close();
                            game.resume();
                        };
                        for(var i=0;i<list.length;i++){
                            if(lib.translate[list[i]+'_info']){
                                var translation=get.translation(list[i]);
                                if(translation[0]=='新'&&translation.length==3){
                                    translation=translation.slice(1,3);
                                }
                                else{
                                    translation=translation.slice(0,2);
                                }
                                var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+
                                translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
                                item.firstChild.addEventListener('click',clickItem);
                                item.firstChild.link=list[i];
                            }
                        }
                        dialog.add(ui.create.div('.placeholder'));
                        event.switchToAuto=function(){
                            event._result=event.skillai();
                            dialog.close();
                            game.resume();
                        };
                        _status.imchoosing=true;
                        game.pause();
                    }
                    else{
                        event._result=event.skillai();
                    }
        "step 3"                    
                    _status.imchoosing=false;
                    var link=result;
                    target.addTempSkill(link,{player:"phaseUseEnd"});
                    target.popup(link);
                    target.flashAvatar('tiansuanSJ',link);
                    game.log(target,'获得了技能','【'+get.translation(link)+'】');
                    game.delay();
        if(target.hasSkill('shenjiSJ'))player.recover();
    },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(player.countCards('h')==player.countCards('h','du')) return -1;
                if(target.hasJudge('lebu')) return 0;
                if(get.attitude(player,target)>3){
                    var basis=get.threaten(target);
                    if(player==get.zhu(player)&&player.hp<=2&&player.countCards('h','shan')&&!game.hasPlayer(function(current){
                        return get.attitude(current,player)>3&&current.countCards('h','tao')>0;
                    })) return 0;
                    if(target.countCards('h')+player.countCards('h')>target.hp+2) return basis*0.8;
                    return basis;
                }
                return 0;
            },
                    },
                },
            },
            yushanSJ:{
                audio:"ext:神机天算:2",
                skillAnimation:"legend",
                animationColor:"fire",
                enable:"phaseUse",
                filterCard:true,
                unique:true,
                filterTarget:function(card,player,target){
target!=player
        return true;
    },
                content:function(){
        "step 0"
        player.awakenSkill('yushanSJ');
        target.addSkill('shenjiSJ');
        "step 1"
        player.storage.yushanSJ=true;
        "step 2"
        player.update();
    },
                ai:{
                    order:9,
                    result:{
                        target:function(player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
            },
            longqiaoSJ:{
                audio:"ext:神机天算:2",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
        "step 0"
        var list=['其对你造成一点伤害','其对你使用杀，然后你摸两张牌'];
        trigger.source.chooseControl(list).set('prompt',get.prompt2('longqiaoSJ')).set('ai',function(){
            return [0,1].randomGet();
        });
        "step 1"
        
       switch(result.control){
               case '其对你造成一点伤害':
                trigger.source.damage();
               break;
               case '其对你使用杀，然后你摸两张牌':
               player.useCard({name:'sha',isCard:true},trigger.source,false);
                trigger.source.draw(2);
               break;
       }
              "step 2"
              var shili=[];
        if(player.group!='qun') shili.push('qun2');
        if(player.group!='shu') shili.push('shu2');
       
        if(_status.currentPhase==player)player.chooseControl(true,shili).set('ai',function(){
            return shili.randomGet();
        }).set('prompt',get.prompt2('longqiaoSJ'));
              "step 3"
             if(_status.currentPhase==player){
                 if(result.control!='cancel2'){
           
            var group=result.control.slice(0,3);
            player.changeGroup(group);
        }}
    },
                subSkill:{
                    dying:{
                        trigger:{
                            player:"dying",
                        },
                        priority:10,
                        forced:true,
                        content:function (){
        player.draw();
    },
                        sub:true,
                    },
                },
            },
            qinggangSJ:{
                group:"qinggangshaSJ",
                equipSkill:true,
                audio:"ext:神机天算:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event){
        return event.card.name=='sha';
    },
                forced:true,
                logTarget:"target",
                content:function(){
        if(player.group=='qun')trigger.target.chooseToDiscard(true,2,'he');
        trigger.target.addTempSkill('qinggang2');
        trigger.target.storage.qinggang2.add(trigger.card);
    },
                ai:{
                    "unequip_ai":true,
                    skillTagFilter:function(player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },
            yinqiangSJ:{
                audio:"ext:神机天算:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
        return target!=player&&target.hp!=1||target.hp==1&&player.countCards('h')>=1&&target!=player;
    },
                content:function(){
        
        if(target.hp==1){
            player.chooseToDiscard(true);
                target.loseHp();
            target.recover();
        if(player.hp<=target.hp){
            target.useCard({name:'sha'},player);    
        
            }}
           else{
              
               if(target.countCards('h','shan')){
                   player.viewHandcards(target);
                   player.draw();
               player.useCard({name:'sha',isCard:true},target,false);
               }
               else{
               player.discardPlayerCard(target,'visible',true,'hej');
               }
        }
    },
                ai:{
                    order:8,
                    result:{
                        target:function(player,target){
              
                return -1;
            },
                    },
                },
            },
            caijianSJ:{
                audio:"ext:神机天算:2",
                enable:"phaseUse",
                usable:1,
                selectCard:2,
                filterCard:true,
                check:function(card){
        return 8-get.value(card);
    },
                position:"he",
                content:function(){
        var skills=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skills.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var link=skills.randomGet();            
            player.addTempSkill(link,{player:'phaseUseBegin'});                                
           game.log(player,'获得技能','【'+get.translation(link)+'】');
    },
            },
            jizhiSJ:{
                marktext:"才",
                group:"jizhiSJ_mark",
                intro:{
                    name:"极智",
                    "name2":"才",
                    content:"当前有#个“才”",
                },
                mod:{
                    cardname:function(card,player){
            if(card.name=='jiu'||card.name=='shan') return 'tao';
        },
                },
                ai:{
                    skillTagFilter:function(player){
            if(!player.countCards('h','jiu')) return false;
        },
                    respondSha:true,
                },
                audio:"ext:神机天算:2",
                trigger:{
                    player:["useCard1","respond"],
                },
                firstDo:true,
                forced:true,
                filter:function(event,player){
        return event.card.name=='tao'&&!event.skill&&
        event.cards.length==1&&event.cards[0].name=='shan'||event.cards[0].name=='jiu';
    },
                content:function(){
        player.addMark('jizhiSJ_mrk',1);
    },
                subSkiill:{
                    mrk:{
                    },
                },
            },
            guihanSJ:{
                skillAnimation:true,
                animationColor:"thunder",
                audio:"ext:神机天算:2",
                unique:true,
                juexingji:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
        return player.storage.jizhiSJ_mark>=6;
    },
                content:function(){
        "step 0"
        player.chooseDrawRecover(2,true,function(event,player){
            if(player.hp==1&&player.isDamaged()) return 'recover_hp';
            return 'draw_card';
        });
        "step 1"
        player.loseMaxHp();
        player.addSkill('jiangwuSJ');
        player.removeSkill('jizhiSJ');
        player.addSkill('shenjiSJ');
        player.awakenSkill('guihanSJ');
        player.changeGroup('shu');
    },
            },
            jiangwuSJ:{
                audio:"ext:神机天算:2",
                "audioname2":{
                    "old_guanzhang":"old_fuhun",
                },
                audioname:["re_guanyu","guanzhang","jsp_guanyu","guansuo"],
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function(card,player){
        if(get.zhu(player,'shouyue')) return true;
        return get.type(card)=='basic';
    },
                position:"he",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function(player){
        if(get.zhu(player,'shouyue')){
            if(!player.countCards('he')) return false;
        }
        else{
            if(!player.countCards('he',{type:'basic'})) return false;
        }
    },
                prompt:"将一张基本牌当杀使用或打出",
                check:function(card){return 4-get.value(card)},
                ai:{
                    skillTagFilter:function(player){
            if(get.zhu(player,'shouyue')){
                if(!player.countCards('he')) return false;
            }
            else{
                if(!player.countCards('he',{color:'red'})) return false;
            }
        },
                    respondSha:true,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function(item){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            if(lib.linked.contains(get.nature(item))) return 3.1;
            return 3;
        },
                    result:{
                        target:function(player,target,card,isLink){
                if(!isLink&&player.hasSkill('jiu')){
                    if(!target.hasSkillTag('filterDamage',null,{
                        player:player,
                        card:card,
                        jiu:true,
                    })){
                     if(get.attitude(player,target)>0){
                         return -7;
                     }
                     else{
                         return -4;
                     }
                    }
                    return -0.5;
                }
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function(card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function(card){
                if(card.nature) return 1;
            },
                        fireDamage:function(card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function(card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function(card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            "jizhiSJ_mark":{
                marktext:"才",
                init:function (player){
        player.storage.jizhiSJ_mark=0;
    },
                intro:{
                    content:function (storage){
            return '当前有'+storage+'个“才”';
        },
                },
                mark:true,
                audio:"ext:神机天算:2",
                trigger:{
                    player:"useCard",
                },
                filter:function(event,player){
        return event.card.name=='tao';
    },
                forced:true,
                content:function (){
        player.storage.jizhiSJ_mark++;
        player.syncStorage('jizhiSJ_mark');
        game.log(player,'获得了一枚“才”');
    },
            },
            tonghuoSJ:{
                audio:"ext:神机天算:2",
                trigger:{
                    global:"dieEnd",
                },
                content:function(){
        "step 0"
        var skills=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&info.unique&&!info.zhuSkill){
                        skills.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var link=skills.randomGet();            
            player.addSkill(link);                                
           game.log(player,'获得技能','【'+get.translation(link)+'】');
    },
            },
            qingyuanSJ:{
                group:"tuogu",
                audio:"ext:神机天算:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function(event,player){
        return _status.currentPhase!=player;
    },
                content:function(){
        var list=['xinenyuan','reganglie','refankui'].randomGet();
        player.addTempSkill(list,['phaseAfter','phaseBefore']);
    },
            },
            ensuanSJ:{
                audio:"ext:神机天算:2",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                audioname:["gz_jun_sunquan"],
                enable:"phaseUse",
                skillAnimation:"legend",
                animationColor:"fire",
                usable:1,
                position:"he",
                filterCard:true,
                selectCard:[1,2],
                prompt:"弃置一至两张牌并令一名角色失去等量体力上限，并令其获得一至两个技能",
                check:function(card){
        return 6-get.value(card)
    },
                content:function(){
        'step 0'
        target.loseMaxHp(cards.length);
        var skills=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skills.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var link1=skills.randomGet();          
        var link2=skills.randomGet();
            target.addSkill(link1);      
        game.log(target,'获得技能','【'+get.translation(link1)+'】');
        if(cards.length==2){  
            target.addSkill(link2);
           game.log(target,'获得技能','【'+get.translation(link2)+'】');
         }   
        
             'step 1'
        player.awakenSkill('ensuanSJ');
        player.storage.ensuanSJ=true;
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            xingzhuSJ:{
                audio:"ext:神机天算:2",
                audioname:["sp_lvmeng"],
                trigger:{
                    player:"phaseDrawBegin2",
                },
                frequent:true,
                filter:function(event,player){
        return !event.numFixed;
    },
                content:function(){
        trigger.num++;
        player.chooseToDiscard(1,true);
    },
                ai:{
                    threaten:1.3,
                },
            },
            shouyeSJ:{
                audio:"ext:神机天算:2",
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                content:function(){
        var list=["new_liyu","zhiheng","shenjiSJ","qicai"].randomGet();
        trigger.player.addTempSkill(list);
    },
            },
            zongheSJ:{
                audio:"ext:神机天算:2",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                direct:true,
                filter:function(event,player){
        if(player.getHistory('skipped').contains('phaseUse')) return false;
        return player.getHistory('useCard',function(evt){
            if(evt.targets&&evt.targets.length&&evt.isPhaseUsing()){
                var targets=evt.targets.slice(0);
                while(targets.contains(player)) targets.remove(player);
                return targets.length>0;
            }
            return false;
        }).length==0;
    },
                content:function(){
        "step 0"
        player.chooseTarget(get.prompt('zongheSJ'),'摸一张牌令一名其他角色摸一张杀',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        "step 1"
        var card=get.discardPile(function(card){
            return card.name=='sha';
        });
        
        
        if(card&&result.bool){
            player.logSkill('zongheSJ',result.targets);
        player.draw();
        result.targets[0].gain(card,'gain2');
    }
    },
            },
            Rshenghua:{
                audio:"ext:神机天算:2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function(){
        "step 0"
        player.draw(2);
        player.loseHp();
        "step 1"
        player.chooseDrawRecover(true,2);
    },
            },
            Rshanyao:{
                audio:"ext:神机天算:2",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,
                content:function(){
        if(player.countCards('e')>0){
        player.randomDiscard(true,'e');
        player.draw(3);
            }
        else{
            event.finish();
        }
    },
            },
            Rjuexing:{
                audio:"ext:神机天算:2",
                enable:"phaseUse",
                prompt:"展示所有手牌，然后失去一点体力并随机使用一件装备",
                content:function(){
        "step 0"
        player.showHandcards();
        player.loseHp(1);
        
        "step 1"
        player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
    
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function(player){
                if(player.countCards('h')>=player.hp-1) return -1;
                if(player.hp<3) return -1;
                return 1;
            },
                    },
                },
            },
            Rjianglin:{
                audio:"ext:神机天算:2",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function(){
        'step 0'
        
        player.chooseTarget(get.prompt('Rjianglin'),'令一名角色摸一张杀',function(card,player,target){
            return target.hp>0;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        var card=get.discardPile(function(card){
            return card.name=='sha';
        });
        if(result.bool){
            player.logSkill('Rjianglin',result.targets);
            result.targets[0].gain(card,'gain2');
        }
    },
            },
            Rshipei:{
                forced:true,
                filter:function(event,player){
        return !event.player.isTurnedOver();
    },
                audio:"ext:神机天算:2",
                trigger:{
                    player:"turnOverAfter",
                },
                content:function(){
        player.recover();
    },
                ai:{
                    expose:0.2,
                },
            },
            Rjiasu:{
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                direct:true,
                audio:"ext:神机天算:2",
                content:function(){
        "step 0"
        player.chooseUseTarget('###是否发动【加速】？###视为使用一张【知己知彼】',{name:'zhibi'}).logSkill='Rjiasu';
        "step 1"
        if(result.bool){
            player.turnOver();
        }
        
    },
                ai:{
                    threaten:function(player,target){
            return 1.6;
        },
                },
            },
            Rwangpai:{
                audio:"ext:神机天算:2",
                filter:function (event,player){
        return player.countCards('h')>3;
    },
                enable:"phaseUse",
                usable:1,
                check:function(card){
        return 6-get.value(card)
    },
                content:function(){
        "step 0"
        player.draw();
        "step 1"
        player.draw();
        "step 2"
        player.draw();
        "step 3"
        player.draw();
        "step 4"
        player.draw();
        "step 5"
        player.draw();
        "step 6"
        player.draw();
        "step 7"
        player.draw();
        "step 8"
        player.draw();
        "step 9"
        player.draw();
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            Rtuibian:{
                trigger:{
                    player:"loseAfter",
                },
                filter:function(event,player){
        if(event.type!='discard') return;
        for(var i=0;i<event.cards2.length;i++){
            if(get.color(event.cards2[i],event.hs.contains(event.cards2[i])?event.player:false)=='black'&&get.name(event.cards2[i])=='sha'&&
                get.position(event.cards2[i],event.hs.contains(event.cards2[i])?event.player:false)=='d'){
                return true;
            }
        }
        return false;
    },
                audio:"ext:神机天算:2",
                direct:true,
                content:function(){
        'step 0'
        var cards=[];
        for(var i=0;i<trigger.cards2.length;i++){
            if(get.color(trigger.cards2[i],trigger.hs.contains(trigger.cards2[i])?trigger.player:false)=='black'&&get.name(trigger.cards2[i],trigger.hs.contains(trigger.cards2[i])?trigger.player:false)=='sha'&&
                get.position(trigger.cards2[i])=='d'){
                cards.push(trigger.cards2[i]);
            }
        }
        if(!cards.length){
            event.finish();
        }
        else{
            event.cards=cards;
        }
        'step 1'
        if(event.cards.length){
            player.chooseTarget(get.prompt('Rtuibian'),'将'+get.translation(event.cards)+(event.cards.length>1?'中的一张牌':'')+'当做【杀】对一名其他角色使用',function(card,player,target){
                var cs=_status.event.cards;
                for(var i=0;i<cs.length;i++){
                    if(player.canUse({name:'sha',cards:[cs[i]]},target,false)) return true;
                }
                return false;
            }).set('ai',function(target){
                var player=_status.event.player;
                return get.effect(target,{name:'sha'},player,player);
            }).set('cards',cards);
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool&&result.targets&&result.targets.length){
            event.current=result.targets[0];
            if(event.cards.length==1){
                event.directCard=event.cards[0];
            }
            else{
                delete event.directCard;
                player.chooseCardButton('选择一张牌当作杀使用',event.cards,true).set('filterButton',function(button){
                    return player.canUse({name:'sha',cards:[button.link]},_status.event.target,false);
                }).set('target',event.current);
            }
        }
        else{
            event.finish();
        }
        'step 3'
        var card;
        if(event.directCard){
            card=event.directCard;
        }
        else if(result.links&&result.links.length&&
            event.cards.contains(result.links[0])){
            card=result.links[0]
        }
        if(card){
            event.cards.remove(card);
            player.line(event.current);
            player.useCard({name:'sha'},event.current,[card],'Rtuibian').animate=false;
            event.goto(1);
        }
    },
            },
            Rshizhi:{
                audio:"ext:神机天算:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                content:function(){
        trigger.nature='thunder';
        if(!trigger.player.isLinked())trigger.player.link(true);
    },
            },
            Rguihuo:{
                audio:"ext:神机天算:2",
                trigger:{
                    source:"damageBegin",
                    player:"damageBegin",
                },
                forced:true,
                content:function(){
        trigger.nature="fire",
        player.draw();
    },
            },
            Rxuexian:{
                audio:"ext:神机天算:2",
                usable:1,
                trigger:{
                    source:"damageEnd",
                },
                frequent:true,
                content:function(){
        player.recover();
        trigger.player.randomDiscard(true);
        trigger.player.draw();
    },
            },
            Rneigui:{
                audio:"ext:神机天算:2",
                filter:function(event,player){
        if(!player.hasSkill('Rshixing'))return game.roundNumber>=3;
        return false;
      
    },
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                content:function(){
        
        player.setIdentity('fan');
        player.identity="fan";
        player.node.identity.dataset.color='Rneigui';
        player.identityShown=true;
        player.storage.Rneigui=true;  
        player.removeSkill('Rneigui');
    },
            },
            Rshixing:{
                unique:true,
                trigger:{
                    player:"phaseZhunbeiEnd",
                },
                direct:true,
                init:function(player){
        player.storage.Rshixing=[];
        // player.storage.xiongcai2=0;
    },
                intro:{
                    content:"characters",
                },
                content:function(){
        'step 0'
        // if(player.storage.xiongcai2<1){
        //        player.storage.xiongcai2++;
        //        event.finish();
        // }
        // else{
        //        player.storage.xiongcai2=0;
        // }
        'step 1'
        player.logSkill('Rshixing');
        var riders=['Rkuuga','Ragito','Rryuki','Rfaiz','Rblade','Rhibiki','Rkabuto','Rden-o','Rkiva'];
        var list=[];
        var list2=[];
        var players=game.players.concat(game.dead);
        for(var i=0;i<players.length;i++){
            list2.add(players[i].name);
            list2.add(players[i].name1);
            list2.add(players[i].name2);
        }
        for(var i in lib.character){
           
            if(player.storage.Rshixing.contains(i)) continue;
            if(list2.contains(i)) continue;
            list.push(i);
        }
        var name=riders.randomGet();
        player.storage.Rshixing.push(name);
        player.markSkill('Rshixing');
        var skills=lib.character[name][3];
        for(var i=0;i<skills.length;i++){
            player.addTempSkill(skills[i],{player:"phaseZhunbeiBegin"});
        }
        event.dialog=ui.create.dialog('<div class="text center">'+get.translation(player)+'发动了【世行】',[[name],'character']);
        game.delay(2);
        'step 2'
        event.dialog.close();
    },
            },
            Rlieche:{
                audio:"ext:神机天算:2",
                trigger:{
                    global:"phaseDrawEnd",
                },
                forced:true,
                content:function(){
       'step 0'
        var list=['展示所有手牌','交给其两张牌'];
        trigger.player.chooseControl(list).set('prompt',get.prompt2('Rlieche')).set('ai',function(){
            return [0,1].randomGet();
        });
        'step 1'
        switch(result.control){
            case '展示所有手牌':
                trigger.player.showHandcards();
                
                break;
            
            case '交给其两张牌':
                trigger.player.chooseCard(2,'he','将两张牌交给'+get.translation(player),true);
                
                break;
            }
                'step 2'
           if(result.cards){
             trigger.player.$giveAuto(result.cards,player);
                player.gain(result.cards,trigger.player);
             
        }
        
    },
            },
            Rjiqing:{
            },
            Rluqi:{
                audio:"ext:神机天算:2",
                skillAnimation:"legend",
                animationColor:"fire",
                filter:function(event,player){
        if(player.identity!="zhu")return false;
        return game.roundNumber>=4;
      
    },
                enable:"phaseUse",
                content:function(){
        player.addSkill('Rjiqing');
        player.awakenSkill('Rluqi');
        player.storage.Rluqi=true;
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function(player){
                if(player.countCards('h')>=player.hp-1) return -1;
                if(player.hp<3) return -1;
                return 1;
            },
                    },
                },
            },
            qinggangshaSJ:{
                audio:"ext:神机天算:2",
                trigger:{
                    player:"shaBegin",
                },
                direct:true,
                content:function(){
        if(player.group=='shu')trigger.directHit=true;
        
    },
            },
            mingxunSJ:{
                audio:"ext:神机天算:2",
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                content:function(){
        var group=['wei','shu','wu','qun'].randomGet();
        player.changeGroup(group);
    },
            },
            kuishengSJ:{
                audio:"ext:神机天算:2",
                global:"kuishengSJ_use",
                subSkill:{
                    use:{
                        audio:"kuishengSJ",
                        trigger:{
                            player:"phaseUseBegin",
                        },
                        direct:true,
                        filter:function (event,player){
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].hasSkill('kuishengSJ')){
                return game.hasPlayer(function(current){
            return current!=player&&current.countCards('he')&&game.players[i]!=player;
        });
            }
        }
        return false;
    },
                        content:function(){
        'step 0'
        player.chooseTarget(get.prompt2('kuishengSJ_use'),function(card,player,target){
            return target!=player&&target.countCards('he')&&target.hasSkill('kuishengSJ')&&target!=player;
        }).set('ai',function(target){
            if(target.group=='wu')return true;
            if(target.group!='wei'&&target.group!='shu') return get.attitude(_status.event.player,target);
            return -get.attitude(_status.event.player,target);
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            event.target=target;
            player.logSkill('kuishengSJ_use',target);
            target.chooseCard(true,'he','傀生：将一张牌交给'+get.translation(player));
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            
            
            event.target.give(result.cards,player,true);
        target.draw();}
        },
                        sub:true,
                    },
                },
            },
            zhaoshuSJ:{
                trigger:{
                    player:"gainEnd",
                },
                audio:"ext:神机天算:2",
                direct:true,
                filter:function (event,player){
        return _status.currentPhase!=player;
    },
                content:function (){
        "step 0"
    var SJ=_status.currentPhase;
    if(player.group=='wei'){
    SJ.chooseToDiscard(true,2,'he');
    }
        if(player.group=='shu'){
        player.useCard({name:'sha',isCard:true},SJ,false);
        }
    if(player.group=='wu'){
        SJ.draw();
        }
        if(player.group=='qun'){
        player.chooseToPSS(SJ);
        }
        "step 1"
        if(player.group=='qun'&&result.bool){
            var SJ2=_status.currentPhase;
            var skills=[]; 
            for(var i in lib.character){ 
                for(var j=0;j<lib.character[i][3].length;j++){ 
                    var info=lib.skill[lib.character[i][3][j]];
                    if(info&&(info.gainable||!info.unique)&&!info.zhuSkill){
                        skills.add(lib.character[i][3][j]); 
                    }
                } 
            }
            var link=skills.randomGet();            
            SJ2.addTempSkill(link);                                
           game.log(SJ2,'获得技能','【'+get.translation(link)+'】');
        }
        
    },
            },
            anyangSJ:{
                group:"anyangSJ4",
                zhuSkill:true,
                audio:"ext:神机天算:2",
                filter:function(event,player){
        if(!player.hasZhuSkill('anyangSJ'))return false;
        if(player==_status.currentPhase)return false;
        return true;
    },
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                content:function(){
        'step 0'
        player.choosePlayerCard(player,'he',
            [1,Infinity],get.prompt('anyangSJ',player));
        'step 1'
        if(result.bool&&result.links.length){
            player.logSkill('anyangSJ',player);
            if(player.storage.anyangSJ2){
                player.storage.anyangSJ2=player.storage.anyangSJ2.concat(result.links);
            }
            else{
                player.storage.anyangSJ2=result.links.slice(0);
            }
            game.addVideo('storage',player,['anyangSJ2',get.cardsInfo(player.storage.anyangSJ2),'cards']);
            player.addSkill('anyangSJ2');
            player.lose(result.links,ui.special,'toStorage');
        }
    },
                ai:{
                    "unequip_ai":true,
                    skillTagFilter:function(player,tag,arg){
            if(arg&&arg.name=='sha'&&arg.target.getEquip(2)) return true;
            return false;
        },
                },
            },
            "anyangSJ2":{
                trigger:{
                    global:"phaseEnd",
                },
                forced:true,
                audio:"ext:神机天算:2",
                mark:true,
                intro:{
                    content:"cardCount",
                    onunmark:function(storage,player){
            if(storage&&storage.length){
                player.$throw(storage,1000);
                game.cardsDiscard(storage);
                game.log(storage,'被置入了弃牌堆');
             storage.length=0;
            }
        },
                },
                content:function(){
        if(player.storage.anyangSJ2){
            player.gain(player.storage.anyangSJ2,'fromStorage');
            delete player.storage.anyangSJ2;
        }
        player.removeSkill('anyangSJ2');
    },
            },
            "anyangSJ3":{
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                popup:false,
                content:function(){
        player.$throw(player.storage.anyangSJ2,1000);
        for(var i=0;i<player.storage.anyangSJ2.length;i++){
            game.cardsDiscard(player.storage.anyangSJ2);
        }
        game.log(player,'弃置了',player.storage.anyangSJ2);
        delete player.storage.anyangSJ2;
        player.removeSkill('anyangSJ2');
    },
            },
            "anyangSJ4":{
                audio:"ext:神机天算:2",
                trigger:{
                    global:"useCardEnd",
                },
                direct:true,
                content:function(){
        if(trigger.player.countCards('h')==player.storage.anyangSJ2.length)player.draw();
    },
            },
            Test:{
                mark:true,
                marktext:"<img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/Sakuraの銀河.jpg' width='25' height='25'>",
                intro:{
                    name:"<img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/Test.png' width='14' height='14'>",
                    content:"这只是一个测试",
                },
            },
            "buff_kuosan":{
                mark:true,
                marktext:"<img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/扩散.png' width='25' height='25'>",
                intro:{
                    name:"扩散",
                    content:"你的摸牌阶段多摸一张牌，弃牌阶段少存一张牌;和灼烧,冻伤,麻痹和潮湿会触发扩散反应",
                },
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,
                filter:function(event,player){
        return !event.numFixed;
    },
                content:function(){
        trigger.num++;
    },
                ai:{
                    threaten:1.5,
                },
                mod:{
                    maxHandcardBase:function(player,num){
            return num-=1;
        },
                },
            },
            "buff_jiejing":{
                mark:true,
                marktext:"<img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/结晶.png' width='25' height='25'>",
                intro:{
                    name:"结晶",
                    content:"你的摸牌阶段少摸一张牌，弃牌阶段多存一张牌;和灼烧,冻伤,麻痹和潮湿会触发结晶反应",
                },
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,
                filter:function(event,player){
        return !event.numFixed;
    },
                content:function(){
        trigger.num-=1;
    },
                ai:{
                    threaten:1.5,
                },
                mod:{
                    maxHandcardBase:function(player,num){
            return num+=1;
        },
                },
            },
            "buff_zhuoshao":{
                mark:true,
                marktext:"<img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/灼烧.png' width='25' height='25'>",
                intro:{
                    name:"灼烧",
                    content:"每当你使用一张牌，你有百分之五十的概率弃置一张牌<br>扩散灼烧:你触发灼烧时，你多弃置一张牌<br>结晶灼烧:你触发灼烧时，若你没有护甲，你获得一枚护甲",
                },
                trigger:{
                    player:"useCardAfter",
                },
                forced:true,
                filter:function(player){
       return Math.random()<0.5;
    },
                content:function(){
    if(!player.hasSkill('buff_kuosan')){
        player.chooseToDiscard(true,'he');
    }
        else{
            player.chooseToDiscard(2,true,'he');
            }
    if(player.hasSkill('buff_jiejing')&&player.hujia<=0)player.changeHujia();
    },
            },
            "buff_mabi":{
                mark:true,
                marktext:"<img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/麻痹.png' width='25' height='25'>",
                intro:{
                    name:"麻痹",
                    content:"每当你使用一张牌，你有百分之五十的概率停止使用并弃置<br>扩散麻痹:你触发麻痹时，你展示所有手牌并弃置与此牌同名牌<br>结晶麻痹:你触发麻痹时，若你没有护甲，你获得一枚护甲",
                },
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function(player){
       return Math.random()<0.5;
    },
                content:function(){
    if(player.hasSkill('buff_kuosan')){
        player.showHandcards();
        player.discard(player.getCards('h',{name:get.name(trigger.card)}));
        trigger.cancel();
    }
        else{
            trigger.cancel()
            }
    if(player.hasSkill('buff_jiejing')&&player.hujia<=0)player.changeHujia();
    },
            },
            "buff_dongshang":{
                mark:true,
                marktext:"<img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/冻伤.png' width='25' height='25'>",
                intro:{
                    name:"冻伤",
                    content:"当你使用手牌时，若你的手牌数不大于2，你失去一点体力<br>扩散冻伤:数量由2改为4<br>结晶冻伤:你因冻伤失去体力后，若你没有护甲，你获得一层护甲",
                },
                trigger:{
                    player:"useCard",
                },
                direct:true,
                content:function(){
        
        if(!player.hasSkill('buff_kuosan')){
           if(player.countCards('h')<=2){
               player.loseHp();
               player.logSkill('buff_dongshang');
                       if(player.hasSkill('buff_jiejing')&&player.hujia<=0)player.changeHujia();
           }
        else{
            event.finish();
        }
        }
        if(player.hasSkill('buff_kuosan')&&player.countCards('h')<=4){
            player.loseHp();
            player.logSkill('buff_dongshang');
            if(player.hasSkill('buff_jiejing')&&player.hujia<=0)player.changeHujia();
            }
    },
            },
            "buff_chaoshi":{
                mark:true,
                marktext:"<img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/潮湿.png' width='25' height='25'>",
                intro:{
                    name:"潮湿",
                    content:"当你回复体力时，你有百分之五十的几率令回复的体力+1<br>扩散潮湿:触发潮湿时，你摸一张牌<br>结晶潮湿:当触发潮湿时，若你没有护甲，你获得一枚护甲",
                },
                trigger:{
                    player:"recoverBegin",
                },
                forced:true,
                filter:function(player){
       return Math.random()<0.5;
    },
                content:function(){
        trigger.num++;
        if(player.hasSkill('buff_kuosan'))player.draw();
        if(player.hasSkill('buff_jiejing')&&player.hujia<=0)player.changeHujia();
    },
            },
            "buff_jisheng":{
                mark:true,
                marktext:"<img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/寄生.png' width='25' height='25'>",
                intro:{
                    name:"寄生",
                    content:"回合开始时，你受到一点伤害并回复一点体力",
                },
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function(){
       if(!player.hasSkill('buff_zhuoshao')){
           player.damage();
           player.recover();
       }
        else{
            player.damage('fire');
            player.recover();
            player.damage('fire');
            player.recover();
            player.damage('fire');
            player.recover();
            
        }
        
       },
            },
            "buff_zhengfa":{
            },
            "buff_ronghua":{
            },
            "buff_dongjie":{
            },
            "buff_chaozai":{
            },
            "buff_chaodao":{
            },
            "buff_gandian":{
            },
            meisuanSJ:{
                audio:"ext:神机天算:2",
                trigger:{
                    player:"loseHpBegin",
                },
                forced:true,
                content:function(){
player.chooseToDiscard(trigger.num,true);
if(player.hasSkill('buff_dongshang'))player.draw(trigger.num);
    trigger.cancel();
    },
            },
            molianSJ:{
                audio:"ext:神机天算:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function(){
        trigger.cancel();
        player.draw(3);
        player.addSkill('buff_dongshang');
    },
            },
            xiejiSJ:{
                audio:"ext:神机天算:2",
                frequent:true,
                filter:function (event,player){
        return event.skill!="xiejiSJ";
    },
                trigger:{
                    global:"useSkillEnd",
                },
                content:function(){
        if(!_status.currentPhase.hasSkill('buff_dongshang'))_status.currentPhase.addTempSkill('buff_dongshang',{player:"phaseUseBegin"});
        _status.currentPhase.randomDiscard(true,'h');
    },
            },
            huoshiSJ:{
                filter:function(){
        return Math.random()<0.85;
    },
                audio:"ext:神机天算:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function(){
        trigger.player.addTempSkill('buff_zhuoshao',{player:"recoverEnd"});
    },
            },
            shuishiSJ:{
                audio:"ext:神机天算:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                content:function(current){
       
        trigger.cancel();
        var numm=game.countPlayer(function(current){
            return current.hasSkill('huoshiSJ');
        });
       
            player.drawTo(numm*2);
            player.addTempSkill('buff_chaoshi','phaseEnd');
            
        
    },
            },
            chibiSJ:{
                audio:"ext:神机天算:2",
                enable:"phaseUse",
                filter:function(event,player){
        var num;
        var mode=get.mode();
        if(mode=='identity'){
            if(_status.mode=='purple') num=player.getEnemies().length;
            else num=get.population('fan');
        }
        else if(mode=='versus'){
            num=player.getEnemies().length;
        }
        else{
            num=1;
        }
        if((player.getStat().skill.chibiSJ||0)>=num) return false;
        return true;
    },
                filterTarget:function(card,player,target){
target!=player
        return true;
    },
                content:function(){
        var youme=[player,target].randomGet();
        var youme2=[player,target].randomGet();
       youme.addSkill('huoshiSJ');
       youme2.addTempSkill('buff_chaoshi',{player:"phaseEnd"});
    },
                ai:{
                    order:9,
                    result:{
                        target:function(player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
            },
            fujiaSJ:{
                audio:"ext:神机天算:2",
                trigger:{
                    player:"useCard",
                },
                direct:true,
                content:function(){
        "step 0"
        player.chooseTarget(get.prompt('fujiaSJ'),'令一名其他角色获得一枚寄生',function(card,player,target){
            return player!=target
        }).ai=function(target){
            if(target.hasSkillTag('noturn')) return 0;
            var player=_status.event.player;
            if(get.attitude(_status.event.player,target)==0) return 0;
            if(get.attitude(_status.event.player,target)>0){
                if(target.classList.contains('turnedover')) return 1000-target.countCards('h');
                if(player.getDamagedHp()<3) return -1;
                return 100-target.countCards('h');
            }
            else{
                if(target.classList.contains('turnedover')) return -1;
                if(player.getDamagedHp()>=3) return -1;
                return 1+target.countCards('h');
            }
        }
        "step 1"
        if(result.bool){
            player.logSkill('fujiaSJ',result.targets);
            result.targets[0].addSkill('buff_jisheng');
            
        }
        
    },
                ai:{
                    effect:{
                        target:function(card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(target.hp<=1) return;
                    if(!target.hasFriend()) return;
                    var hastarget=false;
                    var turnfriend=false;
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
                            hastarget=true;
                        }
                        if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
                            hastarget=true;
                            turnfriend=true;
                        }
                    }
                    if(get.attitude(player,target)>0&&!hastarget) return;
                    if(turnfriend||target.hp==target.maxHp) return [0.5,1];
                    if(target.hp>1) return [1,0.5];
                }
            },
                    },
                },
            },
            zhanchiSJ:{
                init:function (player){
        player.storage.zhanchiSJ_mark=0;
        player.markSkill('zhanchiSJ_mark');
        player.syncStorage('zhanchiSJ_mark');
    },
                intro:{
                    content:"mark",
                },
                audio:"ext:神机天算:2",
                trigger:{
                    global:"phaseBegin",
                },
                direct:true,
                content:function(){
    var jss=game.countPlayer(function(current){
        return current.hasSkill('buff_jisheng');
    });
    if(jss>=2&&trigger.player.hasSkill('buff_jisheng')){
        trigger.player.removeSkill('buff_jisheng');
    player.storage.zhanchiSJ_mark++;
    player.logSkill('zhanchiSJ');
    }
    },
                subSkill:{
                    mark:{
                        mark:true,
                        marktext:"凤",
                        intro:{
                            name:"斩翅",
                            content:"你拥有#枚'凤'标记",
                        },
                        sub:true,
                    },
                },
            },
            jiechengSJ:{
                skillAnimation:true,
                animationColor:"thunder",
                audio:"ext:神机天算:2",
                audioname:["re_zhonghui"],
                unique:true,
                juexingji:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
        return player.storage.zhanchiSJ_mark>=6;
    },
                content:function(){
        "step 0"
       player.draw(6);
        "step 1"
        player.loseMaxHp();
        player.changeGroup('shu')
        player.addSkill('jizhi');
        player.addSkill('lianhuan');
        player.awakenSkill('jiechengSJ');
    },
            },
        },
        translate:{
            shenjiSJ:"神机",
            "shenjiSJ_info":"每当你使用一次出牌阶段的技能，你可以摸一张牌",
            tiansuanSJ:"天算",
            "tiansuanSJ_info":"出牌阶段，你可以交给一名其他角色一张手牌并获得其一张手牌，然后你在随机出现的三个出牌阶段技能中选择令其获得一个技能直到其出牌阶段结束;若其拥有技能\"神机\"，你回复一点体力。",
            yushanSJ:"羽扇",
            "yushanSJ_info":"限定技，你可以弃置一张牌并令一名其他角色获得技能\"神机\"",
            longqiaoSJ:"龙峭",
            "longqiaoSJ_info":"当你受到伤害时，你可以令伤害来源选择一项:①你受到一点伤害②其对你使用一张【杀】，然后你摸两张牌。若你在回合内发动此技能，如果你的势力为蜀，你的势力变为群，否则变为蜀。",
            qinggangSJ:"青釭",
            "qinggangSJ_info":"锁定技，当你使用【杀】指定一名目标角色后，你令其防具技能无效直到此【杀】被抵消或造成伤害;若你的势力为蜀，你的杀不能被响应;若你的势力为群，其弃置两张牌。",
            yinqiangSJ:"银枪",
            "yinqiangSJ_info":"出牌阶段限一次，你可以选择一名其他角色，若其血量为1，你弃置一张牌并令其失去一点体力并回复一点体力，此时若其血量不小于你，其对你使用一张【杀】;若其血量不为1，你观看其手牌，若其手牌中有闪，你摸一张牌，然后对其使用一张【杀】，否则你弃置其一张牌。",
            caijianSJ:"才兼",
            "caijianSJ_info":"出牌阶段限一次，你可以弃置两张牌并随机获得一个技能直到下个出牌阶段开始",
            jizhiSJ:"极智",
            "jizhiSJ_info":"锁定技，你的【酒】和【闪】均视为【桃】。",
            guihanSJ:"归汉",
            "guihanSJ_info":"觉醒技，准备阶段开始时，若“才”的数量不小于6，你减1点体力上限，然后选择一项：1、回复1点体力；2、摸两张牌。然后你获得技能“神机”和\"将武\"并失去技能\"极智\"并将势力变为\"蜀\"。",
            jiangwuSJ:"将武",
            "jiangwuSJ_info":"你可以将一张基本牌当做【杀】使用或打出。",
            "jizhiSJ_mark":"极智",
            "jizhiSJ_mark_info":"",
            tonghuoSJ:"瞳惑",
            "tonghuoSJ_info":"每当场上有一名角色阵亡，你可以随机获得一个限定技",
            qingyuanSJ:"清怨",
            "qingyuanSJ_info":"锁定技，当你于回合外受到伤害后，你可以对其随机使用\"恩怨\",\"反馈\"或\"刚烈\"之一直到回合结束。(该技能在场时，你会拥有技能\"托孤\")",
            ensuanSJ:"恩算",
            "ensuanSJ_info":"限定技，你可以弃置一至两张牌并令一名角色失去等量体力上限，然后该角色随机获得一至两个技能",
            xingzhuSJ:"行诛",
            "xingzhuSJ_info":"锁定技，摸牌阶段，你多摸一张牌并弃置一张牌",
            shouyeSJ:"授业",
            "shouyeSJ_info":"锁定技，当你在场时，每名角色的回合开始时随机获得\"利驭\",\"制衡\",\"\"神机\"和\"奇才\"之一至到回合结束。",
            zongheSJ:"纵阖",
            "zongheSJ_info":"结束阶段，若你没有对其他角色使用手牌并且未跳过出牌阶段，你可以摸一张牌并选择一名其他角色，并令其摸一张杀",
            Rshenghua:"升华",
            "Rshenghua_info":"锁定技，结束阶段，你摸两张牌并失去一点体力，然后你可以选择回复一点体力或者摸两张牌。",
            Rshanyao:"闪耀",
            "Rshanyao_info":"锁定技，结束阶段，若你的装备区有牌，你随机弃置一件装备并摸三张牌。",
            Rjuexing:"觉醒",
            "Rjuexing_info":"出牌阶段，你可以展示所有手牌并失去一点体力，然后随机使用一张装备。",
            Rjianglin:"降临",
            "Rjianglin_info":"回合开始时，你可以令一名角色摸一张杀。",
            Rshipei:"适配",
            "Rshipei_info":"锁定技，当你翻至正面时，你回复一点体力。",
            Rjiasu:"加速",
            "Rjiasu_info":"准备阶段开始时，你可以对一名角色使用一张知己知彼，若如此做，你翻面",
            Rwangpai:"王牌",
            "Rwangpai_info":"出牌阶段限一次，若你的手牌数为4，你可以依次摸十张牌",
            Rtuibian:"蜕变",
            "Rtuibian_info":"当你的牌因为弃置而进入弃牌堆后，你可以将其中的黑色杀当做杀对其他角色使用",
            Rshizhi:"时止",
            "Rshizhi_info":"锁定技，当你即将造成伤害时，你的伤害视为雷属性伤害且你令其被横置。",
            Rguihuo:"鬼火",
            "Rguihuo_info":"锁定技，你受到或造成伤害均视为火属性伤害，然后你摸一张牌。",
            Rxuexian:"血现",
            "Rxuexian_info":"当你造成伤害时，你可以回复一点体力并令目标随机弃置一张牌并摸一张牌，每回合限一次",
            Rneigui:"内鬼",
            "Rneigui_info":"锁定技，第三回合，你的身份由内奸转换为反贼",
            Rshixing:"世行",
            "Rshixing_info":"锁定技，准备阶段，你随机使用一张骑士卡变成其他平成骑士直到下个回合的准备阶段",
            Rlieche:"列车",
            "Rlieche_info":"锁定技，其他角色摸牌结束后，其展示所有手牌或者交给你两张牌。",
            Rjiqing:"激情",
            "Rjiqing_info":"锁定技，除了体力上限结算，你不受骑士大战效果所影响。",
            Rluqi:"戮骑",
            "Rluqi_info":"限定技，当游戏轮数不小于4，你可以变为激情态。",
            qinggangshaSJ:"青釭",
            "qinggangshaSJ_info":"",
            mingxunSJ:"命循",
            "mingxunSJ_info":"锁定技，新的一轮开始时，你的势力随机变为魏，蜀，吴或者群。",
            kuishengSJ:"傀生",
            "kuishengSJ_info":"其他角色出牌阶段开始时，其可以令你交给其一张牌，然后你摸一张牌。",
            zhaoshuSJ:"诏书",
            "zhaoshuSJ_info":"每当你在回合外获得牌时，你可以令本回合角色根据势力造成以下效果:魏:该角色弃置两张牌。蜀:你对其使用一张【杀】。吴:其摸一张牌。群:你与该角色猜拳，若你赢，其随机获得一个技能直到回合结束。",
            anyangSJ:"山阳",
            "anyangSJ_info":"主公技，一名其他角色的准备阶段，你可以藏起任意张牌;当该角色使用一张牌后，若其手牌数等于你山阳标记数，你摸一张牌",
            "anyangSJ2":"山阳",
            "anyangSJ2_info":"",
            "anyangSJ3":"山阳",
            "anyangSJ3_info":"",
            "anyangSJ4":"山阳",
            "anyangSJ4_info":"",
            Test:"测试。。。。",
            "Test_info":"结束阶段，你可以摸一张牌。",
            "buff_kuosan":"扩散",
            "buff_kuosan_info":"",
            "buff_jiejing":"结晶",
            "buff_jiejing_info":"",
            "buff_zhuoshao":"灼烧",
            "buff_zhuoshao_info":"",
            "buff_mabi":"麻痹",
            "buff_mabi_info":"",
            "buff_dongshang":"冻伤",
            "buff_dongshang_info":"",
            "buff_chaoshi":"潮湿",
            "buff_chaoshi_info":"",
            "buff_jisheng":"寄生",
            "buff_jisheng_info":"",
            "buff_zhengfa":"蒸发",
            "buff_zhengfa_info":"",
            "buff_ronghua":"融化",
            "buff_ronghua_info":"",
            "buff_dongjie":"冻结",
            "buff_dongjie_info":"",
            "buff_chaozai":"超载",
            "buff_chaozai_info":"",
            "buff_chaodao":"超导",
            "buff_chaodao_info":"",
            "buff_gandian":"感电",
            "buff_gandian_info":"",
            meisuanSJ:"魅算",
            "meisuanSJ_info":"锁定技，每当你失去一点体力，你取消此结算并弃置等量牌，若你是冻伤状态，你摸等量牌。",
            molianSJ:"末镰",
            "molianSJ_info":"摸牌阶段，你可取消摸牌并获得三张牌，然后进入冻伤状态直到产生反应。",
            xiejiSJ:"邪机",
            "xiejiSJ_info":"每当一名角色使用出牌阶段技能，你可以令其进入冻伤状态直到其下个回合阶段并随机弃置一张手牌。",
            huoshiSJ:"火矢",
            "huoshiSJ_info":"锁定技，当你造成伤害时，其有85％的概率获得灼烧状态直到其回复体力",
            shuishiSJ:"水师",
            "shuishiSJ_info":"摸牌阶段，你可以改为将你的手牌数摸至X乘2并进入潮湿状态直到回合结束。(X为场上拥有技能\"火矢\"的人数)",
            chibiSJ:"赤壁",
            "chibiSJ_info":"出牌阶段限X次，你可以选择一名其他角色，你与其各有极低概率获得技能\"火矢\"或者获得潮湿状态直至该角色回合结束。(X为场上反贼数)",
            fujiaSJ:"附假",
            "fujiaSJ_info":"每当你使用一张牌，你可以令一名其他角色获得寄生效果。",
            zhanchiSJ:"斩翅",
            "zhanchiSJ_info":"锁定技，一名角色的回合开始时，若场上寄生数不小于2，其失去寄生效果，然后你获得一枚\"凤\"",
            jiechengSJ:"捷程",
            "jiechengSJ_info":"觉醒技，准备阶段开始时，若你有6或者更多枚\"凤\"，你摸六张牌，然后你失去一点体力上限且将势力改为蜀并获得技能\"集智\"和\"连环\"。",
        },
    },
    intro:"<img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/神机天算/Sakuraの銀河.jpg' width='90' height='90'><br>本扩展为王朝更替系列的续作，由于当时或许忙碌而弃坑王剑和王骑，但当时的部分想法会在此包复刻<br><a href=\"https://b23.tv/0jznOY\">骑士大战第三关通关技巧<a><br><a href=\"https://space.bilibili.com/104474343?share_medium=android&share_source=copy_link&bbid=XY0974B080E8D6980939E4C796372D60D9641&ts=1605426386901\">作者B站<a><br><a href=\"https://jq.qq.com/?_wv=1027&k=GXQp29nj\">点击链接加入Q群<a><br>点击游戏内帮助查找更多内容",
    author:"Sakuraの银河",
    diskURL:"https://pan.baidu.com/s/1YTr50tBTqQRiVuhI4pkE5Q 提取码:znz5",
    forumURL:"http://tieba.baidu.com/p/7090062586?share=9105&fr=share&see_lz=0&sfc=copy&client_type=2&client_version=10.2.8.0&st=1605426797&unique=CE6727FE89CF46165C96FECD5BB1FBA8",
    version:"元素版",
},files:{"character":["Testgamer.jpg"],"card":[],"skill":[]}}})