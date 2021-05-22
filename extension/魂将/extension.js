game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"魂将",content:function (config,pack){

  get.drawcardPile=function(name){
    var card;
    for(var i=0;i<ui.cardPile.childNodes.length;i++){
      card=ui.cardPile.childNodes[i];
      if(typeof name=='string'){
        if(card.name==name){
          return card;
        }
      }
      else if(typeof name=='function'){
        if(name(card)){
          return card;
        }
      }
    }
    return null;
  }
  if(lib.rank){
    //废将
    lib.rank.rarity.junk.addArray([]);
    //精品
    lib.rank.rarity.rare.addArray(["hj_jl_hunzhenji","hj_jl_hunxiahoudun","hj_jl_hundianwei","hj_jl_hunsimahui","hj_jl_hunganning","hj_jl_hunsunshangxiang","hj_bm_hunyujin","hj_bm_hundengai","hj_bm_hunzhugedan","hj_bm_hunhuangzhong","hj_bm_hunweiyan","hj_bm_huntaishici","hj_bm_hunzhangxiu","hj_bm_hunzhangrang","hj_hd_hunguanping","hj_hd_hunguanyinping","hj_hd_hunzhangxingcai","hj_hd_hunzhaoxiang","hj_hd_hunzhoutai","hj_hd_hunlingju","hj_ls_hunzhangji","hj_ls_hunxurong","hj_ls_hunxunchen","hj_ls_hunchunyuqiong","hj_ls_hunshenpei","hj_jl_hundaqiao","hj_jl_huncaiwenji"]);
    //史诗
    lib.rank.rarity.epic.addArray(["hj_jl_hunzhangliao","hj_jl_hunguanyu","hj_jl_hunzhugeliang","hj_jl_hunlvmeng","hj_jl_hunhuatuo","hj_jl_hundiaochan","hj_jl_hundongzhuo","hj_jl_hunxuchu","hj_bm_huncaoren","hj_bm_huncaozhi",,"hj_bm_hunzhonghui","hj_bm_hunzuoci","hj_hd_hunzhangchunhua","hj_hd_hunwangyi","hj_hd_hunjiangwei","hj_hd_hunzhurong","hj_hd_hunbeimihu","hj_hd_hunhetaihou","hj_hd_hunwangji","hj_ls_hunlijue","hj_ls_hunguosi","hj_ls_hunhuaxiong","hj_ls_hunyuanshu","hj_ls_hunjushou","hj_ls_huntianfeng","hj_ls_hunfanchou","hj_ls_hunxuyou","hj_xd_hundaxianliangshi","hj_xd_hunluanshimowang","hj_xd_hunchibihuoshen","hj_xd_hunshixuekuanglang","hj_xd_hunjinguozhizu","hj_bm_hunsunjian","hj_jl_hunzhangfei","hj_shenguanyu","hj_shenlvmeng","hj_shenzhouyu","hj_shenlvbu","hj_shenliubei","hj_shenluxun","hj_shenzhangliao","hj_shenzhenji","hj_jl_hunxiaoqiao"]);
    //传说
    lib.rank.rarity.legend.addArray(["hj_jl_huncaocao","hj_jl_hunliubei","hj_jl_hunsunquan","hj_jl_hunguojia","hj_jl_hunsimayi","hj_jl_hunzhaoyun","hj_jl_hunhuangyueying","hj_jl_hunluxun","hj_jl_hunjiaxu","hj_jl_hunzhangjiao","hj_jl_hunzhouyu","hj_bm_hunsunce","hj_bm_hunzhanghe","hj_bm_hunguohuai","hj_bm_hunpangtong","hj_bm_hunlusu","hj_bm_huncaochun","hj_bm_huncaoying","hj_jl_hunlvbu","hj_hd_huncaopi","hj_hd_huncaorui","hj_hd_hunxunyu","hj_hd_hunxizhicai","hj_hd_hunmachao","hj_hd_hunhuanggai","hj_hd_hunliuyan","hj_ls_hunspdongzhuo","hj_ls_hunyuanshao","hj_ls_hunliru","hj_ls_hunspjiaxu","hj_ls_hunsplvbu","hj_ls_hunyanliang&wenchou","hj_ls_hunzhangxia&gaolan","hj_xd_hunjiang♛zuozhe","hj_xd_hunbaonuzhanshen","hj_xd_hunshenguiwuqian","hj_xd_hunweiwudadi","hj_xd_hunshuhanliedi","hj_xd_hunbubaishenhua","hj_xd_wu","hj_shenzhugeliang","hj_shencaocao","hj_shensimayi","hj_shenzhaoyun","hj_shenganning","hj_shencaopi"]);
  }
  if(config.hj_jilue){ //极略魂将包
    game.addCharacterPack({
      character:{
        "hj_jl_huncaocao":["male","shen",4,["hj_jl_zhishi","hj_jl_zhaoxiang","hj_jl_guixin","hj_jl_feiying"],["zhu"]],
        "hj_jl_hunliubei":["male","shen",5,["hj_jl_junwang","hj_jl_jizhao","hj_jl_chouxi","hj_jl_longnu"],["zhu"]],
        "hj_jl_hunsunquan":["male","shen",4,["hj_jl_huju","hj_jl_xionglve","hj_jl_quanheng"],["zhu"]],
        "hj_jl_hunzhangjiao":["male","shen",4,["hj_jl_xuanlei","hj_jl_dianjie","hj_jl_shendao","hj_jl_leihun"],["zhu"]],
        "hj_jl_hunguojia":["male","shen",3,["hj_jl_tianji","hj_jl_tianqi","hj_xd_guimou2","hj_xd_qizuo","hj_xd_guimou1"],[]],
        "hj_jl_hunsimayi":["male","shen",3,["hj_jl_guicai","hj_jl_jilve","hj_jl_zhuizun","hj_jl_tongtian"],[]],
        "hj_jl_hunxiahoudun":["male","shen",5,["hj_jl_ganglie","hj_jl_danjing","hj_jl_zhonghun"],[]],
        "hj_jl_hunzhangliao":["male","shen",4,["hj_jl_nizhan","hj_jl_wuwei","hj_jl_cuifeng","hj_jl_weizhen"],[]],
        "hj_jl_hundianwei":["male","shen",6,["hj_jl_zhiji","hj_jl_kuangxi"],[]],
        "hj_jl_hunguanyu":["male","shen",5,["hj_jl_wushen","hj_jl_suohun","hj_jl_wuhun"],[]],
        "hj_jl_hunzhangfei":["male","shen",4,["hj_jl_paoxiao","hj_jl_shayi","hj_jl_zhenhun"],[]],
        "hj_jl_hunzhugeliang":["male","shen",3,["hj_jl_qixing","hj_jl_kuangfeng","hj_jl_dawu","hj_jl_weiwo"],[]],
        "hj_jl_hunzhaoyun":["male","shen",4,["hj_jl_juejing","hj_jl_longying","hj_jl_longhun"],[]],
        "hj_jl_hunhuangyueying":["female","shen",3,["hj_jl_zhiming","hj_jl_hemou","hj_jl_qicai","hj_jl_suyin"],[]],
        "hj_jl_hunzhouyu":["male","shen",3,["hj_jl_yingcai","hj_jl_fangjian","hj_jl_qinyin","hj_jl_yeyan"],[]],
        "hj_jl_hunlvmeng":["male","shen",3,["hj_jl_shelie","hj_jl_shixue","hj_jl_gongxin","hj_jl_guoshi"],[]],
        "hj_jl_hunluxun":["male","shen",3,["hj_jl_dailao","hj_jl_ruya","hj_jl_jieyan","hj_jl_fenying"],[]],
        "hj_jl_hunganning":["male","shen",5,["hj_jl_youxia","hj_jl_lvezhen","hj_jl_youlong"],[]],
        "hj_jl_hunsunshangxiang":["female","shen",3,["hj_jl_xiwu","hj_jl_yinmeng","hj_jl_xianzhu","hj_jl_liangyuan"],[]],
        "hj_jl_hunlvbu":["male","shen",6,["hj_jl_kuangbao","hj_jl_wumou","hj_jl_wuqian","hj_jl_shenfen"],[]],
        "hj_jl_hunjiaxu":["male","shen",3,["hj_jl_yanmie","hj_jl_shunshi","hj_jl_weimu","hj_jl_luanwu"],[]],
        "hj_jl_hunsimahui":["male","shen",4,["hj_jl_zhitian","hj_jl_yinshi"],[]],
        "hj_jl_hunhuatuo":["male","shen",3,["hj_jl_xingyi","hj_jl_guagu","hj_jl_jishi","hj_jl_xuanxin"],[]],
        "hj_jl_hundiaochan":["female","shen",3,["hj_jl_tianzi","hj_jl_manwu","hj_jl_meixin","hj_jl_baiyue"],[]],
        "hj_jl_hundongzhuo":["male","shen",5,["hj_jl_baolian","hj_jl_baozheng","hj_jl_lingnu","hj_jl_canlue"],["zhu"]],
        "hj_jl_hunxuchu":["male","shen",4,["hj_jl_aozhan","hj_jl_huxiao","hj_jl_shixve"],[]],
        "hj_jl_hunzhenji":["female","shen",3,["hj_jl_luoshen","hj_jl_liuyun","hj_jl_lingbo","hj_jl_qingcheng"],[]],
        "hj_jl_hundaqiao":["female","shen",3,["hj_jl_fangxin","hj_jl_xiyu","hj_jl_wanrou","hj_jl_guose"],[]],
        "hj_jl_hunxiaoqiao":["female","shen",3,["hj_jl_tianxiang","hj_jl_hongyan","hj_jl_jiaohua","hj_jl_piaoling"],[]],
        "hj_jl_huncaiwenji":["female","shen",3,["hj_jl_beige","hj_jl_moshi","hj_jl_chenqing"],[]],
      },
      skill:{
        "hj_jl_zhishi":{ //治世
          audio:"ext:魂将:2",
           enable:"phaseUse",
          usable:1,
          filterTarget:function (card,player,target){
            return player!=target;
          },
          content:function (){
            'step 0'
            target.chooseToDiscard('弃置一张基本牌，并回复一点体力。或受到一点伤害，该角色摸两张牌。',{type:'basic'}).ai=function(card){
              if(target.hp<=1) return 10-ai.get.value(card);
              if(ai.get.damageEffect(target,player,player)>0) return 0; 
              return 6-ai.get.value(card);
            }
            'step 1'
            if(result.bool){
              target.recover();
            }
            else{
              target.damage(player);
              target.draw(2);
            }
          },
          ai:{
            order:8,
            result:{
              target:function (player,target){
                if(!target.hasSkillTag('maixie')&&target.isDamaged()&&target.hp>1&&target.num('h')>2) return 1;
                if(target.hasSkillTag('maixie')&&target.hp>1) return ai.get.damageEffect(target,player,player);
                if(!target.num('h')&&target.hp==1) return -1;
                return 0
              },
            },
          },
        },
        "hj_jl_guixin":{ //归心
          audio:"ext:魂将:2",
           trigger:{
            player:"damageEnd",
          },
          mod:{
            globalTo:function (from,to,distance){
              return distance+1;
            },
          },
          check:function (event,player){
            var num=game.countPlayer(function(current){
              if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                return true;
              }
              if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                return true;
              }
            });
            return num>=2;
          },
          content:function (){
            "step 0"
            var targets=game.filterPlayer();
            targets.remove(player);
            targets.sort(lib.sort.seat);
            event.targets=targets;
            event.num=0;
            trigger.cancel();
            player.line(targets,'green');
            "step 1"
            if(num<event.targets.length){
              if(event.targets[num].countCards('hej')){
                player.gainPlayerCard(event.targets[num],'hej',true);
              }
              event.num++;
              event.redo();
            }
            "step 2"
            var dn=game.dead.length;
            player.draw(dn);                
            "step 3"
            player.turnOver();
          },
          ai:{
            threaten:function (player,target){
              if(target.hp==1) return 2.5;
              return 1;
            },
          },
        },
        "hj_jl_feiying":{ //飞影
          mod:{
            targetInRange:function (card) {
              if (card.name == 'sha') return true;
            },
            targetEnabled:function (card, player, target, now) {
              if (target.isTurnedOver()) {
                if (card.name == 'sha') return false;
              }
            },
          },
        },
        "hj_jl_zhaoxiang":{ //招降
           audio:"ext:魂将:2",
		  trigger:{global:'shaBegin'},
		  filter:function(event,player){
		    return event.player!=player;
		  },
		  direct:true,
		  content:function(){
			'step 0'
			if(get.distance(player,trigger.player,'attack')<=1){
								player.chooseBool('是否对'+get.translation(trigger.player)+'发动【招降】？').ai=function(){
									return ai.get.attitude(player,trigger.player)<-3;
								}
							}
							else{
								player.chooseToDiscard('是否弃置一张牌对'+get.translation(trigger.player)+'发动【招降】？').ai=function(card){
									if(player.num('h')>player.hp&&ai.get.attitude(player,trigger.player)<-3){
										return 6-ai.get.value(card);
									}	
									return false;
								}
							}
							'step 1'
							if(result.bool){
								player.logSkill('hj_jl_zhaoxiang',trigger.player);
								if(trigger.player.num('h')){
									trigger.player.chooseControl('令其获得你一张手牌','此杀无效').ai=function(){
										return 0;
									}
								}
								else{
									trigger.untrigger();
									trigger.finish();
									event.finish();
								}
							}else{
								event.finish();
							}
							'step 2'
							if(result.control=='令其获得你一张手牌'){
								player.gainPlayerCard('h',trigger.player,true);
							}
							else{
								trigger.untrigger();
								trigger.finish();
							}	
						},
						ai:{
							expose:0.5
						}
        },

        "hj_jl_junwang":{ //君望
audio:"ext:魂将:2",
           trigger:{
            global:"phaseUseBegin",
          },
          forced:true,
          filter:function (event,player){
            return event.player!=player&&event.player.num('h')>=player.num('h');
          },
          content:function (){
            "step 0"
            trigger.player.chooseCard('交给'+get.translation(player)+'一张手牌',true).ai=function(card){
              if(ai.get.attitude(trigger.player,player)>0){
                return ai.get.value(card);
              }
              else{
                return -ai.get.value(card);
              }
            }
            "step 1"
            if(result.bool){
              player.gain(result.cards[0]);
              trigger.player.$give(1,player);
            }
          },
        },
        "hj_jl_jizhao":{ //激诏
audio:"ext:魂将:2",
          enable:"phaseUse",
          filterCard:true,
          selectCard:[1,Infinity],
          filter:function (){
            for(var i=0;i<game.players.length;i++){
              if(!game.players[i].storage.hj_jl_jizhao) return true;
            }
            return false;
          },
          discard:false,
          prepare:function (cards,player,targets){
            player.$give(cards.length,targets[0]);
          },
          filterTarget:function (card,player,target){
            return !target.storage.hj_jl_jizhao&&player!=target;
          },
          content:function (){
            target.gain(cards);
            target.addTempSkill('hj_jl_jizhao_zhao',{player:'phaseAfter'});
            target.storage.hj_jl_jizhao=true;
            target.storage.hj_jl_jizhao2=player;
          },
          subSkill:{
            zhao:{
              audio:1,
              trigger:{
                player:"phaseEnd",
              },
              mark:true,
              marktext:"诏",
              direct:true,
              content:function (){
                'step 0'
                player.storage.hj_jl_jizhao=false;
                if(!player.getStat('damage')){
                  player.storage.hj_jl_jizhao2.logSkill('hj_jl_jizhao',player);
                  player.damage(player.storage.hj_jl_jizhao2);
                }
                'step 1'
                delete player.storage.hj_jl_jizhao2;
              },
              intro:{
                content:"mark",
              },
              sub:true,
            },
          },
        },
        "hj_jl_longnu":{ //龙怒
audio:"ext:魂将:2",
          enable:"phaseUse",
          usable:1,
          content:function (){
            "step 0"
            player.loseHp();
            "step 1"
            player.chooseTarget(get.prompt('hj_jl_longnu'),true,function(card,player,target){
              return player!=target;
            }).ai=function(target){
              return get.damageEffect(target,player,player,'fire');
            }
            "step 2"
            if(result.bool){
              event.target=result.targets[0];
              result.targets[0].damage('fire');
            }
            "step 3"
            if(event.target.countCards('he')){
              player.discardPlayerCard(event.target,'he',true);
            }
          },
        },
        "hj_jl_chouxi":{ //仇袭
audio:"ext:魂将:2",
           usable:2,
          enable:"phaseUse",
          filter:function (event, player) {
            return player.countCards('h') > 0;
          },
          check:function (card) {
            return 7 - get.value(card)
          },
          filterCard:true,
          content:function () {
            'step 0'
            event.cards1 = get.cards(2);
            player.showCards(event.cards1);
            event.types = [];
            for (var i = 0; i < event.cards1.length; i++) {
              event.types.add(get.type(event.cards1[i], 'trick'));
            }
            event.dialog = ui.create.dialog('弃置一张与' + get.translation(player) + '弃置的牌类别均不同的牌,然后让' + get.translation(player) + '获得' + get.translation(event.cards1) + '或受到来自' + get.translation(player) + '的1点伤害并获得其中1种类别的牌.', 'hidden');
            event.dialog.classList.add('noselect');
            event.dialog.add(event.cards1);
            'step 1'
            player.chooseTarget(function (card, player, target) {
              return player != target;
            }, true).ai = function (target) {
              return get.attitude(player, target) <= 0 ? Math.random() : -Math.random();
            }
            'step 2'
            event.target = result.targets[0];
            player.line(event.target);
            event.target.chooseToDiscard(dialog, function (card) {
              return !event.types.contains(get.type(card, 'trick'));
            }).ai = function (card) {
              if (card.name == 'tao') return -1;
              if (event.target.hp <= 2) return 7.1 - get.value(card);
              if (event.target.isTurnedOver()) return -1;
              return 7 - get.value(card);
            }
            'step 3'
            if (result.bool) {
              player.gain(event.cards1, 'gain2');
              event.finish();
              return;
            } else {
              event.target.damage();
              var dialog = ui.create.dialog('仇袭：选择一张的卡牌获得之', event.cards1);
              if (event.target.isAlive()) {
                event.target.chooseButton([1], dialog, true).filterButton = function (button) {
                  if (ui.selected.buttons.length == 0) return get.value(button.link);
                  for (var i = 0; i < ui.selected.buttons.length; i++) {
                    if (get.type(button.link) != get.type(ui.selected.buttons[i].link)) return false;
                  }
                  return true;
                }
              }
            }
            'step 4'
            var cards2 = [];
            if (event.target.isAlive()) {
              for (var i = 0; i < result.buttons.length; i++) {
                cards2.push(result.buttons[i].link);
                event.cards1.remove(result.buttons[i].link);
              }
              event.target.gain(cards2, 'gain2');
            }
            if (event.cards1.length) {
              player.gain(event.cards1, 'gain2');
            }
          },
          ai:{
            order:4,
            result:{
              player:1,
            },
          },
        },
        
        "hj_jl_huju":{ //虎踞
audio:"ext:魂将:3",
          trigger:{
            player:"phaseBegin",
          },
          filter:function (event,player){
            var num=player.num('h');
            for(var i=0;i<game.players.length;i++){
              if(game.players[i].num('h')>num) 
                return false;
            }
            return true;
          },
          forced:true,
          content:function (){
            "step 0"
            player.chooseControl('选项一','选项二',function(){
              if(player.hp==1&&!player.num('h',function(card){
                return get.tag(card,'recover');
              })) {
                return '选项二';
              }
              return '选项一';
            }).set('prompt','虎踞<div class="text">1:失去1点体力.</div><div class="text">2:减1点体力上限,失去“虎踞”，获得“制衡”和“虎缚”.</div>').set('ai',function(){
              if(game.countPlayer()>3) return '选项一';
              return '选项二';
            });
            "step 1"
            if(result.control=='选项一'){
              player.loseHp();
            }
            else{
              player.loseMaxHp();
              player.removeSkill('hj_jl_huju');
              player.removeSkill('hj_jl_huju_draw');
              player.addSkill('zhiheng');
              player.addSkill('hj_jl_hufu');
            }
          },
          group:["hj_jl_huju_draw"],
          subSkill:{
            draw:{
              audio:2,
              trigger:{
                global:"phaseBegin",
              },
              filter:function (event,player){
                return event.player!=player;
              },
              forced:true,
              content:function (){
                player.draw();
              },
              sub:true,
            },
          },
        },
        "hj_jl_hufu":{ //虎缚
          enable:"phaseUse",
          usable:1,
          filterTarget:function (card,player,target){
            return player!=target&&target.num('e');
          },
          content:function (){
            target.chooseToDiscard(target.num('e'),true,'he');
          },
          ai:{
            expose:0.3,
            order:10,
            result:{
              target:function (player,target){
                return -target.num('e');
              },
            },
          },
        },
        "hj_jl_xionglve":{ //雄略
audio:"ext:魂将:2",
          marktext:"雄",
          trigger:{
            player:"phaseDrawBegin",
          },
          check:function (event,player){
            if(player.skipList.contains('phaseUse')) return 1;
            return player.storage.hj_jl_xionglve.length<=3;
          },
          content:function (){
            'step 0'
            trigger.finish();
            trigger.untrigger();
            event.cards=get.cards(2);
            player.chooseCardButton(event.cards,true);
            'step 1'
            if(result.bool){
              player.gain(result.links[0]);
              player.$gain2(result.links[0]);
              event.cards.remove(result.links[0]);
              if(event.cards.length){
                player.lose(event.cards,ui.special);
                player.storage.hj_jl_xionglve=player.storage.hj_jl_xionglve.concat(event.cards);
                player.markSkill('hj_jl_xionglve');
                player.syncStorage('hj_jl_xionglve');
              }
            }
          },
          init:function (player){
            player.storage.hj_jl_xionglve=[];
          },
          intro:{
            content:"cards",
          },
          group:["hj_jl_xionglve_x2"],
          subSkill:{
            "x2":{
              audio:1,
              sub:true,
              enable:"phaseUse",
              delay:false,
              direct:true,
              gainable:false,
              filter:function (event,player){
                return player.storage.hj_jl_xionglve.length>0;
              },
              createDialog:function (player,card){
                if(get.type(card,'trick')=='trick'){
                  var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
                  for(var i=0;i<list.length;i++){
                    list[i]=['锦囊','',list[i]];
                  }
                }
                else{
                  var list=['sha','shan','tao','jiu'];
                  for(var i=0;i<list.length;i++){
                    list[i]=['basic','',list[i]];
                  }
                }
                var dialog=ui.create.dialog([list,'vcard']);
                return dialog;
              },
              content:function (){
                'step 0'
                player.chooseCardButton('雄略',player.storage.hj_jl_xionglve).ai=function(button){
                  var player=_status.event.player;
                  var type=get.type(button.link,'trick');
                  var recover=0,lose=1;
                  for(var i=0;i<game.players.length;i++){
                    if(!game.players[i].isOut()){
                      if(game.players[i].hp<game.players[i].maxHp){
                        if(ai.get.attitude(player,game.players[i])>0){
                          if(game.players[i].hp<2){
                            lose--;
                            recover+=0.5;
                          }
                          lose--;
                          recover++;
                        }
                        else if(ai.get.attitude(player,game.players[i])<0){
                          if(game.players[i].hp<2){
                            lose++;
                            recover-=0.5;
                          }
                          lose++;
                          recover--;
                        }
                      }
                      else{
                        if(ai.get.attitude(player,game.players[i])>0){
                          lose--;
                        }
                        else if(ai.get.attitude(player,game.players[i])<0){
                          lose++;
                        }
                      }
                    }
                  }
                  var equipTarget=false;
                  var shaTarget=false;
                  var shunTarget=false;
                  var chaiTarget=false;
                  for(var i=0;i<game.players.length;i++){
                    if(ai.get.attitude(player,game.players[i])>0){
                      if(player!=game.players[i]&&!game.players[i].get('e',{subtype:get.subtype(button.link)})[0]){
                        equipTarget=true;
                      }
                    }
                    if(player.canUse('shunshou',game.players[i])&&ai.get.effect(game.players[i],{name:'shunshou'},player)){
                      shunTarget=true;
                    }
                    if(player.canUse('guohe',game.players[i])&&ai.get.effect(game.players[i],{name:'guohe'},player)>=0){
                      chaiTarget=true;
                    }
                    if(player.canUse('sha',game.players[i])&&ai.get.effect(game.players[i],{name:'sha'},player)>0){
                      shaTarget=true;
                    }
                  }
                  if(lose>recover&&lose>0) return (type=='trick')?1:-1;
                  if(lose<recover&&recover>0) return (type=='trick')?1:-1;
                  if(player.isDamaged()) return (type=='basic')?1:-1;
                  if(shaTarget&&player.num('h','sha')&&!player.num('h','jiu')) return (type=='basic')?1:-1;
                  if(equipTarget) return (type=='equip')?1:-1;
                  if(shunTarget||chaiTarget) return (type=='trick')?1:-1;
                  if(shaTarget&&!player.num('h','sha')) return (type=='basic')?1:-1;
                  return 0;
                }
                'step 1'
                if(result.bool){
                  event.cards0=result.links[0];
                  if(get.type(event.cards0)!='equip'){
                    event.dialog=lib.skill.hj_jl_xionglve_x2.createDialog(player,event.cards0);
                    var next=player.chooseButton(event.dialog,true);
                    next.filterButton=function(button,player){
                      return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
                    }
                    next.ai=function(button){
                      var player=_status.event.player;
                      var recover=0,lose=1;
                      for(var i=0;i<game.players.length;i++){
                        if(!game.players[i].isOut()){
                          if(game.players[i].hp<game.players[i].maxHp){
                            if(ai.get.attitude(player,game.players[i])>0){
                              if(game.players[i].hp<2){
                                lose--;
                                recover+=0.5;
                              }
                              lose--;
                              recover++;
                            }
                            else if(ai.get.attitude(player,game.players[i])<0){
                              if(game.players[i].hp<2){
                                lose++;
                                recover-=0.5;
                              }
                              lose++;
                              recover--;
                            }
                          }
                          else{
                            if(ai.get.attitude(player,game.players[i])>0){
                              lose--;
                            }
                            else if(ai.get.attitude(player,game.players[i])<0){
                              lose++;
                            }
                          }
                        }
                      }
                      var shunTarget=false;
                      var chaiTarget=false;
                      var shaTarget=false;
                      for(var i=0;i<game.players.length;i++){
                        if(player.canUse('shunshou',game.players[i])&&ai.get.effect(game.players[i],{name:'shunshou'},player)){
                          shunTarget=true;
                        }
                        if(player.canUse('guohe',game.players[i])&&ai.get.effect(game.players[i],{name:'guohe'},player)>=0){
                          chaiTarget=true;
                        }
                        if(player.canUse('sha',game.players[i])&&ai.get.effect(game.players[i],{name:'sha'},player)>0){
                          shaTarget=true;
                        }
                      }
                      if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
                      if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
                      if(shunTarget) return (button.link[2]=='shunshou')?1:-1;
                      if(chaiTarget) return (button.link[2]=='guohe')?1:-1;
                      if(player.isDamaged()) return (button.link[2]=='tao')?1:-1;
                      if(shaTarget&&player.num('h','sha')&&!player.num('h','jiu')) return (button.link[2]=='jiu')?1:-1;
                      if(shaTarget&&!player.num('h','sha')) return (button.link[2]=='sha')?1:-1;
                      return (button.link[2]=='sha'||button.link[2]=='wuzhong')?1:-1;
                    }
                  }
                  else{
                    var next=player.chooseTarget(function(card,player,target){
                      return player!=target&&!target.get('e',get.subtype(event.cards0)[5]);
                    }).at=function(target){
                      return ai.get.attitude(_status.event.player,target)+10;
                    }
                    event.goto(3);
                  }
                }
                else{
                  event.finish()
                }
                'step 2'
                if(result.bool){
                  lib.skill.xl_backup.cards=event.cards0;
                  lib.skill.xl_backup.viewAs={name:result.buttons[0].link[2]};
                  event.parent.parent.backup('xl_backup');
                  event.parent.parent.step=0;
                  if(event.isMine()){
                    event.parent.parent.openskilldialog='将一张『略』当'+get.translation(result.buttons[0].link[2])+'使用';
                  }
                  event.finish();
                }
                'step 3'
                if(result.bool){
                  var card=event.cards0;
                  player.storage.hj_jl_xionglve.remove(card);
                  player.syncStorage('hj_jl_xionglve');
                  if(!player.storage.hj_jl_xionglve.length){
                    player.unmarkSkill('hj_jl_xionglve');
                  }
                  player.logSkill('hj_jl_xionglve',result.targets);
                  player.$give(card,result.targets[0],false);
                  result.targets[0].equip(card);
                }
              },
              chooseButton:{
                dialog:function (event,player){
                  return ui.create.dialog('雄略',player.storage.hj_jl_xionglve,'hidden');
                },
                check:function (button){
                  var player=_status.event.player;
                  var type=get.type(button.link,'trick');
                  var recover=0,lose=1;
                  for(var i=0;i<game.players.length;i++){
                    if(!game.players[i].isOut()){
                      if(game.players[i].hp<game.players[i].maxHp){
                        if(ai.get.attitude(player,game.players[i])>0){
                          if(game.players[i].hp<2){
                            lose--;
                            recover+=0.5;
                          }
                          lose--;
                          recover++;
                        }
                        else if(ai.get.attitude(player,game.players[i])<0){
                          if(game.players[i].hp<2){
                            lose++;
                            recover-=0.5;
                          }
                          lose++;
                          recover--;
                        }
                      }
                      else{
                        if(ai.get.attitude(player,game.players[i])>0){
                          lose--;
                        }
                        else if(ai.get.attitude(player,game.players[i])<0){
                          lose++;
                        }
                      }
                    }
                  }
                  var equipTarget=false;
                  var shaTarget=false;
                  var shunTarget=false;
                  var chaiTarget=false;
                  for(var i=0;i<game.players.length;i++){
                    if(ai.get.attitude(player,game.players[i])>0){
                      if(player!=game.players[i]&&!game.players[i].get('e',{subtype:get.subtype(button.link)})[0]&&ai.get.attitude(player,game.players[i])>0){
                        equipTarget=true;
                      }
                    }
                    if(player.canUse('shunshou',game.players[i])&&ai.get.effect(game.players[i],{name:'shunshou'},player)){
                      shunTarget=true;
                    }
                    if(player.canUse('guohe',game.players[i])&&ai.get.effect(game.players[i],{name:'guohe'},player)>=0){
                      chaiTarget=true;
                    }
                    if(player.canUse('sha',game.players[i])&&ai.get.effect(game.players[i],{name:'sha'},player)>0){
                      shaTarget=true;
                    }
                  }
                  if(player.isDamaged()) return (type=='basic')?2:-1;
                  if(shaTarget&&player.num('h','sha')&&!player.num('h','jiu')) return (type=='basic')?1:-1;
                  if(lose>recover&&lose>0) return (type=='trick')?1:-1;
                  if(lose<recover&&recover>0) return (type=='trick')?1:-1;
                  if(equipTarget) return (type=='equip')?1:-1;
                  if(shunTarget||chaiTarget) return (type=='trick')?1:-1;
                  if(shaTarget&&!player.num('h','sha')) return (type=='basic')?1:-1;
                  return 0;
                },
                backup:function (links,player){
                  if(get.type(links[0],'trick')=='trick'){
                    return {
                      cards:links,
                      chooseButton:{
                        dialog:function(){
                          var list=[];
                          for(var i in lib.card){
                            if(!lib.translate[i+'_info']) continue;
                            if(lib.card[i].mode&&lib.card[i].mode.contains(lib.config.mode)==false) continue;
                            if(lib.card[i].type=='trick') list.push(['锦囊','',i]);
                          }
                          return ui.create.dialog('雄略:请选择想要使用的锦囊牌',[list,'vcard']);
                        },
                        filter:function(button,player){
                          return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
                        },
                        check:function(button){
                          var player=_status.event.player;
                          var recover=0,lose=1;
                          for(var i=0;i<game.players.length;i++){
                            if(!game.players[i].isOut()){
                              if(game.players[i].hp<game.players[i].maxHp){
                                if(ai.get.attitude(player,game.players[i])>0){
                                  if(game.players[i].hp<2){
                                    lose--;
                                    recover+=0.5;
                                  }
                                  lose--;
                                  recover++;
                                }
                                else if(ai.get.attitude(player,game.players[i])<0){
                                  if(game.players[i].hp<2){
                                    lose++;
                                    recover-=0.5;
                                  }
                                  lose++;
                                  recover--;
                                }
                              }
                              else{
                                if(ai.get.attitude(player,game.players[i])>0){
                                  lose--;
                                }
                                else if(ai.get.attitude(player,game.players[i])<0){
                                  lose++;
                                }
                              }
                            }
                          }
                          var shunTarget=false;
                          var chaiTarget=false;
                          for(var i=0;i<game.players.length;i++){
                            if(player.canUse('shunshou',game.players[i])&&ai.get.effect(game.players[i],{name:'shunshou'},player)){
                              shunTarget=true;
                            }
                            if(player.canUse('guohe',game.players[i])&&ai.get.effect(game.players[i],{name:'guohe'},player)>=0){
                              chaiTarget=true;
                            }
                          }
                          if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
                          if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
                          if(shunTarget) return (button.link[2]=='shunshou')?1:-1;
                          if(chaiTarget) return (button.link[2]=='guohe')?1:-1;
                          return (button.link[2]=='wuzhong')?1:-1;
                        },
                        backup:function(links,player){
                          return {
                            filterCard:function(){return false},
                            selectCard:-1,
                            popname:true,
                            viewAs:{name:links[0][2]},
                            onuse:function(result,player){
                              result.cards=lib.skill.hj_jl_xionglve_x2_backup.cards;
                              var card=result.cards[0];
                              player.storage.hj_jl_xionglve.remove(card);
                              player.syncStorage('hj_jl_xionglve');
                              if(!player.storage.hj_jl_xionglve.length){
                                player.unmarkSkill('hj_jl_xionglve');
                              }
                              else{
                                player.markSkill('hj_jl_xionglve');
                              }
                              player.logSkill('hj_jl_xionglve_x2',result.targets);
                            }
                          }
                        },
                        prompt:function(links,player){
                          return '将一张雄略牌当'+get.translation(links[0][2])+'使用';
                        }
                      }
                    }
                  }
                  else if(get.type(links[0],'trick')=='basic'){
                    return {
                      cards:links,
                      chooseButton:{
                        dialog:function(){
                          var list=[];
                          for(var i in lib.card){
                            if(!lib.translate[i+'_info']) continue;
                            if(lib.card[i].mode&&lib.card[i].mode.contains(lib.config.mode)==false) continue;
                            if(lib.card[i].type=='basic') list.push(['basic','',i]);
                          }
                          return ui.create.dialog('雄略:请选择想要使用的基本牌',[list,'vcard']);
                        },
                        filter:function(button,player){
                          return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
                        },
                        check:function(button){
                          var player=_status.event.player;
                          var shaTarget=false;
                          for(var i=0;i<game.players.length;i++){
                            if(player.canUse('sha',game.players[i])&&ai.get.effect(game.players[i],{name:'sha'},player)>0){
                              shaTarget=true;
                            }
                          }
                          if(player.isDamaged()) return (button.link[2]=='tao')?1:-1;
                          if(shaTarget&&player.num('h','sha')&&!player.num('h','jiu')) return (button.link[2]=='jiu')?1:-1;
                          if(shaTarget&&!player.num('h','sha')) return (button.link[2]=='sha')?1:-1;
                          return (button.link[2]=='sha')?1:-1;
                        },
                        backup:function(links,player){
                          return {
                            filterCard:function(){return false},
                            selectCard:-1,
                            audio:1,
                            popname:true,
                            viewAs:{name:links[0][2]},
                            onuse:function(result,player){
                              result.cards=lib.skill.hj_jl_xionglve_x2_backup.cards;
                              var card=result.cards[0];
                              player.storage.hj_jl_xionglve.remove(card);
                              player.syncStorage('hj_jl_xionglve');
                              if(!player.storage.hj_jl_xionglve.length){
                                player.unmarkSkill('hj_jl_xionglve');
                              }
                              else{
                                player.markSkill('hj_jl_xionglve');
                              }
                              player.logSkill('hj_jl_xionglve_x2',result.targets);
                            }
                          }
                        },
                        prompt:function(links,player){
                          return '将一张雄略牌当'+get.translation(links[0][2])+'使用';
                        }
                      }
                    }
                  }
                  else{
                    return {
                      direct:true,
                      cards:links,
                      filterTarget:function(card,player,target){
                        var cards=lib.skill.hj_jl_xionglve_x2_backup.cards;
                        return player!=target&&!target.get('e',get.subtype(cards[0])[5]);
                      },
                      filterCard:function(){return false},
                      selectCard:-1,
                      prepare:function(cards,player,targets){
                        var cards=lib.skill.hj_jl_xionglve_x2_backup.cards;
                        player.$give(cards[0],targets[0],false);
                      },
                      ai2:function(target){
                        return ai.get.attitude(_status.event.player,target)+10;
                      },
                      content:function(){
                        event.cards=lib.skill.hj_jl_xionglve_x2_backup.cards;
                        var card=event.cards[0];
                        player.storage.hj_jl_xionglve.remove(card);
                        player.syncStorage('hj_jl_xionglve');
                        if(!player.storage.hj_jl_xionglve.length){
                          player.unmarkSkill('hj_jl_xionglve');
                        }
                        else{
                          player.markSkill('hj_jl_xionglve');
                        }
                        player.logSkill('hj_jl_xionglve_x2',target);
                        target.equip(card);
                      }
                    }
                  }
                },
              },
              ai:{
                order:6,
                result:{
                  player:function (player){
                    if(player.hp<=2) return 3;
                    return player.storage.hj_jl_xionglve.length-1;
                  },
                },
              },
            },
          },
        },
        "hj_jl_quanheng":{ //权衡
audio:"ext:魂将:2",
          enable:'phaseUse',
          usable:1,
          filter:function(event,player){
            return player.num('h')>0;
          },
          chooseButton:{
            dialog:function(){
              var list=['wuzhong','sha'];
              list[0]=['trick','',list[0]];
              list[1]=['basic','',list[1]];
              return ui.create.dialog('权衡',[list,'vcard']);
            },
            filter:function(button,player){
              return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
            },
            check:function(button){
              var player=_status.event.player;
              var shaTarget=false;
              for(var i=0;i<game.players.length;i++){
                if(player.canUse('sha',game.players[i])&&ai.get.effect(game.players[i],{name:'sha'},player)>0){
                  shaTarget=true;
                }
              }
              if(shaTarget&&!player.num('h','sha')) return (button.link[2]=='sha')?1:-1;
              var hs=player.get('h');
              for(var i=0;i<hs.length;i++){
                if(5-ai.get.value(hs[i])){
                  return (button.link[2]=='wuzhong')?1:-1;
                }
              }
              return 0;
            },
            backup:function(links,player){
              return {
                filterCard:true,
                selectCard:[1,Infinity],
                audio:['hj_jl_zhiheng'],
                popname:true,
                complexCard:true,
                ai1:function(card){
                  if(ui.selected.cards.length>0) return -1;
                  return 5-ai.get.value(card);
                },
                viewAs:{name:links[0][2]},
                onuse:function(result,player){
                  if(lib.skill.hj_jl_quanheng_backup.viewAs.name=='wuzhong'){
                    player.storage.hj_jl_quanheng_wuzhong_takeEffect=false;
                    player.addSkill('hj_jl_quanheng_wuxie');
                  }
                }
              }
            },
            prompt:function(links,player){
              return '至少一张手牌当'+get.translation(links[0][2])+'使用';
            },
          },
          group:['hj_jl_quanheng_shaMiss'],
          subSkill:{
            shaMiss:{
              trigger:{player:'shaMiss'},
              forced:true,
              nopop:true,
              filter:function(event,player){
                return event.parent.skill=='hj_jl_quanheng_backup';
              },
              content:function(){
                player.draw(trigger.cards.length);
              }
            }
          },
          init:function(player){
            player.storage.hj_jl_quanheng_wuzhong_takeEffect=false;
          },
          ai:{
            order:8,
            result:{
              player:1,
            }
          }
        },
        "hj_jl_quanheng_wuxie":{ //权衡-无懈
          group:['hj_jl_quanheng_wuxie_switch','hj_jl_quanheng_wuxie_state'],
          subSkill:{
            switch:{
              trigger:{global:'wuxieAfter'},
              forced:true,
              popup:false,
              content:function(){
                player.storage.hj_jl_quanheng_wuzhong_takeEffect=!player.storage.hj_jl_quanheng_wuzhong_takeEffect;
              }
            },
            state:{
              trigger:{player:'useCardAfter'},
              forced:true,
              popup:false,
              filter:function(event,player){
                return event.card.name=='wuzhong';
              },
              content:function(){
                'step 0'
                if(player.storage.hj_jl_quanheng_wuzhong_takeEffect){
                  player.draw(trigger.cards.length);
                }
                'step 1'
                player.removeSkill('hj_jl_quanheng_wuxie');
                player.storage.hj_jl_quanheng_wuzhong_takeEffect=false;
              }
            }
          }
        },

        "hj_jl_xuanlei":{ //玄雷
audio:"ext:魂将:2",
          trigger:{
            player:"phaseBegin",
          },
          forced:true,
          filter:function (event,player){
            return game.hasPlayer(function(current){
              return current.isEnemyOf(player)&&current.countCards('j');
            });
          },
          content:function (){
            "step 0"
            event.targets=game.filterPlayer(function(current){
              return current.isEnemyOf(player)&&current.countCards('j');
            });
            event.targets.sort(lib.sort.seat);
            player.line(event.targets,'thunder');
            "step 1"
            if(event.targets.length){
              event.targets.shift().damage('thunder');
              event.redo();
            }
          },
        },
        "hj_jl_dianjie":{ //电界
audio:"ext:魂将:2",
          trigger:{
            player:["phaseDrawBefore","phaseUseBefore"],
          },
          prompt:function (event,player){
            if(event.name=='phaseDraw'){
              return '是否发动电界跳过摸牌阶段？';
            }
            return '是否发动电界跳过出牌阶段？';
          },
          check:function (event,player){
            if(event.name=='phaseDraw'){
              return true;
            }else{
              if(player.num('h',function(card){
                return ai.get.value(card)>=8;
              })||player.num('h')>=4) {
                return false;
              }
            }
            return true;
          },
          content:function (){
            "step 0"
            trigger.finish();
            trigger.untrigger();
            player.judge(function(card){
              return get.color(card)=='black'?1:-1;
            })
            "step 1"
            if(result.bool){
              player.chooseTarget('选择一个目标对其造成一点雷电伤害').ai=function(target){
                if(player.hp<=2) return target==player?1:-1;
                return ai.get.damageEffect(target,player,player);
              }
            }
            else{
              player.chooseTarget('选择一至两个目标将其横置',[1,2],function(card,player,target){
                return !target.isLinked();
              }).ai=function(target){
                return -ai.get.attitude(player,target);
              }
              event.goto(3);
            }
            'step 2'
            if(result.bool){
              player.line(result.targets[0],'thunder');
              result.targets[0].damage('thunder');
            }
            event.finish();
            'step 3'
            if(result.bool){
              player.line(result.targets,'thunder');
              for(var i=0;i<result.targets.length;i++){
                result.targets[i].link();
              }
            }
          },
        },
        "hj_jl_shendao":{ //神道
audio:"ext:魂将:2",
           trigger:{
            global:"judge",
          },
          direct:true,
          content:function (){
            "step 0"
            player.chooseTarget(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
              get.translation(trigger.player.judging[0])+'，是否发动【神道】？',function(card,player,target){
                if(target==player) return target.num('hej');
                return target.num('ej');
              }).ai=function(target){
              return player==target;
            }
            "step 1"
            if(result.bool){
              event.target=result.targets[0];
              if(result.targets[0]==player){
                player.chooseCard('请选择改判牌','hej').set('ai',function(card){
                  var trigger=_status.event.getTrigger();
                  var player=_status.event.player;
                  var judging=_status.event.judging;
                  var result=trigger.judge(card)-trigger.judge(judging);
                  var attitude=ai.get.attitude(player,trigger.player);
                  if(attitude==0||result==0) return 0;
                  if(attitude>0){
                    return result-ai.get.value(card)/2;
                  }
                  else{
                    return -result-ai.get.value(card)/2;
                  }
                }).set('judging',trigger.player.judging[0]);
              }
              else{
                player.choosePlayerCard('请选择改判牌',result.targets[0],'ej').set('ai',function(button){
                  var trigger=_status.event.getTrigger();
                  var player=_status.event.player;
                  var judging=_status.event.judging;
                  var result=trigger.judge(button)-trigger.judge(judging);
                  var attitude=ai.get.attitude(player,trigger.player);
                  if(attitude==0||result==0) return 0;
                  if(attitude>0){
                    return result-ai.get.value(button)/2;
                  }
                  else{
                    return -result-ai.get.value(button)/2;
                  }
                }).set('judging',trigger.player.judging[0]);
              }
            }
            "step 2"
            if(result.bool){
              event.cardx=result.cards[0]||result.links[0];
              event.target.lose(event.cardx);
              player.respond(event.cardx,'highlight');
            }
            else{
              event.finish();
            }
            "step 3"
            if(result.bool){
              player.logSkill('hj_jl_shendao',event.target);
              if(trigger.player.judging[0].clone){
                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                game.broadcast(function(card){
                  if(card.clone){
                    card.clone.classList.remove('thrownhighlight');
                  }
                },trigger.player.judging[0]);
                game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
              }
              ui.discardPile.appendChild(trigger.player.judging[0]);
              trigger.player.judging[0]=event.cardx;
              if(!get.owner(event.cardx,'judge')){
                trigger.position.appendChild(event.cardx);
              }
              game.log(trigger.player,'的判定牌改为',event.cardx);
              game.delay(2);
            }
          },
          ai:{
            tag:{
              rejudge:1,
            },
          },
        },
        "hj_jl_leihun":{ //雷魂
audio:"ext:魂将:2",
          trigger:{
            player:"damageBegin",
          },
          forced:true,
          filter:function (event){
            if(event.nature=='thunder') return true;
          },
          content:function (){
            trigger.untrigger();
            trigger.finish();
            player.recover(trigger.num);
            player.draw(2);
          },
          ai:{
            nothunder:true,
            effect:{
              target:function (card,player,target,current){
                if(get.tag(card,'thunderDamage')) return [0,2];
              },
            },
          },
        },
        
        "hj_jl_tianji":{ //天机
audio:"ext:魂将:2",
          trigger:{
            global:"phaseUseBegin",
          },
          direct:true,
          init:function(player){
            player.storage.pd=undefined;
          },
          content:function(){
            'step 0'
            var nh=player.num('h');
            var num=0;
            for(var i=0;i<game.players.length;i++){
              var np=game.players[i].num('h');
              if(np>nh) num++;
            }
            var cards=[];
            cards.push(ui.cardPile.firstChild);
            event.cards=cards;
            var dialog=ui.create.dialog('天机',event.cards,'hidden');
            dialog.classList.add('noselect');
            if(num){
              player.chooseControl('获得','替换','cancel',dialog).ai=function(){
                return '获得';
              }
            }
            else{
              player.chooseControl('替换','cancel',dialog).ai=function(){
                if(_status.currentPhase!==player){
                  if(get.type(cards[0])=='basic'&&(player.num('h',{type:'basic'})<player.num('h')/2))        return '替换';
                  if(get.type(cards[0])!='basic') return '替换';
                }
                if(_status.currentPhase==player){
                  if(get.type(cards[0])=='trick'&&player.hp<=player.maxHp/2) return '替换';  
                  if(get.type(cards[0])=='basic'&&player.hp>player.maxHp/2&&player.num('h',{type:'trick'})) return '替换'; 
                  if(get.type(cards[0])=='equip'&&player.num('e')<4)     return '替换'; 
                }
                if(get.type(cards[0])=='basic') player.storage.pd='basic';
                else player.storage.pd='trick';
                return 'cancel';
              }
            }
            "step 1"
            if(result.control=='获得'){
              player.logSkill('hj_jl_tianji');
              player.gain(event.cards,'draw');
              event.finish();
            }
            else if(result.control=='替换'){
              player.logSkill('hj_jl_tianji');
              player.chooseCard('选择一张牌置于牌堆顶','h',true).ai=function(card){
                if(_status.currentPhase==player){
                  if(player.hp<=player.maxHp/2&&player.num('h',{type:'basic'})){
                    return get.type(card)=='basic';
                  }                    
                  if(player.hp>player.maxHp/2&&player.num('h',{type:'trick'})){
                    return get.type(card)=='trick';
                  }
                }
                else{
                  return 15-ai.get.value(card);
                }
              }
            }
            else{
              event.finish();
            }
            'step 2'
            event.card=result.cards[0];
            if(get.type(result.cards[0])=='basic'){
              player.storage.pd='basic';
            }
            else{
              player.storage.pd='trick';
            }
            player.lose(result.cards,ui.special);
            var cardx=ui.create.card();
            cardx.classList.add('infohidden');
            cardx.classList.add('infoflip');
            player.$throw(cardx,1000);
            'step 3'
            game.delay(0.5);
            'step 4'
            if(event.card){
              event.card.fix();
              ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
              player.gain(event.cards,'draw');
            }
          },
        },
        "hj_jl_tianqi":{ //天启
audio:"ext:魂将:2",
          usable:1,
          enable:"phaseUse",
          chooseButton:{
            dialog:function(){
              var list=['sha','shan','tao','jiu'];
              for(var i=0;i<list.length;i++){
                list[i]=['basic','',list[i]];
              }
              var list2=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
              for(var i=0;i<list2.length;i++){
                list2[i]=['trick','',list2[i]];
              }
              var dialog=ui.create.dialog();
              dialog.add('基本牌');
              dialog.add([list,'vcard']);
              dialog.add('锦囊牌');
              dialog.add([list2,'vcard']);
              return dialog;
            },
            filter:function(button,player){
              return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
            },
            check:function(button,player){
              var player=_status.event.player;
              var recover=0,lose=1;
              if(player.storage.hj_jl_tianji_top!=get.type(ui.cardPile.firstChild)) delete player.storage.hj_jl_tianji_top;
              for(var i=0;i<game.players.length;i++){
                if(!game.players[i].isOut()){
                  if(game.players[i].hp<game.players[i].maxHp){
                    if(ai.get.attitude(player,game.players[i])>0){
                      if(game.players[i].hp<2){
                        lose--;
                        recover+=0.5;
                      }
                      lose--;
                      recover++;
                    }
                    else if(ai.get.attitude(player,game.players[i])<0){
                      if(game.players[i].hp<2){
                        lose++;
                        recover-=0.5;
                      }
                      lose++;
                      recover--;
                    }
                  }
                  else{
                    if(ai.get.attitude(player,game.players[i])>0){
                      lose--;
                    }
                    else if(ai.get.attitude(player,game.players[i])<0){
                      lose++;
                    }
                  }
                }
              }
              if(lose>recover&&lose>0&&player.storage.hj_jl_tianji_top=='trick') return (button.link[2]=='wanjian')?1:-1;
              if(lose<recover&&recover>0&&player.storage.hj_jl_tianji_top=='trick') return (button.link[2]=='taoyuan')?1:-1;
              if(player.storage.hj_jl_tianji_top=='basic'&&player.isDamaged()) return (button.link[2]=='tao')?1:-1;
              if(player.storage.hj_jl_tianji_top=='basic'&&player.num('h','sha')) return (button.link[2]=='jiu')?1:-1;
              if(player.storage.hj_jl_tianji_top=='basic'&&!player.num('h','sha')) return (button.link[2]=='sha')?1:-1;
              if(player.storage.hj_jl_tianji_top=='trick')    return (button.link[2]=='wuzhong')?1:-1;
              if(game.players.length<4&&player.storage.hj_jl_tianji_top=='trick') return (button.link[2]=='shunshou')?1:-1;
              return (button.link[2]=='guohe')?1:-1;
            },
            backup:function(links,player){
              return {
                filterCard:function(){return false},
                selectCard:-1,
                popname:true,
                viewAs:{name:links[0][2]},
                onuse:function(result,player){
                  player.logSkill('hj_jl_tianqi');
                  game.log(player,'声明了'+get.translation(links[0][0])+'牌');
                  var cards=get.cards();
                  player.showCards(cards);
                  result.cards=cards;
                  if(get.type(cards[0],'trick')!=links[0][0]){
                    player.loseHp();
                  }
                  delete player.storage.hj_jl_tianji_top;
                }
              }
            },
            prompt:function(links,player){
              return '亮出牌堆顶的一张牌，并将此牌当'+get.translation(links[0][2])+'使用。若亮出的牌不为'+get.translation(links[0][0])+'牌，你须先失去1点体力。(你的出牌阶段限一次。)';
            },
          },
          group:["hj_jl_tianqi2","hj_jl_tianqi3","hj_jl_tianqi4","hj_jl_tianqi5"],
          ai:{
            order:10,
            result:{
              player:function(player){
                if(player.storage.hj_jl_tianji_top!=undefined) return 1;
                if(player.storage.hj_jl_tianji_top==undefined) return -10;
                return -1;
              },
            },
            threaten:4,
          },
        },
        "hj_jl_tianqi2":{ //天启2
          enable:"chooseToUse",
          audio:"ext:魂将:2",
          filter:function (event,player){
            return _status.event.dying!=player&&event.parent.name!='phaseUse';
          },
          filterCard:function (){return false},
          selectCard:-1,
          viewAs:{
            name:"tao",
          },
          check:function (card,event){
            var player=_status.event.player;
            if(player.storage.hj_jl_tianji_top=='basic') return 1;
            if(player.num('h','tao')) return 0;    
            return player.hp-1;    
          },
          onuse:function (result,player){
            var cards=get.cards();
            player.showCards(cards);
            result.cards=cards;
            if(get.type(cards[0],'trick')!='basic'){
              player.loseHp();
            }
            delete player.storage.hj_jl_tianji_top;
          },
          ai:{
            result:{
              player:function (player){
                if(player.storage.hj_jl_tianji_top!='basic') return -1;
                return -0.5;
              },
              target:function (player,target){
                return get.effect(target,{name:'tao'},player,player);
              },
              "target_use":function (player,target){
                // if(player==target&&player.hp<=0) return 2;
                if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                  keep=true;
                } else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                  keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                  if(target.hp>2||nd==0) return 0;
                  if(target.hp==2){
                    if(game.hasPlayer(function(current){
                      if(target!=current&&get.attitude(target,current)>=3){
                        if(current.hp<=1) return true;
                        if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                      }
                    })){
                      return 0;
                    }
                  }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                  if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                    var num=game.countPlayer(function(current){
                      if(current.identity=='fan'){
                        return current.countCards('h','tao');
                      }
                    });
                    if(num>1&&player==target) return 2;
                    return 0;
                  }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                  if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                    return 0;
                  }
                }
                if(mode=='stone'&&target.isMin()&&player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&tri.source!=target.getEnemy()){
                  return 0;
                }
                return 2;
              },
            },
            skillTagFilter:function (player){
              return _status.dying!=player;
            },
            threaten:1.5,
            save:true,
            basic:{
              order:function (card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
              },
              useful:[8,6.5,5,4],
              value:[8,6.5,5,4],
            },
            tag:{
              recover:1,
              save:1,
            },
          },
        },
        "hj_jl_tianqi3":{ //天启3
          enable:["chooseToUse","chooseToRespond"],
          audio:"ext:魂将:2",
          filter:function (event,player){
            return _status.event.dying!=player&&event.parent.name!='phaseUse';
          },
          filterCard:function (){return false},
          selectCard:-1,
          check:function (card,event){
            var player=_status.event.player;
            if(player.storage.hj_jl_tianji_top=='basic') return 1;
            if(player.num('h','sha')) return 0;    
            return 1;    
          },
          viewAs:{
            name:"sha",
          },
          onuse:function (result,player){
            var cards=get.cards();
            player.showCards(cards);
            result.cards=cards;
            if(get.type(cards[0],'trick')!='basic'){
              player.loseHp();
            }
            delete player.storage.hj_jl_tianji_top;
          },
          onrespond:function (result,player){
            var cards=get.cards();
            player.showCards(cards);
            result.cards=cards;
            if(get.type(cards[0],'trick')!='basic'){
              player.loseHp();
            }
            delete player.storage.hj_jl_tianji_top;
          },
          ai:{
            skillTagFilter:function (player){
              return _status.dying!=player;
            },
            respondSha:true,
            canLink:function (player,target,card){
              if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
              if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
              },true)) {
                return false;
              }
              if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
              return true;
            },
            basic:{
              useful:[5,1],
              value:[5,1],
            },
            order:function (item,player){
              if(player.hasSkillTag('presha',true,null,true)) return 10;
              if(lib.linked.contains(get.nature(item))){
                if(game.hasPlayer(function(current){
                  return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                  return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1){
                  return 3.1;
                }
                return 3;
              }
              return 3.05;
            },
            result:{
              target:function (player,target,card,isLink){
                var eff=function(){
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
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                  target:target,
                  card:card,
                },true)) {
                  return eff/1.2;
                }
                return eff;
              },
            },
            tag:{
              respond:1,
              respondShan:1,
              damage:function (card){
                if(card.nature=='poison') return;
                return 1;
              },
              natureDamage:function (card){
                if(card.nature) return 1;
              },
              fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
              },
              thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
              },
              poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
              },
            },
          },
        },
        "hj_jl_tianqi4":{ //天启4
          enable:"chooseToUse",
          audio:"ext:魂将:2",
          filter:function (event,player){
            return _status.event.dying!=player&&event.parent.name!='phaseUse';
          },
          filterCard:function (){return false},
          "ai2":function (target){
            var player=_status.event.player;
            if(player.storage.pd=='trick') return 1;
            if(player.hp==1&&player.storage.pd!='trick') return 0;
            if(ai.get.attitude(player,_status.currentPhase)>=2){
              if(_status.currentPhase.hasJudge('lebu')||_status.currentPhase.hasJudge('bingliang')){
                return 10;
              }
              return 0;
            }
            if(player.hp<=2&&!player.num('h','tao')) return 0;
            return 1;
          },
          selectCard:-1,
          viewAs:{
            name:"wuxie",
          },
          viewAsFilter:function (player){
            return _status.dying!=player;
          },
          onuse:function (result,player){
            var cards=get.cards();
            player.showCards(cards);
            result.cards=cards;
            if(get.type(cards[0],'trick')!='trick'){
              player.loseHp();
            }
            delete player.storage.hj_jl_tianji_top;
          },
          ai:{
            basic:{
              useful:[6,4],
              value:[6,4],
            },
            result:{
              player:1,
            },
            expose:0.2,
          },
        },
        "hj_jl_tianqi5":{ //天启5
          enable:["chooseToUse","chooseToRespond"],
          audio:"ext:魂将:2",
          filter:function (event,player){
            return _status.event.dying!=player&&event.parent.name!='phaseUse';
          },
          filterCard:function (){return false},
          selectCard:-1,
          check:function (card,event){
            var player=_status.event.player;
            if(player.storage.pd=='basic') return 1;
            if(player.num('h','shan')) return 0;    
            return 1;    
          },
          viewAs:{
            name:"shan",
          },
          onuse:function (result,player){
            var cards=get.cards();
            player.showCards(cards);
            result.cards=cards;
            if(get.type(cards[0],'trick')!='basic'){
              player.loseHp();
            }
            delete player.storage.hj_jl_tianji_top;
          },
          onrespond:function (result,player){
            var cards=get.cards();
            player.showCards(cards);
            result.cards=cards;
            if(get.type(cards[0],'trick')!='basic'){
              player.loseHp();
            }
            delete player.storage.hj_jl_tianji_top;
          },
          ai:{
            skillTagFilter:function (player){
              return _status.dying!=player;
            },
            respondShan:true,
            order:3,
            basic:{
              useful:[7,2],
              value:[7,2],
            },
            result:{
              player:1,
            },
          },
        },

        "hj_jl_zhuizun":{ //追尊
audio:"ext:魂将:2",
          srlose:true,
          enable:"chooseToUse",
          mark:true,
          unique:true,
          skillAnimation:true,
          animationStr:"追尊",
          animationColor:"water",
          init:function(player){
            player.storage.hj_jl_zhuizun=false;
          },
          filter:function(event,player){
            if(event.type!='dying') return false;
            if(player!=event.dying) return false;
            if(player.storage.hj_jl_zhuizun) return false;
          },
          content:function(){
            'step 0'
            player.hp=Math.min(1,player.maxHp);
            player.update();
            player.unmarkSkill('hj_jl_zhuizun');
            player.storage.hj_jl_zhuizun=true;
            player.addSkill('hj_jl_zhuizun2');
            'step 1'
            var targets=game.players.slice(0);
            targets.remove(player);
            targets.sort(lib.sort.seat);
            event.targets=targets;
            'step 2'
            if(event.targets.length){
              event.target=event.targets.shift();
            }
            else{
              event.finish();
            }
            'step 3'
            if(event.target.num('h')){
              event.target.chooseCard('选择一张手牌交给'+get.translation(player),true).ai=function(card){
                return -ai.get.value(card);
              }
            }
            else{
              event.goto(2);
            }
            'step 4'
            if(result.bool){
              player.gain(result.cards[0]);
              target.$give(1,player);
            }
            event.goto(2);
          },
          ai:{
            order:1,
            skillTagFilter:function(player){
              if(player.storage.hj_jl_zhuizun) return false;
              if(player.hp>0) return false;
            },
            save:true,
            result:{
              player:10,
            },
            threaten:function(player,target){
              if(!target.storage.hj_jl_zhuizun) return 0.6;
            },
          },
          intro:{
            content:"limited",
          },
        },
        "hj_jl_guicai":{ //鬼才
audio:"ext:魂将:2",
          srlose:true,
          trigger:{
            global:"judge",
          },
          check:function(event,player){
            var judge=event.judge(event.player.judging[0]);
            if(ai.get.attitude(player,event.player)<0) return judge>0;
            if(ai.get.attitude(player,event.player)>0) {
              return judge<0;
            }
            return 0;
          },
          content:function(){
            "step 0"
            player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+get.translation(trigger.player.judging[0])+'，打出一张手牌代替之或亮出牌顶的一张牌代替之').set('ai',function(card){
              var trigger=_status.event.getParent()._trigger;
              var player=_status.event.player;
              var judging=_status.event.judging;
              var result=trigger.judge(card)-trigger.judge(judging);
              var attitude=ai.get.attitude(player,trigger.player);
              if(attitude==0||result==0) return 0;
              if(attitude>0){
                return result-ai.get.value(card)/2;
              }
              else{
                return -result-ai.get.value(card)/2;
              }
            }).set('judging',trigger.player.judging[0]);
            "step 1"
            if(result.bool){
              player.respond(result.cards,'highlight');
            }
            else{
              event.cards=get.cards();
              game.log(get.translation(player)+'亮出了牌堆顶的'+get.translation(event.cards));
              player.showCards(event.cards);
              player.respond(event.cards,'highlight');                
            }
            "step 2"
            if(result.bool){
              if(trigger.player.judging[0].clone){
                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
              }
              ui.discardPile.appendChild(trigger.player.judging[0]);
              trigger.player.judging[0]=result.cards[0];
              if(!get.owner(result.cards[0],'judge')){
                trigger.position.appendChild(result.cards[0]);
              }
              game.log(trigger.player,'的判定牌改为',result.cards[0]);
              game.delay(2);
            }
            else{
              if(trigger.player.judging[0].clone){
                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
              }
              ui.discardPile.appendChild(trigger.player.judging[0]);
              trigger.player.judging[0]=event.cards[0];
              if(!get.owner(event.cards[0],'judge')){
                trigger.position.appendChild(event.cards[0]);
              }
              game.log(trigger.player,'的判定牌改为',event.cards[0]);
            }
          },
          ai:{
            tag:{
              rejudge:1,
            },
          },
        },
        "hj_jl_jilve":{ //极略
        audio:"ext:魂将:3",
            enable:"phaseUse",
          filter:function(event,player){
            return !player.hasSkill('hj_jl_jilve2');
          },
          content:function(){
            "step 0"
            player.draw();
            player.chooseToUse().filterCard=function(card,player){
              return (lib.filter.cardEnabled(card,player,event.parent.parent)&&lib.filter.cardUsable(card,player,event.parent.parent));
            }
            "step 1"
            if(!result.bool){
              player.chooseToDiscard('he',true);
              player.addTempSkill('hj_jl_jilve2','phaseAfter');
            }
          },
          ai:{
            threaten:4,
            order:15,
            result:{
              player:1,
            },
            effect:{
              player:function(card,player){
                if(get.type(card)!='basic') return [1,3];
              },
            },
          },
        },
        "hj_jl_jilve2":{ //极略2
           //只是作为标签，可以用其他方法代替
         },
        "hj_jl_tongtian":{ //通天
audio:"ext:魂将:4",
           enable:"phaseUse",
          unique:true,
          skillAnimation:true,
          position:"he",
          mark:true,
          filter:function(event,player){
            return !player.storage.hj_jl_tongtian;
          },
          filterCard:function(card){
            var suit=get.suit(card);
            for(var i=0;i<ui.selected.cards.length;i++){
              if(get.suit(ui.selected.cards[i])==suit) return false;
            }
            return true;
          },
          selectCard:[1,4],
          check:function(card){
            return 8-ai.get.value(card)
          },
          init:function(player){
            player.storage.hj_jl_tongtian=false;
          },
          content:function(){
            "step 0"
            player.storage.hj_jl_tongtian=true;
            for(var i=0;i<cards.length;i++){
              if(get.suit(cards[i])=='heart'){
                player.addSkill('guanxing');
                lib.skill.guanxing.audioname=['hjsoul_simayi'];
              }
              if(get.suit(cards[i])=='diamond'){
                player.addSkill('zhiheng');
                lib.skill.zhiheng.audioname=['hjsoul_simayi'];
              }
              if(get.suit(cards[i])=='club'){
                player.addSkill('wansha');
                lib.skill.wansha.audioname=['hjsoul_simayi'];
              }
              if(get.suit(cards[i])=='spade'){
                player.addSkill('fankui');
                lib.skill.fankui.audioname=['hjsoul_simayi'];
              }
            }
            "step 1"
            player.unmarkSkill('hj_jl_tongtian');

          },
          ai:{
            order:6,
            result:{
              player:function(player){
                var cards=player.get('he');
                var suits=[];
                for(var i=0;i<cards.length;i++){
                  if(!suits.contains(get.suit(cards[i]))){
                    suits.push(get.suit(cards[i]));
                  }
                }
                if(suits.length<3) return -1;
                return suits.length;
              },
            },
          },
          intro:{
            content:"limited",
          },
        },

        "hj_jl_ganglie":{ //刚烈
audio:"ext:魂将:2",
            trigger:{
            player:"phaseUseBegin",
          },
          srlose:true,
          check:function(event,player){
            return 1;
          },
          content:function(){
            player.loseHp();
            player.addTempSkill('hj_jl_ganglie_damage','phaseAfter');
            player.addTempSkill('hj_jl_ganglie_phaseEnd','phaseAfter');
          },
          subSkill:{
            damage:{
              trigger:{
                source:"damageBegin",
              },
              forced:true,
              filter:function(event){
                return event.num>0;
              },
              content:function(){
                trigger.num++;
                player.removeSkill('hj_jl_ganglie_damage');
              },
              sub:true,
            },
            phaseEnd:{
              audio:2,
              trigger:{
                player:"phaseEnd",
              },
              forced:true,
              filter:function(event,player){
                return player.getStat('damage')>0;
              },
              content:function(){
                player.draw(player.getStat('damage'));
              },
              sub:true,
            },
          },
        },
        "hj_jl_danjing":{ //啖睛
audio:"ext:魂将:2",
             enable:"phaseUse",
          usable:1,
          filterTarget:function(card,player,target){
            return player!=target;
          },
          content:function(){
            'step 0'
            player.loseHp();
            player.chooseControl('摸三张牌','弃三张牌').ai=function(){
              if(ai.get.attitude(player,target)>0) return '摸三张牌';
              return '弃三张牌';
            };
            'step 1'
            if(result.control=='摸三张牌'){
              target.draw(3);
            }
            else{
              target.chooseToDiscard(3,'he',true);
            }    
          },
          ai:{
            order:5,
            result:{
              player:function(player){
                if(player.isZhu){
                  if(player.hp<=2) return -5;
                  return -1;
                }
                return -1;
              },
              target:function(player,target){
                if(ai.get.attitude(player,target)>0) return 3;
                if(ai.get.attitude(player,target)<0){
                  if(target.num('he')<3) return 0;
                  return -3;
                }
                return 0;
              },
            },
          },
        },
        "hj_jl_zhonghun":{ //忠魂
audio:"ext:魂将:2",
           trigger:{
            player:"dieBegin",
          },
          direct:true,
          content:function(){
            'step 0'
            player.chooseTarget(function(card,player,target){
              return player!=target;
            }).ai=function(target){
              return ai.get.attitude(player,target);
            };
            'step 1'
            if(result.bool){
              player.logSkill('hj_jl_zhonghun',result.targets);
              for(var i=0;i<player.skills.length;i++){
                result.targets[0].addSkill(player.skills[i]);
              }
            }
          },
        },

        "hj_jl_nizhan":{ //逆战
audio:"ext:魂将:2",
          trigger:{
            global:"damageEnd",
          },
          filter:function(event){
            return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();                
          },
          init:function(player){
            for(var i=0;i<game.players.length;i++){
              game.players[i].storage.hj_jl_nizhan_mark=0;
            }
          },
          direct:true,
          content:function(){
            "step 0"
            player.chooseTarget('是否发动【逆战】？',function(card,player,target){
              return (trigger.source==target||trigger.player==target)&&player!=target;
            }).ai=function(target){
              if(ai.get.attitude(player,trigger.player)<0) return target==trigger.player?1:-1;
              return target==trigger.source?1:-1;
            }
            "step 1"
            if(result.bool){
              player.logSkill('hj_jl_nizhan',result.targets[0]);
              result.targets[0].storage.hj_jl_nizhan_mark+=1;
              result.targets[0].markSkill('hj_jl_nizhan_mark');
              result.targets[0].syncStorage('hj_jl_nizhan_mark');
            }
          },
          subSkill:{
            mark:{
              marktext:"袭",
              intro:{
                content:"mark",
              },
              sub:true,
            },
          },
        },
        "hj_jl_wuwei":{ //无畏
audio:"ext:魂将:2",
            srlose:true,
          trigger:{
            player:"phaseDrawBegin",
          },
          priority:-1,
          check:function(event){
            return event.num<=3;
          },
          prompt:"是否发动技能【无畏】，展示牌中每有一张基本牌便可视为对一名角色使用一张【杀】",
          content:function(){
            'step 0'
            trigger.untrigger();
            trigger.finish();
            event.cards=get.cards(3);
            player.showCards(event.cards);
            'step 1'
            event.lose=0;
            for(var i=0;i<event.cards.length;i++){
              if(get.type(event.cards[i],'trick')=='basic'){
                event.lose++;
              }
            }
            if(event.lose>0){
              var next=player.chooseCardButton('请选择无畏视为【杀】使用的牌',event.cards);
              next.ai=function(button){
                return 8-ai.get.value(button.link);
              }
              next.filterButton=function(button){
                return get.type(button.link)=='basic';
              }
            }
            else{
              player.gain(event.cards,'gain2');
              event.finish();
            }
            'step 2'
            if(result.bool){
              event.cards1=result.links[0];
              player.chooseTarget('请选择无畏的目标',function(card,player,target){
                return lib.filter.targetEnabled({name:'sha'},player,target);
              }).ai=function(target){
                return ai.get.effect(target,{name:'sha'},_status.event.player,_status.event.player);
              }
            }
            else{
              player.gain(event.cards,'gain2');
              event.finish();
            }
            'step 3'
            if(result.bool){
              player.useCard({name:'sha'},result.targets,[event.cards1],false);
              event.cards.remove(event.cards1);
              event.goto(1);
            }
            else{
              player.gain(event.cards,'gain2');
              event.finish();
            }
          },
          ai:{
            threaten:1.3,
            expose:0.2,
          },
        },
        "hj_jl_cuifeng":{ //摧锋
audio:"ext:魂将:2",
          trigger:{
            player:"phaseEnd",
          },
          forced:true,
          filter:function(player){
            var num=0;
            for(var i=0;i<game.players.length;i++){
              num+=game.players[i].storage.hj_jl_nizhan_mark;
            }
            if(num>=4) return true;
            return false;
          },
          content:function(){
            'step 0'
            for(var i=0;i<game.players.length;i++){
              if(game.players[i].storage.hj_jl_nizhan_mark){
                player.line(game.players[i],'fire');
                if(game.players[i].num('h')>=game.players[i].storage.hj_jl_nizhan_mark){
                  player.gainPlayerCard(game.players[i].storage.hj_jl_nizhan_mark,game.players[i],'h',true);
                }
                else{
                  player.gain(game.players[i].get('h'));
                  game.players[i].$give(game.players[i].num('h'),player);
                  game.players[i].damage();
                }
                game.delay(1);
              }
            }
            'step 1'
            for(var i=0;i<game.players.length;i++){
              game.players[i].unmarkSkill('hj_jl_nizhan_mark');
              game.players[i].storage.hj_jl_nizhan_mark=0;
            }
          },
        },
        "hj_jl_weizhen":{ //威震
audio:"ext:魂将:2",
          trigger:{
            player:"phaseBegin",
          },
          filter:function(event,player){
            var num=0;
            for(var i=0;i<game.players.length;i++){
              num+=game.players[i].storage.hj_jl_nizhan_mark;
            }
            if(num>0) return true;
            return false;
          },
          prompt:function(event,player){
            var str='';
            var num=0;
            for(var i=0;i<game.players.length;i++){
              num+=game.players[i].storage.hj_jl_nizhan_mark;
            }
            str+='移除场上全部的【袭】标记，然后摸'+num+'张牌。';
            return str;
          },
          check:function(event,player){
            if(player.num('h')==0||player.hp==1) return 1;
            return 0;
          },
          content:function(){
            var num=0;
            for(var i=0;i<game.players.length;i++){
              if(game.players[i].storage.hj_jl_nizhan_mark){
                player.line(game.players[i],'water');
              }
              num+=game.players[i].storage.hj_jl_nizhan_mark;
              game.players[i].unmarkSkill('hj_jl_nizhan_mark');    
              game.players[i].storage.hj_jl_nizhan_mark=0;
            }
            game.delay();    
            player.draw(num);
          },
        },

        "hj_jl_zhiji":{ //掷戟
audio:"ext:魂将:2",
          usable:1,
          enable:"phaseUse",
          filter:function(event,player){
            return player.num('he',{subtype:'equip1'});
          },
          filterCard:function(card){
            return get.subtype(card)=='equip1';
          },
          position:"he",
          selectCard:[1,Infinity],
          filterTarget:function(card,player,target){
            return player!=target;
          },
          check:function(card){
            8-get.value(card);
          },
          content:function(){
            target.damage(cards.length);
          },
          group:["hj_jl_zhiji_damage"],
          subSkill:{
            damage:{
              trigger:{
                player:"damageEnd",
              },
              check:function(){return 1},
              content:function(){
                var card=get.cardPile(function(card){
                  return get.subtype(card)=='equip1';
                });
                if(card){
                  player.gain(card,'gain2');
                  game.log(player,'从牌堆获得了',card);
                }
              },
              sub:true,
            },
          },
          ai:{
            order:function(){
              return lib.card.sha.ai.order-1;
            },
            result:{
              target:function(player,target){
                return get.damageEffect(target,player);
              },
            },
          },
        },
        "hj_jl_kuangxi":{ //狂袭
audio:"ext:魂将:2",
          trigger:{
            global:"damageBefore",
          },
          forced:true,
          filter:function (event,player)
          {
            return true;
          },
          content:function (){
            trigger.source=player;
          },
        },

        "hj_jl_wushen":{ //武神
audio:"ext:魂将:2",
          mod:{
            targetEnabled:function (card,player,target,now){
              if(card.name=='tao') return false;
            },
            cardEnabled:function(card,player){
              if(card.name=='') return false;
            },
            cardUsable:function(card,player){
              if(card.name=='tao') return false;
            },
            cardSavable:function(card,player){
              if(card.name=='tao') return false;
            },
            cardRespondable:function(card,player){
              if(card.name=='sha') return false;
            },
            globalFrom:function(from,to,distance){
              return distance+10;
            },
          },
          enable:["phaseUse","chooseToRespond","chooseToUse"],
          filter:function(event,player){
            return player.num('h',{name:['sha','tao']})>0;
          },
          filterCard:{
            name:["sha","tao"],
          },
          viewAs:{
            name:"juedou",
          },
          check:function(event,player){return true},
          ai:{
            effect:{
              target:function(card,player,target,current){
                if(get.tag(card,'respondSha')&&current<0) {
                  return 0.6
                }
              },
            },
            order:4,
            useful:-1,
            value:-1,
            wuxie:function(target,card,player,viewer){
              if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
              }
            },
            basic:{
              order:5,
              useful:1,
              value:5.5,
            },
            result:{
              target:-1.5,
              player:function(player,target,card){
                if(player.hasSkillTag('directHit_ai',true,{
                  target:target,
                  card:card,
                },true)){
                  return 0;
                }
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                  return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                  return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                  return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                  return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                  return -2;
                }
                return -0.5;
              },
            },
            tag:{
              respond:2,
              respondSha:2,
              damage:1,
            },
          },
        },
        "hj_jl_suohun":{ //索魂
audio:"ext:魂将:2",
           trigger:{
            player:"damageEnd",
          },
          filter:function(event,player){
            return event.source&&event.source!=player;
          },
          forced:true,
          init:function(player){
            for(var i=0;i<game.players.length;i++){
              game.players[i].storage.hj_jl_suohun_mark=0;
            }
          },
          content:function(){
            trigger.source.storage.hj_jl_suohun_mark+=trigger.num;
            trigger.source.syncStorage('hj_jl_suohun_mark');
            trigger.source.markSkill('hj_jl_suohun_mark');
          },
          global:["hj_jl_suohun_mark"],
          subSkill:{
            mark:{
              marktext:"魂",
              intro:{
                content:"mark",
              },
              sub:true,
            },
          },
          group:["hj_jl_suohun2"],
        },
        "hj_jl_suohun2":{ //索魂2
          skillAnimation:true,
          audio:1,
          trigger:{player:'dying'},
          priority:10,
          forced:true,
          filter:function(event,player){
            return player.hp<=0;
          },
          content:function(){
            "step 0"
            if(player.maxHp>1){
              player.maxHp=Math.ceil(player.maxHp/2);
              player.recover(player.maxHp-player.hp);
              player.update();
            }
            else{
              player.loseMaxHp();
              player.update();
            }
            "step 1"
            for(var i=0;i<game.players.length;i++){
              if(game.players[i].storage.hj_jl_suohun_mark){
                player.line(game.players[i],'fire');
                game.delay(1.5);
                game.players[i].damage(game.players[i].storage.hj_jl_suohun_mark);
                game.players[i].storage.hj_jl_suohun_mark=0;
                game.players[i].unmarkSkill('hj_jl_suohun_mark');
              }
            }
          },
          ai:{
            threaten:0.9,
            effect:{
              target:function(card,player,target){
                if(target.maxHp==1) return;
                var num=0;
                for(var i=0;i<game.players.length;i++){
                  if(game.players[i].storage.hj_jl_suohun_mark&&ai.get.attitude(target,game.players[i])<=-2) num+=game.players[i].storage.hj_jl_suohun_mark;
                }
                if(get.tag(card,'damage')){
                  if(target.hp==1) return [0,2*num];
                  return [1,0.5];
                }
              }
            }
          }
        },
        "hj_jl_wuhun":{ //武魂
          audio:"ext:魂将:2",
          trigger:{
            player:"die",
          },
          forced:true,
          skillAnimation:true,
          animationColor:"fire",
          forceDie:true,
          content:function (){
            'step 0'
            player.chooseTarget(get.prompt2('hj_jl_wuhun'),true,function(card,player,target){
              return player!=target;
            }).set('forceDie',true).set('ai',function(target){
              var num=get.attitude(_status.event.player,target);
              if(num<0){
                return 1;
              }
              return -1;
            });
            'step 1'
            if(result.bool){
              var target=result.targets[0];
              event.target=target;
              player.logSkill('hj_jl_wuhun_log',event.target);
            }else event.finish();
            'step 2'
            event.target.judge(function(card){
              if(get.suit(card)=='heart'&&get.number(card)>1&&get.number(card)<10) return 0;
              return -6;
            })
            'step 3'
            if(result.bool==false){
              event.target.die();
            }else{
              event.target.loseMaxHp();
              game.log(event.target,'失去了所有技能');
              event.target.clearSkills();
            }
          },
          subSkill:{
            log:{
              sub:true,
            },
          },
          ai:{
            expose:0.5,
          },
        },

        "hj_jl_paoxiao":{ //咆哮
audio:"ext:魂将:2",
           srlose:true,
          trigger:{
            source:"damageAfter",
          },
          filter:function(event,player){
            return event.card&&event.card.name=='sha';
          },
          check:function(event,player){
            return ai.get.attitude(player,event.player)<=0&&event.notLink();
          },
          priority:5,
          content:function(){
            'step 0'
            player.draw();
            player.chooseToUse({name:'sha'},function(card,target,player){
              return player.canUse({name:'sha'},target);
            });
            'step 1'
            if(!result.bool){
              trigger.player.discardPlayerCard(player,'he');
            }
          },
        },
        "hj_jl_shayi":{ //杀意
audio:"ext:魂将:2",
           trigger:{
            player:"phaseUseBegin",
          },
          filter:function(event,player){
            return player.num('h')>0;
          },
          forced:true,
          content:function(){
            'step 0'
            player.showHandcards();
            'step 1'
            if(!player.num('h','sha')){
              player.addTempSkill('hj_jl_shayi_success','phaseAfter');
            }
            else{
              player.draw();
            }
          },
          subSkill:{
            success:{
              audio:2,
              enable:["chooseToRespond","chooseToUse"],
              filterCard:function(card){
                return get.color(card)=='black';
              },
              position:"he",
              viewAs:{
                name:"sha",
              },
              viewAsFilter:function(player){
                if(!player.num('he',{color:'black'})) return false;
              },
              prompt:"将一张黑色牌当杀使用或打出",
              check:function(card){return 4-ai.get.value(card)},
              ai:{
                skillTagFilter:function(player){
                  if(!player.num('he',{color:'black'})) return false;
                },
                respondSha:true,
                canLink:function(player,target,card){
                  if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
                  if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                  },true)) {
                    return false;
                  }
                  if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) {
                    return false;
                  }
                  return true;
                },
                basic:{
                  useful:[5,1],
                  value:[5,1],
                },
                order:function(item,player){
                  if(player.hasSkillTag('presha',true,null,true)) return 10;
                  if(lib.linked.contains(get.nature(item))){
                    if(game.hasPlayer(function(current){
                      return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                    })&&game.countPlayer(function(current){
                      return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                    })>1) 
                    {
                      return 3.1;
                    }
                    return 3;
                  }
                  return 3.05;
                },
                result:{
                  target:function(player,target,card,isLink){
                    var eff=function(){
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
                    }();
                    if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                      target:target,
                      card:card,
                    },true)) {
                      return eff/1.2;
                    }
                    return eff;
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
              mod:{
                cardUsable:function(card,player,num){
                  if(card.name=='sha') return Infinity;
                },
                targetInRange:function(card){
                  if(card.name=='sha') return true;
                },
              },
              sub:true,
            },
          },
        },
        "hj_jl_zhenhun":{ //震魂
audio:"ext:魂将:2",
           enable:"phaseUse",
          usable:1,
          filterTarget:function(card,player,target){
            return player!=target;
          },
          selectTarget:-1,
          content:function(){
            if(!target.hasSkill('hj_jl_zhenhun_enableSkill')){
              var list=[];
              for(var i=0;i<target.skills.length;i++){
                if(!get.is.locked(target.skills[i])){
                  list.push(target.skills[i]);
                }
              }
              if(list.length>0){
                target.disableSkill('hj_jl_zhenhun',list);
                target.addSkill('hj_jl_zhenhun_enableSkill');
              }
            }
          },
          ai:{
            order:10,
            result:{
              player:1,
              target:-1,
            },
            threaten:1.3,
          },
          subSkill:{
            enableSkill:{
              trigger:{
                global:"phaseAfter",
              },
              forced:true,
              popup:false,
              content:function(){
                player.enableSkill('hj_jl_zhenhun');
                player.removeSkill('hj_jl_zhenhun_enableSkill');
              },
              mark:true,
              intro:{
                content:function(st,player){
                  var storage=player.disabledSkills.hj_jl_zhenhun;
                  if(storage&&storage.length){
                    var str='失效技能：';
                    for(var i=0;i<storage.length;i++){
                      if(lib.translate[storage[i]+'_info']){
                        str+=get.translation(storage[i])+'、';
                      }
                    }
                    return str.slice(0,str.length-1);
                  }
                },
              },
              sub:true,
            },
          },
        },
        
        "hj_jl_kuangfeng":{ //狂风
audio:"ext:魂将:2",
           unique:true,
          group:["hj_jl_kuangfeng3"],
          trigger:{
            player:"phaseUseBegin",
          },
          direct:true,
          filter:function (event,player){
            return game.hasPlayer(function(current){
              return current!=player&&!current.hasSkill('hj_jl_kuangfeng2');
            });
          },
          content:function (){
            'step 0'
            player.chooseTarget('选择角色获得狂风标记').set('ai',function(target){
              return 0-get.attitude(player,target)*2-target.hp;
            });
            'step 1'
            if(result.bool){
              var target=result.targets[0];
              player.logSkill('hj_jl_kuangfeng',target);
              if(!target.hasSkill('hj_jl_kuangfeng2')){
                player.discardPlayerCard(target,true,'he');
                target.addSkill('hj_jl_kuangfeng2');
              }
            }
          },
        },
        "hj_jl_kuangfeng2":{ //狂风2
          group:["hj_jl_kf_huo","hj_jl_kf_lei"],
          mark:true,
          marktext:"风",
          intro:{
            content:"已获得“风”标记",
          },
        },
        "hj_jl_kuangfeng3":{ //狂风3
          trigger:{
            global:"damageAfter",
          },
          forced:true,
          filter:function (event,player){
            return event.player!=player&&event.player.hasSkill('hj_jl_kuangfeng2');
          },
          content:function (){
            player.draw();
          },
        },
        "hj_jl_kuangfeng4":{ //狂风4
          trigger:{
            player:"damageBegin",
          },
          forced:true,
          filter:function (event,player){
            return event.nature=='fire';
          },
          content:function (){
            trigger.num++;
          },
        },
        "hj_jl_kuangfeng5":{ //狂风5
          trigger:{
            player:"damageAfter",
          },
          forced:true,
          filter:function (event,player){
            return event.nature=='thunder';
          },
          content:function (){
            player.randomDiscard(2,true);
          },
        },
        "hj_jl_kf_huo":{ //狂风-火
          trigger:{
            player:"damageBegin",
          },
          forced:true,
          filter:function (event,player){
            return event.nature=='fire';
          },
          content:function (){
            trigger.num++;
          },
        },
        "hj_jl_kf_lei":{ //狂风-雷
          trigger:{
            player:"damageAfter",
          },
          forced:true,
          filter:function (event,player){
            return event.nature=='thunder';
          },
          content:function (){
            player.randomDiscard(2,true);
          },
        },
        "hj_jl_qixing":{ //七星
audio:"ext:魂将:2",
          unique:true,
          trigger:{
            global:"gameDrawAfter",
            player:"phaseBegin",
          },
          forced:true,
          check:function(event,player){
            return true;//player.hp<=1;
          },
          marktext:"星",
          filter:function(event,player){
            return !player.storage.hj_jl_qixing;
          },
          content:function(){
            "step 0"
            player.gain(get.cards(7))._triggered=null;
            "step 1"
            if(player==game.me){
              game.addVideo('delay',null);
            }
            player.chooseCard('选择七张牌作为星',7,true).ai=function(card){
              return get.value(card);
            };
            "step 2"
            player.lose(result.cards,ui.special)._triggered=null;
            player.storage.hj_jl_qixing=result.cards;
            player.syncStorage('hj_jl_qixing');
          },
          mark:true,
          intro:{
            mark:function(dialog,content,player){
              if(content&&content.length){
                if(player==game.me||player.isUnderControl()){
                  dialog.add(content);
                }
                else{
                  return '共有'+get.cnNumber(content.length)+'张星';
                }
              }
            },
            content:function(content,player){
              if(content&&content.length){
                if(player==game.me||player.isUnderControl()){
                  return get.translation(content);
                }
                return '共有'+get.cnNumber(content.length)+'张星';
              }
            },
          },
          group:["hj_jl_qixing2"],
        },
        "hj_jl_qixing2":{ //七星2
          trigger:{
            player:"phaseDrawAfter",
          },
          direct:true,
          filter:function (event,player){
            return player.storage.hj_jl_qixing&&player.storage.hj_jl_qixing.length;
          },
          content:function (){
            "step 0"
            player.chooseCard(get.prompt('hj_jl_qixing'),[1,player.countCards('h')]).ai=function(card){
              return 1;
            };
            "step 1"
            if(result.bool){
              player.logSkill('hj_jl_qixing');
              player.lose(result.cards,ui.special)._triggered=null;
              player.storage.hj_jl_qixing=player.storage.hj_jl_qixing.concat(result.cards);
              player.syncStorage('hj_jl_qixing');
              event.num=result.cards.length;
            }
            else{
              event.finish();
            }
            "step 2"
            player.chooseCardButton(player.storage.hj_jl_qixing,'选择'+event.num+'张牌作为手牌',event.num,true).ai=function(button){
              if(player.skipList.contains('phaseUse')&&button.link!='du'){
                return -get.value(button.link);
              }
              return get.value(button.link);
            }
            if(player==game.me&&_status.auto){
              game.delay(0.5);
            }
            "step 3"
            player.gain(result.links)._triggered=null;
            for(var i=0;i<result.links.length;i++){
              player.storage.hj_jl_qixing.remove(result.links[i]);
            }
            player.syncStorage('hj_jl_qixing');
            if(player==game.me&&_status.auto){
              game.delay(0.5);
            }
          },
        },
        "hj_jl_dawu":{ //大雾
audio:"ext:魂将:2",
           unique:true,
          trigger:{
            player:"phaseEnd",
          },
          priority:1,
          direct:true,
          filter:function(event,player){
            return player.storage.hj_jl_qixing&&player.storage.hj_jl_qixing.length;
          },
          content:function(){
            "step 0"
            player.chooseTarget('选择角色获得大雾标记',
              [1,Math.min(game.players.length,player.storage.hj_jl_qixing.length)]).ai=function(target){
              if(target.isMin()) return 0;
              var att=get.attitude(player,target);
              if(att>=4){
                if(target.hp==1&&target.maxHp>2||target.num('he')<=2) return att;
                if(target.hp==2&&target.maxHp>3&&target.num('he')<2) return att*0.7;
                return 0;
              }
              return -1;
            }
            "step 1"
            if(result.bool){
              var length=result.targets.length;
              for(var i=0;i<length;i++){
                result.targets[i].addSkill('hj_jl_dawu2');
                result.targets[i].popup('hj_jl_dawu');
              }
              player.logSkill('hj_jl_dawu',result.targets,'thunder');
              player.chooseCardButton('弃置'+get.cnNumber(length)+'枚星',length,player.storage.hj_jl_qixing,true);
            }
            else{
              event.finish();
            }
            "step 2"
            for(var i=0;i<result.links.length;i++){
              player.storage.hj_jl_qixing.remove(result.links[i]);
            }
            if(player.storage.hj_jl_qixing.length==0){
              player.unmarkSkill('hj_jl_qixing');
            }
            player.syncStorage('hj_jl_qixing');
            player.discard(result.links);
          },
          group:["hj_jl_dawu_remove"],
          subSkill:{
            remove:{
              trigger:{
                player:["phaseBegin","dieBegin"],
              },
              forced:true,
              popup:false,
              silent:true,
              content:function(){
                for(var i=0;i<game.players.length;i++){
                  if(game.players[i].hasSkill('hj_jl_dawu2')){
                    game.players[i].removeSkill('hj_jl_dawu2');
                    game.players[i].popup('hj_jl_dawu');
                  }
                  if(game.players[i].hasSkill('hj_jl_kuangfeng2')){
                    game.players[i].removeSkill('hj_jl_kuangfeng2');
                    game.players[i].popup('hj_jl_kuangfeng2');
                  }
                }
              },
              sub:true,
            },
          },
        },
        "hj_jl_dawu2":{ //大雾2
          trigger:{
            player:"damageBefore",
          },
          filter:function (event){
            if(event.nature!='thunder') return true;
            return false;
          },
          marktext:"雾",
          mark:true,
          forced:true,
          content:function (){
            trigger.untrigger();
            trigger.finish();
          },
          ai:{
            nofire:true,
            nodamage:true,
            effect:{
              target:function (card,player,target,current){
                if(get.tag(card,'damage')&&!get.tag(card,'thunderDamage')) return [0,0];
              },
            },
          },
          intro:{
            content:"已获得大雾标记",
          },
        },
        "hj_jl_weiwo":{ //帷幄
         audio:"ext:魂将:2",
           srlose:true,
          trigger:{
            player:"damageBegin",
          },
          filter:function(event,player){
            if(event.nature&&player.num('h')) return true;
            if(!event.nature&&!player.num('h')) return true;
            return false;
          },
          mark:true,
          forced:true,
          content:function(){
            trigger.untrigger();
            trigger.finish();
          },
          ai:{
            nofire:function(player){
              return player.num('h')>0;
            },
            nothunder:function(player){
              return player.num('h')>0;
            },
            effect:{
              target:function(card,player,target,current){
                if(get.tag(card,'natureDamage')&&target.num('h')>0) return 0;
                if(card.name=='tiesuo'&&target.num('h')>0)    return [0,0];
                if(!get.tag(card,'natureDamage')&&!target.num('h')) return [0,0];
              },
            },
          },
          intro:{
            content:function(storage,player){
              var str='';
              if(player.num('h')){
                str+='防止属性伤害';
              }
              else{
                str+='防止非属性伤害';
              }
              return str;
            },
          },
        },
        
        "hj_jl_juejing":{ //绝境
audio:"ext:魂将:2",
           trigger:{
            global:"phaseEnd",
          },
          filter:function(event,player){
            return player.hp>=1;
          },
          forced:true,
          content:function(){
            if(player.hp==1){
              player.draw();
            }
            else{
              player.loseHp();
              player.draw(2);
            }
          },
        },
        "hj_jl_longying":{ //龙影
audio:"ext:魂将:2",
          mod:{
            maxHandcard:function(player,num){
              return 2+num;
            },
          },
          trigger:{
            player:["dying","dyingAfter"],
          },
          forced:true,
          content:function(){
            player.draw();
          },
        },
        "hj_jl_longhun":{ //龙魂
audio: "ext:魂将:4",
           enable:["chooseToUse","chooseToRespond"],
          prompt:"将♦牌当做杀，♥牌当做桃，♣牌当做闪，♠牌当做无懈可击使用或打出",
          viewAs:function(cards,player){
            var name=false;
            var nature=null;
            //根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
            switch(get.suit(cards[0],player)){
              case 'club':name='shan';break;
              case 'diamond':name='sha';nature='fire';break;
              case 'spade':name='wuxie';break;
              case 'heart':name='tao';break;
            }
            //返回判断结果
            if(name) return {name:name,nature:nature};
            return null;
          },
          check:function(card){
            if(ui.selected.cards.length) return 0;
            var player=_status.event.player;
            if(_status.event.type=='phase'){
              var max=0;
              var name2;
              var list=['sha','tao'];
              var map={sha:'diamond',tao:'heart'}
              for(var i=0;i<list.length;i++){
                var name=list[i];
                if(player.countCards('he',function(card){
                  return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
                })>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
                 var temp=get.order({name:name,nature:name=='sha'?'fire':null});
                 if(temp>max){
                   max=temp;
                   name2=map[name];
                 }
               }
             }
             if(name2==get.suit(card,player)) return (name2=='diamond'?(5-get.value(card)):20-get.value(card));
             return 0;
           }
           return 1;
         },
         selectCard:[1,2],
         complexCard:true,
         position:"he",
         filterCard:function(card,player,event){
            //如果已经选了一张牌 那么第二张牌和第一张花色相同即可
            if(ui.selected.cards.length) return get.suit(card,player)==get.suit(ui.selected.cards[0],player);
            event=event||_status.event;
            //获取当前时机的卡牌选择限制
            var filter=event._backup.filterCard;
            //获取卡牌花色
            var name=get.suit(card,player);
            //如果这张牌是梅花并且当前时机能够使用/打出闪 那么这张牌可以选择
            if(name=='club'&&filter({name:'shan',cards:[card]},player,event)) return true;
            //如果这张牌是方片并且当前时机能够使用/打出火杀 那么这张牌可以选择
            if(name=='diamond'&&filter({name:'sha',cards:[card],nature:'fire'},player,event)) return true;
            //如果这张牌是黑桃并且当前时机能够使用/打出无懈 那么这张牌可以选择
            if(name=='spade'&&filter({name:'wuxie',cards:[card]},player,event)) return true;
            //如果这张牌是红桃并且当前时机能够使用/打出桃 那么这张牌可以选择
            if(name=='heart'&&filter({name:'tao',cards:[card]},player,event)) return true;
            //上述条件都不满足 那么就不能选择这张牌
            return false;
          },
          filter:function(event,player){
            //获取当前时机的卡牌选择限制
            var filter=event.filterCard;
            //如果当前时机能够使用/打出火杀并且角色有方片 那么可以发动技能
            if(filter({name:'sha',nature:'fire'},player,event)&&player.countCards('he',{suit:'diamond'})) return true;
            //如果当前时机能够使用/打出闪并且角色有梅花 那么可以发动技能
            if(filter({name:'shan'},player,event)&&player.countCards('he',{suit:'club'})) return true;
            //如果当前时机能够使用/打出桃并且角色有红桃 那么可以发动技能
            if(filter({name:'tao'},player,event)&&player.countCards('he',{suit:'heart'})) return true;
            //如果当前时机能够使用/打出无懈可击并且角色有黑桃 那么可以发动技能
            if(filter({name:'wuxie'},player,event)&&player.countCards('he',{suit:'spade'})) return true;
            return false;
          },
          ai:{
            respondSha:true,
            respondShan:true,
            skillTagFilter:function(player,tag){
              var name;
              switch(tag){
                case 'respondSha':name='diamond';break;
                case 'respondShan':name='club';break;
                case 'save':name='heart';break;
              }
              if(!player.countCards('he',{suit:name})) return false;
            },
            order:function(item,player){
              if(player&&_status.event.type=='phase'){
                var max=0;
                var list=['sha','tao'];
                var map={sha:'diamond',tao:'heart'}
                for(var i=0;i<list.length;i++){
                  var name=list[i];
                  if(player.countCards('he',function(card){
                    return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
                  })>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
                    var temp=get.order({name:name,nature:name=='sha'?'fire':null});
                    if(temp>max) max=temp;
                  }
                }
                max/=1.1;
                return max;
              }
              return 2;
            },
          },
          hiddenCard:function(player,name){
            if(name=='wuxie'&&_status.connectMode&&player.countCards('h')>0) return true;
            if(name=='wuxie') return player.countCards('he',{suit:'spade'})>0;
            if(name=='tao') return player.countCards('he',{suit:'heart'})>0;
          },
          group:["hj_jl_longhun_num","hj_jl_longhun_discard"],
        },
        "hj_jl_longhun1":{ //龙魂1
audio: "ext:魂将:true",
          enable:["chooseToUse","chooseToRespond"],
          prompt:function (){
            return '将至多两张红桃牌当作桃使用';
          },
          position:"he",
          check:function (card,event){
            if(ui.selected.cards.length) return 0;
            return 10-get.value(card);
          },
          selectCard:[1,2],
          viewAs:{
            name:"tao",
          },
          filter:function (event,player){
            return player.countCards('he',{suit:'heart'})>0;
          },
          filterCard:function (card){
            return get.suit(card)=='heart';
          },
          ai:{
            basic:{
              order:function (card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
              },
              useful:[8,6.5,5,4],
              value:[8,6.5,5,4],
            },
            result:{
              target:2,
              "target_use":function (player,target){
                // if(player==target&&player.hp<=0) return 2;
                if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                  keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                  keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                  if(target.hp>2||nd==0) return 0;
                  if(target.hp==2){
                    if(game.hasPlayer(function(current){
                      if(target!=current&&get.attitude(target,current)>=3){
                        if(current.hp<=1) return true;
                        if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                      }
                    })){
                      return 0;
                    }
                  }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                  if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                    var num=game.countPlayer(function(current){
                      if(current.identity=='fan'){
                        return current.countCards('h','tao');
                      }
                    });
                    if(num>1&&player==target) return 2;
                    return 0;
                  }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                  if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                    return 0;
                  }
                }
                if(mode=='stone'&&target.isMin()&&player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&tri.source!=target.getEnemy()){
                  return 0;
                }
                return 2;
              },
            },
            tag:{
              recover:1,
              save:1,
            },
          },
        },
        "hj_jl_longhun2":{ //龙魂2
          audio: "ext:魂将:true",
          enable:["chooseToUse","chooseToRespond"],
          prompt:function (){
            return '将至多两张方片牌当作火杀使用或打出';
          },
          position:"he",
          check:function (card,event){
            if(ui.selected.cards.length) return 0;
            return 10-get.value(card);
          },
          selectCard:[1,2],
          viewAs:{
            name:"sha",
            nature:"fire",
          },
          filter:function (event,player){
            return player.countCards('he',{suit:'diamond'})>0;
          },
          filterCard:function (card){
            return get.suit(card)=='diamond';
          },
          ai:{
            canLink:function (player,target,card){
              if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
              if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
              },true)) {
                return false;
              }
              if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
              return true;
            },
            basic:{
              useful:[5,1],
              value:[5,1],
            },
            order:function (item,player){
              if(player.hasSkillTag('presha',true,null,true)) return 10;
              if(lib.linked.contains(get.nature(item))){
                if(game.hasPlayer(function(current){
                  return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                  return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1) {
                  return 3.1;
                }
                return 3;
              }
              return 3.05;
            },
            result:{
              target:function (player,target,card,isLink){
                var eff=function(){
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
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                  target:target,
                  card:card,
                },true)) {
                  return eff/1.2;
                }
                return eff;
              },
            },
            tag:{
              respond:1,
              respondShan:1,
              damage:function (card){
                if(card.nature=='poison') return;
                return 1;
              },
              natureDamage:function (card){
                if(card.nature) return 1;
              },
              fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
              },
              thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
              },
              poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
              },
            },
          },
        },
        "hj_jl_longhun3":{ //龙魂3
          audio: "ext:魂将:true",
          enable:["chooseToUse","chooseToRespond"],
          prompt:function (){
            return '将至多两张黑桃牌当作无懈可击使用';
          },
          position:"he",
          check:function (card,event){
            if(ui.selected.cards.length) return 0;
            return 7-get.value(card);
          },
          selectCard:[1,2],
          viewAs:{
            name:"wuxie",
          },
          viewAsFilter:function (player){
            return player.countCards('he',{suit:'spade'})>0;
          },
          filterCard:function (card){
            return get.suit(card)=='spade';
          },
          ai:{
            basic:{
              useful:[6,4],
              value:[6,4],
            },
            result:{
              player:1,
            },
            expose:0.2,
          },
        },
        "hj_jl_longhun4":{ //龙魂4
         audio: "ext:魂将:true",
          enable:["chooseToUse","chooseToRespond"],
          prompt:function (){
            return '将至多两张梅花牌当作闪使用或打出';
          },
          position:"he",
          check:function (card,event){
            if(ui.selected.cards.length) return 0;
            return 10-get.value(card);
          },
          selectCard:[1,2],
          viewAs:{
            name:"shan",
          },
          filter:function (event,player){
            return player.countCards('he',{suit:'club'})>0;
          },
          filterCard:function (card){
            return get.suit(card)=='club';
          },
          ai:{
            order:3,
            basic:{
              useful:[7,2],
              value:[7,2],
            },
            result:{
              player:1,
            },
          },
        },
        "hj_jl_longhun":{ //龙魂
audio: "ext:魂将:4",
           group:["hj_jl_longhun1","hj_jl_longhun2","hj_jl_longhun3","hj_jl_longhun4","hj_jl_longhun_num","hj_jl_longhun_discard"],
          ai:{
            skillTagFilter:function (player,tag){
              switch(tag){
                case 'respondSha':{
                  if(player.countCards('he',{suit:'diamond'})==0) return false;
                  break;
                }
                case 'respondShan':{
                  if(player.countCards('he',{suit:'club'})==0) return false;
                  break;
                }
                case 'save':{
                  if(player.countCards('he',{suit:'heart'})==0) return false;
                  break;
                }
              }
            },
            respondSha:true,
            respondShan:true,
            threaten:1.8,
          },
          subSkill:{
            num:{
              trigger:{
                player:"useCard",
              },
              forced:true,
              popup:false,
              filter:function (event){
                var evt=event;
                return (evt.skill=='hj_jl_longhun1'||evt.skill=='hj_jl_longhun2'||(['sha','tao'].contains(evt.card.name)&&evt.skill=='relonghun'))&&evt.cards&&evt.cards.length==2;
              },
              content:function (){
                trigger.baseDamage++;
              },
              sub:true,
            },
            discard:{
              trigger:{
                player:["useCardAfter","respondAfter"],
              },
              forced:true,
              popup:false,
              logTarget:function (){
                return _status.currentPhase;
              },
              autodelay:function (event){
                return event.name=='respond'?0.5:false;
              },
              filter:function (evt,player){
                return (evt.skill=='hj_jl_longhun3'||evt.skill=='hj_jl_longhun4'||(['shan','wuxie'].contains(evt.card.name)&&evt.skill=='relonghun'))&&
                evt.cards&&evt.cards.length==2&&_status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.countDiscardableCards(player,'he');
              },
              content:function (){
                player.line(_status.currentPhase,'green');
                player.discardPlayerCard(_status.currentPhase,'he',true);
              },
              sub:true,
            },
          },
        },

        "hj_jl_hemou":{ //合谋
audio:"ext:魂将:2",
           srlose:true,
          trigger:{
            global:"phaseBegin",
          },
          filter:function(event,player){
            return event.player!=player&&player.num('h')>0;
          },
          direct:true,
          content:function(){
            'step 0'
            player.chooseCard('是否对'+get.translation(trigger.player)+'发动【合谋】?').ai=function(card){
              if(ai.get.attitude(player,trigger.player)>0&&!trigger.player.num('j','lebu')&&trigger.player.num('h')>2) return 4-ai.get.value(card);
              return false;
            }
            'step 1'
            if(result.bool){
              player.logSkill('hj_jl_hemou',trigger.player);
              trigger.player.gain(result.cards);
              player.$give(1,trigger.player);
              switch(get.suit(result.cards[0])){
                case 'heart':trigger.player.addTempSkill('hj_jl_hemou_heart','phaseAfter');break;
                case 'diamond':trigger.player.addTempSkill('hj_jl_hemou_diamond','phaseAfter');break;
                case 'club':trigger.player.addTempSkill('hj_jl_hemou_club','phaseAfter');break;
                case 'spade':trigger.player.addTempSkill('hj_jl_hemou_spade','phaseAfter');break;
              }
            }
            else{
              event.finish();
            }
          },
          subSkill:{
            heart:{
              enable:"phaseUse",
              usable:1,
              marktext:"♥︎",
              mark:true,
              filter:function(event,player){
                return player.num('h',{suit:'heart'});
              },
              viewAs:{
                name:"shunshou",
              },
              viewAsFilter:function(player){
                if(!player.num('h',{suit:'heart'})) return false;
              },
              prompt:"将一张♥︎牌当顺手牵羊使用",
              filterCard:function(card,player){
                return get.suit(card)=='heart';
              },
              check:function(card){
                return 6-ai.get.value(card);
              },
              ai:{
                order:7.5,
                threaten:1.5,
                wuxie:function(target,card,player,viewer){
                  if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                    return 0;
                  }
                },
                basic:{
                  order:7.5,
                  useful:4,
                  value:9,
                },
                result:{
                  target:function(player,target){
                    if(get.attitude(player,target)<=0) return (target.countCards('he',function(card){
                      return get.value(card,target)>0&&card!=target.getEquip('jinhe');
                    })>0)?-1.5:1.5;
                      var js=target.getCards('j');
                      if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        //if(jj.name=='shunshou') return 3;
                        if(js.length==1&&get.effect(target,jj,target,player)>=0){
                          return -1.5;
                        }
                        return 3;
                      }
                      return -1.5;
                    },
                    player:function(player,target){
                      if(get.attitude(player,target)<0&&!target.countCards('he',function(card){
                        return get.value(card,target)>0&&card!=target.getEquip('jinhe');
                      })){
                        return 0;
                      }
                      if(get.attitude(player,target)>1){
                        var js=target.getCards('j');
                        if(js.length){
                          var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                          //if(jj.name=='shunshou') return 1;
                          if(js.length==1&&get.effect(target,jj,target,player)>=0){
                            return 0;
                          }
                          return 1;
                        }
                        return 0;
                      }
                      return 1;
                    },
                  },
                  tag:{
                    loseCard:1,
                    gain:1,
                  },
                },
                intro:{
                  name:"合谋·顺手",
                  content:"回合限一次,可将一张♥︎牌当顺手牵羊使用.",
                },
                sub:true,
              },
              diamond:{
                enable:"chooseToUse",
                usable:1,
                marktext:"♦︎",
                mark:true,
                viewAs:{
                  name:"huogong",
                  nature:"fire",
                },
                filterCard:function(card,player){
                  return get.suit(card)=='diamond';
                },
                viewAsFilter:function(player){
                  if(!player.num('h',{suit:'diamond'})) return false;
                },
                prompt:"将一张♦︎牌当火攻使用",
                check:function(card){
                  var player=_status.currentPhase;
                  if(player.num('h')>player.hp){
                    return 6-ai.get.value(card);
                  }
                  return 4-ai.get.value(card)
                },
                ai:{
                  order:4,
                  threaten:1.5,
                  basic:{
                    order:4,
                    value:[3,1],
                    useful:1,
                  },
                  wuxie:function(target,card,player,current,state){
                    if(get.attitude(current,player)>=0&&state>0) return false;
                  },
                  result:{
                    player:function(player){
                      var nh=player.countCards('h');
                      if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
                        if(typeof _status.event.filterCard=='function'&&
                          _status.event.filterCard({name:'huogong'},player,_status.event)){
                          return -10;
                      }
                      if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -10;
                        if(viewAs&&viewAs.name=='huogong') return -10;
                      }
                    }
                    return 0;
                  },
                  target:function(player,target){
                    if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
                    if(player.countCards('h')<=1) return 0;
                    if(target==player){
                      if(typeof _status.event.filterCard=='function'&&_status.event.filterCard({name:'huogong'},player,_status.event)){
                        return -1.5;
                      }
                      if(_status.event.skill){
                        var viewAs=get.info(_status.event.skill).viewAs;
                        if(viewAs=='huogong') return -1.5;
                        if(viewAs&&viewAs.name=='huogong') return -1.5;
                      }
                      return 0;
                    }
                    return -1.5;
                  },
                },
                tag:{
                  damage:1,
                  fireDamage:1,
                  natureDamage:1,
                  norepeat:1,
                },
              },
              intro:{
                name:"合谋·火攻",
                content:"回合限一次,可将一张♦︎牌当火攻使用.",
              },
              sub:true,
            },
            club:{
              enable:"phaseUse",
              usable:1,
              marktext:"♣︎",
              mark:true,
              viewAs:{
                name:"jiedao",
              },
              filterCard:function(card,player){
                return get.suit(card)=='club';
              },
              viewAsFilter:function(player){
                if(!player.num('h',{suit:'club'})) return false;
              },
              prompt:"将一张♣︎牌当借刀杀人使用",
              check:function(card){
                return 6-ai.get.value(card);
              },
              ai:{
                order:8,
                wuxie:function(target,card,player,viewer){
                  if(player==game.me&&get.attitude(viewer,player)>0){
                    return 0;
                  }
                },
                basic:{
                  order:8,
                  value:2,
                  useful:1,
                },
                result:{
                  target:-1.5,
                  player:function(player){
                    if(player.getCards('he',{subtype:'equip1'}).length) return 0;
                    return 1.5;
                  },
                },
                tag:{
                  gain:1,
                  use:1,
                  useSha:1,
                  loseCard:1,
                },
              },
              intro:{
                name:"合谋·借刀",
                content:"回合限一次,可将一张♣︎牌当借刀杀人使用.",
              },
              sub:true,
            },
            spade:{
              enable:"phaseUse",
              usable:1,
              marktext:"♠︎",
              mark:true,
              viewAs:{
                name:"juedou",
              },
              filterCard:function(card,player){
                return get.suit(card)=='spade';
              },
              check:function(card){
                return 6-ai.get.value(card);
              },
              ai:{
                order:5,
                wuxie:function(target,card,player,viewer){
                  if(player==game.me&&get.attitude(viewer,player)>0){
                    return 0;
                  }
                },
                basic:{
                  order:5,
                  useful:1,
                  value:5.5,
                },
                result:{
                  target:-1.5,
                  player:function(player,target,card){
                    if(player.hasSkillTag('directHit_ai',true,{
                      target:target,
                      card:card,
                    },true)){
                      return 0;
                    }
                    if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                      return 0;
                    }
                    var hs1=target.getCards('h','sha');
                    var hs2=player.getCards('h','sha');
                    if(hs1.length>hs2.length+1){
                      return -2;
                    }
                    var hsx=target.getCards('h');
                    if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                      return -2;
                    }
                    if(hsx.length>3&&hs2.length==0){
                      return -2;
                    }
                    if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                      return -2;
                    }
                    return -0.5;
                  },
                },
                tag:{
                  respond:2,
                  respondSha:2,
                  damage:1,
                },
              },
              intro:{
                name:"合谋·决斗",
                content:"回合限一次,可将一张♠︎牌当决斗使用.",
              },
              sub:true,
            },
          },
        },
        "hj_jl_zhiming":{ //知命
audio:"ext:魂将:2",
           trigger:{
            global:"phaseBegin",
          },
          filter:function(event,player){
            return event.player!=player&&event.player.num('h')&&player.num('h');
          },
          direct:true,
          content:function(){
            "step 0"
            player.chooseToDiscard('h','知命:你可以弃置一张手牌，然后弃置其一张手牌，若两张牌颜色相同，你令其跳过此回合的摸牌阶段或出牌阶段').ai=function(card){
              if(ai.get.attitude(player,trigger.player)<-3)
                return 10-ai.get.value(card);
              return 0;
            }
            'step 1'
            if(result.bool){
              player.logSkill('hj_jl_zhiming',trigger.player);
              event.color=get.color(result.cards[0]);
              event.card=trigger.player.get('h').randomGet();
              trigger.player.discard(event.card);    
            }
            else{
              event.finish();
            }
            'step 2'
            if(event.color==get.color(event.card)){
              player.chooseControl('跳过摸牌','跳过出牌').ai=function(){
                if(trigger.player.num('h')>trigger.player.hp) return '跳过出牌';
                return '跳过摸牌';
              }
            }
            else{
              event.finish();
            }
            "step 3"
            if(result.control=='跳过摸牌'){
              trigger.player.skip('phaseDraw');
              game.log(trigger.player,'跳过了摸牌阶段');
            }
            if(result.control=='跳过出牌'){
              trigger.player.skip('phaseUse');
              game.log(trigger.player,'跳过了出牌阶段');
            }
          },
          ai:{
            expose:0.4,
          },
        },
        "hj_jl_suyin":{ //夙隐
audio:"ext:魂将:2",
           trigger:{
            player:"loseEnd",
          },
          direct:true,
          filter:function(event,player){
            if(player.num('h')) return false;
            for(var i=0;i<event.cards.length;i++){
              if(event.cards[i].original=='h') return _status.currentPhase!=player;
            }
            return false;
          },
          content:function(){
            "step 0"
            player.chooseTarget('【夙隐】：选择一名角色将其翻面',function(card,player,target){
              return player!=target;
            }).ai=function(target){
              if(target.isTurnedOver()&&ai.get.attitude(player,target)>0) return 10;
              if(!target.isTurnedOver()&&ai.get.attitude(player,target)<0) return target.num('h');
              return 0;
            }
            "step 1"
            if(result.bool){
              player.logSkill('hj_jl_suyin',result.targets);
              result.targets[0].turnOver();
            }
          },
          ai:{
            expose:0.3,
          },
        },
        "hj_jl_qicai":{ //奇才
audio:"ext:魂将:2",
           srlose:true,
          trigger:{
            player:"loseEnd",
          },
          frequent:true,
          filter:function(event,player){
            for(var i=0;i<event.cards.length;i++){
              if(event.cards[i].original=='h') return true;
            }
            return false;
          },
          content:function(){
            'step 0'
            player.judge(function(card){
              if(get.color(card)=='red') return 2;
              return -2;
            })
            'step 1'
            if(result.bool){
              player.draw();
            }
          },
          ai:{
            threaten:0.8,
            effect:{
              target:function(card){
                if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.3;
              },
            },
          },
        },

        "hj_jl_yingcai":{ //英才
audio:"ext:魂将:2",
           trigger:{
            player:"phaseDrawBegin",
          },
          check:function(){return 1;},
          content:function(){
            'step 0'
            trigger.untrigger();
            trigger.finish();
            event.suit=[];
            event.cards=[];
            'step 1'    
            event.cards2=get.cards();    
            if(!event.suit.contains(get.suit(event.cards2)))
              event.suit.push(get.suit(event.cards2));
            if(event.suit.length<=2){
              event.cards=event.cards.concat(event.cards2);
              event.redo();
            }
            else{
              event.cards1=event.cards;
              event.cards1=event.cards1.concat(event.cards2[0]);
              player.showCards(event.cards1);
              ui.discardPile.appendChild(event.cards2[0]);
            }
            'step 2'
            player.gain(event.cards);
            if(event.cards.length){
              player.$draw(event.cards);
            }
          },
        },
        "hj_jl_fangjian":{ //反间
audio:"ext:魂将:2",
           enable:"phaseUse",
          usable:1,
          filter:function(event,player){
            return player.num('h')>0;
          },
          filterTarget:function(card,player,target){
            return player!=target;
          },
          filterCard:true,
          check:function(card){
            return 8-ai.get.value(card);
          },
          discard:false,
          content:function(){
            'step 0'
            var cardx=ui.create.card();
            cardx.classList.add('infohidden');
            cardx.classList.add('infoflip');
            player.$throw(cardx);
            cards[0].fix();
            ui.cardPile.insertBefore(cards[0],ui.cardPile.firstChild);
            target.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
              switch(Math.floor(Math.random()*6)){
                case 0:return 'heart2';
                case 1:case 4:case 5:return 'diamond2';
                case 2:return 'club2';
                case 3:return 'spade2';
              }
            });
            'step 1'
            game.log(target,'选择了'+get.translation(result.control));
            event.choice=result.control;
            target.popup(event.choice);
            event.cards=get.cards();
            target.showCards(event.cards);
            target.gain(event.cards,'draw');
            'step 2'
            if(get.suit(event.cards)+'2'!=event.choice) target.damage();
          },
          ai:{
            order:1,
            result:{
              target:function(player,target){
                var eff=ai.get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.get('h');
                for(i=0;i<cards.length;i++){
                  value+=ai.get.value(cards[i]);
                }
                value/=player.num('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
              },
            },
          },
        },
        "hj_jl_qinyin":{ //琴音
audio:"ext:魂将:2",
           trigger:{
            player:"phaseDiscardBegin",
          },
          check:function(){},
          filter:function(event,player){
            return player.countCards('h')>0;
          },
          content:function(){
            'step 0'
            player.chooseControl('选项一','选项二',function(){
              return Math.random()<0.5?'选项一':'选项二';
            }).set('prompt','琴音<div class="text">1:摸两张牌，然后令所有角色合失去1点体力。</div><div class="text">2:弃一张牌，然后令所有角色各回复2点体力。</div>').set('ai',function(event,player){
              var friends=player.getFriends(target);
              var diren=player.getEnemies(target);
              var lose=1,recover=0;
              if(player.hp<player.maxHp/2) recover=10;
              for(var i=0;i<friends.length;i++){
                if(friends[i].hp<2){
                  if(friends[i].isZhu) recover++;
                  recover++;
                }
              }
              for(var i=0;i<diren.length;i++){
                if(diren[i].hp<2){
                  if(diren[i].isZhu) lose++;
                  lose++;
                }
              }
              if(recover<lose){
                return '选项一';
              }
              else{
                return '选项二';
              }
            });
            'step 1'
            if(result.control=='选项一'){
              player.draw(2);
              event.players=game.players.slice(0);
              for(var i=0;i<event.players.length;i++){
                event.players[i].loseHp();
                game.delay();
              }
            }
            else{
              player.chooseToDiscard(true);
              event.players=game.players.slice(0);
              for(var i=0;i<event.players.length;i++){
                event.players[i].recover(2);
                game.delay();
              }
            }
          },
        },
        "hj_jl_yeyan":{ //业炎
audio:"ext:魂将:3",
          unique:true,
          enable:"phaseUse",
          animationColor:"fire",
          skillAnimation:"legend",
          filter:function(event,player){
            return !player.storage.hj_jl_yeyan;
          },
          init:function(player){
            player.storage.hj_jl_yeyan=false;
          },
          filterTarget:function(card,player,target){
            return target!=player;
          },
          filterCard:function(card){
            var suit=get.suit(card);
            for(var i=0;i<ui.selected.cards.length;i++){
              if(get.suit(ui.selected.cards[i])==suit) return false;
            }
            return true;
          },
          mark:true,
          selectCard:[1,4],
          line:"fire",
          check:function(){
            return -1;
          },
          selectTarget:[1,2],
          content:function(){
            'step 0'
            var i=0;
            player.unmark('hj_jl_yeyan');
            player.storage.hj_jl_yeyan=true;
            if(cards.length>=3&&!i){
              player.loseHp(2);
              i++;
            }
            'step 1'
            for(var i=0;i<targets.length;i++){
              targets[i].damage('fire',cards.length);
            }
          },
          intro:{
            content:"limited",
          },
          ai:{
            order:1,
            result:{
              target:function(player,target){
                if(target.hasSkillTag('nofire')) return 0;
                if(lib.config.mode=='versus') return -1;
                for(var i=0;i<game.players.length;i++){
                  if(lib.config.mode=='identity'){
                    if(game.players[i].ai.shown<=0.2) return 0;
                  }
                  else if(lib.config.mode=='guozhan'){
                    if(game.players[i].identity=='unknown') return 0;
                  }
                }
                return ai.get.damageEffect(target,player);
              },
            },
          },
        },

        "hj_jl_shixue":{ //誓学
        audio:"ext:魂将:2",
            trigger:{
            player:"shaBegin",
          },
          frequent:true,
          content:function(){
            player.draw(2);
            player.addTempSkill('hj_jl_shixue2','shaAfter');
          },
        },
        "hj_jl_shixue2":{ //誓学2
          trigger:{player:'shaMiss'},
          forced:true,
          popup:false,
          content:function(){
            player.chooseToDiscard(true).ai=ai.get.disvalue;
          }
        },
        "hj_jl_guoshi":{ //国士
audio:"ext:魂将:2",
            trigger:{
            global:"phaseEnd",
          },
          filter:function(event,player){
            return event.player.storage.hj_jl_guoshi.length>0;
          },
          init:function(){
            for(var i=0;i<game.players.length;i++){
              game.players[i].storage.hj_jl_guoshi=[];
            }
          },
          direct:true,
          content:function(){
            'step 0'
            var att=ai.get.attitude(player,trigger.player);
            player.chooseCardButton(trigger.player.storage.hj_jl_guoshi,'是否对'+get.translation(trigger.player)+'发动【国士】？').ai=function(button){
              if(att>0) return 1;
              return 0;
            }
            'step 1'
            if(result.bool){
              player.logSkill('hj_jl_guoshi',trigger.player);
              trigger.player.gain(result.buttons[0].link);
              trigger.player.$gain(result.buttons[0].link);
            }
            'step 2'
            delete trigger.player.storage.hj_jl_guoshi;
          },
          group:["hj_jl_guoshi2"],
          global:["hj_jl_guoshi_check"],
          subSkill:{
            check:{
              trigger:{
                player:"phaseBefore",
              },
              forced:true,
              popup:false,
              content:function(){
                player.storage.hj_jl_guoshi=[];
                player.addTempSkill('hj_jl_guoshi_judge','phaseAfter');
                player.addTempSkill('hj_jl_guoshi_discard','phaseAfter');

              },
              sub:true,
            },
            judge:{
              audio:2,
              trigger:{
                global:"judgeAfter",
              },
              forced:true,
              popup:false,
              filter:function(event,player){
                if(_status.currentPhase!=player) return false;
                if(event.result.card.parentNode.id=='discardPile') 
                  return true;
                return false;
              },
              content:function(){
                if(trigger.result.card)
                  player.storage.hj_jl_guoshi=player.storage.hj_jl_guoshi.concat(trigger.result.card);
              },
              sub:true,
            },
            discard:{
              audio:2,
              trigger:{
                global:"discardAfter",
              },
              filter:function(event,player){
                if(_status.currentPhase!=player) return false;
                for(var i=0;i<event.cards.length;i++){
                  if(get.position(event.cards[i])=='d'){
                    return true;
                  }
                }
                return false;
              },
              forced:true,
              popup:false,
              content:function(){
                "step 0"
                for(var i=0;i<trigger.cards.length;i++){
                  if(get.position(trigger.cards[i])=='d'&&trigger.cards[i]){
                    player.storage.hj_jl_guoshi=player.storage.hj_jl_guoshi.concat(trigger.cards[i]);
                  }
                }
              },
              sub:true,
            },
          },
          ai:{
            expose:0.2,
          },
        },
        "hj_jl_guoshi2":{ //国士2
          audio: "ext:魂将:2",
          trigger: { global: 'phaseBegin' },
          prompt: '是否发动【国士】观看牌顶的牌？',
          frequent: true,
          content:function(){
            "step 0"
            if (player.isUnderControl()) {
              game.modeSwapPlayer(player);
            }
            var cards = get.cards(2);
            event.cards = cards;
            var switchToAuto = function(){
              _status.imchoosing = false;
              if (event.dialog) event.dialog.close();
              if (event.control) event.control.close();
              var top = [];
              var judges = event.player.node.judges.childNodes;
              var stopped = false;
              if (ai.get.attitude(player, event.player) > 0) {
                for (var i = 0; i < judges.length; i++) {
                  var judge = get.judge(judges[i]);
                  cards.sort(function (a, b) {
                    return judge(b) - judge(a);
                  });
                  if (judge(cards[0]) < 0) {
                    stopped = true; break;
                  }
                  else {
                    top.unshift(cards.shift());
                  }
                }
              }
              var bottom;
              if (!stopped) {
                cards.sort(function(a, b){return ai.get.value(b, player) - ai.get.value(a, player);});
                while (cards.length) {
                  if (ai.get.value(cards[0], player) <= 5) break;
                  top.unshift(cards.shift());
                }
              }
              bottom = cards;
              for (var i = 0; i < top.length; i++) {
                ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
              }
              for (i = 0; i < bottom.length; i++) {
                ui.cardPile.appendChild(bottom[i]);
              }
              player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
              game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
              game.delay(2);
            }
            var chooseButton = function (online, player, cards) {
              var event = _status.event;
              player = player || event.player;
              cards = cards || event.cards;
              event.top = [];
              event.bottom = [];
              event.status = true;
              event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）', cards);
              event.switchToAuto = function () {
                event._result = 'ai';
                event.dialog.close();
                event.control.close();
                _status.imchoosing = false;
              },
              event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
                var event = _status.event;
                if (link == 'ok') {
                  if (online) {
                    event._result = {
                      top: [],
                      bottom: []
                    }
                    for (var i = 0; i < event.top.length; i++) {
                      event._result.top.push(event.top[i].link);
                    }
                    for (var i = 0; i < event.bottom.length; i++) {
                      event._result.bottom.push(event.bottom[i].link);
                    }
                  }
                  else {
                    var i;
                    for (i = 0; i < event.top.length; i++) {
                      ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                    }
                    for (i = 0; i < event.bottom.length; i++) {
                      ui.cardPile.appendChild(event.bottom[i].link);
                    }
                    for (i = 0; i < event.dialog.buttons.length; i++) {
                      if (event.dialog.buttons[i].classList.contains('glow') == false &&
                        event.dialog.buttons[i].classList.contains('target') == false)
                        ui.cardPile.appendChild(event.dialog.buttons[i].link);
                    }
                    player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                    game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                  }
                  event.dialog.close();
                  event.control.close();
                  game.resume();
                  _status.imchoosing = false;
                }
                else if (link == 'pileTop') {
                  event.status = true;
                  event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                }
                else {
                  event.status = false;
                  event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                }
              });
              for (var i = 0; i < event.dialog.buttons.length; i++) {
                event.dialog.buttons[i].classList.add('selectable');
              }
              event.custom.replace.button = function (link) {
                var event = _status.event;
                if (link.classList.contains('target')) {
                  link.classList.remove('target');
                  event.top.remove(link);
                }
                else if (link.classList.contains('glow')) {
                  link.classList.remove('glow');
                  event.bottom.remove(link);
                }
                else if (event.status) {
                  link.classList.add('target');
                  event.top.unshift(link);
                }
                else {
                  link.classList.add('glow');
                  event.bottom.push(link);
                }
              }
              event.custom.replace.window = function () {
                for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                  _status.event.dialog.buttons[i].classList.remove('target');
                  _status.event.dialog.buttons[i].classList.remove('glow');
                  _status.event.top.length = 0;
                  _status.event.bottom.length = 0;
                }
              }
              game.pause();
              game.countChoose();
            }
            event.switchToAuto = switchToAuto;
            if (event.isMine()) {
              chooseButton();
              event.finish();
            }
            else if (event.isOnline()) {
              event.player.send(chooseButton, true, event.player, event.cards);
              event.player.wait();
              game.pause();
            }
            else {
              event.switchToAuto();
              event.finish();
            }
            "step 1"
            if (event.result == 'ai' || !event.result) {
              event.switchToAuto();
            }else {
              var top = event.result.top || [];
              var bottom = event.result.bottom || [];
              for (var i = 0; i < top.length; i++) {
                ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
              }
              for (i = 0; i < bottom.length; i++) {
                ui.cardPile.appendChild(bottom[i]);
              }
              for (i = 0; i < event.cards.length; i++) {
                if (!top.contains(event.cards[i]) && !bottom.contains(event.cards[i])) {
                  ui.cardPile.appendChild(event.cards[i]);
                }
              }
              player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
              game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
              game.delay(2);
            }
          }
        },
        "hj_jl_shelie":{ //涉猎
audio:"ext:魂将:2",
           trigger:{
            player:"phaseDrawBegin",
          },
          forced:true,
          content:function(){
            'step 0'
            trigger.untrigger();
            trigger.finish();
            event.cards=[];
            'step 1'
            player.chooseControl('basic','trick','equip',function(){
              if(Math.random()<0.4) return 'trick';
              if(Math.random()<0.8&&Math.random()>=0.4) return 'basic';
              return 'equip'
            }).set('prompt','请选择想要获得牌的类型');
            'step 2'
            event.control=result.control;
            var card=get.drawcardPile(function(card){
              return get.type(card)==event.control;
            });
            ui.cardPile.removeChild(card);
            event.cards.push(card);
            if(event.cards.length<4){
              event.goto(1);
            }
            else{
              player.gain(event.cards,'draw');
            }
          },
        },
        "hj_jl_gongxin":{ //攻心
        audio:"ext:魂将:2",
            enable:"phaseUse",
          usable:1,
          filterTarget:function(card,player,target){
            return target!=player&&target.num('h');
          },
          content:function(){
            'step 0'
            player.viewCards('攻心',target.get('h'));
            event.cards=target.get('h',function(card){
              return get.suit(card)=='heart';
            });
            if(event.cards.length){
              target.showCards(event.cards);
            }
            else{
              event.finish();
            }
            'step 1'
            if(event.cards.length==1){
              target.discard(event.cards);
              target.damage();
              event.finish();
            }
            else{
              player.chooseCardButton('选择一张获得之',event.cards);
            }
            'step 2'
            player.gain(result.links[0]);
            target.$give(result.links[0],player);
          },
          ai:{
            threaten:1.5,
            result:{
              target:function(player,target){
                return -target.num('h');
              },
            },
            order:10,
            expose:0.4,
          },
        },

        "hj_jl_dailao":{ //待劳
audio:"ext:魂将:2",
          usable:1,
          srlose:true,
          enable:"phaseUse",
          filterTarget:function(cards,target,player){
            return player!=target;
          },
          filterCard:true,
          position:"he",
          check:function(card){
            return 6-ai.get.value(card);
          },
          selectCard:[0,1],
          content:function(){
            if(cards.length==0){
              game.asyncDraw([player,target]);
            }
            else{
              target.chooseToDiscard('he',true);
            }
            player.turnOver();
            target.turnOver();
          },
          ai:{
            order:9,
            result:{
              player:function(player){
                if(ui.selected.cards.length>0){
                  if(player.isTurnedOver()) return 3;
                  if(!player.isTurnedOver()) return -4;
                }
                if(ui.selected.cards.length==0){
                  if(player.isTurnedOver()) return 4;
                  if(!player.isTurnedOver()) return -3;
                }
              },
              target:function(target,player){
                if(ui.selected.cards.length>0){
                  if(target.isTurnedOver()) return 3;
                  if(!target.isTurnedOver()) return -4;
                }
                if(ui.selected.cards.length==0){
                  if(target.isTurnedOver()) return 4;
                  if(!target.isTurnedOver()) return -3;
                }
              },
            },
          },
        },
        "hj_jl_ruya":{ //儒雅
audio:"ext:魂将:2",
          srlose:true,
          trigger:{
            player:"loseEnd",
          },
          frequent:true,
          filter:function(event,player){
            if(player.num('h')) return false;
            for(var i=0;i<event.cards.length;i++){
              if(event.cards[i].original=='h') return true;
            }
            return false;
          },
          content:function(){
            player.turnOver();
            player.draw(player.maxHp-player.num('h'));
          },
          ai:{
            threaten:0.8,
            effect:{
              target:function(card,player,target){
                if(target.num('h')==1&&card.name=='guohe') return 0.5;
                if(target.isTurnedOver()&&target.num('h')==1&&(card.name=='guohe'||card.name=='shunshou')) return -10;
              },
            },
            noh:true,
          },
        },
        "hj_jl_jieyan":{ //劫焰
audio:"ext:魂将:2",
          trigger:{
            global:"useCardToBefore",
          },
          direct:true,
          filter:function(event,player){
            return player.num('h')>0&&(get.type(event.card)=='trick'||event.card.name=='sha')&&get.color(event.card)=='red'&&event.targets.length==1;
          },
          content:function(){
            "step 0"
            player.chooseToDiscard('是否对'+get.translation(trigger.target)+'发动【劫焰】？','h').ai=function(card){
              if(ai.get.attitude(player,trigger.target)<=0) return 4-ai.get.value(card);
              return -1;                
            }
            "step 1"
            if(result.bool){
              player.logSkill('hj_jl_jieyan',trigger.target);
              trigger.untrigger();
              trigger.finish();
              trigger.target.damage('fire');
            }
          },
          ai:{
            expose:0.2,
          },
        },
        "hj_jl_fenying":{ //焚营
audio:"ext:魂将:2",
          trigger:{
            global:"damageAfter",
          },
          direct:true,
          filter:function(event,player){
            return event.nature=='fire'&&player.countCards('h')<=player.maxHp&&player.countCards('he',{color:'red'})>0;
          },
          content:function (){
            "step 0"
            player.chooseCardTarget({
              filterCard:function(card){
                return get.color(card)=='red';
              },
              filterTarget:function(card,player,target){
                return get.distance(trigger.player,target)<=1;
              },
              ai1:function(card){
                return 6-get.value(card);
              },
              ai2:function(target){
                return get.damageEffect(target,player,player,'fire');
              },
              position:'he',
              prompt:'焚营：弃置一张红色牌对目标或与其相距最近的其他目标造成等量火焰伤害'
            });
            "step 1"
            if(result.bool){
              player.logSkill('hj_jl_fenying',result.targets[0],'fire');
              player.discard(result.cards[0]);
              result.targets[0].damage('fire',trigger.num);
            }
          },
        },

        "hj_jl_youxia":{ //游侠
        audio:"ext:魂将:2",
            srlose:true,
          enable:"phaseUse",
          filterTarget:function (card, target, player) {
            return player != target && target.countCards('hej') > 0;
          },
          filter:function (event, player) {
            return !player.isTurnedOver();
          },
          selectTarget:[1,2],
          multitarget:true,
          multiline:true,
          content:function () {
            player.turnOver();
            for (var i = 0; i < targets.length; i++) {
              player.gainPlayerCard('hej', targets[i]);
            }
          },
          mod:{
            targetEnabled:function (card, player, target, now) {
              if (target.isTurnedOver()) {
                if (card.name == 'sha' || card.name == 'juedou') return false;
              }
            },
          },
          ai:{
            order:9,
            result:{
              player:-1,
              target:function (player, target) {
                if (get.attitude(player, target) <= 0) return (target.num('he') > 0) ? -1.5 : 1.5;
                return 0;
              },
            },
          },
        },
        "hj_jl_lvezhen":{ //掠阵
         audio:"ext:魂将:2",
           trigger:{
            player:"shaBegin",
          },
          filter:function(event,player){
            return event.target.num('he');
          },
          check:function(event,player){
            return ai.get.attitude(player,event.target)<0;
          },
          content:function(){
            'step 0'
            event.cards=get.cards(3);
            player.showCards(event.cards);
            'step 1'
            event.numx=0;
            for(var i=0;i<event.cards.length;i++){
              if(get.type(event.cards[i])!='basic') event.numx++;
              ui.discardPile.appendChild(event.cards[i]);
            }
            player.$throw(event.cards);
            if(event.numx){
              player.discardPlayerCard('请选择想要弃置的牌',trigger.target,[1,event.numx],'he');
            }
          },
        },
        "hj_jl_youlong":{ //游龙
audio:"ext:魂将:2",
          enable:"phaseUse",
          filterCard:function(card){
            return get.color(card)=='black';
          },
          filter:function(event,player){
            return ui.discardPile.childNodes.length>ui.cardPile.childNodes.length;
          },
          viewAs:{
            name:"shunshou",
          },
          viewAsFilter:function(player){
            if(!player.num('h',{color:'black'})) return false;
          },
          prompt:"将一张黑色手牌当顺手牵羊使用",
          check:function(card){
            return 8-ai.get.value(card);
          },
          ai:{
            order:9.5,
            wuxie:function(target,card,player,viewer){
              if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                return 0;
              }
            },
            basic:{
              order:7.5,
              useful:4,
              value:9,
            },
            result:{
              target:function(player,target){
                if(get.attitude(player,target)<=0) {
                  return (target.countCards('he',function(card){
                    return get.value(card,target)>0&&card!=target.getEquip('jinhe');
                  })>0)?-1.5:1.5;
                  var js=target.getCards('j');
                  if(js.length){
                    var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                    //if(jj.name=='shunshou') return 3;
                    if(js.length==1&&get.effect(target,jj,target,player)>=0){
                      return -1.5;
                    }
                    return 3;
                  }
                  return -1.5;
                }
              },
              player:function(player,target){
                if(get.attitude(player,target)<0&&!target.countCards('he',function(card){
                  return get.value(card,target)>0&&card!=target.getEquip('jinhe');
                })){
                  return 0;
                }
                if(get.attitude(player,target)>1){
                  var js=target.getCards('j');
                  if(js.length){
                    var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                    //if(jj.name=='shunshou') return 1;
                    if(js.length==1&&get.effect(target,jj,target,player)>=0){
                      return 0;
                    }
                    return 1;
                  }
                  return 0;
                }
                return 1;
              },
            },
            tag:{
              loseCard:1,
              gain:1,
            },
          },
        },

        "hj_jl_xiwu":{ //习武
audio:"ext:魂将:2",
           srlose:true,
          trigger:{
            player:"shaMiss",
          },
          priority:-1,
          check:function(event,player){
            return ai.get.attitude(player,event.target)<0;
          },
          content:function(){
            player.draw();
            if(trigger.target.num('h')){
              player.discardPlayerCard(trigger.target,'h');
            }        
          },
        },
        "hj_jl_yinmeng":{ //姻盟
         audio:"ext:魂将:2",
           srlose:true,
          enable:"phaseUse",
          filter:function(event,player){
            return player.num('h')&&(player.storage.hj_jl_yinmeng<Math.max(1,player.maxHp-player.hp))
          },
          filterTarget:function(card,player,target){
            return target.sex=='male'&&target.num('h')&&player!=target;
          },
          content:function(){
            'step 0'
            player.storage.hj_jl_yinmeng++;
            'step 1'
            event.card=target.get('h').randomGet();
            target.$phaseJudge(event.card);
            player.chooseCard(get.translation(target)+'展示的牌是'+get.translation(event.card)+',请选择你展示的牌',true).ai=function(card){
              if(ai.get.attitude(player,target)>0) return (get.type(event.card,'trick')==get.type(card,'trick'));
              return (get.type(event.card,'trick')!=get.type(card,'trick'));
            }
            'step 2'
            player.showCards(result.cards[0]);
            if(get.type(result.cards[0],'trick')==get.type(event.card,'trick')){
              game.asyncDraw([player,target]);
            }
            else{
              target.discard(event.card);
            }    
          },
          ai:{
            order:4,
            result:{
              player:0.5,
              target:function(player,target){
                var hs=player.get('h');
                var suit=['heart','diamond','club','spade'];
                var num=0;
                for(var i=0;i<hs.length;i++){
                  if(suit.contains(get.suit(hs[i]))){
                    suit.remove(get.suit(hs[i]));
                    num++;
                  }
                }
                var m=num/4;
                if(ai.get.attitude(player,target)>0&&Math.random()<m) return 1;
                if(ai.get.attitude(player,target)<0&&Math.random()<m) return -1;
                return 0;
              },
            },
          },
          group:["hj_jl_yinmeng2"],
        },
        "hj_jl_yinmeng2":{ //姻盟2
          trigger:{
            player:"phaseBefore",
          },
          forced:true,
          silent:true,
          popup:false,
          priority:10,
          content:function (){
            player.storage.hj_jl_yinmeng=0;
          },
        },
        "hj_jl_xianzhu":{ //贤助
audio:"ext:魂将:2",
           trigger:{
            global:"recoverAfter",
          },
          check:function(event,player){
            return ai.get.attitude(player,event.player)>=0;
          },
          prompt:function(event,player){
            var str='';
            str+='是否对'+get.translation(event.player)+'发动【贤助】？';
            return str;
          },
          content:function(){
            trigger.player.draw(2);
          },
          group:"hj_jl_xianzhu2",
        },
        "hj_jl_xianzhu2":{ //贤助2
          audio:"ext:魂将:2",
          trigger:{
            global:"loseEnd",
          },
          check:function (event,player){
            return ai.get.attitude(player,event.player)>=0;
          },
          filter:function (event,player){
            for(var i=0;i<event.cards.length;i++){
              if(event.cards[i].original=='e') return true;
            }
            return false;
          },
          prompt:function (event,player){
            var str='';
            str+='是否对'+get.translation(event.player)+'发动【贤助】？';
            return str;
          },
          content:function (){
            var num=0;
            for(var i=0;i<trigger.cards.length;i++){
              if(trigger.cards[i].original=='e') num+=2;
            }
            trigger.player.draw(num);
          },
        },
        "hj_jl_liangyuan":{ //良缘
          audio:"ext:魂将:2",
          enable:"phaseUse",
          skillAnimation:true,
          unique:true,
          animationColor:"fire",
          init:function(player){
            player.storage.hj_jl_liangyuan=false;
          },
          filter:function(event,player){
            return !player.storage.hj_jl_liangyuan;
          },
          filterTarget:function(card,player,target){
            return player!=target&&target.sex=='male';
          },
          content:function(){
            player.storage.hj_jl_liangyuan=true;
            target.addSkill('hj_jl_liangyuan2');
          },
          ai:{
            order:6,
            result:{
              target:3,
            },
          },
        },
        "hj_jl_liangyuan2":{
          mark:true,
          intro:{
           content:'mark'
         },
         marktext:'缘',
         trigger:{global:'phaseEnd'},
         filter:function(event,player){
           return event.player.hasSkill('hj_jl_liangyuan');
         },
         forced:true,
         content:function(){
           player.phase();
         },
         ai:{
          threaten:2,
        }
      },

        "hj_jl_kuangbao":{ //狂暴
audio:"ext:魂将:2",
           trigger:{
            source:"damageEnd",
            player:"damageEnd",
          },
          forced:true,
          mark:true,
          marktext:"暴",
          filter:function(event){
            return event.num>0;
          },
          init:function(player){
            player.storage.hj_jl_kuangbao=4;
            player.markSkill('hj_jl_kuangbao');
            player.syncStorage('hj_jl_kuangbao');
          },
          content:function(){
            player.storage.hj_jl_kuangbao+=trigger.num;
            player.markSkill('hj_jl_kuangbao');
            player.syncStorage('hj_jl_kuangbao');
          },
          intro:{
            content:"mark",
          },
        },
        "hj_jl_wumou":{ //无谋
audio:"ext:魂将:2",
          trigger:{
            player:"useCard",
          },
          forced:true,
          filter:function(event){
            return (get.type(event.card,'trick')=='trick'&&event.cards[0]&&event.cards[0]==event.card);
          },
          content:function(){
            'step 0'
            if(player.storage.hj_jl_kuangbao>0){
              player.chooseControl('选项一','选项二').set('prompt','无谋<div class="text">1:弃置一枚[暴]标记</div><div class="text">2:受到一点伤害</div>').ai=function(){
                if(player.storage.hj_jl_kuangbao>6) return '选项一';
                if(player.hp+player.countCards('h','tao')>3) return '选项二';
                return '选项一';
              };
            }
            else{
              player.damage('nosource');
              event.finish();
            }
            'step 1'
            if(result.control=='选项一'){
              player.storage.hj_jl_kuangbao--;
              player.syncStorage('hj_jl_kuangbao');
            }
            else{
              player.damage('nosource');
            }
          },
        },
        "hj_jl_wuqian":{ //无前
          audio:"ext:魂将:2",
          enable:"phaseUse",
          usable:1,
          filter:function(event,player){
            return player.storage.hj_jl_kuangbao>1;
          },
          content:function(){
            'step 0'
            player.storage.hj_jl_kuangbao-=2;
            player.syncStorage('hj_jl_kuangbao');
            'step 1'
            player.addTempSkill('wushuang','phaseAfter');
            player.addTempSkill('hj_jl_wuqian_buff','phaseAfter');
            'step 2'
            player.draw(player.maxHp-player.hp);
          },
          subSkill:{
            buff:{
              trigger:{
                source:"damageEnd",
              },
              forced:true,
              popup:false,
              audio:false,
              filter:function(event){
                return event.num>0;
              },
              content:function(){
                player.storage.hj_jl_kuangbao++;
                player.syncStorage('hj_jl_kuangbao');
              },
              sub:true,
            },
          },
          ai:{
            order:10,
            result:{
              player:function(player){
                if(player.countCards('h','sha')>0&&!player.hasSkill('wushuang')){
                  return 2;
                }
                var ph=player.getCards('h');
                var num=0;
                for(var i=0;i<ph.length;i++){
                  if(get.tag(ph[i],'damage')) num++;
                }
                if(num>1) return num;
                return 0;
              },
            },
          },
        },
        "hj_jl_shenfen":{ //神愤
audio:"ext:魂将:2",
           enable:"phaseUse",
          usable:1,
          filter:function(event,player){
            return player.storage.hj_jl_kuangbao>=4;
          },
          skillAnimation:true,
          animationColor:"metal",
          mark:true,
          content:function(){
            "step 0"
            player.storage.hj_jl_kuangbao-=6;
            player.syncStorage('hj_jl_kuangbao');
            event.targets=game.filterPlayer(function(current){
              return player!=current;
            }).sortBySeat();
            event.targets2=event.targets.slice(0);
            "step 1"
            if(event.targets.length){
              event.targets.shift().damage();                    
              event.redo();
            }
            "step 2"
            if(event.targets2.length){
              var cur=event.targets2.shift();
              if(cur&&cur.countCards('he')){
                cur.discard(cur.get('he'));
              }
              event.redo();
            }
            "step 3"
            player.turnOver();
            player.recover();
          },
          ai:{
            order:9,
            result:{
              player:function(player){
                var num=0;
                for(var i=0;i<game.players.length;i++){
                  if(game.players[i]!=player){
                    if(game.players[i].ai.shown==0) return 0;
                    num+=get.damageEffect(game.players[i],player,player)>0?1:-1;
                  }
                }
                return num;
              },
            },
          },
        },

        "hj_jl_yanmie":{ //湮灭
audio:"ext:魂将:2",
           enable:"phaseUse",
          filter:function(event,player){
            return player.num('he',{suit:'spade'})>0;
          },
          check:function(card){
            return 6-ai.get.value(card)
          },
          filterCard:function(card){
            return get.suit(card)=='spade';
          },
          position:"he",
          filterTarget:function(card,player,target){
            return player!=target&&target.num('h');
          },
          content:function(){
            "step 0"
            var num=target.num('h');
            target.discard(target.get('h'));
            target.draw(num);
            target.showHandcards();
            "step 1"
            var num=target.num('h',function(card){
              return get.type(card)!='basic';
            });
            target.discard(target.get('h',function(card){
              return get.type(card)!='basic';
            }));
            if(num) target.damage(num);                
          },
          ai:{
            order:5,
            expose:0.3,
            threaten:1.8,
            result:{
              target:function(player,target){
                return -target.num('h')-1;
              },
            },
          },
        },
        "hj_jl_shunshi":{ //顺世
audio:"ext:魂将:2",
          trigger:{
            target:"useCardToBegin",
          },
          filter:function(event,player){
            return event.player!=player&&get.type(event.card)=='basic';
          },
          content:function(){
            "step 0"
            player.chooseTarget('是否发动【顺世】?',[1,2],true,function(card,player,target){
              return player!=target&&trigger.player!=target;
            }).ai=function(target){
              if(trigger.card.name=='sha'){
                if(target.num('e','2')&&target.get('e')!='baiyin') return 0;
                return -ai.get.attitude(player,target);
              }
              if(trigger.card.name=='tao'){
                if(!target.isDamaged()) return 0;
                return ai.get.attitude(player,target);
              }
            }
            "step 1"
            if(result.bool){
              player.logSkill('hj_jl_shunshi',result.targets);
              player.draw();
              game.asyncDraw(result.targets);
              for(var i=0;i<result.targets.length;i++){
                trigger.targets.push(result.targets[i]);
                game.log(result.targets[i],'成为了额外目标');
              }
            }
          },
        },
        "hj_jl_weimu":{ //帷幕
audio:"ext:魂将:2",
            trigger:{
            target:"useCardToBefore",
          },
          forced:true,
          priority:1005,
          filter:function (event,player){
            return event.player!=player&&get.type(event.card,'trick')=='trick'||get.type(event.card,'delay')=='delay';
          },
          content:function (){
            trigger.cancel();
          },
        },
        "hj_jl_luanwu":{ //乱武
audio:"ext:魂将:2",
           unique:true,
          enable:"phaseUse",
          limited:true,
          skillAnimation:"epic",
          animationColor:"thunder",
          filterTarget:function(card,player,target){
            return target!=player;
          },
          selectTarget:-1,
          multitarget:true,
          multiline:true,
          content:function(){
            "step 0"
            player.awakenSkill('hj_jl_luanwu');
            event.current=player.next;
            event.currented=[];
            "step 1"
            event.currented.push(event.current);
            event.current.animate('target');
            event.current.chooseToUse('乱武：使用一张杀或流失一点体力',{name:'sha'},function(card,player,target){
              if(player==target) return false;
              if(!player.canUse('sha',target)) return false;
              if(get.distance(player,target)<=1) return true;
              if(game.hasPlayer(function(current){
                return current!=player&&get.distance(player,current)<get.distance(player,target);
              })){
                return false;
              }
              return true;
            });
            "step 2"
            if(result.bool==false) event.current.loseHp();
            event.current=event.current.next;
            if(event.current!=player&&!event.currented.contains(event.current)){
              game.delay(0.5);
              event.goto(1);
            }
          },
          ai:{
            order:1,
            result:{
              player:function(player){
                if(lib.config.mode=='identity'&&game.zhu.isZhu&&player.identity=='fan'){
                  if(game.zhu.hp==1&&game.zhu.countCards('h')<=2) return 1;
                }
                var num=0;
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                  var att=get.attitude(player,players[i]);
                  if(att>0) att=1;
                  if(att<0) att=-1;
                  if(players[i]!=player&&players[i].hp<=3){
                    if(players[i].countCards('h')==0) num+=att/players[i].hp;
                    else if(players[i].countCards('h')==1) num+=att/2/players[i].hp;
                    else if(players[i].countCards('h')==2) num+=att/4/players[i].hp;
                  }
                  if(players[i].hp==1) num+=att*1.5;
                }
                if(player.hp==1){
                  return -num;
                }
                if(player.hp==2){
                  return -game.players.length/4-num;
                }
                return -game.players.length/3-num;
              },
            },
          },
          mark:true,
          intro:{
            content:"limited",
          },
          init:function(player,skill){
            player.storage[skill]=false;
          },
        },

        "hj_jl_zhitian":{ //知天
audio:"ext:魂将:2",
            trigger:{
            player:"phaseBegin",
          },
          forced:true,
          filter:function(event,player){
            return player.countCards('h')>0;
          },
          content:function(){
            "step 0"
            player.chooseTarget('知天：将所有手牌交给一名角色',true).ai=function(target){
              return get.attitude(player,target);
            }
            "step 1"
            if(result.bool){
              player.$giveAuto(player.getCards('h').length,result.targets[0]);
              var cards=player.getCards('h');
              player.lose(cards,ui.special);
              result.targets[0].gain(cards);
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
              player.line(result.targets[0],'green');
              result.targets[0].addSkill(link);
              result.targets[0].mark(link,{
                name:get.translation(link),
                content:lib.translate[link+'_info']
              });
              game.log(result.targets[0],'获得技能','【'+get.translation(link)+'】');
              player.loseHp();
            }
          },
        },
        "hj_jl_yinshi":{ //隐世
audio:"ext:魂将:2",
          trigger:{
            player:"damageBegin",
          },
          filter:function(event){
            return event.num>0;
          },
          forced:true,
          content:function(){
            trigger.untrigger();
            trigger.finish();
            player.draw();
          },
          ai:{
            threaten:0.2,
            result:{
              effect:function(card,player,target){
                if(get.tag(card,'damage')){
                  if(player.hasSkill('jueqing')) return [1,-2];
                  if(target.num('h')+1<=target.hp) return [0,1];
                  if(target.hasFriend()) return [1,1];
                }
              },
            },
          },
        },

        "hj_jl_xingyi":{ //行医
audio:"ext:魂将:2",
           enable:"phaseUse",
          usable:1,
          srlose:true,
          filterTarget:function(card,player,target){
            return target.num('h')&&player!=target;
          },
          content:function(){
            if(target.num('he')){
              player.gainPlayerCard(target,true,'h');
            }
            target.recover();
          },
          ai:{
            order:2,
            result:{
              target:function(player,target){
                if(target.hp==1) return 2;
                if(target.num('h')>target.hp&&target.isDamaged()) return 5;
                if(!target.isDamaged()) return -1;
                return 1;
              },
            },
            threaten:2,
          },
        },
        "hj_jl_guagu":{ //刮骨
audio:"ext:魂将:2",
          usable:2,
          srlose:true,
          trigger:{
            global:"dying",
          },
          priority:6,
          filter:function(event,player){
            return event.player.hp<=0&&event.player.num('h')>0;
          },
          prompt:function(event,player){
            var str='';
            str+='是否对'+get.translation(event.player)+'发动【刮骨】';
            return str;
          },
          check:function(event,player){
            var cards=event.player.get('h');
            var save=false;
            for(var i=0;i<cards.length;i++){
              if(get.tag(cards[i],'save')){
                save=true;
              }
            }
            if(ai.get.attitude(player,event.player)<0){
              if(cards.length>1&&save) return 1;
              if(!save){
                // var friendSave=false;
                // for(var i=0;i<game.players.length;i++){
                    // if(ai.get.attitude(event.player,game.player))
                // }
                return -10;
              }
            }
            if(ai.get.attitude(player,event.player)>0){
              if(save) return 0;
              if(!save){
                if(event.player.hasSkill('jiushi')&&!event.player.isTurnedOver()) return 0;
                if(player.num('h','tao')&&event.player.num('h')>=2) return 0;
                return 1;
              }

            }
            return 0;
          },
          content:function(){
            "step 0"
            var cards=trigger.player.get('h');
            event.bool=cards.length>=2;
            trigger.player.discard(cards);
            trigger.player.recover();
            "step 1"
            if(event.bool){
              trigger.player.draw();
            }
          },
          ai:{
            expose:0.2,
            threaten:1.5,
          },
        },
        "hj_jl_jishi":{ //济世
audio:"ext:魂将:2",
           usable:1,
          enable:"phaseUse",
          filter:function(event,player){
            return player.num('he',{suit:'heart'})>0;
          },
          check:function(card){
            return 6-ai.get.value(card)
          },
          filterCard:function(card){
            return get.suit(card)=='heart';
          },
          filterTarget:function(card,player,target){
            return target.num('h')>0;
          },
          position:"he",
          content:function(){
            'step 0'
            var num=target.num('h');
            target.discard(target.get('h'));
            target.draw(num);
            target.showHandcards();
            'step 1'
            var num=target.num('h',function(card){
              return get.type(card)!='basic';
            });
            if(num==0){
              event.finish();
            }
            else{
              var recover=target.maxHp-target.hp;
              if(num>0&&num<=recover){
                target.recover(num);
              }
              else{
                if(recover>0) target.recover(recover);
                target.draw(num-recover);
              }
            }

          },
          ai:{
            order:9,
            result:{
              target:function(player,target){
                var recover=target.maxHp-target.hp;
                var nh=target.num('h');
                if(recover>=2) return nh+recover;
                return nh;
              },
            },
            threaten:2,
          },
        },
        "hj_jl_xuanxin":{ //悬心
audio:"ext:魂将:2",
           trigger:{
            global:"damage",
          },
          check:function(){return 1},
          content:function(){
            'step 0'
            var cards=[];
            for(var i=0;i<ui.discardPile.childNodes.length;i++){
              if(get.suit(ui.discardPile.childNodes[i])=='heart'){
                cards=cards.concat(ui.discardPile.childNodes[i]);
              }
            }
            if(cards.length){
              var card=cards.randomGet();
              player.gain(card,'gain2');
              game.log(player,'从弃牌堆获得了',card);
              if(trigger.player&&trigger.player!=player){
                player.chooseCard('是否交给'+get.translation(trigger.player)+'一张牌？').ai=function(card){
                  if(ai.get.attitude(player,trigger.player)>0) return 6-ai.get.value(card);
                  return 0;
                }
              }
            }
            else{
              event.finish();
            }
            'step 1'
            if(result.bool){
              trigger.player.gain(result.cards[0]);
              player.$give(1,trigger.player);
            }
          },
        },
        "hj_jl_manwu":{ //曼舞
audio:"ext:魂将:2",
           srlose:true,
          enable:"phaseUse",
          usable:1,
          filter:function(event,player){
            return player.num('h')>0;
          },
          filterTarget:function(card,player,target){
            if(target.sex!='male') return false;
            return target.num('h')&&player!=target;
          },
          content:function(){
            event.card=target.get('h').randomGet();
            player.showCards(event.card);
            if(get.suit(event.card)=='diamond'){
              target.addJudge('lebu',event.card);
              target.$give(event.card,target);
            }
            else{
              player.gain(event.card);
              target.$give(event.card,player);
            }
          },
          ai:{
            order:9,
            result:{
              target:function(target,player){
                return ai.get.effect(target,{name:'lebu'},player,target);
              },
              player:1,
            },
          },
        },
        "hj_jl_baiyue":{ //拜月
audio:"ext:魂将:2",
           srlose:true,
          trigger:{
            player:"phaseEnd",
          },
          filter:function(event,player){
            return player.storage.hj_jl_baiyue.length;
          },
          direct:true,
          content:function(){
            'step 0'
            player.chooseCardButton('是否发动【拜月】？',player.storage.hj_jl_baiyue).ai=function(button){
              return ai.get.value(button.link);
            }
            'step 1'
            if(result.bool){
              player.logSkill('hj_jl_baiyue');
              player.storage.hj_jl_baiyue.remove(result.buttons[0].link);
              player.gain(result.buttons[0].link);
              player.$gain(result.buttons[0].link);
            }
            delete player.storage.hj_jl_baiyue;
            player.storage.hj_jl_baiyue=[];
          },
          group:["hj_jl_baiyue_countGeneral"],
          subSkill:{
            countGeneral:{
              trigger:{
                global:["useCardAfter","respondAfter","discardAfter"],
              },
              forced:true,
              popup:false,
              filter:function(event,player){
                if(player!=_status.currentPhase) return false;
                if(event.player==player) return false;
                if(event.cards){
                  for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].position!='d') 
                      return true;
                  }
                }
                return false;
              },
              content:function(){
                for(var i=0;i<trigger.cards.length;i++){
                  if(get.position(trigger.cards[i])=='d'){
                    player.storage.hj_jl_baiyue=player.storage.hj_jl_baiyue.concat(trigger.cards[i]);
                  }
                }
              },
              sub:true,
            },
            countJudge:{
              trigger:{
                global:"judgeAfter",
              },
              forced:true,
              popup:false,
              filter:function(event,player){
                if(player!=_status.currentPhase) return false;
                if(event.player==player) return false;
                if(event.result.card.parentNode.id!='discardPile') return false;
                return true;
              },
              content:function(){
                player.storage.hj_jl_baiyue=player.storage.hj_jl_baiyue.concat(trigger.result.card);
              },
              sub:true,
            },
          },
          init:function(player){
            player.storage.hj_jl_baiyue=[];
          },
        },
        "hj_jl_tianzi":{ //天姿
audio:"ext:魂将:2",
          trigger:{
            player:"phaseDrawBefore",
          },
          check:function(event,player){
            if(game.players.length<3) return 0;
          },
          content:function(){
            "step 0"
            trigger.finish();
            trigger.untrigger();
            event.current=player.next;
            "step 1"
            event.current.chooseCard('交给'+get.translation(player)+'一张手牌或令其摸一张牌').ai=function(card){
              if(ai.get.attitude(event.current,player)>0){
                return -1;
              }
              else{
                return 3-ai.get.value(card);
              }
            }
            "step 2"
            if(result.bool==false){
              event.current.line(player,'green');
              game.log(get.translation(event.current)+'让'+get.translation(player)+'摸了一张牌');
              player.draw();
            }
            else{
              player.gain(result.cards[0]);
              event.current.$give(1,player);
            }
            if(event.current.next!=player){
              event.current=event.current.next;
              game.delay(0.5);
              event.goto(1);
            }
          },
        },
        "hj_jl_meixin":{ //魅心
audio:"ext:魂将:4",
          enable:"phaseUse",
          usable:1,
          filterCard:true,
          position:"he",
          filterTarget:function(card,player,target){
            if(player==target) return false;
            if(target.sex!='male') return false;
            return true;
          },
          check:function(card){
            return 6-ai.get.value(card);
          },
          content:function(){
            target.markSkillCharacter('hj_jl_meixin',player,'魅心','本阶段当你使用一张基本牌后，该目标弃置一张牌；当你使用一张锦囊牌后，你获得该目标一张牌；当你使用一张装备牌后，你对该目标造成1点伤害。');
            player.storage.hj_jl_meixin=target;
            player.addTempSkill('hj_jl_meixin2','phaseAfter');
            player.addTempSkill('hj_jl_meixin3','phaseAfter');
          },
          ai:{
            threaten:3,
            order:15,
            expose:0.3,
            result:{
              target:function(player,target){
                return -target.num('h')-1;
              },
            },
          },
        },
        "hj_jl_meixin2":{ //魅心2
          trigger:{
            player:"useCardAfter",
          },
          audio:"ext:魂将:2",
          filter:function (event,player){
            return player.storage.hj_jl_meixin&&player.storage.hj_jl_meixin.isAlive();
          },
          forced:true,
          content:function (){
            var target=player.storage.hj_jl_meixin;
            if(get.type(trigger.card,'trick')=='basic'&&target.num('he')>0){
              player.logSkill('hj_jl_meixin2',target);
              target.chooseToDiscard('he',true);
            }
            if(get.type(trigger.card,'trick')=='trick'&&target.num('he')>0){
              player.logSkill('hj_jl_meixin2',target);
              player.gainPlayerCard('he',target,true);
            }
            if(get.type(trigger.card,'trick')=='equip'){
              player.logSkill('hj_jl_meixin2',target);
              target.damage();
            }    
          },
        },
        "hj_jl_meixin3":{ //魅心3
          trigger:{
            player:"phaseEnd",
          },
          forced:true,
          popup:false,
          filter:function (event,player){
            return player.storage.hj_jl_meixin&&player.storage.hj_jl_meixin.isAlive();
          },
          content:function (){
            var target=player.storage.hj_jl_meixin;
            target.unmarkSkill('hj_jl_meixin');
            delete player.storage.hj_jl_meixin;
          },
        },

        "hj_jl_baozheng":{ //暴征
audio:"ext:魂将:2",
           trigger:{
            player:"phaseEnd",
          },
          forced:true,
          priority:10,
          content:function(){
            "step 0"
            var targets=game.players.slice(0);
            targets.remove(player);
            targets.sort(lib.sort.seat);
            event.targets=targets;
            event.num=0;
            "step 1"
            if(event.num<event.targets.length){
              event.target=event.targets[event.num];
              if(event.target.num('he')>=2){
                event.target.chooseCard('交给'+get.translation(player)+'一张牌，或弃置两张牌对其造成1点伤害','he').ai=function(card){
                  if(ai.get.attitude(event.target,player)>0) return 10-ai.get.value(card);
                  return 0;
                }
              }
              else if(event.target.num('he')==1){
                event.target.chooseCard('交给'+get.translation(player)+'一张牌','he',true);
              }
              else{
                event.num++;
                event.redo();
              }

            }
            else{
              event.finish();
            }
            "step 2"
            if(result.bool){
              player.gain(result.cards[0]);
              event.target.$give(1,player);
              event.num++;
              event.goto(1);
            }
            else{
              event.target.chooseToDiscard('弃置两张牌对'+get.translation(player)+'造成一点伤害',2,true);
              event.target.line(player,'fire');
              player.damage(event.target);
              event.num++;
              event.goto(1);
            }
          },
        },
        "hj_jl_lingnu":{ //凌怒
audio:"ext:魂将:2",
          trigger:{
            player:"phaseEnd",
          },
          forced:true,
          priority:9,
          filter:function(event,player){
            return player.storage.hj_jl_lingnu>=2;
          },
          content:function(){
            "step 0"
            player.loseMaxHp();
            var targets=game.players.slice(0);
            targets.remove(player);
            targets.sort(lib.sort.seat);
            event.targets=targets;
            event.num=0;
            "step 1"
            if(num<event.targets.length){
              if(event.targets[num].num('hej')){
                player.gainPlayerCard(event.targets[num],'hej',true);
              }
              event.num++;
              event.redo();
            }
          },
          group:["hj_jl_lingnu_getStat","hj_jl_lingnu_init"],
          subSkill:{
            getStat:{
              trigger:{
                player:"damageEnd",
              },
              forced:true,
              popup:false,
              silent:true,
              content:function(){
                player.storage.hj_jl_lingnu+=trigger.num;
              },
              sub:true,
            },
            init:{
              trigger:{
                player:"phaseBegin",
              },
              forced:true,
              popup:false,
              silent:true,
              content:function(){
                player.storage.hj_jl_lingnu=0;
              },
              sub:true,
            },
          },
        },
        "hj_jl_canlue":{ //残掠
audio:"ext:魂将:2",
           trigger:{
            global:"gainEnd",
          },
          forced:true,
          filter:function(event,player){
            if(event.source==player&&event.player!=player&&event.cards&&event.cards.length) return event.player.isAlive();
            return false;
          },
          check:function(event,player){
            if(player.isFriendsOf(event.source)) return false;
            return true;
          },
          logTarget:function(event,player){
            return event.player;
          },
          content:function(){
            trigger.player.chooseToDiscard('he',trigger.cards.length,true);
          },
          group:["hj_jl_canlue2"],
        },
        "hj_jl_canlue2":{ //残掠2
          audio:1,
          trigger:{global:'gainEnd'},
          filter:function(event,player){
            if(event.source!=player&&event.player==player&&event.source!=undefined&&event.cards&&event.cards.length) return event.source.isAlive();
            return false;
          },
          check:function(event,player){
            if(ai.get.attitude(player,event.source)>=0) return false;
            return true;
          },
          prompt:function(event,player){
            var str='';
            str+='是否对'+get.translation(event.source)+'发动【残掠】？'
            return str;
          },                      
          logTarget:function(event,player){
            return event.source;
          },
          content:function(){
            trigger.source.damage(trigger.cards.length);
          },                      
        },
        "hj_jl_baolian":{ //暴敛
audio:"ext:魂将:2",
          init:function (player){
            player.storage.hj_jl_baolian=0;
          },
          trigger:{
            global:"gameDrawAfter",
          },
          forced:true,
          priority:101,
          content:function (){
            "step 0"
            event.targets=game.filterPlayer();
            event.targets.remove(player);
            event.targets.sort(lib.sort.seat); 
            player.line(event.targets);
            "step 1"
            if(event.targets.length){
              event.targets.shift().loseMaxHp()._triggered=null;
              event.redo();
            }
            "step 2"
            player.gainMaxHp(game.countPlayer()-1);
            "step 3"
            player.recover(game.countPlayer()-1);
            "step 4"
            player.storage.hj_jl_baolian+=game.countPlayer()-1;
            player.syncStorage('hj_jl_baolian');
            player.markSkill('hj_jl_baolian');
          },
          group:"hj_jl_baolian_lose",
          subSkill:{
            lose:{
              trigger:{
                player:"phaseEnd",
              },
              forced:true,
              priority:-1,
              filter:function (event,player){
                return player.storage.hj_jl_baolian>0;
              },
              content:function (){
                "step 0"
                player.storage.hj_jl_baolian--;
                player.syncStorage('hj_jl_baolian');
                player.markSkill('hj_jl_baolian');
                "step 1"
                player.recover();
                "step 2"
                player.loseMaxHp();
              },
              sub:true,
            },
          },
        },

        "hj_jl_aozhan":{ //鏖战
audio:"ext:魂将:2",
            marktext:"战",
          frequent:true,
          trigger:{
            player:"damageEnd",
            source:"damageEnd",
          },
          filter:function(event,player){
            if(event.num<=0) return false;
            return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
          },
          init:function(player){
            player.storage.hj_jl_aozhan=[];
          },
          content:function(){
            var cards=get.cards(trigger.num);
            player.storage.hj_jl_aozhan=player.storage.hj_jl_aozhan.concat(cards);
            player.$gain2(cards);
            game.log(player,'将'+get.cnNumber(cards.length)+'张牌置于武将牌上');
            player.syncStorage('hj_jl_aozhan');
            player.markSkill('hj_jl_aozhan');
          },
          intro:{
            content:"cards",
          },
          group:["hj_jl_aozhan2"],
        },
        "hj_jl_aozhan2":{ //鏖战2
          audio:1,
          enable:'phaseUse',
          usable:1,
          filter:function(event,player){
            return player.storage.hj_jl_aozhan.length;
          },
          content:function(){
            'step 0'
            player.chooseControl('收入手牌','置入弃牌堆',ui.create.dialog('战',player.storage.hj_jl_aozhan)).ai=function(event,player){
              var value=0,i;
              var cards=player.storage.hj_jl_aozhan;
              for(i=0;i<cards.length;i++){
                value+=ai.get.value(cards[i]);
              }
              value/=player.storage.hj_jl_aozhan.length;
              if(value>4)  return '收入手牌';
              return '置入弃牌堆';
            }
            'step 1'
            var cards=[];
            while(player.storage.hj_jl_aozhan.length){
              cards=cards.concat(player.storage.hj_jl_aozhan.shift());
            }
            if(result.control=='置入弃牌堆'){
              player.discard(cards);
              player.draw(cards.length);
            }
            else{
              game.log(player,'获得了',cards);
              player.gain(cards,'gain2');
            }
            player.syncStorage('hj_jl_aozhan');
            if(!player.storage.hj_jl_aozhan.length){
              player.unmarkSkill('hj_jl_aozhan');
            }
          },
          ai:{
            order:1,
            result:{
              player:function(player){
                if(player.storage.hj_jl_aozhan.length>=2) return 1;
                if(player.hp+player.num('h')<=3) return 0.5;
                return 0;
              }
            }
          }
        },
        "hj_jl_huxiao":{ //虎啸
audio:"ext:魂将:2",
           trigger:{
            source:"damageBegin",
          },
          filter:function(event,player){
            return !player.isTurnedOver()&&_status.currentPhase==player&&event.card&&event.card.name=='sha';
          },
          priority:10,
          check:function(event,player){
            if(ai.get.attitude(player,event.player)>0) return false;
            var e2=event.player.get('e','2');
            if(e2){
              if(e2.name=='tengjia'){
                if(event.nature=='fire') return 10;
              }
              if(e2.name=='baiyin') return 0;
            }
            if(event.player.hasSkill('kuangfeng2')&&event.nature=='fire') return 10;
            return ai.get.damageEffect(player,event.player,player);
          },
          content:function(){
            trigger.num++;
            player.draw();
            player.addTempSkill('hj_jl_huxiao2','shaAfter');
          },
        },
        "hj_jl_huxiao2":{ //虎啸2
          audio:false,
          trigger:{player:'shaEnd'},
          forced:true,
          popup:false,
          content:function(){
            while(_status.event.name!='phaseUse'){
              _status.event=_status.event.parent;
            }
            _status.event.finish();
            _status.event.untrigger(true);
            player.turnOver();
            player.skip('phaseDiscard');
          }
        },
        "hj_jl_shixve":{ //噬血
audio:"ext:魂将:2",
           trigger:{
            source:"damageBefore",
          },
          usable:1,
          filter:function (event,player){

            return event.card&&event.notLink();

          },
          content:function (){

            player.recover();

            player.draw();

          },
        },

        "hj_jl_liuyun":{ //流云
audio:"ext:魂将:4",
          enable:"phaseUse",
          usable:1,
          filterCard:function(card){
            return get.color(card)=='black';
          },
          position:"he",
          filter:function(event,player){
            return player.num('he',{color:'black'})>0&&!player.isLinked();
          },
          check:function(card){
            return 8-ai.get.value(card)
          },
          prompt:"弃置一张黑色牌，令一名角色选择一项：回复一点体力或摸两张牌",
          filterTarget:true,
          content:function(){
            'step 0'
            player.link();
            event.target=target;
            if(target.hp==target.maxHp){
              target.draw(2);
              event.finish();
            }
            else{
              var controls=['draw_card'];
              if(target.hp<target.maxHp){
                controls.push('recover_hp');
              }
              target.chooseControl(controls).ai=function(){
                if(target.hp==1&&target.maxHp>2){
                  return 'recover_hp';
                }
                else if(target.hp==2&&target.maxHp>2&&target.num('h')>1){
                  return 'recover_hp';
                }
                else{
                  return 'draw_card';
                }
              }
            }
            "step 1"
            event.control=result.control;
            switch(event.control){
              case 'recover_hp':event.target.recover();event.finish();break;
              case 'draw_card':event.target.draw(2);event.finish();break;
            }
          },
          ai:{
            expose:0.2,
            order:9,
            result:{
              player:function(player){
                if(player.num('h')>player.hp) return 1;
                return -1;
              },
              target:function(player,target){
                if(target.hp<2) return 5;
                return 2;
              },
            },
            threaten:1.5,
          },
        },
        "hj_jl_lingbo":{ //凌波
audio:"ext:魂将:4",
          trigger:{
            global:"phaseBegin",
          },
          check:function(event,player){
            if(ai.get.attitude(player,event.player)>0) return event.player.num('j');
            if(ai.get.attitude(player,event.player)<0) return event.player.num('e');
            return 0;
          },
          filter:function(event,player){
            var num=0;
            for(var i=0;i<game.players.length;i++){
              num+=game.players[i].num('ej');
            }    
            return (player.isLinked()||player.isTurnedOver())&&num>0;
          },
          content:function(){
            'step 0'
            if(player.isLinked()) player.link();
            if(player.isTurnedOver()) player.turnOver();
            player.chooseTarget('将场上的一张牌置于牌堆顶',function(card,player,target){
              return target.num('ej')>0;
            }).ai=function(target){
              if(ai.get.attitude(player,target)>0) return target.num('j');
              if(ai.get.attitude(player,target)<0) return target.num('e');
              return 0;
            }
            'step 1'
            if(result.bool){
              event.target=result.targets[0];
              player.choosePlayerCard('将目标的一张牌置于牌堆顶',event.target,'ej',true);
            }
            else{
              event.finish();
            }
            'step 2'
            if(result.bool){
              event.card=result.links[0];
              event.target.lose(event.card,ui.special);
              game.broadcastAll(function(player){
                var cardx=ui.create.card();
                cardx.classList.add('infohidden');
                cardx.classList.add('infoflip');
                player.$throw(cardx,1000,'nobroadcast');
              },event.target);
              game.log(player,'将',event.target,'的',event.card,'置于牌堆顶');
            }
            else{
              event.card=null;
            }
            'step 3'
            if(event.target==game.me) game.delay(0.5);
            'step 4'
            if(event.card){
              event.card.fix();
              ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
            }
          },
          ai:{
            effect:{
              target:function(card){
                if(card.name=='tiesuo') return 0.5;
              },
            },
          },
        },
        "hj_jl_qingcheng":{ //倾城
audio:"ext:魂将:4",
            srlose:true,
          enable:["chooseToUse","chooseToRespond"],
          filterCard:function(){return false;},
          selectCard:-1,
          viewAs:{
            name:"sha",
          },
          viewAsFilter:function(player){
            return !player.isLinked();
          },
          prompt:"横置你的武将牌，视为打出一张杀",
          check:function(){return 1},
          onuse:function(result,player){
            player.link();
          },
          onrespond:function(result,player){
            player.link();
          },
          ai:{
            skillTagFilter:function(player){
              return !player.isLinked();
            },
            respondSha:true,
            canLink:function(player,target,card){
              if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
              if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
              },true)) {
                return false;
              }
              if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
              return true;
            },
            basic:{
              useful:[5,1],
              value:[5,1],
            },
            order:function(item,player){
              if(player.hasSkillTag('presha',true,null,true)) return 10;
              if(lib.linked.contains(get.nature(item))){
                if(game.hasPlayer(function(current){
                  return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                  return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1) {
                  return 3.1;
                }
                return 3;
              }
              return 3.05;
            },
            result:{
              target:function(player,target,card,isLink){
                var eff=function(){
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
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                  target:target,
                  card:card,
                },true)) {
                  return eff/1.2;
                }
                return eff;
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
          group:["hj_jl_qingcheng2"],
        },
        "hj_jl_qingcheng2":{ //倾城2
          audio:1,
          enable:'chooseToRespond',
          filterCard:function(){return false;},
          selectCard:-1,
          viewAs:{name:'shan'},
          viewAsFilter:function(player){
            return player.isLinked();
          },
          prompt:'重置你的武将牌，视为打出一张闪',
          check:function(){return 1},
          onrespond:function(result,player){
            player.link();
          },
          ai:{
            skillTagFilter:function(player){
              return player.isLinked();
            },
            respondShan:true,
          }
        },
        "hj_jl_luoshen":{ //洛神
audio:"ext:魂将:4",
          trigger:{
            player:"phaseBegin",
          },
          direct:true,
          filter:function (event,player){
            return !player.hasSkill('hj_jl_luoshen2');
          },
          content:function (){
            'step 0'
            player.chooseTarget(get.prompt('hj_jl_luoshen'),[1,2],function(card,player,target){
              return target!=player;
            }).ai=function(target){
              return get.attitude(player,target);
            }
            'step 1'
            if(result.bool){
              result.targets.sortBySeat();
              result.targets.unshift(player);
              player.logSkill('hj_jl_luoshen',result.targets);
              game.asyncDrawAuto(result.targets,function(current){
                return current==player?1:2;
              });
              player.addSkill('hj_jl_luoshen2');
            }
          },
        },
        "hj_jl_luoshen2":{ //洛神2
          marktext:"洛",
          intro:{
            content:"跳过下一个摸牌阶段。",
          },
          mark:true,
          trigger:{
            player:"phaseDrawBegin",
          },
          forced:true,
          content:function (){
            "step 0"
            trigger.cancel();
            "step 1"
            game.log(player,'因技能','【'+get.translation('hj_jl_luoshen')+'】','的影响跳过了摸牌阶段。');
            player.removeSkill('hj_jl_luoshen2');
          },
        },

        "hj_jl_fangxin":{  //芳馨
         audio:"ext:魂将:2",
          enable:"chooseToUse",
          discard:false,
          prepare:function(cards,player){
            player.$give(cards,player);
          },
          filter:function(event,player){
            if(event.type=='dying'){
              return event.filterCard({name:'tao'},player)&&((!player.hasJudge('lebu')&&player.num('he',{suit:'diamond'}))||(!player.hasJudge('bingliang')&&player.num('he',{suit:'club'})));
            }
            if(event.parent.name!='phaseUse') return false;
            if(!lib.filter.filterCard({name:'tao'},player,event)){
              return false;
            }
            return player.isDamaged()&&((!player.hasJudge('lebu')&&player.num('he',{suit:'diamond'}))||(!player.hasJudge('bingliang')&&player.num('he',{suit:'club'})));
          },
          position:"he",
          filterCard:function(card,player,target){
            return ((get.suit(card)=='diamond'&&!player.hasJudge('lebu'))||(get.suit(card)=='club'&&!player.hasJudge('bingliang')));
          },
          filterTarget:function(card,player,target){
            if(_status.event.type=='dying'){
              return target==_status.event.dying;
            }
            return player==target;
          },
          selectTarget:-1,
          check:function(card){
            return 8-ai.get.value(card);
          },
          content:function(){
            if(get.suit(cards[0])=='diamond'){
              player.addJudge('lebu',cards[0]);
            }
            else{
              player.addJudge('bingliang',cards[0]);
            }
            player.useCard({name:'tao'},targets).delayx=false;
          },
          ai:{
            threaten:1.5,
            save:true,
            order:9,
            result:{
              player:function(player){
                return ai.get.effect(player,{name:'lebu'},player,player);
              },
              target:function(player,target){
                return ai.get.effect(target,{name:'tao'},player,target);
              },
            },
          },
        },
        "hj_jl_xiyu":{ //细语
 audio:"ext:魂将:2",
          trigger:{
            player:"phaseBegin",
          },
          direct:true,
          content:function(){
            'step 0'
            player.chooseTarget('细语：弃置一名角色的一张牌，然后该角色进行一个额外的出牌阶段',function(card,player,target){
              return target.num('he')>0;
            }).ai=function(target){
              if(target.num('h')>=3) return ai.get.attitude(_status.event.player,target);
              if(target.num('h')<2) return -ai.get.attitude(_status.event.player,target);
              return -ai.get.attitude(_status.event.player,target);
            }
            'step 1'
            if(result.bool){
              player.logSkill('hj_jl_xiyu',result.targets);
              event.targets=result.targets
              if(event.targets[0].num('he')>0){
                player.discardPlayerCard('he',event.targets[0]);
              }
              event.targets[0].phaseUse();
              event.targets[0].getStat().card={};
              event.targets[0].getStat().skill={};
            }
          },
        },
        "hj_jl_wanrou":{ //婉柔
audio:"ext:魂将:2",
            trigger:{
            player:["useCardAfter","respondAfter","discardAfter"],
          },
          direct:true,
          filter:function(event,player){
            if(event.cards){
              for(var i=0;i<event.cards.length;i++){
                if(get.suit(event.cards[i])=='diamond'&&event.cards[i].original!='j'&&get.position(event.cards[i])=='d') 
                  return true;
              }
            }
            return false;
          },
          content:function(){
            'step 0'
            player.chooseTarget('婉柔：选择一名目标令其摸一张牌').ai=function(target){
              return ai.get.attitude(player,target)
            }
            'step 1'
            if(result.bool){
              player.logSkill('hj_jl_wanrou',result.targets[0]);
              result.targets[0].draw();
            }
          },
          ai:{
            threaten:0.7,
          },
          group:"hj_jl_wanrou2",
        },
        "hj_jl_wanrou2":{ //婉柔2
          trigger:{player:'loseEnd'},
          filter:function(event,player){
            for(var i=0;i<event.cards.length;i++){
              if(event.cards[i].original=='j') return true;
            }
            return false;
          },
          direct:true,
          content:function(){
            'step 0'
            player.chooseTarget('婉柔：选择一名目标令其摸一张牌').ai=function(target){
              return ai.get.attitude(player,target)
            }
            'step 1'
            if(result.bool){
              player.logSkill('hj_jl_wanrou',result.targets[0]);
              result.targets[0].draw();
            }
          }
        },
        "hj_jl_guose":{ //国色
audio:"ext:魂将:2",
           group:"hj_jl_guose2",
          enable:"phaseUse",
          discard:false,
          filter:function(event,player){
            return player.countCards('he',{suit:'diamond'})>0;
          },
          prepare:"throw",
          position:"he",
          filterCard:{
            suit:"diamond",
          },
          filterTarget:function(card,player,target){
            if(target.hasJudge('lebu')) return true;
            return lib.filter.targetEnabled({name:'lebu'},player,target);
          },
          check:function(card){
            return 7-get.value(card);
          },
          content:function(){
            if(target.hasJudge('lebu')){
              target.discard(target.getJudge('lebu'));
            }
            else{
              var next=player.useCard({name:'lebu'},target,cards);
              next.animate=false;
              next.audio=false;
            }
            player.draw();
          },
          ai:{
            result:{
              target:function(player,target){
                if(target.hasJudge('lebu')) return -get.effect(target,{name:'lebu'},player,target);
                return get.effect(target,{name:'lebu'},player,target);
              },
            },
            order:9,
          },
        },
        "hj_jl_guose2":{
          trigger:{
            global:["phaseUseSkipped","phaseUseCancelled"],
          },
          forced:true,
          filter:function (event,player){
            return event.player!=player;
          },
          content:function (){
            player.draw();
          },
        },

        "hj_jl_jiaohua":{ //娇花
audio:"ext:魂将:2",
            group:"hj_jl_jiaohua_1",
          enable:"phaseUse",
          usable:1,
          viewAsFilter:function(player){
            return player.countCards('h',{suit:'heart'})>0;
          },
          viewAs:{
            name:"wuzhong",
          },
          filterCard:{
            suit:"heart",
          },
          check:function(card){
            return 8-get.value(card);
          },
          subSkill:{
            1:{
              sub:true,
              trigger:{
                player:"useCard",
              },
              forced:true,
              filter:function(event){
                return event.card.name=='wuzhong';
              },
              content:function(){
                trigger.nowuxie=true;
              },
            },
          },
          ai:{
            basic:{
              order:7.2,
              useful:4.5,
              value:9.2,
            },
            result:{
              target:2,
            },
            tag:{
              draw:2,
            },
          },
        },
        "hj_jl_hongyan":{ //红颜
audio:"ext:魂将:2",
          mod:{
            suit:function(card,suit){
              if(suit=='spade') return 'heart';
            },
            maxHandcardBase:function(player,num){
              if(player.countCards('e',function(card){
                return get.suit(card,player)=='heart';
              })) return player.maxHp;
            },
          },
        },
        "hj_jl_tianxiang":{ //天香
audio:"ext:魂将:2",
           trigger:{
            player:"damageBegin4",
          },
          direct:true,
          filter:function(event,player){
            return player.countCards('h',{suit:'heart'})>0&&event.num>0;
          },
          content:function(){
            "step 0"
            player.draw(),
            player.chooseCardTarget({
              filterCard:function(card,player){
                return get.suit(card)=='heart'&&lib.filter.cardDiscardable(card,player);
              },
              filterTarget:function(card,player,target){
                return player!=target;
              },
              // position:'he',
              ai1:function(card){
                return 10-get.value(card);
              },
              ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                var trigger=_status.event.getTrigger();
                var da=0;
                if(_status.event.player.hp==1){
                  da=10;
                }
                var eff=get.damageEffect(target,trigger.source,target);
                if(att==0) return 0.1+da;
                if(eff>=0&&att>0){
                  return att+da;
                }
                if(att>0&&target.hp>1){
                  if(target.maxHp-target.hp>=3) return att*1.1+da;
                  if(target.maxHp-target.hp>=2) return att*0.9+da;
                }
                return -att+da;
              },
              prompt:get.prompt('hj_jl_tianxiang'),
              prompt2:lib.translate.hj_jl_tianxiang_info
            });
            "step 1"
            if(result.bool){
              player.discard(result.cards);
              var target=result.targets[0];
              player.chooseControlList(true,function(event,player){
                var target=_status.event.target;
                var att=get.attitude(player,target);
                if(target.hasSkillTag('maihp')) att=-att;
                if(att>0){
                  return 0;
                }
                else{
                  return 1;
                }
              },
              ['令'+get.translation(target)+'受到伤害来源对其造成的X点伤害，然后摸Y张牌（Y为其已损失体力值）',
              '令'+get.translation(target)+'失去X点体力，然后获得'+get.translation(result.cards)]).set('target',target);
              player.logSkill(event.name,target);
              trigger.cancel();
              event.target=target;
              event.card=result.cards[0];
            }
            else{
              event.finish();
            }
            "step 2"
            if(typeof result.index=='number'){
              event.index=result.index;
              if(result.index){
                event.related=event.target.loseHp(trigger.num);
              }
              else{
                event.related=event.target.damage(trigger.num,trigger.source||'nosource','nocard');
              }
            }
            else event.finish();
            "step 3"
            if(event.related.cancelled||target.isDead()) return;
            if(event.index&&card.isInPile()) target.gain(card,'gain2');
            else if(target.getDamagedHp()) target.draw(target.getDamagedHp());
          },
          ai:{
            "maixie_defend":true,
            effect:{
              target:function(card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return;
                if(get.tag(card,'damage')&&target.countCards('he')>1) return 0.7;
              },
            },
          },
        },
        "hj_jl_piaoling":{ //飘零
audio:"ext:魂将:2",
           trigger:{
            player:"phaseJieshuBegin",
          },
          frequent:true,
          content:function(){
            'step 0'
            player.judge(function(card){
              return get.suit(card)=='heart'?2:0;
            });
            'step 1'
            event.card=result.card;
            if(result.bool&&get.position(event.card,true)=='d'){
              player.chooseTarget('令一名角色获得'+get.translation(event.card)+'，或点【取消】将其置于牌堆顶').set('ai',function(target){
                var player=_status.event.player;
                var att=get.attitude(player,target);
                if(player==target) att/=2;
                return att;
              });
            }
            else event.finish();
            'step 2'
            if(result.targets&&result.targets.length){
              var target=result.targets[0];
              player.line(target,'green');
              target.gain(card,'gain2','log');
              if(player==target) player.chooseToDiscard('he',true);
            }
            else{
              card.fix();
              ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
              game.updateRoundNumber();
            }
          },
        },

        "hj_jl_beige":{ //悲歌
          audio:"ext:魂将:2",
          trigger:{
            global:"damageEnd",
          },
          forced:true,
          direct:true,
          priority:-1,
          checkx:function(event,player){
            var att1=get.attitude(player,event.player);
            var att2=get.attitude(player,event.source);
            return att1>0&&att2<=0;
          },
          filter:function (event,player){
            return player.countCards('he')&&
            event.source&&
            event.source!=player&&
            event.player.isAlive();
          },
          "prompt2":function (event,card){
            return '是否发动【悲歌】？','锁定技，每当一名角色('+get.translation(trigger.player)+')受到其他角色('+get.translation(trigger.source)+')造成的伤害时，若伤害来源不为你，你可以弃置一张牌令其进行一次判定，并根据最终判定花色执行其对应效果(X为此次伤害数值):♥️该角色恢复X点体力；♦️︎该角色摸1+X张牌；♣️伤害来源弃置1+X张牌；♠️伤害来源翻面并失去X点体力';
          },
          content:function (){
            "step 0"
            player.chooseToDiscard('he',get.prompt2('hj_jl_beige')).set('ai',function(card){
              return 8-get.useful(card);
            });
            "step 1"
            if(result.bool){
              player.logSkill('hj_jl_beige',trigger.player);
            }else{event.finish();}
            "step 2"
            if(result.bool){
              game.delay(0.5);
              trigger.player.judge();
            }else{event.finish();}
            "step 3"
            switch(get.suit(result.card)){
              case 'heart':trigger.player.recover(trigger.num);break;
              case 'diamond':trigger.player.draw(1+trigger.num);break;
              case 'club':trigger.source.chooseToDiscard('he',1+trigger.num,true);break;
              case 'spade':trigger.source.turnOver()&&trigger.source.loseHp(trigger.num);break;
            }

          },
          ai:{
            expose:0.3,
          },
        },
        "hj_jl_moshi":{ //默识
           audio:"ext:魂将:2",
          trigger:{
            player:"phaseDiscardBegin",
          },
          forced:true,
          direct:true,
          filter:function (event,player){
            return player.getHistory('useCard',function(evt){
              return evt.isPhaseUsing()&&['basic','trick','delay'].contains(get.type(evt.card));
            }).length>0&&player.countCards('h')>0;
          },
          content:function (){
            "step 0"
            event.history=player.getHistory('useCard',function(evt){
              return evt.isPhaseUsing()&&['basic','trick','delay'].contains(get.type(evt.card));
            })
            "step 1"
            event._result={};
            if(event.history.length&&player.countCards('h')){
              var card=event.history.shift().card;
              card={name:card.name,nature:card.nature};
              if(lib.filter.cardEnabled(card)){
                if(game.hasPlayer(function(current){
                  return player.canUse(card,current);
                })){
                  lib.skill.hj_jl_moshi_card.viewAs=card;
                  var next=player.chooseToUse();
                  if(next.isOnline()){
                    player.send(function(card){
                      lib.skill.hj_jl_moshi_card.viewAs=card;
                    },card)
                  }
                  next.set('openskilldialog','默识：将一张手牌当'+get.translation(card)+'使用');
                  next.set('norestore',true);
                  next.set('_backupevent','hj_jl_moshi_card');
                  next.backup('hj_jl_moshi_card');
                }
              }
            }
            "step 2"
            if(result&&result.bool) event.goto(1);
          },
          group:"hj_jl_moshi_card",
          subSkill:{
            card:{
              filterCard:function (card){
                return get.itemtype(card)=='card';
              },
              selectCard:true,
              popname:true,
              sub:true,
            },
          },
        },
      
        "hj_jl_chenqing":{ //陈情
           audio:"ext:魂将:2",
          trigger:{
            global:"dying",
          },
          usable:1,
          forced:true,
          direct:true,
          priority:100,
          filter:function (event,player){
            return event.player.hp<=0;
          },
          content:function (){
            "step 0"
            player.chooseTarget(get.prompt2('hj_jl_chenqing'),function(card,player,target){
              return target!=_status.event.getTrigger().player;
            }).set('ai',function(target){
              var player=_status.event.player;
              var trigger=_status.event.getTrigger();
              if(get.attitude(player,trigger.player)>0){
                var att1=get.attitude(target,player);
                var att2=get.attitude(target,trigger.player);
                var att3=get.attitude(player,target);
                if(att3<0) return 0;
                return att1/2+att2+att3;
              }
              else{
                return 0;
                // return get.attitude(player,target);
              }
            });
            "step 1"
            if(result.bool){
              event.target=result.targets[0];
              player.logSkill('hj_jl_chenqing',event,target);
              player.line('thunder',event.target);
              event.target.draw(5);
            }
            else{
              event.finish();
            }
            "step 2"
            var target=event.target;
            var tosave=trigger.player;
            var att=get.attitude(target,tosave);
            var hastao=target.countCards('h','tao');
            target.chooseToDiscard(4,true,'he').set('ai',function(card){
              var hastao=_status.event.hastao;
              var att=_status.event.att;
              if(!hastao&&att>0){
                var suit=get.suit(card);
                for(var i=0;i<ui.selected.cards.length;i++){
                  if(get.suit(ui.selected.cards[i])==suit){
                    return -4-get.value(card);
                  }
                }
              }
              if(att<0&&ui.selected.cards.length==3){
                var suit=get.suit(card);
                for(var i=0;i<ui.selected.cards.length;i++){
                  if(get.suit(ui.selected.cards[i])==suit){
                    return -get.value(card);
                  }
                }
                return -10-get.value(card);
              }
              return -get.value(card);
            }).set('hastao',hastao).set('att',att);
            "step 3"
            if(result.cards&&result.cards.length==4){
              var suits=[];
              for(var i=0;i<result.cards.length;i++){
                suits.add(get.suit(result.cards[i]));
              }
              if(suits.length==4){
                if(trigger.player.hp<1){
                  event.target.line(trigger.player);
                  trigger.player.recover(1-trigger.player.hp,event.target)
                }
              }
              else{
                if(player.hp>0){
                  player.loseHp();
                }
                player.gain(result.cards,'gain2');
                game.log(player,'获得了',result.cards);
              }
            }
          },
          ai:{
            expose:0.2,
            threaten:1.5,
            save:true,
          },
        },
      },
      translate:{
        "hj_jl_huncaocao":"魂曹操",
        "hj_jl_hunliubei":"魂刘备",
        "hj_jl_hunsunquan":"魂孙权",
        "hj_jl_hunzhangjiao":"魂张角",
        "hj_jl_hunguojia":"魂郭嘉",
        "hj_jl_hunsimayi":"魂司马懿",
        "hj_jl_hunxiahoudun":"魂夏侯惇",
        "hj_jl_hunzhangliao":"魂张辽",
        "hj_jl_hundianwei":"魂典韦",
        "hj_jl_hunguanyu":"魂关羽",
        "hj_jl_hunzhangfei":"魂张飞",
        "hj_jl_hunzhugeliang":"魂诸葛亮",
        "hj_jl_hunzhaoyun":"魂赵云",
        "hj_jl_hunhuangyueying":"魂黄月英",
        "hj_jl_hunzhouyu":"魂周瑜",
        "hj_jl_hunlvmeng":"魂吕蒙",
        "hj_jl_hunluxun":"魂陆逊",
        "hj_jl_hunganning":"魂甘宁",
        "hj_jl_hunsunshangxiang":"魂孙尚香",
        "hj_jl_hunlvbu":"魂吕布",
        "hj_jl_hunjiaxu":"魂贾诩",
        "hj_jl_hunsimahui":"魂司马徽",
        "hj_jl_hunhuatuo":"魂华佗",
        "hj_jl_hundiaochan":"魂貂蝉",
        "hj_jl_hundongzhuo":"魂董卓",
        "hj_jl_hunxuchu":"魂许褚",
        "hj_jl_hunzhenji":"魂甄姬",
        "hj_jl_hundaqiao":"魂大乔",
        "hj_jl_hunxiaoqiao":"魂小乔",
        "hj_jl_huncaiwenji":"魂蔡文姬",



        "hj_jl_zhishi":"治世",
        "hj_jl_zhishi_info":"出牌阶段限一次，你可以令一名其他角色选择一项：1、弃置一张基本牌，然后回复1点体力。2、受到你造成的1点伤害，然后该角色摸两张牌。",
        "hj_jl_guixin":"归心",
        "hj_jl_guixin_info":"当你受到伤害后，你可以随机获得每名其他角色区域里的一张牌，再摸X张牌（X为阵亡/败退的角色数），然后翻面。你的防御距离始终+1。",
        "hj_jl_feiying":"飞影",
        "hj_jl_feiying_info":"锁定技，若你的武将牌正面朝上，你使用【杀】无距离限制；若你的武将牌正面朝下，你不能成为【杀】的目标。",
        "hj_jl_zhaoxiang":"招降",
        "hj_jl_zhaoxiang_info":"当一名其他角色使用【杀】指定目标后，你可以令其选择一项：1、交给你一张牌。2、令此【杀】对该目标无效；若其或杀的目标在你的攻击范围内，你须先弃置一张手牌。",

        "hj_jl_junwang":"君望",
        "hj_jl_junwang_info":"锁定技，其他角色的出牌阶段开始时，若其手牌数不小于你，其须交给你一张手牌。",
        "hj_jl_jizhao":"激诏",
        "hj_jl_jizhao_info":"出牌阶段对每名其他角色限一次，你可以交给其至少一张手牌，并令其获得一个［诏］标记。拥有［诏］标记的角色回合结束时，若其本回合内未造成过伤害，其受到你造成的1点伤害并失去［诏］标记。",
        "hj_jl_longnu":"龙怒",
        "hj_jl_longnu_info":"出牌阶段限一次，你可以失去一点体力，然后选择一名其他角色，对其造成1点火焰伤害并弃置其一张牌。",
        "hj_jl_chouxi":"仇袭",
        "hj_jl_chouxi_info":"出牌阶段限两次，你可以弃置一张手牌并展示牌堆顶的两张牌，然后令一名其他角色选择一项：弃置一张与之均不同类别的牌，然后令你获得这些牌；或受到你造成的1点伤害并获得其中一张牌，然后你获得其余的牌。",


        "hj_jl_huju":"虎踞",
        "hj_jl_huju_info":"锁定技，其他角色的回合开始时，你摸一张牌。你的回合开始时，若你的手牌数为最多（或之一），你选择一项：1、失去1点体力；2、减1点体力上限，失去“虎踞”，获得“制衡”和“虎缚”。",
        "hj_jl_hufu":"虎缚 ",
        "hj_jl_hufu_info":"出牌阶段限一次，你可以令一名其他角色弃置X张牌（X为其装备区的牌数）。",
        "hj_jl_xionglve":"雄略",
        "hj_jl_xionglve_info":"摸牌阶段，你可以放弃摸牌，改为展示牌堆顶的两张牌，你获得其中一张牌，然后将另一张牌置于你的武将牌上，称为[略]。出牌阶段，你可以将一张基本牌或锦囊牌的[略]当与之同类别的任意一张牌（延时类锦囊牌除外）使用，将一张装备牌的[略]置于一名其他角色装备区内的相应位置。",
        "hj_jl_quanheng":"权衡",
        "hj_jl_quanheng_info":"出牌阶段限一次，你可以将至少一张手牌当一张【无中生有】或【杀】使用，若你以此法使用的牌被【无懈可击】或【闪】响应时，你摸等量的牌",
        "hj_jl_quanheng_wuxie":"权衡",
        "hj_jl_quanheng_wuxie_info":"",

        "hj_jl_xuanlei":"玄雷",
        "hj_jl_xuanlei_info":"锁定技，准备阶段，令所有判定区内有牌的角色受到1点雷电伤害",
        "hj_jl_dianjie":"电界",
        "hj_jl_dianjie_info":"你可以跳过你的摸牌阶段或出牌阶段，然后判定：若结果为黑色，你对一名角色造成1点雷电伤害；若结果为红色，你令至多两名武将牌未横置的角色将其武将牌横置。",
        "hj_jl_shendao":"神道",
        "hj_jl_shendao_info":"一名角色的判定牌生效前，你可以用一张手牌或场上的牌代替之。",
        "hj_jl_leihun":"雷魂",
        "hj_jl_leihun_info":"锁定技，你受到的雷电伤害均视为体力回复，并摸两张牌。",

        "hj_jl_tianji":"天机",
        "hj_jl_tianji_info":"任一角色的出牌阶段开始时，你可以观看牌堆顶的一张牌，然后你可以选择一项：用一张手牌替换之；若你的手牌数不是全场最多的(或之一)，你可以获得之。",
        "hj_jl_tianqi":"天启",
        "hj_jl_tianqi_info":"你的濒死状态除外，每当你需要使用或打出一张基本牌或非延时锦囊牌时，你可以声明之，然后亮出牌堆顶的一张牌，并将此牌当你所述之牌使用或打出，若其与你所述之牌不为同一类别，你须先失去1点体力。（你的出牌阶段限一次）",
        "hj_jl_tianqi2":"天启",
        "hj_jl_tianqi2_info":"",
        "hj_jl_tianqi3":"天启",
        "hj_jl_tianqi3_info":"",
        "hj_jl_tianqi4":"天启",
        "hj_jl_tianqi4_info":"",
        "hj_jl_tianqi5":"天启",
        "hj_jl_tianqi5_info":"",
        "hj_jl_guimou4":"鬼谋",
        "hj_jl_guimou4_info":"锁定技，你跳过弃牌阶段并且不能成为延时类锦囊的目标；你可以在合理的情况下视为使用了一张【无懈可击】",
        "hj_jl_yiji":"遗计",
        "hj_jl_yiji_info":"你死亡时，可以令一名其他角色增加1点体力上限，恢复1点体力，摸两张牌，最后获得技能【遗策】",
        "hj_jl_yice":"遗策",
        "hj_jl_yice_info":"出牌阶段限一次，你可以视为使用了一张任意非延时锦囊。",

        "hj_jl_zhuizun":"追尊",
        "hj_jl_zhuizun_info":"限定技，当你进入濒死状态时，你可以恢复体力至1点，令所有其他角色依次交给你一张手牌。然后当前回合结束后，你进行一个额外的回合。",
        "hj_jl_guicai":"鬼才",
        "hj_jl_guicai_info":"在任意角色的判定牌生效前，你可以选择一项：1、打出一张手牌代替之。2、亮出牌堆顶的一张牌代替之。",
        "hj_jl_jilve":"极略",
        "hj_jl_jilve_info":"出牌阶段，你可以摸一张牌，然后选择一项：使用一张牌，或弃置一张牌。若你以此法弃置牌，则本回合此技能失效。",
        "hj_jl_jilve2":"极略",
        "hj_jl_jilve2_info":"",
        "hj_jl_tongtian":"通天",
        "hj_jl_tongtian_info":"限定技，出牌阶段你可以弃置任意张花色不同的牌，然后根据花色获得相对应技能:♠·〖反馈〗； ♥·〖观星〗；♣·〖完杀〗；♦·〖制衡〗",

        "hj_jl_ganglie":"刚烈",
        "hj_jl_ganglie_info":"出牌阶段开始时，你可以失去1点体力，若如此做，你本回合下一次造成的伤害+1。且本回合你每造成1点伤害，回合结束时你便摸一张牌",
        "hj_jl_danjing":"啖睛",
        "hj_jl_danjing_info":"出牌阶段限一次，你可以失去1点体力，然后令一名其他角色摸三张牌或弃置三张牌。",
        "hj_jl_zhonghun":"忠魂",
        "hj_jl_zhonghun_info":"当你死亡时，你可以令一名其他角色获得你当前的所有技能。",

        "hj_jl_nizhan":"逆战",
        "hj_jl_nizhan_info":"每当一名角色受到【杀】或【决斗】造成的一次伤害时，你可以将一枚［袭］标记放置在该角色或伤害来源(不为你)的武将牌上。",
        "hj_jl_wuwei":"无畏",
        "hj_jl_wuwei_info":"摸牌阶段，你可以放弃摸牌，改为亮出牌堆顶的三张牌，其中每有一张基本牌，你便可弃置此牌视为对一名其他角色使用一张无视距离且不计入次数的【杀】，然后获得其余手牌。",
        "hj_jl_cuifeng":"摧锋",
        "hj_jl_cuifeng_info":"锁定技，回合结束阶段，若场上的［袭］标记总数不小于4，你须依次从每名被标记的角色处获得等同于其［袭］标记数量的手牌。若该角色手牌不足，则你获得其全部手牌，然后该角色受到你对其造成的1点伤害。最后移除场上全部的［袭］标记。",
        "hj_jl_weizhen":"威震",
        "hj_jl_weizhen_info":"回合开始阶段，你可以移除场上全部的［袭］标记，然后摸等同于［袭］标记数量的牌。",

        "hj_jl_zhiji":"掷戟",
        "hj_jl_zhiji_info":"出牌阶段限一次，你可以弃置至少一张武器牌，然后对一名其他角色造成等量的伤害。当你受到伤害后，你可以从弃牌堆或牌堆随机获得一张武器牌。",
        "hj_jl_kuangxi":"狂袭",
        "hj_jl_kuangxi_info":"锁定技，在你回合外，你是所有伤害的来源。",

        "hj_jl_wushen":"武神",
        "hj_jl_wushen_info":"锁定技，你的【杀】和【桃】均视为【决斗】",
        "hj_jl_suohun":"索魂",
        "hj_jl_suohun_info":"锁定技，每当你受到1点伤害后，伤害来源(除你以外)获得一个［魂］标记。当你进入濒死状态时，减一半(向上取整)的体力上限并回复体力至体力上限，拥有［魂］标记的角色依次弃置所有的［魂］标记，然后受到与弃置的［魂］标记数量相同的伤害。",
        "hj_jl_suohun2":"索魂",
        "hj_jl_suohun2_info":"",
        "hj_jl_wuhun":"武魂",
        "hj_jl_wuhun_info":"锁定技，当你死亡后，你选择一名角色，令其进行一次判定：若结果花色点数不为♥️2~9，其立即死亡，否则，其失去一点体力上限并失去所有技能。",

        "hj_jl_paoxiao":"咆哮",
        "hj_jl_paoxiao_info":"出牌阶段，当你使用【杀】对目标角色造成一次伤害并结算完毕后，你可以摸一张牌，然后选择一项：使用一张【杀】，或令该角色弃置你的一张牌。",
        "hj_jl_shayi":"杀意",
        "hj_jl_shayi_info":"锁定技，出牌阶段开始时，你展示所有手牌，若有【杀】，你摸一张牌；若没有【杀】，你于本阶段可以将一张黑色牌当【杀】使用，且你使用【杀】无距离限制、无次数限制。",
        "hj_jl_zhenhun":"震魂",
        "hj_jl_zhenhun_info":"出牌阶段限一次，你可以令所有其他角色的非锁定技于本阶段内无效。",

        "hj_jl_kuangfeng":"狂风",
        "hj_jl_kuangfeng_info":"出牌阶段开始时，你可以选择一名角色，你弃置该角色一张牌，然后该角色本回合内获得\"风\"。锁定技，有\"风\"的角色受到的火焰伤害＋1；受到雷属性伤害后随机弃置两张牌。锁定技，有\"风\"的角色受到伤害后，你摸一张牌。",
        "hj_jl_kuangfeng2":"狂风",
        "hj_jl_kuangfeng2_info":"",
        "hj_jl_kuangfeng3":"狂风",
        "hj_jl_kuangfeng3_info":"",
        "hj_jl_kuangfeng4":"狂风",
        "hj_jl_kuangfeng4_info":"",
        "hj_jl_kuangfeng5":"狂风",
        "hj_jl_kuangfeng5_info":"",
        "hj_jl_kf_huo":"狂风-火",
        "hj_jl_kf_huo_info":"",
        "hj_jl_kf_lei":"狂风-雷",
        "hj_jl_kf_lei_info":"",
        "hj_jl_qixing":"七星",
        "hj_jl_qixing_info":"分发起始手牌前，你将获得起始手牌改为观看牌堆顶的十一张牌并获得其中的四张牌，然后将其余的牌扣置于武将牌旁，称为［星］，摸牌阶段结束时，你可以用至少一张手牌替换等量的［星］。",
        "hj_jl_qixing2":"七星",
        "hj_jl_qixing2_info":"",
        "hj_jl_dawu":"大雾",
        "hj_jl_dawu_info":"回合结束阶段开始时，你可以将至少一张［星］置入你选择的等量角色上，若如此做，每当该角色于你的下回合开始之前受到的非雷电伤害结算开始时，你防止此伤害。若因此而成功防止伤害，你下回合开始时回收该［星］，否则置入弃牌堆。",
        "hj_jl_dawu2":"大雾",
        "hj_jl_dawu2_info":"",
        "hj_jl_weiwo":"帷幄",
        "hj_jl_weiwo_info":"锁定技，当你有手牌时，你防止受到的属性伤害；当你没有手牌时，你防止受到的非属性伤害。",

        "hj_jl_juejing":"绝境",
        "hj_jl_juejing_info":"锁定技，一名角色的回合开始时，若你的体力值：为1，你摸一张牌；大于1，你失去1点体力，然后摸两张牌。",
        "hj_jl_longying":"龙影",
        "hj_jl_longying_info":"锁定技，你的手牌上限+2；当你进入或脱离濒死状态时，你摸一张牌。",
        "hj_jl_relonghun":"龙魂",
        "hj_jl_relonghun_info":"你可以将同花色的一至两张牌按下列规则使用或打出：♥当【桃】；♦当【火杀】；♣当【闪】；♠当【无懈可击】；若你以此法使用了两张红色牌，则此牌回复值或伤害值+1；若你以此法使用了两张黑色牌，则你弃置当前回合角色一张牌。",
        "hj_jl_longhun1":"龙魂♥︎",
        "hj_jl_longhun1_info":"",
        "hj_jl_longhun2":"龙魂♦︎",
        "hj_jl_longhun2_info":"",
        "hj_jl_longhun3":"龙魂♠︎",
        "hj_jl_longhun3_info":"",
        "hj_jl_longhun4":"龙魂♣︎",
        "hj_jl_longhun4_info":"",
        "hj_jl_longhun":"龙魂",
        "hj_jl_longhun_info":"你可以将同花色的一至两张牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当普【无懈可击】。若你以此法使用了两张红色牌，则此牌回复值或伤害值+1。若你以此法使用了两张黑色牌，则你弃置当前回合角色一张牌。",

        "hj_jl_hemou":"合谋",
        "hj_jl_hemou_info":"其他角色的出牌阶段开始时，你可以将一张手牌正面朝上交给该角色，该角色本阶段限一次，可将一张与之相同花色的手牌按下列规则使用：♠当【决斗】；♣当【借刀杀人】；♥当【顺手牵羊】；♦当【火攻】",
        "hj_jl_zhiming":"知命",
        "hj_jl_zhiming_info":"其他角色的回合开始阶段开始时，若其有手牌，你可以弃置一张手牌，然后弃置其一张手牌，若两张牌颜色相同，你令其跳过此回合的摸牌阶段或出牌阶段。",
        "hj_jl_suyin":"夙隐",
        "hj_jl_suyin_info":"你的回合外，当你失去最后的手牌时，可令一名其他角色将其武将牌翻面。",
        "hj_jl_qicai":"奇才",
        "hj_jl_qicai_info":"每当你失去一次手牌时，你可以进行判定，若结果为红色，你摸一张牌。",

        "hj_jl_yingcai":"英才",
        "hj_jl_yingcai_info":"摸牌阶段，你可以放弃摸牌，改为展示牌堆顶的一张牌，你重复此流程直到你展示出第三种花色的牌时，将这张牌置入弃牌堆，然后获得其余的牌。",
        "hj_jl_fangjian":"反间",
        "hj_jl_fangjian_info":"出牌阶段限一次，你可以将一张手牌置于牌堆顶，然后令一名其他角色选择一种花色后摸一张牌并展示之，若此牌与所选花色不同，你对其造成1点伤害。",
        "hj_jl_qinyin":"琴音",
        "hj_jl_qinyin_info":"弃牌阶段开始时，若你的有手牌，可以选择一项:1.摸两张牌，然后令所有角色各失去一点体力；2.弃一张牌，然后令所有角色各回复2点体力。",
        "hj_jl_yeyan":"业炎",
        "hj_jl_yeyan_info":"限定技，出牌阶段，你可以弃置任意张手牌（至多为4），然后对一至两名角色各造成等量的火属性伤害，若你以此法弃置的手牌数不少于三，你须先失去2点体力。",

        "hj_jl_shixue":"誓学",
        "hj_jl_shixue_info":"当你使用【杀】指定目标后，你可以摸两张牌，当此【杀】被【闪】响应后，你须弃置一张牌。",
        "hj_jl_shixue2":"誓学",
        "hj_jl_shixue2_info":"",
        "hj_jl_guoshi":"国士",
        "hj_jl_guoshi_info":"任一角色的回合开始阶段开始时，你可以观看牌堆顶的两张牌，然后可将其中任意张牌置于牌堆底；任一角色的回合结束阶段开始时，你可以令其获得本回合因弃置或判定进入弃牌堆的一张牌。",
        "hj_jl_shelie":"涉猎",
        "hj_jl_shelie_info":"锁定技，摸牌阶段，你摸四张牌，你须依次指定以此法获得牌的类别，然后从牌堆随机获得之。",
        "hj_jl_gongxin":"攻心",
        "hj_jl_gongxin_info":"出牌阶段限一次，你可以观看一次任意一名角色的手牌并展示其中所有的红桃牌，然后若展示的牌数：为1，你弃置之并对其造成1点伤害；大于1，你获得其中一张。",

        "hj_jl_dailao":"待劳",
        "hj_jl_dailao_info":"出牌阶段限一次，你可以令一名其他角色与你各摸一张牌或各弃置一张牌，然后你与其依次将武将牌翻面。",
        "hj_jl_ruya":"儒雅",
        "hj_jl_ruya_info":"当你失去最后的手牌时，你可以翻面并将手牌补至你体力上限的张数。",
        "hj_jl_jieyan":"劫焰",
        "hj_jl_jieyan_info":"当一张红色【杀】或红色非延时锦囊牌仅指定一名角色为目标后，你可以弃置一张手牌令其无效，然后对目标角色造成1点火焰伤害。",
        "hj_jl_fenying":"焚营",
        "hj_jl_fenying_info":"当一名角色受到火焰伤害后，若你的手牌数不大于体力上限，你可以弃置一张红色牌，然后对该角色或与其距离最近的一名角色造成等量的火焰伤害。",

        "hj_jl_youxia":"游侠",
        "hj_jl_youxia_info":"出牌阶段，若你的武将牌正面朝上，你可以将你的武将牌翻面，然后从一至两名其他角色处各获得一张牌；锁定技，若你的武将牌背面朝上，你不能成为【杀】和【决斗】的目标。",
        "hj_jl_lvezhen":"掠阵",
        "hj_jl_lvezhen_info":"当你使用【杀】指定目标后，你可以将牌堆顶的三张牌置入弃牌堆，其中每有一张非基本牌，你弃置目标角色一张牌。",
        "hj_jl_youlong":"游龙",
        "hj_jl_youlong_info":"出牌阶段，若弃牌堆的牌数多于牌堆，你可以将黑色手牌当【顺手牵羊】使用。",

        "hj_jl_xiwu":"习武",
        "hj_jl_xiwu_info":"当你使用的【杀】被目标角色的【闪】响应后，你可以摸一张牌，然后弃置其一张手牌。",
        "hj_jl_yinmeng":"姻盟",
        "hj_jl_yinmeng_info":"出牌阶段限X次，若你有手牌，你可以展示一名其他男性角色的一张手牌，然后展示你的一张手牌，若两张牌类型相同，你与其各摸一张牌；若不同，你弃置其展示的牌，X为你所损失的体力且至少为1",
        "hj_jl_yinmeng2":"姻盟",
        "hj_jl_yinmeng2_info":"",
        "hj_jl_xianzhu":"贤助",
        "hj_jl_xianzhu_info":"当一名角色回复体力后，或失去装备区里的牌后，你可以令其摸两张牌。",
        "hj_jl_xianzhu2":"贤助",
        "hj_jl_xianzhu2_info":"",
        "hj_jl_liangyuan":"良缘",
        "hj_jl_liangyuan_info":"限定技，出牌阶段，你可以选择一名其他男性角色，则于本局游戏中，你的自然回合结束时，该角色进行一个额外的回合。",
        "hj_jl_liangyuan2":"良缘",
        "hj_jl_liangyuan2_info":"",

        "hj_jl_kuangbao":"狂暴",
        "hj_jl_kuangbao_info":"游戏开始时你获得4枚暴怒标记，游戏中你每受到或造成1点伤害，获得1枚暴怒标记。",
        "hj_jl_wumou":"无谋",
        "hj_jl_wumou_info":"锁定技，你每使用一张非延时类锦囊(在它结算前)，弃掉1枚暴怒标记或受到1点伤害。",
        "hj_jl_wuqian":"无前",
        "hj_jl_wuqian_info":"出牌阶段你可以弃2枚暴怒标记，你获得技能“无双”且使用【杀】使目标防具无效，并摸X张牌（X为已损失体力），直到回合结束。",
        "hj_jl_shenfen":"神愤",
        "hj_jl_shenfen_info":"出牌阶段限一次，弃4枚暴怒标记，你对每名其他角色各造成1点伤害，其他角色先弃掉各自装备区里所有的牌，再各弃所有手牌，然后将你的武将牌翻面并恢复1点体力。",

        "hj_jl_yanmie":"湮灭",
        "hj_jl_yanmie_info":"出牌阶段，你可以弃置一张花色为♠的牌，令一名其他角色先弃置所有手牌再摸等量的牌并展示之，然后你可以弃置其中所有非基本牌，并对其造成等量的伤害。",
        "hj_jl_shunshi":"顺世",
        "hj_jl_shunshi_info":"当你成为其他角色使用【杀】或【桃】的目标后，你可以令你与除该角色外的1-2名其他角色各摸一张牌，然后这些角色也成为此牌的目标。",
        "hj_jl_weimu":"帷幕",
        "hj_jl_weimu_info":"锁定技，当你成为其他角色使用的锦囊牌的目标时，取消之。",
        "hj_jl_luanwu":"乱武",
        "hj_jl_luanwu_info":"限定技，出牌阶段，你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】，否则失去1点体力。",

        "hj_jl_zhitian":"知天",
        "hj_jl_zhitian_info":"锁定技，回合开始时，你须将所有手牌交给一名角色，并令其随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技除外），然后你失去1点体力。",
        "hj_jl_yinshi":"隐世",
        "hj_jl_yinshi_info":"锁定技，当你受到伤害时，你防止之，然后摸一张牌。",

        "hj_jl_xingyi":"行医",
        "hj_jl_xingyi_info":"出牌阶段限一次，你可以获得一名有手牌的其他角色一张手牌，然后令其回复1点体力。",
        "hj_jl_guagu":"刮骨",
        "hj_jl_guagu_info":"当一名角色进入濒死状态时限两次，你可以弃置其所有手牌（至少一张），然后该角色回复1点体力。若你以此法弃置其两张或更多的手牌时，该角色摸一张牌。",
        "hj_jl_jishi":"济世",
        "hj_jl_jishi_info":"出牌阶段限一次，你可以弃置一张花色为♥的牌，然后令一名角色先弃置所有手牌再摸等量的牌并展示；其中每有一张非基本牌，你令其回复1点体力，以此法回复的过量体力效果改为令其摸等量的牌。",
        "hj_jl_xuanxin":"悬心",
        "hj_jl_xuanxin_info":"当一名角色受到伤害时，你可以从弃牌堆获得一张花色为♥的牌，然后可以交给其一张牌。",

        "hj_jl_manwu":"曼舞",
        "hj_jl_manwu_info":"出牌阶段限一次，你可以展示一名男性角色的一张手牌，若此牌花色为♦，将之置于该角色的判定区内，视为【乐不思蜀】；若此牌花色不为♦，你获得之。",
        "hj_jl_baiyue":"拜月",
        "hj_jl_baiyue_info":"回合结束阶段开始时，你可以获得本回合其他角色进入弃牌堆的一张牌。",
        "hj_jl_tianzi":"天姿",
        "hj_jl_tianzi_info":"摸牌阶段，你可以放弃摸牌，然后令所有其他角色依次选择一项：1、交给你一张牌；2、令你摸一张牌。",
        "hj_jl_meixin":"魅心",
        "hj_jl_meixin_info":"出牌阶段限一次，你可以弃置一张牌并选择一名其他男性角色，若如此做，本阶段当你使用一张基本牌后，你令其弃置一张牌；当你使用一张锦囊牌后，你获得其一张牌；当你使用一张装备牌后，你对其造成1点伤害。",
        "hj_jl_meixin2":"魅心",
        "hj_jl_meixin2_info":"",
        "hj_jl_meixin3":"魅心",
        "hj_jl_meixin3_info":"",

        "hj_jl_baozheng":"暴征",
        "hj_jl_baozheng_info":"锁定技，回合结束阶段开始时，你令其他角色依次选择一项：交给你一张牌；或弃置两张牌，然后对你造成1点伤害。",
        "hj_jl_lingnu":"凌怒",
        "hj_jl_lingnu_info":"锁定技，回合结束时，若你于此回合受到2点或更多的伤害，你减1点体力上限，然后从其他角色处依次获得一张牌。",
        "hj_jl_canlue":"残掠",
        "hj_jl_canlue_info":"你每从其他角色处获得一张牌时，可对其造成1点伤害；其他角色每获得你一张牌时，须弃置一张牌。",
        "hj_jl_canlue2":"残掠",
        "hj_jl_canlue2_info":"",
        "hj_jl_baolian":"暴敛",
        "hj_jl_baolian_info":"锁定技，游戏开始时，你掠夺其他所有角色一点体力值上限并恢复等量体力值；结束阶段，你恢复一点体力值并失去一点以此法获得的体力值上限",


        "hj_jl_aozhan":"鏖战",
        "hj_jl_aozhan_info":"每当你因杀或决斗造成或受到一点伤害后，你可将牌堆顶的一张牌置于你的武将牌上，称为『战』。出牌阶段限一次，你可以选择一项：1、将所有『战』收入手牌。2、将所有『战』弃置，然后摸等量的牌。",
        "hj_jl_aozhan2":"鏖战",
        "hj_jl_aozhan2_info":"",
        "hj_jl_huxiao":"虎啸",
        "hj_jl_huxiao_info":"出牌阶段，当你使用杀造成伤害时，若你的武将牌正面向上，你可以令此伤害+1并摸一张牌。若如此做，则此杀结算完毕后，将你的武将牌翻面并结束当前回合。",
        "hj_jl_huxiao2":"虎啸",
        "hj_jl_huxiao2_info":"",
        "hj_jl_shixve":"噬血",
        "hj_jl_shixve_info":"每回合限一次，当你造成伤害后，你恢复1点体力并摸一张牌。",

        "hj_jl_liuyun":"流云",
        "hj_jl_liuyun_info":"出牌阶段限一次，你可以横置你的武将牌并弃置一张黑色牌，然后令一名角色选择一项：回复1点体力，或摸两张牌。",
        "hj_jl_lingbo":"凌波",
        "hj_jl_lingbo_info":"一名角色的回合开始阶段，你可以重置你的武将牌，然后将场上的一张牌置于牌堆顶。",
        "hj_jl_qingcheng":"倾城",
        "hj_jl_qingcheng_info":"你可以横置你的武将牌，视为你使用或打出一张杀；你可以重置你的武将牌，视为你使用或打出一张闪。",
        "hj_jl_qingcheng2":"倾城",
        "hj_jl_qingcheng2_info":"",
        "hj_jl_luoshen":"洛神",
        "hj_jl_luoshen_info":"准备阶段，若你没有\"洛\"标记，你可以选择至多两名其他角色，你摸一张牌并令他们各摸两张牌。如若此做，你获得一个\"洛\"。锁定技，若你有\"洛\"，你跳过下一个摸牌阶段，然后失去\"洛\"。",
        "hj_jl_luoshen2":"洛神",
        "hj_jl_luoshen2_info":"",

        "hj_jl_fangxin":"芳馨",
        "hj_jl_fangxin_info":"当你需要使用一张【桃】时，你可以将一张♣牌当【兵粮寸断】或将一张♦牌当【乐不思蜀】对自己使用，若如此做，视为你使用一张【桃】",
        "hj_jl_xiyu":"细语",
        "hj_jl_xiyu_info":"你的回合开始时，你可以弃置一名角色的一张牌，然后该角色进行一个额外的出牌阶段。",
        "hj_jl_wanrou":"婉柔",
        "hj_jl_wanrou_info":"当你的♦牌或你判定区的牌进入弃牌堆时，你可以令一名角色摸一张牌。",
        "hj_jl_wanrou2":"婉柔",
        "hj_jl_wanrou2_info":"",
        "hj_jl_guose":"国色",
        "hj_jl_guose_info":"出牌阶段，你可以选择一项：1、将一张♦牌当做【乐不思蜀】使用；2、弃置一张♦牌并弃置场上的一张【乐不思蜀】。选择完成后，你摸一张牌；锁定技，当其他角色跳过出牌阶段后，你摸一张牌。",
        "hj_jl_guose2":"国色",
        "hj_jl_guose2_info":"",

        "hj_jl_jiaohua":"娇花",
        "hj_jl_jiaohua_info":"出牌阶段限一次，你的♥️手牌可以当做【无中生有】使用;锁定技，你使用的【无中生有】无法被【无懈可击】响应。",
        "hj_jl_hongyan":"红颜",
        "hj_jl_hongyan_info":"锁定技，你的♠️花色的手牌视为♥️花色；若你的装备区内有♥️花色的牌，则你的手牌上限视为体力上限。",
        "hj_jl_tianxiang":"天香",
        "hj_jl_tianxiang_info":"当你受到伤害时，你摸一张牌，然后你可以弃置一张♥️手牌，防止此次伤害并选择一名其他角色，然后你选择一项：1、令其受到X点伤害，然后摸Y张牌（Y为其已损失体力值）；2、令其失去X点体力，然后获得你弃置的牌。(X为本次伤害点数)",
        "hj_jl_piaoling":"飘零",
        "hj_jl_piaoling_info":"结束阶段，你可以进行判定。若判定结果花色为♥️，则你选择一项：1、将此牌交给一名角色。若你交给了自己，则你弃置一张牌；2、将此牌置于牌堆顶。",

        "hj_jl_beige":"悲歌",
        "hj_jl_beige_info":"当一名角色受到其他角色造成的伤害时，若伤害来源不为你，你可以弃置一张牌令其进行一次判定，并根据最终判定花色执行其对应效果(X为此次伤害数值):♥️该角色恢复X点体力；♦️︎该角色摸1+X张牌；♣️伤害来源弃置1+X张牌；♠️伤害来源翻面并失去X点体力。",
        "hj_jl_moshi":"默识",
        "hj_jl_moshi_info":"你可以于弃牌阶段开始时将手牌依次当做你于本回合内的出牌阶段使用的非装备牌使用。",
        "hj_jl_chenqing":"陈情",
        "hj_jl_chenqing_info":"每名角色的回合限一次，当一名角色进入濒死状态时，你可以令一名存活角色摸五张牌并弃置四张牌。若弃置花色均不同，则视为其令该角色将体力值恢复至一点；否则，你获得所有弃置牌，若此时你未处于濒死状态，你失去一点体力。",

        //
      }
    },'极略篇');
    //why???
  }
  if(config.hj_bingmou){ //兵谋魂将包
    game.addCharacterPack({
      character:{
        "hj_bm_hunsunce":["male","shen","2/4",["hj_bm_bawang","hj_bm_jiang","hj_bm_zhiba","hj_bm_hunzi"],["zhu"]],
        "hj_bm_hunsunjian":["male","shen","4/5",["hj_bm_wulie","hj_bm_hunyou","hj_bm_polu","hj_bm_yinghun"],["zhu"]],
        "hj_bm_huncaoren":["male","shen",4,["hj_bm_jushou","hj_bm_lizhan"],[]],
        "hj_bm_huncaozhi":["male","shen","3/5",["hj_bm_zuijiu","hj_bm_luohua","hj_bm_shifu"],[]],
        "hj_bm_huncaochun":["male","shen",4,["hj_bm_xiaorui","hj_bm_shanjia"],[]],
        "hj_bm_huncaoying":["female","shen",4,["hj_bm_lingren","hj_bm_fujian"],[]],
        "hj_bm_hunyujin":["male","shen",4,["hj_bm_yizhong","hj_bm_zhenjun","hj_bm_jieyue"],[]],
        "hj_bm_hunzhanghe":["male","shen",4,["hj_bm_yuanlue","hj_bm_mingzhu"],[]],
        "hj_bm_hunguohuai":["male","shen",4,["hj_bm_jingce","hj_bm_tuifeng"],[]],
        "hj_bm_hunzhonghui":["male","shen",4,["hj_bm_quanji","hj_bm_yexin","hj_bm_paiyi"],[]],
        "hj_bm_hundengai":["male","shen",4,["hj_bm_tuntian","hj_bm_jixi","hj_bm_ziliang"],[]],
        "hj_bm_hunzhugedan":["male","shen",4,["hj_bm_gongao","hj_bm_weizhong"],[]],
        "hj_bm_hunpangtong":["male","shen",3,["hj_bm_xingkui","hj_bm_mingqi"],[]],
        "hj_bm_hunhuangzhong":["male","shen",4,["hj_bm_pozhen","hj_bm_liegong"],[]],
        "hj_bm_hunweiyan":["male","shen",4,["hj_bm_kuanglang","hj_bm_aogu"],[]],
        "hj_bm_hunlusu":["male","shen",3,["hj_bm_dewang","hj_bm_haoshi","hj_bm_dimeng"],[]],
        "hj_bm_huntaishici":["male","shen",4,["hj_bm_yizhen","hj_bm_dulie"],[]],
        "hj_bm_hunzuoci":["male","shen",4,["hj_bm_huanhua","hj_bm_dunshu"],[]],
        "hj_bm_hunzhangxiu":["male","shen",4,["hj_bm_xiongluan","hj_bm_congjian"],[]],
        "hj_bm_hunzhangrang":["male","shen",4,["hj_bm_luanzheng"],[]],
      },
      skill:{
        "hj_bm_bawang":{ //霸王
          trigger:{
            source:"damageEnd",
          },
          direct:true,
          forced:true,
          priority:100,
          content:function (){
            player.gainMaxHp(trigger.num);
          },
        },
        "hj_bm_jiang":{ //激昂
          trigger:{
            global:["useCard"],
          },
          filter:function(event,player){
            if(!(event.card.name=='juedou'||event.card.name=='sha')) return false;
            return player==event.player||event.targets.contains(player);
          },
          frequent:true,
          content:function(){
            var num=player.maxHp-player.hp;
            if(num>0&&player.isMinHp()){
              player.draw(num);
              if(num>player.hp) player.chooseToDiscard('he',true);
            }else{
              player.draw();
            }
          },
          ai:{
            effect:{
              target:function(card,player,target){
                if(card.name=='sha'||card.name=='juedou') return [1,0.6];
              },
              player:function(card,player,target){
                if(card.name=='sha'||card.name=='juedou') return [1,1];
              },
            },
          },
        },
        "hj_bm_zhiba":{ //制霸
          audio:"ext:魂将:2",
          trigger:{
            player:"useCardToBegin",
          },
          check:function(event,player){
            return get.attitude(player,event.target)<0;
          },
          filter:function(event,player){ 
            return (event.card.name=='sha'||event.card.name=='juedou')&&player.canCompare(event.target); 
          },
          logTarget:"target",
          content:function(){
            'step 0'
            player.chooseToCompare(trigger.target);
            'step 1'
            if(result.bool){
              trigger.directHit=true;
            }else{
              trigger.target.draw();
            }
          },
        },
        "hj_bm_hunzi":{ //魂姿
          derivation:["hj_bm_yingzi","hj_bm_yingyang","hj_bm_yinghun"],
          unique:true,
          skillAnimation:true,
          trigger:{
            player:"changeHp",
          },
          filter:function (event,player){
            return player.hp<=1&&!player.storage.hj_bm_hunzi;
          },
          forced:true,
          content:function (){
            "step 0"
            if(player.hp<1){
              player.recover(1-player.hp);
            }
            player.addSkill('hj_bm_yingzi');
            player.addSkill('hj_bm_yingyang');
            player.addSkill('hj_bm_yinghun');
            player.awakenSkill('hj_bm_hunzi');
            player.storage.hj_bm_hunzi=true;
            "step 1"
            while(_status.event.name!='phaseLoop'){
              _status.event=_status.event.parent;
            }
            game.resetSkills();
            _status.paused=false;
            _status.event.player=player;
            _status.event.step=0;
          },
          ai:{
            threaten:function (player,target){
              if(target.hp==1) return 2;
              return 1;
            },
            maixie:true,
            effect:{
              target:function (card,player,target){
                if(!target.hasFriend()) return;
                if(get.tag(card,'damage')==1&&target.hp==2&&!target.isTurnedOver()&&_status.currentPhase!=target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [0.5,1];
              },
            },
          },
        },
        "hj_bm_yingyang":{ //鹰扬
          trigger:{
            player:"compare",
            target:"compare",
          },
          filter:function(event){
            return !event.iwhile;
          },
          direct:true,
          content:function(){
            'step 0'
            var num1=player.maxHp-player.hp;
            var num2=player.maxHp+num1;
            event.num=num2;
            player.chooseControl('点数+'+event.num,'点数-'+event.num,'cancel2').set('prompt',get.prompt('hj_bm_yingyang')).set('ai',function(){
              if(_status.event.small) return 1;
              else return 0;
            }).set('small',trigger.small);
            'step 1'
            if(result.index!=2){
              player.logSkill('hj_bm_yingyang');
              if(result.index==0){
                player.popup('＋'+event.num);
                game.log(player,'拼点牌点数+'+event.num);
                if(player==trigger.player){
                  trigger.num1+=event.num;
                }
                else{
                  trigger.num2+=event.num;
                }
              }
              else{
                player.popup('－'+event.num);
                game.log(player,'拼点牌点数-'+event.num);
                if(player==trigger.player){
                  trigger.num1-=event.num;
                }
                else{
                  trigger.num2-=event.num;
                }
              }
            }

          },
        },
        "hj_bm_yingzi":{ //英姿
          trigger:{
            player:"phaseDrawBegin",
          },
          forced:true,
          content:function(){
            trigger.num+=player.maxHp-2;
          },
          ai:{
            threaten:1.5,
          },
          mod:{
            maxHandcard:function(player,num){
              var sun=player.maxHp-player.hp;
              if(player.hp<player.maxHp) return num=player.maxHp+sun;
            },
          },
        },
        "hj_bm_yinghun":{ //英魂
          trigger:{
            player:"phaseBegin",
          },
          filter:function(event,player){
            return player.hp<player.maxHp;
          },
          direct:true,
          content:function(){
            "step 0"
            player.chooseTarget(get.prompt('hj_bm_sunce_yinghun'),function(card,player,target){
              return player!=target;
            }).set('ai',function(target){
              var player=_status.event.player;
              if(player.maxHp-player.hp==1&&target.countCards('he')==0){
                return 0;
              }
              if(get.attitude(_status.event.player,target)>0){
                return 10+get.attitude(_status.event.player,target);
              }
              if(player.maxHp-player.hp==1){
                return -1;
              }
              return 1;
            });
            "step 1"
            if(result.bool){
              event.num=player.maxHp-player.hp;
              if(player.countCards('e')>=player.hp){
                event.num=player.maxHp;
              }
              player.logSkill('hj_bm_yinghun',result.targets);
              event.target=result.targets[0];
              if(event.num==1){
                event.directcontrol=true;
              }
              else{
                var str1='摸'+get.cnNumber(event.num,true)+'弃一';
                var str2='摸一弃'+get.cnNumber(event.num,true);
                player.chooseControl(str1,str2,function(event,player){
                  return _status.event.choice;
                }).set('choice',get.attitude(player,event.target)>0?str1:str2);
                event.str=str1;
              }
            }
            else{
              event.finish();
            }
            "step 2"
            if(event.directcontrol||result.control==event.str){
              event.target.draw(event.num);
              event.target.chooseToDiscard(true,'he');
            }
            else{
              event.target.draw();
              event.target.chooseToDiscard(event.num,true,'he');
            }
          },
          ai:{
            threaten:function(player,target){
              if(target.hp==1||target.countCards('e')>=target.hp) return 2;
              if(target.hp==target.maxHp) return 0.5;
              if(target.hp==2) return 1.5;
              return 0.5;
            },
            maixie:true,
            effect:{
              target:function(card,player,target){
                if(target.maxHp<=3) return;
                if(get.tag(card,'damage')){
                  if(target.hp==target.maxHp) return [0,1];
                }
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
              },
            },
          },
        },

        "hj_bm_wulie":{ //武烈
          trigger:{
            global:"phaseBegin",
          },
          direct:true,
          content:function(){
            'step 0'
            player.chooseBool('是否令'+get.translation(trigger.player)+'失去一点体力并摸一张牌，然后其本回合内首次造成的伤害＋1且每次造成伤害后摸一张牌？').ai=function(event,player){
              if(get.attitude(player,trigger.player)<=0&&trigger.player.hp<2) return true;
              if(get.attitude(player,trigger.player)<=0&&trigger.player.countCards('h')<2) return true;
              if(get.attitude(player,trigger.player)<=0&&trigger.player.countCards('j')) return true;
              if(get.attitude(player,trigger.player)>2&&trigger.player.hp>=3&&trigger.player.countCards('h')>=4&&trigger.player.maxHp>=4) return true;
              if(get.attitude(player,trigger.player)>2&&trigger.player.countCards('j')) return false;
              if(trigger.player==player&&player.hp>2) return true;
              return false;
            };
            'step 1'
            if(result.bool){
              player.logSkill('hj_bm_wulie',trigger.player);
              trigger.player.loseHp();
              trigger.player.draw();
              trigger.player.addTempSkill('hj_bm_wulie_buff1');
              trigger.player.addTempSkill('hj_bm_wulie_buff2');
            }
          },
          subSkill:{
            "buff1":{
              trigger:{
                source:"damageBegin",
              },
              popup:false,
              forced:true,
              content:function (){
                trigger.num++;
                player.removeSkill('hj_bm_wulie_buff1');
              },
              sub:true,
            },
            "buff2":{
              trigger:{
                source:"damageAfter",
              },
              mark:true,
              marktext:"武",
              popup:false,
              forced:true,
              content:function (){
                player.draw();
              },
              intro:{
                content:"下一次造成的伤害加一且每造成一次伤害便摸一张牌",
              },
              sub:true,
            },
          },
        },
        "hj_bm_hunyou":{ //魂佑
          trigger:{
            global:"damageBegin",
          },
          direct:true,
          filter:function (event,player){
            if(player.countCards('he')>0&&event.num>1) return true;
            if(player.countCards('he')>0&&event.num>event.player.hp) return true;
            return false;
          },
          content:function(){
            "step 0"
            player.chooseToDiscard('是否弃置一张牌令'+get.translation(trigger.player)+'即将受到的伤害值改为1？','he').set('ai',function(card){
              if(get.attitude(player,trigger.player)>2) return 8-get.useful(card);
              if(player.getEquip('baiyin')) return false;
              return false;
            });
            "step 1"
            if(result.bool){
              player.logSkill('hj_bm_hunyou',trigger.player);
              trigger.num=1;
            }
          },
        },
        "hj_bm_polu":{ //破虏
          init:function(player){
            player.storage.hj_bm_polu_sunjian=0;
          },
          intro:{
            content:"已发动了#次破虏",
          },
          mark:true,
          marktext:"破",
          trigger:{
            global:"dieAfter",
          },
          forced:true,
          content:function(){
            "step 0"
            game.countPlayer(function(current){
              if(current==player||player.getFriends().contains(current)){
                player.line(current,'white');
                current.draw(1+player.storage.hj_bm_polu_sunjian);
              }
            });
            "step 1"
            player.storage.hj_bm_polu_sunjian++;
            player.update();
          },
          ai:{
            threaten:1.5,
          },
        },

        "hj_bm_jushou":{ //据守
          trigger:{
            player:"phaseEnd",
          },
          content:function (){
            player.draw(3);
            player.moveCard();
            player.turnOver();
          },
          mod:{
            targetEnabled:function (card,player,target,now){
              if(target.isTurnedOver()){
                if(card.name=='juedou'||card.name=='huogong') return false;
              }
            },
          },
          group:["hj_bm_jushou_de"],
          subSkill:{
            de:{
              trigger:{
                player:"damageEnd",
              },
              filter:function(event,player){
                return player.isTurnedOver();
              },
              direct:true,
              content:function(){
                "step 0"
                player.chooseToDiscard('he',get.prompt('hj_bm_jushou_de'),'据守：是否弃置一张牌，然后将武将牌翻回正面？').set('ai',function(card){
                  return 8-get.value(card);
                });
                "step 1"
                if(result.bool){
                  player.logSkill('hj_bm_jushou'),
                  player.turnOver();
                  player.moveCard();
                }
                else{
                  event.finish();
                }
              },
              sub:true,
            },
          },
        },
        "hj_bm_lizhan":{ //励战
          trigger:{
            player:"turnOverAfter",
          },
          direct:true,
          content:function (){
            'step 0'
            player.chooseTarget(get.prompt('hj_bm_lizhan'),[1,Infinity],function(card,player,target){
              return target;
            }).set('ai',function(target){
              return get.attitude(player,target)>2;
            });
            'step 1'
            if(result.bool){
              player.logSkill('hj_bm_lizhan',result.targets);
              game.asyncDraw(result.targets);
            }
          },
          group:["hj_bm_lizhan_hp","hj_bm_lizhan_sha"],
          subSkill:{
            hp:{
              trigger:{
                global:["recoverAfter","loseMaxHpAfter"],
              },
              direct:true,
              content:function(){
                'step 0'
                player.chooseBool('是否让'+get.translation(trigger.player)+'摸一张牌？').ai=function(event,player){
                  return get.attitude(player,trigger.player)>2;
                };
                'step 1'
                if(result.bool){
                  player.logSkill('hj_bm_lizhan',trigger.player);
                  trigger.player.draw();
                }
              },
              sub:true,
            },
            sha:{
              trigger:{
                global:"shaBegin",
              },
              direct:true,
              content:function(){
                'step 0'
                player.chooseBool('是否让'+get.translation(trigger.target)+'摸一张牌？').ai=function(event,player){
                  return get.attitude(player,trigger.target)>2;
                };
                'step 1'
                if(result.bool){
                  player.logSkill('hj_bm_lizhan',trigger.target);
                  trigger.target.draw();
                }
              },
              sub:true,
            },
          },
          ai:{
            expose:0.3,
            threaten:1.3,
          },
        },

        "hj_bm_zuijiu":{ //醉酒
          init:function(player){
            if(!player.storage.hj_bm_zuijiu) player.storage.hj_bm_zuijiu=0;
          },
          marktext:"酒",
          intro:{
            content:"当前【杀】的伤害基数＋#",
          },
          mark:true,
          enable:"phaseUse",
          usable:1,
          filter:function (event,player){                            
            return player.isDamaged();            
          },
          content:function (){
            player.loseMaxHp();
            player.storage.hj_bm_zuijiu++;
          },
          group:["hj_bm_zuijiu_sha","hj_bm_zuijiu_binsi"],
          subSkill:{
            sha:{
              trigger:{
                player:"shaBegin",
              },
              logTarget:"target",
              forced:true,
              direct:true,
              popup:false,
              content:function(){
                player.logSkill('hj_bm_zuijiu');
                if(typeof trigger.extraDamage!='number'){
                  trigger.extraDamage=0;
                }
                var num=player.storage.hj_bm_zuijiu;
                trigger.extraDamage+=num;                 
                game.log(player,'对',trigger.target,'使用的',trigger.card,'的伤害基数＋',num);
              },
              sub:true,
            },
            binsi:{
              trigger:{
                player:"dying",
              },
              forced:true,
              direct:true,
              popup:false,
              content:function(){
                player.logSkill('hj_bm_zuijiu');
                player.gainMaxHp();
                player.draw();
              },
              sub:true,
            },
          },
          ai:{
            order:12,
            result:{
              player:function(player){
                if(player.maxHp>3) return 1;
                if(player.maxHp<=3) return -100;
                return 0;
              },
            },
          },
        },
        "hj_bm_luohua":{ //落花
          init:function(player){
            if(!player.storage.hj_bm_luohua) player.storage.hj_bm_luohua=0;
          },
          marktext:"花",
          intro:{
            content:"本轮还能获得#张梅花牌",
          },
          mark:true,
          forced:true,
          locked:true,
          charlotte:true,
          gainable:true,
          group:["hj_bm_luohua_shuaxin","hj_bm_luohua_kapai","hj_bm_luohua_panding"],
          subSkill:{
            shuaxin:{
              trigger:{
                global:"roundStart",
              },
              forced:true,
              direct:true,
              popup:false,
              content:function (){             
                player.logSkill('hj_bm_luohua');
                player.storage.hj_bm_luohua=7;
                player.syncStorage('hj_bm_luohua');
              },
              sub:true,
            },
            kapai:{
              trigger:{
                global:["useCardAfter","respondAfter","discardAfter"],
              },
              forced:true,
              direct:true,
              popup:false,
              filter:function(event,player){
                if(player==_status.currentPhase) return false;
                for(var i=0;i<event.cards.length;i++){
                  if(player.storage.hj_bm_luohua>0&&get.suit(event.cards[i])=='club'&&get.position(event.cards[i])=='d'){
                    return true;
                  }
                }
                return false;
              },
              content:function(){
                player.logSkill('hj_bm_luohua');
                var cards=[];
                for(var i=0;i<trigger.cards.length;i++){
                  if(get.suit(trigger.cards[i])=='club'&&get.position(trigger.cards[i])=='d'){
                    cards.push(trigger.cards[i]);
                  }
                }
                if(cards.length){
                  player.gain(cards,'log');
                  player.$gain2(cards);
                }
                player.storage.hj_bm_luohua--;
                player.syncStorage('hj_bm_luohua');
              },
              sub:true,
            },
            panding:{
              trigger:{
                global:"judgeAfter",
              },
              forced:true,
              direct:true,
              popup:false,
              filter:function(event,player){
                if(player==_status.currentPhase) return false;
                if(event.result.card.parentNode.id!='discardPile') return false;
                if(get.suit(event.result.card)=='club'&&player.storage.hj_bm_luohua>0) return true;
                return false;
              },
              content:function(){
                player.logSkill('hj_bm_luohua');
                player.gain(trigger.result.card,'log');
                player.$gain2(trigger.result.card);
                player.storage.hj_bm_luohua--;
                player.syncStorage('hj_bm_luohua');
              },
              sub:true,
            },
          },
        },
        "hj_bm_shifu":{ //诗赋
          init:function(player){
            if(!player.storage.hj_bm_shifu) player.storage.hj_bm_shifu=0;
          },
          marktext:"赋",
          intro:{
            content:"本回合内【杀】和【酒】的使用次数＋#，计算与其他角色的距离－#",
          },
          mod:{
            globalFrom:function(from,to,distance){
              if(from.storage.hj_bm_shifu) return distance-from.storage.hj_bm_shifu.length;
            },
            cardUsable:function (card,player,num){
              if((card.name=='sha'||card.name=='jiu')&&player.storage.hj_bm_shifu) return num+player.storage.hj_bm_shifu;
            },
          },
          forced:true,
          locked:true,
          charlotte:true,
          group:["hj_bm_shifu_mopai","hj_bm_shifu_huanpai","hj_bm_shifu_guiling"],
          subSkill:{
            mopai:{
              trigger:{
                player:"phaseDrawBefore",
              },
              forced:true,
              direct:true,
              popup:false,
              filter:function(event,player){
                return player.storage.hj_bm_luohua<=5;
              },
              content:function(){
                player.logSkill('hj_bm_shifu');
                trigger.cancel();
              },
              sub:true,
            },
            huanpai:{
              trigger:{
                player:"phaseUseBegin",
              },
              forced:true,
              direct:true,
              popup:false,
              filter:function(event,player){
                return player.countCards('h',{suit:'club'})>0;
              },
              content:function(){
                player.logSkill('hj_bm_shifu');
                var cards=player.getCards('h',{suit:'club'});
                player.discard(cards);
                var num=cards.length;
                player.draw(num);
                player.storage.hj_bm_shifu=num;
                player.markSkill('hj_bm_shifu');
                game.log(player,'本回合内使用杀和酒的次数＋',num,',计算与其他角色的距离－',num);
              },
              sub:true,
            },
            guiling:{
              trigger:{
                player:"phaseAfter",
              },
              forced:true,
              popup:false,
              direct:true,
              filter:function(event,player){
                return player.storage.hj_bm_shifu>0||player.storage.hj_bm_shifu==Infinity;
              },
              content:function(){
                player.storage.hj_bm_shifu=0;
                player.syncStorage('hj_bm_shifu');
                player.unmarkSkill('hj_bm_shifu');
              },
              sub:true,
            },
          },
        },

        "hj_bm_xiaorui":{ //骁锐
          trigger:{
            player:"phaseBeginStart",
          },
          frequent:true,
          content:function (){
            'step 0'
            var num1=game.players.length;
            player.draw(num1);
            'step 1'
            var sl=game.countPlayer(function(current){                                
              return current.group!=player.group;
            }
            );
            var num2=Math.max(1,sl);
            player.chooseToDiscard('he',true,num2);
            'step 2'
            if(result.cards&&result.cards.length){
              event.num=0;
              for(var i=0;i<result.cards.length;i++){
                if(get.type(result.cards[i])=='equip'){
                  event.num++;
                }
              }
            }
            if(event.num>0){
              var num3=result.cards.length;
              player.chooseTarget('是否对至多'+get.translation(num3)+'名其他角色视为使用一张【杀】？',[1,num3],function(card,player,target){  
                return target!=player;
              }).ai=function(target){
                var player=_status.event.player;
                return get.effect(target,{name:'sha'},player,player);
              };
            }
            else event.finish();
            'step 3'
            if(result.bool&&result.targets){
              player.logSkill('hj_bm_xiaorui',result.targets);
              player.useCard({name:'sha'},result.targets,false);
            }
            else event.finish();
          },
        },
        "hj_bm_shanjia":{ //缮甲
          group:["xinshanjia_count"],
          locked:false,
          mod:{
            aiValue:function(player,card,num){
              if((player.storage.xinshanjia||0)<3&&get.type(card)=='equip'&&!get.cardtag(card,'gifts')){
                if(get.position(card)=='e') return num/player.hp;
                return num*player.hp;
              }
            },
          },
          subSkill:{
            count:{
              forced:true,
              silent:true,
              popup:false,
              trigger:{
                player:"loseEnd",
              },
              filter:function(event,player){
                return event.es.length>0;
              },
              content:function (){
                lib.skill.xinshanjia.sync(player);
              },
              sub:true,
            },
          },
          audio:"shanjia",
          trigger:{
            player:"phaseUseBegin",
          },
          intro:{
            content:"本局游戏内已失去过#张装备区内的牌",
          },
          frequent:true,
          sync:function(player){
            var history=player.actionHistory;
            var num=0;
            for(var i=0;i<history.length;i++){
              for(var j=0;j<history[i].lose.length;j++){
                num+=history[i].lose[j].es.length;
              }
            }
            player.storage.xinshanjia=num;
            if(num>0) player.markSkill('xinshanjia');
          },
          content:function (){
            'step 0'
            player.draw(3);
            'step 1'
            lib.skill.xinshanjia.sync(player);
            var num=3-player.storage.xinshanjia;
            if(num>0){
              player.chooseToDiscard('he',true,num).ai=get.disvalue;
            }
            'step 2'
            var bool=true;
            if(result.cards){
              for(var i=0;i<result.cards.length;i++){
                if(['basic','trick'].contains(get.type(result.cards[i],'trick',result.cards[i].original=='h'?player:false))){
                  bool=false;break;
                }
              }
            }
            if(bool){
              player.chooseUseTarget({name:'sha'},'是否视为使用一张【杀】？',false);
            }
          },
          ai:{
            threaten:3,
            noe:true,
            reverseOrder:true,
            skillTagFilter:function(player){
              if(player.storage.xinshanjia>2) return false;
            },
            effect:{
              target:function(card,player,target){
                if(player.storage.xinshanjia<3&&get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
              },
            },
          },
        },

        "hj_bm_lingren":{ //凌人
          trigger:{
            global:["gameDrawAfter","dieAfter","roundStart"],
            player:"phaseBefore",
          },
          forced:true,
          popup:false,
          unique:true,
          derivation:["hj_bm_jianxiong","hj_bm_xingshang"],
          content:function(){
            player.removeAdditionalSkill('hj_bm_lingren');
            var num=game.countPlayer(function(current){                                
              return current.group=='wei'});
            var list=[];
            if(num>=1){
              list.push('hj_bm_jianxiong');
            }
            if(num>=2){
              list.push('hj_bm_xingshang');
            }
            if(list.length){
              player.addAdditionalSkill('hj_bm_lingren',list);
            }
          },
          group:["hj_bm_lingren_2","hj_bm_lingren_3","hj_bm_lingren_4"],
          subSkill:{
            "2":{
              trigger:{
                source:"damageBegin",
              },
              forced:true,
              filter:function (event,player){
                return event.card&&event.card.name=='sha';
              },
              content:function (){
                var a=game.countPlayer(function(current){                                
                  return current.group=='wei'});
                trigger.num+=a;
              },
              sub:true,
            },
            "3":{
              trigger:{
                player:"phaseUseBegin",
              },
              forced:true,
              content:function (){
                var list=['sha','juedou','nanman','wanjian','huogong'];
                player.gain(get.cardPile(list.randomGet()));
                player.$draw();
              },
              sub:true,
            },
            "4":{
              trigger:{
                player:"phaseEnd",
              },
              forced:true,
              content:function (){
                var list=['shan','tao','jiu','wuxie'];
                player.gain(get.cardPile(list.randomGet()));
                player.$draw();
              },
              sub:true,
            },
          },
        },
        "hj_bm_fujian":{ //伏间
          enable:"phaseUse",
          usable:1,
          selectTarget:1,
          filterTarget:function (card,player,target){
            if(player==target) return false;
            return (target.countCards('h')||target.isUnseen(2));
          },
          content:function (){
            "step 0"
            player.chooseCardButton(target,target.getCards('h')).set('filterButton',function(button){
             return get.color(button.link)=='red'; 
           });                                                                   
            "step 1"             
            if(result.bool){                           
              event.card=result.links[0];                       
              player.gain(event.card,target);
              target.$give(event.card,player);               
            }                                                

          },
          ai:{
            threaten:1.5,
            result:{
              target:function (player,target){
                return -target.countCards('h');
              },
            },
            order:10,
            expose:0.4,
          },
          group:["hj_bm_fujian_a"],
          subSkill:{
            a:{
              trigger:{
                player:["useCardAfter","respondAfter"],
              },
              forced:true,
              usable:1,
              filter:function(event,player){
                if(player==_status.currentPhase) return false;
                var name=event.card.name;
                var enemies=player.getEnemies();
                for(var i=0;i<enemies.length;i++){
                  if(enemies[i].countCards('h',name)){
                    return true;
                  }
                }
              },
              content:function(){
                var list=[];
                var name=trigger.card.name;
                var enemies=player.getEnemies();
                for(var i=0;i<enemies.length;i++){
                  list.addArray(enemies[i].getCards('h',name));
                }
                if(list.length){
                  var card=list.randomGet();
                  var owner=get.owner(card);
                  player.line(owner,'green');
                  owner.give(card,player,true);
                }
              },
              sub:true,
            },
          },
        },
        "hj_bm_jianxiong":{ //奸雄
          trigger:{
            player:"damageEnd",
          },
          content:function (){
            "step 0"
            player.draw();
            "step 1"
            if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0])=='d'){
              player.gain(trigger.cards,"gain2");
            }
          },
          ai:{
            maixie:true,
            maixie_hp:true,
            effect:{
              target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')&&player!=target) return [1,0.6];
              },
            },
          },
        },
        "hj_bm_xingshang":{ //行殇
          unique:true,
          gainable:true,
          trigger:{
            global:"dieEnd",
          },
          priority:5,
          filter:function(event){
            return event.playerCards&&event.playerCards.length>0
          },
          check:function(event){
            for(var i=0;i<event.playerCards.length;i++){
              if(event.playerCards[i].name=='du') return false;
            }
            return true;
          },
          content:function(){
            "step 0"
            player.gain(trigger.playerCards);
            player.$draw(trigger.playerCards);
            game.delay();
            "step 1"
            for(var i=0;i<trigger.playerCards.length;i++){
              trigger.cards.remove(trigger.playerCards[i]);
            }
            trigger.playerCards.length=0;
          },
        },

        "hj_bm_yizhong":{ //毅重
          trigger:{
            target:"shaBegin",
          },
          forced:true,
          filter:function (event,player){
            if(player.getEquip(2)) return false;
            return (event.card.name=='sha'&&get.color(event.card)=='black')
          },
          content:function (){
            trigger.cancel();
          },
          mod:{
            maxHandcard:function (player,num){
              if(player.hp<player.maxHp) return num+1;
            },
          },
        },
        "hj_bm_zhenjun":{ //镇军
          trigger:{
            player:"phaseBegin",
          },
          filter:function (event,player){
            return player.countCards('he')>0;
          },
          direct:true,
          check:function(event,player){
            return get.attitude(player,event.player)>0;
          },
          content:function (){
            'step 0'
            player.chooseCardTarget({
              selectCard:1,
              position:"he",
              filterTarget:function(card,player,target){
                return player!=target;
              },
              prompt:'将一张牌交给一名其他角色并根据你们体力的大小产生效果',
            });
            'step 1'
            if(result.bool){
              event.target=result.targets[0];
              result.targets[0].gain(result.cards,event.player);
              event.player.$give(result.cards.length,result.targets[0]);
              player.line(result.targets,'green');
              player.logSkill('hj_bm_zhenjun',result.targets[0]);
            }
            else{
              event.finish();
            }
            'step 2'
            if(player.hp<event.target.hp){
              player.chooseDrawRecover(2,true,function(event,player){
                if(player.hp<=2&&player.isDamaged()) return 'recover_hp';
                return 'draw_card';
              });
            }
            else if(event.target.hp<player.hp){
              event.target.chooseDrawRecover(2,true,function(event,player){
                if(player.hp<=2&&player.isDamaged()) return 'recover_hp';
                return 'draw_card';
              });
              player.loseHp();
              player.draw();
            }else if(event.target.hp=player.hp){
              player.draw();
              event.target.draw();
            }
          },
        },
        "hj_bm_jieyue":{ //节钺
          usable:1,
          enable:"phaseUse",
          filter:function(event,player){
            return player.countCards('h')>0;
          },
          filterTarget:function(card,player,target){
            return target.countCards('h')&&player!=target;
          },
          content:function(){
            'step 0'
            event.card=target.getCards('h').randomGet();
            target.showCards(event.card);
            player.chooseCard(get.translation(target)+'展示的牌是'+get.translation(event.card)+',请选择你展示的牌',true).ai=function(card){
              var att=ai.get.attitude(player,target);
              if(get.color(card)==get.color(event.card))
                if(get.type(card,'trick')==get.type(event.card,'trick')) return 1;
              if(get.suit(card)==get.suit(event.card)) return 1;
              return 0;
            }
            'step 1'
            player.showCards(result.cards[0]);
            if(get.color(result.cards[0])==get.color(event.card)){
              player.draw();
            }
            if(get.type(result.cards[0],'trick')==get.type(event.card,'trick')){
              target.discard(event.card);
            }
            if(get.suit(result.cards[0])==get.suit(event.card)){
              target.turnOver();
            }
          },
          ai:{
            order:8,
            result:{
              player:function (player,target){
                if(get.attitude(player,target)<0) return 1.5;
                return -1;
              },
            },
          },
        },

        "hj_bm_yuanlue":{ //远略
          trigger:{
            player:"phaseUseBegin",
          },
          filter:function(event,player){
            return player.storage.disableEquip!=undefined&&player.storage.disableEquip.length<5;
          },
          check:function(event,player){
            if(player.storage.disableEquip.length>=5) return false;
            return true;
          },
          content:function(){
            'step 0'
            player.chooseToDisable().ai=function(event,player,list){
              if(list.contains('equip5')) return 'equip5';
              return list.randomGet();
            };
            'step 1'
            player.draw(3);
            if(!player.storage.hj_bm_mingzhu){
              player.addTempSkill('hj_bm_yuanlue_buff1');
              player.addTempSkill('hj_bm_yuanlue_buff2');
            }else{
              player.addTempSkill('hj_bm_yuanlue_buff2');
            }
          },
          subSkill:{
            "buff1":{
              trigger:{
                player:"useCard",
              },
              forced:true,
              direct:true,
              content:function(){
                player.logSkill('hj_bm_yuanlue');
                player.draw();
              },
              sub:true,
            },
            "buff2":{
              mod:{
                targetInRange:function (){
                  return true;
                },
              },
              sub:true,
            },
          },
        },
        "hj_bm_mingzhu":{ //明主
          skillAnimation:true,
          trigger:{
            player:"phaseBeginStart",
          },
          forced:true,
          unique:true,
          juexingji:true,
          derivation:["hj_bm_qiaobian"],
          init:function(player){
            player.storage.hj_bm_mingzhu=false;
          },
          filter:function(event,player){
            return !player.storage.hj_bm_mingzhu&&((player.storage.disableEquip!=undefined&&player.storage.disableEquip.length>=5)||player.hp<=2);
          },
          content:function(){
            'step 0'
            player.enableEquip(1);
            player.enableEquip(2);
            player.enableEquip(3);
            player.enableEquip(4);
            player.enableEquip(5);
            var num=player.maxHp-player.countCards('h');
            if(num>0) player.draw(num);
            'step 1'
            player.addSkill('hj_bm_qiaobian');
            player.storage.hj_bm_mingzhu=true;
          },
        },
        "hj_bm_qiaobian":{ //巧变
          trigger:{
            player:"phaseBegin",
          },
          direct:true,
          content:function(){
            'step 0'
            player.chooseTarget('巧变：是否令一名其他角色废除一个装备栏？',function(card,player,target){
              return target!=player&&target.storage.disableEquip!=undefined&&target.storage.disableEquip.length<5;
            }).ai=function(target){
              return -get.attitude(target,player,player);
            };
            'step 1'
            if(result.bool){
              player.logSkill('hj_bm_qiaobian',result.targets[0]);
              result.targets[0].chooseToDisable();
              event.goto(2);
            }else{
              event.finish();
            }
            'step 2'
            if(player.storage.disableEquip!=undefined&&player.storage.disableEquip.length>0){
              player.chooseToEnable();
            }else{
              event.finish();
            }
          },
          group:["hj_bm_qiaobian_de"],
          subSkill:{
            de:{
              trigger:{
                player:"damageEnd",
              },
              filter:function(event,player){
                return player.storage.disableEquip!=undefined&&player.storage.disableEquip.length>0;
              },
              direct:true,
              check:function(event,player){
                return true;
              },
              content:function(){
                "step 0"
                event.num=trigger.num;
                "step 1"
                player.logSkill('hj_bm_qiaobian');
                player.chooseToEnable();
                event.num--;
                "step 2"
                if(event.num>0){
                  event.goto(1);
                }else{
                  event.finish();
                }
              },
              sub:true,
            },
          },
          ai:{
            maixie:true,
          },
        },

        "hj_bm_jingce":{ //精策
          group:["hj_bm_jingce_end"],
          marktext:"策",
          init:function(player){
            player.storage.hj_bm_jingce=[];
          },
          intro:{
            content:"cards",
          },
          trigger:{
            player:"useCardAfter",
          },
          forced:true,
          filter:function(event,player){
            if(_status.currentPhase!=player) return false;
            return player.storage.hj_bm_jingce.length<3;
          },
          content:function(){
            var cards=get.cards();
            player.storage.hj_bm_jingce=player.storage.hj_bm_jingce.concat(cards);
            player.$gain2(cards);
            game.log(player,'将一张牌置于武将牌上');
            player.syncStorage('hj_bm_jingce');
            player.markSkill('hj_bm_jingce');
          },
          subSkill:{
            end:{
              trigger:{
                player:"phaseEnd",
              },
              forced:true,
              direct:true,
              filter:function(event,player){
                return player.storage.hj_bm_jingce.length;
              },
              content:function(){
                'step 0'
                player.chooseControl('收入手牌','摸牌翻面',ui.create.dialog('精策',player.storage.hj_bm_jingce)).ai=function(event,player){
                  if(player.hp>2&&player.num('e')>=2&&player.storage.hj_bm_jingce.length==3)  return '摸牌翻面';
                  return '收入手牌';
                }
                'step 1'
                player.logSkill('hj_bm_jingce');
                var cards=[];
                while(player.storage.hj_bm_jingce.length){
                  cards=cards.concat(player.storage.hj_bm_jingce.shift());
                }
                if(result.control=='摸牌翻面'){
                  player.discard(cards);
                  var ax=cards.length+cards.length;
                  player.draw(ax);
                  player.turnOver();
                }
                else{
                  player.gain(cards,'gain2');
                  var sp=player.num('h')+cards.length;
                  if(sp<=player.maxHp) player.recover();
                }
                player.syncStorage('hj_bm_jingce');
                if(!player.storage.hj_bm_jingce.length){
                  player.unmarkSkill('hj_bm_jingce');
                }
              },
              sub:true,
            },
          },
        },
        "hj_bm_tuifeng":{ //推锋
          trigger:{
            player:"damageEnd",
          },
          filter:function (event,player){
            return event.num>0;
          },
          init:function (player){
            player.storage.hj_bm_tuifeng=[];
          },
          intro:{
            content:"cards",
          },
          frequent:true,
          content:function (){
            'step 0'
            var num=trigger.num;
            event.num=num;
            'step 1'
            var card=get.cards()[0];
            ui.special.appendChild(card);
            player.$draw(card);
            game.delay();
            player.storage.hj_bm_tuifeng.push(card);
            game.log(player,'将',card,'置于武将牌上');
            player.markSkill('hj_bm_tuifeng');
            event.trigger("addCardToStorage");
            event.num--;
            'step 2'
            if(event.num>0){
              event.goto(1);
            }else{
              event.finish();
            }
          },
          ai:{
            maixie:true,
            "maixie_hp":true,
            effect:{
              target:function(card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')) return [1,0.55];
              },
            },
          },
          group:["hj_bm_tuifeng_yiqu"],
          subSkill:{
            yiqu:{
              trigger:{
                player:"phaseBegin",
              },
              forced:true,
              popup:false,
              direct:true,
              filter:function (event,player){
                return player.storage.hj_bm_tuifeng.length>0;
              },
              content:function (){
                player.logSkill('hj_bm_tuifeng');
                var num=player.storage.hj_bm_tuifeng.length;
                player.draw(2*num);
                if(num>=player.hp){
                  player.recover();
                  player.addTempSkill('hj_bm_tuifeng_buff2');
                }
                player.addTempSkill('hj_bm_tuifeng_buff1');
                player.$throw(player.storage.hj_bm_tuifeng.slice(0),1000);
                player.storage.hj_bm_tuifeng_buff1=num;
                game.cardsDiscard(player.storage.hj_bm_tuifeng);
                player.storage.hj_bm_tuifeng=[];
                player.unmarkSkill('hj_bm_tuifeng')
              },
              sub:true,
            },
            "buff1":{
              mod:{
                cardUsable:function (card,player,num){
                  if(card.name=='sha'&&player.storage.hj_bm_tuifeng_buff1) return num+player.storage.hj_bm_tuifeng_buff1;
                },
                globalFrom:function (from,to,distance){
                  if(from.storage.hj_bm_tuifeng_buff1) return distance-from.storage.hj_bm_tuifeng_buff1;
                },
              },
              onremove:true,
              sub:true,
            },
            "buff2":{
              onremove:true,
              ai:{
                unequip:true,
              },
              sub:true,
            },
          },
        },

        "hj_bm_quanji":{ //权计
          trigger:{
            global:"phaseUseBefore",
          },
          priority:15,
          check:function(event,player){
            return get.attitude(player,event.player)<0;
          },
          logTarget:"player",
          filter:function (event,player){
            return player.canCompare(event.player);
          },
          content:function(){
            "step 0"
            player.chooseToCompare(trigger.player);
            "step 1"
            if(result.bool){
              trigger.cancel();
            }else{
              trigger.player.gainPlayerCard(player,'he',true);
              player.gain([result.player,result.target]);
              player.$gain2([result.player,result.target]);
            }
          },
          ai:{
            expose:0.2,
            result:{
              target:-2,
            },
          },
        },
        "hj_bm_yexin":{ //野心
          trigger:{
            player:"phaseUseBegin",
          },
          check:function(event,player){
            var nh=player.hp;
            if(nh>=2) return true;
            return false;
          },
          content:function(){
            player.draw(2);
            player.addTempSkill('hj_bm_yexin_end');
          },
          subSkill:{
            end:{
              trigger:{
                player:"phaseEnd",
              },
              filter:function (event,player){
                return !player.getStat('damage');
              },
              forced:true,
              content:function (){
                player.loseHp();
              },
              sub:true,
            },
          },
        },
        "hj_bm_paiyi":{ //排异
          enable:"phaseUse",
          usable:1,
          filterTarget:function(card,player,target){
            return player.canCompare(target);
          },
          filter:function(event,player){
            return player.countCards('h')>0;
          },
          content:function(){
            "step 0"
            player.chooseToCompare(target);
            "step 1"
            if(result.bool){
              player.gainPlayerCard(target,'he',true);
              target.turnOver();
            }else{
              target.draw(2);
            }
          },
          ai:{
            order:3,
            result:{
              player:-0.5,
              target:-1.2,
            },
            threaten:1.2,
          },
        },

        "hj_bm_tuntian":{ //屯田
          trigger:{
            player:"loseEnd",
          },
          forced:true,
          filter:function(event,player){
            if(player==_status.currentPhase) return false;
            for(var i=0;i<event.cards.length;i++){
              if(event.cards[i].original&&event.cards[i].original!='j') return true;
            }
            return event.cards&&event.cards.length>0;
          },
          group:"hj_bm_tuntian_dist",
          content:function(){
            "step 0"
            event.num=trigger.cards.length;
            "step 1"
            player.judge(function(card){
              if(get.suit(card)=='heart') return -1;
              return 1;
            },ui.special).nogain=function(card){
              return get.suit(card)!='heart';
            };
            "step 2"
            if(result.bool){
              result.card.goto(ui.special);
              event.trigger("addCardToStorage");
              player.storage.hj_bm_tuntian.push(result.card);
              result.node.moveDelete(player);
              game.broadcast(function(cardid,player){
                var node=lib.cardOL[cardid];
                if(node){
                  node.moveDelete(player);
                }
              },result.node.cardid,player);
              game.addVideo('gain2',player,get.cardsInfo([result.node]));
              player.markSkill('hj_bm_tuntian');
              game.addVideo('storage',player,['hj_bm_tuntian',get.cardsInfo(player.storage.hj_bm_tuntian),'cards']);
            }else{
              player.gain(result.card);
              player.$gain2(result.card);
              player.draw();
            }
            event.num--;
            if(event.num>0){
              event.goto(1);
            }else{
              event.finish();
            }
          },
          init:function(player){
            player.storage.hj_bm_tuntian=[];
          },
          intro:{
            content:"cards",
          },
          subSkill:{
            dist:{
              mod:{
                globalFrom:function(from,to,distance){
                  if(from.storage.hj_bm_tuntian) return distance-from.storage.hj_bm_tuntian.length;
                },
              },
              sub:true,
            },
          },
        },
        "hj_bm_jixi":{ //急袭
          enable:"phaseUse",
          mark:true,
          marktext:"袭",
          filter:function(event,player){
            return player.storage.hj_bm_tuntian.length>0;
          },
          chooseButton:{
            dialog:function(event,player){
              return ui.create.dialog('急袭',player.storage.hj_bm_tuntian,'hidden');
            },
            backup:function(links,player){
              return {
                filterCard:function(){return false},
                selectCard:-1,
                viewAs:{name:'shunshou'},
                cards:links,
                onuse:function(result,player){
                  result.cards=lib.skill[result.skill].cards;
                  var card=result.cards[0];
                  player.storage.hj_bm_tuntian.remove(card);
                  player.syncStorage('hj_bm_tuntian');
                  if(!player.storage.hj_bm_tuntian.length){
                    player.unmarkSkill('hj_bm_tuntian');
                  }
                  else{
                    player.markSkill('hj_bm_tuntian');
                  }
                  player.logSkill('hj_bm_jixi',result.targets);
                }
              }
            },
            prompt:function(links,player){
              return '选择急袭的目标';
            },
          },
          ai:{
            order:10,
            result:{
              player:function(player){
                return player.storage.hj_bm_tuntian.length-1;
              },
            },
          },
        },
        "hj_bm_ziliang":{ //资粮
          trigger:{
            global:"phaseAfter",
          },
          direct:true,
          mark:true,
          marktext:"粮",
          filter:function(event,player){
            return player.storage.hj_bm_tuntian&&player.storage.hj_bm_tuntian.length>0&&event.player.countCards('h')<=event.player.hp&&event.player.isAlive();
          },
          content:function(){
            'step 0'
            var goon=(get.attitude(player,trigger.player)>0);
            player.chooseCardButton(get.prompt('hj_bm_ziliang',trigger.player),player.storage.hj_bm_tuntian).set('ai',function(){
              if(_status.event.goon) return 1;
              return 0;
            }).set('goon',goon);
            'step 1'
            if(result.bool){
              player.logSkill('hj_bm_ziliang',trigger.player);
              player.storage.hj_bm_tuntian.remove(result.links[0]);
              player.$throw(result.links);
              result.links[0].discard();
              player.syncStorage('hj_bm_tuntian');
              if(player.storage.hj_bm_tuntian.length==0){
                player.unmarkSkill('hj_bm_tuntian');
              }
              trigger.player.draw(2);
            }
          },
        },

        "hj_bm_gongao":{ //功獒
          init:function (player){
            if(!player.storage.hj_bm_gongao) player.storage.hj_bm_gongao=0;
          },
          marktext:"功",
          intro:{
            content:"当前有#个“战功”标记",
          },
          mark:true,
          group:["hj_bm_gongao_gong","hj_bm_gongao_die","hj_bm_gongao_ao","hj_bm_gongao_draw"],
          subSkill:{
            die:{
              trigger:{
                global:"dieAfter",
              },
              forced:true,
              popup:false,
              direct:true,
              filter:function (event,player){
                return player.isAlive();
              },
              content:function (){
                player.logSkill('hj_bm_gongao');
                player.storage.hj_bm_gongao++;
                game.log(player,'获得了1枚“战功”标记');
                player.syncStorage('hj_bm_gongao');
              },
              sub:true,
            },
            gong:{
              trigger:{
                source:"damageEnd",
              },
              forced:true,
              popup:false,
              direct:true,
              content:function (){
                player.logSkill('hj_bm_gongao');
                player.storage.hj_bm_gongao+=trigger.num;
                game.log(player,'获得了',trigger.num,'枚“战功”标记');
                player.syncStorage('hj_bm_gongao');
              },
              sub:true,
            },
            ao:{
              trigger:{
                player:"damageBegin",
              },
              forced:true,
              popup:false,
              direct:true,
              priority:-100000,
              filter:function (event,player){
                return player.storage.hj_bm_gongao>0;
              },
              content:function (){
                player.logSkill('hj_bm_gongao');
                player.storage.hj_bm_gongao--;
                game.log(player,'失去了1枚“战功”标记');
                player.syncStorage('hj_bm_gongao');
                trigger.cancel();
              },
              sub:true,
            },
            draw:{
              trigger:{
                player:"phaseDrawBegin",
              },
              forced:true,
              popup:false,
              direct:true,
              filter:function (event,player){
                return player.storage.hj_bm_gongao>0;
              },
              content:function (){
                player.logSkill('hj_bm_gongao');
                var num=Math.min(3,player.storage.hj_bm_gongao);
                trigger.num+=num;
              },
              sub:true,
            },
          },
        },
        "hj_bm_weizhong":{ //威重
          group:["hj_bm_weizhong_target","hj_bm_weizhong_player"],
          subSkill:{
            target:{
              trigger:{
                source:"damageBegin",
              },
              forced:true,
              popup:false,
              direct:true,
              filter:function (event,player){
                return event.player.hp<player.hp;
              },
              content:function (){
                player.logSkill('hj_bm_weizhong');
                trigger.num++;
              },
              sub:true,
            },
            player:{
              trigger:{
                player:"damageBegin",
              },
              forced:true,
              popup:false,
              direct:true,
              filter:function (event,player){
                return event.source.hp<=player.hp;
              },
              content:function (){
                player.logSkill('hj_bm_weizhong');
                trigger.num++;
              },
              sub:true,
            },
          },
        },
        "hj_bm_neiluan":{ //内乱
          trigger:{
            player:"phaseEnd",
          },
          forced:true,
          filter:function (event,player){
            return !player.getStat('damage');
          },
          content:function (){
            if(player.storage.hj_bm_gongao>0){
              player.storage.hj_bm_gongao--;
              game.log(player,'失去了1枚“战功”标记');
              player.syncStorage('hj_bm_gongao');
            }else{
              player.loseHp();
            }
          },
        },

        "hj_bm_xingkui":{ //形愧
          trigger:{
            player:"phaseDrawBegin",
          },
          forced:true,
          content:function (){
            trigger.num--;
          },
          mod:{
            maxHandcard:function (player,num){
              if(player.hp<=player.maxHp) return num-1;
            },
          },
        },
        "hj_bm_mingqi":{ //鸣岐
          limited:true,
          unique:true,
          init:function (player){
            player.storage.hj_bm_mingqi=false;
          },
          skillAnimation:true,
          derivation:"hj_bm_zhanji",
          trigger:{
            player:["phaseBefore","dyingBegin"],
          },
          filter:function (event,player){
            if(player.storage.hj_bm_mingqi==true) return false;
            return true;
          },
          content:function (){
            player.awakenSkill('hj_bm_mingqi');
            if(player.isDamaged()){
              player.gainMaxHp(2),player.recover(9);
            }
            else {player.gainMaxHp(),player.removeSkill('hj_bm_xingkui')};
            player.addSkill('hj_bm_zhanji'),player.addSkill('hj_bm_qiwu');
            player.storage.hj_bm_mingqi=true;
          },
          mark:true,
          intro:{
            content:"limited",
          },
        },
        "hj_bm_qiwu":{ //栖梧
          forced:true,
          trigger:{
            player:"useCardAfter",
          },
          logTarget:"player",
          frequent:true,
          check:function (event,player){
            return true;
          },
          content:function (){
            player.draw();
            player.chooseToDiscard('he',true);
          },
        },
        "hj_bm_zhanji":{ //展骥
          trigger:{
            player:"gainAfter",
          },
          forced:true,
          filter:function (event,player){
            return event.getParent().name=='draw'&&event.getParent(2).name!='hj_bm_zhanji'; 
          },
          content:function (){
            player.draw('nodelay');
          },
        },

        "hj_bm_pozhen":{ //破阵
          group:["hj_bm_pozhen_dian","hj_bm_pozhen_hu1","hj_bm_pozhen_hu2","hj_bm_pozhen_die"],
          subSkill:{
            dian:{
              trigger:{
                global:"gameDrawAfter",
              },
              forced:true,
              filter:function (){
                return game.players.length>1;
              },
              content:function (){
                'step 0'
                player.chooseTarget('选择【点虎】的目标',true,function(card,player,target){
                  return target!=player&&!target.hasSkill('hj_bm_pozhen_mark');
                }).set('ai',function(target){
                  var att=get.attitude(_status.event.player,target);
                  if(att<0) return -att+3;
                  return Math.random();
                });
                'step 1'
                if(result.bool){
                  var target=result.targets[0];
                  player.line(target,'green');
                  game.log(target,'成为了','【点虎】','的目标');
                  target.storage.hj_bm_pozhen_mark=player;
                  target.addSkill('hj_bm_pozhen_mark');
                }
              },
              sub:true,
            },
            mark:{
              mark:"character",
              intro:{
                content:"当你受到伤害后，$可以令伤害来源或自己摸一张牌；当你回复体力后，$摸一张牌",
              },
              sub:true,
            },
            "hu1":{
              trigger:{
                global:"damageAfter",
              },
              forced:true,
              filter:function (event,player){
                return event.player.isAlive()&&event.player.hasSkill('hj_bm_pozhen_mark');
              },
              content:function (){
                'step 0'
                if(trigger.source&&trigger.source!=player){
                  event.goto(1);
                }else{
                  player.draw();
                  event.finish();
                }
                'step 1' 
                player.chooseControl('令自己摸牌','令伤害来源摸牌',function(event,player){
                  var att=get.attitude(player,trigger.source);
                  if(att<=0) return '令自己摸牌'; 
                  if(att>2&&trigger.source.countCards('h')<player.countCards('h')) return '令伤害来源摸牌'; 
                  return '令自己摸牌'; 
                }); 
                'step 2' 
                if(result.control=='令自己摸牌'){ 
                  player.draw();
                }else{
                  player.line(trigger.source);
                  trigger.source.draw(); 
                } 
              },
              sub:true,
            },
            "hu2":{
              trigger:{
                global:"recoverAfter",
              },
              forced:true,
              filter:function (event,player){
                return event.player.isAlive()&&event.player.hasSkill('hj_bm_pozhen_mark');
              },
              content:function (){
                player.draw();
              },
              sub:true,
            },
            die:{
              trigger:{
                global:"dieAfter",
              },
              forced:true,
              filter:function (event,player){
                return player.isAlive()&&event.player.hasSkill('hj_bm_pozhen_mark');
              },
              content:function (){
                'step 0'
                player.gainMaxHp();
                player.recover();
                player.chooseSkill(trigger.player,true,function(info,skill){
                  return !player.hasSkill(skill);
                });
                'step 1'
                if(result.bool){
                  var skill=result.skill;
                  player.addSkill(skill);
                  player.popup(skill);
                  game.log(player,'获得技能','【'+get.translation(skill)+'】');   
                } 
              },
              sub:true,
            },
          },
        },
        "hj_bm_liegong":{ //烈弓
          mod:{
            targetInRange:function (card){
              if(card.name=='sha') return true;
            },
          },
          group:["hj_bm_huaquegong"],
          derivation:["hj_bm_huaquegong"],
          trigger:{
            player:"shaBegin",
          },
          logTarget:"target",
          check:function (event,player){
            return get.attitude(player,event.target)<=0;
          },
          filter:function (event,player){
            if(event.target.countCards('h')<=player.countCards('h')) return true;
            if(event.target.hp>player.hp) return true;
            return false;
          },
          content:function (){
            if(trigger.target.countCards('h')<=player.countCards('h')) trigger.directHit=true;
            if(trigger.target.hp>player.hp){
              var hp=trigger.target.hp-player.hp;
              var num=Math.min(5,hp);
              player.chooseDrawRecover(num,true,function(event,player){
                if(player.hp<player.countCards('h')&&player.isDamaged()) return 'recover_hp';
                return 'draw_card';
              });
            }
          },
          ai:{
            threaten:0.5,
          },
        },
        "hj_bm_huaquegong":{ //画雀弓
          ai:{
            effect:{
              target:function (card,player,target){
                if(player==target&&get.subtype(card)=='equip1'&&card.name!='zhuge'){
                  return -1;
                }
                if(!target.isEmpty(1)) return;
                return 1;
              },
            },
          },
          trigger:{
            source:"damageBegin",
          },
          check:function (event,player){
            var att=get.attitude(player,event.player);
            if(att>0&&event.player.countCards('j')) return true;
            if(att<=0&&event.player.countCards('he')) return true;
            return false;
          },
          filter:function (event,player){
            return !player.getEquip(1)&&event.card&&event.card.name=='sha'&&event.player!=player&&event.player.countCards('hej')&&event.player.countDiscardableCards(player,'hej');
          },
          priority:7,
          logTarget:"player",
          content:function (){
            'step 0'
            if(trigger.player.countDiscardableCards(player,'hej')){
              player.discardPlayerCard('hej',trigger.player,true);
            }
            'step 1'
            var card=result.cards[0];
            if(get.type(card)=='equip'){
              player.gain(card,'gain2');
            }
          },
        },

        "hj_bm_kuanglang":{ //狂狼
          enable:"phaseUse",
          usable:1,
          filterTarget:function (card,player,target){
            return target!=player&&target.countCards('h');
          },
          filter:function (event,player){
            return player.countCards('h');
          },
          content:function (){
            'step 0'
            player.chooseToCompare(target);
            'step 1'
            if(result.bool){
              player.draw();
              player.useCard({name:'juedou'},targets,'noai').animate=false;
            }else{
              player.draw(2);
              player.useCard({name:'sha'},target,false);
            }
          },
          ai:{
            order:8,
            result:{
              target:function (player,target){
                return get.damageEffect(target,player,target);
              },
            },
          },
        },
        "hj_bm_aogu":{ //傲骨
          trigger:{
            source:"damageEnd",
          },
          forced:true,
          content:function (){
            'step 0'
            var list=['摸二弃一','摸一回血','取消'];
            player.chooseControl(list).set('prompt',get.prompt('hj_bm_aogu')).set('ai',function(){
              return list[[0,1].randomGet()];
            });
            'step 1'
            switch(result.control){
              case '摸二弃一':{
                player.draw(2);
                player.chooseToDiscard('he',true);
                break;
              }
              case '摸一回血':{
                player.draw();
                player.recover();
                break;
              }
              case '取消':{
                break;
              }
            }
          },
        },

        "hj_bm_dewang":{ //德望
          forced:true,
          trigger:{
            target:"useCardToBegin",
          },
          frequent:true,
          filter:function (event,player){
            if(event.player.hp<=player.hp) return true;
            if(event.targets.length>1) return true;
            var hs=player.getCards('h');
            var names=['sha','shan','tao','jiu'];
            for(var i=0;i<hs.length;i++){
              names.remove(hs[i].name);
            }
            for(var i=0;i<ui.cardPile.childElementCount;i++){
              if(names.contains(ui.cardPile.childNodes[i].name)){
                return true;
              }
            }
            return false;
          },
          usable:111,
          content:function (){
            var hs=player.getCards('h');
            var list=[];
            var names=['sha','shan','tao','jiu'];
            for(var i=0;i<hs.length;i++){
              names.remove(hs[i].name);
            }
            for(var i=0;i<ui.cardPile.childElementCount;i++){
              if(names.contains(ui.cardPile.childNodes[i].name)){
                list.push(ui.cardPile.childNodes[i]);
              }
            }
            if(list.length){
              player.gain(list.randomGet(),'draw');
            }
          },
        },
        "hj_bm_haoshi":{ //好施
          trigger:{
            player:"phaseDrawBefore",
          },
          check:function(event,player){
            return game.players.length>2&&player.countCards('h')<=5;
          },
          content:function(){
            "step 0"
            trigger.cancel();
            "step 1"
            var num1=game.players.length;
            player.draw(num1);
            "step 2"
            event.num=3;
            "step 3"
            player.chooseCardTarget({
              selectCard:1,
              position:"he",
              filterTarget:function(card,player,target){
                return player!=target&&!target.hasSkill('hj_bm_haoshi_xianzhi');
              },
              prompt:'是否将一张牌交给一名其他角色？',
            });
            "step 4"
            if(result.bool){
              event.num--;
              event.target=result.targets[0];
              player.line(event.target,'white');
              player.$give(result.cards.length,event.target);
              event.target.gain(result.cards,player);
              event.target.addTempSkill('hj_bm_haoshi_xianzhi');
            }else{
              event.goto(6);
            }
            "step 5"
            if(event.num>0){
              event.goto(3);
            }else{
              event.goto(6);
            }
            "step 6"
            var num1=player.countCards('h')-5;
            if(num1>0){
              player.chooseToDiscard(num1,'h',true);
            }else{
              event.finish();
            }
          },
          subSkill:{
            xianzhi:{
              sub:true,
            },
          },
        },
        "hj_bm_dimeng":{ //缔盟
          enable:"phaseUse",
          usable:1,
          filterTarget:function(card,player,target){
            return target!=player&&target.countCards('h');
          },
          content:function(){
            'step 0'
            var num=[1,2,3].randomGet();
            var hs=target.getCards('h').randomGets(num);
            event.hs=hs;
            target.showCards(hs);
            'step 1'
            if(game.players.length>2){
              event.goto(2);
            }else{
              player.line(target,'white');
              target.discard(event.hs);
              event.finish();
            }
            'step 2'
            player.chooseControl('将这些牌交给一名其他角色','弃置这些牌',function(event,player){ 
              var num1=game.countPlayer(function(current){
                return player.getFriends().contains(current);
              });
              if(num1>0) return '将这些牌交给一名其他角色';
              return '弃置这些牌'; 
            }); 
            'step 3'
            if(result.control=='弃置这些牌'){ 
              player.line(target,'white');
              target.discard(event.hs);
              event.finish();
            } 
            else{ 
              event.goto(4);
            }
            'step 4'
            event.target=target;
            player.chooseTarget('缔盟：选择一名角色，令其获得这些牌',true,function(card,player,target){  
              return target!=player&&target!=event.target;
            }).ai=function(target){
              return get.attitude(player,target)>2;
            };
            'step 5'
            if(result.bool){
              player.logSkill('hj_bm_dimeng',result.targets[0]);
              event.target.line(result.targets[0],'white');
              game.delay(1);
              event.target.$give(event.hs,result.targets[0]);
              result.targets[0].gain(event.hs,event.target);
            }
          },
          ai:{
            order:10,
            result:{
              target:-2,
            },
          },
        },

        "hj_bm_yizhen":{ //义阵
          enable:"phaseUse",
          usable:1,
          filterTarget:function (card,player,target){
            return player.canCompare(target);
          },
          filter:function (event,player){
            return player.countCards('h')>0;
          },
          content:function (){
            'step 0'
            player.chooseToCompare(target);
            'step 1'
            if(result.bool){
              player.addTempSkill('hj_bm_yizhen_win',"phaseEnd");
            }
            else{
              player.addTempSkill('hj_bm_yizhen_lose',"phaseUseEnd");
            }
          },
          group:["hj_bm_yizhen_compare"],
          subSkill:{
            compare:{
              trigger:{
                player:["chooseToCompareAfter","compareMultipleAfter"],
                target:["chooseToCompareAfter","compareMultipleAfter"],
              },
              popup:false,
              forced:true,
              direct:true,
              filter:function (event,player){
                if(event.preserve) return false;
                if(player==event.player){
                  if(event.card1.number>event.card2.number){
                    return !get.owner(event.card2);
                  }
                  else{
                    return !get.owner(event.card1);
                  }
                }
                else{
                  if(event.card1.number<event.card2.number){
                    return !get.owner(event.card1);
                  }
                  else{
                    return !get.owner(event.card2);
                  }
                }
              },
              content:function (){
                'step 0'
                player.chooseBool('义阵：是否获得点数小的一张的拼点牌？若你主将或副将为”兵谋孙策“,则改为获得两张拼点牌');
                'step 1'
                if(result.bool){
                  player.logSkill('hj_bm_yizhen');
                  event.goto(2);
                }else{
                  event.finish();
                }
                'step 2'
                if(player.name=='hj_bm_sunce'||player.name2=='hj_bm_sunce'){
                  player.gain(trigger.card1,'gain2');
                  player.gain(trigger.card2,'gain2');
                  event.finish();
                }else{
                  event.goto(3);
                }
                'step 3'
                if(player==trigger.player){
                  if(trigger.card1.number>trigger.card2.number){
                    player.gain(trigger.card2,'gain2');
                  }
                  else{
                    player.gain(trigger.card1,'gain2');
                  }
                }
                else{
                  if(trigger.card1.number<trigger.card2.number){
                    player.gain(trigger.card1,'gain2');
                  }
                  else{
                    player.gain(trigger.card2,'gain2');
                  }
                }
              },
              sub:true,
            },
            win:{
              mod:{
                targetInRange:function (card,player,target,now){
                  if(card.name=='sha') return true;
                },
                selectTarget:function (card,player,range){
                  if(card.name=='sha'&&range[1]!=-1) range[1]++;
                },
                cardUsable:function (card,player,num){
                  if(card.name=='sha') return num+1;
                },
              },
              ai:{
                unequip:true,
              },
              sub:true,
            },
            lose:{
              mod:{
                cardEnabled:function (card){
                  if(card.name=='sha') return false;
                },
              },
              sub:true,
            },
          },
          ai:{
            order:function (name,player){
              var cards=player.getCards('h');
              if(player.countCards('h','sha')==0){
                return 1;
              }
              for(var i=0;i<cards.length;i++){
                if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
                  return 9;
                }
              }
              return get.order({name:'sha'})-1;
            },
            result:{
              player:function (player){
                if(player.countCards('h','sha')>0) return 0.6;
                var num=player.countCards('h');
                if(num>player.hp) return 0;
                if(num==1) return -2;
                if(num==2) return -1;
                return -0.7;
              },
              target:function (player,target){
                var num=target.countCards('h');
                if(num==1) return -1;
                if(num==2) return -0.7;
                return -0.5
              },
            },
            threaten:1.3,
          },
        },
        "hj_bm_dulie":{ //笃烈
          init:function (player){
            player.storage.hj_bm_dulie=0;
          },
          intro:{
            content:"共有#个“兴”",
          },
          trigger:{
            source:"damageEnd",
          },
          forced:true,
          filter:function (event,player){ 
            return player.isAlive()&&player.storage.hj_bm_dulie<4; 
          },
          content:function (){
            player.storage.hj_bm_dulie++;
            if(!player.markSkill('hj_bm_dulie')){
              player.markSkill('hj_bm_dulie');
            }
            player.syncStorage('hj_bm_dulie');
          },
          group:["hj_bm_dulie_a","hj_bm_dulie_b","hj_bm_dulie_c","hj_bm_dulie_d"],
          subSkill:{
            a:{
              mod:{
                maxHandcard:function (player,num){
                  if(player.storage.hj_bm_dulie>=1){
                    if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
                  }
                },
              },
              sub:true,
            },
            b:{
              trigger:{
                player:"phaseDrawBegin",
              },
              popup:false,
              direct:true,
              forced:true,
              filter:function (event,player){
                return player.storage.hj_bm_dulie>=2;
              },
              content:function (){
                player.logSkill('hj_bm_dulie');
                trigger.num++;
              },
              sub:true,
            },
            c:{
              trigger:{
                player:"phaseJudgeBefore",
              },
              popup:false,
              direct:true,
              forced:true,
              filter:function (event,player){
                return player.storage.hj_bm_dulie>=3;
              },
              content:function (){
                player.logSkill('hj_bm_dulie');
                trigger.cancel();
                game.log(player,'跳过了判定阶段');
              },
              sub:true,
            },
            d:{
              trigger:{
                player:"loseEnd",
              },
              popup:false,
              direct:true,
              forced:true,
              filter:function (event,player){
                if(player==_status.currentPhase) return false;
                if(event.cards){
                  for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original!='j'&&player.storage.hj_bm_dulie>=4) return true;
                  }
                }
                return false;
              },
              content:function (){
                player.logSkill('hj_bm_dulie');
                player.draw();
              },
              sub:true,
            },
          },
        },

        "hj_bm_huanhua":{ //幻化
          trigger:{
            global:"gameDrawAfter",
            player:["phaseBefore","enterGame","phaseAfter"],
          },
          unique:true,
          forced:true,
          content:function (){
            'step 0'
            var chat=['哼，肉眼凡胎，岂能窥视，仙人变幻？','万物苍生，幻化由心。'].randomGet();
            player.say(chat);
            var list=get.gainableCharacters(function(info){
              return info[2]>=0;
            });
            var players=game.players.concat(game.dead);
            for(var i=0;i<players.length;i++){
              list.remove(players[i].name);
              list.remove(players[i].name1);
              list.remove(players[i].name2);
            }
            var dialog=ui.create.dialog('选择一张幻化牌','hidden');
            dialog.add([list.randomGets(2),'character']);
            player.chooseButton(dialog).ai=function(button){
              return get.rank(button.link,true);
            };  
            'step 1'
            if(result.bool){
              var chat=['吐故纳新，师法天地。','眼之所见，皆为幻象。','为仙之道，飘渺莫测。','仙人之力，昭于世间。','感觉到了新的魂魄。'].randomGet();
              player.say(chat);
              player.unmark(player.storage.hj_bm_huanhua+'_charactermark');
              var name=result.links[0];
              var list=[];
              var skills=lib.character[result.links[0]][3];
              for(var j=0;j<skills.length;j++){
                if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&!player.hasSkill(skills[j]&&!lib.skill[skills[j]].zhuSkill)){
                  list.push(skills[j]);
                }
              }
              player.addAdditionalSkill('hj_bm_huanhua',list);
              player.markCharacter(name,null,true,true);
              game.addVideo('markCharacter',player,{
                name:'幻化',
                content:'',
                id:'hj_bm_huanhua',
                target:name
              });
              player.storage.hj_bm_huanhua=name;
              player.update();
            }
          },
        },
        "hj_bm_dunshu":{ //遁书
          mod:{
            globalFrom:function(from,to,distance){
              return distance-1;
            },
            globalTo:function(from,to,distance){
              return distance+1;
            },
          },
          group:["hj_bm_dunshu_lose","hj_bm_dunshu_max"],
          trigger:{
            target:"useCardToBefore",
          },
          forced:true,
          usable:1,
          priority:7,
          filter:function (event,player){
            if(player.getEquip(2)) return false;
            return event.card.name=='sha';
          },
          content:function (){
            var chat=['治人者握权，治于人者失命。','止兵止战，休养生息。'].randomGet();
            player.say(chat);
            trigger.cancel();
          },
          subSkill:{
            lose:{
              trigger:{
                player:"loseMaxHpBefore",
              },
              forced:true,
              filter:function (event,player){
                if(player.maxHp<=4) return true;
                return false;
              },
              content:function (){
                var chat=['死而复生，生生死死','死生存亡，命之行也。'].randomGet();
                player.say(chat);
                trigger.cancel();
              },
              sub:true,
            },
            max:{
              trigger:{
                global:["useCard","useSkill"],
              },
              forced:true,
              filter:function (event,player){
                if(player.maxHp<4) return true;
                return false;
              },
              content:function (){
                var chat=['神光不灭，仙力不绝。','放下俗念，为道为仙。'].randomGet();
                player.say(chat);
                player.maxHp=4;
                player.recover(4-player.hp);
                player.update();
              },
              sub:true,
            },
          },
        },

        "hj_bm_xiongluan":{ //雄乱
          usable:1,
          enable:"phaseUse",
          filterTarget:function(card,player,target){ 
            return player!=target; 
          },
          check:function(event,player){
            return get.attitude(player,event.player)>0;
          },
          content:function(){ 
            'step 0'
            var num=target.maxHp-target.countCards('h');
            if(num>0){
              target.recover();
              target.draw(num);
            }
            else{
              target.recover();
              target.draw();
            }
            'step 1'
            player.chooseControl('调整手牌','获得技能',function(event,player){ 
              var num1=player.countCards('h'); 
              var b=target.countCards('h')-num1;
              if(b>=2) return '调整手牌'; 
              return '获得技能'; 
            }); 
            'step 2'
            if(result.control=='调整手牌'){ 
              var num2=target.countCards('h');
              var c=num2-player.countCards('h');
              player.draw(c); 
            } 
            else{ 
              player.draw();
              player.addTempSkill('hj_bm_xiongluan2'); 
            }   
          },
          ai:{
            order:10,
            result:{
              target:2,
              player:1,
            },
          },
        },
        "hj_bm_xiongluan2":{
          mod:{
            targetInRange:function (){
              return true;
            },
            cardUsable:function (card){
              if(get.info(card)&&get.info(card).forceUsable) return;
              return Infinity;
            },
          },
          mark:true,
          marktext:"乱",
          intro:{
            content:"使用牌无次数限制和距离限制",
          },
        },
        "hj_bm_congjian":{ //从谏
          trigger:{
            target:"useCardToBefore",
          },
          usable:1,
          priority:7,
          filter:function(event,player){
            return event.player!=player;
          },
          check:function(event,player){
            return get.attitude(player,event.player)<=0;
          },
          content:function (){
            'step 0'
            trigger.player.draw();
            trigger.player.damage();
            'step 1'
            trigger.target=trigger.player; 
            trigger.player=player; 
            trigger.untrigger(); 
            trigger.trigger('useCardToBefore'); 
          },
          ai:{
            result:{
              target:-2,
              player:1,
            },
          },
        },

        "hj_bm_luanzheng":{ //乱政
          trigger:{
            global:"useCardToBefore",
          },
          filter:function(event,player){ 
            return event.target!=player&&get.type(event.card)!='equip'&&event.targets.length==1; 
          },
          direct:true,
          content:function(){
            'step 0'
            player.chooseTarget(get.prompt2('hj_bm_luanzheng'),function(card,player,target){
              return target!=trigger.target;
            }).set('ai',function(target){
              if(trigger.card.name!='wuzhong'&&trigger.card.name!='jiu'&&trigger.card.name!='tao'){
                return -get.attitude(player,target);
              }else{
               if(!player.getFriends().contains(trigger.player)) return get.attitude(player,target);
             }
             return 0;
           });
            'step 1'
            if(result.bool){
              player.logSkill('hj_bm_luanzheng',result.targets);
              trigger.target=result.targets[0];
              game.log(player,'将',trigger.card,'的目标重新指定为'+get.translation(result.targets[0]));
              if(result.targets[0]==player){
                player.draw();
              }
              trigger.untrigger(); 
              trigger.trigger('useCardToBegin');
            }
          },
        },
      },
      translate:{
        "hj_bm_hunsunce":"魂孙策",
        "hj_bm_hunsunjian":"魂孙坚",
        "hj_bm_huncaoren":"魂曹仁",
        "hj_bm_huncaozhi":"魂曹植",
        "hj_bm_huncaochun":"魂曹纯",
        "hj_bm_huncaoying":"魂曹婴",
        "hj_bm_hunyujin":"魂于禁",
        "hj_bm_hunzhanghe":"魂张郃",
        "hj_bm_hunguohuai":"魂郭淮",
        "hj_bm_hunzhonghui":"魂钟会",
        "hj_bm_hundengai":"魂邓艾",
        "hj_bm_hunzhugedan":"魂诸葛诞",
        "hj_bm_hunpangtong":"魂庞统",
        "hj_bm_hunhuangzhong":"魂黄忠",
        "hj_bm_hunweiyan":"魂魏延",
        "hj_bm_hunlusu":"魂鲁肃",
        "hj_bm_huntaishici":"魂太史慈",
        "hj_bm_hunzuoci":"魂左慈",
        "hj_bm_hunzhangxiu":"魂张绣",
        "hj_bm_hunzhangrang":"魂张让",



        "hj_bm_bawang":"霸王",
        "hj_bm_bawang_info":"锁定技，当你造成伤害后，你增加等同于此次伤害量的体力值上限。",
        "hj_bm_jiang":"激昂",
        "hj_bm_jiang_info":"当你使用【杀】或【决斗】指定目标后/成为【杀】或【决斗】的目标后，你可以摸一张牌，若你的体力值为全场最少(或之一)，你改为摸X张牌(X为你已损体力值)并弃置一张牌。",
        "hj_bm_zhiba":"制霸",
        "hj_bm_zhiba_info":"当你使用【杀】或【决斗】指定目标后，可以与目标进行一次拼点，若你赢，此【杀】或【决斗】不可被响应，若你输，目标角色摸一张牌。",
        "hj_bm_hunzi":"魂姿",
        "hj_bm_hunzi_info":"觉醒技，当你体力值降到1或者更低时，你立即将体力值恢复至1点，获得技能〖英魂〗、〖英姿〗、〖鹰扬〗并终止一切结算，开始你的回合。",
        "hj_bm_yingyang":"鹰扬",
        "hj_bm_yingyang_info":"你的拼点牌亮出后，你可以令此牌点数增加或减少X+Y点(X为你的体力上限，Y为你的已损体力值)。",
        "hj_bm_yingzi":"英姿",
        "hj_bm_yingzi_info":"锁定技，摸牌阶段摸牌时，你的摸牌数为你的体力上限数；你的手牌上限为X(X为你的体力上限＋你已损体力值)。",
        "hj_bm_yinghun":"英魂",
        "hj_bm_yinghun_info":"准备阶段开始时，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值，若你装备区里牌的数量不小于你的体力值，则X改为你的体力上限）",

        "hj_bm_wulie":"武烈",
        "hj_bm_wulie_info":"一名角色的准备阶段，你可以令其失去1点体力并摸一张牌，如若此做，其本回合内首次造成的伤害值＋1且每次造成伤害后摸一张牌。",
        "hj_bm_hunyou":"魂佑",
        "hj_bm_hunyou_info":"当一名角色即将受到大于1的伤害时，你可以弃置一张牌，如若此做，此次伤害值改为1。",
        "hj_bm_polu":"破虏",
        "hj_bm_polu_info":"锁定技，每当一名角色阵亡后，你令所有友方角色各摸1＋X张牌(X为此技能发动过的次数)。",

        "hj_bm_jushou":"据守",
        "hj_bm_jushou_info":"结束阶段，你可以摸三张牌，然后你可以移动场上一张牌，最后你将武将牌翻面。若你的武将牌背面朝上，你不能成为【决斗】和【火攻】的目标。当你受到伤害后，若你武将牌背面朝上，你可以弃置一张牌，然后你翻面。若你以此法翻回正面，你亦可移动场上一张牌。",
        "hj_bm_lizhan":"励战",
        "hj_bm_lizhan_info":"当你武将牌翻面后，你可以令任意名角色摸一张牌；当一名角色回复体力或失去体力上限后或当其成为【杀】的目标时，你可以令其摸一张牌。",

        "hj_bm_zuijiu":"醉酒",
        "hj_bm_zuijiu_info":"出牌阶段限一次，若你已受伤，你可以失去一点体力上限，然后你获得一枚“醉酒”标记。锁定技，你使用的【杀】的伤害基数＋X(X为你的“醉酒”标记数)；当你进入濒死状态时，你增加一点体力上限并摸一张牌。",
        "hj_bm_luohua":"落花",
        "hj_bm_luohua_info":"锁定技，你的回合外，每当一张梅花牌因使用、响应、弃置或判定而进入弃牌堆时，你弃置一枚“落花”标记并获得之；每轮开始时，你将“落花”标记补充至7。",
        "hj_bm_shifu":"诗赋",
        "hj_bm_shifu_info":"锁定技，摸牌阶段开始时，若你“落花”标记数不大于5，你跳过摸牌阶段；出牌阶段开始时，你弃置手中所有的梅花牌并摸取等量的牌，然后你本回合内使用【杀】和【酒】的次数＋X且你计算与其他角色的距离－X(X为你以此法弃置的牌数)。",

        "hj_bm_xiaorui":"骁锐",
        "hj_bm_xiaorui_info":"准备阶段，你可以摸X张牌(X为当前存活人数)，然后你弃置Y张牌(Y为势力与你不同的角色数且至少为1)。若你以此法弃置了装备牌，你可以选择至多Y名角色，视为对他们使用了一张【杀】(无视距离且不计入次数限制)。",
        "hj_bm_shanjia":"缮甲",
        "hj_bm_shanjia_info":"出牌阶段开始时，你可以摸三张牌，然后弃置3-X张牌(X为你本局游戏内失去过的装备区内的牌的数目且至多为3)。若你没有以此法弃置基本牌或锦囊牌，则你可以视为使用了一张不计入出牌阶段使用次数的【杀】。",

        "hj_bm_lingren":"凌人",
        "hj_bm_lingren_info":"锁定技，你的【杀】造成的伤害＋X(X为场上【魏】势力角色数)；你根据场上【魏】势力角色数来获得以下技能：1个〖奸雄〗（界）、2个〖行殇〗；锁定技，出牌阶段开始时，你随机获得一张进攻类型牌；结束阶段，你随机获得一张防御类型牌。",
        "hj_bm_fujian":"伏间",
        "hj_bm_fujian_info":"出牌阶段限一次，你可以观看一名角色的手牌，然后你可以获得其中一张红色牌；锁定技，回合外每名角色回合限一次，当你使用或打出一张牌后，你随机获得一名角色手牌中同名的一张牌。",
        "hj_bm_jianxiong":"奸雄",
        "hj_bm_jianxiong_info":"每当你受到伤害后，你可以摸一张牌并获得对你造成伤害的牌。",
        "hj_bm_xingshang":"行殇",
        "hj_bm_xingshang_info":"你可以立即获得死亡角色的所有牌。",

        "hj_bm_yizhong":"毅重",
        "hj_bm_yizhong_info":"锁定技，当你没有防具时，黑色的杀对你无效。若你已受伤，你的手牌上限＋1",
        "hj_bm_zhenjun":"镇军",
        "hj_bm_zhenjun_info":"准备阶段，你可以选择一名其他角色并交给其一张牌。然后若你的体力值小于其，你选择一项：恢复一点体力或摸两张牌；若你体力值大于其，你令其选择一项：恢复一点体力或摸两张牌，然后你摸一张牌并失去一点体力。否则，你与其各摸一张牌。",
        "hj_bm_jieyue":"节钺",
        "hj_bm_jieyue_info":"出牌阶段限一次，你可以展示一名角色的一张手牌，然后你展示一张手牌，若你与其展示的牌：1、颜色相同，你摸一张牌；2、类别相同，你弃置其展示的牌；3、花色相同，你令其将武将牌翻面。",

        "hj_bm_yuanlue":"远略",
        "hj_bm_yuanlue_info":"出牌阶段开始时，若你有未被废除的装备栏，你可以废除一个装备栏，如若此做，你摸三张牌，本回合使用牌无距离限制且每用一张牌便摸一张牌(若你已经发动了【明主】，则没有使用牌摸一张的效果)。",
        "hj_bm_mingzhu":"明主",
        "hj_bm_mingzhu_info":"觉醒技，准备阶段开始时，若你的装备栏均已被废除或你的体力值不大于2，则你恢复所有装备栏并将手牌补至体力上限数，然后获得技能【巧变】。",
        "hj_bm_qiaobian":"巧变",
        "hj_bm_qiaobian_info":"准备阶段，你可以选择一名其他角色，令其选择废除一个装备栏，如若此做，若你有已被废除的装备栏，你选择恢复一个装备栏。当你受到一点伤害后，你亦可恢复一个装备栏。",

        "hj_bm_jingce":"精策",
        "hj_bm_jingce_info":"锁定技，你的回合内，当你使用了一张牌结算完成后，你将牌堆顶的一张牌置于武将牌上，称为“策”(至多三张)。结束阶段，若你有“策”，你需选择一项：①，将所有“策”收入手牌，然后若你的手牌数不大于你的体力上限，你回复一点体力；②弃置所有的“策”，然后你摸双倍数量的牌并翻面。",
        "hj_bm_tuifeng":"推锋",
        "hj_bm_tuifeng_info":"当你受到1点伤害后，你可以将牌堆顶的1张牌置于武将牌上，称为“锋”。准备阶段，你移去所有“锋”，然后摸取双倍的牌且本回合内使用【杀】的次数＋X，计算与其他角色的距离－X(X为你移去的“锋”的数量)。若你移去的“锋”的数量不小于体力值数，你回复1点体力且获得无视防具的效果直到回合结束。",

        "hj_bm_quanji":"权计",
        "hj_bm_quanji_info":"其他角色的出牌阶段即将开始时，你可以与该角色进行一次拼点。若你赢，该角色跳过出牌阶段，否则其获得你的一张牌，然后你获得两张拼点牌。",
        "hj_bm_yexin":"野心",
        "hj_bm_yexin_info":"出牌阶段开始时，你可以摸两张牌，如若此做，结束阶段，若你于本回合内没有造成伤害，你失去一点体力。",
        "hj_bm_paiyi":"排异",
        "hj_bm_paiyi_info":"出牌阶段限一次，你可以和一名角色拼点，若你赢，你获得其一张牌并令其翻面，否则其摸两张牌。",

        "hj_bm_tuntian":"屯田",
        "hj_bm_tuntian_info":"锁定技，每当你于回合外失去一张牌时，你进行一次判定，若结果不为红桃，你将其置于你的武将牌上，称为“田”，否则你获得你的判定牌并摸一张牌；你计算与其他角色的距离－X(X为你的“田”数)。",
        "hj_bm_jixi":"急袭",
        "hj_bm_jixi_info":"出牌阶段，你可以将一张“田”当作【顺手牵羊】对一名角色使用。",
        "hj_bm_ziliang":"资粮",
        "hj_bm_ziliang_info":"一名角色的回合结束阶段，若你有“田”且其手牌数不大于其当前体力值，你可以弃置一张“田”并令其摸两张牌。",

        "hj_bm_gongao":"功獒",
        "hj_bm_gongao_info":"锁定技，当你造成伤害后，你获得X枚“战功”标记(X为此次伤害值)；当一名角色死亡后，你获得1枚“战功”标记；当你即将受到伤害时，你失去1枚“战功”标记，然后防止此伤害；你每拥有1枚“战功”标记，你的摸牌阶段摸牌数便＋1(至多＋3张)。",
        "hj_bm_weizhong":"威重",
        "hj_bm_weizhong_info":"锁定技，你对体力值小于你的角色造成的伤害＋1；体力值不大于你的角色对你造成的伤害值＋1。",
        "hj_bm_neiluan":"内乱",
        "hj_bm_neiluan_info":"锁定技，结束阶段，若你本回合没有造成过伤害，你失去1枚“战功”标记。若你没有“战功”标记，则改为失去1点体力。",

        "hj_bm_xingkui":"形愧",
        "hj_bm_xingkui_info":"锁定技，摸牌阶段少摸一张牌；弃牌阶段多弃一张牌。",
        "hj_bm_mingqi":"鸣岐",
        "hj_bm_mingqi_info":"限定技，你的回合开始前或你进入濒死状态时，1、若你未受伤，则你增加1点体力上限并失去〖形愧〗；2、若你已受伤，则你增加2点体力上限并回复体力至满值。最后获得技能〖展骥〗和〖栖梧〗",
        "hj_bm_qiwu":"栖梧",
        "hj_bm_qiwu_info":"锁定技，当你使用的牌结算完成后，你摸一张牌，然后弃置一张牌。",
        "hj_bm_zhanji":"展骥",
        "hj_bm_zhanji_info":"锁定技，当你不因此技能效果获得牌时，额外摸一张牌。",

        "hj_bm_pozhen":"破势",
        "hj_bm_pozhen_info":"锁定技，游戏开始时，你选择一名其他角色。当其受到伤害后，你可以令伤害来源或自己摸一张牌；当其回复体力后，你摸一张牌；当其死亡后，你增加1点体力上限并回复1点体力，然后选择并获得其一项技能。",
        "hj_bm_liegong":"烈弓",
        "hj_bm_liegong_info":"锁定技，若你没有装备武器牌，你视为装备着〖画雀弓〗（当你的【杀】对其他角色造成伤害时，你可以弃置其区域内的一张牌。若你弃置的是装备牌，你获得此牌 ）；锁定技，你使用的【杀】无距离限制；当你使用【杀】指定目标后：1、若目标角色手牌数不大于你，你可令此【杀】不可被响应；2、若目标角色体力大于你，你可以选择回复1点体力，或摸X张牌(X为你与其体力值之差且至多为5)",
        "hj_bm_huaquegong":"画雀弓",
        "hj_bm_huaquegong_info":"当你的【杀】对其他角色造成伤害时，你可以弃置其区域内的一张牌。若你弃置的是装备牌，你获得此牌。",

        "hj_bm_kuanglang":"狂狼",
        "hj_bm_kuanglang_info":"出牌阶段限一次，你可以与一名其他角色进行一次拼点：若你赢，你摸一张牌并视为对其使用了一张不可被无懈的【决斗】，否则，你摸两张牌并视为对其使用了一张不计入次数的【杀】。",
        "hj_bm_aogu":"傲骨",
        "hj_bm_aogu_info":"当你造成伤害后，你可以选择一项：1、摸两张牌然后弃置一张牌；2、摸一张牌并恢复1点体力。",

        "hj_bm_dewang":"德望",
        "hj_bm_dewang_info":"锁定技，当你成为牌的目标后，你随机获得牌堆里一张你没有的基本牌(杀闪酒桃之一)",
        "hj_bm_haoshi":"好施",
        "hj_bm_haoshi_info":"摸牌阶段，你可以放弃摸牌，如若此做，你摸X张牌(X为场上存活人数)。然后你可以依次将1张牌交给一名以此法没有获得过牌的其他角色(至多3名角色)，最后，若你的手牌数大于5张，你需将手牌数弃置至5张。",
        "hj_bm_dimeng":"缔盟",
        "hj_bm_dimeng_info":"出牌阶段限一次，你可以选择一名有手牌的其他角色，随机展示其1~3张手牌，然后你选择一项：令另一名角色获得这些牌，或你弃置这些牌。",

        "hj_bm_yizhen":"天义",
        "hj_bm_yizhen_info":"出牌阶段限一次，你可以与一名其他角色进行拼点：若你赢，本回合你的攻击范围无限，可以多使用一张【杀】，【杀】的目标数＋1，无视防具，效果持续到回合结束；若你没赢，你不能使用【杀】直到出牌阶段结束。拼点结束后，你可以获得点数小的一张拼点牌。若你主将或副将为“兵谋孙策”，则你改为获得两张拼点牌。",
        "hj_bm_dulie":"笃烈",
        "hj_bm_dulie_info":"锁定技，当你造成伤害后，你获得一枚“笃烈”标记(至多4枚)；若你拥有的“笃烈”的数量为：至少一个，手牌上限为体力上限；至少两个，摸牌阶段摸牌数＋1；至少三个，跳过判定阶段；四个，当你于回合外首次失去牌时，摸一张牌。",

        "hj_bm_huanhua":"幻化",
        "hj_bm_huanhua_info":"锁定技，游戏开始时，或你的回合开始时、回合结束时，你随机观看两张武将牌，然后你可以选择其中一张，获得其所有技能直到你的下一次变化(不可获得主公技)。",
        "hj_bm_dunshu":"遁书",
        "hj_bm_dunshu_info":"锁定技，其他角色计算与你的距离＋1；你计算与其他角色的距离－1；每个回合限一次，当你成为【杀】的目标时，若你装备区没有防具牌，此【杀】对你无效；你的体力上限最少为4，任何时候，当你的体力上限低于4时，你将体力上限改为4，然后将体力值恢复至4。",

        "hj_bm_xiongluan":"雄乱",
        "hj_bm_xiongluan_info":"出牌阶段限一次，你可以选择一名其他角色，令其回复一点体力，若其手牌数不等于体力上限，你令其将手牌补至体力上限数，否则其摸一张牌。然后你选择一项：将手牌数调整至与其相同，或摸一张牌，然后本回合内使用牌无距离和次数限制。",
        "hj_bm_xiongluan2":"雄乱",
        "hj_bm_xiongluan2_info":"",
        "hj_bm_congjian":"从谏",
        "hj_bm_congjian_info":"每回合限一次，当你成为其他角色使用的牌的目标后，你可以令使用者摸一张牌，然后你对其造成一点伤害，如若此做，此牌对你无效，改为你对其使用了此牌。",

        "hj_bm_luanzheng":"乱政",
        "hj_bm_luanzheng_info":"当一名角色使用的一张非装备牌对其指定的目标即将生效时，若此牌目标只有一个且不为你，你可以重新为此牌指定目标(新的目标不得为原来的目标)，若新指定的目标为你，你摸一张牌。",
      },
    },"兵谋篇");
    //why???
  }
  if(config.hj_hundun){ //混沌魂将包
    game.addCharacterPack({
      character:{
        "hj_hd_huncaopi":["male","shen",3,["hj_hd_fangzhu","hj_hd_xingshang","hj_hd_yange"],["zhu"]],
        "hj_hd_huncaorui":["male","shen",3,["hj_hd_huituo","hj_hd_mingjian","hj_hd_xingshuai"],["zhu"]],
        "hj_hd_hunxunyu":["male","shen",3,["hj_hd_quhu","hj_hd_jieming","hj_hd_xunye"],[]],
        "hj_hd_hunxizhicai":["male","shen",3,["hj_hd_chouce","hj_hd_tianji","hj_hd_xianfu"],[]],
        "hj_hd_hunwangji":["male","shen",3,["hj_hd_qizhi","hj_hd_jinqu","hj_hd_zhuchang"],[]],
        "hj_hd_hunzhangchunhua":["female","shen",3,["hj_hd_jueqing","hj_hd_shangshi","hj_hd_wuxin"],[]],
        "hj_hd_hunwangyi":["female","shen",3,["hj_hd_zhenlie","hj_hd_miji","hj_hd_lieran"],[]],
        "hj_hd_hunjiangwei":["male","shen",4,["hj_hd_tiaoxin","hj_hd_tianxing"],[]],
        "hj_hd_hunmachao":["male","shen",5,["hj_hd_tieji","hj_hd_xunxi"],[]],
        "hj_hd_hunguanping":["male","shen",4,["hj_hd_longyin","hj_hd_rongzheng"],[]],
        "hj_hd_hunzhurong":["female","shen",4,["hj_hd_lieren","hj_hd_juxiang"],[]],
        "hj_hd_hunguanyinping":["female","shen",4,["hj_hd_xueji","hj_hd_shengyou"],[]],
        "hj_hd_hunzhangxingcai":["female","shen",4,["hj_hd_qiangwu","hj_hd_shenxian"],[]],
        "hj_hd_hunzhaoxiang":["female","shen",4,["hj_hd_fanghun","hj_hd_longmai"],[]],
        "hj_hd_hunhuanggai":["male","shen",4,["hj_hd_kurou","hj_hd_zhaxiang"],[]],
        "hj_hd_hunzhoutai":["male","shen",4,["hj_hd_hunqu","hj_hd_qingluo"],[]],
        "hj_hd_hunliuyan":["male","shen",3,["hj_hd_tushe","hj_hd_chuangli","hj_hd_limu"],[]],
        "hj_hd_hunbeimihu":["female","shen",3,["hj_hd_zongkui","hj_hd_guju","hj_hd_canshi"],[]],
        "hj_hd_hunhetaihou":["female","shen",3,["hj_hd_zhenjiu","hj_hd_zhendu","hj_hd_qiluan"],[]],
        "hj_hd_hunlingju":["female","shen",3,["hj_hd_jieyuan","hj_hd_yijue","hj_hd_fenxin"],[]],
      },
      skill:{
        "hj_hd_fangzhu":{ //放逐
          trigger:{
            player:"damageAfter",
          },
          direct:true,
          forced:true,
          priority:-1,
          filter:function (event,player){
            return event.source&&event.source!=player;
          },
          content:function (){
            'step 0'
            if(!player.isTurnedOver()){
              player.turnOver(true);
              trigger.source.turnOver(true);
              player.chooseTarget('【放逐】：是否令一名其他角色弃置'+get.cnNumber(player.getDamagedHp())+'张牌并翻面？',function(card,player,target){
                return player!=target;
              })
            }else{
              player.turnOver(false);
              trigger.source.loseHp();
              player.chooseTarget('【放逐】：是否令一名其他角色摸'+get.cnNumber(player.hp)+'张牌并翻面？',function(card,player,target){
                return player!=target;
              })
              event.goto(2);
            }
            'step 1'
            if(result.bool){
              player.logSkill('hj_hd_fangzhu');
              player.line(result.targets[0]);
              result.targets[0].chooseToDiscard(player.getDamagedHp(),'he',true);
              result.targets[0].turnOver();
              event.finish();
            }else{
              event.finish();
            }
            'step 2'
            if(result.bool){
              player.logSkill('hj_hd_fangzhu');
              player.line(result.targets[0]);
              result.targets[0].draw(player.hp);
              result.targets[0].turnOver();
            }else{
              event.finish();
            }
          },
        },
        "hj_hd_xingshang":{ //行殇
          trigger:{
            global:"dying",
          },
          forced:true,
          filter:function (event,player){
            return event.player!=player&&event.player.countCards('he')>0;
          },
          content:function (){
            'step 0'
            player.recover();
            player.gainPlayerCard(trigger.player,'he',Infinity,true);
            'step 1'
            game.delay();
            trigger.player.judge();
            'step 2'
            trigger.player.gain(result.card,'gain2');
          },
        },
        "hj_hd_yange":{ //燕歌
          trigger:{
            player:"damageEnd",
          },
          priority:1,
          locked:true,
          filter:function (event,player){
            return get.itemtype(event.cards)=='cards'&&
            get.position(event.cards[0],true)=='o'&&
            game.hasPlayer(function(current){
              return current!=player&&get.distance(current,player)<=1;
            });
          },
          content:function (){
            'step 0'
            event.targets=game.filterPlayer();
            event.targets.sort(lib.sort.seat);
            'step 1'
            if(event.targets.length){
              var target=event.targets.shift();
              if(player!=target&&get.distance(target,player)<=1){
                if(target.countCards('he')>0){
                  player.line(target);
                  target.addTempSkill('hj_hd_yange_mark');
                  target.chooseCard('【燕歌】：请交给'+get.translation(player)+'一张牌','he',true);
                }else{event.goto(3);}
                          }else{event.goto(3);}
            }
            'step 2'
            if(result.bool&&result.cards&&result.cards.length){
              player.gain(result.cards[0],target,'gain2');
            }
            'step 3'
            if(event.targets.length){
              event.goto(1);
            }
            'step 4'
            player.chooseTarget('【燕歌】：请将'+get.translation(trigger.cards)+'交给一名其他角色',true,function(card,player,target){
              return target!=player&&target.hasSkill('hj_hd_yange_mark');
            })
            'step 5'
            if(result.bool){
              result.targets[0].gain(trigger.cards,'gain2');
            } 
          },
          ai:{
            maixie:true,
            "maixie_hp":true,
            effect:{
              target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')) return [1,0.55];
              },
            },
          },
          subSkill:{
            mark:{
              sub:true,
            },
          },
        },

        "hj_hd_huituo":{ //恢拓

          trigger:{
            player:"damageEnd",
          },
          direct:true,
          forced:true,
          content:function (){
            "step 0"
            player.chooseTarget(get.prompt2('hj_hd_huituo')).set('ai',function(target){
              var player=_status.event.player;
              if(get.attitude(player,target)>0){
                return get.recoverEffect(target,player,player)+1;
              }
              return 0;
            });
            "step 1"
            if(result.bool){
              player.logSkill('hj_hd_huituo',result.targets);
              var target=result.targets[0];
              event.target=target;
              target.judge(function(card){
                if(target.hp==target.maxHp){
                  if(get.color(card)=='red') return -1;
                }
                if(get.color(card)=='red') return 1;
                return 0;
              });
            } else {
              event.finish();
            }
            "step 2"
            if(result.color){
              if(result.color=='red'){
                if(event.target.isDamaged()){
                  if(!event.target.countCards('h')){
                    event.target.recover(trigger.num*2);
                  }else{
                    event.target.recover(trigger.num);
                  }
                }
              }
              else{
                if(event.target.isDamaged()){
                  event.target.draw(trigger.num*2);
                }else{
                  event.target.draw(trigger.num);
                }
              }
            }
          },
          ai:{
            maixie:true,
            "maixie_hp":true,
          },
        },
        "hj_hd_mingjian":{ //明鉴

          enable:"phaseUse",
          usable:1,
          filterTarget:function (card,player,target){
            return player!=target;
          },
          locked:true,
          filter:function (event,player){
            return player.countCards('h')>0;
          },
          filterCard:true,
          selectCard:-1,
          discard:false,
          lose:true,
          content:function (){
            "step 0"
            player.$give(cards.length,target);
            target.gain(cards,player);
            "step 1"
            if(!target.hasSkill('hj_hd_mingjian_mark')){
              target.addSkill('hj_hd_mingjian_mark');
            };
            if(!target.hasSkill('hj_hd_mingjian_from')){
              target.addSkill('hj_hd_mingjian_from');
            };
            target.storage.hj_hd_mingjian_mark++;
            target.updateMarks('hj_hd_mingjian_mark');
            "step 2"
            target.storage.hj_hd_mingjian_from=player;
            "step 3"
            if(player.getEnemies().contains(target)){
              target.addTempSkill('hj_hd_mingjian_damage',{player:'phaseEnd'});
            }
            else{
              target.addTempSkill('hj_hd_mingjian_recover',{player:'phaseEnd'});
            }
          },
          ai:{
            order:1,
            result:{
              target:function (player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(player.countCards('h')==1&&player.countCards('h','du')) return -1;
                if(player.hp<=2&&player.countCards('h','shan')) return 0;
                if(target.countCards('h')+player.countCards('h')>target.hp+2) return 0;
                if(get.attitude(player,target)>3) return 1;
                return 0;
              },
            },
          },
          group:"hj_hd_mingjian_target",
          subSkill:{
            from:{
              onremove:true,
              mod:{
                globalFrom:function (from,to,distance){
                  if(from.storage.hj_hd_mingjian_from==to) return -Infinity;
                },
              },
              sub:true,
            },
            damage:{
              sub:true,
            },
            recover:{
              sub:true,
            },
            target:{
              trigger:{
                global:"phaseBegin",
              },
              forced:true,
              direct:true,
              priority:100,
              content:function (){
                if(trigger.player.hasSkill('hj_hd_mingjian_damage')){
                  trigger.player.removeSkill('hj_hd_mingjian_damage');
                  trigger.player.line(player,'fire');
                  player.damage(trigger.player);
                }
                if(trigger.player.hasSkill('hj_hd_mingjian_recover')){
                  trigger.player.removeSkill('hj_hd_mingjian_recover');
                  if(player.isDamaged()){
                    trigger.player.line(player,'thunder');
                    player.recover(trigger.player);
                  }
                }
              },
              sub:true,
            },
            mark:{
              charlotte:true,
              mark:true,
              marktext:"忠",
              intro:{
                content:"该角色的手牌上限+#且可以额外使用#张【杀】",
              },
              init:function (player,skill){
                if(!player.storage[skill]) player.storage[skill]=0;
              },
              onremove:function (player,skill){
                player.storage[skill]=0;
              },
              mod:{
                maxHandcard:function (player,num){
                  return num+player.storage.hj_hd_mingjian_mark;
                },
                cardUsable:function (card,player,num){
                  if(card.name=='sha') return num+player.storage.hj_hd_mingjian_mark;
                },
              },
              sub:true,
            },
          },
        },
        "hj_hd_xingshuai":{ //兴衰
          trigger:{
            player:"dying",
          },
          forced:true,
          direct:true,
          priority:100,
          content:function (){
            var list=game.filterPlayer();
            for(var i=0;i<list.length;i++){
              if(list[i]!=player&&list[i].hasSkill('hj_hd_mingjian_from')&&list[i].hasSkill('hj_hd_mingjian_mark')){
                player.logSkill('hj_hd_xingshuai');
                list[i].removeSkill('hj_hd_mingjian_mark');
                list[i].removeSkill('hj_hd_mingjian_from');
                player.line(list[i],'thunder');
                list[i].damage(player);
                player.recover();
              }
            }
          },
        },

        "hj_hd_quhu":{ //驱虎

          enable:"phaseUse",
          locked:true,
          filter:function (event,player){
            if(player.countCards('h')==0) return false;
            if(player.hasSkill('hj_hd_quhu_mark')) return false;
            return game.hasPlayer(function(current){
              return current.countCards('h');
            });
          },
          filterTarget:function (card,player,target){
            return player.canCompare(target);
          },
          content:function (){
            "step 0"
            if(target.hp<=player.hp){
              player.loseHp();
              player.addTempSkill('hj_hd_quhu_mark');
            }
            "step 1"
            player.chooseToCompare(target);
            "step 2"
            if(result.bool){
              if(game.hasPlayer(function(player){
                return player!=target&&target.inRange(player)&&game.countPlayer()>2;
              })){
                player.chooseTarget(function(card,player,target){
                  var source=_status.event.source;
                  return target!=source&&target!=player;
                }).set('ai',function(target){
                  return get.damageEffect(target,_status.event.source,player);
                }).set('source',target);
              }
              else{
                player.line(target);
                if(player.hasSkill('hj_hd_quhu_mark')){
                  target.damage(2,player);
                }else{
                  target.damage(player);
                  event.finish();
                }
              }
            }
            else{
              if(player.hasSkill('hj_hd_quhu_mark')&&player.hp==1){
                player.recover();
              }
              target.line(player);
              player.damage(target);
              event.finish();
            }
            "step 3"
            if(result.bool&&result.targets&&result.targets.length){
              target.line(result.targets[0]);
              if(player.hasSkill('hj_hd_quhu_mark')){
                result.targets[0].damage(2,target);
              }else{
                result.targets[0].damage(target);
              }
            }
          },
          ai:{
            order:0.5,
            result:{
              target:function (player,target){
                var att=get.attitude(player,target);
                var oc=(target.countCards('h')==1);
                if(att>0&&oc) return 0;
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                  if(players[i]!=target&&players[i]!=player&&target.inRange(players[i])){
                    if(get.damageEffect(players[i],target,player)>0){
                      return att>0?att/2:att-(oc?5:0);
                    }
                  }
                }
                return 0;
              },
              player:function (player,target){
                if(target.hasSkillTag('jueqing',false,target)) return -10;
                var mn=1;
                var hs=player.getCards('h');
                for(var i=0;i<hs.length;i++){
                  mn=Math.max(mn,hs[i].number);
                }
                if(mn<=11&&player.hp<2) return -20;
                var max=player.maxHp-hs.length;
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                  if(get.attitude(player,players[i])>2){
                    max=Math.max(Math.min(5,players[i].hp)-players[i].countCards('h'),max);
                  }
                }
                switch(max){
                  case 0:return mn==13?0:-20;
                  case 1:return mn>=12?0:-15;
                  case 2:return 0;
                  case 3:return 1;
                  default:return max;
                }
              },
            },
            expose:0.2,
          },
          subSkill:{
            mark:{
              sub:true,
            },
          },
        },
        "hj_hd_jieming":{ //节命

          trigger:{
            player:"damageEnd",
          },
          direct:true,
          forced:true,
          content:function (){
            "step 0"
            event.count=trigger.num;
            "step 1"
            event.count--;
            player.chooseTarget(get.prompt2('hj_hd_jieming'),function(card,player,target){
              return !target.hasSkill('hj_hd_jieming_mark');
            }).set('ai',function(target){
              var att=get.attitude(_status.event.player,target);
              if(att>2){
                return target.maxHp-target.countCards('h');
              }
              return att/3;
            });
            "step 2"
            if(result.bool){
              player.logSkill('hj_hd_jieming',result.targets);   
              for(var i=0;i<result.targets.length;i++){
                if(result.targets[i].countCards('h')>result.targets[i].maxHp-result.targets[i].hp){
                  if(result.targets[i].isDamaged()){
                    var num=result.targets[i].maxHp-result.targets[i].hp;
                  }else{
                    var num=1;
                  }
                }else{
                  if(result.targets[i].countCards('h')>0){
                    var num=result.targets[i].countCards('h');
                  }else{
                    var num=1;
                  }
                }
                if(result.targets[i].countCards('h')<result.targets[i].maxHp){
                  result.targets[i].drawTo(result.targets[i].maxHp+num);
                }else{
                  result.targets[i].draw(result.targets[i].countCards('h'));
                  result.targets[i].addTempSkill('hj_hd_jieming_mark',{player:"phaseBegin"});  
                }
              }
            }
            "step 3"
            if(event.count) event.goto(1);
          },
          ai:{
            maixie:true,
            "maixie_hp":true,
            effect:{
              target:function (card,player,target,current){
                if(get.tag(card,'damage')&&target.hp>1){
                  if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                  var max=0;
                  var players=game.filterPlayer();
                  for(var i=0;i<players.length;i++){
                    if(get.attitude(target,players[i])>0){
                      max=Math.max(Math.min(5,players[i].hp)-players[i].countCards('h'),max);
                    }
                  }
                  switch(max){
                    case 0:return 2;
                    case 1:return 1.5;
                    case 2:return [1,2];
                    default:return [0,max];
                  }
                }
                if((card.name=='tao'||card.name=='caoyao')&&target.hp>1&&target.countCards('h')<=target.hp) return [0,0];
              },
            },
          },
          subSkill:{
            mark:{
              trigger:{
                player:"loseAfter",
              },
              forced:true,
              direct:true,
              filter:function (event,player){
                return player.countCards('h')<player.maxHp;
              },
              content:function (){
                player.removeSkill('hj_hd_jieming_mark');
              },
              sub:true,
            },
          },
        },
        "hj_hd_xunye":{ //殉业
          trigger:{
            global:"drawBegin",
          },
          forced:true,
          direct:true,
          filter:function (event,player){
            return event.player!=player&&
            event.player.countCards('h')<=player.countCards('h');
          },
          content:function (){
            trigger.player.addSkill('hj_hd_xunye_mark');
          },
          group:"hj_hd_xunye_draw",
          subSkill:{
            mark:{
              sub:true,
            },
            draw:{
              trigger:{
                global:"drawAfter",
              },
              forced:true,
              direct:true,
              content:function (){
                if(trigger.player.hasSkill('hj_hd_xunye_mark')){
                  if(trigger.player.countCards('h')>player.countCards('h')&&player.isDamaged()){
                    player.logSkill('hj_hd_xunye');
                    player.recover();
                  }
                  trigger.player.removeSkill('hj_hd_xunye_mark')
                }
              },
              sub:true,
            },
          },
        },

        "hj_hd_chouce":{ //筹策

          trigger:{
            player:"judgeAfter",
          },
          forced:true,
          priority:-1,
          content:function (){
            'step 0'
            if(get.color(trigger.result.card)=='red'){
              player.draw();
            }else{
              player.gain(trigger.result.card,'gain2');
            }
            'step 1'
            if(get.color(trigger.result.card)=='red'){
              player.chooseTarget('【筹策】：是否令一名其他角色获得'+get.translation(trigger.result.card)+'？',function(card,player,target){
                return player!=target
              }).set('ai',function(target){
                var player=_status.event.player;
                var att=get.attitude(player,target)/Math.sqrt(1+target.countCards('h'));
                if(target.hasSkill('hj_hd_xianfu_mark')) return att*2;
                return att;
              })
            }else{
              player.chooseTarget('【筹策】：是否弃置一名其他角色区域内的一张牌？',function(card,player,target){
                return player!=target&&target.countCards('hej')>0;
              }).set('ai',function(target){
                var player=_status.event.player;
                var att=get.attitude(player,target);
                if(att<0){
                  att=-Math.sqrt(-att);
                }
                else{
                  att=Math.sqrt(att);
                }
                return att*lib.card.guohe.ai.result.target(player,target);
              })
            }
            'step 2'
            if(result.bool){
              player.line(result.targets[0]);
              if(get.color(trigger.result.card)=='red'){
                result.targets[0].gain(trigger.result.card,'gain2');
                if(result.targets[0].hasSkill('hj_hd_xianfu_mark')&&result.targets[0].isDamaged()){
                  result.targets[0].recover();
                  player.judge();
                }
              }else{
                player.discardPlayerCard('请弃置'+get.translation(result.targets[0])+'一张牌',result.targets[0],'hej',true);
                if(!result.targets[0].hasSkill('hj_hd_xianfu_mark')&&!result.targets[0].isDamaged()){
                  result.targets[0].loseHp();
                  player.judge();
                }
              }
            }else{
              event.finish();
            }
          },
        },
        "hj_hd_tianji":{ //天嫉
          trigger:{
            player:"damageEnd",
          },
          forced:true,
          filter:function (event,player){
            return event.num>0;
          },
          content:function (){
            'step 0'
            event.num=trigger.num;
            'step 1'
            player.judge();
            'step 2'
            event.num--;
            'step 3'
            if(event.num>0){
              event.goto(1);
            }
            'step 4'
            if(trigger.source&&trigger.source.hasSkill('hj_hd_xianfu_mark')){
              player.line(trigger.source);
              trigger.source.removeSkill('hj_hd_xianfu_mark');
              player.loseHp();
              player.judge();
            }
          },
          group:"hj_hd_tianji_recover",
          subSkill:{
            recover:{
              trigger:{
                player:"recoverEnd",
              },
              forced:true,
              direct:true,
              filter:function (event,player){
                return event.num>0;
              },
              content:function (){
                'step 0'
                event.num=trigger.num;
                'step 1'
                player.judge();
                'step 2'
                event.num--;
                'step 3'
                if(event.num>0){
                  event.goto(1);
                }
              },
              sub:true,
            },
          },
        },
        "hj_hd_xianfu":{ //先辅

          skillAnimation:true,
          animationColor:"thunder",
          trigger:{
            global:"gameDrawAfter",
            player:"phaseBegin",
          },
          direct:true,
          forced:true,
          filter:function (){
            return game.players.length>1;
          },
          content:function (){
            'step 0'
            player.chooseTarget(get.prompt2('hj_hd_xianfu'),function(card,player,target){
              return target!=player&&!target.hasSkill('hj_hd_xianfu_mark');
            }).set('ai',function(target){
              var att=get.attitude(_status.event.player,target);
              if(att>0) return att+1;
              if(att==0) return Math.random();
              return att;
            });
            'step 1'
            if(result.bool){
              player.logSkill('hj_hd_xianfu',result.targets[0]);
              player.line(result.targets[0],'thunder');
              result.targets[0].addSkill('hj_hd_xianfu_mark');
            }
          },
          group:["hj_hd_xianfu_die","hj_hd_xianfu_damage","hj_hd_xianfu_recover"],
          subSkill:{
            mark:{
              mark:true,
              marktext:"辅",
              intro:{
                content:"该角色已成为$的“先辅”目标",
              },
              sub:true,
            },
            die:{
              trigger:{
                global:"dieBegin",
              },
              forced:true,
              filter:function (event,player){
                return event.player!=player&&event.player.hasSkill('hj_hd_xianfu_mark');
              },
              content:function (){
                trigger.player.removeSkill('hj_hd_xianfu_mark');
              },
              sub:true,
            },
            recover:{

              trigger:{
                global:"recoverEnd",
              },
              forced:true,
              filter:function (event,player){
                return event.player!=player&&player.isDamaged()&&event.player.hasSkill('hj_hd_xianfu_mark');
              },
              content:function (){
                trigger.player.line(player,'thunder');
                player.recover(trigger.num);
              },
              sub:true,
            },
            damage:{

              trigger:{
                global:"damageEnd",
              },
              forced:true,
              filter:function (event,player){
                return event.player!=player&&event.player.hasSkill('hj_hd_xianfu_mark');
              },
              content:function (){
                trigger.player.line(player,'fire');
                player.damage(trigger.source,trigger.num);
              },
              sub:true,
            },
          },
        },

        "hj_hd_qizhi":{ //奇制
          trigger:{
            player:"useCardToPlayered",
          },
          direct:true,
          forced:true,
          filter:function (event,player){
            if(!event.targets) return false;
            if(!event.isFirstTarget) return false;
            if(_status.currentPhase!=player) return false;
            if(event.noai) return false;
            return game.hasPlayer(function(target){
              return !event.targets.contains(target)&&target.countCards('he')>0;
            });
          },
          content:function (){
            "step 0"
            player.chooseTarget(get.prompt('hj_hd_qizhi'),'将一名角色的一张牌置入牌堆底并令其摸一张牌，若此牌不为基本牌，则你摸一张牌',function(card,player,target){
              return !_status.event.targets.contains(target)&&target.countCards('he')>0;
            }).set('ai',function(target){
              var player=_status.event.player;
              if(target==player) return 2;
              if(get.attitude(player,target)<=0){
                return 1
              }
              if(target.hasSkill('hj_hd_qizhi_mark')){
                return -6;
              }
              return 0.5;
            }).set('targets',trigger.targets);
            "step 1"
            if(result.bool){
              player.getHistory('custom').push({hj_hd_qizhi:true});
              if(!event.isMine()&&!_status.connectMode) game.delay();
              player.logSkill('hj_hd_qizhi',result.targets);
              player.chooseCardButton(result.targets[0],result.targets[0].getCards('he'),'请将该角色的一张牌置入牌堆底',true);
              event.target=result.targets[0];
            }else{event.finish();}
            "step 2"
            if(result.bool){
              if(get.type(result.links[0])!='basic'){
                player.draw();
              }
              ui.cardPile.appendChild(result.links[0]);
              event.target.draw();   
              if(event.target.countCards('h')>=player.countCards('h')&&event.target!=player){
                player.gainPlayerCard(event.target,'h',true);
              }
              if(player.hasSkill('hj_hd_jinqu_buff')){
                player.storage.hj_hd_jinqu_buff++;
                player.markSkill('hj_hd_jinqu_buff');
                player.syncStorage('hj_hd_jinqu_buff');
              }
              if(game.countPlayer()>2&&event.target!=player){
                if(!event.target.hasSkill('hj_hd_qizhi_mark')){
                  event.target.addTempSkill('hj_hd_qizhi_mark');
                }
                else{
                  player.loseHp();
                }
              }
            }
          },
          subSkill:{
            mark:{
              sub:true,
            },
          },
        },
        "hj_hd_jinqu":{ //进趋

          trigger:{
            player:"phaseBegin",
          },
          forced:true,
          direct:true,
          filter:function (event,player){
            return player.isDamaged()&&player.countCards('he')>0;
          },
          content:function (){
            "step 0"
            var num=player.maxHp-player.hp;
            player.chooseToDiscard(get.prompt('hj_hd_jinqu'),'你可以弃置至多'+get.translation(num)+'张牌，若如此做，当你本回合弃牌阶段弃置的牌数不小于当前体力值时，你可以额外摸牌','he',[1,num]);
            "step 1" 
            if(result.bool){
              player.logSkill('hj_hd_jinqu');
              player.addSkill('hj_hd_jinqu_buff');
              player.storage.hj_hd_jinqu_buff+=result.cards.length;
              player.markSkill('hj_hd_jinqu_buff');
              player.syncStorage('hj_hd_jinqu_buff');
            }
          },
          subSkill:{
            buff:{
              mark:true,
              marktext:"趋",
              init:function (player){
                player.storage.hj_hd_jinqu_buff=0;
              },
              onremove:function (player){
                player.storage.hj_hd_jinqu_buff=0;
              },
              intro:{
                content:"若你于弃牌阶段弃置的牌不少于你的当前体力值，则你摸#张牌",
              },
              trigger:{
                player:"phaseDiscardEnd",
              },
              forced:true,
              direct:true,
              content:function (){
                "step 0"
                if(trigger.cards&&trigger.cards.length>=player.hp){
                  player.logSkill('hj_hd_jinqu');
                  player.draw('bottom',player.storage.hj_hd_jinqu_buff);
                }
                "step 1"
                player.removeSkill('hj_hd_jinqu_buff');
              },
              sub:true,
            },
          },
        },
        "hj_hd_zhuchang":{ //筑昶
          trigger:{
            player:"phaseDrawBegin",
          },
          forced:true,
          priority:-1,
          content:function (){
            "step 0"
            trigger.changeToZero();
            "step 1"
            player.draw(2);
            player.draw('bottom',2);
            "step 2"
            player.randomDiscard('h',2,true);
          },
        },

        "hj_hd_jueqing":{ //绝情
          trigger:{
            global:["damageBegin","recoverBegin"],
          },
          forced:true,
          filter:function (event,player){
            return _status.currentPhase!=event.player&&
            event.player.countCards('h')&&
            event.player.hp>0;
          },
          content:function (){
            'step 0'
            trigger.cancel();
            'step 1'
            trigger.player.loseHp();
            'step 2'
            if(trigger.player.countCards('h')){
              trigger.player.showHandcards();
            }else{
              event.finish();
            }
            'step 3'
            if(trigger.player.countCards('h')){
              if(trigger.player.countCards('h',{color:"red"})){
                trigger.player.discard(trigger.player.getCards('h',{color:'red'}),Infinity,true);
              }else{
                if(trigger.player!=player){
                  trigger.player.loseHp();
                }
              }
            }
          },
        },
        "hj_hd_shangshi":{ //伤逝
          trigger:{
            player:["loseAfter","damageAfter","loseHpAfter"],
          },
          forced:true,
          direct:true,
          priority:-1,
          filter:function (event,player){
            return player.isDamaged()&&
            player.countCards('h')<=player.getDamagedHp();
          },
          content:function (){
            'step 0'
            if(_status.currentPhase==player){
              player.logSkill('hj_hd_shangshi');
              player.draw(player.getDamagedHp());
            }
            else{
              if(player.countCards('h')<player.getDamagedHp()){
                player.logSkill('hj_hd_shangshi');
                player.drawTo(player.getDamagedHp());
              }
            }
          },
          ai:{
            maixie:true,
            "maixie_hp":true,
            threaten:0.8,
            effect:{
              target:function (card,player,target){
                if(get.tag(card,'damage')){
                  if(!target.hasFriend()) return;
                  if(target.hp>=4) return [0.5,get.tag(card,'damage')*2];
                }
              },
            },
          },
        },
        "hj_hd_wuxin":{ //无心
          trigger:{
            player:"recoverAfter",
          },
          forced:true,
          filter:function (event,player){
            return player.countCards('h');
          },
          content:function (){
            player.chooseToDiscard('h',Infinity,true);
          },
        },

        "hj_hd_zhenlie":{ //贞烈
          filter:function (event,player){
            return event.player!=player&&event.card;
          },
          logTarget:"player",
          check:function (event,player){
            if(event.getParent().excluded.contains(player)) return false;
            if(get.attitude(player,event.player)>0){
              return false;
            }
            if(get.tag(event.card,'respondSha')){
              if(player.countCards('h',{name:'sha'})==0){
                return true;
              }
            }
            else if(get.tag(event.card,'respondShan')){
              if(player.countCards('h',{name:'shan'})==0){
                return true;
              }
            }
            else if(get.tag(event.card,'damage')){
              if(player.countCards('h')<2) return true;
            }
            else if(event.card.name=='shunshou'&&player.hp>2){
              return true;
            }
            return false;
          },
          trigger:{
            target:"useCardToTargeted",
          },
          content:function (){
            "step 0"
            player.loseHp();
            "step 1"
            trigger.getParent().excluded.add(player);
            "step 2"
            trigger.player.draw();
            "step 3"
            if(trigger.player.countCards('he')){
              if(trigger.player.hp>player.hp){
                var num=trigger.player.hp-player.hp;
              }else{
                var num=1;
              }
              player.chooseCardButton(trigger.player,[1,num],'贞烈：你可以弃置'+get.translation(trigger.player)+'至多'+get.translation(num)+'张手牌',trigger.player.getCards('h'));
            }
            "step 4"
            if(result.bool){
              trigger.player.discard(result.links)
            }
            "step 5"
            if(result.bool){
              if(result.links.length<=player.maxHp-player.hp){
                if(trigger.player.countCards('h')){
                  trigger.player.showHandcards();
                }else{
                  if(trigger.player.countCards('e')){
                    trigger.player.chooseToDiscard('e',true);
                  }
                }
                trigger.player.loseHp();
              }
            }
          },
          ai:{
            expose:0.3,
          },
        },
        "hj_hd_miji":{ //秘计
          trigger:{
            player:["phaseBegin","phaseEnd"],
          },
          filter:function (event,player){
            return player.isDamaged()&&!player.hasSkill('hj_hd_miji_mark');
          },
          locked:true,
          content:function (){
            "step 0"
            player.judge(function(card){
              return get.color(card)=='black'?1:-1;
            });
            "step 1"
            if(result.bool){
              player.addTempSkill('hj_hd_miji_mark');
              event.num=player.getDamagedHp();
              player.draw(event.num);
              var check=player.countCards('h')-event.num;
              player.chooseCardTarget({
                selectCard:[1,event.num],
                filterTarget:function(card,player,target){
                  return player!=target&&target.isDamaged();
                },
                ai1:function(card){
                  var player=_status.event.player;
                  if(player.maxHp-player.hp==1&&card.name=='du') return 30;
                  var check=_status.event.check;
                  if(check<1) return 0;
                  if(player.hp>1&&check<2) return 0;
                  return get.unuseful(card)+9;
                },
                ai2:function(target){
                  var att=get.attitude(_status.event.player,target);
                  if(ui.selected.cards.length==1&&ui.selected.cards[0].name=='du') return 1-att;
                  return att-2;
                },
                prompt:'秘计：是否将至多'+get.cnNumber(event.num)+'张手牌置于一名已受伤的其他角色的武将牌旁？',
              }).set('check',check);
            }
            "step 2"
            if(result.bool){
              player.logSkill('hj_hd_miji_mark');
              result.targets[0].addSkill('hj_hd_miji_buff');
              player.line(result.targets[0],'green');
              player.$give(result.cards.length,result.targets[0]);
              player.lose(result.cards,ui.special);
              result.targets[0].storage.hj_hd_miji_buff=result.targets[0].storage.hj_hd_miji_buff.concat(result.cards);
              result.targets[0].syncStorage('hj_hd_miji_buff');
              result.targets[0].markSkill('hj_hd_miji_buff');
              game.log(player,'将',result.cards,'置于',result.targets[0],'的武将牌上称为','#y“计”');
            }
          },
          ai:{
            threaten:function (player,target){
              if(target.hp==1) return 3;
              if(target.hp==2) return 1.5;
              return 0.5;
            },
            effect:{
              target:function (card,player,target){
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
              },
            },
          },
          subSkill:{
            mark:{

              sub:true,
            },
            buff:{
              trigger:{
                target:"useCardToTargeted",
              },
              forced:true,
              filter:function (event,player){
                return player.storage.hj_hd_miji_buff.length>0&&
                event.card&&event.card.name=='sha';
              },
              notemp:true,
              marktext:"计",
              intro:{
                content:"cards",
              },
              onremove:function (player){
                player.storage.hj_hd_miji_buff=[];
              },
              init:function (player){
                player.storage.hj_hd_miji_buff=[];
              },
              content:function (){
                "step 0"
                player.gain(player.storage.hj_hd_miji_buff,'fromStorage',player,'giveAuto');
                game.addVideo('storage',player,['hj_hd_miji_buff',get.cardsInfo(player.storage.hj_hd_miji_buff),'cards']);    
                "step 1"
                player.storage.hj_hd_miji_buff=[];
                player.markSkill('hj_hd_miji_buff');
                player.syncStorage('hj_hd_miji_buff');
                "step 2"
                trigger.getParent().excluded.add(player);
                "step 3"
                player.removeSkill('hj_hd_miji_buff');
              },
              sub:true,
            },
          },
        },
        "hj_hd_lieran":{ //冽然
          trigger:{
            player:"judge",
          },
          forced:true,
          content:function (){
            "step 0"
            var card=get.cards()[0];
            event.card=card;
            game.cardsGotoOrdering(card).relatedEvent=trigger;
            "step 1"
            player.$throw(card);
            "step 2"
            if(get.color(player.judging[0])!=get.color(card)){
              card.clone.classList.add('thrownhighlight');
              if(trigger.player.judging[0].clone){
                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
              }
              game.cardsDiscard(trigger.player.judging[0]);
              trigger.player.judging[0]=card;
              game.log(trigger.player,'的判定牌改为',card);
              game.delay(2);
            }else{
              game.delay(2);
              player.gain(player.judging[0],'gain2');
              player.gain(card,'gain2');
            }
          },
        },

        "hj_hd_tiaoxin":{ //挑衅
          enable:"phaseUse",
          usable:1,
          locked:true,
          filterCard:true,
          selectCard:true,
          position:"h",
          filter:function (event,player){
            return player.countCards('h')>0;
          },
          filterTarget:function (card,player,target){
            return target!=player&&target.countCards('he')>0;
          },
          content:function (){
            "step 0"
            player.discardPlayerCard(target,true);
            "step 1"
            if(cards[0].name=='sha'||result.links[0].name=='sha'){
              if(cards[0].name=='sha'){
                target.damage(player,true);
              }
              if(result.links[0].name=='sha'&&target.isAlive()){
                player.damage(target,true);
              }
            }else{
              player.draw();
              target.draw();
            }    
          },
          ai:{
            order:4,
            expose:0.2,
            result:{
              target:-1,
              player:function (player,target){
                if(target.countCards('h')==0) return 0;
                if(target.countCards('h')==1) return -0.1;
                if(player.hp<=2) return -2;
                if(player.countCards('h','shan')==0) return -1;
                return -0.5;
              },
            },
            threaten:1.1,
          },
        },
        "hj_hd_tianxing":{ //天星
          trigger:{
            player:"phaseBegin",
          },
          locked:true,
          priority:-1,
          content:function (){
            "step 0"
            player.skip('phaseDraw');
            "step 1"
            if(game.countPlayer()>5){
              event.cards=get.cards(9);
            }else{
              event.cards=get.cards(7);
            }
            if(player.maxHp-player.hp>1){
              var num=player.maxHp-player.hp;
            }else{
              var num=1;
            }
            if(num<event.cards.length){
              player.chooseCardButton(event.cards,[num,Infinity],'天星：请将至少'+get.translation(num)+'张牌置于牌堆顶',true).set('ai',ai.get.buttonValue);
            }else{
              player.chooseCardButton(event.cards,[1,Infinity],'天星：请将至少一张牌置于牌堆顶',true).set('ai',ai.get.buttonValue);
            }
            "step 2"
            if(result.bool){
              var xing=[];
              for(var i=0;i<result.links.length;i++){
                xing.push(result.links[i]);
                cards.remove(result.links[i]);
              }
              player.gain(cards,'gain2');
              while(xing.length){
                ui.cardPile.insertBefore(xing.pop(),ui.cardPile.firstChild);
              }
            }
          },
        },

        "hj_hd_tieji":{ //铁骑
          trigger:{
            player:"useCardToPlayered",
          },
          locked:true,
          priority:100,
          check:function (event,player){
            return get.attitude(player,event.target)<=0;
          },
          filter:function (event,player){
            return event.card.name=='sha';
          },
          logTarget:"target",
          content:function (){
            "step 0"
            player.addTempSkill('unequip','shaAfter');
            if(!trigger.target.hasSkill('hj_hd_tieji_mark')){
              trigger.target.addSkill('hj_hd_tieji_mark');
            }
            trigger.target.addSkill('hj_hd_tieji_buff');
            player.judge(function(card){
              if(get.color(card)=='red') return 1;
              return -1;
            });
            "step 1"
            if(result.color=='red'){
              player.getStat().card.sha--;
              trigger.getParent().directHit.add(trigger.target);
            }else{
              var suit=get.suit(result.card);
              var target=trigger.target;
              var num=target.countCards('h','shan');
              target.chooseToDiscard('请弃置一张'+get.translation(suit)+'牌，否则你失去一点体力','he',function(card){
                return get.suit(card)==_status.event.suit;
              }).set('ai',function(card){
                var num=_status.event.num;
                if(num==0) return 0;
                if(card.name=='shan') return num>1?2:0;
                return 8-get.value(card);
              }).set('num',num).set('suit',suit);
            }
            "step 2"
            if(!result.bool){
              trigger.getParent().excluded.add(trigger.target);
              trigger.target.loseHp();
            }
          },
          subSkill:{
            buff:{
              sub:true,
            },
            mark:{
              init:function (player,skill){
                var skills=player.getSkills(true,false);
                for(var i=0;i<skills.length;i++){
                  if(get.skills[i]){
                    skills.splice(i--,1);                                 
                  } 
                }
                player.disableSkill(skill,skills);
              },
              onremove:function (player,skill){
                player.enableSkill(skill);
              },
              mark:true,
              marktext:"骑",
              locked:true,
              intro:{
                content:"该角色所有技能均已失效",
              },
              sub:true,
            },
          },
        },
        "hj_hd_xunxi":{ //迅袭
          mod:{
            globalFrom:function (from,to,distance){
              if(to.getEquip(3)||to.getEquip(4)) return distance-Infinity;
            },
          },
          trigger:{
            player:"phaseUseBegin",
          },
          forced:true,
          filter:function (event,player){
            return !player.countCards('h',{name:"sha"})&&
            player.hp>1;
          },
          content:function (){
            "step 0"
            player.loseHp();
            "step 1"
            player.gain(game.createCard('sha'),'gain2');
          },
        },

        "hj_hd_longyin":{ //龙吟

          trigger:{
            global:"shaBegin",
          },
          forced:true,
          direct:true,
          filter:function (event,player){
            return event.target&&
            player.countCards('he')>0&&
            event.card.name=='sha'&&
            _status.currentPhase==event.player&&
            event.parent.parent.parent.name=='phaseUse';
          },
          content:function (){
            "step 0"
            var go=false;
            if(get.attitude(player,trigger.player)>0){
              go=true;
            }
            if(trigger.player!=player){
              var next=player.chooseToDiscard(get.prompt('longyin'),'弃置一张牌并与'+get.translation(trigger.player)+'一同摸一张牌，然后令其本次使用的【杀】不计入使用次数','he');
            }else{
              var next=player.chooseToDiscard(get.prompt('longyin'),'弃置一张牌并摸一张牌，然后令你本次使用的【杀】不计入使用次数','he');
            }
            next.logSkill=['hj_hd_longyin',trigger.player];
            next.set('ai',function(card){
              if(_status.event.go){
                return 6-get.value(card);
              }
              return 0;
            });
            next.set('go',go);
            "step 1"
            if(result.bool){
              trigger.player.getStat().card.sha--;
            }
            "step 2"
            if(result.bool){
              if(trigger.player!=player){
                trigger.player.draw();
                player.draw();
              }else{
                player.draw();
              }
              player.storage.hj_hd_longyix++;
              player.markSkill('hj_hd_longyix');
              player.syncStorage('hj_hd_longyix');
            }
          },
          ai:{
            expose:0.2,
          },
        },
        "hj_hd_rongzheng":{ //戎征
          trigger:{
            global:"damageBegin",
          },
          locked:true,
          priority:100,
          check:function (event,player){
            return get.attitude(player,event.player)>0&&
            player.hp>2;
          },
          filter:function (event,player){
            return event.source&&event.source!=player&&
            event.card&&event.card.name=='sha'&&event.player!=player&&
            player.storage.hj_hd_longyix>0;
          },
          content:function (){
            "step 0"
            player.storage.hj_hd_longyix--;
            player.markSkill('hj_hd_longyix');
            player.syncStorage('hj_hd_longyix');
            "step 1"
            trigger.cancel();
            "step 2"
            player.draw();
            trigger.source.useCard({name:'sha'},player);
          },
          ai:{
            threaten:1.2,
            expose:1,
          },
        },

        "hj_hd_lieren":{ //烈刃
          trigger:{
            player:"shaBegin",
          },
          locked:true,
          filter:function (event,player){
            return player.canCompare(event.target);
          },
          check:function (event,player){
            return get.attitude(player,event.target)<0;
          },
          priority:5,
          content:function (){
            "step 0"
            player.line(trigger.target);
            player.chooseToCompare(trigger.target);
            "step 1"
            if(result.bool){
              if(trigger.target.countCards('h')>0){
                player.gainPlayerCard(trigger.target,'h',true);
              }else{
                player.draw();
              }
            }else{
              player.damage(trigger.target);
              if(get.position(result.target)=='d') player.gain(result.target,'gain2');
              if(get.position(result.player)=='d') player.gain(result.player,'gain2');
            }
          },
        },
        "hj_hd_juxiang":{ //巨象
          marktext:"蛮",
          init:function (player){
            player.storage.hj_hd_juxiang=0;
          },
          intro:{
            content:function (storage){
              if(storage>0) return '你已累计受到了'+storage+'点伤害';
              if(storage<0) return '你已累计受到了'+storage+'点伤害';
              return '本轮内未受伤';
            },
          },
          trigger:{
            player:"damageEnd",
          },
          forced:true,
          direct:true,
          content:function (){
            player.storage.hj_hd_juxiang+=trigger.num;
            player.markSkill('hj_hd_juxiang');
            player.syncStorage('hj_hd_juxiang');
          },
          group:["hj_hd_juxiang_gain","hj_hd_juxiang_target","hj_hd_juxiang_nanman","hj_hd_juxiang_sha"],
          subSkill:{
            gain:{
              trigger:{
                global:"useCardAfter",
              },
              forced:true,
              direct:true,
              priority:-1,
              filter:function (event,player){
                return (event.card.name=='nanman'&&event.player!=player&&
                  get.itemtype(event.cards)=='cards'&&
                  get.position(event.cards[0])=='d');
              },
              content:function (){
                'step 0'
                player.draw();
                player.logSkill('hj_hd_juxiang');
                'step 1'
                ui.cardPile.insertBefore(trigger.cards.pop(),ui.cardPile.firstChild);
                game.log(trigger.cards,'被置于了牌堆顶');
              },
              sub:true,
            },
            target:{
              trigger:{
                target:"useCardToTargeted",
              },
              forced:true,
              priority:100,
              filter:function (event,player){
                return event.card.name=='nanman';
              },
              content:function (){
                'step 0'
                player.logSkill('hj_hd_juxiang');
                trigger.getParent().excluded.add(player);
                'step 1'
                player.recover();
              },
              sub:true,
            },
            sha:{
              trigger:{
                global:"respondEnd",
              },
              forced:true,
              direct:true,
              priority:-1,
              filter:function (event,player){
                return event.card.name=='sha'&&event.player!=player;
              },
              content:function (){
                player.logSkill('hj_hd_juxiang');
                player.useCard({name:'sha'},trigger.player,false);
              },
              sub:true,
              popup:false,
            },
            nanman:{
              trigger:{
                global:"roundStart",
              },
              forced:true,
              direct:true,
              priority:100,
              content:function (){
                'step 0'
                if(player.storage.hj_hd_juxiang>0){
                  player.logSkill('hj_hd_juxiang');
                  event.target=game.filterPlayer().randomGet(player);
                  player.line(event.target);
                }else{event.finish();}
                'step 1'
                player.storage.hj_hd_juxiang--;
                player.markSkill('hj_hd_juxiang');
                player.syncStorage('hj_hd_juxiang');
                event.target.gain(game.createCard('nanman'),'gain2');
                'step 2'
                if(player.storage.hj_hd_juxiang>0){
                  event.goto(0);
                }else{
                  player.unmarkSkill('hj_hd_juxiang');
                  event.finish();
                }
              },
              sub:true,
            },
          },
        },

        "hj_hd_xueji":{ //血祭
          enable:"phaseUse",
          usable:1,
          locked:true,
          filterTarget:function (event,player,target){
            return player!=target;
          },
          selectTarget:function (){
            var player=_status.event.player
            return [1,Math.max(1,player.getDamagedHp())];
          },
          multitarget:true,
          multiline:true,
          line:"fire",
          content:function (){
            "step 0"
            player.loseHp();
            "step 1"
            event.delay=false;
            for(var i=0;i<targets.length;i++){
              if(!targets[i].isLinked()){
                targets[i].link(true);
                event.delay=true;
              }
            }
            "step 2"
            if(event.delay){
              game.delay();
            }
            "step 3"
            targets[0].damage('fire');
          },
          ai:{
            order:11,
            result:{
              target:function (player,target){
                if(player.hp+player.countCards('h',{name:"tao"})>2) return -1;
              },
            },
            basic:{
              order:5,
              useful:1,
              value:5.5,
            },
            tag:{
              respond:2,
              respondSha:2,
              damage:1,
            },
          },
        },
        "hj_hd_shengyou":{ //圣佑
          trigger:{
            player:"phaseBegin",
          },
          forced:true,
          content:function (){
            if(!player.getEquip(1)){
              if(trigger.name=='phase'){
                player.useCard(game.createCard('qinglong','spade',13),player);
              }
            }
            else{
              player.recover();
            }
          },
        },

        "hj_hd_qiangwu":{ //枪舞
          enable:"phaseUse",
          locked:true,
          filter:function (event,player){
            return !player.hasSkill('hj_hd_qiangwu_mark')&&
            !player.hasSkill('hj_hd_qiangwu_king');
          },
          content:function (){
            "step 0"
            player.judge(function(card){
              if(get.number(card)>1&&get.number(card)<13) return -6;
              return 0;
            })
            "step 1"
            if(result.bool==false){
              player.addTempSkill('hj_hd_qiangwu_mark');
              player.storage.hj_hd_qiangwu_mark=result.number;
              game.log(player,'于本回合内使用点数比',player.storage.hj_hd_qiangwu_mark,'小的【杀】无距离限制；使用点数于',player.storage.hj_hd_qiangwu_mark,'相等的【杀】不可被闪避；使用点数比',player.storage.hj_hd_qiangwu_mark,'大的【杀】无次数限制')
            }else{
              player.addTempSkill('hj_hd_qiangwu_king');
              game.log(player,'于本回合内使用【杀】时无距离与次数限制且不可闪避');
            }
          },
          ai:{
            result:{
              player:1,
            },
            order:11,
          },
          subSkill:{
            has:{
              trigger:{
                player:"phaseEnd",
              },
              forced:true,
              direct:true,
              content:function (){
                player.removeSkill('hj_hd_qiangwu_has');
              },
              sub:true,
            },
            mark:{
              mark:true,
              marktext:"枪",
              group:["hj_hd_qiangwu_small","hj_hd_qiangwu_same","hj_hd_qiangwu_big"],
              onremove:function (player){
                player.storage.hj_hd_qiangwu_mark=0;
              },
              init:function (player){
                player.storage.hj_hd_qiangwu_mark=0;
              },
              intro:{
                content:"☆当前的技能判定点数为#；</br></br>★每当你使用【杀】时，若此【杀】的点数：<li>小于#：此【杀】无视距离且会率先掠夺目标角色装备区内的防具牌<li>等于#：此【杀】不可闪避且会使你恢复等量体力值<li>大于#：此【杀】不计入出牌次数限制且可造成的伤害量+1",
              },
              mod:{
                aiOrder:function (player,card,num){
                  if(card.name=='sha'&&card.number>player.storage.hj_hd_qiangwu_mark) return num+2;
                },
                targetInRange:function (card,player){
                  if(_status.currentPhase==player&&card.name=='sha'&&card.number<player.storage.hj_hd_qiangwu_mark) return true;
                },
                cardUsable:function (card,player){
                  if(_status.currentPhase==player&&card.name=='sha'&&card.number>player.storage.hj_hd_qiangwu_mark) return Infinity;
                },
              },
              sub:true,
            },
            small:{
              trigger:{
                player:"useCardToPlayered",
              },
              forced:true,
              filter:function (event,player){
                return event.card.name=='sha'&&
                event.card.number<player.storage.hj_hd_qiangwu_mark&&
                event.target.getCards('e',{subtype:'equip2'}).length>0;
              },
              content:function (){
                player.gain(trigger.target.getEquip(2),trigger.target,'give',true);
              },
              sub:true,
            },
            same:{
              trigger:{
                player:"useCardToPlayered",
              },
              filter:function (event,player){
                return event.card.name=='sha'&&
                event.card.number==player.storage.hj_hd_qiangwu_mark;
              },
              forced:true,
              content:function (){
                "step 0"
                trigger.getParent().directHit.add(trigger.target);
                "step 1"
                player.recover();
              },
              sub:true,
            },
            big:{
              trigger:{
                player:"useCard",
              },
              forced:true,
              priority:-1,
              filter:function (event,player){
                return event.card.name=='sha'&&
                event.card.number>player.storage.hj_hd_qiangwu_mark;
              },
              content:function (){
                if(!trigger.baseDamage) trigger.baseDamage=1;
                trigger.baseDamage+=1;
              },
              sub:true,
            },
            king:{
              mark:true,
              marktext:"枪",
              intro:{
                content:"你于本回合内使用【杀】无距离与次数限制且不可闪避",
              },
              mod:{
                targetInRange:function (card,player){
                  if(card.name=='sha') return true;
                },
                cardUsable:function (card,player,num){
                  if(card.name=='sha') return Infinity;
                },
              },
              trigger:{
                player:"useCardToPlayered",
              },
              filter:function (event,player){
                return event.card.name=='sha';
              },
              forced:true,
              content:function (){
                trigger.getParent().directHit.add(trigger.target);
              },
              sub:true,
            },
          },
        },
        "hj_hd_shenxian":{ //甚贤
          trigger:{
            global:"discardAfter",
          },
          filter:function (event,player){
            if(event.player==player||_status.currentPhase==player) return false;
            for(var i=0;i<event.cards.length;i++){
              if(get.type(event.cards[i])=='basic'&&event.cards[i].isInPile()) return true;
            }
            return false;
          },
          priority:-1,
          forced:true,
          content:function (){
            "step 0"
            player.$gain2(trigger.cards);
            "step 1"
            game.delay();
            player.gain(trigger.cards);
          },
          ai:{
            threaten:1.5,
          },
        },

        "hj_hd_fanghun":{ //芳魂
          init:function (player){
            player.storage.hj_hd_fanghun=0;
          },
          intro:{
            content:"当前共持有#枚印记",
          },
          trigger:{
            source:"damageAfter",
          },
          forced:true,
          direct:true,
          priority:-1,
          content:function (){
            player.storage.hj_hd_fanghun+=trigger.num*2;
            player.markSkill('hj_hd_fanghun');
            player.syncStorage('hj_hd_fanghun');
          },
        },
        "hj_hd_longmai":{ //龙脉
          enable:"phaseUse",
          usable:1,
          locked:true,
          filterCard:function (card){
            return get.type(card)!='basic';
          },
          selectCard:true,
          position:"h",
          filter:function (event,player){
            return player.storage.hj_hd_fanghun>=player.hp&&
            player.countCards('h',{type:'basic'})<player.countCards('h');
          },
          content:function (){
            "step 0"
            player.storage.hj_hd_fanghun-=player.hp;
            player.markSkill('hj_hd_fanghun');
            player.syncStorage('hj_hd_fanghun');
            "step 1"
            player.recover();
            player.gain(get.cardPile(function(card){
              return card.name=='sha';
            }),'gain2');
            player.gain(get.cardPile(function(card){
              return card.name=='shan';
            }),'gain2');
            "step 2"
            if(!player.hasSkill('longdan')&&!player.hasSkill('hj_hd_longmai_longdan')){
              player.addTempSkill('hj_hd_longmai_longdan',{player:"phaseBegin"});
            }
          },
          ai:{
            order:10,
            result:{
              player:1,
            },
          },
        },
        "hj_hd_longdan":{ //龙胆
          trigger:{
            player:["useCard","respond"],
          },
          direct:true,
          forced:true,
          locked:true,
          unique:true,
          charlotte:true,
          filter:function (event){
            return event.skill=='hj_hd_longmai_longdan_sha'||
            event.skill=='hj_hd_longmai_longdan_shan'||
            event.skill=='longdan_sha'||
            event.skill=='longdan_shan';
          },
          content:function (){
            player.draw(player.hp);
          },
          group:["hj_hd_longmai_longdan_sha","hj_hd_longmai_longdan_shan"],
          subSkill:{
            sha:{

              enable:['chooseToRespond','chooseToUse'],
              locked:true,
              filterCard:{
                name:"shan",
              },
              viewAs:{
                name:"sha",
              },
              viewAsFilter:function (player){
                if(!player.countCards('h','shan')) return false;
              },
              prompt:"将一张闪当杀使用或打出",
              check:function (){return 1},
              ai:{
                effect:{
                  target:function (card,player,target,current){
                    if(get.tag(card,'respondSha')&&current<0) {
                      return 0.6
                    }
                  },
                },
                respondSha:true,
                skillTagFilter:function (player){
                  if(!player.countCards('h','shan')) return false;
                },
                order:function (){
                  return get.order({name:'sha'})+0.1;
                },
                useful:-1,
                value:-1,
                basic:{
                  useful:[5,1],
                  value:[5,1],
                },
                result:{
                  target:function (player,target){
                    if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                      if(get.attitude(player,target)>0){
                        return -6;
                      }
                      else{
                        return -3;
                      }
                    }
                    return -1.5;
                  },
                },
                tag:{
                  respond:1,
                  respondShan:1,
                  damage:function (card){
                    if(card.nature=='poison') return;
                    return 1;
                  },
                  natureDamage:function (card){
                    if(card.nature) return 1;
                  },
                  fireDamage:function (card,nature){
                    if(card.nature=='fire') return 1;
                  },
                  thunderDamage:function (card,nature){
                    if(card.nature=='thunder') return 1;
                  },
                  poisonDamage:function (card,nature){
                    if(card.nature=='poison') return 1;
                  },
                },
              },
              sub:true,
            },
            shan:{

              enable:['chooseToRespond','chooseToUse'],
              locked:true,
              filterCard:{
                name:"sha",
              },
              viewAs:{
                name:"shan",
              },
              prompt:"将一张杀当闪打出",
              check:function (){return 1},
              viewAsFilter:function (player){
                if(!player.countCards('h','sha')) return false;
              },
              ai:{
                respondShan:true,
                skillTagFilter:function (player){
                  if(!player.countCards('h','sha')) return false;
                },
                effect:{
                  target:function (card,player,target,current){
                    if(get.tag(card,'respondShan')&&current<0) {
                      return 0.6
                    }
                  },
                },
                order:4,
                useful:-1,
                value:-1,
                basic:{
                  useful:[7,2],
                  value:[7,2],
                },
              },
              sub:true,
            },
          },
        },

        "hj_hd_kurou":{ //苦肉
          enable:"phaseUse",
          locked:true,
          filterTarget:function (card,player,target){
            return target!=player;
          },
          content:function (){
            "step 0"
            player.gainPlayerCard('he',target,true);
            target.gainPlayerCard('he',player,true);
            "step 1"
            player.loseHp();
            target.loseHp();
            "step 2"
            if(player.hp>target.hp){
              if(player.countCards('he')){
                player.chooseToDiscard('he',true).set('ai',function(card){
                  return 6-get.useful(card);
                });
              }
            }else{
              if(target.countCards('he')){
                target.chooseToDiscard('he',true).set('ai',function(card){
                  return 6-get.useful(card);
                });
              }
            }
          },
          ai:{
            order:10,
            expose:1,
            result:{
              target:function (target,player){
                if(player.hp+player.num('h','tao')>3) return -1;
                return 0;
              },
            },
          },
        },
        "hj_hd_zhaxiang":{ //诈降
          trigger:{
            player:"loseHpAfter",
          },
          forced:true,
          priority:-1,
          line:"fire",
          content:function (){
            "step 0"
            player.draw(trigger.num*3);
            "step 1"
            if(_status.currentPhase==player){
              if(!player.hasSkill('hj_hd_zhaxiang_buff')){
                player.addTempSkill('hj_hd_zhaxiang_buff');
                player.addTempSkill('hj_hd_zhaxiang_mark');
                player.storage.hj_hd_zhaxiang_mark++;
                player.markSkill('hj_hd_zhaxiang_mark');
                player.syncStorage('hj_hd_zhaxiang_mark')
              }else{
                player.storage.hj_hd_zhaxiang_mark++;
                player.markSkill('hj_hd_zhaxiang_mark');
                player.syncStorage('hj_hd_zhaxiang_mark');
              }
            }
            else{
              player.line(_status.currentPhase,'fire');
              _status.currentPhase.damage(player,'fire',true);
            }
          },
          ai:{
            maihp:true,
          },
          subSkill:{
            buff:{
              mod:{
                cardUsable:function (card,player,num){
                  if(card.name=='sha') return num+=player.storage.hj_hd_zhaxiang_mark;
                },
                targetInRange:function (card,player){
                  if(card.name=='sha') return true;
                },
              },
              trigger:{
                source:"damageBefore",
              },
              forced:true,
              content:function (){
                trigger.nature='fire';
              },
              sub:true,
            },
            mark:{
              init:function (player){
                player.storage.hj_hd_zhaxiang_mark=0;
              },
              onremove:function (player){
                player.storage.hj_hd_zhaxiang_mark=0;
              },
              sub:true,
            },
          },
        },

        "hj_hd_hunqu":{ //魂躯
          trigger:{
            player:"dying",
          },
          forced:true,
          priority:100,
          content:function (){
            "step 0"
            player.chooseControl('heart','diamond','spade','club').set('prompt','请选择一种花色').set('ai',function(event){
              switch(Math.floor(Math.random()*6)){
                case 0:return 'heart';
                case 1:case 4:case 5:return 'diamond';
                case 2:return 'club';
                case 3:return 'spade';
              }
            });
            "step 1"
            game.log(player,'选择了'+get.translation(result.control)+'花色');
            trigger.player.popup(result.control);
            var cardPileFirstCard=get.cards(1);
            player.showCards(cardPileFirstCard);
            if(get.suit(cardPileFirstCard)==result.control){
              event.finish();
            }
            else{
              player.hp=Math.min(1,player.maxHp); 
              player.gain(cardPileFirstCard);
            };
          },
        },
        "hj_hd_qingluo":{ //青罗
          mod:{
            globalFrom:function (from,to,distance){
              return distance-1;
            },
            globalTo:function (from,to,distance){
              return distance-1;
            },
          },
          trigger:{
            global:"gameDrawAfter",
          },
          forced:true,
          priority:100,
          content:function (){
            player.disableEquip(2);
            player.disableEquip(3);
            player.disableEquip(4);
          },
        },

        "hj_hd_tushe":{ //图射
          trigger:{
            player:"phaseUseBegin",
          },
          locked:true,
          priority:100,
          check:function (event,player){
            return player.countCards('h')>0;
          },
          filter:function (event,player){
            return player.countCards('h')>0;
          },
          content:function (){
            'step 0'
            player.showHandcards();
            'step 1'
            var num=player.countCards('h');
            event.num=num;
            'step 2'
            var card;
            if(player.countCards('h',{type:"basic"})>player.countCards('h',{type:"trick"})&&player.countCards('h',{type:"basic"})>player.countCards('h',{type:"equip"})&&player.countCards('h',{type:"basic"})>player.countCards('h',{type:"delay"})){
              card=player.getCards('h',{type:'basic'});
              player.addTempSkill('hj_hd_tushe_mark');
              player.addTempSkill('hj_hd_tushe_basic',{player:'phaseBegin'});
            }
            if(player.countCards('h',{type:"trick"})>player.countCards('h',{type:"basic"})&&player.countCards('h',{type:"trick"})>player.countCards('h',{type:"equip"})&&player.countCards('h',{type:"trick"})>player.countCards('h',{type:"delay"})){
              card=player.getCards('h',{type:'trick'});
              player.addTempSkill('hj_hd_tushe_mark');
              player.addTempSkill('hj_hd_tushe_trick',{player:'phaseBegin'});
            }
            if(player.countCards('h',{type:"equip"})>player.countCards('h',{type:"basic"})&&player.countCards('h',{type:"equip"})>player.countCards('h',{type:"trick"})&&player.countCards('h',{type:"equip"})>player.countCards('h',{type:"delay"})){
              card=player.getCards('h',{type:'equip'});
              player.addTempSkill('hj_hd_tushe_mark');
              player.addTempSkill('hj_hd_tushe_equip',{player:'phaseBegin'});
            }
            if(player.countCards('h',{type:"delay"})>player.countCards('h',{type:"basic"})&&player.countCards('h',{type:"delay"})>player.countCards('h',{type:"trick"})&&player.countCards('h',{type:"delay"})>player.countCards('h',{type:"equip"})){
              card=player.getCards('h',{type:'delay'});
              player.addTempSkill('hj_hd_tushe_mark');
              player.addTempSkill('hj_hd_tushe_delay',{player:'phaseBegin'});
            }
            if(player.countCards('h',{type:"basic"})==player.countCards('h',{type:"trick"})||player.countCards('h',{type:"basic"})==player.countCards('h',{type:"equip"})||player.countCards('h',{type:"basic"})==player.countCards('h',{type:"delay"})||player.countCards('h',{type:"trick"})==player.countCards('h',{type:"equip"})||player.countCards('h',{type:"trick"})==player.countCards('h',{type:"delay"})||player.countCards('h',{type:"equip"})==player.countCards('h',{type:"delay"})){
              if(!player.hasSkill('hj_hd_tushe_mark')){
                card=player.getCards('h');
                player.addTempSkill('hj_hd_tushe_draw',{player:'phaseBegin'});
              }
            }
            player.discard(card);
            'step 3'
            if(!player.countCards('h')){
              player.draw(event.num);
            }
          },
          subSkill:{
            mark:{
              sub:true,
            },
            draw:{
              trigger:{
                player:"useCardToPlayered",
              },
              forced:true,
              direct:true,
              filter:function (event,player){
                if(event.getParent().triggeredTargets3.length>1) return false;
                return event.targets.length>0;
              },
              content:function (){
                player.logSkill('hj_hd_tushe');
                player.draw(trigger.targets.length);
              },
              sub:true,
            },
            basic:{
              trigger:{
                player:"useCardToPlayered",
              },
              forced:true,
              direct:true,
              filter:function (event,player){
                if(event.getParent().triggeredTargets3.length>1) return false;
                return event.targets.length>0&&!player.countCards('h',{type:"basic"});
              },
              content:function (){
                player.logSkill('hj_hd_tushe');
                player.draw(trigger.targets.length);
              },
              sub:true,
            },
            trick:{
              trigger:{
                player:"useCardToPlayered",
              },
              forced:true,
              direct:true,
              filter:function (event,player){
                if(event.getParent().triggeredTargets3.length>1) return false;
                return event.targets.length>0&&!player.countCards('h',{type:"trick"});
              },
              content:function (){
                player.logSkill('hj_hd_tushe');
                player.draw(trigger.targets.length);
              },
              sub:true,
            },
            delay:{
              trigger:{
                player:"useCardToPlayered",
              },
              forced:true,
              direct:true,
              filter:function (event,player){
                if(event.getParent().triggeredTargets3.length>1) return false;
                return event.targets.length>0&&!player.countCards('h',{type:"delay"});
              },
              content:function (){
                player.logSkill('hj_hd_tushe');
                player.draw(trigger.targets.length);
              },
              sub:true,
            },
            equip:{
              trigger:{
                player:"useCardToPlayered",
              },
              forced:true,
              direct:true,
              filter:function (event,player){
                if(event.getParent().triggeredTargets3.length>1) return false;
                return event.targets.length>0&&!player.countCards('h',{type:"equip"});
              },
              content:function (){
                player.logSkill('hj_hd_tushe');
                player.draw(trigger.targets.length);
              },
              sub:true,
            },
          },
        },
        "hj_hd_chuangli":{ //疮疬
          trigger:{
            player:"drawAfter",
          },
          forced:true,
          filter:function (event,player){
            return player.countCards('h',{suit:"heart",type:"basic"})>0;
          },
          content:function (){
            'step 0'
            player.showHandcards();
            'step 1'
            var num=player.countCards('h',{suit:"heart",type:"basic"});
            var card=player.getCards('h',{suit:"heart",type:"basic"});
            event.num=num;
            player.discard(card);
            'step 2'
            if(player.hasSkill('hj_hd_limu')&&player.storage.hj_hd_limu>0){
              player.storage.hj_hd_limu--;
              player.markSkill('hj_hd_limu');
              player.syncStorage('hj_hd_limu');
              player.draw('bottom',event.num);
            }
            'step 3'
            if(player.storage.hj_hd_limu<=0){
              player.unmarkSkill('hj_hd_limu');
            }
          },
        },
        "hj_hd_limu":{ //立牧
          mod:{
            cardUsable:function (card,player,num){
              if(player.storage.hj_hd_limu) return Infinity;
            },
            targetInRange:function (card,player){
              if(player.storage.hj_hd_limu) return true;
            },
          },

          marktext:"牧",
          intro:{
            content:"你当前共持有#枚“牧”印记",
          },
          init:function (player){
            player.storage.hj_hd_limu=0;
          },
          enable:"phaseUse",
          locked:true,
          usable:1,
          filter:function (event,player){
            return player.countCards('h');
          },
          filterCard:true,
          position:"he",
          selectCard:[1,Infinity],
          content:function (){
            'step 0'
            player.recover();
            'step 1'
            event.num=player.hp+cards.length;
            if(!player.countCards('h')){
              player.draw(event.num);
            }
            'step 2'
            player.storage.hj_hd_limu+=event.num;
            player.markSkill('hj_hd_limu');
            player.syncStorage('hj_hd_limu');
            'step 3'
            player.addSkill('hj_hd_limu_End') ; 
          },
          group:"hj_hd_limu_skip",
          subSkill:{
            End:{
              trigger:{
                player:"phaseEnd",
              },
              forced:true,
              direct:true,
              content:function (){
                'step 0'
                if(player.storage.hj_hd_limu>0){
                  player.storage.hj_hd_limu_skip+=player.storage.hj_hd_limu;
                  player.markSkill('hj_hd_limu_skip');
                  player.syncStorage('hj_hd_limu_skip');
                }else{
                  event.goto(2);
                }
                'step 1'
                player.storage.hj_hd_limu-=player.storage.hj_hd_limu;
                player.markSkill('hj_hd_limu');
                player.syncStorage('hj_hd_limu');
                'step 2'
                if(player.storage.hj_hd_limu<=0){
                  player.unmarkSkill('hj_hd_limu');
                }
                'step 3'
                player.removeSkill('hj_hd_limu_End');
              },
              sub:true,
            },
            skip:{
              init:function (player){
                player.storage.hj_hd_limu_skip=0;
              },
              trigger:{
                player:"phaseBegin",
              },
              forced:true,
              filter:function (event,player){
                return player.storage.hj_hd_limu_skip>0;
              },
              content:function (){
                'step 0'
                if(player.storage.hj_hd_limu_skip>=3){
                  player.skip('phaseDiscard');
                  game.log(player,'跳过了本回合的弃牌阶段');
                }
                if(player.storage.hj_hd_limu_skip>=2){
                  player.skip('phaseUse');
                  game.log(player,'跳过了本回合的出牌阶段');
                }
                if(player.storage.hj_hd_limu_skip>=1){
                  player.skip('phaseDraw');
                  game.log(player,'跳过了本回合的摸牌阶段');
                }
                'step 1'
                player.storage.hj_hd_limu_skip-=player.storage.hj_hd_limu_skip;
                player.markSkill('hj_hd_limu_skip');
                player.syncStorage('hj_hd_limu_skip');
              },
              sub:true,
            },
          },
        },

        "hj_hd_zongkui":{ //纵傀
          trigger:{
            global:"gameStart",
            player:["phaseBefore","damageAfter"],
            source:"damageEnd",
          },
          forced:true,
          direct:true,
          filter:function (event,player){
            return game.hasPlayer(function(current){
              return current!=player&&!current.hasSkill('hj_hd_guju_mark');
            });
          },
          content:function (){
            "step 0"
            player.chooseTarget(get.prompt2('hj_hd_zongkui'),function(card,player,target){
              if(_status.event.round&&!target.isMinHp()) return false;
              return target!=player&&!target.hasSkill('hj_hd_guju_mark');
            }).set('ai',function(target){
              var num=target.isMinHp()?0.5:(1+Math.random());
              if(get.attitude(_status.event.player,target)<0){
                num+=0.5;
              }
              return num;
            }).set('round',event.triggername=='roundStart');
            "step 1"
            if(result.bool){
              var target=result.targets[0];
              player.logSkill('hj_hd_zongkui',target);
              target.addSkill('hj_hd_guju_mark');
              player.storage.hj_hd_guju++;
              player.syncStorage('hj_hd_guju');
              player.markSkill('hj_hd_guju');
            }
          },
          ai:{
            threaten:1.4,
          },
        },
        "hj_hd_guju":{ //骨疽
          init:function (player){
            player.storage.hj_hd_guju=0;
          },
          trigger:{
            global:["damageEnd","loseHpEnd","recoverEnd","loseMaxHp"],
          },
          forced:true,
          priority:100,
          filter:function (event,player){
            return event.player!=player&&event.num>0&&
            event.player.hasSkill('hj_hd_guju_mark');
          },
          content:function (){
            if(player.isDamaged()){
              player.recover();
              trigger.player.removeSkill('hj_hd_guju_mark');
            }
            else{
              player.draw();
            }
          },
          subSkill:{
            mark:{
              mark:true,
              marktext:"傀",
              intro:{
                content:"该角色已成为“傀儡”",
              },
              unique:true,
              charlotte:true,
              sub:true,
            },
          },
        },
        "hj_hd_canshi":{ //蚕食
          group:["hj_hd_canshi1","hj_hd_canshi2"],
        },
        "hj_hd_canshi1":{ //蚕食1
          trigger:{
            player:"useCardToBefore",
          },
          filter:function (event,player){
            if(!event.targets||event.targets.length!=1) return false;
            var info=get.info(event.card);
            if(info.multitarget) return false;
            if(info.allowMultiple==false) return false;
            return game.hasPlayer(function(current){
              if(!current.hasSkill('hj_hd_guju_mark')) return false;
              return !event.targets.contains(current);
            });
          },
          forced:true,
          direct:true,
          content:function (){
            "step 0"
            player.chooseTarget(get.prompt2('hj_hd_canshi1'),[1,Infinity],function(card,player,target){
              if(!target.hasSkill('hj_hd_guju_mark')) return false;
              var trigger=_status.event.getTrigger();
              return !trigger.targets.contains(target);
            }).set('ai',function(target){
              var player=_status.event.player;
              return get.effect(target,_status.event.getTrigger().card,player,player);
            });
            "step 1"
            if(result.bool){
              if(!event.isMine()&&!_status.connectMode) game.delayx();
              event.targets=result.targets.slice(0);
              for(var i=0;i<event.targets.length;i++){
                event.targets[i].removeSkill('hj_hd_guju_mark');
              }
            }
            else{
              event.finish();
            }
            "step 2"
            player.logSkill('hj_hd_canshi1',event.targets);
            trigger.targets.addArray(event.targets);
          },
        },
        "hj_hd_canshi2":{ //蚕食2
          trigger:{
            global:"useCard",
          },
          priority:-1,
          locked:true,
          prompt2:function (event,card){
            return '是否发动【蚕食】？','锁定技，每当一名其他角色使用牌（'+get.translation(event.card)+'）时，若该角色已成为“傀儡”，你可以移除该角色的“傀”印记，令此牌无效并获得之';
          },
          check:function (event,player){
            return get.attitude(player,event.player)<0;
          },
          filter:function (event,player){
            return event.player.hasSkill('hj_hd_guju_mark');
          },
          content:function (){
            "step 0"
            trigger.player.removeSkill('hj_hd_guju_mark');
            "step 1"
            player.gain(trigger.cards);
            player.$gain2(trigger.cards);
            "step 2"
            trigger.cancel();
          },
        },

        "hj_hd_zhenjiu":{ //斟酒
          trigger:{
            global:"phaseBegin",
          },
          filter:function (event,player){
            return event.player!=player&&
            player.countCards('he')>0;
          },
          direct:true,
          forced:true,
          priority:100,
          content:function (){
            "step 0"
            var nono=(Math.abs(get.attitude(player,trigger.player))<3);
            if(get.damageEffect(trigger.player,player,player)<=0){
              nono=true
            }
            else if(!trigger.player.countCards('he')){
              nono=true;
            }
            var next=player.chooseToDiscard(get.prompt2('hj_hd_zhenjiu',trigger.player),'he');
            next.set('ai',function(card){
              if(_status.event.nono) return -1;
              return 6-get.useful(card);
            });
            next.set('logSkill',['hj_hd_zhenjiu',trigger.player]);
            next.set('nono',nono);
            "step 1"
            if(result.bool){
              if(trigger.player.countCards('he')){
                player.gainPlayerCard('he',trigger.player,true);
              }
              trigger.player.useCard({name:'jiu'},trigger.player);
            }
          },
          ai:{
            threaten:2,
            expose:0.3,
          },
        },
        "hj_hd_zhendu":{ //鸩毒
          trigger:{
            global:"useCard",
          },
          forced:true,
          priority:-1,
          filter:function (event,player){
            return event.card.name=='jiu'&&
            event.player!=player;
          },
          content:function (){
            trigger.player.loseHp();
            player.addTempSkill('hj_hd_zhendu_target');
          },
          subSkill:{
            target:{
              mod:{
                targetEnabled:function(card){
                  if(card.name=='sha') return false;
                },
              },
              sub:true,
            },
          },
        },
        "hj_hd_qiluan":{ //戚乱
          trigger:{
            global:"dieAfter",
          },
          priority:-100,
          forced:true,
          filter:function (event,player){
            return event.player!=player
            &&event.source==undefined||event.source==player;
          },
          content:function (){
            "step 0"
            player.draw(3);
            "step 1"
            player.chooseTarget(get.prompt2('hj_hd_qiluan'),function(card,player,target){
              return player!=target
            })
            "step 2"
            if(result.bool){
              player.line(result.targets[0]);
              result.targets[0].gain(game.createCard('jiu'),'gain2');
            }
          },
        },

        "hj_hd_jieyuan":{ //竭缘
          trigger:{
            source:"damageBegin",
          },
          forced:true,
          direct:true,
          filter:function (event,player){
            return player.countCards('h')&&event.player!=player;
          },
          content:function (){
            "step 0"
            if(player.hasSkill('hj_hd_jieyuan_sourcemark')){
              if(trigger.player.hp<player.hp){
                event.finish();
              }
            }
            "step 1"
            player.logSkill('hj_hd_jieyuan',trigger.player);
            player.showHandcards();
            "step 2"
            if(player.countCards('h',{color:'black'})>0){
              var num=player.countCards('h',{color:'black'});
              if(player.hasSkill('hj_hd_jieyuan_damagemark')){
                player.discard(player.getCards('h',{color:'black'}),true);
              }
              event.num=num;
            }else{
              trigger.num++;
              event.finish();
            }
            "step 3"
            trigger.num+=event.num;
          },
          group:["hj_hd_jieyuan_damage","hj_hd_jieyuan_start"],
          subSkill:{
            sourcemark:{
              sub:true,
            },
            damagemark:{
              sub:true,
            },
            start:{
              trigger:{
                global:"gameStart",
              },
              forced:true,
              direct:true,
              priority:100,
              content:function (){
                player.addSkill('hj_hd_jieyuan_sourcemark');
                player.addSkill('hj_hd_jieyuan_damagemark');
              },
              sub:true,
            },
            damage:{

              trigger:{
                player:"damageBegin",
              },
              forced:true,
              direct:true,
              filter:function (event,player){
                return player.countCards('h')&&event.source&&event.source!=player;
              },
              content:function (){
                "step 0"
                if(player.hasSkill('hj_hd_jieyuan_sourcemark')){
                  if(trigger.source.hp<player.hp){
                    event.finish();
                  }
                }
                "step 1"
                player.showHandcards();
                "step 2"
                if(player.countCards('h',{color:'red'})>0){
                  if(player.hasSkill('hj_hd_jieyuan_damagemark')){
                    player.discard(player.getCards('h',{color:'red'}),true);
                  }
                  player.logSkill('hj_hd_jieyuan_damage',trigger.source);
                  trigger.cancel();
                  trigger.source.loseHp();
                }
              },
              sub:true,
            },
          },
        },
        "hj_hd_yijue":{ //抑绝
          trigger:{
            player:"damageBegin",
          },
          forced:true,
          priority:-100,
          filter:function (event,player){
            return event.num>0;
          },
          content:function (){
            "step 0"
            if(trigger.source&&trigger.source!=player&&!trigger.source.hasSkill('hj_hd_yijue_debuff')){
              trigger.source.addSkill('hj_hd_yijue_debuff');
              trigger.source.addSkill('hj_hd_yijue_Debuff');
            }
            "step 1"
            if(player.hp==1){
              player.loseMaxHp(); 
              player.recover();
            }
          },
          subSkill:{
            Debuff:{
              trigger:{
                global:"phaseAfter",
              },
              forced:true,
              direct:true,
              priority:-1,
              content:function (){
                player.removeSkill('hj_hd_yijue_Debuff');
              },
              sub:true,
            },
            debuff:{
              mark:true,
              marktext:"绝",
              intro:{
                content:"该角色无法恢复体力值",
              },
              trigger:{
                player:"recoverBegin",
              },
              forced:true,
              direct:true,
              content:function (){
                trigger.cancel();
                game.log(player,'无法恢复体力值');
              },
              group:"hj_hd_yijue_End",
              sub:true,
            },
            End:{
              trigger:{
                player:"phaseEnd",
              },
              forced:true,
              direct:true,
              priority:100,
              filter:function (event,player){
                return !player.hasSkill('hj_hd_yijue_Debuff');
              },
              content:function (){
                "step 0"
                player.removeSkill('hj_hd_yijue_debuff');
                "step 1"
                player.removeSkill('hj_hd_yijue_End');
              },
              sub:true,
            },
          },
        },
        "hj_hd_fenxin":{ //焚心
          trigger:{
            global:"dieAfter",
          },
          forced:true,
          direct:true,
          priority:-1,
          filter:function (event,player){
            return event.player.hp<=0;
          },
          content:function (){
            "step 0"
            if(trigger.source&&trigger.source.hasSkill('hj_hd_fenxin_mark')&&player.hasSkill('hj_hd_jieyuan_sourcemark')){
              player.removeSkill('hj_hd_jieyuan_sourcemark');
              player.logSkill('hj_hd_fenxin');
              game.log(player,'发动技能','#g【竭缘】','时无需受到“当前体力值”的限制');
            }
            if(trigger.player.hasSkill('hj_hd_fenxin_mark')&&player.hasSkill('hj_hd_jieyuan_damagemark')){
              player.removeSkill('hj_hd_jieyuan_damagemark');
              player.logSkill('hj_hd_fenxin');
              game.log(player,'发动技能','#g【竭缘】','时无需弃置对应颜色的手牌');
            }
            "step 1"
            if(!player.hasSkill('hj_hd_jieyuan_sourcemark')&&!player.hasSkill('hj_hd_jieyuan_damagemark')){
              player.awakenSkill('hj_hd_fenxin');
            }
          },
          group:"hj_hd_fenxin_buff",
          subSkill:{
            mark:{
              sub:true,
            },
            buff:{
              trigger:{
                player:"damageAfter",
              },
              forced:true,
              direct:true,
              priority:100,
              filter:function (event,player){
                return event.source&&event.num>0&&
                event.source!=player&&event.source.isAlive();
              },
              content:function (){
                trigger.source.addSkill('hj_hd_fenxin_mark');
              },
              sub:true,
            },
          },
        },
      },
      translate:{
        "hj_hd_huncaopi":"魂曹丕",
        "hj_hd_huncaorui":"魂曹叡",
        "hj_hd_hunxunyu":"魂荀彧",
        "hj_hd_hunxizhicai":"魂戏志才",
        "hj_hd_hunwangji":"魂王基",
        "hj_hd_hunzhangchunhua":"魂张春华",
        "hj_hd_hunwangyi":"魂王异",
        "hj_hd_hunjiangwei":"魂姜维",
        "hj_hd_hunmachao":"魂马超",
        "hj_hd_hunguanping":"魂关平",
        "hj_hd_hunzhurong":"魂祝融",
        "hj_hd_hunguanyinping":"魂关银屏",
        "hj_hd_hunzhangxingcai":"魂张星彩",
        "hj_hd_hunzhaoxiang":"魂赵襄",
        "hj_hd_hunhuanggai":"魂黄盖",
        "hj_hd_hunzhoutai":"魂周泰",
        "hj_hd_hunliuyan":"魂刘焉",
        "hj_hd_hunbeimihu":"魂卑弥呼",
        "hj_hd_hunhetaihou":"魂何太后",
        "hj_hd_hunlingju":"魂灵雎",


        
        "hj_hd_fangzhu":"放逐",
        "hj_hd_fangzhu_info":"每当你受到其他角色造成的伤害后：若你的武将牌正面朝上，你与伤害来源均将武将牌翻至背面，然后你可以令一名其他角色弃置X张牌并翻面(X为你的已损失体力值);若你的武将牌已翻面，你将武将牌翻至正面并令伤害来源失去一点体力，然后你可以令一名其他角色摸X张牌并翻面(X为你的当前体力值)",
        "hj_hd_xingshang":"行殇",
        "hj_hd_xingshang_info":"每当一名区域内有牌的其他角色进入濒死状态时，你恢复一点体力并获得该角色的所有牌，然后令其进行一次判定并获得此次判定牌",
        "hj_hd_yange":"颂威",
        "hj_hd_yange_info":"每当你受到卡牌所造成的伤害时，你可以令与你距离为一的其他所有角色交给你一张牌。若如此做，你需将对你造成伤害的此牌交给本回合内你以此法获得过牌的其中一名角色。",

        "hj_hd_huituo":"恢拓",
        "hj_hd_huituo_info":"每当你受到伤害后，你可以令任意一名角色进行一次判定:若判定结果花色为红色，则该角色恢复X点体力，若该角色无手牌则额外恢复X点体力；若判定结果花色为黑色，则该角色摸X张牌，若该角色已受伤则额外摸X张牌（X为此次伤害量）",
        "hj_hd_mingjian":"明鉴",
        "hj_hd_mingjian_info":"出牌阶段(限一次)，你可以将所有手牌交给一名其他角色并令其获得“忠”印记；然后，根据其的身份，其于回合开始时令你恢复一点体力或对你造成一点伤害；持有“忠”印记的角色与你之间的距离视为一且其手牌上限与使用【杀】的次数上限均累计+X(X为你对其发动该技能的次数)",
        "hj_hd_xingshuai":"兴衰",
        "hj_hd_xingshuai_info":"每当你进入濒死状态时，你依次移除场上所有的“忠”印记并对所持有角色造成一点伤害，然后你恢复一点体力",

        "hj_hd_quhu":"驱虎",
        "hj_hd_quhu_info":"出牌阶段，你可以与一名其他角色进行拼点，若该角色的体力值不大于你，你率先失去一点体力且于下回合开始前不可再次使用该技能。若你赢，你可以令该角色对一名其他角色造成一点伤害。若此时场上角色不大于2，则改为对其造成一点伤害(若你因此法而失去了体力，则改为两点伤害)；若你没赢，你受到一点来自于该角色的伤害(若你因此技能而失去了体力且当前体力值为1，则你率先恢复一点体力)",
        "hj_hd_jieming":"节命",
        "hj_hd_jieming_info":"每当你受到一点伤害后，你可以令一名角色将手牌补至X(X为该角色的体力值上限与手牌数或已损失体力值较少一方的和且至少为1)；若你以此法选择的目标角色的当前手牌数不小于其的体力值上限，则改为令该角色将当前手牌数翻倍且于其手牌数小于其体力值上限或其下回合开始前均不可再次对其发动该技能",
        "hj_hd_xunye":"殉业",
        "hj_hd_xunye_info":"每当一名手牌数不大于你的其他角色摸牌后，若其手牌数因此而大于你且你已受伤，你恢复一点体力",

        "hj_hd_chouce":"筹策",
        "hj_hd_chouce_info":"当你的判定牌亮出后：1、若此次判定结果花色为红色，你摸一张牌并可以令一名其他角色获得此次的判定结果牌（若该角色持有“先辅”印记且其已受伤，你令其额外恢复一点体力，然后你进行一次判定）；2、若此次判定结果花色为黑色，你获得此次判定结果牌并可以弃置一名其他角色的一张牌（若该角色未持有“先辅”印记且其未受伤，你令其额外失去一点体力，然后你进行一次判定）",
        "hj_hd_tianji":"天嫉",
        "hj_hd_tianji_info":"每当你受到1点伤害或恢复1点体力值后，你进行一次判定（若伤害来源持有“先辅”印记，则其移除此印记，你失去一点体力，然后进行一次判定）",
        "hj_hd_xianfu":"先辅",
        "hj_hd_xianfu_info":"游戏/准备阶段开始时，你可以令一名未持有“先辅”印记的其他角色获得一枚“先辅”印记。每当持有“先辅”印记的角色受到伤害时，你受到等量点伤害；每当持有“先辅”印记的角色恢复体力值时，你恢复等量体力值",

        "hj_hd_qizhi":"奇制",
        "hj_hd_qizhi_info":"每当你于回合内使用一张牌后，你可以观看任意一名角色(不可为此牌目标)的牌并将其中任意一张置入牌堆底，然后令其摸一张牌。若你以此法置入牌堆底的牌不为基本牌，你率先摸一张牌；若你的手牌数依旧不大于该角色(不为你自己)，你获得其一张手牌；若你于本回合内已指定过该角色(不为你自己)为目标且场上现存活角色数大于2，你失去一点体力",
        "hj_hd_jinqu":"进趋",
        "hj_hd_jinqu_info":"准备阶段，你可以弃置至多X张牌(X为你的已损失体力值)；若如此做，当你于本回合弃牌阶段弃置的牌数不小于你的当前体力值时，你从牌堆底摸Y张牌(Y为你于本回合内发动〖奇制〗的次数与你以此法弃置的牌数之和)",
        "hj_hd_zhuchang":"筑昶",
        "hj_hd_zhuchang_info":"锁定技，摸牌阶段，你始终放弃摸牌，改为从牌堆顶与牌堆底各摸两张牌，然后随机弃置两张手牌",

        "hj_hd_jueqing":"绝情",
        "hj_hd_jueqing_info":"锁定技，每当一名持有手牌的角色于其回合外即将受到伤害或恢复体力值时，若其未处于濒死状态，则防止此效果，改为令其失去一点体力并展示所有手牌，然后弃置其中所有的红色牌。若该角色不为你且其手牌中无红色牌，则其额外失去一点体力",
        "hj_hd_shangshi":"伤逝",
        "hj_hd_shangshi_info":"每当你的手牌数不大于你的已损失体力值时，若此时是你的回合内，你摸X张牌；若此时是你的回合外，你将手牌数补至X(X为你已损失体力值)",
        "hj_hd_wuxin":"无心",
        "hj_hd_wuxin_info":"锁定技，每当你恢复体力值后，你弃置所有手牌",

        "hj_hd_zhenlie":"贞烈",
        "hj_hd_zhenlie_info":"每当你成为其他角色使用牌的目标时，你可以失去一点体力令此牌对你无效，然后令其摸一张牌。若如此做，你观看其的手牌并弃可以置其中至多X张牌(X为其与你当前体力值之差且至少为1)。若你以此法弃置的牌数不大于你的已损失体力值，该角色展示所有手牌(若其没有手牌则改为弃置装备区内的一张牌)并失去一点体力",
        "hj_hd_miji":"秘计",
        "hj_hd_miji_info":"每当你的准备或结束阶段开始时(发动成功后于本回合内仅限一次)，你可以进行一次判定：若判定结果为黑色，你摸X张牌并可以将至多等量张手牌置于一名已受伤的其他角色的武将牌旁称为“计”(X为你已损失体力值)；当该角色成为【杀】的目标时，其获得武将牌旁的所有“计”，然后令此【杀】无效",
        "hj_hd_lieran":"冽然",
        "hj_hd_lieran_info":"每当你的判定牌亮出时，你展示牌堆顶的一张牌，若此牌与判定结果牌的颜色不一致，你将判定结果更改为你以此法展示的牌；否则，你获得两张判定牌",

        "hj_hd_tiaoxin":"挑衅",
        "hj_hd_tiaoxin_info":"出牌阶段(限一次)，你可以弃置一张手牌，然后弃置一名其他角色的一张牌。若你以此法两张牌均不为【杀】，你与其各摸一张牌。否则，若你弃置的牌为【杀】，你对其造成一点伤害。若你弃置目标角色的牌为【杀】，你受到来自于其的一点伤害",
        "hj_hd_tianxing":"天星",
        "hj_hd_tianxing_info":"准备阶段开始时，你可以跳过本回合的摸牌阶段并观看牌堆顶的9张牌(场上现存活角色数不大于5时改为7张牌)，然后将其中的至少X张牌(X为你的已损失体力值且至少为1)以任意顺序依次置于牌堆顶并获得其余的所有牌。",

        "hj_hd_tieji":"铁骑",
        "hj_hd_tieji_info":"当你使用【杀】指定一名其他角色为目标时，你可以令其获得“骑”印记（“骑”:该角色所有技能失效）并令此【杀】无视其防具，然后进行一次判定：若判定结果花色为红色，你令此【杀】不计入出牌次数限制且不可闪避；若判定结果花色为黑色，则该角色需弃置一张与判定结果花色相同的牌，否则你防止此【杀】效果，改为令其失去1点体力。",
        "hj_hd_xunxi":"迅袭",
        "hj_hd_xunxi_info":"锁定技，你与装备区内坐骑栏有牌的角色的距离视为1；出牌阶段开始时，若你的体力值大于1且手牌中未持有【杀】，你失去1点体力，然后从牌堆随机获得一张【杀】",

        "hj_hd_longyin":"龙吟",
        "hj_hd_longyin_info":"每当一名角色于其出牌阶段使用【杀】时，你可以弃置一张牌令此【杀】不计入出牌次数限制，然后你与该角色各摸一张牌。若如此做，你获得一枚“龙义”印记",
        "hj_hd_rongzheng":"戎征",
        "hj_hd_rongzheng_info":"每当一名其他角色即将受到【杀】的伤害时，若伤害来源不为你，你可以移除一枚“龙义”印记防止此效果。若如此做，你摸一张牌并视为伤害来源对你使用一张【杀】",

        "hj_hd_lieren":"烈刃",
        "hj_hd_lieren_info":"每当你使用【杀】指定目标时，你可以与其拼点：若你赢，你获得其一张手牌(若其无手牌则改为你摸一张牌)；若你没赢，你受到来自其的一点伤害并依次将两张置入弃牌堆的拼点牌收入手中",
        "hj_hd_juxiang":"巨象",
        "hj_hd_juxiang_info":"每轮游戏开始时，你随机令X名其他角色获得一张【南蛮入侵】(X为你于上一轮所受到的伤害量)；【南蛮入侵】对你产生的效果改为令你恢复一点体力；其他角色使用的【南蛮入侵】进入弃牌堆后，你摸一张牌并将其置于牌堆顶；每当一名其他角色因响应而打出【杀】时，你视为对其使用一张【杀】",

        "hj_hd_xueji":"血祭",
        "hj_hd_xueji_info":"出牌阶段（限一次），你可以失去一点体力并将至多X名其他角色横置，然后对首名目标角色造成一点火属性伤害(X为你已损失体力值)",
        "hj_hd_shengyou":"圣佑",
        "hj_hd_shengyou_info":"锁定技，准备阶段，若你未装备武器，你将一张“青龙偃月刀”置入你的装备区；否则你恢复一点体力",

        "hj_hd_qiangwu":"枪舞",
        "hj_hd_qiangwu_info":"出牌阶段限一次，你可进行一次判定；每当你于本回合内使用【杀】时：若此【杀】的点数：1、小于判定结果点数，此【杀】无视距离且获得目标角色装备区内的防具牌；2、等于判定结果点数，此【杀】不可闪避且你恢复1点体力值；3、大于判定结果，此【杀】不计入出牌次数限制且造成的伤害值+1；4、若判定结果的点数为1或13，则你本回合内的〖枪舞〗效果改为使用【杀】时无视距离与次数限制且不可被闪避。",
        "hj_hd_shenxian":"甚贤",
        "hj_hd_shenxian_info":"每当一名其他角色于你的回合外弃置牌后，若其中含有基本牌，你获得之",

        "hj_hd_fanghun":"芳魂",
        "hj_hd_fanghun_info":"锁定技，每当你造成伤害后，你获得X枚“芳”印记（X为此次伤害量翻倍）",
        "hj_hd_longmai":"龙脉",
        "hj_hd_longmai_info":"出牌阶段(限一次)，你可以移除X枚“芳”印记与手牌中的一张非基本牌，然后你恢复一点体力并从牌堆中获得一张【杀】与【闪】，若如此做，直至你下回合开始前，视为你拥有技能“龙胆”，且每释放一次“龙胆”便摸X张牌(X为你当前体力值)",
        "hj_hd_longdan":"龙胆",
        "hj_hd_longdan_info":"",

        "hj_hd_kurou":"苦肉",
        "hj_hd_kurou_info":"出牌阶段,你可以选择一名其他角色，你与其各获得对方一张牌，然后依次失去1点体力。若如此做，你或其当前体力值较高的一方弃置一张牌",
        "hj_hd_zhaxiang":"诈降",
        "hj_hd_zhaxiang_info":"锁定技，每当你失去1点体力后，你摸3张牌；若此时是你的回合内，你后续造成的伤害均视为火属性伤害，使用【杀】无距离限制且使用次数上限+1；若此时是你的回合外，你对当前回合角色造成一点火属性伤害",

        "hj_hd_hunqu":"魂躯",
        "hj_hd_hunqu_info":"锁定技，当你进入频死状态时，你选择1种花色并展示牌堆顶的1张牌。若此牌非你选择的花色，则你获得此牌并恢复至一点体力",
        "hj_hd_qingluo":"奋激",
        "hj_hd_qingluo_info":"锁定技，游戏开始时，你废除自身装备区内的防具栏与坐骑栏；你与其他角色的距离永远视为1。",

        "hj_hd_tushe":"图射",
        "hj_hd_tushe_info":"出牌阶段开始时，你可以展示手牌，然后弃置其中数量最多的一种类型的牌(若手牌中最多类型的牌含有两种以上，则改为弃置所有手牌)。若你因此技能而弃置了所有手牌，则你摸等量张牌；若如此做，直至你的下回合开始前，每当你使用牌指定目标后，若你的手牌中未含有此类型的牌，则你摸X张牌(X为此牌所指定的目标角色数)",
        "hj_hd_chuangli":"疮疬",
        "hj_hd_chuangli_info":"每当你摸牌后，若你的手牌中持有♥️花色的基本牌，则你展示手牌并将其弃置之。若此时你持有“牧”印记，则你移除一枚“牧”印记并从牌堆底摸等量张牌",
        "hj_hd_limu":"立牧",
        "hj_hd_limu_info":"出牌阶段(限一次)，你可以弃置任意张牌，然后恢复一点体力并获得X枚“牧”印记；若你因此技能而弃置了所有手牌，则你摸X张牌(X为你以此法弃置的卡牌数与你的当前体力值之和)。若如此做，你于“牧”印记消耗殆尽前使用牌均无距离与次数限制。结束阶段，你移除武将牌旁所持有的“牧”印记，并根据其数量依次跳过下回合的摸牌阶段、出牌阶段、弃牌阶段",

        "hj_hd_zongkui":"纵傀",
        "hj_hd_zongkui_info":"游戏/回合开始时，你可以令一名未成为“傀儡”的其他角色获得“傀”印记；每当你造成或受到伤害时，你可以令一名未成为“傀儡”的其他角色获得“傀”印记",
        "hj_hd_guju":"骨疽",
        "hj_hd_guju_info":"每当“傀儡”的体力值变动时，你恢复一点体力并令其移除“傀”印记（若你未受伤则改为仅摸一张牌）",
        "hj_hd_canshi":"蚕食",
        "hj_hd_canshi_info":"每当你使用牌时，若此牌仅指定了一名角色为目标，你可以移除任意名“傀儡”的“傀”印记，同时选择其为目标（无视距离）；每当一名其他角色使用牌时，若该角色已成为“傀儡”，你可以移除该角色的“傀”印记，令此牌无效并获得之",
        "hj_hd_canshi1":"蚕食",
        "hj_hd_canshi1_info":"",    
        "hj_hd_canshi2":"蚕食",
        "hj_hd_canshi2_info":"",

        "hj_hd_zhenjiu":"斟酒",
        "hj_hd_zhenjiu_info":"每当一名其他角色的准备阶段开始时，你可以弃置一张牌并获得其一张牌。若如此做，视为其使用了一张【酒】",
        "hj_hd_zhendu":"鸩毒",
        "hj_hd_zhendu_info":"每当一名其他角色使用【酒】时，其失去一点体力，然后你于本回合内不可成为【杀】的目标",
        "hj_hd_qiluan":"戚乱",
        "hj_hd_qiluan_info":"每当一名其他角色阵亡后，若无伤害来源或伤害来源为你，你摸三张牌；然后你可以令一名其他角色获得一张【酒】",

        "hj_hd_jieyuan":"竭缘",
        "hj_hd_jieyuan_info":"锁定技，每当你即将对一名体力值不小于你的其他角色造成伤害时，你展示手牌并弃置其中所有的黑色牌，然后令此伤害+X(X为你此次弃置的黑色牌数量且至少为1)；每当你即将受到一名体力值不小于你的其他角色所造成的伤害时，你展示手牌并弃置其中所有的红色牌，然后防止此伤害并令伤害来源失去一点体力",
        "hj_hd_yijue":"抑绝",
        "hj_hd_yijue_info":"锁定技，每当你受到其他角色所造成的伤害后，你令伤害来源于其下回合结束前无法恢复体力。若此时你的当前体力值为1，你失去一点体力值上限，然后恢复一点体力",
        "hj_hd_fenxin":"焚心",
        "hj_hd_fenxin_info":"锁定技，每当一名其他角色死亡后，若伤害来源曾对你造成过伤害，你将技能〖竭缘〗中的“体力值不小于你”的限制效果移除；若该角色曾对你造成过伤害，你将技能〖竭缘〗中的“弃置所有对应颜色牌”的限制效果移除",
      },
    },"混沌篇");
    //why???
  }
  if(config.hj_luanshi){ //乱世魂将包
    game.addCharacterPack({
      character:{
        "hj_ls_hunspdongzhuo":["male","shen",8,["hj_ls_jiuchi","hj_ls_roulin","hj_ls_hengxing","hj_ls_baonue"],["zhu"]],
        "hj_ls_hunyuanshao":["male","shen",4,["hj_ls_luanji","hj_ls_mengzhu","hj_ls_mingmen"],["zhu"]],
        "hj_ls_hunliru":["male","shen",3,["hj_ls_mieji","hj_ls_juece","hj_ls_fencheng"],[]],
        "hj_ls_hunspjiaxu":["male","shen",3,["hj_ls_wansha","hj_ls_weimu","hj_ls_luanwu"],[]],
        "hj_ls_hunsplvbu":["male","shen",5,["hj_ls_zhanshen","hj_ls_wushuang","hj_ls_liqu"],[]],
        "hj_ls_hunlijue":["male","shen",5,["hj_ls_langxi","hj_ls_yisuan"],[]],
        "hj_ls_hunguosi":["male","shen",4,["hj_ls_tanbei","hj_ls_sidao"],[]],
        "hj_ls_hunhuaxiong":["male","shen",5,["hj_ls_badao","hj_ls_shiyong","hj_ls_mojiang"],[]],
        "hj_ls_hunfanchou":["male","shen",4,["hj_ls_xingluan"],[]],
        "hj_ls_hunzhangji":["male","shen",4,["hj_ls_tunjun","hj_ls_lueming"],[]],
        "hj_ls_hunxurong":["male","shen",4,["hj_ls_xionghuo","hj_ls_shajue"],[]],
        "hj_ls_hunyuanshu":["male","shen",4,["hj_ls_yongsi","hj_ls_weidi"],[]],
        "hj_ls_hunjushou":["male","shen",4,["hj_ls_xutu","hj_ls_shizhi"],[]],
        "hj_ls_hunshenpei":["male","shen",4,["hj_ls_beizhan","hj_ls_gangzheng"],[]],
        "hj_ls_huntianfeng":["male","shen",4,["hj_ls_sijian","hj_ls_gangzhi"],[]],
        "hj_ls_hunxuyou":["male","shen",4,["hj_ls_chenglue","hj_ls_shicai","hj_ls_cunmu"],[]],
        "hj_ls_hunxunchen":["male","shen",4,["hj_ls_fenglue","hj_ls_moushi"],[]],
        "hj_ls_hunyanliang&wenchou":["male","shen",4,["hj_ls_langxing","hj_ls_hubu","hj_ls_pojun","hj_ls_tanlang"],[]],
        "hj_ls_hunzhangxia&gaolan":["male","shen",4,["hj_ls_shanlie","hj_ls_yingzhen","hj_ls_baiji"],[]],
        "hj_ls_hunchunyuqiong":["male","shen",5,["hj_ls_cangchu","hj_ls_liangying","hj_ls_sushou"],[]],
      },
      skill:{
        "hj_ls_jiuchi":{ //酒池
          enable:"phaseUse",
          usable:1,
          content:function (){
            player.loseHp();
            player.useCard({name:'jiu'},player);
          },
        },
        "hj_ls_roulin":{ //肉林
          group:["hj_ls_roulin2"],
          trigger:{
            player:"shaBegin",
          },
          forced:true,
          filter:function (event,player){
            return event.card&&event.target.sex=='female';
          },
          content:function (){
            trigger.directHit=true;
          },
        },
        "hj_ls_hengxing":{ //横行
          group:["hj_ls_hengxing2"],
          trigger:{
            target:"useCardToBefore",
          },
          forced:true,
          priority:15,
          check:function (event,player){
            return get.effect(event.target,event.card,event.player,player)<0;
          },
          filter:function (event,player){
            if(!event.target) return false;
            if(event.player==player&&event.target==player) return false;
            return (get.type(event.card)=='trick');
          },
          content:function (){
            trigger.cancel();
          },
        },
        "hj_ls_baonue":{ //暴虐
          trigger:{
            global:"dying",
          },
          priority:9,
          filter:function (event,player){
            return event.player!=player&&event.player.hp<=0&&event.player.group!='qun';
          },
          check:function (event,player){
            return get.attitude(player,event.player)<0;
          },
          logTarget:"player",
          content:function (){
            'step 0'
            player.loseMaxHp();
            'step 1'
            game.delayx();
            trigger.player.die();
            'step 2'
            if(!trigger.player.isAlive()){
              trigger.cancel(true);
            }
          },
        },
        "hj_ls_roulin2":{ //肉林2
          trigger:{
            source:"damageBegin",
          },
          filter:function (event,player){
            if(event.player.sex=='female') return true;
            return false;
          },
          forced:true,
          content:function (){
            'step 0'
            trigger.num++;
            'step 1'
            player.loseHp();
          },
        },
        "hj_ls_hengxing2":{ //横行2
          trigger:{
            player:"phaseEnd",
          },
          content:function (){
            "step 0"
            player.loseMaxHp();
            var targets=game.players.slice(0);
            targets.remove(player);
            targets.sort(lib.sort.seat);
            event.targets=targets;
            event.num=0;
            "step 1"
            if(event.num<event.targets.length){
              event.target=event.targets[event.num];
              if(event.target.num('he')>=2){
                event.target.chooseCard('交给'+get.translation(player)+'一张牌，或失去1点体力','he').ai=function(card){
                  if(ai.get.attitude(event.target,player)>0) return 10-ai.get.value(card);
                  if(ai.get.attitude(event.target,player)<0){
                    if(player.hasSkillTag('maixie')&&player.hp>player.maxHp/3) return 0;
                    if(player.hp<=1&&!player.hasSkill('buqu')) return 0;
                  }
                  return 0;
                }
              }
              else if(event.target.num('he')==1){
                event.target.chooseCard('交给'+get.translation(player)+'一张牌','he',true);
              }
              else{
                event.num++;
                event.redo();
              }

            }
            else{
              event.finish();
            }
            "step 2"
            if(result.bool){
              player.gain(result.cards[0]);
              event.target.$give(1,player);
              event.num++;
              event.goto(1);
            }
            else{
              event.target.loseHp();
              event.num++;
              event.goto(1);
            }
          },
        },

        "hj_ls_luanji":{ //乱击
          group:["hj_ls_luanji2"],
          usable:4,
          enable:"chooseToUse",
          filter:function (event,player){
            return player.countCards('h')>=2;
          },
          filterCard:true,
          selectCard:2,
          position:"h",
          viewAs:{
            name:"wanjian",
            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":7,"name":"shan","cardid":"3205359397","_transform":"translateX(336px)","clone":{"name":"shan","suit":"diamond","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1745},"timeout":1699,"original":"h"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":1,"name":"zhuge","cardid":"6697720412","_transform":"translateX(112px)","clone":{"name":"zhuge","suit":"diamond","number":1,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1746},"timeout":1700,"original":"h"}],
          },
          prompt:"将两张手牌当万箭齐发使用",
          check:function (card){return 6-get.value(card)},
          ai:{
            basic:{
              order:8,
              useful:1,
              value:5,
            },
            wuxie:function (target,card,player,viewer){
              if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
              }
            },
            result:{
              target:function (player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                  if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                  return -1.5;
              },
              "target_use":function(player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                  if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                  return -1.5;
              },
            },
            tag:{
              respond:1,
              respondShan:1,
              damage:1,
              multitarget:1,
              multineg:1,
            },
          },
        },
        "hj_ls_mengzhu":{ //盟主
          trigger:{
            global:"phaseBegin",
          },
          filter:function (event,player){ 
            return event.player!=player&&!player.isMaxHandcard(); 
          },
          forced:true,
          content:function (){ 
            'step 0' 
            player.draw(); 
          },
        },
        "hj_ls_luanji2":{ //乱击2
          trigger:{
            global:"respond",
          },
          filter:function (event){
            if(event.player.isUnseen()) return false;
            return event.getParent(2).skill=='hj_ls_luanji';
          },
          content:function (){
            trigger.player.draw();
          },
        },

        "hj_ls_mieji":{ //灭计
          group:["hj_ls_mieji2"],
          trigger:{
            player:"useCard",
          },
          direct:true,
          filter:function (event,player){
            return get.type(event.card)!='equip'&&get.type(event.card)!='delay'&&get.color(event.card)=='black';
          },
          position:"he",
          content:function (){
            'step 0'
            var goon=false;
            var info=get.info(trigger.card);
            if(trigger.targets&&!info.multitarget){
              var players=game.filterPlayer();
              for(var i=0;i<players.length;i++){
                if(lib.filter.targetEnabled2(trigger.card,player,players[i])&&!trigger.targets.contains(players[i])){
                  goon=true;break;
                }
              }
            }
            if(goon){
              player.chooseTarget('灭计：是否额外指定一名'+get.translation(trigger.card)+'的目标？',function(card,player,target){
                var trigger=_status.event.getTrigger();
                if(trigger.targets.contains(target)) return false;
                return lib.filter.targetEnabled2(trigger.card,_status.event.player,target);
              }).set('ai',function(target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                return get.effect(target,trigger.card,player,player);
              });
            }
            else{
              if(!info.multitarget&&trigger.targets&&trigger.targets.length>1){
                event.goto(3);
              }
            }
            'step 1'
            if(result.bool){
              if(!event.isMine()) game.delayx();
              event.target=result.targets[0];
            }
            else{
              event.finish();
            }
            'step 2'
            if(event.target){
              player.logSkill('hj_ls_mieji',event.target);
              trigger.targets.add(event.target);
            }
            event.finish();
            'step 3'
            player.logSkill('hj_ls_mieji',event.targets);
          },
        },
        "hj_ls_juece":{ //绝策
          trigger:{
            global:"loseEnd",
          },
          check:function (event,player){
            return get.damageEffect(event.player,player,player)>0;
          },
          filter:function (event,player){
            if(event.player.countCards('h')) return false;
            if(event.player==player) return false;
            for(var i=0;i<event.cards.length;i++){
              if(event.cards[i].original=='h') return true;
            }
            return false;
          },
          content:function (){
            player.line(trigger.player,'green');
            trigger.player.damage();
          },
          ai:{
            threaten:1.1,
          },
        },
        "hj_ls_fencheng":{ //焚城
          mark:true,
          intro:{
            content:"一把火烧他个精光吧，哈哈哈。",
          },
          marktext:"焚",
          skillAnimation:true,
          animationColor:"fire",
          enable:"phaseUse",
          usable:1,
          round:2,
          filterTarget:function (card,player,target){
            return player!=target;
          },
          unique:true,
          selectTarget:-1,
          line:"fire",
          content:function (){
            "step 0"
            var res=get.damageEffect(target,player,target,'fire');
            var num=Math.max(2,target.countCards('e'));
            target.chooseToDiscard(num,'h','弃置'+get.cnNumber(num)+'张牌或受到2点火焰伤害').set('ai',function(card){
              var res=_status.event.res;
              var num=_status.event.num;
              var player=_status.event.player;
              if(res>=0) return -1;
              if(num>2&&player.hp>1) return -1;
              if(num>1&&player.hp>2) return -1;
              if(get.position(card)=='e'){
                return 10-get.value(card);
              }
              return 6-get.value(card);
            }).set('res',res).set('num',num);
            "step 1"
            if(!result.bool){
              target.damage(2,'fire','nosource');
            }
          },
          ai:{
            order:1,
            result:{
              player:function (player){
                var num=0,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                  if(player!=players[i]&&get.damageEffect(players[i],player,players[i],'fire')<0){
                    var att=get.attitude(player,players[i]);
                    if(att>0){
                      num-=Math.max(1,players[i].countCards('e'));
                    }
                    else if(att<0){
                      num+=Math.max(1,players[i].countCards('e'));
                    }
                  }
                }
                if(players.length<5){
                  return num-1;
                }
                else{
                  return num-2;
                }
              },
            },
          },
        },
        "hj_ls_mieji2":{ //灭计2
          direct:true,
          trigger:{
            global:"dieAfter",
          },
          filter:function (event,player){
            return _status.currentPhase==player;
          },
          content:function (){
            player.draw(3);
            player.logSkill('hj_ls_mieji2');
          },
        },

        "hj_ls_wansha":{ //完杀
          trigger:{
            global:"dying",
          },
          priority:9,
          filter:function (event,player){
            return _status.currentPhase==player&&event.player!=player&&event.player.hp<=0;
          },
          check:function (event,player){
            return get.attitude(player,event.player)<0;
          },
          forced:true,
          logTarget:"player",
          content:function (){
            'step 0'
            game.delayx();
            trigger.player.die();        
            'step 1'
            if(!trigger.player.isAlive()){
              trigger.cancel(true);
            }
            'step 2'
            if(trigger.source!=undefined){
              trigger.source.draw(3);
            }
            else{
              event.finish();
            }
          },
        },
        "hj_ls_weimu":{ //帷幕
          trigger:{
            target:"useCardToBefore",
          },
          forced:true,
          priority:1005,
          filter:function (event,player){
            return event.player!=player&&get.type(event.card,'trick')=='trick'||get.type(event.card,'delay')=='delay';
          },
          content:function (){
            trigger.cancel();
          },
        },
        "hj_ls_luanwu":{ //乱武
          group:["hj_ls_luanwu2"],
          mark:true,
          intro:{
            content:"乱世，开始了。",
          },
          marktext:"乱",
          skillAnimation:true,
          unique:true,
          enable:"phaseUse",
          usable:1,
          round:2,
          filter:function (event,player){
            return true;
          },
          content:function (){
            "step 0"
            event.current=player.next;
            "step 1"
            event.current.chooseToUse({name:'sha'},function(card,player,target){
              if(player==target) return false;
              if(get.distance(player,target)<=1) return true;
              var players=game.filterPlayer();
              for(var i=0;i<players.length;i++){
                if(players[i]==player) continue;
                if(get.distance(player,players[i])<get.distance(player,target)) return false;
              }
              return true;
            })
            "step 2"
            if(result.bool==false) event.current.loseHp();
            if(event.current.next!=player){
              event.current=event.current.next;
              game.delay(0.5);
              event.goto(1);
            }
          },
          ai:{
            order:1,
            result:{
              player:function (player){
                if(player.countCards('h','shan')) return 1;
                var num=0,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                  if(players[i].canUse('sha',player)&&players[i].countCards('h')>1){
                    num--;
                  }
                  else{
                    num++;
                  }
                }
                return num;
              },
            },
          },
        },
        "hj_ls_luanju":{ //乱局
          mark:true,
          intro:{
            content:"准备阶段，失去一点体力，然后摸三张牌。",
          },
          marktext:"乱",
          trigger:{
            player:"phaseBegin",
          },
          forced:true,
          content:function (){
            "step 0"
            player.loseHp();
            "step 1"
            player.draw(3);
          },
        },
        "hj_ls_luanwu2":{ //乱武2
          trigger:{
            player:"dieBegin",
          },
          forced:true,
          unique:true,
          priority:2019,
          filter:function (event,player){
            return game.hasPlayer(function(current){
              return current!=player&&!current.hasSkill('hj_ls_luanju');
            });
          },
          content:function (){
            game.countPlayer(function(current){ 
              if(current!=player&&!current.hasSkill('hj_ls_luanju')){ 
                player.line(current,'green'); 
                current.addSkill('hj_ls_luanju'); 
              } 
            }); 
          },
        },

        "hj_ls_wushuang":{ //无双
          mod:{
            selectTarget:function (card,player,range){
              if(card.name=='juedou') range[1]+=2;
              if(card.name=='sha') range[1]+=2;
            },
            cardUsable:function (card,player,num){
              if(card.name=='sha') return num+2;
            },
          },
          trigger:{
            player:"shaBegin",
          },
          forced:true,
          filter:function (event,player){
            return !event.directHit;
          },
          priority:-1,
          content:function (){
            if(typeof trigger.shanRequired=='number'){
              trigger.shanRequired++;
            }
            else{
              trigger.shanRequired=2;
            }
          },
          group:"hj_ls_wushuang_juedou",
          subSkill:{
            juedou:{
              trigger:{
                player:"juedou",
                target:"juedou",
              },
              forced:true,
              filter:function (event,player){
                return event.turn!=player;
              },
              priority:-1,
              content:function (){
                "step 0"
                var next=trigger.turn.chooseToRespond({name:'sha'},'请打出一张杀响应决斗');
                next.set('prompt2','（共需打出2张杀）');
                next.autochoose=lib.filter.autoRespondSha;
                next.set('ai',function(card){
                  var player=_status.event.player;
                  var trigger=_status.event.getTrigger();
                  if(get.attitude(trigger.turn,player)<0&&trigger.turn.countCards('h','sha')>1){
                    return get.unuseful2(card);
                  }
                  return -1;
                });
                "step 1"
                if(result.bool==false){
                  trigger.directHit=true;
                }
              },
              ai:{
                result:{
                  target:function (card,player,target){
                    if(card.name=='juedou'&&target.countCards('h')>0) return [1,0,0,-1];
                  },
                },
              },
              sub:true,
            },
          },
        },
        "hj_ls_liqu":{ //利驱
          trigger:{
            source:"damageAfter",
          },
          forced:true,
          direct:true,
          priority:-1,
          filter:function (event,player){
            if(event._notrigger.contains(event.player)) return false;
            return event.card&&event.card.name=='sha'&&event.player.isAlive()&&event.player.countGainableCards(player,'he')>0;
          },
          content:function (){
            "step 0"
            player.gainPlayerCard(get.prompt2('hj_ls_liqu',trigger.player),trigger.player,'he',[1,2],'visibleMove').set('ai',function(card){
              var player=_status.event.player;
              var evt=_status.event.target;
              if(get.type(card)=='equip'){
                if(get.attitude(player,evt)>0&&game.hasPlayer(function(current){
                  return (player.canUse({name:'juedou'},current)&&current!=evt.target&&get.effect(current,{name:'juedou'},player,player)>2);
                })){
                  return 5;
                }
                else if(game.hasPlayer(function(current){
                  return (player.canUse({name:'juedou'},current)&&current!=evt&&current!=player&&get.effect(current,{name:'juedou'},player,player)<0);
                })){
                  return 1;
                }
                else return 4;
              };
              return 3;
            }).set('logSkill',['hj_ls_liqu',trigger.player]);
            "step 1"
            if(result.bool){
              if(get.type(result.cards[0])=='equip'&&get.type(result.cards[1])=='equip'){
                player.loseHp();
              }
            }
            "step 2"
            if(get.type(result.cards[0])=='basic'&&get.type(result.cards[1])=='basic'){
              player.lose(result.cards[0],ui.special2);
              player.lose(result.cards[1],ui.special2);
              player.gain(game.createCard('juedou'),'gain2');
            }
            if(result.bool){
              if(result.cards.length==2){
                trigger.player.draw();
              }
            }

          },
          ai:{
            halfneg:true,
          },
        },
        "hj_ls_zhanshen":{ //战神
          group:["hj_ls_zhanshen_fanmian","hj_ls_zhanshen_zhunbei"],
          subSkill:{
            fanmian:{
              trigger:{
                player:"turnOverBefore",
              },
              forced:true,
              content:function (){ 
                trigger.cancel(); 
                game.log(player,'取消了翻面');
              },
              sub:true,
            },
            zhunbei:{
              trigger:{
                player:"phaseBegin",
              },
              forced:true,
              content:function(){
                player.draw(2);
              },
              sub:true,
            },
          },
          ai:{
            noturnOver:true,
            effect:{
              target:function (card,player,target,current){ 
                if(get.tag(card,'turnOver')) return [0,0]; 
              },
            },
          },
        },

        "hj_ls_langxi":{ //狼袭
          trigger:{
            player:"phaseBegin",
          },
          direct:true,
          content:function (){
            "step 0"
            player.chooseTarget(get.prompt('hj_ls_langxi'),function(card,player,target){
              return player!=target;
            }).ai=function(target){
              return get.damageEffect(target,player,player);
            }
            "step 1"
            if(result.bool){
              player.logSkill('hj_ls_langxi',result.targets);
              event.target=result.targets[0];
              result.targets[0].damage();
            }
            "step 2"
            if(event.target.countCards('he')){
              player.gainPlayerCard(event.target,true,'he');
            }
          },
        },
        "hj_ls_yisuan":{ //亦算
          group:["hj_ls_yisuan2"],
          trigger:{
            player:"shaAfter",
          },
          forced:true,
          filter:function (event,player){
            return event.target.isIn()&&game.hasPlayer(function(current){
              return current.canUse('sha',event.target,false)&&current!=player;
            });
          },
          content:function (){
            'step 0'
            event.targets=game.filterPlayer(function(current){
              return current.canUse('sha',trigger.target,false)&&current!=player;
            });
            event.targets.sortBySeat(trigger.player);
            'step 1'
            if(event.targets.length){
              event.current=event.targets.shift();
              if(event.current.hasSha()){
                event.current.chooseToUse({name:'sha'},'是否对'+get.translation(trigger.target)+'使用一张杀？',trigger.target,-1);
              }
              event.redo();
            }
          },
        },
        "hj_ls_yisuan2":{ //亦算2
          trigger:{
            global:["useCardAfter","respondAfter"],
          },
          filter:function (event,player){
            if(_status.currentPhase!=player) return false;
            if(event.player==player) return false;
            if(event.cards){
              for(var i=0;i<event.cards.length;i++){
                if(get.position(event.cards[i])=='d') return true;
              }
            }
            return false;
          },
          direct:true,
          content:function (){
            "step 0"
            var cards=trigger.cards.slice(0);
            for(var i=0;i<cards.length;i++){
              if(get.position(cards[i])!='d'){
                cards.splice(i--,1);
              }
            }
            event.cards=cards;
            player.chooseTarget(get.prompt('hj_ls_yisuan2'),function(card,player,target){
              return target!=trigger.player;
            }).set('autodelay',0.5).ai=function(target){
              var att=get.attitude(player,target);
              if(att<=0) return 0;
              if(att>3){
                return 100-target.countCards('h');
              }
              return att;
            }
            "step 1"
            if(result.bool){
              player.logSkill('hj_ls_yisuan2',result.targets);
              result.targets[0].gain(event.cards,'gain2','log');
            }
          },
        },

        "hj_ls_tanbei":{ //贪狈
          enable:"phaseUse",
          usable:1,
          filterTarget:function (card,player,target){
            return player!=target;
          },
          content:function (){
            'step 0'
            target.gainPlayerCard(1,player,'h',true)
            'step 1'
            player.gainPlayerCard(2,target,'he',true);
            player.draw(1);
          },
        },
        "hj_ls_sidao":{ //伺盗
          enable:"phaseUse",
          usable:1,
          filterCard:function (card){
            return get.color(card)=='black';
          },
          filter:function (event,player){
            return player.countCards('he',{color:'black'});
          },
          position:"he",
          viewAs:{
            name:"shunshou",
            suit:"spade",
            number:1,
            cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":1,"name":"shandian","nature":"thunder","cardid":"6175125384","_transform":"translateX(448px)","clone":{"name":"shandian","suit":"spade","number":1,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1588},"timeout":1568,"original":"h"}],
          },
          viewAsFilter:function (player){
            if(!player.countCards('he',{color:'black'})) return false;
          },
          prompt:"将一张黑色牌当顺手牵羊使用",
          check:function (card){
            var player=_status.currentPhase;
            if(player.countCards('h',{subtype:get.subtype(card)})>1){
              return 11-get.equipValue(card);
            }
            if(player.countCards('h')<player.hp){
              return 6-get.value(card);
            }
            return 2-get.equipValue(card);
          },
          mod:{
            targetInRange:function (card,player,target,now){
              if(card.name=='shunshou') return true;
            },
          },
          ai:{
            order:9.5,
            threaten:1.5,
            wuxie:function (target,card,player,viewer){
              if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                return 0;
              }
            },
            basic:{
              order:7.5,
              useful:4,
              value:9,
            },
            result:{
              target:function (player,target){
                if(get.attitude(player,target)<=0) return (target.countCards('he')>0)?-1.5:1.5;
                var js=target.getCards('j');
                if(js.length){
                  var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                  if(jj.name=='shunshou') return 3;
                  if(js.length==1&&get.effect(target,jj,target,player)>=0){
                    return -1.5;
                  }
                  return 3;
                }
                return -1.5;
              },
              player:function (player,target){
                if(get.attitude(player,target)<0&&!target.countCards('he')){
                  return 0;
                }
                if(get.attitude(player,target)>1){
                  var js=target.getCards('j');
                  if(js.length){
                    var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                    if(jj.name=='shunshou') return 1;
                    if(js.length==1&&get.effect(target,jj,target,player)>=0){
                      return 0;
                    }
                    return 1;
                  }
                  return 0;
                }
                return 1;
              },
            },
            tag:{
              loseCard:1,
              gain:1,
            },
          },
        },

        "hj_ls_badao":{ //霸刀
          trigger:{
            source:"damageBegin",
          },
          forced:true,
          filter:function (event,player){
            return event.card&&event.card.name=='sha'&&get.color(event.card)=='red';
          },
          content:function (){
            trigger.num++;
          },
          group:["hj_ls_badao_hei"],
          subSkill:{
            hei:{
              trigger:{
                player:"shaBefore",
              },
              forced:true,
              popup:false,
              filter:function(event,player){ 
                return event.card&&get.color(event.card)=='black'; 
              },
              content:function(){ 
                player.addTempSkill('unequip','shaAfter'); 
              },
              sub:true,
            },
          },
        },
        "hj_ls_shiyong":{ //恃勇
          trigger:{
            player:"shaBegin",
          },
          forced:true,
          filter:function(event,player){
            return event.target.hp<=player.hp;
          },
          content:function(){
            trigger.directHit=true;
          },
        },
        "hj_ls_mojiang":{ //魔将
          trigger:{
            player:"phaseBegin",
          },
          forced:true,
          filter:function(event,player){
            return player.hp<=3;
          },
          content:function(){
            player.recover();
            player.draw(2);
          },
        },

        "hj_ls_xingluan":{ //兴乱
          group:["hj_ls_xingluan2"],
          direct:true,
          trigger:{
            global:"damageEnd",
          },
          filter:function (event){ 
            return !event.nature; 
          },
          content:function (){    
            'step 0' 
            player.chooseBool('是否对'+get.translation(trigger.player)+'发动【兴乱】？').set('ai',function(){               
              if(get.attitude(_status.event.player,trigger.player)<0) return true;        
              return false;   
            }); 
            'step 1' 
            if(result.bool){ 
              game.delay(1);                
              trigger.player.damage(trigger.num,['thunder','fire'].randomGet(),player); 
              player.draw();
              player.logSkill('hj_ls_xingluan');       
            } 
            else{ 
              event.finish(); 
            }                                
          },
        },
        "hj_ls_xingluan2":{ //兴乱2
          trigger:{
            source:"damageBefore",
          },
          logTarget:"player",
          content:function (){
            "step 0"
            trigger.cancel();
            "step 1"
            trigger.player.draw(trigger.player.maxHp-trigger.player.hp);
            "step 2"
            if(trigger.player.group==player.group){
              trigger.player.recover();
            }
            else{ 
              event.finish(); 
            } 
          },
        },

        "hj_ls_tunjun":{  //屯军
          enable:"phaseUse",
          usable:1,
          filter:function (event,player){
            return player.countCards('h')>0;
          },
          filterTarget:function (card,player,target){
            return target!=player;
          },
          content:function (){
            "step 0"
            target.gainPlayerCard(1,player,'h',true);
            target.damage(1,player);
            "step 1"
            if(player.countCards('h')<target.countCards('h')){
              player.gainPlayerCard(2,target,'he',true);
            }
            else{
              event.finish();
            }
          },
        },
        "hj_ls_lueming":{ //掠命
          trigger:{
            player:"phaseEnd",
          },
          forced:true,
          filter:function (event,player){    
            return player.countCards('h')<=2||player.isMinHp(); 
          },
          content:function (){
            "step 0"
            player.recover();
            "step 1"
            player.draw(2);
          },
        },

        "hj_ls_xionghuo":{ //凶镬
          ai:{
            unequip:true,
            skillTagFilter:function (player,tag,arg){
              if(player.getEquip(1)) return true;
              return false;
            },
          },
          group:["hj_ls_xionghuo_xiong","hj_ls_xionghuo_huo","hj_ls_xionghuo_end"],
          subSkill:{
            xiong:{
              trigger:{
                source:"damageBegin",
              },
              forced:true,
              popup:false,
              direct:true,
              priority:6,
              filter:function (event,player){
                return event.player!=player&&player.getEquip(1);
              },
              content:function (){
                player.logSkill('hj_ls_xionghuo',trigger.player);
                trigger.num++;
              },
              sub:true,
            },
            huo:{
              trigger:{
                source:"damageAfter",
              },
              forced:true,
              popup:false,
              direct:true,
              priority:-100000000,
              filter:function (event,player){
                return event.player!=player&&event.player.isAlive()&&!event.player.hasSkill('hj_ls_xionghuo_mark');
              },
              content:function (){
                player.logSkill('hj_ls_xionghuo',trigger.player);
                trigger.player.addSkill('hj_ls_xionghuo_mark');
              },
              sub:true,
            },
            mark:{
              mark:true,
              marktext:"镬",
              intro:{
                content:"已获得“凶镬”标记",
              },
              sub:true,
            },
            end:{
              trigger:{
                player:"phaseEnd",
              },
              forced:true,
              popup:false,
              direct:true,
              filter:function (player){
                var num=0;
                for(var i=0;i<game.players.length;i++){
                  num+=game.players[i].hasSkill('hj_ls_xionghuo_mark');
                }
                if(num>0) return true;
                return false;
              },
              content:function (){
                'step 0'
                player.logSkill('hj_ls_xionghuo');
                player.judge(function(card){
                  var color=get.color(card);
                  if(color=='black') return 1;
                  if(color=='red') return 1;
                  return 0;
                });
                'step 1'
                if(result.color=='black'){
                  for(var i=0;i<game.players.length;i++){
                    if(game.players[i]!=player&&game.players[i].countCards('h')&&game.players[i].hasSkill('hj_ls_xionghuo_mark')){
                      player.line(game.players[i]);
                      player.gainPlayerCard(game.players[i],'h',true);
                    }else if(game.players[i]!=player&&!game.players[i].countCards('h')&&game.players[i].hasSkill('hj_ls_xionghuo_mark')){
                      player.line(game.players[i]);
                      game.players[i].damage('fire');
                    } 
                  }
                }else{
                  for(var i=0;i<game.players.length;i++){
                    if(game.players[i]!=player&&game.players[i].hasSkill('hj_ls_xionghuo_mark')){
                      player.line(game.players[i]);
                      game.players[i].loseHp();
                    }
                  }
                }
                'step 2'
                for(var i=0;i<game.players.length;i++){
                  if(game.players[i].hasSkill('hj_ls_xionghuo_mark')){
                    game.players[i].removeSkill('hj_ls_xionghuo_mark');
                  }
                }
              },
              sub:true,
            },
          },
        },
        "hj_ls_shajue":{ //杀绝
          trigger:{
            global:"dyingAfter",
          },
          usable:1,
          priority:6,
          filter:function (event,player){
            return event.player!=player&&event.player.isAlive();
          },
          logTarget:"player",
          check:function (event,player){
            return get.attitude(player,event.player)<=0;
          },
          content:function (){
            'step 0'
            var list=['sha','juedou'];
            player.chooseButton(['杀绝',[list,'vcard']],true).set('ai',function(button){
              var player=_status.event.player;
              var players=game.filterPlayer();
              if(button.link[2]=='sha'){
                for(var i=0;i<players.length;i++){
                  if(player.canUse('sha',players[i])&&(player.getEquip(1)||!players[i].getEquip(2))&&get.attitude(player,players[i])<0){
                    return 3+Math.random();
                  }
                }
                return 0;
              }
              if(button.link[2]=='juedou'){
                for(var i=0;i<players.length;i++){
                  if(player.canUse('juedou',players[i])&&(player.countCards('h','sha')>0||players[i].countCards('h')<2)&&get.attitude(player,players[i])<0){
                    return 2+Math.random();
                  }
                }
                return 0;
              }
              return 0;
            });
            'step 1'
            if(result.bool){
              var card=result.links[0][2];
              player.useCard({name:card},trigger.player,false);
            }
          },
          ai:{
            expose:0.2,
            threaten:1.5,
          },
        },

        "hj_ls_weidi":{ //伪帝
          enable:"phaseUse",
          usable:1,
          filterTarget:function (card,player,target){ 
            return player!=target&&target.countCards('h')>0; 
          },
          content:function (){
            var hs=target.getCards('h');
            player.gain(hs,target);
            target.$giveAuto(hs,player);
            "step 0"
            player.chooseControl('交还其一半手牌','出牌结束后交出所有手牌');
            "step 1"
            if(result.control=='交还其一半手牌'){
              player.storage.hj_ls_weidi=target;
              player.addSkill('hj_ls_weidi1');
              event.finish();
            }
            else{
              player.storage.hj_ls_weidi=target;
              player.addSkill('hj_ls_weidi2');
            }
          },
        },
        "hj_ls_yongsi":{ //庸肆
          trigger:{
            player:"phaseDrawBefore",
          },
          content:function (){
            trigger.cancel();
            player.addSkill('hj_ls_yongsi2');
          },
        },
        "hj_ls_yongsi2":{ //庸肆2
          trigger:{
            player:"phaseEnd",
          },
          forced:true,
          content:function (){
            "step 0"
            player.removeSkill('hj_ls_yongsi2');
            "step 1"
            if(game.countGroup()>2){
              player.draw(game.countGroup()-player.countCards('h'));
              event.finish();
            }else{
              player.draw(player.hp-player.countCards('h'));
              event.finish();
            }
          },
        },
        "hj_ls_weidi2":{ //伪帝2
          trigger:{
            player:"phaseUseEnd",
          },
          forced:true,
          content:function (){
            "step 0"
            player.removeSkill('weidi2');
            if(player.storage.hj_ls_weidi.classList.contains('dead')){
              event.finish();
            }
            else{
              var hs=player.getCards('h');
              player.storage.hj_ls_weidi.gain(hs,player);
              player.$give(hs,player.storage.hj_ls_weidi);
            }
          },
        },
        "hj_ls_weidi1":{ //伪帝1
          trigger:{
            player:"hj_ls_weidiAfter",
          },
          forced:true,
          popup:false,
          content:function (){
            "step 0"
            player.removeSkill('weidi1');
            if(player.storage.hj_ls_weidi.classList.contains('dead')){
              event.finish();
            }
            else{
              player.chooseCard(true,Math.floor(player.countCards('h')/2));
            }
            "step 1"
            player.storage.hj_ls_weidi.gain(result.cards,player);
            player.$give(result.cards.length,player.storage.hj_ls_weidi);
          },
        },

        "hj_ls_xutu":{ //徐图
          intro:{
            content:"card",
          },
          trigger:{
            player:"useCard",
          },
          frequent:true,
          filter:function(event,player){
            if(!event.cards||event.cards.length!=1) return false;
            if(_status.currentPhase!=player) return false;
            if(!player.storage.hj_ls_xutu) return false;
            return player.storage.hj_ls_xutu.number<event.cards[0].number;
          },
          content:function(){
            player.draw();
          },
          group:["hj_ls_xutu_1","hj_ls_xutu_2"],
          subSkill:{
            "1":{
              trigger:{
                player:"useCard",
              },
              priority:-1,
              direct:true,
              popup:false,
              forced:true,
              filter:function(event,player){
                if(!event.cards||event.cards.length!=1) return false;
                if(_status.currentPhase!=player) return false;
                return true;
              },
              content:function(){
                player.storage.hj_ls_xutu=trigger.cards[0];
              },
              sub:true,
            },
            "2":{
              trigger:{
                player:"phaseBefore",
              },
              direct:true,
              popup:false,
              forced:true,
              priority:10,
              content:function(){
                player.storage.hj_ls_xutu=null;
              },
              sub:true,
            },
          },
        },
        "hj_ls_shizhi":{ //矢志
          trigger:{
            player:"damageEnd",
          },
          forced:true,
          content:function(){
            'step 0'
            if(player.hasSkill('hj_ls_shizhi_damaged')){
              player.draw();
              player.loseHp();
              if(trigger.source!=player&&trigger.source!=Infinity&&_status.currentPhase==trigger.source){
                event.goto(1);
              }else{
                event.finish();
              }
            }
            else{
              player.recover();
              event.finish();
            }
            'step 1'
            trigger.source.chooseControl('被杀','结束出牌阶段',function(event,player){ 
              if(player.countCards('h')<=player.hp) return '结束出牌阶段';
              if(player.countCards('h','shan')>0||player.getEquip(2)||player.hp>=3) return '被杀'; 
              return '结束出牌阶段'; 
            }); 
            'step 2'
            if(result.control=='被杀'){ 
              player.useCard({name:'sha'},trigger.source,false);
              event.finish();
            } 
            else{ 
              var evt=_status.event.getParent('phaseUse');
              if(evt&&evt.name=='phaseUse'){
                evt.skipped=true;
              }
              event.finish(); 
            }   
          },
          group:["hj_ls_shizhi_mark"],
          subSkill:{
            mark:{
              trigger:{
                player:"damageAfter",
              },
              silent:true,
              content:function(){
                player.addTempSkill('hj_ls_shizhi_damaged');
              },
              sub:true,
              forced:true,
              popup:false,
            },
            damaged:{
              sub:true,
            },
            ai:{
              sub:true,
            },
          },
          ai:{
            "maixie_defend":true,
            threaten:0.9,
            effect:{
              target:function(card,player,target){
                if(player.hasSkillTag('jueqing')) return;
                if(target.hujia) return;
                if(player._shibei_tmp) return;
                if(target.hasSkill('shibei_ai')) return;
                if(_status.event.getParent('useCard',true)||_status.event.getParent('_wuxie',true)) return;
                if(get.tag(card,'damage')){
                  if(target.hasSkill('hj_ls_shizhi_damaged')){
                    return [1,-2];
                  }
                  else{
                    if(get.attitude(player,target)>0&&target.hp>1){
                      return 0;
                    }
                    if(get.attitude(player,target)<0&&!player.hasSkillTag('damageBonus')){
                      if(card.name=='sha') return;
                      var sha=false;
                      player._shibei_tmp=true;
                      var num=player.countCards('h',function(card){
                        if(card.name=='sha'){
                          if(sha){
                            return false;
                          }
                          else{
                            sha=true;
                          }
                        }
                        return get.tag(card,'damage')&&player.canUse(card,target)&&get.effect(target,card,player,player)>0;
                      });
                      delete player._shibei_tmp;
                      if(player.hasSkillTag('damage')){
                        num++;
                      }
                      if(num<2){
                        var enemies=player.getEnemies();
                        if(enemies.length==1&&enemies[0]==target&&player.needsToDiscard()){
                          return;
                        }
                        return 0;
                      }
                    }
                  }
                }
              },
            },
          },
        },

        "hj_ls_beizhan":{ //备战
          trigger:{
            player:"phaseEnd",
          },
          priority:6,
          direct:true,
          content:function (){
            'step 0'
            player.chooseTarget(get.prompt('hj_ls_beizhan'),[1,2]).set('ai',function(target){
              var att=get.attitude(_status.event.player,target);
              if(att>2){
                return Math.min(5,target.maxHp);
              }
              return att/3;
            });
            'step 1'
            if(result.bool){
              player.logSkill('hj_ls_beizhan',result.targets);
              for(var i=0;i<result.targets.length;i++){
                result.targets[i].draw(Math.min(5,result.targets[i].maxHp));
                result.targets[i].storage.hj_ls_beizhan_mark=player;
                result.targets[i].addSkill('hj_ls_beizhan_mark');
              }
            }
          },
          ai:{
            threaten:2,
          },
        },
        "hj_ls_beizhan_mark":{
          onremove:function (player){;
            delete player.storage.hj_ls_beizhan_mark;
          },
          mark:"character",
          intro:{
            content:"回合开始时，若你手牌为全场最多(或之一)，你需弃置两张牌",
          },
          trigger:{
            player:"phaseBefore",
          },
          forced:true,
          direct:true,
          popup:false,
          priority:100000,
          content:function (){
            if(player.isMaxHandcard()){
              player.popup('hj_ls_beizhan');
              var target=player.storage.hj_ls_beizhan_mark;
              target.logSkill('hj_ls_beizhan',player);
              player.chooseToDiscard('he',true,2);
              player.removeSkill('hj_ls_beizhan_mark');
              event.finish();
            }else{
              player.removeSkill('hj_ls_beizhan_mark');
              event.finish();
            }
          },
        },
        "hj_ls_gangzheng":{ //刚正
          trigger:{
            player:"damageBegin",
          },
          forced:true,
          priority:-100000,
          content:function (){
            trigger.cancel();
            player.loseHp();
          },
          ai:{
            noDirectDamage:true,
          },
          group:["hj_ls_gangzhi_end"],
          subSkill:{
            end:{
              trigger:{
                player:"phaseEnd",
              },
              direct:true,
              popup:false,
              priority:-6,
              filter:function (event,player){
                return player.isDamaged();
              },
              content:function (){
                'step 0'
                var num=player.maxHp-player.hp;
                var a=Math.min(1,num);
                player.chooseTarget(get.prompt('hj_ls_beizhan'),a,function(card,player,target){
                  return target.countCards('hej')>0;
                }).set('ai',function(target){
                  var player=_status.event.player;
                  if(get.attitude(player,target)>0&&target.countCards('j')>0) return 10;
                  if(get.attitude(player,target)<0&&target.countCards('j')>0&&target.countCards('he')<1) return -10;
                  return -get.attitude(player,target);
                });
                'step 1'
                if(result.bool){ 
                  player.logSkill('hj_ls_beizhan',result.targets); 
                  event.targets=result.targets; 
                  event.num=0; 
                }else{ 
                  event.finish(); 
                } 
                'step 2'
                if(event.num<event.targets.length){ 
                  player.discardPlayerCard('hej',event.targets[event.num],true);
                  event.num++; 
                  event.redo(); 
                }  
              },
              sub:true,
            },
          },
        },

        "hj_ls_sijian":{ //死谏
          trigger:{
            player:"loseEnd",
          },
          direct:true,
          filter:function (event,player){
            if(player.countCards('h')) return false;
            for(var i=0;i<event.cards.length;i++){
              if(event.cards[i].original=='h') return true;
            }
            return false;
          },
          content:function (){
            "step 0"
            player.chooseTarget(get.prompt('hj_ls_sijian'),function(card,player,target){
              return player!=target&&target.countCards('he')>0;
            }).set('ai',function(target){
              return -get.attitude(_status.event.player,target);
            });
            "step 1"
            if(result.bool){
              player.logSkill('hj_ls_sijian',result.targets);
              event.target=result.targets[0];
              player.discardPlayerCard((event.target.maxHp),event.target,true);
            }
            else{
              event.finish();
            }
          },
          ai:{
            expose:0.2,
          },
        },
        "hj_ls_gangzhi":{ //刚直
          group:["hj_ls_gangzhi2"],
          trigger:{
            player:"damageBefore",
          },
          filter:function (event,player){
            return player.countCards('h')>0;
          },
          content:function (){
            'step 0'
            trigger.cancel();
            'step 1'
            var cards=player.getCards('h');
            player.discard(cards);
          },
        },
        "hj_ls_gangzhi2":{ //刚直2
          trigger:{
            player:"damageBegin",
          },
          filter:function (event,player){
            return !player.countCards('h');
          },
          content:function (){
            player.draw(player.maxHp);
          },
        },

        "hj_ls_chenglue":{ //成略
          group:["hj_ls_chenglue2"],
          trigger:{
            player:"phaseDrawAfter",
          },
          init:function(player){
            player.storage.hj_ls_chenglue=[];
          },
          intro:{
            content:"cards",
          },
          filter:function(event,player){
            return player.storage.hj_ls_chenglue.length<3&&player.countCards('he')>0;
          },
          check:function(event,player){
            return true;
          },
          content:function(){
            "step 0"
            var num1=3-player.storage.hj_ls_chenglue.length;
            player.chooseCard('将至多'+num1+'张牌置于武将牌上作为“略”',[1,num1],'he',true);
            "step 1"
            if(result.cards&&result.cards.length){
              player.lose(result.cards,ui.special,'toStorage');
              player.storage.hj_ls_chenglue=player.storage.hj_ls_chenglue.concat(result.cards);
              player.syncStorage('hj_ls_chenglue');
              player.markSkill('hj_ls_chenglue');
              player.draw(result.cards.length);
              game.log(player,'将',result.cards,'置于武将牌上作为“略”');
            }
          },
        },
        "hj_ls_shicai":{ //恃才
          trigger:{
            player:"useCardAfter",
          },
          logTarget:"player",
          frequent:true,
          check:function(event,player){
            return true;
          },
          content:function(){
            player.draw();
            player.chooseToDiscard('he',true);
          },
        },
        "hj_ls_cunmu":{ //寸目
          group:["hj_ls_cunmu_draw"],
          trigger:{
            player:"drawBegin",
          },
          forced:true,
          content:function(){
            trigger.bottom=true;
          },
          subSkill:{
            draw:{
              trigger:{
                player:"phaseDrawBegin",
              },
              forced:true,
              direct:true,
              filter:function(event,player){
                return player.storage.hj_ls_chenglue.length>0;
              },
              content:function(){
                trigger.num++;
              },
              sub:true,
            },
          },
        },
        "hj_ls_chenglue2":{ //成略2
          enable:"phaseUse",
          filter:function(event,player){
            return player.storage.hj_ls_chenglue.length>0;
          },
          chooseButton:{
            dialog:function(event,player){
              return ui.create.dialog('恃才',player.storage.hj_ls_chenglue,'hidden');
            },
            check:function(button){
              var player=_status.event.player;
              var type=get.type(button.link,'trick');
              var recover=0,lose=1;
              for(var i=0;i<game.players.length;i++){
                if(!game.players[i].isOut()){
                  if(game.players[i].hp<game.players[i].maxHp){
                    if(ai.get.attitude(player,game.players[i])>0){
                      if(game.players[i].hp<2){
                        lose--;
                        recover+=0.5;
                      }
                      lose--;
                      recover++;
                    }
                    else if(ai.get.attitude(player,game.players[i])<0){
                      if(game.players[i].hp<2){
                        lose++;
                        recover-=0.5;
                      }
                      lose++;
                      recover--;
                    }
                  }
                  else{
                    if(ai.get.attitude(player,game.players[i])>0){
                      lose--;
                    }
                    else if(ai.get.attitude(player,game.players[i])<0){
                      lose++;
                    }
                  }
                }
              }
              var equipTarget=false;
              var shaTarget=false;
              var shunTarget=false;
              var chaiTarget=false;
              for(var i=0;i<game.players.length;i++){
                if(ai.get.attitude(player,game.players[i])>0){
                  if(player!=game.players[i]&&!game.players[i].countCards('e',{subtype:get.subtype(button.link)})[0]&&ai.get.attitude(player,game.players[i])>0){
                    equipTarget=true;
                  }
                }
                if(player.canUse('shunshou',game.players[i])&&ai.get.effect(game.players[i],{name:'shunshou'},player)){
                  shunTarget=true;
                }
                if(player.canUse('guohe',game.players[i])&&ai.get.effect(game.players[i],{name:'guohe'},player)>=0){
                  chaiTarget=true;
                }
                if(player.canUse('sha',game.players[i])&&ai.get.effect(game.players[i],{name:'sha'},player)>0){
                  shaTarget=true;
                }
              }
              if(player.isDamaged()) return (type=='basic')?2:-1;
              if(shaTarget&&player.num('h','sha')&&!player.num('h','jiu')) return (type=='basic')?1:-1;
              if(lose>recover&&lose>0) return (type=='trick')?1:-1;
              if(lose<recover&&recover>0) return (type=='trick')?1:-1;
              if(equipTarget) return (type=='equip')?1:-1;
              if(shunTarget||chaiTarget) return (type=='trick')?1:-1;
              if(shaTarget&&!player.num('h','sha')) return (type=='basic')?1:-1;
              return 0;
            },
            backup:function(links,player){
              if(get.type(links[0],'trick')=='trick'){
                return {
                  cards:links,
                  chooseButton:{
                    dialog:function(){
                      var list=[];
                      for(var i in lib.card){
                        if(!lib.translate[i+'_info']) continue;
                        if(lib.card[i].mode&&lib.card[i].mode.contains(lib.config.mode)==false) continue;
                        if(lib.card[i].type=='trick') list.push(['锦囊','',i]);
                      }
                      return ui.create.dialog('恃才:请选择想要使用的锦囊牌',[list,'vcard']);
                    },
                    filter:function(button,player){
                      return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
                    },
                    check:function(button){
                      var player=_status.event.player;
                      var recover=0,lose=1;
                      for(var i=0;i<game.players.length;i++){
                        if(!game.players[i].isOut()){
                          if(game.players[i].hp<game.players[i].maxHp){
                            if(ai.get.attitude(player,game.players[i])>0){
                              if(game.players[i].hp<2){
                                lose--;
                                recover+=0.5;
                              }
                              lose--;
                              recover++;
                            }
                            else if(ai.get.attitude(player,game.players[i])<0){
                              if(game.players[i].hp<2){
                                lose++;
                                recover-=0.5;
                              }
                              lose++;
                              recover--;
                            }
                          }
                          else{
                            if(ai.get.attitude(player,game.players[i])>0){
                              lose--;
                            }
                            else if(ai.get.attitude(player,game.players[i])<0){
                              lose++;
                            }
                          }
                        }
                      }
                      var shunTarget=false;
                      var chaiTarget=false;
                      for(var i=0;i<game.players.length;i++){
                        if(player.canUse('shunshou',game.players[i])&&ai.get.effect(game.players[i],{name:'shunshou'},player)){
                          shunTarget=true;
                        }
                        if(player.canUse('guohe',game.players[i])&&ai.get.effect(game.players[i],{name:'guohe'},player)>=0){
                          chaiTarget=true;
                        }
                      }
                      if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
                      if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
                      if(shunTarget) return (button.link[2]=='shunshou')?1:-1;
                      if(chaiTarget) return (button.link[2]=='guohe')?1:-1;
                      return (button.link[2]=='wuzhong')?1:-1;
                    },
                    backup:function(links,player){
                      return {
                        filterCard:function(){return false},
                        selectCard:-1,
                        popname:true,
                        viewAs:{name:links[0][2]},
                        onuse:function(result,player){
                          result.cards=lib.skill.hj_ls_chenglue2_backup.cards;
                          var card=result.cards[0];
                          player.storage.hj_ls_chenglue.remove(card);
                          player.syncStorage('hj_ls_chenglue');
                          if(!player.storage.hj_ls_chenglue.length){
                            player.unmarkSkill('hj_ls_chenglue');
                          }
                          else{
                            player.markSkill('hj_ls_chenglue');
                          }
                          player.logSkill('hj_ls_chenglue2',result.targets);
                        }
                      }
                    },
                    prompt:function(links,player){
                      return '将一张成略牌当'+get.translation(links[0][2])+'使用';
                    }
                  }
                }
              }
              else if(get.type(links[0],'trick')=='basic'){
                return {
                  cards:links,
                  chooseButton:{
                    dialog:function(){
                      var list=[];
                      for(var i in lib.card){
                        if(!lib.translate[i+'_info']) continue;
                        if(lib.card[i].mode&&lib.card[i].mode.contains(lib.config.mode)==false) continue;
                        if(lib.card[i].type=='basic') list.push(['basic','',i]);
                      }
                      return ui.create.dialog('恃才:请选择想要使用的基本牌',[list,'vcard']);
                    },
                    filter:function(button,player){
                      return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
                    },
                    check:function(button){
                      var player=_status.event.player;
                      var shaTarget=false;
                      for(var i=0;i<game.players.length;i++){
                        if(player.canUse('sha',game.players[i])&&ai.get.effect(game.players[i],{name:'sha'},player)>0){
                          shaTarget=true;
                        }
                      }
                      if(player.isDamaged()) return (button.link[2]=='tao')?1:-1;
                      if(shaTarget&&player.num('h','sha')&&!player.num('h','jiu')) return (button.link[2]=='jiu')?1:-1;
                      if(shaTarget&&!player.num('h','sha')) return (button.link[2]=='sha')?1:-1;
                      return (button.link[2]=='sha')?1:-1;
                    },
                    backup:function(links,player){
                      return {
                        filterCard:function(){return false},
                        selectCard:-1,
                        popname:true,
                        viewAs:{name:links[0][2]},
                        onuse:function(result,player){
                          result.cards=lib.skill.hj_ls_chenglue2_backup.cards;
                          var card=result.cards[0];
                          player.storage.hj_ls_chenglue.remove(card);
                          player.syncStorage('hj_ls_chenglue');
                          if(!player.storage.hj_ls_chenglue.length){
                            player.unmarkSkill('hj_ls_chenglue');
                          }
                          else{
                            player.markSkill('hj_ls_chenglue');
                          }
                          player.logSkill('hj_ls_chenglue2',result.targets);
                        }
                      }
                    },
                    prompt:function(links,player){
                      return '将一张成略牌当'+get.translation(links[0][2])+'使用';
                    }
                  }
                }
              }
              else{
                return {
                  direct:true,
                  cards:links,
                  filterTarget:true,
                  filterCard:function(){return false},
                  selectCard:-1,
                  prepare:function(cards,player,targets){
                    var cards=lib.skill.hj_ls_chenglue2_backup.cards;
                    player.$give(cards[0],targets[0],false);
                  },
                  ai2:function(target){
                    return ai.get.attitude(_status.event.player,target)+10;
                  },
                  content:function(){
                    event.cards=lib.skill.hj_ls_chenglue2_backup.cards;
                    var card=event.cards[0];
                    player.storage.hj_ls_chenglue.remove(card);
                    player.syncStorage('hj_ls_chenglue');
                    if(!player.storage.hj_ls_chenglue.length){
                      player.unmarkSkill('hj_ls_chenglue');
                    }
                    else{
                      player.markSkill('hj_ls_chenglue');
                    }
                    player.logSkill('hj_ls_chenglue2',target);
                    if(get.type(card)=='equip'){
                      target.equip(card);
                      target.recover();
                    }
                    else{
                      player.discard(card);
                      target.draw();
                    }
                  }
                }
              }
            },
          },
          ai:{
            order:6,
            result:{
              player:function(player){
                if(player.hp<=2) return 3;
                return player.storage.hj_ls_chenglue.length-1;
              },
            },
          },
        },

        "hj_ls_fenglue":{ //锋略
          trigger:{
            player:"phaseUseBegin",
          },
          filter:function (event,player){ 
            return player.countCards('h')>0; 
          },
          direct:true,
          content:function (){ 
            'step 0' 
            player.chooseTarget(get.prompt('hj_ls_fenglue'),function(card,player,target){ 
              return player!=target&&player.canCompare(target); 
            }).ai=function(target){ 
              return -ai.get.attitude(player,target); 
            };
            'step 1' 
            if(result.bool){ 
              event.target=result.targets[0]; 
              player.logSkill('hj_ls_fenglue',event.target); 
              player.chooseToCompare(event.target); 
            } 
            else{ 
              event.finish(); 
            } 
            'step 2' 
            if(!result.bool){
              var card1=result.player;
              if(get.position(card1)=='d') event.target.gain(card1,'gain2');
              event.goto(3);
            }else{
              var card2=result.target;
              if(get.position(card2)=='d') player.gain(card2,'gain2');
              event.goto(5);
            }
            'step 3'
            player.chooseCard('锋略：请交给'+get.translation(event.target)+'一张牌','he',true).ai=function(card){
              return 5-ai.get.value(card);
            }
            'step 4'
            if(result.bool){
              event.target.gain(result.cards[0]);
              player.$give(result.cards[0],event.target);
              event.finish();
            }else event.finish();
            'step 5'
            event.target.addTempSkill('fengyin');
            var num=0;
            if(event.target.countCards('h')) num++;
            if(event.target.countCards('e')) num++;
            if(event.target.countCards('j')) num++;
            if(num){
              player.gainPlayerCard(event.target,num,'hej',true).set('filterButton',function(button){
                for(var i=0;i<ui.selected.buttons.length;i++){
                  if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
                }
                return true;
              });
            }
            player.storage.hj_ls_fenglue_mubiao=event.target;
            player.markSkillCharacter('hj_ls_fenglue_mubiao',event.target,'锋略','对'+get.translation(event.target)+'使用牌无距离限制');
            player.addTempSkill('hj_ls_fenglue_mubiao',"phaseAfter");
            event.target.addTempSkill('hj_ls_fenglue_mark',"phaseAfter");
            player.addTempSkill('hj_ls_fenglue_buff',"phaseAfter");
            event.finish();
          },
          subSkill:{
            mubiao:{
              onremove:function (player){
                player.storage.hj_ls_fenglue_mubiao.unmarkSkill('hj_ls_fenglue_mubiao');
                delete player.storage.hj_ls_fenglue_mubiao;
              },
              sub:true,
            },
            mark:{
              sub:true,
            },
            buff:{
              mod:{
                targetInRange:function (card,player,target){
                  if(target.hasSkill('hj_ls_fenglue_mark')) return true;
                },
              },
              sub:true,
            },
          },
        },
        "hj_ls_moushi":{ //谋识
          trigger:{
            player:"phaseDiscardBefore",
          },
          direct:true,
          content:function (){
            'step 0'
            player.chooseCardTarget({
              selectCard:1,
              position:"he",
              filterTarget:function(card,player,target){
                return player!=target;
              },
              prompt:'是否将一张牌交给一名其他角色？如若此做，其造成伤害后，你摸一张牌',
            });
            'step 1'
            if(result.bool){
              event.target=result.targets[0];
              player.logSkill('hj_ls_moushi',event.target);
              player.$give(result.cards.length,event.target);
              event.target.gain(result.cards,player);
              event.target.storage.hj_ls_moushi_mark=player;
              event.target.addTempSkill('hj_ls_moushi_mark',{player:"phaseAfter"});
            }else{
              event.finish();
            }
          },
          subSkill:{
            mark:{
              mark:"character",
              intro:{
                content:"当你造成伤害一点后，$摸一张牌",
              },
              trigger:{
                source:"damageEnd",
              },
              forced:true,
              popup:false,
              direct:true,
              filter:function (event,player){
                var a=player.storage.hj_ls_moushi_mark;
                return a.isAlive();
              },
              content:function (){
                var target=player.storage.hj_ls_moushi_mark;
                player.line(target);
                target.logSkill('hj_ls_moushi');
                target.draw(trigger.num);
              },
              sub:true,
            },
          },
        },

        "hj_ls_langxing":{ //狼行
          inherit:"shuangxiong",
          audioname:["re_yanwen"],
          trigger:{
            player:"phaseDrawBegin1",
          },
          check:function(event,player){
            if(player.countCards('h')>player.hp) return true;
            if(player.countCards('h')>3) return true;
            return false;
          },
          filter:function(event,player){
            return !event.numFixed;
          },
          content:function(){
            "step 0"
            player.judge(ui.special);
            "step 1"
            player.gain(result.card);
            player.$gain2(result.card);
            player.addTempSkill('shuangxiong2');
            player.storage.shuangxiong=get.color(result.card);
            trigger.changeToZero();
          },
        },
        "hj_ls_hubu":{ //虎步
          trigger:{
            player:"damageEnd",
            source:"damageEnd",
          },
          filter:function(event){
            return event.card&&event.card.name=='sha'&&event.notLink();
          },
          direct:true,
          content:function(){
            'step 0'
            player.chooseTarget('是否发动【虎步】？',function(card,player,target){
              return player!=target&&player.canUse('juedou',target);
            }).ai=function(target){
              if(ai.get.effect(target,{name:'juedou'},player,target)>0) return 1;
              return 0;
            }
            'step 1'
            if(result.bool){
              event.target=result.targets[0];
              event.target.judge(function(card){
                if(get.suit(card)!='spade') return 1;
                return -0.5;
              });
            }
            else{
              event.finish();
            }
            'step 2'
            if(result.bool){
              lib.skill.global.remove('_wuxie');
              player.useCard({name:'juedou'},event.target);
            }
            else{
              event.finish();
            }
            'step 3'
            lib.skill.global.push('_wuxie');
          },
        },

        "hj_ls_shanlie":{ //善列
          trigger:{
            player:["phaseDiscardBegin"],
          },
          mod:{
            maxHandcard:function (player,num){
                          return 6;
                    },
          },
          forced:true,
          content:function (){

            player.draw((player.maxHp-player.hp)+3);
          },
          ai:{
            threaten:1.3,
          },
        },
        "hj_ls_yingzhen":{ //营阵
          enable:"phaseUse",
          usable:2,
          mark:true,
          marktext:"营",
          intro:{
            content:"你的营阵：#次/2次",
          },
          init:function (player){
            player.storage.hj_ls_yingzhen=0;
            player.markSkill('hj_ls_yingzhen');
            player.syncStorage('hj_ls_yingzhen');
          },
          filterTarget:function (card,player,target){
            return player.canCompare(target)&&target.countCards('h')>1;
          },
          filter:function (event,player){
            return player.countCards('h')>0;
          },
          content:function (){
            "step 0"
            player.chooseToCompare(target);
            player.storage.hj_ls_yingzhen+=1;
            player.markSkill('hj_ls_yingzhen');
            player.syncStorage('hj_ls_yingzhen');
            "step 1"
            if(result.bool){
              player.gainPlayerCard('hej',target,true);
            }
            else{
              //player.discardPlayerCard('hej',target,true);
              player.useCard({name:'guohe'},target,true);
            }
          },
          ai:{
            basic:{
              order:9,
              useful:1,
              value:5,
            },
            result:{
              target:function (player,target){
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
                  var js=target.getCards('j');
                  if(js.length){
                    var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                    if(jj.name=='guohe'||js.length>1||get.effect(target,jj,target,player)<0){
                      return 3;
                    }
                  }
                  if(target.getEquip('baiyin')&&target.isDamaged()&&get.recoverEffect(target,player,player)>0){
                    if(target.hp==1&&!target.hujia) return 1.6;
                    if(target.hp==2) return 0.01;
                    return 0;
                  }
                }
                var es=target.getCards('e');
                var noe=(es.length==0||target.hasSkillTag('noe'));
                var noe2=(es.length==1&&es[0].name=='baiyin'&&target.isDamaged());
                var noh=(nh==0||target.hasSkillTag('noh'));
                if(noh&&(noe||noe2)) return 0;
                if(att<=0&&!target.countCards('he')) return 1.5;
                return -1.5;
              },
            },
            tag:{
              loseCard:1,
              discard:1,
            },
          },
          group:["hj_ls_yingzhen_重置"],
          subSkill:{
            "重置":{
              trigger:{
                player:["phaseEnd"],
              },
              forced:true,
              popup:false,
              content:function (){
                player.storage.hj_ls_yingzhen=0;
                player.markSkill('hj_ls_yingzhen');
                player.syncStorage('hj_ls_yingzhen');
              },
              sub:true,
            },
          },
        },

        "hj_ls_cangchu":{ //仓储
          group:["hj_ls_cangchu_zero"],
          init:function(player){
            player.logSkill('hj_ls_cangchu');
            if(!player.storage.hj_ls_cangchu) player.storage.hj_ls_cangchu=3;
          },
          marktext:"粮",
          intro:{
            content:"当前有#枚“粮”标记",
          },
          mark:true,
          trigger:{
            player:"damageEnd",
          },
          priority:-6,
          forced:true,
          filter:function(event,player){
            return player.storage.hj_ls_cangchu>0&&event.nature=='fire'&&!player.hasSkill('hj_ls_cangchu_xianzhi');
          },
          content:function(){
            var num1=player.storage.hj_ls_cangchu;
            var num2=trigger.num;
            var num3=num1-num2;
            player.storage.hj_ls_cangchu-=num2;
            if(player.storage.hj_ls_cangchu<0) player.storage.hj_ls_cangchu=0;
            player.syncStorage('hj_ls_cangchu');
            if(num3>=0){
              game.log(player,'失去了',num2,'枚“粮”标记');
            }else{
              game.log(player,'失去了',num1,'枚“粮”标记');
            }
          },
          subSkill:{
            zero:{
              trigger:{
                player:"damageAfter",
              },
              direct:true,
              forced:true,
              filter:function(event,player){
                return player.storage.hj_ls_cangchu==0&&!player.hasSkill('hj_ls_cangchu_xianzhi');
              },
              content:function(){
                player.logSkill('hj_ls_cangchu');
                player.addSkill('hj_ls_cangchu_xianzhi');
                player.unmarkSkill('hj_ls_cangchu');
                player.loseMaxHp();
                game.countPlayer(function(current){
                  if(player.getEnemies().contains(current)){
                    player.line(current,'white');
                    current.draw(2);
                  }
                });
              },
              sub:true,
            },
            xianzhi:{
              sub:true,
            },
          },
        },
        "hj_ls_liangying":{ //粮营
          forced:true,
          locked:true,
          charlotte:true,
          group:["hj_ls_liangying_draw","hj_ls_liangying_die"],
          subSkill:{
            draw:{
              trigger:{
                global:"drawBegin",
              },
              forced:true,
              filter:function (event,player){
                return (player.getFriends().contains(event.player)||event.player==player)&&player.storage.hj_ls_cangchu>0&&!player.hasSkill('hj_ls_cangchu_xianzhi');
              },
              content:function (){
                player.line(trigger.player,'white');
                trigger.num++;
              },
              sub:true,
            },
            die:{
              trigger:{
                global:"dieBegin",
              },
              forced:true,
              filter:function (event,player){
                return player.getFriends().contains(event.player)&&player.storage.hj_ls_cangchu>0&&!player.hasSkill('hj_ls_cangchu_xianzhi');
              },
              content:function (){
                game.countPlayer(function(current){
                  if((current==player||player.getFriends().contains(current))&&current!=trigger.player){
                    player.line(current,'white');
                    current.draw(2);
                    current.recover();
                  }
                });
              },
              sub:true,
            },
          },
        },
        "hj_ls_sushou":{ //宿守
          trigger:{
            player:"phaseDiscardBefore",
          },
          check:function(event,player){
            return true;
          },
          content:function(){
            'step 0'
            var num;
            var sun1=player.maxHp-player.hp;
            var sun2=sun1+1;
            if(player.storage.hj_ls_cangchu>0){
              num=player.storage.hj_ls_cangchu+1;
            }else{
              num=Math.max(1,sun2);
            }
            player.draw(num)._triggered=null;
            event.num=3;
            'step 1'
            player.chooseCardTarget({
              selectCard:1,
              position:"he",
              filterTarget:function(card,player,target){
                return player!=target&&!target.hasSkill('hj_ls_sushou_xianzhi');
              },
              prompt:'是否将一张牌交给一名其他角色？',
            });
            'step 2'
            if(result.bool){
              event.num--;
              event.target=result.targets[0];
              player.line(event.target,'white');
              player.$give(result.cards.length,event.target);
              event.target.gain(result.cards,player);
              event.target.addTempSkill('hj_ls_sushou_xianzhi');
            }else{
              event.finish();
            }
            'step 3'
            if(event.num>0){
              event.goto(1);
            }else{
              event.finish();
            }
          },
          subSkill:{
            xianzhi:{
              sub:true,
            },
          },
        },

        "hj_ls_mingmen":{ //名门
          init:function (player){
            player.storage.hj_ls_mingmen=0;
          },
          trigger:{
            player:"damageEnd",
          },
          forced:true,
          content:function (){
            player.draw(2)
            player.storage.hj_ls_mingmen++;
            player.markSkill('hj_ls_mingmen');
          },
          intro:{
            content:"手牌上限+#",
          },
          mod:{
            maxHandcard:function (player,num){
              return num+player.storage.hj_ls_mingmen;
            },
          },
          group:"hj_ls_mingmen_cancel",
          subSkill:{
            cancel:{
              trigger:{
                player:"damageBegin",
              },
              priority:-11,
              forced:true,
              filter:function (event){
                return event.num>1;
              },
              content:function (){
                trigger.num=0;
              },
              sub:true,
            },
          },
        },
        "hj_ls_pojun":{ //破军
          enable:"phaseUse",
          usable:1,
          filterTarget:function (card,player,target){
            return target!=player&&target.countCards('h');
          },
          filter:function (event,player){
            return player.countCards('h');
          },
          content:function (){
            'step 0'
            player.chooseToCompare(target);
            'step 1'
            if(result.bool){
              player.draw();
              player.useCard({name:'juedou'},targets,'noai').animate=false;
            }else{
              player.draw();
              player.useCard({name:'sha'},target,false);
            }
          },
          ai:{
            order:8,
            result:{
              target:function (player,target){
                return get.damageEffect(target,player,target);
              },
            },
          },
        },
        "hj_ls_tanlang":{ //贪狼
          forced:true,
          group:["hj_ls_tanlang1","hj_ls_tanlang2"],
        },
        "hj_ls_tanlang1":{ //贪狼1
          forced:true,
          trigger:{
            source:"damageEnd",
          },
          filter:function (event,player){
            return event.card&&event.card.name=='sha'&&event.player.countCards('he');
          },
          content:function (){
            "step 0"
            player.discardPlayerCard(trigger.player,'he',true);
            "step 1"
            var card=result.cards[0];
            if(get.type(card)=="equip") player.useCard({name:'sha'},trigger.player,false);
          },
        },
        "hj_ls_tanlang2":{ //贪狼2
          forced:true,
          trigger:{
            source:"damageEnd",
          },
          filter:function (event,player){
            return event.card&&event.card.name=='juedou'&&event.player.countCards('he');
          },
          content:function (){
            "step 0"
            player.discardPlayerCard(trigger.player,'he',true);
            "step 1"
            var card=result.cards[0];
            if(get.type(card)=="equip") player.useCard({name:'juedou'},trigger.player,false);
          },
        },
        "hj_ls_baiji":{ //百计
          trigger:{
            global:"drawEnd",
          },
          forced:true,
          nobracket:true,
          filter:function (event,player){
            return event.parent.name!='phaseDraw';        
          },
          content:function (){                  
            'step 0' 
            player.judge(function(card){           
              if(get.color(card)=='red') return -2;           
            });      
            'step 1'
            if(result.color=='red'){
              player.gain(get.cardPile(function(card){
                return get.type(card)=='basic';
              }),'gain2');
            }
            else{
              player.gain(get.cardPile(function(card){
                return get.type(card,'trick')=='trick';
              }),'gain2');
            }
          },
        },
      },
      translate:{
        "hj_ls_hunspdongzhuo":"魂☆董卓",
        "hj_ls_hunyuanshao":"魂袁绍",
        "hj_ls_hunliru":"魂李儒",
        "hj_ls_hunspjiaxu":"魂☆贾诩",
        "hj_ls_hunsplvbu":"魂☆吕布",
        "hj_ls_hunlijue":"魂李傕",
        "hj_ls_hunguosi":"魂郭汜",
        "hj_ls_hunhuaxiong":"魂华雄",
        "hj_ls_hunfanchou":"魂樊稠",
        "hj_ls_hunzhangji":"魂张济",
        "hj_ls_hunxurong":"魂徐荣",
        "hj_ls_hunyuanshu":"魂袁术",
        "hj_ls_hunjushou":"魂沮授",
        "hj_ls_hunshenpei":"魂审配",
        "hj_ls_huntianfeng":"魂田丰",
        "hj_ls_hunxuyou":"魂许攸",
        "hj_ls_hunxunchen":"魂荀谌",
        "hj_ls_hunyanliang&wenchou":"魂颜良&文丑",
        "hj_ls_hunzhangxia&gaolan":"魂张郃&高览",
        "hj_ls_hunchunyuqiong":"魂淳于琼",



        "hj_ls_jiuchi":"酒池",
        "hj_ls_jiuchi_info":"出牌阶段限一次，你可以失去一点体力，然后视为使用了一张酒。",
        "hj_ls_roulin":"肉林",
        "hj_ls_roulin_info":"<li>锁定技，你对女性角色使用的杀不能被响应。<br><li>锁定技，你对女性角色造成的伤害＋1，造成伤害后，你失去一点体力。",
        "hj_ls_hengxing":"横行",
        "hj_ls_hengxing_info":"<li>锁定技，其他角色使用的非延时锦囊对你无效。<br><li>结束阶段，你可以失去一点体力上限，然后令其他角色依次选择一项：交给你一张牌；或失去一点体力。",
        "hj_ls_baonue":"暴虐",
        "hj_ls_baonue_info":"当一名非群势力角色濒死时，你可以失去一点体力上限，然后令其立即死亡。",
        "hj_ls_roulin2":"肉林",
        "hj_ls_roulin2_info":"锁定技，你对女性角色造成的伤害＋1，造成伤害后，你失去一点体力。",
        "hj_ls_hengxing2":"横行",
        "hj_ls_hengxing2_info":"结束阶段，你可以失去一点体力上限，然后令其他角色依次选择一项：交给你一张牌；或失去一点体力。",

        "hj_ls_luanji":"乱击",
        "hj_ls_luanji_info":"出牌阶段限4次，你可以将两张手牌当作一张【万箭齐发】使用。当一名角色因响应你以此法使用的【万箭齐发】而打出【闪】时，你可以令该角色摸一张牌。",
        "hj_ls_mengzhu":"盟主",
        "hj_ls_mengzhu_info":"锁定技，其他角色的准备阶段，若你手牌不为全场最多(或之一)，你摸一张牌。",
        "hj_ls_luanji2":"乱击",
        "hj_ls_luanji2_info":"",

        "hj_ls_mieji":"灭计",
        "hj_ls_mieji_info":"<li>当你使用黑色基本牌或黑色非延时锦囊牌时，你可以额外为此牌指定一个目标。</br><li>你的回合内，有角色死亡后，你可以摸三张牌。",
        "hj_ls_juece":"绝策",
        "hj_ls_juece_info":"<li>每当一名其他角色失去最后一张手牌，你可以对其造成一点伤害。",
        "hj_ls_fencheng":"焚城",
        "hj_ls_fencheng_info":"<li>出牌阶段限一次，你可令所有其他角色依次选择一项：①弃置X张牌(X为其装备区的牌数且至少为2)；②受到2点无来源火焰伤害。",
        "hj_ls_mieji2":"灭计",
        "hj_ls_mieji2_info":"你的回合内，有角色死亡后，你可以摸三张牌。",

        "hj_ls_wansha":"完杀",
        "hj_ls_wansha_info":"锁定技，你的回合内，其他角色进入濒死状态时，你令其立即死亡,然后伤害来源摸三张牌。",
        "hj_ls_weimu":"帷幕",
        "hj_ls_weimu_info":"锁定技，当你成为其他角色使用的锦囊牌的目标时，取消之。",
        "hj_ls_luanwu":"乱武",
        "hj_ls_luanwu_info":"<li>出牌阶段限一次，你可以令所有其他角色各选择一项：①对距离最近的另一名角色使用【杀】；②失去1点体力。</br><li>锁定技，当你死亡时，你令所有角色获得技能【乱局】。(乱局：锁定技，准备阶段，你失去一点体力，然后摸三张牌。)",
        "hj_ls_luanju":"乱局",
        "hj_ls_luanju_info":"锁定技，准备阶段，你失去一点体力，然后摸三张牌。",
        "hj_ls_luanwu2":"乱武",
        "hj_ls_luanwu2_info":"",

        "hj_ls_wushuang":"无双",
        "hj_ls_wushuang_info":"锁定技，你使用【杀】/【决斗】的次数上限与可选目标数的基数为3，且目标需额外打出1张【闪】/【杀】",
        "hj_ls_liqu":"利驱",
        "hj_ls_liqu_info":"锁定技，每当你使用【杀】造成伤害后，你可以获得该角色的一至两张牌。若你获得了该角色的两张牌，其摸一张牌；若两张均为基本牌，你将其置于弃牌堆并获得一张【决斗】；若两张均为装备牌，你失去一点体力",
        "hj_ls_zhanshen":"战神",
        "hj_ls_zhanshen_info":"锁定技，准备阶段，你摸两张牌；你的武将牌不能被翻面。",

        "hj_ls_langxi":"狼袭",
        "hj_ls_langxi_info":"准备阶段，你可以对一名其他角色造成一点伤害，然后你获得其一张牌。",
        "hj_ls_yisuan":"亦算",
        "hj_ls_yisuan_info":"<li>锁定技，当你使用的杀结算完成后，其他所有角色可以对目标使用一张杀。</br><li>你的回合内，其他角色使用或打出的牌结算完成后，你可以将此牌交给一名不是使用者的角色。",
        "hj_ls_yisuan2":"亦算",
        "hj_ls_yisuan2_info":"你的回合内，其他角色使用或打出的牌结算完成后，你可以将此牌交给一名不是使用者的角色。",

        "hj_ls_tanbei":"贪狈",
        "hj_ls_tanbei_info":"出牌阶段限一次，你可以令一名角色获得你的一张手牌(若没有手牌则不获得)，然后你获得其两张牌并摸一张牌。",
        "hj_ls_sidao":"伺盗",
        "hj_ls_sidao_info":"<li>出牌阶段限一次，你可以将一张黑色牌当作顺手牵羊使用。</br><li>锁定技，你使用顺手牵羊无视距离。",

        "hj_ls_badao":"霸刀",
        "hj_ls_badao_info":"锁定技，你的黑色【杀】无视防具；你的红色【杀】造成的伤害＋1。",
        "hj_ls_shiyong":"恃勇",
        "hj_ls_shiyong_info":"锁定技，你对体力值不大于你的角色使用的【杀】不能被响应。",
        "hj_ls_mojiang":"魔将",
        "hj_ls_mojiang_info":"锁定技，奋发技，准备阶段，若你的体力值不大于3，你回复一点体力并摸两张牌。",

        "hj_ls_xingluan":"兴乱",
        "hj_ls_xingluan_info":"<li>当一名角色受到无属性伤害后，你可以对其造成等量的随机属性伤害并摸一张牌。</br><li>当你即将对一名角色造成伤害时，你可以防止此伤害，然后令其摸X张牌(X为其已损体力值)；若其与你势力相同，其恢复一点体力。",
        "hj_ls_xingluan2":"兴乱",
        "hj_ls_xingluan2_info":"当你即将对一名角色造成伤害时，你可以防止此伤害，然后令其摸X张牌(X为其已损体力值)；若其与你势力相同，其恢复一点体力。",

        "hj_ls_tunjun":"屯军",
        "hj_ls_tunjun_info":"出牌阶段限一次，若你有手牌，你可以令一名其他角色获得你一张手牌，然后你对其造成一点伤害。若其手牌数比你多，你获得其两张牌。",
        "hj_ls_lueming":"掠命",
        "hj_ls_lueming_info":"锁定技，结束阶段，若你的手牌数不大于2或你的体力为全场最少(或之一)，你恢复一点体力，然后你摸两张牌。",

        "hj_ls_xionghuo":"凶镬",
        "hj_ls_xionghuo_info":"锁定技，当你装备区有武器牌时，你无视其他角色的防具且造成的伤害＋1；当你对其他角色造成伤害后，你令其获得一枚“凶镬”标记；结束阶段，若场上有“凶镬”标记，你进行一次判定：黑色，你获得有“凶镬”标记的角色各一张手牌(无手牌则受到你的一点火焰伤害)；红色，有“凶镬”标记的角色各失去一点体力，结算完成后，你弃置场上所有“凶镬”标记。",
        "hj_ls_shajue":"杀绝",
        "hj_ls_shajue_info":"每回合限一次，当一名其他角色脱离濒死状态后，你可以视为对其使用一张【杀】或【决斗】。",

        "hj_ls_weidi":"伪帝",
        "hj_ls_weidi_info":"出牌阶段限一次，你可以选择一名有手牌的其他角色，获得其所有手牌并选择一项：①交还给其你的当前一半手牌(向下取整)；②出牌阶段结束后，其获得你的所有手牌。",
        "hj_ls_yongsi":"庸肆",
        "hj_ls_yongsi_info":"摸牌阶段，你可以放弃摸牌。如若此做，回合结束时你将手牌数补至当前存活势力数(若当前存活势力数不大于2，则改为将手牌补至体力值数)。",
        "hj_ls_yongsi2":"庸肆",
        "hj_ls_yongsi2_info":"",
        "hj_ls_weidi2":"伪帝",
        "hj_ls_weidi2_info":"",
        "hj_ls_weidi1":"伪帝",
        "hj_ls_weidi1_info":"",

        "hj_ls_xutu":"徐图",
        "hj_ls_xutu_info":"你的回合内，当你使用牌时，若此牌点数比你本回合内使用的上一张牌点数大，你可以摸一张牌。",
        "hj_ls_shizhi":"矢志",
        "hj_ls_shizhi_info":"锁定技，当你受到伤害后：若此伤害是你本回合第一次受到伤害，则你回复1点体力；若不是你本回合第一次受到伤害，则你摸一张牌并失去一点体力，然后若伤害来源不是你且当前回合角色为其，你令其选择一项：视为你对其(伤害来源)使用了一张【杀】，或结束出牌阶段。",

        "hj_ls_beizhan":"备战",
        "hj_ls_beizhan_info":"结束阶段开始时，你可以选择至多两名角色，令他们各摸X张牌(X为其体力上限数且至多为5)，如若此做，他们下个回合开始时，若其手牌为全场最多(或之一)，你令其弃置两张牌。",
        "hj_ls_beizhan_mark":"",
        "hj_ls_beizhan_mark_info":"",
        "hj_ls_gangzheng":"刚正",
        "hj_ls_gangzheng_info":"锁定技，你防止受到的伤害，改为失去一点体力；结束阶段，若你已受伤，你可以弃置至多X名角色区域内各一张牌(X为你已损体力值)。",

        "hj_ls_sijian":"死谏",
        "hj_ls_sijian_info":"当你失去最后的手牌时，你可以弃置一名其他角色的X张牌(X为其体力上限数)。",
        "hj_ls_gangzhi":"刚直",
        "hj_ls_gangzhi_info":"<li>当你受到伤害时，若你有手牌，你可以防止此伤害，然后弃置所有手牌。</br><li>当你受到伤害时，若你没有手牌，你摸等同于体力上限数的牌。",
        "hj_ls_gangzhi2":"刚直",
        "hj_ls_gangzhi2_info":"<li>当你受到伤害时，若你有手牌，你可以弃置所有手牌，然后防止此伤害。</br><li>当你受到伤害时，若你没有手牌，你摸等同于体力上限数的牌。",

        "hj_ls_chenglue":"成略",
        "hj_ls_chenglue_info":"摸牌阶段结束时，若你武将牌上的“略”少于三张，你可以将至多3-X张牌置于武将牌上(X为你武将牌上“略”数)，称为“略”，然后你摸等量的牌。出牌阶段，若你有“略”，你可以将一张“略”当作一张与此牌类别相同的牌使用(若为装备牌，则改为令一名角色使用此装备并回复一点体力)。",
        "hj_ls_shicai":"恃才",
        "hj_ls_shicai_info":"当你使用的牌结算完成后，你可以摸一张牌并弃置一张牌。",
        "hj_ls_cunmu":"寸目",
        "hj_ls_cunmu_info":"锁定技，当你摸牌时，改为从牌堆底摸牌；摸牌阶段，若你武将牌上有“略”，你额外摸一张牌。",
        "hj_ls_chenglue2":"成略",
        "hj_ls_chenglue2_info":"",

        "hj_ls_fenglue":"锋略",
        "hj_ls_fenglue_info":"出牌阶段开始时，你可以与一名角色进行拼点：若你赢，你获得其的拼点牌并获得其每个区域一张牌，然后其本回合内非锁定技失效且本回合内你对其使用牌无距离限制；若你没赢，你令其获得你的拼点牌并交给其一张牌。",
        "hj_ls_moushi":"谋识",
        "hj_ls_moushi_info":"弃牌阶段开始时，你可以将1张牌交给一名其他角色，如若此做，直到其的下个回合结束，其每造成1点伤害，你便摸1张牌。",

        "hj_ls_langxing":"狼行",
        "hj_ls_langxing_info":"摸牌阶段开始时，你可以选择放弃摸牌并进行一次判定；你获得此判定牌并且此回合可以将任意一张与该判定牌不同颜色的手牌当【决斗】使用。",
        "hj_ls_hubu":"虎步",
        "hj_ls_hubu_info":"你每使用【杀】造成一次伤害后或受到一次其他角色使用【杀】造成的伤害后，可以令除你外的任意角色进行一次判定；若结果不为黑桃，则视为你对其使用一张【决斗】（此【决斗】不能被【无懈可击】响应）。",

        "hj_ls_shanlie":"善列",
        "hj_ls_shanlie_info":"锁定技，你的弃牌阶段开始时，你摸三张牌，你的手牌上限为6。",
        "hj_ls_yingzhen":"营阵",
        "hj_ls_yingzhen_info":"出牌阶段限两次，你可以指定一名其他手牌数大于1的角色进行一次拼点：若你赢，你获得其一张牌；若你输，你视为对其使用一次【过河拆桥】",

        "hj_ls_cangchu":"仓储",
        "hj_ls_cangchu_info":"锁定技，游戏开始时，你获得3枚“粮”标记；每当你受到一点火焰伤害，你失去一枚“粮”。当你失去最后一枚“粮”后，你失去一点体力上限，然后令所有敌方角色摸两张牌。",
        "hj_ls_liangying":"粮营",
        "hj_ls_liangying_info":"锁定技，若你有“粮”，友方角色从牌堆摸牌时，摸牌数＋1；每当一名友方角色阵亡，若你有“粮”，其余友方角色各摸两张牌并各回复一点体力。",
        "hj_ls_sushou":"宿守",
        "hj_ls_sushou_info":"弃牌阶段开始前，你可以摸1＋X张牌(X为你的“粮”标记数，若你没有“粮”，X为你已损体力值且至少为1，X不受增加或减少摸牌数的效果影响)，然后你可以交给任意一名以此法未获得过牌的其他角色一张牌(至多给出三张牌)。",

        "hj_ls_mingmen":"名门",
        "hj_ls_mingmen_info":"锁定技<br>你不会受到大于1的伤害<br>每当你受到伤害<br>摸2牌并永久增加一手牌上限",
        "hj_ls_pojun":"破军",
        "hj_ls_pojun_info":"出牌阶段限一次，你可以与一名其他角色进行一次拼点。若你赢，你摸一张牌并视为对其使用一张【决斗】；若你输，你摸一张牌并视为对其使用一张不计入次数的【杀】",
        "hj_ls_tanlang":"贪狼",
        "hj_ls_tanlang_info":"锁定技，当你使用【杀】或【决斗】造成伤害后你弃置其一张牌，若弃置的牌为装备牌，视为你对其使用一张【杀】或【决斗】",
        "hj_ls_tanlang1":"贪狼",
        "hj_ls_tanlang1_info":"",
        "hj_ls_tanlang2":"贪狼",
        "hj_ls_tanlang2_info":"",
        "hj_ls_baiji":"百计",
        "hj_ls_baiji_info":"每当其他角色在回合内摸牌阶段以外摸牌时，你进行一次判定:若判定结果的花色为红色，则你随机获得一张基本牌；若判定结果的花色为黑色，则你随机获得一张锦囊牌。",
      },
    },"乱世篇");
    //why???
  }
  if(config.hj_shennu){ //神怒篇
    game.addCharacterPack({
      character:{
        "hj_shenguanyu":["male","shen",5,["hj_sn_wushen","hj_sn_wuhun","hj_sn_zhuihun","hj_sn_suoming"],[]],
        "hj_shenlvmeng":["male","shen",4,["hj_sn_shelie","hj_sn_gongxin","hj_sn_keji","hj_sn_botu"],[]],
        "hj_shenzhouyu":["male","shen",4,["hj_sn_shenzi","hj_sn_honglian","hj_sn_qinyin","hj_sn_yeyan"],[]],
        "hj_shenzhugeliang":["male","shen",5,["hj_sn_xinqixing","hj_sn_qidao"],[]],
        "hj_shencaocao":["male","shen",4,["hj_sn_guixin","hj_sn_zhuangzhi","hj_sn_feiying","hj_sn_xiaoxiong"],[]],
        "hj_shenlvbu":["male","shen",6,["hj_sn_wushuang","hj_sn_feijiang","hj_sn_wuqian","hj_sn_shenfen"],[]],
        "hj_shensimayi":["male","shen",4,["hj_sn_renjie","hj_sn_baiyin","hj_sn_lianpo"],[]],
        "hj_shenzhaoyun":["male","shen",4,["hj_sn_shenlong"],[]],
        "hj_shenliubei":["male","shen",6,["hj_sn_longnu","hj_sn_longwei","hj_sn_jieying","hj_sn_tuogu"],[]],
        "hj_shenluxun":["male","shen",4,["hj_sn_qianxun","hj_sn_junlue","hj_sn_lianying","hj_sn_zhanhuo"],[]],
        "hj_shenzhangliao":["male","shen",5,["hj_sn_tuxi","hj_sn_duorui","hj_sn_zhiti","hj_sn_xingtian"],[]],
        "hj_shenganning":["male","shen","6",["hj_sn_poxi","hj_sn_shenpo","hj_sn_jianying","hj_sn_jijing"],[]],
        "hj_shencaopi":["male","shen",6,["hj_sn_chuyuan","hj_sn_yange","hj_sn_dengji"],["zhu"]],
        "hj_shenzhenji":["female","shen",4,["hj_sn_luoshen","hj_sn_fanghua","hj_sn_shenfu","hj_sn_qixian"],[]],
      },
      skill:{
        "hj_sn_wushen":{ //原噬命
          audio:"ext:神怒降世:1",
          group:"hj_sn_wushen_zhuiming",
          trigger:{
            source:"damageBegin2",
          },
          forced:true,
          filter:function(event,player){
            return event.card&&(event.card.name=='sha'||event.card.name=='juedou');
          },
          logTarget:"player",
          content:function(){
            var num=trigger.num;
            trigger.cancel();
            trigger.player.loseMaxHp(num);
          },
          subSkill:{
            zhuiming:{
              trigger:{
                player:"useCard",
              },
              filter:function(event,player){
                return event.card.name=='sha'&&get.suit(event.card)=='heart';
              },
              forced:true,
              content:function(){
                trigger.directHit.addArray(game.players);
              },
              ai:{
                effect:{
                  target:function(card,player,target,current){
                    if(get.tag(card,'respondSha')&&current<0) return 0.6;
                  },
                },
                respondSha:true,
                order:4,
                useful:-1,
                value:-1,
              },
              sub:true,
            },
          },
        },
        "hj_sn_wuhun":{ //原鬼神
          mod:{
            cardname:function(card,player,name){
              if(card.name=='taoyuan'||card.name=='wugu') return 'sha';
            },
            targetInRange:function (card){
              if(get.suit(card)=='diamond'&&(_status.event.skill=='new_rewusheng'||card.name=='sha')) return true;
            },
          },
          audio:"ext:神怒降世:1",
          enable:["chooseToRespond","chooseToUse"],
          filterCard:function (card,player){
            if(get.zhu(player,'shouyue')) return true;
            return get.color(card)=='red';
          },
          position:"he",
          viewAs:{
            name:"sha",
          },
          viewAsFilter:function (player){
            if(get.zhu(player,'shouyue')){
              if(!player.countCards('he')) return false;
            }
            else{
              if(!player.countCards('he',{color:'red'})) return false;
            }
          },
          prompt:"将一张红色牌当杀使用或打出",
          check:function (card){return 4-get.value(card)},
          ai:{
            skillTagFilter:function (player){
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
            order:function (){
              if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
              return 3;
            },
            result:{
              target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                  if(get.attitude(player,target)>0){
                    return -6;
                  }
                  else{
                    return -3;
                  }
                }
                return -1.5;
              },
            },
            tag:{
              respond:1,
              respondShan:1,
              damage:function (card){
                if(card.nature=='poison') return;
                return 1;
              },
              natureDamage:function (card){
                if(card.nature) return 1;
              },
              fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
              },
              thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
              },
              poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
              },
            },
            canLink:function(player,target,card){
              if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
              if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
              },true)) {
                return false;
              }
              if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
              return true;
            },
          },
        },
        "hj_sn_zhuihun":{
          shaRelated:true,
          audio:"ext:神怒降世:1",
          trigger:{
            player:"useCardToPlayered",
            target:"useCardToTargeted",
          },
          filter:function(event,player){
            if(!(event.card.name=='sha')) return false;
            return player==event.target||event.getParent().triggeredTargets3.length==1;
          },
          frequent:true,
          content:function(){
            player.draw();
          },
        },
        "hj_sn_suoming":{
          audio:"ext:神怒降世:1",
          group:["hj_sn_suoming_die","hj_sn_suoming_mark","hj_sn_suoming_tuichang"],
          trigger:{
            player:"damageEnd",
          },
          forced:true,
          filter:function (event,player){
            return event.source!=undefined;
          },
          content:function (){
            trigger.source.addMark('hj_sn_suoming_mark',trigger.num);
          },
          subSkill:{
            die:{
              audio:"ext:神怒降世:1",
              skillAnimation:true,
              animationColor:"metal",
              trigger:{
                player:"die",
              },
              forced:true,
              forceDie:true,
              direct:true,
              filter:function (event,player){
                return game.hasPlayer(function(current){
                  return current!=player&&current.hasMark('hj_sn_suoming_mark');
                });
              },
              content:function (){
                "step 0"
                var num=0;
                for(var i=0;i<game.players.length;i++){
                  var current=game.players[i];
                  if(current!=player&&current.countMark('hj_sn_suoming_mark')>num){
                    num=current.countMark('hj_sn_suoming_mark');
                  }
                }
                player.chooseTarget(true,'请选择【索命】的目标',function(card,player,target){
                  return target!=player&&target.countMark('hj_sn_suoming_mark')==_status.event.num;
                }).set('ai',function(target){
                  return -get.attitude(_status.event.player,target);
                }).set('forceDie',true).set('num',num);
                "step 1"
                if(result.bool&&result.targets&&result.targets.length){
                  var target=result.targets[0];
                  event.target=target;
                  player.logSkill('hj_sn_suoming_die',target);
                  player.line(target,{color:[255, 255, 0]});
                  game.delay(2);
                }
                "step 2"
                target.judge(function(card){
                  if(['tao','taoyuan'].contains(card.name)) return 10;
                  return -10;
                });
                "step 3"
                if(!result.bool){
                  lib.element.player.die.apply(target,[]);
                }
                player.logSkill('hj_sn_suoming_tuichang');
              },
              sub:true,
            },
            mark:{
              marktext:"魇",
              intro:{
                name:"梦魇",
                content:"mark",
              },
              sub:true,
            },
            tuichang:{
              audio:"ext:神怒降世:1",
              sub:true,
            },
          },
          ai:{
            threaten:0.01,
          },
        },
        
        "hj_sn_shelie":{
          audio:"ext:神怒降世:1",
          trigger:{
            player:"phaseDrawBegin1",
          },
          filter:function(event,player){
            return !event.numFixed;
          },
          content:function(){
            "step 0"
            trigger.changeToZero();
            event.cards=get.cards(6);
            game.cardsGotoOrdering(event.cards);
            event.videoId=lib.status.videoId++;
            game.broadcastAll(function(player,id,cards){
              var str;
              if(player==game.me&&!_status.auto){
                str='涉猎：获取花色各不相同的牌';
              }
              else{
                str='涉猎';
              }
              var dialog=ui.create.dialog(str,cards);
              dialog.videoId=id;
            },player,event.videoId,event.cards);
            event.time=get.utc();
            game.addVideo('showCards',player,['涉猎',get.cardsInfo(event.cards)]);
            game.addVideo('delay',null,2);
            "step 1"
            var next=player.chooseButton([0,6],true);
            next.set('dialog',event.videoId);
            next.set('filterButton',function(button){
              for(var i=0;i<ui.selected.buttons.length;i++){
                if(get.suit(ui.selected.buttons[i].link)==get.suit(button.link)) return false;
              }
              return true;
            });
            next.set('ai',function(button){
              return get.value(button.link,_status.event.player);
            });
            "step 2"
            if(result.bool&&result.links){
              event.cards2=result.links;
            }
            else{
              event.finish();
            }
            var time=1000-(get.utc()-event.time);
            if(time>0){
              game.delay(0,time);
            }
            "step 3"
            game.broadcastAll('closeDialog',event.videoId);
            var cards2=event.cards2;
            player.gain(cards2,'log','gain2');
          },
          ai:{
            threaten:1.2,
          },
        },
        "hj_sn_gongxin":{
          audio:"ext:神怒降世:1",
          enable:"phaseUse",
          usable:1,
          filterTarget:function(card,player,target){
            return target!=player&&target.countCards('h');
          },
          content:function(){
            "step 0"
            event.videoId=lib.status.videoId++;
            var cards=target.getCards('h');
            if(player.isOnline2()){
              player.send(function(cards,id){
                ui.create.dialog('攻心',cards).videoId=id;
              },cards,event.videoId);
            }
            event.dialog=ui.create.dialog('攻心',cards);
            event.dialog.videoId=event.videoId;
            if(!event.isMine()){
              event.dialog.style.display='none';
            }
            player.chooseButton().set('filterButton',function(button){
              return true;
            }).set('dialog',event.videoId);
            "step 1"
            if(result.bool){
              event.card=result.links[0];
              var func=function(card,id){
                var dialog=get.idDialog(id);
                if(dialog){
                  for(var i=0;i<dialog.buttons.length;i++){
                    if(dialog.buttons[i].link==card){
                      dialog.buttons[i].classList.add('selectedx');
                    }
                    else{
                      dialog.buttons[i].classList.add('unselectable');
                    }
                  }
                }
              }
              if(player.isOnline2()){
                player.send(func,event.card,event.videoId);
              }
              else if(event.isMine()){
                func(event.card,event.videoId);
              }
              player.chooseControl('gongxin_discard','gongxin_top');
            }
            else{
              if(player.isOnline2()){
                player.send('closeDialog',event.videoId);
              }
              event.dialog.close();
              event.finish();
            }
            "step 2"
            if(player.isOnline2()){
              player.send('closeDialog',event.videoId);
            }
            event.dialog.close();
            var card=event.card;
            if(result.control=='gongxin_top'){
              target.lose(card,ui.special);
              player.showCards(card,'置于牌堆顶');
            }
            else{
              target.discard(card);
              event.finish();
            }
            "step 3"
            event.card.fix();
            ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
            game.log(player,'将',event.card,'置于牌堆顶');
          },
          ai:{
            threaten:1.5,
            result:{
              target:function(player,target){
                return -target.countCards('h');
              },
            },
            order:10,
            expose:0.4,
          },
        },
        "hj_sn_keji":{
          audio:"ext:神怒降世:1",
          trigger:{
            player:"phaseDiscardBefore",
          },
          frequent:function(event,player){
            return player.needsToDiscard();
          },
          filter:function(event,player){
            if(player.getHistory('skipped').contains('phaseUse')) return true;
            var history=player.getHistory('useCard').concat(player.getHistory('respond'));
            for(var i=0;i<history.length;i++){
              if(history[i].card.name=='sha'&&history[i].isPhaseUsing()) return false;
            }
            return true;
          },
          content:function(){
            trigger.cancel();
          },
        },
        "hj_sn_botu":{
          audio:"ext:神怒降世:1",
          skillAnimation:true,
          animationColor:"soil",
          trigger:{
            player:"phaseAfter",
          },
          frequent:true,
          filter:function(event,player){
            var history=player.getHistory('useCard',function(evt){
              return evt.isPhaseUsing();
            });
            var suits=[];
            for(var i=0;i<history.length;i++){
              var suit=get.suit(history[i].card);
              if(suit) suits.add(suit);
            }
            return suits.length==4;
          },
          content:function(){
            player.insertPhase();
          },
        },
        
        "hj_sn_shenzi":{
          audio:"ext:神怒降世:1",
          trigger:{
            player:"phaseZhunbeiBegin",
          },
          filter:function(event,player){
            return !event.numFixed;
          },
          check:function(event,player){
            if(event.player.hasJudge('lebu')) return false;
            if(event.player.hp<3) return event.player.countCards('h',{name:'tao'})>0;
            if(event.player.hp==1) return event.player.countCards('h',{name:'tao'})>0||event.player.countCards('h',{name:'jiu'})>0;
            return 1;
          },
          content:function(){
            player.damage('fire',1,'nocard');
          },
          ai:{
            threaten:1.5,
          },
          mod:{
            maxHandcardBase:function(player,num){
              return player.maxHp;
            },
          },
        },
        "hj_sn_honglian":{
          trigger:{
            player:"damageEnd",
          },
          filter:function(event,player){
            return event.nature=='fire';
          },
          forced:true,
          audio:"ext:神怒降世:1",
          content:function(){
            var num=trigger.num;
            player.draw(2*num);
          },
          ai:{
            maihp:true,
          },
        },
        "hj_sn_qinyin":{
          audio:"ext:神怒降世:1",
          trigger:{
            player:"phaseDiscardEnd",
          },
          direct:true,
          content:function(){
            "step 0"
            event.forceDie=true;
            if(typeof event.count!='number'){
              // event.count=trigger.cards.length-1;
              event.count=1;
            }
            var recover=0,lose=0,players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
              if(players[i].hp<players[i].maxHp){
                if(get.attitude(player,players[i])>0){
                  if(players[i].hp<2){
                    lose--;
                    recover+=0.5;
                  }
                  lose--;
                  recover++;
                }
                else if(get.attitude(player,players[i])<0){
                  if(players[i].hp<2){
                    lose++;
                    recover-=0.5;
                  }
                  lose++;
                  recover--;
                }
              }
              else{
                if(get.attitude(player,players[i])>0){
                  lose--;
                }
                else if(get.attitude(player,players[i])<0){
                  lose++;
                }
              }
            }
            var prompt=get.prompt('hj_sn_qinyin')+'（剩余'+get.cnNumber(event.count)+'次）';
            player.chooseControl('伤害','回复','cancel2',
              ui.create.dialog(get.prompt('qinyin'),'hidden')).ai=function(){
              if(lose>recover&&lose>0) return 0;
              if(lose<recover&&recover>0) return 1;
              return 2;
            }
            "step 1"
            if(result.control=='cancel2'){
              event.finish();
            }
            else{
              player.logSkill('hj_sn_qinyin');
              event.bool=(result.control=='回复');
              event.num=0;
              event.players=game.filterPlayer();
              event.players.sort(lib.sort.seat);
            }
            "step 2"
            if(event.num<event.players.length){
              var target=event.players[event.num];
              if(event.bool){
                target.recover();
              }
              else{
                target.damage('fire',1,'nocard');
              }
              event.num++;
              event.redo();
            }
            "step 3"
            if(event.count>1){
              event.count--;
              event.goto(0);
            }
          },
          ai:{
            expose:0.1,
            threaten:2,
          },
        },
        "hj_sn_yeyan":{
          unique:true,
          forceDie:true,
          enable:"phaseUse",
          audio:"ext:神怒降世:1",
          mark:true,
          marktext:"炎",
          derivation:"hj_sn_yehuo",
          animationColor:"metal",
          skillAnimation:"legend",
          limited:true,
          init:function(player){
            player.storage.hj_sn_yehuo=false;
          },
          filter:function(event,player){
            return player.countCards('he',{color:'red'})>0&&player.storage.hj_sn_yehuo==false;
          },
          position:"he",
          filterCard:{
            color:"red",
          },
          filterTarget:function(card,player,target){
            return target!=player;
          },
          selectCard:[1,3],
          complexCard:true,
          check:function(card){
            return 8-get.value(card);
          },
          content:function (){
            "step 0"
            player.storage.hj_sn_yehuo=true;
            player.awakenSkill('hj_sn_yehuo');
            "step 1"
            player.line(target,'green');
            target.damage('fire',cards.length,'nocard');
            if(cards.length>1) player.damage('fire',cards.length-1,'nocard');
            player.addSkill('hj_sn_yehuo2');
          },
          intro:{
            name:"业炎",
            content:"limited",
          },
          ai:{
            order:function(){
              return get.order({name:'sha'})-1;
            },
            result:{
              target:function(player,target){
                if(player.hp>3&&player.countCards('h',{color:'red'})>0) return -1;
                if(player.hp==1&&player.getEquip('baiyin')){
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>2&&player.countCards('h',{name:'tao'})+player.countCards('h',{name:'jiu'})>0) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>1) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>0) return -1;
                  return 0;
                }
                if(player.hp==3&&player.getEquip('tengjia')){
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>2&&player.countCards('h',{name:'tao'})+player.countCards('h',{name:'jiu'})>0) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>1) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>0) return -1;
                  return 0;
                }
                if(player.hp==2&&player.getEquip('tengjia')){
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>2&&player.countCards('h',{name:'tao'})+player.countCards('h',{name:'jiu'})>1) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>1&&player.countCards('h',{name:'tao'})+player.countCards('h',{name:'jiu'})>0) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>0) return -1;
                  return 0;
                }
                if(player.hp==1&&player.getEquip('tengjia')){
                  if(player.countCards('he',{color:'red'})-player.countCards('h',    {name:'tao'})>2&&player.countCards('h',{name:'tao'})+player.countCards('h',{name:'jiu'})>2) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',    {name:'tao'})>1&&player.countCards('h',{name:'tao'})+player.countCards('h',{name:'jiu'})>1) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>0) return -1;
                  return 0;
                }
                if(player.hp==3){
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>2) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>1) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>0) return -1;
                  return 0;
                }
                if(player.hp==2){
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>2&&player.countCards('h',{name:'tao'})+player.countCards('h',{name:'jiu'})>0) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>1) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>0) return -1;
                  return 0;
                }
                if(player.hp==1){
                  if(player.countCards('he',{color:'red'})-player.countCards('h',    {name:'tao'})>2&&player.countCards('h',{name:'tao'})+player.countCards('h',{name:'jiu'})>1) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>1&&player.countCards('h',{name:'tao'})+player.countCards('h',{name:'jiu'})>0) return -1;
                  if(player.countCards('he',{color:'red'})-player.countCards('h',{name:'tao'})>0) return -1;
                  return 0;
                }
                return 0;
              },
            },
          },
        },
        "hj_sn_yehuo":{
          audio:"ext:神怒降世:1",
          enable:"phaseUse",
          usable:1,
          filter:function(event,player){
            return player.countCards('he',{color:'red'})>0&&player.isDamaged();
          },
          filterTarget:function(card,player,target){
            return true;
          },
          position:"he",
          filterCard:{
            color:"red",
          },
          selectCard:function(){
            var player=_status.event.player
            return [1,Math.max(1,player.getDamagedHp())];
          },
          complexCard:true,
          selectTarget:function(){
            return ui.selected.cards.length;
          },
          check:function(card){
            return 4-get.value(card);
          },
          multitarget:true,
          multiline:true,
          line:"fire",
          content:function(){
            event.delay=false;
            for(var i=0;i<targets.length;i++){
              targets[i].damage('fire',1,'nocard');
              event.delay=true;
            }
          },
          ai:{
            order:8,
            result:{
              target:function(player,target){
                if(player.isDamaged()&&player.countCards('he',{color:'red'})>0) return -1;
                return 0;
              },
            },
          },
        },
        "hj_sn_yehuo2":{
          unique:true,
          forced:true,
          direct:true,
          trigger:{
            player:"phaseBegin",
          },
          content:function(){
            player.addSkill('hj_sn_yehuo');
            game.log(player,'获得了技能','#g〖业火〗')
            player.removeSkill('hj_sn_yehuo2');
          },
        },
        
        "hj_sn_qixing":{
          audio:"ext:神怒降世:1",
          group:["hj_sn_qixing_tongtian","hj_sn_qixing_kuangfeng","hj_sn_qixing_dawu","hj_sn_qixing_yichu"],
          marktext:"星",
          mark:true,
          usable:1,
          trigger:{
            player:"useCard",
          },
          filter:function(event,player){
            if(event.name!='useCard'&&event.player==event.target) return false;
            if(player.storage.hj_sn_qixing.length==7) return false;
            return get.type(event.card)=='trick';
          },
          intro:{
            content:"cards",
            onunmark:function(storage,player){
              if(storage&&storage.length){
                player.$throw(storage,1000);
                game.cardsDiscard(storage);
                game.log(storage,'被置入了弃牌堆');
                storage.length=0;
              }
            },
          },
          onremove:function(player){
            game.countPlayer(function(current){
              if(current.hasSkill('dawu2')){
                current.removeSkill('dawu2');
              }
              if(current.hasSkill('kuangfeng2')){
                current.removeSkill('kuangfeng2');
              }
            });
          },
          init:function(player){
            if(!player.storage.hj_sn_qixing) player.storage.hj_sn_qixing=[];
          },
          frequent:true,
          content:function(){
            var card=game.cardsGotoSpecial(get.cards()).cards[0];
            player.$draw(card);
            game.delay();
            player.storage.hj_sn_qixing.push(card);
            player.markSkill('hj_sn_qixing');
          },
          subSkill:{
            tongtian:{
              audio:"ext:神怒降世:1",
              trigger:{
                player:["phaseDrawAfter","phaseDiscardBegin"],
              },
              forced:true,
              filter:function(event,player){
                return player.storage.hj_sn_qixing&&player.storage.hj_sn_qixing.length>0;
              },
              content:function(){
                "step 0"
                player.chooseCard('选择任意张手牌与「星」交换',[1,Math.min(player.countCards('h'),player.storage.hj_sn_qixing.length)]).set('ai',function(card){
                  return get.unuseful(card);
                });
                "step 1"
                if(result.bool){
                  player.lose(result.cards,ui.special,'toStorage');
                  player.storage.hj_sn_qixing=player.storage.hj_sn_qixing.concat(result.cards);
                  player.syncStorage('hj_sn_qixing');
                  event.num=result.cards.length;
                }
                else{
                  event.finish();
                }
                "step 2"
                player.chooseCardButton(player.storage.hj_sn_qixing,'选择'+event.num+'张牌作为手牌',event.num,true).set('ai',function(card){
                  return get.value(button.link);
                });
                if(player==game.me&&!event.isMine()){
                  game.delay(0.5);
                }
                "step 3"
                player.gain(result.links,'fromStorage');
                for(var i=0;i<result.links.length;i++){
                  player.storage.hj_sn_qixing.remove(result.links[i]);
                }
                player.syncStorage('hj_sn_qixing');
                if(player==game.me&&_status.auto){
                  game.delay(0.5);
                }
              },
              intro:{
                onunmark:function(storage,player){
                  if(storage&&storage.length){
                    player.$throw(storage,1000);
                    game.cardsDiscard(storage);
                    game.log(storage,'被置入了弃牌堆');
                    storage.length=0;
                  }
                },
                mark:function(dialog,content,player){
                  if(content&&content.length){
                    if(player==game.me||player.isUnderControl()){
                      dialog.addAuto(content);
                    }
                    else{
                      return '共有'+get.cnNumber(content.length)+'张「星」';
                    }
                  }
                },
                content:function(content,player){
                  if(content&&content.length){
                    if(player==game.me||player.isUnderControl()){
                      return get.translation(content);
                    }
                    return '共有'+get.cnNumber(content.length)+'张「星」';
                  }
                },
              },
              sub:true,
              "audioname2":{
                caoshuang:"tuogu",
              },
            },
            yichu:{
              trigger:{
                player:["phaseBegin","die"],
              },
              filter:function(event,player){
                return true;
              },
              direct:true,
              forced:true,
              forceDie:true,
              content:function(){
                game.countPlayer(function(current){
                  if(current.hasSkill('dawu2')){
                    current.removeSkill('dawu2');
                  }
                  if(current.hasSkill('kuangfeng2')){
                    current.removeSkill('kuangfeng2');
                  }
                });
              },
              sub:true,
            },
          },
          "audioname2":{
            caoshuang:"tuogu",
          },
        },
        "hj_sn_qixing_kuangfeng":{
          audio:"ext:神怒降世:1",
          enable:"phaseUse",
          usable:1,
          filterTarget:function(card,player,target){
            return target!=player;
          },
          filter:function(event,player){
            return player.storage.hj_sn_qixing&&player.storage.hj_sn_qixing.length>1;
          },
          content:function(){
            "step 0"
            target.addSkill('kuangfeng2');
            player.chooseCardButton('弃置两枚「星」',2,player.storage.hj_sn_qixing,true);
            "step 1"
            for(var i=0;i<result.links.length;i++){
              player.storage.hj_sn_qixing.remove(result.links[i]);
            }
            game.addVideo('storage',player,['hj_sn_qixing',get.cardsInfo(player.storage.hj_sn_qixing),'cards']);
            game.cardsDiscard(result.links);
            game.log(player,'将',result.links,'置入了弃牌堆')
          },
          ai:{
            order:function(){
              return get.order({name:'huogong'})+1;
            },
            result:{
              target:function(player,target){
                if(player.storage.hj_sn_qixing.length>3) return -1;
              },
            },
          },
          "audioname2":{
            caoshuang:"tuogu",
          },
        },
        "hj_sn_qixing_dawu":{
          audio:"ext:神怒降世:1",
          trigger:{
            player:"phaseEnd",
          },
          filter:function(event,player){
            return player.storage.hj_sn_qixing&&player.storage.hj_sn_qixing.length>1;
          },
          content:function(){
            "step 0"
            player.chooseTarget('选择一名角色获得「大雾」标记',true).set('ai',function(target){
              var player=_status.event.player;
              return get.attitude(target,player);
            });
            "step 1"
            if(result.bool){
              var length=result.targets.length;
              for(var i=0;i<length;i++){
                result.targets[i].addSkill('dawu2');
              }
              player.logSkill('jszgldw',result.targets,'thunder');
              player.chooseCardButton('弃置两枚「星」',2,player.storage.hj_sn_qixing,true);
            }
            else{
              event.finish();
            }
            "step 2"
            for(var i=0;i<result.links.length;i++){
              player.storage.hj_sn_qixing.remove(result.links[i]);
            }
            game.addVideo('storage',player,['hj_sn_qixing',get.cardsInfo(player.storage.hj_sn_qixing),'cards']);
            game.cardsDiscard(result.links);
            game.log(player,'将',result.links,'置入了弃牌堆')
          },
          "audioname2":{
            caoshuang:"tuogu",
          },
        },
        "hj_sn_xinqixing":{
          audio:"ext:神怒降世:1",
          trigger:{
            global:"judgeEnd",
            player:["phaseBegin","phaseEnd","judgeEnd","damageEnd"],
          },
          filter:function(event,player){
            if(player.storage.hj_sn_qixing.length==7) return false;
            return true;
          },
          intro:{
            content:"cards",
            onunmark:function(storage,player){
              if(storage&&storage.length){
                player.$throw(storage,1000);
                game.cardsDiscard(storage);
                game.log(storage,'被置入了弃牌堆');
                storage.length=0;
              }
            },
          },
          init:function(player){
            if(!player.storage.hj_sn_qixing) player.storage.hj_sn_qixing=[];
          },
          forced:true,
          content:function(){
            var card=game.cardsGotoSpecial(get.cards()).cards[0];
            player.$draw(card);
            game.delay();
            player.storage.hj_sn_qixing.push(card);
            player.markSkill('hj_sn_qixing');
          },
          "audioname2":{
            caoshuang:"tuogu",
          },
        },
        "hj_sn_qidao":{
          audio:"ext:神怒降世:1",
          skillAnimation:true,
          animationStr:"七道",
          animationColor:"soil",
          juexingji:true,
          derivation:["hj_sn_qixing","hj_sn_guanxing","hj_sn_huoji","hj_sn_kanpo"],
          forced:true,
          trigger:{
            player:"phaseZhunbeiBegin",
          },
          filter:function(event,player){
            return player.storage.hj_sn_qixing.length==7&&!player.storage.hj_sn_qidao;
          },
          content:function(){
            player.awakenSkill('hj_sn_qidao');
            player.loseMaxHp(2);
            player.removeSkill('hj_sn_xinqixing');
            player.addSkill('hj_sn_qixing');
            player.addSkill('hj_sn_guanxing');
            player.addSkill('hj_sn_huoji');
            player.addSkill('hj_sn_kanpo');
            game.log(player,'获得了技能','#g【观星】','、','#g【火计】','与','#g【看破】')
          },
        },
        "hj_sn_guanxing":{
          audio:"ext:神怒降世:1",
          group:"hj_sn_guanxing_jiefeng",
          frequent:true,
          trigger:{
            player:["phaseZhunbeiBegin","phaseJieshuBegin"],
          },
          content:function(){
            'step 0'
            var player = event.player;
            if(player.isUnderControl()) game.modeSwapPlayer(player);
            var cards = get.cards(5);
            var guanXing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
            game.broadcast(function(player, cards){
              if (!window.decadeUI) return;
              decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
            }, player, cards);
            event.switchToAuto = function(){
              var cheats = [];
              var cards = guanXing.cards[0].concat();
              var judges;
              var next = player.getNext();
              var friend = player;
              if (event.triggername == 'phaseJieshuBegin') {
                friend = next;
                judges = friend.node.judges.childNodes;
                if (get.attitude(player, friend) < 0) friend = null;
              } else {
                judges = player.node.judges.childNodes;
              }
              if (judges.length) {
                cheats = decadeUI.get.cheatJudgeCards(cards, judges, friend != null);
              }
              if (cards.length && cheats.length == judges.length) {
                for (var i = 0; i >= 0 && i < cards.length; i++) {
                  if (friend) {
                    if (get.value(cards[i], friend) >= 5) {
                      cheats.push(cards[i]);
                      cards.splice(i, 1)
                    }
                  } else {
                    if (get.value(cards[i], next) < 4) {
                      cheats.push(cards[i]);
                      cards.splice(i, 1)
                    }
                  }
                }
              }
              var time = 500;
              for (var i = 0; i < cheats.length; i++) {
                setTimeout(function(card, index, finished){
                  guanXing.move(card, index, 0);
                  if (finished) guanXing.finishTime(1000);
                }, time, cheats[i], i, (i >= cheats.length - 1) && cards.length == 0);
                time += 500;
              }
              for (var i = 0; i < cards.length; i++) {
                setTimeout(function(card, index, finished){
                  guanXing.move(card, index, 1);
                  if (finished) guanXing.finishTime(1000);
                }, time, cards[i], i, (i >= cards.length - 1));
                time += 500;
              }
            };
            if (event.isOnline()) {
              // 判断其他玩家是否有十周年UI，否则直接给他结束，不知道有没有效果
              event.player.send(function(){
                if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
              }, event.player);
              // 等待其他玩家操作
              event.player.wait();
              // 暂停主机端游戏
              decadeUI.game.wait();
            } else if (!event.isMine()) {
              event.switchToAuto();
              /*
              注释说明
              var guanXing = decadeUI.content.chooseGuanXing(
                  控制观星的玩家,                      // 必选
                  [顶部初始化的牌],                // 必选，可为null，但底部不能为null
                  顶部允许控制的牌数范围,            // 可选，不填根据初始化的牌数量
                  [底部初始化的牌],                // 必选，可为null，但顶部不能为null
                  底部允许控制的牌数范围,            // 可选，不填根据初始化的牌数量
                  第一个参数的玩家是否可见);          // 可选，不设置则根据控制观星的玩家来显示
              // undefined 均为可设置，其他为只读或调用
              var properties = {
                  caption: undefined,            // 设置标题
                  header1: undefined,            // 牌堆顶的文字
                  header2: undefined,            // 牌堆底的文字
                  cards: [[],[]],                // 获取当前观星的牌，不要瞎改
                  callback: undefined,        // 回调函数，返回 true 表示可以点击【确认】按钮，例：guanXing.callback = function(){ return guanXing.cards[1].length == 1; }
                                              // 注意：此值一旦设置，观星finish后不会自己置顶牌堆顶和牌堆底，需要自行实现
                  infohide: undefined,        // 设置上面第1个参数的玩家是否可见观星的牌
                  confirmed: undefined,        // 是否按下确认按钮
                  doubleSwitch: undefined,    // 双击切换牌
                  finishTime:function(time),    // 指定的毫秒数后完成观星
                  finish:function(),            // 观星完成，在下一个step 中，可以通过 event.cards1 与 event.cards2 访问观星后的牌
                  swap:function(s, t),        // 交换观星中的两个牌
                  switch:function(card),       // 将观星中的牌切换到另一方
                  move:function(card, index, moveDown)    // 移动观星的牌到指定的一方位置
              }
              */
            }
            'step 1'
            if(event.triggername == 'phaseZhunbeiBegin' && event.num1 == 0) player.addTempSkill('reguanxing_on');
            player.popup(get.cnNumber(event.num1) + '上' + get.cnNumber(event.num2) + '下');
            game.log(player, '将' + get.cnNumber(event.num1) + '张牌置于牌堆顶，' + get.cnNumber(event.num2) +'张牌置于牌堆底');
            game.updateRoundNumber()
          },
          subSkill:{
            jiefeng:{
              audio:"ext:神怒降世:1",
              trigger:{
                player:"phaseDiscardAfter",
              },
              filter:function(event,player){
                return player.storage.hj_sn_qixing&&player.storage.hj_sn_qixing.length>0&&player.storage.hj_sn_qixing.length>player.countCards('h');
              },
              frequent:true,
              content:function(){
                var num=player.storage.hj_sn_qixing.length;
                if(player.storage.hj_sn_qixing.length>5) num=5;
                player.draw(num-player.countCards('h'));
              },
              sub:true,
            },
          },
        },
        "hj_sn_kanpo":{ //原识破(jszglwx未定义)
          audio:"ext:神怒降世:1",
          group:"hj_sn_kanpo_wuxie",
          enable:"chooseToUse",
          filterCard:function(card){
            return get.color(card)=='black';
          },
          viewAsFilter:function(player){
            return player.countCards('h',{color:'black'})>0;
          },
          viewAs:{
            name:"wuxie",
          },
          prompt:"将一张黑色手牌当无懈可击使用",
          check:function(card){
            var tri=_status.event.getTrigger();
            if(tri&&tri.card&&tri.card.name=='chiling') return -1;
            return 8-get.value(card)
          },
          threaten:1.2,
          ai:{
            basic:{
              useful:[6,4],
              value:[6,4],
            },
            result:{
              player:1,
            },
            expose:0.2,
          },
          subSkill:{
            wuxie:{
              audio:"ext:神怒降世:1",
              trigger:{
                player:["useCard","respond","loseAfter"],
              },
              frequent:true,
              filter:function(event,player){
                if(player==_status.currentPhase) return false;
                if(event.name!='lose') return get.color(event.card)=='black';
                if(event.type!='discard') return false;
                if(event.cards2){
                  for(var i=0;i<event.cards2.length;i++){
                    if(get.color(event.cards2[i],player)=='black') return true;
                  }
                }
                return false;
              },
              content:function(){
                "step 0"
                event.count=1;
                if(trigger.name=='lose'){
                  event.count=0;
                  for(var i=0;i<trigger.cards2.length;i++){
                    if(get.color(trigger.cards2[i],player)=='black') event.count++;
                  }
                }
                "step 1"
                player.draw();
                event.count--;
                "step 2"
                if(event.count){
                  player.chooseBool(get.prompt2('jszglwx')).set('frequentSkill','jszglwx');
                }
                else event.finish();
                "step 3"
                if(result.bool){
                  player.logSkill('jszglwx');
                  event.goto(1);
                }
              },
              ai:{
                threaten:0.7,
              },
              sub:true,
            },
          },
        },
        "hj_sn_huoji":{ //原卧龙
          mod:{
            maxHandcard:function(player,num){
              return num+3;
            },
          },
          audio:"ext:神怒降世:1",
          enable:"phaseUse",
          usable:1,
          filterCard:function(card){
            return get.color(card)=='red';
          },
          viewAs:{
            name:"huogong",
            nature:"fire",
          },
          viewAsFilter:function(player){
            if(!player.countCards('h',{color:'red'})) return false;
          },
          prompt:"将一张红色牌当火攻使用",
          check:function(card){
            var player=_status.currentPhase;
            if(player.countCards('h')>player.hp){
              return 6-get.value(card);
            }
            return 3-get.value(card);
          },
          ai:{
            basic:{
              order:4,
              value:[3,1],
              useful:1,
            },
            wuxie:function(target,card,player,current,state){
              if(get.attitude(current,player)>=0&&state>0) return false;
            },
            result:{
              player:function(player){
                var nh=player.countCards('h');
                if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
                  if(typeof _status.event.filterCard=='function'&&_status.event.filterCard({name:'huogong'},player,_status.event)){
                    return -10;
                  }
                  if(_status.event.skill){
                    var viewAs=get.info(_status.event.skill).viewAs;
                    if(viewAs=='huogong') return -10;
                    if(viewAs&&viewAs.name=='huogong') return -10;
                  }
                }
                return 0;
              },
              target:function(player,target){
                if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
                if(player.countCards('h')<=1) return 0;
                if(target==player){
                  if(typeof _status.event.filterCard=='function'&&_status.event.filterCard({name:'huogong'},player,_status.event)){
                    return -1.5;
                  }
                  if(_status.event.skill){
                    var viewAs=get.info(_status.event.skill).viewAs;
                    if(viewAs=='huogong') return -1.5;
                    if(viewAs&&viewAs.name=='huogong') return -1.5;
                  }
                  return 0;
                }
                return -1.5;
              },
            },
            tag:{
              damage:1,
              fireDamage:1,
              natureDamage:1,
              norepeat:1,
            },
          },
        },

        "hj_sn_guixin":{
          audio:"ext:神怒降世:2",
          trigger:{
            player:"damageEnd",
          },
          check:function (event,player){
            if(player.isTurnedOver()||event.num>1) return true;
            var num=game.countPlayer(function(current){
              if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                return true;
              }
              if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                return true;
              }
            });
            return num>=2;
          },
          content:function (){
            "step 0"
            var targets=game.filterPlayer();
            targets.remove(player);
            targets.sort(lib.sort.seat);
            event.targets=targets;
            event.count=trigger.num;
            "step 1"
            event.num=0;
            player.line(targets,'green');
            player.chooseControl('手牌区','装备区','判定区').set('ai',function(){
              if(game.hasPlayer(function(current){
                return current.countCards('j')&&current!=player&&get.attitude(player,current)>0;
              })) return 2;
                return Math.floor(Math.random()*3);

              }).set('prompt','请选择优先获得的区域');
            "step 2"
            event.range={
              手牌区:['h','e','j'],
              装备区:['e','h','j'],
              判定区:['j','h','e'],
            }[result.control||'手牌区'];
            "step 3"
            if(num<event.targets.length){
              var target=event.targets[num];
              var range=event.range;
              for(var i=0;i<range.length;i++){
                var cards=target.getCards(range[i]);
                if(cards.length){
                  var card=cards.randomGet();
                  player.gain(card,target,'giveAuto','bySelf');
                  break;
                }
              }
              event.num++;
            }
            "step 4"
            if(num<event.targets.length) event.goto(3);
            "step 5"
            player.turnOver();
            "step 6"
            event.count--;
            if(event.count){
              player.chooseBool(get.prompt2('hj_sn_guixin')).ai=function(){
                return lib.skill.new_guixin.check({num:event.count},player);
              };
            }
            else{
              event.finish();
            }
            "step 7"
            if(event.count&&result.bool){
              player.logSkill('hj_sn_guixin');
              event.goto(1);
            }
          },
          ai:{
            maixie:true,
            "maixie_hp":true,
            threaten:function (player,target){
              if(target.hp==1) return 2.5;
              return 1;
            },
            effect:{
              target:function (card,player,target){
                if(get.tag(card,'damage')){
                  if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                  if(target.hp==1) return 0.8;
                  if(target.isTurnedOver()) return [0,3];
                  var num=game.countPlayer(function(current){
                    if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                      return true;
                    }
                    if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                      return true;
                    }
                  });
                  if(num>2) return [0,1];
                  if(num==2) return [0.5,1];
                }
              },
            },
          },
        },
        "hj_sn_zhuangzhi":{ //原雄心
          trigger:{
            player:"turnOverEnd",
          },
          filter:function(event,player){
            return player.isDamaged()&&player.isMinHp()&&!player.isTurnedOver();
          },
          audio:"ext:神怒降世:1",
          forced:true,
          content:function(){
            "step 0"
            player.judge();
            "step 1"
            event.color=result.color;
            if(event.color=='red'){
              player.recover();
            }
          },
        },
        "hj_sn_feiying":{
          mod:{
            globalTo:function(from,to,distance){
              return distance+1;
            },
          },
        },
        "hj_sn_xiaoxiong":{ //原称雄
          audio:"ext:神怒降世:1",
          unique:true,
          skillAnimation:true,
          animationColor:"metal",
          juexingji:true,
          forced:true,
          derivation:"hj_sn_jianxiong",
          trigger:{
            player:"phaseZhunbeiBegin",
          },
          filter:function(event,player){
            return game.countPlayer()<=4&&!player.storage.hj_sn_xiaoxiong;
          },
          content:function() {
            player.awakenSkill('hj_sn_xiaoxiong');
            player.gainMaxHp();
            player.recover();
            player.addSkill('hj_sn_jianxiong');
            game.log(player,'获得了技能','#g【奸雄】');
          },
        },
        "hj_sn_jianxiong":{
          audio:"ext:神怒降世:1",
          trigger:{
            player:"damageEnd",
          },
          content:function (){
            "step 0"
            if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0],true)=='o'){
              player.gain(trigger.cards,"gain2");
            }
            player.draw('nodelay');
          },
          ai:{
            maixie:true,
            "maixie_hp":true,
            effect:{
              target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')&&player!=target) return [1,0.6];
              },
            },
          },
        },

        "hj_sn_wushuang":{
          shaRelated:true,
          audio:"ext:神怒降世:1",
          group:["hj_sn_wushuang_yuyin","hj_sn_wushuang_yongjuedou","hj_sn_wushuang_beijuedou"],
          trigger:{
            player:"useCardToPlayered",
          },
          direct:true,
          forced:true,
          filter:function(event,player){
            return event.card.name=='sha'&&!event.getParent().directHit.contains(event.target);
          },
          logTarget:"target",
          content:function(){
            var id=trigger.target.playerid;
            var map=trigger.getParent().customArgs;
            if(!map[id]) map[id]={};
            if(typeof map[id].shanRequired=='number'){
              map[id].shanRequired++;
            }
            else{
              map[id].shanRequired=2;
            }
          },
          subSkill:{
            yuyin:{
              audio:"hj_sn_wushuang",
              trigger:{
                player:"useCard1",
              },
              filter:function(event,player){
                return event.card.name=='sha'||event.card.name=='juedou';
              },
              forced:true,
              content:function(){},
              sub:true,
            },
            yongjuedou:{
              trigger:{
                player:"useCardToPlayered",
              },
              forced:true,
              direct:true,
              filter:function(event,player){
                return event.card.name=='juedou';
              },
              logTarget:"target",
              content:function(){
                trigger.getParent().directHit.push(trigger.target);
              },
              sub:true,
            },
            beijuedou:{
              audio:"ext:神怒降世:1",
              trigger:{
                target:"useCardToTargeted",
              },
              filter:function(event,player){
                return event.card.name=='juedou'&&event.player!=player;
              },
              logTarget:"player",
              forced:true,
              content:function(){
                trigger.getParent().excluded.add(player);
                trigger.player.damage(player);
              },
              sub:true,
            },
          },
          mod:{
            selectTarget:function(card,player,range){
              if(range[1]==-1) return;
              if(card.name=='sha'||card.name=="juedou") range[1]+=2;
            },
          },
        },
        "hj_sn_feijiang":{ //原无谋
          mod:{
            cardname:function(card,player,name){
              if(player.storage.hj_sn_feijiang1.contains(card)) return 'juedou';
              if(player.storage.hj_sn_feijiang2.contains(card)) return 'sha';
            },
          },
          audio:"ext:神怒降世:1",
          trigger:{
            player:"phaseJieshuBegin",
          },
          forced:true,
          filter:function(event,player){
            return player.getStat('damage')>=3;
          },
          content:function(){
            player.draw(2);
          },
          group:["hj_sn_feijiang_gamebegin","hj_sn_feijiang_huode","hj_sn_feijiang_losecard"],
          init:function(player){
            if(!player.storage.hj_sn_feijiang1) player.storage.hj_sn_feijiang1=[];
            if(!player.storage.hj_sn_feijiang2) player.storage.hj_sn_feijiang2=[];
          },
          subSkill:{
            gamebegin:{
              trigger:{
                player:"enterGame",
                global:"gameDrawAfter",
              },
              direct:true,
              forced:true,
              content:function(){
                var shoupai=player.getCards('h');
                for (var i=0;i<shoupai.length;i++) {
                  var card=shoupai[i];
                  if(get.type(card)=='trick'){
                    if (get.tag(card,'damage')){
                      player.storage.hj_sn_feijiang1.push(card);
                    }
                    else player.storage.hj_sn_feijiang2.push(card);
                  }
                }
              },
              sub:true,
            },
            huode:{
              trigger:{
                player:["drawAfter","gainAfter"],
              },
              direct:true,
              forced:true,
              content:function(){
                var shoupai=player.getCards('h');
                for (var i=0;i<shoupai.length;i++) {
                  var card=shoupai[i];
                  if(get.type(card)=='trick'){
                    if (get.tag(card,'damage')){
                      player.storage.hj_sn_feijiang1.push(card);
                    }
                    else player.storage.hj_sn_feijiang2.push(card);
                  }
                }
              },
              sub:true,
            },
            losecard:{
              trigger:{
                player:"loseAfter",
              },
              filter:function(event,player){
                for (var i=0;i<event.cards2.length;i++){
                  if (player.storage.hj_sn_feijiang1.contains(event.cards2[i])||player.storage.hj_sn_feijiang2.contains(event.cards2[i])) return true;
                }
                return false;
              },
              forced:true,
              direct:true,
              content:function(){
                for (var i=0;i<trigger.cards2.length;i++){
                  if (player.storage.hj_sn_feijiang1.contains(trigger.cards2[i])) player.storage.hj_sn_feijiang1.remove(trigger.cards2[i]);
                  if (player.storage.hj_sn_feijiang2.contains(trigger.cards2[i])) player.storage.hj_sn_feijiang2.remove(trigger.cards2[i]);
                }
              },
              sub:true,
            },
          },
        },
        "hj_sn_wuqian":{
          audio:"ext:神怒降世:1",
          group:["hj_sn_wuqian_mashu","hj_sn_wuqian_damage"],
          derivation:"mashu",
          trigger:{
            player:"useCard2",
          },
          forced:true,
          filter:function(event,player){
            return event.card.name=='sha';
          },
          content:function(){},
          ai:{
            unequip:true,
          },
          subSkill:{
            mashu:{
              audio:"ext:神怒降世:1",
              enable:"phaseUse",
              usable:1,
              filterCard:true,
              check:function(card){
                return 8-get.value(card);
              },
              position:"he",
              content:function(){
                "step 0"
                player.loseHp();
                "step 1"
                game.log(player,'获得了技能','#g【马术】')
                player.addTempSkill('mashu');
              },
              ai:{
                order:function(){
                  return get.order({name:'sha'})+1;
                },
                result:{
                  player:function(player){
                    if(game.countPlayer(function(current){
                      if(get.attitude(current,player)<0&&player.countCards('h',{name:'sha'})>0){
                        if(player.countCards('he')-1>0){
                          return current!=player&&!(player.inRange(current));
                        }
                      }
                    })){
                      if(game.countPlayer(function(current){
                        if(player.inRange(current)) return get.attitude(current,player)<0;
                      })) {
                        return -1;
                      }
                      if(game.countPlayer(function(current){
                        if(get.attitude(current,player)<0) return player.getAttackRange()-get.distance(player,current)<-1;
                      })==game.countPlayer(function(current){
                        return get.attitude(current,player)<0;
                      })) {
                        return -1;
                      }
                      if(player.hp>3&&game.countPlayer(function(current){
                        if(player.inRange(current)) return get.attitude(current,player)<0;
                      })<2) {
                        return 1;
                      }
                      if(player.hp==2) return player.countCards('h',{name:'tao'})>0;
                      if(player.hp==1) return player.countCards('h',{name:'tao'})>0||player.countCards('h',{name:'jiu'})>0;
                      return 1;
                    }
                    return -1;
                  },
                },
              },
              sub:true,
            },
            damage:{
              trigger:{
                source:"damageBegin",
              },
              direct:true,
              forced:true,
              filter:function(event,player){
                return game.countPlayer(function(current){return player.inRange(current)&&player!=current;})<2;
              },
              content:function(){
                trigger.num++;
              },
              sub:true,
            },
          },
        },
        "hj_sn_shenfen":{
          audio:"ext:神怒降世:1",
          group:["hj_sn_shenfen_shenfen","hj_sn_shenfen_kuangbao"],
          marktext:"暴",
          intro:{
            name:"暴怒",
            content:"mark",
          },
          trigger:{
          },
          forced:true,
          content:function(){},
          subSkill:{
            shenfen:{
              audio:"hj_sn_shenfen",
              enable:"phaseUse",
              filter:function(event,player){
                return player.countMark('hj_sn_shenfen')>=6;
              },
              usable:1,
              skillAnimation:true,
              animationColor:"metal",
              content:function(){
                "step 0"
                event.delay=false;
                player.removeMark('hj_sn_shenfen',6);
                event.targets=game.filterPlayer();
                event.targets.remove(player);
                event.targets.sort(lib.sort.seat);
                player.line(event.targets,'green');
                event.targets2=event.targets.slice(0);
                event.targets3=event.targets.slice(0);
                "step 1"
                if(event.targets2.length){
                  event.targets2.shift().damage('nocard');
                  event.redo();
                }
                "step 2"
                if(event.targets.length){
                  event.current=event.targets.shift()
                  if(event.current.countCards('e')) event.delay=true;
                  event.current.discard(event.current.getCards('e')).delay=false;
                }
                "step 3"
                if(event.delay) game.delay(0.5);
                event.delay=false;
                if(event.targets.length) event.goto(2);
                "step 4"
                if(event.targets3.length){
                  var target=event.targets3.shift();
                  target.chooseToDiscard(target.countCards('h'),'h',true).delay=false;
                }
                "step 5"
                if(event.delay) game.delay(0.5);
                event.delay=false;
                if(event.targets3.length) event.goto(4);
                "step 6"
                player.turnOver();
              },
              ai:{
                combo:"hj_sn_shenfen_kuangbao",
                order:10,
                result:{
                  player:function(player){
                    return game.countPlayer(function(current){
                      if(current!=player){
                        return get.sgn(get.damageEffect(current,player,player));
                      }
                    });
                  },
                },
              },
              sub:true,
            },
            kuangbao:{
              audio:"ext:神怒降世:2",
              trigger:{
                source:"damageSource",
                player:"damageEnd",
              },
              forced:true,
              content:function(){
                player.addMark('hj_sn_shenfen',trigger.num);
              },
              ai:{
                combo:"hj_sn_shenfen",
                maixie:true,
                "maixie_hp":true,
              },
              sub:true,
            },
          },
        },
        
        "hj_sn_renjie":{
          audio:"ext:神怒降世:1",
          trigger:{
            player:"damageEnd",
          },
          forced:true,
          unique:true,
          group:"hj_sn_renjie_discard",
          filter:function(event){
            return event.num>0;
          },
          onremove:function(player){
            if(player.countMark('hj_sn_renjie')>0) player.removeMark('hj_sn_renjie',player.countMark('hj_sn_renjie'));
          },
          content:function(){
            player.addMark('hj_sn_renjie',trigger.num);
          },
          intro:{
            name:"忍戒",
            content:"mark",
          },
          ai:{
            maixie:true,
            "maixie_hp":true,
            combo:"hj_sn_baiyin",
          },
          subSkill:{
            discard:{
              audio:"ext:神怒降世:1",
              trigger:{
                player:"loseAfter",
              },
              forced:true,
              filter:function(event,player){
                if (event.type=='discard') return true;
                return _status.currentPhase!=player;
              },
              content:function(){
                player.addMark('hj_sn_renjie',trigger.num);
              },
              sub:true,
            },
          },
        },
        "hj_sn_baiyin":{
          skillAnimation:"epic",
          animationColor:"thunder",
          juexingji:true,
          trigger:{
            player:"phaseZhunbeiBegin",
          },
          init:function(player){
            if(!player.storage.hj_sn_jilue) player.storage.hj_sn_jilue=['hj_sn_zhiheng','hj_sn_jizhi','hj_sn_fangzhu','hj_sn_guicai','hj_sn_wansha'];
          },
          forced:true,
          unique:true,
          audio:"ext:神怒降世:1",
          derivation:["hj_sn_jilue","hj_sn_zhiheng","hj_sn_jizhi","hj_sn_fangzhu","hj_sn_guicai","hj_sn_wansha"],
          filter:function(event,player){
            return player.countMark('hj_sn_renjie')>=6;
          },
          content:function(){
            "step 0"
            player.loseMaxHp();
            event.cishu=player.countMark('hj_sn_renjie')-5;
            "step 1"
            if(event.cishu<1) event.goto(6);
            "step 2"
            player.chooseControl(player.storage.hj_sn_jilue).set('prompt','请选择要获得的技能').set('ai',function(){return player.storage.hj_sn_jilue.randomGet()});
            "step 3"
            event.jineng=result.control;
            player.addSkill(event.jineng);
            player.storage.hj_sn_jilue.remove(event.jineng);
            game.log(player,'获得了技能','#g〖'+get.translation(event.jineng)+'〗')
            "step 4"
            event.cishu=event.cishu-1;
            "step 5"
            event.goto(1);
            "step 6"
            player.awakenSkill('hj_sn_baiyin');
            player.removeSkill('hj_sn_renjie');
            game.log(player,'获得了技能','#g〖忍戒〗')
            if(player.storage.hj_sn_jilue.length<1) game.log(player,'已经独掌大权了！')
              if(player.storage.hj_sn_jilue.length>0) player.addSkill('hj_sn_jilue');
          },
        },
        "hj_sn_lianpo":{
          audio:"ext:神怒降世:1",
          skillAnimation:"epic",
          animationColor:"thunder",
          trigger:{
            global:"phaseAfter",
          },
          frequent:true,
          filter:function(event,player){
            return player.getStat('kill')>0;
          },
          content:function(){
            player.insertPhase();
          },
        },
        "hj_sn_jilue":{
          audio:"ext:神怒降世:1",
          derivation:["hj_sn_zhiheng","hj_sn_jizhi","hj_sn_fangzhu","hj_sn_guicai","hj_sn_wansha"],
          trigger:{
            player:"damageAfter",
            source:"damageSource",
          },
          forced:true,
          init:function(player){
            if(!player.storage.hj_sn_jilue&&player.storage.hj_sn_jilue!=[]&&!(player.hasSkill('hj_sn_zhiheng')||player.hasSkill('hj_sn_jizhi')||player.hasSkill('hj_sn_fangzhu')||player.hasSkill('hj_sn_guicai')||player.hasSkill('hj_sn_wansha'))) player.storage.hj_sn_jilue=['hj_sn_zhiheng','hj_sn_jizhi','hj_sn_fangzhu','hj_sn_guicai','hj_sn_wansha'];
          },
          content:function(){
            "step 0"
            player.chooseControl(player.storage.hj_sn_jilue).set('prompt','请选择要获得的技能').set('ai',function(){return player.storage.hj_sn_jilue.randomGet()});
            "step 1"
            event.jineng=result.control;
            player.addSkill(event.jineng);
            player.storage.hj_sn_jilue.remove(event.jineng);
            game.log(player,'获得了技能','#g〖'+get.translation(event.jineng)+'〗')
            "step 2"
            if(player.storage.hj_sn_jilue.length<1){
              player.removeSkill('hj_sn_jilue');
              game.log(player,'现已独掌大权，失去了技能','#g〖极略〗')
            }
          },
        },
        "hj_sn_zhiheng":{
          audio:"ext:神怒降世:1",
          enable:"phaseUse",
          usable:3,
          filter:function(event,player){
            return player.countCards('he')>0;
          },
          position:"he",
          filterCard:function(card,player,event){
            event=event||_status.event;
            if(typeof event!='string') event=event.getParent().name;
            var mod=game.checkMod(card,player,event,'unchanged','cardDiscardable',player);
            if(mod!='unchanged') return mod;
            return true;
          },
          discard:false,
          lose:false,
          delay:false,
          selectCard:[1,Infinity],
          prompt:"弃置任意张牌并摸等量的牌。若弃置了所有的手牌，则可以多摸一张牌。",
          check:function(card){
            var player=_status.event.player;
            if(get.position(card)=='h'&&!player.countCards('h',function(card){
              return get.value(card)>=8;
            })){
              return 8-get.value(card);
            }
            return 6-get.value(card)
          },
          content:function(){
            'step 0'
            player.discard(cards);
            event.num=1;
            var hs=player.getCards('h');
            if(!hs.length) event.num=0;
            for(var i=0;i<hs.length;i++){
              if(!cards.contains(hs[i])){
                event.num=0;break;
              }
            }
            'step 1'
            player.draw(event.num+cards.length);
          },
          ai:{
            order:1,
            result:{
              player:1,
            },
            threaten:1.5,
          },
        },
        "hj_sn_guicai":{
          audio:"ext:神怒降世:1",
          trigger:{
            global:"judge",
          },
          direct:true,
          filter:function(event,player){
            return player.countCards('he')>0;
          },
          content:function(){
            "step 0"
            player.chooseCard('是否发动〖鬼才〗？','he',function(card){
              var player=_status.event.player;
              var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
              if(mod2!='unchanged') return mod2;
              var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
              if(mod!='unchanged') return mod;
              return true;
            }).ai=function(card){
              var trigger=_status.event.parent._trigger;
              var player=_status.event.player;
              var result=trigger.judge(card)-trigger.judge(trigger.player.judging[0]);
              var attitude=get.attitude(player,trigger.player);
              if(attitude==0||result==0) return 0;
              if(attitude>0){
                return result-get.value(card)/2;
              }
              else{
                return -result-get.value(card)/2;
              }
            };
            "step 1"
            if(result.bool){
              player.respond(result.cards,'highlight','hj_sn_guicai','noOrdering');
            }
            else{
              event.finish();
            }
            "step 2"
            if(result.bool){
              if(trigger.player.judging[0].clone){
                trigger.player.judging[0].clone.delete();
                game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
              }
              game.cardsDiscard(trigger.player.judging[0]);
              trigger.player.judging[0]=result.cards[0];
              trigger.orderingCards.addArray(result.cards);
              game.log(trigger.player,'的判定牌改为',result.cards[0]);
              game.delay(2);
            }
          },
          ai:{
            rejudge:true,
            tag:{
              rejudge:1,
            },
          },
        },
        "hj_sn_jizhi":{
          audio:"ext:神怒降世:1",
          group:"hj_sn_jizhi_clear",
          trigger:{
            player:"useCard",
          },
          filter:function(event,player){
            return (get.type(event.card,'trick')=='trick'&&event.card.isCard);
          },
          frequent:true,
          init:function(player){
            player.storage.hj_sn_jizhi=0;
          },
          content:function(){
            'step 0'
            player.draw();
            'step 1'
            event.card=result[0];
            if(get.type(event.card)=='basic'){
              player.chooseBool('是否弃置'+get.translation(event.card)+'并令本回合手牌上限+1？').set('ai',function(evt,player){
                return _status.currentPhase==player&&player.needsToDiscard(-3)&&_status.event.value<6;
              }).set('value',get.value(event.card,player));
            }
            'step 2'
            if(result.bool){
              player.discard(event.card);
              player.storage.hj_sn_jizhi++;
              if(_status.currentPhase==player){
                player.markSkill('hj_sn_jizhi');
              }
            }
          },
          ai:{
            threaten:1.4,
          },
          mod:{
            maxHandcard:function(player,num){
              return num+player.storage.hj_sn_jizhi;
            },
          },
          intro:{
            content:"本回合手牌上限+#",
          },
          subSkill:{
            clear:{
              trigger:{
                global:"phaseAfter",
              },
              silent:true,
              content:function(){
                player.storage.hj_sn_jizhi=0;
                player.unmarkSkill('hj_sn_jizhi');
              },
              sub:true,
              forced:true,
              popup:false,
            },
          },
        },
        "hj_sn_wansha":{
          locked:true,
          audio:"ext:神怒降世:1",
          global:"hj_sn_wansha2",
          trigger:{
            global:"dying",
          },
          priority:15,
          forced:true,
          filter:function(event,player,name){
            return _status.currentPhase==player&&event.player!=player;
          },
          content:function(){},
        },
        "hj_sn_wansha2":{
          mod:{
            cardSavable:function(card,player){
              if(!_status.currentPhase) return;
              if(_status.currentPhase.isAlive()&&_status.currentPhase.hasSkill('hj_sn_wansha')&&_status.currentPhase!=player){
                if(card.name=='tao'&&!player.isDying()) return false;
              }
            },
            cardEnabled:function(card,player){
              if(!_status.currentPhase) return;
              if(_status.currentPhase.isAlive()&&_status.currentPhase.hasSkill('hj_sn_wansha')&&_status.currentPhase!=player){
                if(card.name=='tao'&&!player.isDying()) return false;
              }
            },
          },
        },
        "hj_sn_fangzhu":{
          audio:"ext:神怒降世:1",
          trigger:{
            player:"damageEnd",
          },
          direct:true,
          content:function(){
            "step 0"
            player.chooseTarget('是否发动〖放逐〗？',function(card,player,target){
              return player!=target
            }).ai=function(target){
              if(target.hasSkillTag('noturn')) return 0;
              if(target.isTurnedOver()){
                return get.attitude(player,target)-1;
              }
              else{
                if(player.maxHp-player.hp==1){
                  return -get.attitude(player,target)-1;
                }
              }
              return 0;
            }
            "step 1"
            if(result.bool){
              player.logSkill('hj_sn_fangzhu',result.targets);
              result.targets[0].draw(player.maxHp-player.hp);
              result.targets[0].turnOver();
            }
          },
        },

        "hj_sn_shenlong":{
          group:["hj_sn_shenlong_huihekaishi","hj_sn_shenlong_huihejieshu"],
          mark:true,
          locked:true,
          zhuanhuanji:true,
          marktext:"神",
          intro:{
            content:function(storage,player,skill){
              if(player.storage.hj_sn_shenlong==true) return '锁定技，回合内，拥有技能〖龙魂〗和〖神威〗';
              return '锁定技，回合外，拥有技能〖龙佑〗和〖神躯〗';
            },
          },
          derivation:["hj_sn_longyou","hj_sn_shenwei","hj_sn_longdan","hj_sn_shenqu"],
          audio:"ext:神怒降世:1",
          forced:true,
          content:function(){},
          init:function(player){
            if(_status.currentPhase!=player){
              player.storage.hj_sn_shenlong=false;
              player.addTempSkill('hj_sn_longdan',{player:'phaseZhunbeiBegin'});
              player.addTempSkill('hj_sn_shenqu',{player:'phaseZhunbeiBegin'});
            }
            if(_status.currentPhase==player){
              player.storage.hj_sn_shenlong=true;
              player.addTempSkill('hj_sn_longyou',{player:'phaseJieshuBegin'});
              player.addTempSkill('hj_sn_shenwei',{player:'phaseJieshuBegin'});
            }
          },
          subSkill:{
            huihekaishi:{
              audio:"hj_sn_shenlong",
              trigger:{
                player:"phaseZhunbeiBegin",
              },
              forced:true,
              filter:function(event,player){
                return true;
              },
              content:function(){
                if(player.storage.hj_sn_shenlong==false) player.storage.hj_sn_shenlong=true;
                player.addTempSkill('hj_sn_longyou',{player:'phaseJieshuBegin'});
                player.addTempSkill('hj_sn_shenwei',{player:'phaseJieshuBegin'});
              },
              sub:true,
            },
            huihejieshu:{
              audio:"hj_sn_shenlong",
              trigger:{
                player:"phaseJieshuBegin",
              },
              forced:true,
              filter:function(event,player){
                return true;
              },
              content:function(){
                if(player.storage.hj_sn_shenlong==true) player.storage.hj_sn_shenlong=false;
                player.addTempSkill('hj_sn_longdan',{player:'phaseZhunbeiBegin'});
                player.addTempSkill('hj_sn_shenqu',{player:'phaseZhunbeiBegin'});
              },
              sub:true,
            },
          },
        },
        "hj_sn_longdan":{ //原龙佑
          audio:"ext:神怒降世:1",
          enable:["chooseToUse","chooseToRespond"],
          prompt:"♠牌当做【杀】，♥牌当做【桃】，♣牌当做【无懈可击】，将♦牌当做【闪】使用或打出",
          viewAs:function(cards,player){
            var name=false;
            var nature=null;
            //根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
            switch(get.suit(cards[0],player)){
              case 'spade':name='sha';break;
              case 'heart':name='tao';break;
              case 'club':name='wuxie';break;
              case 'diamond':name='shan';break;
            }
            //返回判断结果
            if(name) return {name:name,nature:nature};
            return null;
          },
          check:function(card){
            if(ui.selected.cards.length) return 0;
            var player=_status.event.player;
            if(_status.event.type=='phase'){
              var max=0;
              var name2;
              var list=['sha','tao'];
              var map={sha:'spade',tao:'heart'}
              for(var i=0;i<list.length;i++){
                var name=list[i];
                if(player.countCards('he',function(card){
                 return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
               })>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
                 var temp=get.order({name:name,nature:name=='sha'?'fire':null});
                 if(temp>max){
                   max=temp;
                   name2=map[name];
                 }
               }
             }
             if(name2==get.suit(card,player)) return (name2=='diamond'?(5-get.value(card)):20-get.value(card));
             return 0;
           }
           return 1;
         },
         selectCard:1,
         complexCard:true,
         position:"he",
         filterCard:function(card,player,event){
          event=event||_status.event;
            //获取当前时机的卡牌选择限制
            var filter=event._backup.filterCard;
            //获取卡牌花色
            var name=get.suit(card,player);
            //如果这张牌是梅花并且当前时机能够使用/打出无懈可击 那么这张牌可以选择
            if(name=='club'&&filter({name:'wuxie',cards:[card]},player,event)) return true;
            //如果这张牌是方片并且当前时机能够使用/打出闪 那么这张牌可以选择
            if(name=='diamond'&&filter({name:'shan',cards:[card]},player,event)) return true;
            //如果这张牌是黑桃并且当前时机能够使用/打出杀 那么这张牌可以选择
            if(name=='spade'&&filter({name:'sha',cards:[card]},player,event)) return true;
            //如果这张牌是红桃并且当前时机能够使用/打出桃 那么这张牌可以选择
            if(name=='heart'&&filter({name:'tao',cards:[card]},player,event)) return true;
            //上述条件都不满足 那么就不能选择这张牌
            return false;
          },
          filter:function(event,player){
            //获取当前时机的卡牌选择限制
            var filter=event.filterCard;
            //如果当前时机能够使用/打出闪并且角色有方片 那么可以发动技能
            if(filter({name:'sha',nature:'fire'},player,event)&&player.countCards('he',{suit:'spade'})) return true;
            //如果当前时机能够使用/打出无懈并且角色有梅花 那么可以发动技能
            if(filter({name:'shan'},player,event)&&player.countCards('he',{suit:'diamond'})) return true;
            //如果当前时机能够使用/打出桃并且角色有红桃 那么可以发动技能
            if(filter({name:'tao'},player,event)&&player.countCards('he',{suit:'heart'})) return true;
            //如果当前时机能够使用/打出杀并且角色有黑桃 那么可以发动技能
            if(filter({name:'wuxie'},player,event)&&player.countCards('he',{suit:'club'})) return true;
            return false;
          },
          ai:{
            respondSha:true,
            respondShan:true,
            save:true,
            skillTagFilter:function(player,tag){
              var name;
              switch(tag){
                case 'respondSha':name='spade';break;
                case 'respondShan':name='diamond';break;
                case 'save':name='heart';break;
              }
              if(!player.countCards('he',{suit:name})) return false;
            },
            order:function(item,player){
              if(player&&_status.event.type=='phase'){
                var max=0;
                var list=['sha','tao'];
                var map={sha:'spade',tao:'heart'}
                for(var i=0;i<list.length;i++){
                  var name=list[i];
                  if(player.countCards('he',function(card){
                    return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
                  })>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
                    var temp=get.order({name:name,nature:name=='sha'?'fire':null});
                    if(temp>max) max=temp;
                  }
                }
                max/=1.1;
                return max;
              }
              return 2;
            },
          },
          hiddenCard:function(player,name){
            return name=='wuxie'&&player.countCards('he',{suit:'club'})>0;
          },
        },
        "hj_sn_shenwei":{
          audio:"ext:神怒降世:1",
          group:"hj_sn_shenwei_shuxing",
          shaRelated:true,
          trigger:{
            player:"useCardToPlayered",
          },
          forced:true,
          filter:function(event,player){
            return event.card.name=='sha'&&event.card.isCard;
          },
          content:function(){
            if(get.color(trigger.card)=='black'){
              if(trigger.target.countCards('he')>0) player.gainPlayerCard(trigger.target,'he',true);
            }
          },
          subSkill:{
            shuxing:{
              trigger:{
                player:"shaBefore",
              },
              forced:true,
              filter:function(event,player){
                return true;
              },
              content:function(){
                if(get.color(trigger.card)=='red'){
                  trigger.card.nature='fire';
                }
                if(get.color(trigger.card)=='black'){
                  trigger.card.nature='thunder';
                }
              },
              sub:true,
            },
          },
          mod:{
            targetInRange:function(card){
              if(card.name=='sha'&&get.color(card)=='red') return true;
            },
          },
        },
        "hj_sn_longyou":{ //原龙魂
          audio:"ext:神怒降世:1",
          enable:["chooseToUse","chooseToRespond"],
          prompt:"将【杀】当做【闪】，或将【闪】当做【杀】，或将【桃】当做【酒】，或将【酒】当做【桃】使用或打出",
          viewAs:function(cards,player){
            var name=false;
            switch(get.name(cards[0],player)){
              case 'sha':name='shan';break;
              case 'shan':name='sha';break;
              case 'tao':name='jiu';break;
              case 'jiu':name='tao';break;
            }
            if(name) return {name:name};
            return null;
          },
          check:function(card){
            var player=_status.event.player;
            if(_status.event.type=='phase'){
              var max=0;
              var name2;
              var list=['sha','tao','jiu'];
              var map={sha:'shan',tao:'jiu',jiu:'tao'}
              for(var i=0;i<list.length;i++){
                var name=list[i];
                if(player.countCards('h',map[name])>(name=='jiu'?1:0)&&player.getUseValue({name:name})>0){
                  var temp=get.order({name:name});
                  if(temp>max){
                    max=temp;
                    name2=map[name];
                  }
                }
              }
              if(name2==get.name(card,player)) return 1;
              return 0;
            }
            return 1;
          },
          filterCard:function(card,player,event){
            event=event||_status.event;
            var filter=event._backup.filterCard;
            var name=get.name(card,player);
            if(name=='sha'&&filter({name:'shan',cards:[card]},player,event)) return true;
            if(name=='shan'&&filter({name:'sha',cards:[card]},player,event)) return true;
            if(name=='tao'&&filter({name:'jiu',cards:[card]},player,event)) return true;
            if(name=='jiu'&&filter({name:'tao',cards:[card]},player,event)) return true;
            return false;
          },
          filter:function(event,player){
            var filter=event.filterCard;
            if(filter({name:'sha'},player,event)&&player.countCards('h','shan')) return true;
            if(filter({name:'shan'},player,event)&&player.countCards('h','sha')) return true;
            if(filter({name:'tao'},player,event)&&player.countCards('h','jiu')) return true;
            if(filter({name:'jiu'},player,event)&&player.countCards('h','tao')) return true;
            return false;
          },
          ai:{
            respondSha:true,
            respondShan:true,
            save:true,
            skillTagFilter:function(player,tag){
              var name;
              switch(tag){
                case 'respondSha':name='shan';break;
                case 'respondShan':name='sha';break;
                case 'save':name='jiu';break;
              }
              if(!player.countCards('h',name)) return false;
            },
            order:function(item,player){
              if(player&&_status.event.type=='phase'){
                var max=0;
                var list=['sha','tao','jiu'];
                var map={sha:'shan',tao:'jiu',jiu:'tao'}
                for(var i=0;i<list.length;i++){
                  var name=list[i];
                  if(player.countCards('h',map[name])>(name=='jiu'?1:0)&&player.getUseValue({name:name})>0){
                    var temp=get.order({name:name});
                    if(temp>max) max=temp;
                  }
                }
                if(max>0) max+=0.3;
                return max;
              }
              return 4;
            },
          },
        },
        "hj_sn_shenqu":{
          audio:"ext:神怒降世:1",
          forced:true,
          trigger:{
            player:["loseAfter","phaseAfter"],
            global:["equipAfter","addJudgeAfter","gainAfter"],
          },
          filter:function(event,player){
            if(event.getl&&!event.getl(player)) return false;
            return player.countCards('h')<4;
          },
          content:function(){
            player.draw(4-player.countCards('h'));
          },
          mod:{
            maxHandcardBase:function(player,num){
              return 4;
            },
          },
        },
        
        "hj_sn_longnu":{
          mark:true,
          locked:true,
          marktext:"龙",
          zhuanhuanji:true,
          intro:{
            content:function(storage,player,skill){
              if(player.storage.hj_sn_longnu==true) return '锁定技，出牌阶段开始时摸一张牌，然后本回合你的红色手牌均视为火杀且无距离限制';
              return '锁定技，出牌阶段开始时摸一张牌，然后本回合你的锦囊牌均视为雷杀且无使用次数限制';
            },
          },
          audio:"ext:神怒降世:1",
          trigger:{
            player:"phaseUseBegin",
          },
          forced:true,
          content:function(){
            if(player.storage.hj_sn_longnu==true){
              player.storage.hj_sn_longnu=false;
              player.draw();
              player.addTempSkill('hj_sn_longnu_2',{player:'phaseAfter'});
            }else{
              player.storage.hj_sn_longnu=true;
              player.draw();
              player.addTempSkill('hj_sn_longnu_1',{player:'phaseAfter'});
            };
          },
          subSkill:{
            "1":{
              prompt:"本回合你的红色手牌均视为火杀且无距离限制",
              mod:{
                cardname:function(card,player){
                  if(get.color(card)=='red') return 'sha';
                },
                cardnature:function(card,player){
                  if(get.color(card)=='red') return 'fire';
                },
                targetInRange:function(card){
                  if(get.color(card)=='red') return true;
                },
              },
              ai:{
                effect:{
                  target:function(card,player,target,current){
                    if(get.tag(card,'respondSha')&&current<0) {
                      return 0.6;
                    }
                  },
                },
                respondSha:true,
              },
              sub:true,
            },
            "2":{
              prompt:"本回合你的锦囊牌均视为雷杀且无使用次数限制",
              mod:{
                cardname:function(card,player){
                  if(['trick','delay'].contains(lib.card[card.name].type)) return 'sha';
                },
                cardnature:function(card,player){
                  if(['trick','delay'].contains(lib.card[card.name].type)) return 'thunder';
                },
                cardUsable:function(card,player){
                  if(card.name=='sha'&&card.nature=='thunder') return Infinity;
                },
              },
              ai:{
                effect:{
                  target:function(card,player,target,current){
                    if(get.tag(card,'respondSha')&&current<0) {
                      return 0.6;
                    }
                  },
                },
                respondSha:true,
              },
              sub:true,
            },
          },
        },
        "hj_sn_longwei":{
          audio:"ext:神怒降世:1",
          group:["hj_sn_longwei_draw","hj_sn_longwei_damage"],
          trigger:{
            player:"shaMiss",
          },
          marktext:"威",
          intro:{
            name:"龙威",
            content:"可以摸#张牌",
          },
          forced:true,
          filter:function(event,player){
            return _status.currentPhase==player;
          },
          content:function(){
            player.addMark('hj_sn_longwei',1);
          },
          subSkill:{
            draw:{
              audio:"hj_sn_longwei",
              trigger:{
                player:["phaseZhunbeiBegin","phaseJieshuBegin"],
              },
              filter:function(event,player){
                return player.countMark('hj_sn_longwei');
              },
              forced:true,
              content:function(){
                player.draw(player.countMark('hj_sn_longwei'));
                player.removeMark('hj_sn_longwei',player.countMark('hj_sn_longwei'));
              },
              sub:true,
            },
            damage:{
              audio:"hj_sn_longwei",
              trigger:{
                player:"damageEnd",
              },
              filter:function(event,player){
                return true;
              },
              forced:true,
              content:function(){
                player.addMark('hj_sn_longwei',trigger.num);
              },
              sub:true,
            },
          },
        },
        "hj_sn_jieying":{
          audio:"ext:神怒降世:1",
          locked:true,
          global:"hj_sn_jieyingspsx",
          ai:{
            effect:{
              target:function(card){
                if(card.name=='tiesuo') return 'zeroplayertarget';
              },
            },
          },
          group:["hj_sn_jieying_1","hj_sn_jieying_2"],
          subSkill:{
            "1":{
              audio:"hj_sn_jieying",
              trigger:{
                player:["linkBefore","enterGame"],
                global:"gameDrawAfter",
              },
              forced:true,
              filter:function(event,player){
                return player.isLinked()==(event.name=='link');
              },
              content:function(){
                if(trigger.name!='link') player.link(true);
                else trigger.cancel();
              },
              sub:true,
            },
            "2":{
              audio:"hj_sn_jieying",
              trigger:{
                player:"phaseEnd",
              },
              direct:true,
              filter:function(event,player){
                return game.hasPlayer(function(current){
                  return current!=player&&!current.isLinked();
                });
              },
              content:function(){
                "step 0"
                player.chooseTarget(true,'请选择【结营】的目标',function(card,player,target){
                  return target!=player&&!target.isLinked();
                }).ai=function(target){
                  return 1+Math.random();
                };
                "step 1"
                if(result.bool){
                  player.line(result.targets);
                  player.logSkill('hj_sn_jieying_2');
                  result.targets[0].link(true);
                }else{
                  event.finish();
                };
              },
              sub:true,
            },
          },
        },
        "hj_sn_tuogu":{
          audio:"ext:神怒降世:1",
          trigger:{
            player:"die",
          },
          direct:true,
          skillAnimation:true,
          animationColor:"metal",
          forceDie:true,
          content:function(){
            "step 0"
            player.chooseTarget(get.prompt2('hj_sn_tuogu'),function(card,player,target){
              return player!=target;
            }).set('forceDie',true).set('ai',function(target){
              var num=get.attitude(_status.event.player,target);
              if(num>0){
                if(target.hp==1){
                  num+=2;
                }
                if(target.hp<target.maxHp){
                  num+=2;
                }
              }
              return num;
            }).set('sourcex',trigger.source);
            "step 1"
            if(result.bool){
              var target=result.targets[0];
              player.logSkill('hj_sn_tuogu',target);
              player.line(target,'green');
              target.addSkill('reguanxing');
              target.addSkill('olfangquan');
              game.log(target,'获得了技能','#g〖观星〗','和','#g〖放权〗');
            }
          },
          ai:{
            expose:0.5,
          },
        },
        
        "hj_sn_junlue":{
          audio:"ext:神怒降世:1",
          group:"hj_sn_junlue_mark",
          trigger:{
            player:"phaseUseBegin",
          },
          direct:true,
          content:function(){
            'step 0'
            if(player.countMark('hj_sn_junlue_mark')%2==1){
              player.chooseTarget('是否发动【军略】，对一名角色造成1点火焰伤害？').ai=function(target){
                return -get.attitude(player,target);
              };
            }
            else{
              player.chooseTarget('是否发动【军略】，横置一名角色并弃置其区域内的一张牌？').ai=function(target){
                return -get.attitude(player,target);
              };
            }
            'step 1'
            if(result.bool){
              player.logSkill('hj_sn_junlue',result.targets);
              if(player.countMark('hj_sn_junlue_mark')%2==1){
                result.targets[0].damage('fire','nocard');
              }
              else{
                result.targets[0].link(true);
                player.discardPlayerCard(result.targets[0],1,'hej',true);
              };
            };
            'step 2'
            if(player.countMark('hj_sn_junlue_mark')>7){
              player.chooseBool().set('ai',function(){
                return true;
              }).set('prompt','是否弃置所有「军略」标记并对所有其他角色造成1点火焰伤害？');
            }else{
              event.finish();
            };
            'step 3'
            if(result.bool){
              var players=game.players.slice(0).sortBySeat();
              player.line(players);
              player.removeMark('hj_sn_junlue_mark',player.countMark('hj_sn_junlue_mark'));
              for(var i=0;i<players.length;i++){
                if(players[i]!=player) players[i].damage('fire','nocard');
              };
            };
          },
          subSkill:{
            mark:{
              audio:"ext:神怒降世:1",
              intro:{
                name:"军略",
                content:"当前有#个标记",
              },
              marktext:"略",
              trigger:{
                player:"damageAfter",
                source:"damageSource",
              },
              forced:true,
              content:function(){
                player.addMark('hj_sn_junlue_mark',trigger.num);
              },
              sub:true,
            },
          },
        },
        "hj_sn_qianxun":{
          init:function(player){
            if(!player.storage.hj_sn_qianxun2) player.storage.hj_sn_qianxun2=[];
          },
          audio:"ext:神怒降世:1",
          trigger:{
            target:"useCardToBegin",
            player:"judgeBefore",
          },
          filter:function(event,player){
            if(player.countCards('h')==0) return false;
            if(event.parent.name=='phaseJudge'){
              if(lib.skill.hj_sn_qianxun.trigger.player=='judgeBefore'){
                return true;
              }
              return event.result&&event.result.judge!=0;
            }
            if(event.name=='judge') return false;
            if(event.targets&&event.targets.length>1) return false;
            if(event.card&&get.type(event.card)=='trick'&&event.player!=player) return true;
          },
          content:function(){
            player.storage.hj_sn_qianxun2=player.storage.hj_sn_qianxun2.concat(player.getCards('h'));
            game.addVideo('storage',player,['hj_sn_qianxun2',get.cardsInfo(player.storage.hj_sn_qianxun2),'cards']);
            player.lose(player.getCards('h'),ui.special,'toStorage');
            player.addSkill('hj_sn_qianxun2');
          },
          ai:{
            effect:function(card,player,target){
              if(!target.hasFriend()) return;
              if(player==target) return;
              var type=get.type(card);
              var nh=target.countCards();
              if(type=='trick'){
                if(!get.tag(card,'multitarget')||get.info(card).singleCard){
                  if(get.tag(card,'damage')){
                    if(nh<3||target.hp<=2) return 0.8;
                  }
                  return [1,nh];
                }
              }
              else if(type=='delay'){
                return [0.5,0.5];
              }
            },
          },
        },
        "hj_sn_qianxun2":{
          trigger:{
            global:"phaseEnd",
          },
          forced:true,
          audio:"ext:神怒降世:1",
          content:function(){
            player.gain(player.storage.hj_sn_qianxun2,'fromStorage','draw');
            player.storage.hj_sn_qianxun2.length=0;
            player.removeSkill('hj_sn_qianxun2');
            game.addVideo('storage',player,['hj_sn_qianxun2',get.cardsInfo(player.storage.hj_sn_qianxun2),'cards']);
          },
          mark:true,
          intro:{
            content:"cardCount",
            onunmark:function(storage,player){
              if(storage&&storage.length){
                player.$throw(storage,1000);
                game.cardsDiscard(storage);
                game.log(storage,'被置入了弃牌堆');
                player.storage.hj_sn_qianxun2.length=0;
              }
            },
          },
        },
        "hj_sn_lianying":{
          audio:"ext:神怒降世:1",
          trigger:{
            player:"loseAfter",
            global:["equipAfter","addJudgeAfter","gainAfter"],
          },
          direct:true,
          filter:function(event,player){
            if(player.countCards('h')) return false;
            var evt=event.getl(player);
            return evt&&evt.hs&&evt.hs.length;
          },
          content:function(){
            "step 0"
            var num=trigger.getl(player).hs.length;
            player.chooseTarget(get.prompt('hj_sn_lianying'),'令至多'+get.cnNumber(num)+'名角色各摸一张牌',[1,num]).ai=function(target){
              var player=_status.event.player;
              if(player==target) return get.attitude(player,target)+10;
              return get.attitude(player,target);
            }
            "step 1"
            if(result.bool){
              player.logSkill('hj_sn_lianying',result.targets);
              game.asyncDraw(result.targets);
            }
            else event.finish();
            "step 2"
            game.delay();
          },
          ai:{
            threaten:0.8,
            effect:{
              target:function(card){
                if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
              },
            },
            noh:true,
          },
        },
        "hj_sn_zhanhuo":{
          audio:"ext:神怒降世:1",
          group:"hj_sn_zhanhuo_mark",
          limited:true,
          init:function (player){
            player.storage.hj_sn_zhanhuo=false;
          },
          intro:{
            content:"limited",
          },
          unique:true,
          mark:true,
          skillAnimation:true,
          animationColor:"metal",
          enable:"phaseUse",
          filter:function (event,player){
            return !player.storage.hj_sn_zhanhuo&&player.countMark('hj_sn_zhanhuo_mark')>0;
          },
          filterTarget:true,
          selectTarget:function(){
            return [1,_status.event.player.countMark('hj_sn_zhanhuo_mark')];
          },
          multiline:true,
          multitarget:true,
          content:function (){
            "step 0"
            player.awakenSkill('hj_sn_zhanhuo');
            player.removeMark('hj_sn_zhanhuo_mark',player.countMark('hj_sn_zhanhuo_mark'));
            player.storage.hj_sn_zhanhuo=true;
            "step 1"
            for(var i=0;i<targets.length;i++){
              if(!targets[i].isLinked()){
                targets[i].link(true);
              }
              else targets[i].link(false);
            }
            "step 2"
            var players=game.filterPlayer();
            players.remove(player);
            players.sort(lib.sort.seat);
            for(var i=0;i<players.length;i++){
              if(players[i]!=player&&players[i].isLinked()){
                players[i].damage('fire','nocard');
                players[i].discard(players[i].getCards('e'));
              }
            };
          },
          ai:{
            order:1,
            fireAttack:true,
            result:{
              target:function(player,target){
                if(target.isLinked()){
                  if(target.hasSkillTag('link')) return 0;
                  var f=target.hasSkillTag('nofire');
                  var t=target.hasSkillTag('nothunder');
                  if(f&&t) return 0;
                  if(f||t) return 0.5;
                  return 2;
                }
                if(get.attitude(player,target)>=0) return -0.9;
                if(ui.selected.targets.length) return -0.9;
                if(game.hasPlayer(function(current){
                  return get.attitude(player,current)<=-1&&current!=target&&!current.isLinked();
                })){
                  return -0.9;
                }
                return 0;
              },
            },
          },
          subSkill:{
            mark:{
              intro:{
                name:"绽火",
                content:"当前有#个标记",
              },
              marktext:"火",
              trigger:{
                player:"damageBegin",
                source:"damageBegin",
              },
              filter:function(event,player){
                return event.nature=='fire';
              },
              forced:true,
              content:function(){
                player.addMark('hj_sn_zhanhuo_mark',trigger.num);
              },
              sub:true,
            },
          },
        },
        
        "hj_sn_duorui":{
          audio:"ext:神怒降世:1",
          init:function(player){
            if(!player.storage.hj_sn_duorui) player.storage.hj_sn_duorui=[];
          },
          trigger:{
            source:"damageSource",
          },
          usable:1,
          filter:function(event,player){
            return player!=event.player&&!event.player.hasSkill('drlt_hj_sn_duorui1');
          },
          check:function(event,player){
            if(player.countDisabled()<5&&player.isDisabled(5)) return false;
            return true;
          },
          skillAnimation:true,
          animationColor:"thunder",
          bannedList:["bifa","buqu","gzbuqu","songci","funan","xinfu_guhuo","reguhuo","huashen","rehuashen","old_guhuo","shouxi","xinpojun","taoluan","xintaoluan","yinbing","xinfu_yingshi","zhenwei","zhengnan","xinzhengnan","zhoufu"],
          content:function(){
            "step 0"
            var list=[];
            var listm=[];
            var listv=[];
            if(trigger.player.name1!=undefined) listm=lib.character[trigger.player.name1][3];
            else listm=lib.character[trigger.player.name][3];
            if(trigger.player.name2!=undefined) listv=lib.character[trigger.player.name2][3];
            listm=listm.concat(listv);
            var func=function(skill){
              var info=get.info(skill);
              if(!info||info.charlotte||info.zhuSkill||info.juexingji||info.limited||(info.unique&&!info.gainable)||lib.skill.drlt_duorui.bannedList.contains(skill)) return false;
              return true;
            };
            for(var i=0;i<listm.length;i++){
              if(func(listm[i])) list.add(listm[i]);
            }
            event.skills=list;
            "step 1"
            if(event.skills.length>0){
              player.chooseControl(event.skills).set('prompt','请选择要获得的技能').set('ai',function(){return event.skills.randomGet()});
            }
            else event.goto(9);
            "step 2"
            event.jineng1=result.control;
            if(player.hasSkill(event.jineng1)){
              trigger.player.storage.drlt_hj_sn_duorui=[event.jineng1];
              trigger.player.addTempSkill('drlt_hj_sn_duorui1',{player:'phaseJieshuBegin'});
              event.goto(9);
            }
            else event.goto(3);
            "step 3"
            if(player.storage.hj_sn_duorui.length>0) event.goto(4);
            else{
              player.loseMaxHp(1);
              event.goto(8);
            }
            "step 4"
            player.chooseControl('失去一个获得的技能','减少1点体力上限').set('ai',function(){
              if(player.maxHp>3) return '减少1点体力上限';
              return '失去一个获得的技能';
            });
            "step 5"
            if(result.control=='减少1点体力上限'){
              player.loseMaxHp(1);
              event.goto(8);
            }
            else{
              event.goto(6);
            }
            "step 6"
            player.chooseControl(player.storage.hj_sn_duorui).set('prompt','请选择要失去的技能').set('ai',function(){return player.storage.hj_sn_duorui.randomGet()});
            "step 7"
            event.jineng2=result.control;
            player.removeSkill(event.jineng2);
            player.storage.hj_sn_duorui.remove(event.jineng2);
            game.log(player,'失去了技能','#g【'+get.translation(event.jineng2)+'】')
            "step 8"
            player.addSkill(event.jineng1);
            player.popup(event.jineng1,'thunder');
            player.storage.hj_sn_duorui.push(event.jineng1);
            trigger.player.storage.drlt_hj_sn_duorui=[event.jineng1];
            trigger.player.addTempSkill('drlt_hj_sn_duorui1',{player:'phaseJieshuBegin'});
            game.log(player,'获得了技能','#g【'+get.translation(event.jineng1)+'】')
            "step9"
          },
        },
        "hj_sn_tuxi":{
          audio:"ext:神怒降世:1",
          group:"hj_sn_tuxi_chongzhu",
          trigger:{
            player:"phaseDrawBegin",
          },
          direct:true,
          filter:function (event){
            return event.num>0&&!event.numFixed;
          },
          content:function (){
            "step 0"
            var num=get.copy(trigger.num);
            if(get.mode()=='guozhan'&&num>2) num=2;
            player.chooseTarget(get.prompt('突袭'),'获得至多'+get.translation(num)+'名角色的各一张手牌，然后少摸等量的牌',[1,num],function(card,player,target){
              return target.countCards('h')>0&&player!=target;
            },function(target){
              var att=get.attitude(_status.event.player,target);
              if(target.hasSkill('tuntian')) return att/10;
              return 1-att;
            });
            "step 1"
            if(result.bool){
              result.targets.sortBySeat();
              player.logSkill('hj_sn_tuxi',result.targets);
              player.gainMultiple(result.targets);
              trigger.num-=result.targets.length;
            }
            else{
              event.finish();
            }
            "step 2"
            if(trigger.num<=0) game.delay();
          },
          ai:{
            threaten:1.6,
            expose:0.2,
          },
          subSkill:{
            chongzhu:{
              trigger:{
                player:"phaseDrawAfter",
              },
              direct:true,
              filter:function(event,player){
                return player.storage.hj_sn_duorui&&player.storage.hj_sn_duorui.length>0&&player.countCards('he')>0;
              },
              content:function(){
                "step 0"
                player.chooseToDiscard('是否重铸至多'+get.cnNumber(player.storage.hj_sn_duorui.length)+'张牌？',[1,player.storage.hj_sn_duorui.length],'he').set('ai',function(card){
                  return 7-get.value(card);
                });
                "step 1"
                if(result.bool==true){
                  player.draw(result.cards.length);
                }
              },
              sub:true,
            },
          },
        },
        "hj_sn_zhiti":{
				audio:'drlt_zhiti',
				global:'hj_sn_zhiti2',
				mod:{
					maxHandcard:function(player,num){
						if(game.hasPlayer(function(current){
							return current.isDamaged();
						})) return num+1;
					},
				},
				trigger:{player:['phaseDrawBegin2','phaseEnd']},
				forced:true,
				filter:function(event,player){
					var num=event.name=='phase'?5:3;
					if(num==3?event.numFixed:!game.hasPlayer(function(current){
						return current.countDisabled()<5;
					})) return false;
					return game.countPlayer(function(current){
						return current.isDamaged();
					})>=num;
				},
				direct:true,
				content:function(){
					'step 0'
					if(trigger.name=='phaseDraw'){
						player.logSkill('hj_sn_zhiti');
						trigger.num++;
						event.finish();
					}
					else{
						player.chooseTarget(get.prompt('hj_sn_zhiti'),'废除一名角色的一个随机装备栏',function(card,player,target){
							return target.countDisabled()<5;
						}).set('ai',function(target){
							return -get.attitude(_status.event.player,target)*(target.countCards('e')+1)
						});
					}
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('hj_sn_zhiti',target);
						var list=[];
						for(var i=1;i<6;i++){
							if(!target.isDisabled(i)) list.add((i==3||i==4)?6:i);
						}
						var num=list.randomGet();
						if(num!=6) target.disableEquip(num);
						else{
							target.disableEquip(3);
							target.disableEquip(4);
						}
					}
				},
        },
			"hj_sn_zhiti2":{
				mod:{
					maxHandcard:function(player,num){
						if(player.isDamaged()) return num-game.countPlayer(function(current){
							return current.hasSkill('hj_sn_zhiti')&&current.inRange(player);
						})
					},
				},
			},
        "hj_sn_xingtian":{
          group:"hj_sn_xingtian_yuyin",
          trigger:{
            global:"phaseEnd",
          },
          filter:function(event,player){
            return event.player.getStat('damage')>1&&event.player!=player;
          },
          check:function(event,player){
            return 1;
          },
          content:function(){
            "step 0"
            if(player.maxHp>=5) event.goto(3);
            "step 1"
            player.chooseControl('造成伤害','体力上限').set('ai',function(){
              if(player.MaxHp<4) return '体力上限';
              return '造成伤害';
            });
            "step 2"
            if(result.control=='体力上限'){
              player.logSkill('hj_sn_xingtian_yuyin');
              player.gainMaxHp(1);
              event.goto(5);
            }
            else{
              event.goto(3);
            }
            "step 3"
            player.chooseTarget('对一名角色造成1点雷电伤害',true,function(card,player,target){
              return target!=player;
            }).set('ai',function(target){
              return get.damageEffect(target,player,player,'thunder');
            });
            "step 4"
            if(result.bool&&result.targets&&result.targets.length){
              player.logSkill('hj_sn_xingtian_yuyin',result.targets);
              result.targets[0].damage('thunder',1,'nocard');
            }
            "step 5"
          },
          subSkill:{
            yuyin:{
              audio:"ext:神怒降世:1",
              sub:true,
            },
          },
        },
        
        "hj_sn_shenpo":{
          audio:"ext:神怒降世:1",
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
          mod:{
            maxHandcardBase:function(player,num){
              return num+1;
            },
            cardUsable:function(card,player,num){
              if(card.name=='sha') return num+1;
            },
          },
          ai:{
            threaten:1.5,
          },
        },
        "hj_sn_poxi":{
          audio:"ext:神怒降世:1",
          enable:"phaseUse",
          usable:1,
          filterTarget:function(card,player,target){
            return target!=player&&target.countCards('h')>0;
          },
          content:function(){
            'step 0'
            event.list1=[];
            event.list2=[];
            if(player.countCards('h')>0){
              var chooseButton=player.chooseButton(4,['你的手牌',player.getCards('h'),get.translation(target.name)+'的手牌',target.getCards('h')]);
            }
            else{
              var chooseButton=player.chooseButton(4,[get.translation(target.name)+'的手牌',target.getCards('h')]);
            }
            chooseButton.set('target',target);
            chooseButton.set('ai',function(button){
              var player=_status.event.player;
              var target=_status.event.target;
              var ps=[];
              var ts=[];
              for(var i=0;i<ui.selected.buttons.length;i++){
                var card=ui.selected.buttons[i].link;
                if(target.getCards('h').contains(card)) ts.push(card);
                else ps.push(card);
              }
              var card=button.link;
              var owner=get.owner(card);
              var val=get.value(card)||1;
              if(owner==target){
                if(ts.length>1) return 0;
                if(ts.length==0||player.hp>3) return val;
                return 2*val;
              }
              return 7-val;
            });
            chooseButton.set('filterButton',function(button){
              for(var i=0;i<ui.selected.buttons.length;i++){
                if(get.suit(button.link)==get.suit(ui.selected.buttons[i].link)) return false;
              };
              return true;
            });
            'step 1'
            if(result.bool){
              var list=result.links;
              for(var i=0;i<list.length;i++){
                if(get.owner(list[i])==player){
                  event.list1.push(list[i]);
                }else{
                  event.list2.push(list[i]);
                };
              };
              if(event.list1.length&&event.list2.length){
                target.discard(event.list2).delay=false;
                player.discard(event.list1);
              }
              else if(event.list2.length){
                target.discard(event.list2);
              }
              else player.discard(event.list1);
            };
            'step 2'
            if(event.list1.length+event.list2.length==4){
              if(event.list1.length==0) player.loseMaxHp();
              if(event.list1.length==1){
                var evt=_status.event;
                for(var i=0;i<10;i++){
                  if(evt&&evt.getParent)evt=evt.getParent();
                  if(evt.name=='phaseUse'){
                    evt.skipped=true;
                    break;
                  };
                };
                player.addTempSkill('drlt_poxi1',{player:'phaseAfter'});
              };
              if(event.list1.length==3) player.recover();
              if(event.list1.length==4) player.draw(4);
            };
          },
          ai:{
            order:13,
            result:{
              target:function(target,player){
                return -1;
              },
            },
          },
        },
        "hj_sn_jianying":{ //原劫营
          audio:"ext:神怒降世:1",
          group:["hj_sn_jianying_qiangpai","hj_sn_jianying_yichu"],
          intro:{
            name:"劫营",
            content:"已获得过其他角色的手牌#次",
          },
          marktext:"劫",
          trigger:{
            player:"phaseJieshuBegin",
          },
          direct:true,
          filter:function(event,player){
            return true;
          },
          onremove:function(player){
            game.countPlayer(function(current){
              if(current.hasSkill('hj_sn_jianying1')){
                current.removeSkill('hj_sn_jianying1');
              }
            });
          },
          content:function(){
            "step 0"
            player.chooseTarget(get.prompt('hj_sn_jianying'),"选择〖劫营〗目标",function(card,player,target){
              return target!=player&&!target.hasSkill('hj_sn_jianying1');
            }).ai=function(target){
              if(get.attitude(player,target)>0)
                return 0.1;
              if(get.attitude(player,target)<1&&(target.isTurnedOver()||target.countCards('h')<1))
                return 0.2;
              if(get.attitude(player,target)<1&&target.countCards('h')>0&&target.countCards('j',{name:'lebu'})>0)
                return target.countCards('h')*0.8+target.getHandcardLimit()*0.7+2;
              if(get.attitude(player,target)<1&&target.countCards('h')>0)
                return target.countCards('h')*0.8+target.getHandcardLimit()*0.7;
              return 1;
            };
            "step 1"
            if(result.bool){
              var target=result.targets[0];
              player.logSkill('hj_sn_jianying',target);
              result.targets[0].addTempSkill('hj_sn_shenpo',{player:'phaseAfter'});
              result.targets[0].addSkill('hj_sn_jianying1');
            };
          },
          subSkill:{
            qiangpai:{
              audio:"hj_sn_jianying",
              trigger:{
                global:"phaseEnd",
              },
              filter:function(event,player){
                return player!=event.player&&event.player.hasSkill('hj_sn_jianying1')&&event.player.isAlive();
              },
              direct:true,
              forced:true,
              check:function(event,player){
                return get.attitude(player,event.player)<0;
              },
              content:function(){
                "step 0"
                if(trigger.player.countCards('h')<1) event.goto(3);
                "step 1"
                player.chooseControl('获得'+get.translation(trigger.player)+'的所有手牌','取消').set('ai',function(target){
                  if(get.attitude(player,trigger.player)<=0) return '获得'+get.translation(trigger.player)+'的所有手牌';
                  if(get.attitude(player,trigger.player)>0) return '取消';
                  return '获得'+get.translation(trigger.player)+'的所有手牌';
                });
                "step 2"
                if(result.control=='获得'+get.translation(trigger.player)+'的所有手牌'){
                  player.logSkill('hj_sn_jianying',trigger.player);
                  trigger.player.give(trigger.player.getCards('h'),player);
                  player.addMark('hj_sn_jianying',1);
                }
                "step 3"
                trigger.player.removeSkill('hj_sn_jianying1');
              },
              sub:true,
            },
            yichu:{
              trigger:{
                player:"die",
              },
              filter:function(event,player){
                return true;
              },
              direct:true,
              forced:true,
              forceDie:true,
              content:function(){
                game.countPlayer(function(current){
                  if(current.hasSkill('hj_sn_jianying1')){
                    current.removeSkill('hj_sn_jianying1');
                  }
                });
              },
              sub:true,
            },
          },
        },
        "hj_sn_jijing":{
          unique:true,
          forceDie:true,
          forced:true,
          usable:1,
          audio:"ext:神怒降世:1",
          trigger:{
            player:"gainAfter",
          },
          mark:true,
          marktext:"境",
          derivation:"hj_sn_jianying2",
          animationColor:"water",
          skillAnimation:"legend",
          filter:function(event,player){
            return player.countMark('hj_sn_jianying')>=3;
          },
          content:function (){
            "step 0"
            player.awakenSkill('hj_sn_jijing');
            if(player.countMark('hj_sn_jianying')>0) player.removeMark('hj_sn_jianying',player.countMark('hj_sn_jianying'));
            player.loseMaxHp(2);
            player.draw(2);
            "step 1"
            player.removeSkill('hj_sn_jianying');
            player.addSkill('hj_sn_jianying2');
          },
          intro:{
            content:"limited",
          },
          init:function(player,skill){
            player.storage[skill]=false;
          },
          ai:{
            order:1,
            result:{
              target:function(player,target){
                return -1;
              },
            },
          },
        },
        "hj_sn_jianying1":{
          mark:true,
          marktext:"劫",
          unique:true,
          intro:{
            name:"劫营",
            content:"手牌即将不保！",
          },
        },
        "hj_sn_jianying2":{
          audio:"ext:神怒降世:1",
          group:["hj_sn_jianying2_qiangpai","hj_sn_jianying2_yichu"],
          trigger:{
            player:"phaseJieshuBegin",
          },
          direct:true,
          filter:function(event,player){
            return true;
          },
          onremove:function(player){
            game.countPlayer(function(current){
              if(current.hasSkill('hj_sn_jianying1')){
                current.removeSkill('hj_sn_jianying1');
              }
            });
          },
          content:function(){
            "step 0"
            player.chooseTarget(get.prompt('hj_sn_jianying'),"选择获得〖神魄〗的目标",function(card,player,target){
              return target!=player&&!target.hasSkill('jsgnsp');
            }).set('ai',function(target){
              var player=_status.event.player;
              return get.attitude(target,player);
            });
            "step 1"
            if(result.bool){
              player.logSkill('hj_sn_jianying',result.targets[0]);
              result.targets[0].addTempSkill('jsgnsp',{player:'phaseAfter'});
            };
            "step 2"
            player.chooseTarget(get.prompt('hj_sn_jianying'),"选择获得「劫营」标记的目标",function(card,player,target){
              return target!=player&&!target.hasSkill('hj_sn_jianying1');
            }).set('ai',function(target){
              var player=_status.event.player;
              return -get.attitude(target,player);
            });
            "step 3"
            if(result.bool){
              player.logSkill('hj_sn_jianying',result.targets[0]);
              result.targets[0].addSkill('hj_sn_jianying1');
            };
          },
          subSkill:{
            qiangpai:{
              audio:"hj_sn_jianying",
              trigger:{
                global:"phaseEnd",
              },
              filter:function(event,player){
                return player!=event.player&&event.player.hasSkill('hj_sn_jianying1')&&event.player.isAlive();
              },
              forced:true,
              check:function(event,player){
                return get.attitude(player,event.player)<0;
              },
              logTarget:"player",
              content:function(){
                if(trigger.player.countCards('h')>0){
                  trigger.player.give(trigger.player.getCards('h'),player);
                }
                trigger.player.removeSkill('hj_sn_jianying1');
              },
              sub:true,
            },
            yichu:{
              trigger:{
                player:"die",
              },
              filter:function(event,player){
                return true;
              },
              direct:true,
              forced:true,
              forceDie:true,
              content:function(){
                game.countPlayer(function(current){
                  if(current.hasSkill('hj_sn_jianying1')){
                    current.removeSkill('hj_sn_jianying1');
                  }
                });
              },
              sub:true,
            },
          },
        },

        "hj_sn_chuyuan":{
          audio:2,
          trigger:{
            global:"damageEnd",
          },
          filter:function(event,player){
            return event.player.isAlive()&&player.getStorage('chuyuan').length<player.maxHp;
          },
          logTarget:"player",
          locked:false,
          content:function(){
            'step 0'
            trigger.player.draw();
            'step 1'
            if(!trigger.player.countCards('h')) event.finish();
            else trigger.player.chooseCard('h',true,'选择一张牌置于'+get.translation(player)+'的武将牌上作为「储」');
            'step 2'
            trigger.player.lose(result.cards,ui.special,'visible','toStorage');
            trigger.player.$give(result.cards,player,false);
            game.log(trigger.player,'选择了',result.cards);
            player.markAuto('chuyuan',result.cards);
          },
          intro:{
            content:"cards",
            onunmark:"throw",
          },
        },
        "hj_sn_dengji":{
          audio:2,
          derivation:["tianxing","new_rejianxiong","rerende","rezhiheng","olluanji","caopi_xingdong"],
          trigger:{
            player:"phaseZhunbeiBegin",
          },
          forced:true,
          unique:true,
          juexingji:true,
          skillAnimation:true,
          animationColor:"water",
          filter:function(event,player){
            return player.getStorage('chuyuan').length>=3;
          },
          content:function(){
            player.awakenSkill(event.name);
            player.addSkill('tianxing');
            player.addSkill('new_rejianxiong');
            player.loseMaxHp();
            player.gain(player.storage.chuyuan,'gain2','fromStorage');
            player.unmarkAuto('chuyuan',player.storage.chuyuan);
          },
        },
        "hj_sn_yange":{
          trigger:{
            player:"damageEnd",
          },
          priority:1,
          locked:true,
          filter:function (event,player){
            return get.itemtype(event.cards)=='cards'&&
            get.position(event.cards[0],true)=='o'&&
            game.hasPlayer(function(current){
              return current!=player&&get.distance(current,player)<=1;
            });
          },
          content:function (){
            'step 0'
            event.targets=game.filterPlayer();
            event.targets.sort(lib.sort.seat);
            'step 1'
            if(event.targets.length){
              var target=event.targets.shift();
              if(player!=target&&get.distance(target,player)<=1){
                if(target.countCards('he')>0){
                  player.line(target);
                  target.addTempSkill('hj_sn_yange_mark');
                  target.chooseCard('【燕歌】：请交给'+get.translation(player)+'一张牌','he',true);
                }else{event.goto(3);}
              }else{event.goto(3);}
            }
            'step 2'
            if(result.bool&&result.cards&&result.cards.length){
              player.gain(result.cards[0],target,'gain2');
            }
            'step 3'
            if(event.targets.length){
              event.goto(1);
            }
            'step 4'
            player.chooseTarget('【燕歌】：请将'+get.translation(trigger.cards)+'交给一名其他角色',true,function(card,player,target){
              return target!=player&&target.hasSkill('hj_sn_yange_mark');
            })
            'step 5'
            if(result.bool){
              result.targets[0].gain(trigger.cards,'gain2');
            } 
          },
          ai:{
            maixie:true,
            "maixie_hp":true,
            effect:{
              target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')) return [1,0.55];
              },
            },
          },
          subSkill:{
            mark:{
              sub:true,
            },
          },
        },

        "hj_sn_luoshen":{
          init:function (player){
            player.storage.hj_sn_luoshen=0;
          },
          intro:{
            content:function (storage){
              if(storage>0) return '本回合因此技能获得'+storage+'张牌';
              if(storage<0) return '本回合因此技能获得'+storage+'张牌';
              return '未发动';
            },
          },
          audio:"ext:混沌界:2",
          trigger:{
            player:"phaseBegin",
          },
          locked:true,
          content:function (){
            "step 0"
            player.judge(function(card){
              if(get.suit(card)!='heart') return 1.5;
              return -1.5;
            });
            "step 1"
            if(result.judge>0){
              player.gain(result.card,'gain2');
              player.storage.hj_sn_luoshen++;
              player.markSkill('hj_sn_luoshen');
              player.syncStorage('hj_sn_luoshen');
            }
            else{
              event.finish();
            }
            "step 2"
            if(result.bool){
              event.goto(0);
              player.logSkill('hj_sn_luoshen');
            }
          },
          group:"hj_sn_luoshen_Over",
          subSkill:{
            Over:{
              audio:"ext:混沌界:2",
              trigger:{
                player:"phaseEnd",
              },
              forced:true,
              direct:true,
              priority:100,
              content:function (){
                "step 0"
                if(player.storage.hj_sn_luoshen<=2){
                  player.storage.hj_sn_luoshen=0;
                  player.markSkill('hj_sn_luoshen');
                  player.syncStorage('hj_sn_luoshen');
                }
                else{
                  player.storage.hj_sn_luoshen=0;
                  player.markSkill('hj_sn_luoshen');
                  player.syncStorage('hj_sn_luoshen');
                  event.finish();
                }
                "step 1"
                player.chooseTarget(get.prompt('hj_sn_luoshen_Over'),function(card,player,target){
                  return target.isEnemyOf(player);
                }).ai=function(target){
                  var att=get.attitude(player,target);
                  if(target.isTurnedOver()){
                    if(att>0){
                      return att+5;
                    }
                    return -1;
                  }
                  if(player.isTurnedOver()){
                    return 5-att;
                  }
                  return -att;
                };
                "step 2"
                if(result.bool){
                  player.logSkill('hj_sn_luoshen_Over',result.targets);
                  result.targets[0].turnOver();
                }
              },
              ai:{
                threaten:1.7,
              },
              sub:true,
            },
          },
        },
        "hj_sn_fanghua":{
          audio:"ext:混沌界:2",
          trigger:{
            global:"turnOverAfter",
          },
          forced:true,
          filter:function (event,player){
            return event.player.isTurnedOver()&&
            event.player!=player;
          },
          content:function (){
            trigger.player.loseHp();
          },
          ai:{
            expose:0,
          },
        },
        "hj_sn_shenfu":{
          audio:2,
          trigger:{
            player:"phaseEnd",
          },
          direct:true,
          content:function(){
            'step 0'
            event.logged=false;
            event.targets=[];
            event.goto(player.countCards('h')%2==1?1:4);
            'step 1'
            player.chooseTarget(get.prompt('shenfu'),'对一名其他角色造成1点雷属性伤害',lib.filter.notMe).set('ai',function(target){
              var player=_status.event.player;
              return get.damageEffect(target,player,player,'thunder')*(target.hp==1?2:1);
            });
            'step 2'
            if(result.bool){
              var target=result.targets[0];
              event.target=target;
              if(!event.logged){
                event.logged=true;
                player.logSkill('shenfu',target,'thunder');
              }
              else player.line(target,'thunder');
              target.damage('thunder');
            }
            else event.finish();
            'step 3'
            if(target.isDead()) event.goto(1);
            else event.finish();
            'step 4'
            player.chooseTarget(get.prompt('shenfu'),'令一名角色摸一张牌或弃置其一张手牌',function(card,player,target){
              return !_status.event.getParent().targets.contains(target);
            }).set('ai',function(target){
              var att=get.attitude(_status.event.player,target);
              var delta=target.hp-target.countCards('h');
              if(Math.abs(delta)==1&&get.sgn(delta)==get.sgn(att)) return 3*Math.abs(att);
              if(att>0||target.countCards('h')>0) return Math.abs(att);
              return 0;
            });
            'step 5'
            if(result.bool){
              var target=result.targets[0];
              event.target=target;
              if(!event.logged){
                event.logged=true;
                player.logSkill('shenfu',target);
              }
              else player.line(target,'green');
              targets.push(target);
              if(!target.countCards('h')) event._result={bool:false};
              else player.discardPlayerCard(target,'h','弃置'+get.translation(target)+'一张手牌，或点【取消】令其摸一张牌。');
            }
            else event.finish();
            'step 6'
            if(!result.bool) target.draw();
            'step 7'
            if(target.hp==target.countCards('h')) event.goto(4);
          },
          ai:{
            expose:0.25,
          },
        },
        "hj_sn_qixian":{
          mod:{
            maxHandcardBase:function(player,num){
              return 7;
            },
          },
        },
      },
      translate:{
        "hj_shenguanyu":"魂·神关羽",
        "hj_shenlvmeng":"魂·神吕蒙",
        "hj_shenzhouyu":"魂·神周瑜",
        "hj_shenzhugeliang":"魂·神诸葛亮",
        "hj_shencaocao":"魂·神曹操",
        "hj_shenlvbu":"魂·神吕布",
        "hj_shensimayi":"魂·神司马懿",
        "hj_shenzhaoyun":"魂·神赵云",
        "hj_shenliubei":"魂·神刘备",
        "hj_shenluxun":"魂·神陆逊",
        "hj_shenzhangliao":"魂·神张辽",
        "hj_shenganning":"魂·神甘宁",
        "hj_shencaopi":"魂·神曹丕",
        "hj_shenzhenji":"魂·神甄姬",



        "hj_sn_wushen":"武神",
        "hj_sn_wushen_info":"锁定技，你的♥【杀】不能被响应，当你使用【杀】或【决斗】对目标造成伤害时，你防止此伤害，改为其减少等量的体力上限。",
        "hj_sn_wuhun":"武魂",
        "hj_sn_wuhun_info":"锁定技，你的【桃园结义】与【五谷丰登】视为【杀】；你可以将一张红色牌当做【杀】使用或打出，你的♦【杀】无距离限制。",
        "hj_sn_zhuihun":"追魂",
        "hj_sn_zhuihun_info":"每当你使用【杀】指定目标时，或成为【杀】的目标时，你可以摸一张牌。",
        "hj_sn_suoming":"索命",
        "hj_sn_suoming_info":"锁定技，当你受到伤害后，伤害来源获得等同于伤害量的「梦魇」标记。当你死亡时，你选择一名「梦魇」标记数量最多的其他角色。该角色进行判定：若判定结果不为【桃】或【桃园结义】，则该角色死亡。",
        
        "hj_sn_shelie":"涉猎",
        "hj_sn_shelie_info":"摸牌阶段，你可以改为从牌堆顶亮出六张牌，然后选择获得不同花色的牌各一张。",
        "hj_sn_gongxin":"攻心",
        "hj_sn_gongxin_info":"出牌阶段限一次，你可以观看一名其他角色的手牌，并可以展示其中一张牌，然后将其弃置或置于牌堆顶。",
        "hj_sn_keji":"克己",
        "hj_sn_keji_info":"弃牌阶段开始时，若你于本回合的出牌阶段内没有过使用或打出过【杀】，则你可以跳过此阶段。",
        "hj_sn_botu":"博图",
        "hj_sn_botu_info":"回合结束时，若你本回合出牌阶段内使用的牌包含四种花色，则你可以进行一个额外回合。",
        
        "hj_sn_shenzi":"神姿",
        "hj_sn_shenzi_info":"锁定技，你的手牌上限为你的体力值上限；回合开始你可以对自己造成1点火焰伤害。",
        "hj_sn_honglian":"红莲",
        "hj_sn_honglian_info":"锁定技，每当你受到1点火焰伤害后，摸两张牌。",
        "hj_sn_qinyin":"琴音",
        "hj_sn_qinyin_info":"弃牌阶段结束时选择一项：1. 令所有角色各回复1点体力；2. 令所有角色各受到1点火焰伤害。",
        "hj_sn_yeyan":"业炎",
        "hj_sn_yeyan_info":"限定技，出牌阶段，你可以弃置1~3张红色牌，对一名其他角色造成X点火焰伤害，然后对自身造成X-1点火焰伤害(X为弃牌数量)，你于下个回合开始时获得技能〖业火〗",
        "hj_sn_yehuo":"业火",
        "hj_sn_yehuo_info":"出牌阶段限一次，若你已受伤，你可以弃置至多X张红牌，对至多X名角色各造成1点火焰伤害（X为你已损失的体力值）。",
        "hj_sn_yehuo2":"业火",
        "hj_sn_yehuo2_info":"",
        
        "hj_sn_xinqixing":"七星",
        "hj_sn_xinqixing_info":"锁定技，回合开始、回合结束、当你受到伤害后、当有判定结算后，你可以从牌堆顶获得1张「星」，你至多拥有7张「星」。",
        "hj_sn_qixing":"七星",
        "hj_sn_qixing_info":"摸牌阶段结束与弃牌阶段开始时，你可用任意数量手牌等量交换「星」。<br>②每回合限一次，当你使用锦囊牌后，可以从牌堆顶获得1张「星」，你至多拥有7张「星」。<br>③狂风：出牌阶段</span>限一次，可以弃置2张「星」并使一名角色直到你回合开始受到的火焰伤害+1。<br>④大雾：结束阶段，可以弃置2张「星」并使一名角色直到你回合开始不会受到非雷电伤害。",
        "hj_sn_qixing_kuangfeng":"七星-狂风",
        "hj_sn_qixing_kuangfeng_info":"",
        "hj_sn_qixing_dawu":"七星-大雾",
        "hj_sn_qixing_dawu_info":"",
        "hj_sn_qidao":"七道",
        "hj_sn_qidao_info":"觉醒技，准备阶段，若「星」的数量为7，减少2点体力上限，修改〖七星〗，并获得技能〖观星〗、〖看破〗、〖火计〗",
        "hj_sn_guanxing":"观星",
        "hj_sn_guanxing_info":"1、准备阶段/结束阶段，你可以观看牌堆顶的5张牌，并将其以任意顺序置于牌堆项或牌堆底；2弃牌阶段结束时，你可以将手牌摸至与「星」的数量相同(最多摸至5张)。",
        "hj_sn_kanpo":"看破",
        "hj_sn_kanpo_info":"1、你可以将你的任意一张黑色手牌当做【无懈可击】使用；2、当你于回合外使用、打出或弃置一张黑色牌后，你可以摸一张牌。",
        "hj_sn_huoji":"火计",
        "hj_sn_huoji_info":"锁定技，你的手牌上限+3；出牌阶段限一次，你可以将你的任意一张红色手牌当作【火攻】使用。",
        "hj_sn_kuangfeng":"狂风",
        "hj_sn_kuangfeng_info":"出牌阶段开始时，你可以选择一名角色，你弃置该角色一张牌，然后该角色本回合内获得\"风\"。锁定技，有\"风\"的角色受到的火焰伤害＋1；受到雷属性伤害后随机弃置两张牌。锁定技，有\"风\"的角色受到伤害后，你摸一张牌。",
        
        "hj_sn_guixin":"归心",
        "hj_sn_guixin_info":"当你受到1点伤害后，你可以按照你选择的区域优先度随机获得每名其他角色区域里的一张牌，然后你翻面。",
        "hj_sn_zhuangzhi":"壮志",
        "hj_sn_zhuangzhi_info":"当你的武将牌翻回正面后，若你是体力值最低的角色，进行一次判定，若判定为红色，则你回复1点体力。",
        "hj_sn_feiying":"飞影",
        "hj_sn_feiying_info":"锁定技，其他角色计算与你的距离时始终+1。",
        "hj_sn_xiaoxiong":"枭雄",
        "hj_sn_xiaoxiong_info":"觉醒技，准备阶段，若存活角色少于5，则你增加1点体力上限并回复1点体力，然后获得技能〖奸雄〗",
        "hj_sn_jianxiong":"奸雄",
        "hj_sn_jianxiong_info":"当你受到伤害后，你可以获得对你造成伤害的牌并摸一张牌。",

        "hj_sn_wushuang":"无双",
        "hj_sn_wushuang_info":"锁定技，你使用【杀】或【决斗】可以指定至多三个目标；当你使用【杀】指定目标后，响应此【杀】需要两张【闪】；你发起的【决斗】不能被目标响应，你成为【决斗】的目标时，发起者会直接受到伤害。",
        "hj_sn_feijiang":"飞将",
        "hj_sn_feijiang_info":"锁定技，你的伤害型锦囊牌视为【决斗】，功能型锦囊牌视为【杀】；回合结束阶段，若你本回合内造成了至少3点伤害，你摸两张牌。",
        "hj_sn_wuqian":"无前",
        "hj_sn_wuqian_info":"锁定技，当你造成伤害时，若你的攻击范围内的其他角色数量为1，此伤害+1；你的【杀】无视防具；出牌阶段限一次，你可以弃一张牌并失去1点体力，获得技能〖马术〗直到回合结束。",
        "hj_sn_shenfen":"神愤",
        "hj_sn_shenfen_info":"锁定技，当你造成或受到1点伤害后，你获得1枚「暴怒」标记；出牌阶段限一次，你可以弃置6枚「暴怒」标记，令所有其他角色依次受到1点伤害并弃置所有牌，然后你翻面。",
        
        "hj_sn_renjie":"忍戒",
        "hj_sn_renjie_info":"锁定技，当你受到1点伤害、回合内弃置一张牌、回合外失去一张牌后，你获得一枚「忍戒」标记。",
        "hj_sn_baiyin":"拜印",
        "hj_sn_baiyin_info":"觉醒技，准备阶段，若你的「忍戒」标记数不小于6，你减1点体力上限，并从〖制衡〗〖集智〗〖放逐〗〖鬼才〗〖完杀〗中选择并获得其中X个技能(X为「忍戒」标记数-5)，然后失去技能〖忍戒〗，若以上技能未全部获得则获得技能〖极略〗",
        "hj_sn_lianpo":"连破",
        "hj_sn_lianpo_info":"一名角色的回合结束时，若你本回合内杀死过角色，则你可以进行一个额外的回合。",
        "hj_sn_jilue":"极略",
        "hj_sn_jilue_info":"当你造成或受到伤害后，你可以从〖制衡〗〖集智〗〖放逐〗〖鬼才〗〖完杀〗中选择并获得一个尚未获得的技能，当你获得以上所有技能后失去技能〖极略〗",
        "hj_sn_fangzhu":"放逐",
        "hj_sn_fangzhu_info":"当你受到伤害后，你可令一名其他角色摸X张牌（X为你已损失的体力值），然后该角色将武将牌翻面。",
        "hj_sn_guicai":"鬼才",
        "hj_sn_guicai_info":"在任意角色的判定牌生效前，你可以打出一张牌代替之。",
        "hj_sn_jizhi":"集智",
        "hj_sn_jizhi_info":"当你使用锦囊牌时，你可以摸一张牌。若此牌为基本牌，则你可以弃置之，然后令本回合手牌上限+1。",
        "hj_sn_wansha":"完杀",
        "hj_sn_wansha_info":"锁定技，你的回合内，除你以外，非濒死的角色不能使用【桃】。",
        "hj_sn_wansha2":"完杀",
        "hj_sn_wansha2_info":"",
        "hj_sn_zhiheng":"制衡",
        "hj_sn_zhiheng_info":"出牌阶段限三次，你可以弃置任意张牌并摸等量的牌，若你在发动〖制衡〗时弃置了所有手牌，则你多摸一张牌。",

        "hj_sn_shenlong":"神龙",
        "hj_sn_shenlong_info":"转换技，锁定技，阳：回合内，拥有技能〖龙胆〗和〖神威〗；阴：回合外，拥有技能〖龙魂〗和〖神躯〗",
        "hj_sn_longyou":"龙魂",
        "hj_sn_longyou_info":"     你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出。",
        "hj_sn_shenwei":"神威",
        "hj_sn_shenwei_info":"锁定技，你使用的红色【杀】视为【火杀】且无距离限制，你使用的黑色【杀】视为【雷杀】且在指定目标后获得目标的一张牌。",
        "hj_sn_longdan":"龙胆",
        "hj_sn_longdan_info":"你可以将一张♠牌当作【杀】使用或打出，♥牌当作【桃】使用，♣牌当作【无懈可击】使用，♦牌当作【闪】使用或打出。",
        "hj_sn_shenqu":"神躯",
        "hj_sn_shenqu_info":"锁定技，当你的手牌数小于4时，你将手牌摸至4张，且你的手牌上限为4。",
        
        "hj_sn_longnu":"龙怒",
        "hj_sn_longnu_info":"转换技，锁定技，阳：出牌阶段开始时，摸一张牌，然后本回合内你的红色手牌均视为【火杀】且无距离限制；阴：出牌阶段开始时，摸一张牌，然后本回合你的锦囊牌均视为【雷杀】且无使用次数限制。",
        "hj_sn_longwei":"龙威",
        "hj_sn_longwei_info":"锁定技，当你受到1点伤害或你使用的【杀】被抵消时，获得一个「龙威」标记，回合开始与结束时移除所有「龙威」标记并摸等量的牌。",
        "hj_sn_jieying":"结营",
        "hj_sn_jieying_info":"锁定技，游戏开始时或当你的武将牌重置时，你横置；所有已横置的角色手牌上限+2；结束阶段，你横置一名其他角色。",
        "hj_sn_tuogu":"托孤",
        "hj_sn_tuogu_info":"当你死亡时，可以令一名其他角色获得〖观星〗和〖放权〗",
        
        "hj_sn_qianxun":"谦逊",
        "hj_sn_qianxun_info":"每当一张延时锦囊牌或其他角色使用的普通锦囊牌生效时，若你是此牌的唯一目标，你可以将所有手牌置于你的武将牌上，若如此做，此回合结束时，你获得你武将牌上的所有牌。",
        "hj_sn_qianxun2":"谦逊",
        "hj_sn_ruya2_info":"",
        "hj_sn_junlue":"军略",
        "hj_sn_junlue_info":"锁定技，当你受到或造成伤害后，你获得等于伤害量的「军略」标记。出牌阶段开始时，若「军略」数量为：奇数，你可以对一名角色造成1点火焰伤害；偶数，你可以横置一名角色并弃置其区域内的一张牌。然后，若「军略」的数量超过7个，你可以移去全部「军略」并对所有其他角色造成1点火焰伤害。",
        "hj_sn_lianying":"连营",
        "hj_sn_lianying_info":"当你失去最后的手牌时，你可以令至多X名角色各摸一张牌（X为你此次失去的手牌数）。",
        "hj_sn_zhanhuo":"绽火",
        "hj_sn_zhanhuo_info":"锁定技，当你造成或受到火焰伤害时，获得等于伤害量的「绽火」标记。限定技，出牌阶段，你可以移去全部「绽火」，横置至多等量的角色(若目标已横置则取消其横置状态)，然后你对所有已横置的其他角色造成1点火焰伤害并弃置他们所有装备区内的牌。",
        
        "hj_sn_duorui":"夺锐",
        "hj_sn_duorui_info":"每回合限一次，当你对一名没有「夺锐」标记的其他角色造成伤害后，你可以选择该角色的一个技能(特殊技能除外)做出以下选择后获得之：1、减少1点体力上限；2、失去一个以此法获得的技能。若此做，直到该角色回合结束，其该技能失效。",
        "hj_sn_tuxi":"突袭",
        "hj_sn_tuxi_info":"摸牌阶段摸牌时，你可以少摸任意张牌，然后获得等量的角色的各一张手牌，摸牌阶段结束时，你可以重铸X张牌(X为你通过〖夺锐〗获得的技能数)。",
        "hj_sn_zhiti":"止啼",
        "hj_sn_zhiti_info":"锁定技，你攻击范围内已受伤角色的手牌上限-1。若场上已受伤的角色数：不小于1，你的手牌上限+1；不小于3，你于摸牌阶段开始时令额定摸牌数+1；不小于5，回合结束时，你废除一名角色的一个随机装备栏。",
        "hj_sn_xingtian":"刑天",
        "hj_sn_xingtian_info":"其他角色结束阶段，若其本回合造成至少2点伤害，你可以选择一项：1、增加1点体力上限(若你体力上限不小于5，此项不可选)；2、对一名其他角色造成1点雷电伤害。",
        
        "hj_sn_shenpo":"神魄",
        "hj_sn_shenpo_info":"锁定技，摸牌阶段多模一张牌，使用【杀】的次数+1，手牌上限+1。",
        "hj_sn_poxi":"魄袭",
        "hj_sn_poxi_info":"出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以弃置你与其手牌中的四张花色不同的牌，依此法弃置自己的牌数量为：0、减1点体力上限;1、你结束出牌阶段且本回合手牌上限-1;3、你回复1点体力;4、你摸四张牌。",
        "hj_sn_jianying":"劫营",
        "hj_sn_jianying_info":"结束阶段，你可以令一名其他角色获得技能〖神魄〗，其回合结束时失去技能〖神魄〗，且你可以获得其所有手牌。",
        "hj_sn_jijing":"极境",
        "hj_sn_jijing_info":"觉醒技，若你已通过〖劫营〗获得其他角色的手牌三次，你减少2点体力上限并摸两张牌，然后修改〖劫营〗",
        "hj_sn_jianying1":"劫营",
        "hj_sn_jianying1_info":"",
        "hj_sn_jianying2":"劫营",
        "hj_sn_jianying2_info":"结束阶段，你可以令一名其他角色获得技能〖神魄〗(其回合结束时，失去技能〖神魄〗)，然后你可以使一名其他角色获得「劫营」标记，拥有「劫营」标记的角色回合结束，你获得其所有手牌。",
        
        "hj_sn_chuyuan":"储元",
        "hj_sn_chuyuan_info":"一名角色受到伤害后，若你武将牌上「储」的数量小于体力上限，你可以令其摸一张牌。然后其将一张手牌置于你的武将牌上，称为「储」。",
        "hj_sn_dengji":"登极",
        "hj_sn_dengji_info":"觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后获得技能〖天行〗和〖奸雄〗",
        "hj_sn_yange":"燕歌",
        "hj_sn_yange_info":"每当你受到卡牌所造成的伤害时，你可以令与你距离为一的其他所有角色交给你一张牌。若如此做，你需将对你造成伤害的此牌交给本回合内你以此法获得过牌的其中一名角色。",
        
        "hj_sn_luoshen":"洛神",
        "hj_sn_luoshen_info":"准备阶段，你可以进行一定判定：若判定结果的花色不为♥️，你获得此牌并继续判定，直至出现♥️花色；若你因此技能而获得的牌数不大于2，结束阶段，你可以令一名其他角色翻面",
        "hj_sn_fanghua":"芳华",
        "hj_sn_fanghua_info":"锁定技，当一名其他角色将武将牌翻至背面后，其失去一点体力",
        "hj_sn_shenfu":"神赋",
        "hj_sn_shenfu_info":"回合结束时，若你的手牌数为：奇数，你可对一名其他角色造成1点伤害。若其死亡，你可重复此流程。偶数，你可选择一名本回合内未选择过的角色，你令其摸一张牌或弃置其一张手牌。若其手牌数等于体力值，你可重复此流程。",
        "hj_sn_qixian":"七弦",
        "hj_sn_qixian_info":"锁定技，你的手牌上限视为7。",

        //
      }
    },"神怒篇");
    //why???
  }
  if(config.hj_jilue&&config.hj_bingmou&&config.hj_hundun&&config.hj_luanshi){ //限定
    game.addCharacterPack({
      character:{
        "hj_xd_hunjiang♛zuozhe":["male","shen",4,["hj_xd_tiandu","hj_xd_tianji","hj_xd_yuance","hj_xd_qizuo","hj_xd_guimou"],[]],
        "hj_xd_hunbaonuzhanshen":["male","shen",6,["hj_xd_chitu","hj_xd_wushuang","hj_xd_aozhan","hj_xd_xiuluo","hj_xd_shenwei","hj_xd_shenji"],[]],
        "hj_xd_hunshenguiwuqian":["male","shen",6,["hj_xd_chitu","hj_xd_wushuang","hj_xd_aozhan","hj_xd_jiwu","hj_xd_shenqu"],[]],
        "hj_xd_hundaxianliangshi":["male","shen",6,["hj_xd_bujiao","hj_xd_taiping","hj_xd_yaohuo","hj_xd_sanzhi"],[]],
        "hj_xd_hunluanshimowang":["male","shen",6,["hj_xd_zhongyu","hj_xd_linnue","hj_xd_baozheng","hj_xd_hengxing","hj_xd_nishi"],[]],
        "hj_xd_hunweiwudadi":["male","shen",6,["hj_xd_weilue","hj_xd_xiongcai"],[]],
        "hj_xd_hunshuhanliedi":["male","shen",6,["hj_xd_xiaoxiong","hj_xd_zhangwu"],[]],
        "hj_xd_hunjinguozhizu":["male","shen",6,["hj_xd_bolue","hj_xd_jinji","hj_xd_biantian","hj_xd_tianyou"],[]],
        "hj_xd_hunchibihuoshen":["male","shen",6,["hj_xd_huoshen","hj_xd_honglian","hj_xd_xianyin"],[]],
        "hj_xd_hunshixuekuanglang":["male","shen",6,["hj_xd_kuanggu","hj_xd_shiao","hj_xd_fangu","hj_xd_kuangxi"],[]],
        "hj_xd_hunbubaishenhua":["male","shen",6,["hj_jl_tianji","hj_jl_jilve","hj_jl_nizhan","hj_jl_weizhen","hj_jl_danjing"],[]],
        "hj_xd_wu":["male","shen",4,["hj_xd_wuyou","hj_xd_yinyang","hj_xd_huchi","hj_xd_yuejie"],[]],
      },
      skill:{
        "hj_xd_tiandu":{
          trigger:{
            player:"judgeEnd",
          },
          frequent:function(event){
            if(event.result.card.name=='du') return false;
            //if(get.mode()=='guozhan') return false;
            return true;
          },
          check:function(event){
            if(event.result.card.name=='du') return false;
            return true;
          },
          filter:function(event,player){
            return get.position(event.result.card,true)=='o';
          },
          content:function(){
            player.gain(trigger.result.card,'gain2');
          },
        },
        "hj_xd_yuance":{
          trigger:{
            global:"damageEnd",
          },
          filter:function(event){
            return event.source&&event.source!=event.player&&event.source.isAlive()&&event.player.isAlive();
          },
          direct:true,
          content:function(){
            'step 0'
            var att1=get.attitude(player,trigger.player);
            var att2=get.attitude(player,trigger.source);
            var targets=player.getEnemies();
            var stop=false;
            for(var i=0;i<targets.length;i++){
              var skills=targets[i].getSkills();
              for(var j=0;j<skills.length;j++){
                if(get.tag(skills[j],'rejudge',targets[i])){
                  stop=true;break;
                }
              }
            }
            var rand=Math.random()<0.5?'选项一':'选项二';
            var sourcename=get.translation(trigger.source);
            var playername=get.translation(trigger.player);
            player.chooseControl('选项一','选项二','cancel2',function(){
              if(att1==0&&att2==0) return rand;
              if(att1*att2>=0){
                if(att1+att2>0){
                  return '选项二';
                }
                else{
                  return '选项一';
                }
              }
              else{
                if(trigger.player.isHealthy()&&trigger.source.isHealthy()) return rand;
                if(trigger.player.isHealthy()){
                  if(att1<0) return '选项二';
                  if(att1>0&&!stop) return '选项一';
                }
                if(trigger.source.isHealthy()){
                  if(att2<0) return '选项二';
                  if(att2>0&&!stop) return '选项一';
                }
                if(stop) return 'cancel2';
                return rand;
              }
            }).set('prompt',get.prompt('hj_xd_yuance')).set('choiceList',[
            '若判定结果为黑色，'+playername+'失去一点体力，否则'+sourcename+'失去一点体力',
            '若判定结果为红色，'+playername+'回复一点体力，否则'+sourcename+'回复一点体力'
            ]);
            'step 1'
            var att1=get.attitude(player,trigger.player);
            var att2=get.attitude(player,trigger.source);
            if(result.control=='选项一'){
              event.type=1;
              player.judge(function(card){
                if(get.color(card)=='black'){
                  if(att1>0) return -1;
                  if(att1<0) return 1;
                }
                else{
                  if(att2>0) return -1;
                  if(att2<0) return 1;
                }
                return 0;
              });
            }
            else if(result.control=='选项二'){
              event.type=2;
              player.judge(function(card){
                if(get.color(card)=='red'){
                  if(trigger.player.isDamaged()){
                    if(att1>0) return 1;
                    if(att1<0) return -1;
                  }
                }
                else{
                  if(trigger.source.isDamaged()){
                    if(att2>0) return 1;
                    if(att2<0) return -1;
                  }
                }
                return 0;
              });
            }
            else{
              event.finish();
            }
            'step 2'
            if(event.type==1){
              if(result.color=='black'){
                trigger.player.loseHp();
              }
              else{
                trigger.source.loseHp();
              }
            }
            else{
              if(result.color=='red'){
                trigger.player.recover();
              }
              else{
                trigger.source.recover();
              }
            }
          },
        },
        "hj_xd_qizuo":{
          trigger:{
            player:"useCardAfter",
          },
          filter:function(event,player){
            if(event.parent.name=='hj_xd_qizuo') return false;
            if(!event.targets||!event.card) return false;
            if(event.card&&event.card.name=='wuxie') return false;
            var type=get.type(event.card);
            if(type!='trick') return false;
            var card=game.createCard(event.card.name,event.card.suit,event.card.number,event.card.nature);
            var targets=event._targets||event.targets;
            for(var i=0;i<targets.length;i++){
              if(!targets[i].isIn()) return false;
              if(!player.canUse({name:event.card.name},targets[i],false,false)){
                return false;
              }
            }
            return true;
          },
          check:function(event,player){
            if(event.card.name=='tiesuo') return false;
            return true;
          },
          content:function(){
            var card=game.createCard(trigger.card.name,trigger.card.suit,trigger.card.number,trigger.card.nature);
            player.useCard(card,(trigger._targets||trigger.targets).slice(0));
          },
          ai:{
            threaten:1.3,
          },
        },
        "hj_xd_guimou":{
          mod:{
            targetEnabled:function (card,player,target){
              if(get.type(card)=='delay'&&player!=target){
                return false;
              }
            },
            wuxieRespondable:function (){
              return false;
            },
          },
          group:["hj_xd_guimou1","hj_xd_guimou2"],
          enable:"phaseUse",
          usable:4,
          content:function (){
            'step 0'
            var list={basic:[],equip:[],trick:[],delay:[]};
            for(var i=0;i<lib.inpile.length;i++){
              var name=lib.inpile[i];
              var info=lib.card[name];
              if(info.autoViewAs||name=='yuansuhuimie') continue;
              if(lib.filter.cardEnabled({name:name},player)){
                if(!list[info.type]){
                  list[info.type]=[];
                }
                list[info.type].push([get.translation(lib.card[name].type),'',name]);
              }
            }
            list.trick.sort(lib.sort.name);
            var dialog=ui.create.dialog('鬼谋',[list.trick,'vcard']);
            // for(var i in list){
            //   dialog.addText(get.translation(i)+'牌');
            //   dialog.add([list[i],'vcard']);
            // }
            var rand1=Math.random()<1/3;
            var rand2=Math.random()<0.5;
            var rand3=Math.random()<1/3;
            var rand4=Math.random()<1/3;
            player.chooseButton(dialog,true).ai=function(button){
              var name=button.link[2];                        
              if(player.hp<=1){
                switch(name){
                  case 'zhiliaobo':return 1;
                  case 'dunpaigedang':return 0.8;
                  case 'nanman':return 0.5;
                  default:return 0;
                }
              }
              if(rand4&&player.countCards('h')<=1){
                switch(name){
                  case 'zengbin':return 1;
                  case 'wuzhong':return 0.8;
                  default:return 0;
                }
              }
              if(player.hasSkill('qinglonglingzhu')){
                if(rand2) return name=='chiyuxi'?0.8:0;
                return name=='jingleishan'?0.8:0;
              }                        
              if(rand2) return name=='wanjian'?0.8:0;
              return name=='nanman'?0.8:0;
            }
            'step 1'
            if(result.bool){
              player.chooseUseTarget(result.links[0][2]);
            }
          },
        },
        "hj_xd_guimou1":{
          trigger:{
            player:"phaseDiscardBefore",
          },
          forced:true,
          content:function (){
            trigger.cancel();
          },
        },
        "hj_xd_guimou2":{
          enable:["chooseToUse","chooseToRespond"],
          priority:2019,
          viewAs:{
            name:"wuxie",
          },
          filterCard:function (){return false},
          selectCard:-1,
          mark:false,
          precontent:function (){
            player.draw(0);
          },
          prompt:"视为使用一张无懈可击",
          ai:{
            basic:{
              useful:[6,4],
              value:[6,4],
            },
            result:{
              player:1,
            },
            expose:0.2,
          },
        },
        "hj_xd_tianji":{
          trigger:{
            global:"phaseUseBegin",
          },
          direct:true,
          init:function(player){
            player.storage.pd=undefined;
          },
          content:function(){
            'step 0'
            var nh=player.num('h');
            var num=0;
            for(var i=0;i<game.players.length;i++){
              var np=game.players[i].num('h');
              if(np>nh) num++;
            }
            var cards=[];
            cards.push(ui.cardPile.firstChild);
            event.cards=cards;
            var dialog=ui.create.dialog('天机',event.cards,'hidden');
            dialog.classList.add('noselect');
            if(num){
              player.chooseControl('获得','替换','cancel',dialog).ai=function(){
                return '获得';
              }
            }
            else{
              player.chooseControl('替换','cancel',dialog).ai=function(){
                if(_status.currentPhase!==player){
                  if(get.type(cards[0])=='basic'&&(player.num('h',{type:'basic'})<player.num('h')/2)) return '替换';
                  if(get.type(cards[0])!='basic') return '替换';
                }
                if(_status.currentPhase==player){
                  if(get.type(cards[0])=='trick'&&player.hp<=player.maxHp/2) return '替换';  
                  if(get.type(cards[0])=='basic'&&player.hp>player.maxHp/2&&player.num('h',{type:'trick'})) return '替换'; 
                  if(get.type(cards[0])=='equip'&&player.num('e')<4)     return '替换'; 
                }
                if(get.type(cards[0])=='basic') player.storage.pd='basic';
                else player.storage.pd='trick';
                return 'cancel';
              }
            }
            "step 1"
            if(result.control=='获得'){
              player.logSkill('hj_xd_tianji');
              player.gain(event.cards,'draw');
              event.finish();
            }
            else if(result.control=='替换'){
              player.logSkill('hj_xd_tianji');
              player.chooseCard('选择一张牌置于牌堆顶','h',true).ai=function(card){
                if(_status.currentPhase==player){
                  if(player.hp<=player.maxHp/2&&player.num('h',{type:'basic'})){
                    return get.type(card)=='basic';
                  }                    
                  if(player.hp>player.maxHp/2&&player.num('h',{type:'trick'})){
                    return get.type(card)=='trick';
                  }
                }
                else{
                  return 15-ai.get.value(card);
                }
              }
            }
            else{
              event.finish();
            }
            'step 2'
            event.card=result.cards[0];
            if(get.type(result.cards[0])=='basic'){
              player.storage.pd='basic';
            }
            else{
              player.storage.pd='trick';
            }
            player.lose(result.cards,ui.special);
            var cardx=ui.create.card();
            cardx.classList.add('infohidden');
            cardx.classList.add('infoflip');
            player.$throw(cardx,1000);
            'step 3'
            game.delay(0.5);
            'step 4'
            if(event.card){
              event.card.fix();
              ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
              player.gain(event.cards,'draw');
            }
          },
        },

        "hj_xd_wushuang":{
          shaRelated:true,
          forced:true,
          locked:true,
          group:["wushuang1","wushuang2"],
        },
        "hj_xd_aozhan":{
          forced:true,
          locked:true,
          charlotte:true,
          group:["hj_xd_aozhan_wuqi","hj_xd_aozhan_fangju","hj_xd_aozhan_zuoji","hj_xd_aozhan_baowu"],
          subSkill:{
            wuqi:{
              mod:{
                cardUsable:function(card,player,num){
                  if(player.getEquip(1)&&card.name=='sha') return num+1;
                },
              },
              sub:true,
            },
            fangju:{
              trigger:{
                player:"damageBegin4",
              },
              forced:true,
              filter:function (event,player){
                return player.getEquip(2)&&event.num>1; 
              },
              content:function (){
                trigger.num=1; 
              },
              sub:true,
            },
            zuoji:{
              trigger:{
                player:"phaseDrawBegin",
              },
              forced:true,
              filter:function (event,player){
                return (player.getEquip(3)||player.getEquip(4)); 
              },
              content:function(){
                trigger.num++;
              },
              sub:true,
            },
            baowu:{
              trigger:{
                player:"phaseJudgeBefore",
              },
              forced:true,
              filter:function (event,player){
                return player.getEquip(5);
              },
              content:function (){
                trigger.cancel();
                game.log(player,'跳过了判定阶段');
              },
              sub:true,
            },
          },
        },
        "hj_xd_xiuluo":{
          trigger:{
            player:"phaseZhunbeiBegin",
          },
          direct:true,
          filter:function(event,player){
            return player.countCards('j')>0;
          },
          content:function(){
            "step 0"
            var next=player.discardPlayerCard(player,2,'hj','是否一张手牌来弃置一张花色相同的判定牌？');
            next.filterButton=function(button){
              var card=button.link;
              if(!lib.filter.cardDiscardable(card,player)) return false;
              if(ui.selected.buttons.length==0) return true;
              if(get.position(ui.selected.buttons[0].link)=='h'){
                if(get.position(card)!='j') return false;
              }
              if(get.position(ui.selected.buttons[0].link)=='j'){
                if(get.position(card)!='h') return false;
              }
              return get.suit(card)==get.suit(ui.selected.buttons[0].link)
            };
            next.ai=function(button){
              var card=button.link;
              if(get.position(card)=='h'){
                return 11-get.value(card);
              }
              if(card.name=='lebu') return 5;
              if(card.name=='bingliang') return 4;
              if(card.name=='guiyoujie') return 3;
              return 2;
            };
            next.logSkill='xiuluo';
            "step 1"
            if(result.bool&&player.countCards('j')) event.goto(0);
          },
        },
        "hj_xd_shenwei":{
          unique:true,
          trigger:{
            player:"phaseDrawBegin",
          },
          forced:true,
          content:function(){
            trigger.num+=Math.min(7,game.players.length-1);
          },
          mod:{
            maxHandcard:function(player,current){
              return current+Math.min(7,game.players.length-1);
            },
          },
        },
        "hj_xd_shenji":{
          mod:{
            selectTarget:function(card,player,range){
              if(range[1]==-1) return;
              if(card.name=='sha') range[1]+=2;
            },
            cardUsable:function(card,player,num){
              if(card.name=='sha') return num+1;
            },
          },
        },
        "hj_xd_chitu":{
          mod:{
            globalFrom:function(from,to,distance){
              return distance-3;
            },
          },
        },
        "hj_xd_shenqu":{
          //group:"shenqu2",
          trigger:{
            global:"phaseZhunbeiBegin",
          },
          filter:function(event,player){
            return player.countCards('h')<=player.maxHp;
          },
          frequent:true,
          content:function(){
            player.draw(4);
          },
        },
        "hj_xd_jiwu":{
          enable:"phaseUse",
          filter:function(event,player){
            if(player.countCards('h')==0) return false;
            if(!player.hasSkill('qiangxix')) return true;
            if(!player.hasSkill('retieji')) return true;
            if(!player.hasSkill('rexuanfeng')) return true;
            if(!player.hasSkill('wansha')) return true;
            return false;
          },
          filterCard:true,
          position:"he",
          check:function(card){
            if(get.position(card)=='e'&&_status.event.player.hasSkill('rexuanfeng')) return 16-get.value(card);
            return 7-get.value(card);
          },
          content:function(){
            'step 0'
            var list=[];
            if(!player.hasSkill('qiangxix')) list.push('qiangxix');
            if(!player.hasSkill('retieji')) list.push('retieji');
            if(!player.hasSkill('rexuanfeng')) list.push('rexuanfeng');
            if(!player.hasSkill('wansha')) list.push('wansha');
            if(list.length==1){
              player.addTempSkill(list[0]);
              event.finish();
            }
            else{
              player.chooseControl(list,function(){
                if(list.contains('rexuanfeng')&&player.countCards('he',{type:'equip'})) return 'rexuanfeng';
                if(!player.getStat().skill.qiangxix){
                  if(player.hasSkill('qiangxix')&&player.getEquip(1)&&list.contains('rexuanfeng')) return 'rexuanfeng';
                  if(list.contains('wansha')||list.contains('qiangxix')){
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                      if(players[i].hp==1&&get.attitude(player,players[i])<0){
                        if(list.contains('wansha')) return 'wansha';
                        if(list.contains('qiangxix')) return 'qiangxix';
                      }
                    }
                  }
                }
                if(list.contains('qiangxix')) return 'qiangxix';
                if(list.contains('wansha')) return 'wansha';
                if(list.contains('rexuanfeng')) return 'rexuanfeng';
                return 'retieji';
              }).set('prompt','选择获得一项技能直到回合结束');
            }
            'step 1'
            player.addTempSkill(result.control);
            player.popup(get.translation(result.control));
          },
          ai:{
            order:function(){
              var player=_status.event.player;
              if(player.countCards('e',{type:'equip'})) return 10;
              if(!player.getStat().skill.qiangxix){
                if(player.hasSkill('qiangxix')&&player.getEquip(1)&&!player.hasSkill('rexuanfeng')) return 10;
                if(player.hasSkill('wansha')) return 1;
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                  if(players[i].hp==1&&get.attitude(player,players[i])<0) return 10;
                }
              }
              return 1;
            },
            result:{
              player:function(player){
                if(player.countCards('e',{type:'equip'})) return 1;
                if(!player.getStat().skill.qiangxix){
                  if(player.hasSkill('qiangxix')&&player.getEquip(1)&&!player.hasSkill('rexuanfeng')) return 1;
                  if(!player.hasSkill('wansha')||!player.hasSkill('qiangxix')){
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                      if(players[i].hp==1&&get.attitude(player,players[i])<0) return 1;
                    }
                  }
                }
                return 0;
              },
            },
          },
        },

        "hj_xd_bujiao":{
          forced:true,
          unique:true,
          trigger:{
            global:"phaseUseBegin",
          },
          filter:function (event, player) {
            return event.player != player;
          },
          content:function () {
            var hs = trigger.player.get('he');
            if (hs.length) {
              player.gain(hs.randomGet(),trigger.player);
              trigger.player.draw();
            }
          },
        },
        "hj_xd_taiping":{
          trigger:{
            player:"damageEnd",
          },
          filter:function (event, player) {
            return event.num > 0;
          },
          direct:true,
          unique:true,
          content:function () {
            "step 0"
            event.num = trigger.num;
            "step 1"
            player.chooseTarget('选择1名目标令其获得1枚平印记', function (card, player, target) {
              return player != target
            }).ai = function (target) {
              return -ai.get.attitude(player, target);
            };
            "step 2"
            if (result.bool) {
              player.logSkill('hj_xd_taiping', result.targets, 'white');
              event.num--;
              if (!result.targets[0].skills.contains('hj_xd_taiping4')) {
                result.targets[0].addSkill('hj_xd_taiping4');
              }
              result.targets[0].storage['hj_xd_taiping']++;
              result.targets[0].storage['hj_xd_taiping4'] = result.targets[0].storage['hj_xd_taiping'];
              result.targets[0].syncStorage('hj_xd_taiping4');
              result.targets[0].markSkill('hj_xd_taiping4');
              if (event.num) {
                event.goto(1);
              }
              else {
                event.finish();
              }
            }
            else {
              event.finish();
            }
          },
        },
        "hj_xd_taiping4": {
          forced: true,
          popup: false,
          init: function (player) {
            player.storage['hj_xd_taiping'] = 0;
          },
          intro: {
            content: 'mark'
          },
          marktext: '平',
          mark: true,
          trigger: { player: 'phaseAfter' },
          filter: function (event, player) {
            return player.storage['hj_xd_taiping'] > 0;
          },
          content: function () {
            player.storage['hj_xd_taiping'] = 0;
            player.unmarkSkill('hj_xd_taiping4');
            player.removeSkill('hj_xd_taiping4');
          }
        },
        "hj_xd_yaohuo":{
          enable:"phaseUse",
          usable:1,
          direct:true,
          filterTarget:function (card, player, target) {
            return player != target && target.num('h') > 0 && player.num('h') >= target.num('h');
          },
          unique:true,
          content:function () {
            'step 0'
            player.line(target, 'green');
            var num = target.num('h');
            player.chooseToDiscard(num, 'he', true);
            player.chooseControl('获得手牌', '获得技能',
              ui.create.dialog('请选择一项', 'hidden')).ai = function () {
              if (player.num('h') <= 1) return '获得手牌';
              if (target.num('h') < 3) return '获得技能';
              if (target.num('h') >= 3) return '获得手牌';
            };
            'step 1'
            player.logSkill('hj_xd_yaohuo', target);
            if (result.control == '获得手牌') {
              player.gain(target.get('h'), target);
              target.$give(target.get('h'), player);
            }
            'step 2'
            if (result.control == '获得技能') {
              if (target.name && !target.classList.contains('unseen')) {
                var skills = lib.character[target.name][3];
              }
              if (target.name1 && !target.classList.contains('unseen')) {
                var skills2 = lib.character[target.name1][3];
              }
              if (target.name2 && !target.classList.contains('unseen2')) {
                var skills3 = lib.character[target.name2][3];
              }
              if (skills) {
                for (var j = 0; j < skills.length; j++) {
                  target.removeSkill(skills[j]);
                  var info = lib.skill[skills[j]];
                  if (!lib.translate[skills[j] + '_info']) continue;
                  if (info && info.unique) continue;
                  player.addTempSkill(skills[j], 'phaseAfter');
                }
              }
              if (skills2) {
                for (var j = 0; j < skills2.length; j++) {
                  target.removeSkill(skills2[j]);
                  var info = lib.skill[skills2[j]];
                  if (!lib.translate[skills2[j] + '_info']) continue;
                  if (info && info.unique) continue;
                  player.addTempSkill(skills2[j], 'phaseAfter');
                }
              }
              if (skills3) {
                for (var j = 0; j < skills3.length; j++) {
                  target.removeSkill(skills3[j]);
                  var info = lib.skill[skills3[j]];
                  if (!lib.translate[skills3[j] + '_info']) continue;
                  if (info && info.unique) continue;
                  player.addTempSkill(skills3[j], 'phaseAfter');
                }
              }
              target.storage.yaohuo = true;
            }
          },
          group:["hj_xd_yaohuo2"],
          ai:{
            order:9.5,
            result:{
              target:function (player, target) {
                if (target.num('h') < 3) return 0;
                return ai.get.attitude(player, target);
              },
            },
            expose:0.2,
          },
        },
        "hj_xd_yaohuo2":{
          trigger:{global:'phaseAfter'},
          forced:true,
          popup:false,	
          filter:function(event,player){
            var targets=[];
            var players=game.players.concat(game.dead);
            for(var j=0;j<players.length;j++){
              if(!players[j].storage.yaohuo) continue;
              targets.push(players[j]);
            } 
            if(targets.length) return true;
            return false;
          },						
          content:function(){
            var players=game.players.concat(game.dead);
            for(var i=0;i<players.length;i++){
              if(players[i]==player) continue;	
              if(players[i].classList.contains('unseen')) continue;
              if(players[i].classList.contains('unseen2')) continue;
              if(!players[i].storage.yaohuo) continue;
              if(players[i].name&&!players[i].classList.contains('unseen')){
                var skills=lib.character[players[i].name][3];
              }
              if(players[i].name1&&!players[i].classList.contains('unseen')){
                var skills2=lib.character[players[i].name1][3];
              }	
              if(players[i].name2&&!players[i].classList.contains('unseen2')){
                var skills3=lib.character[players[i].name2][3];
              }	
              if(skills){
                for(var j=0;j<skills.length;j++){
                  players[i].addSkill(skills[j]);		
                }
              }
              if(skills2){
                for(var j=0;j<skills2.length;j++){
                  players[i].addSkill(skills2[j]);		
                }
              }
              if(skills3){
                for(var j=0;j<skills3.length;j++){
                  players[i].addSkill(skills3[j]);		
                }
              }
            }
            for(var j=0;j<players.length;j++){
              if(!players[j].storage.yaohuo) continue;
              players[j].storage.yaohuo=false;
            }
          }			
        },
        "hj_xd_sanzhi":{
          enable:"phaseUse",
          usable:1,
          unique:true,
          complexCard:true,
          filterCard:function (card) {
            var type = get.type(card);
            for (var i = 0; i < ui.selected.cards.length; i++) {
              if (get.type(ui.selected.cards[i]) == type) return false;
            }
            return true;
          },
          selectCard:[1,3],
          position:"he",
          selectTarget:function (card) {
            if (ui.selected.targets.length > ui.selected.cards.length) {
              game.uncheck('target');
            }
            return ui.selected.cards.length;
          },
          filterTarget:function (card, player, target) {
            return player != target;
          },
          check:function (card) {
            return 5 - ai.get.value(card);
          },
          multiline:true,
          line:"green",
          content:function () {
            target.damage();
          },
          ai:{
            order:7.5,
            result:{
              target:function (player, target) {
                return ai.get.damageEffect(target, player);
              },
            },
            expose:0.2,
          },
        },

        "hj_xd_zhongyu":{
          enable:"phaseUse",
          filter:function (event, player) {
            return player.hp > 0 && (lib.filter.cardEnabled({ name: 'jiu' }, player, event) &&
              lib.filter.cardUsable({ name: 'jiu' }, player, event));
          },
          content:function () {
            player.loseHp();
            player.useCard({ name: 'jiu' }, player);
          },
          ai:{
            order:8,
            result:{
              player:function (player) {
                if (player.hp == 5) return 0;
                if (player.getStat().card.sha > 0) return 0;
                if (player.num('h', 'jiu')) return 0;
                if (!player.num('h', 'sha')) return 0;
                if (player.hasSkill('jiu')) return 0;
                var att = 0;
                for (var i = 0; i < game.players.length; i++) {
                  if (game.players[i] != player) {
                    att += ai.get.effect(game.players[i], { name: 'sha' }, player, player);
                  }
                }
                if (player.hp == player.maxHp && att > 0) return 1;
                if (player.num('h', 'tao') && att > 0) return 1;
                return player.hp - 2 && att > 0;
              },
            },
          },
        },
        "hj_xd_linnue":{
          trigger:{
            source:"damageEnd",
          },
          unique:true,
          filter:function (event) {
            return event.card && event.card.name == 'sha' &&
            _status.currentPhase == event.source && event.parent.parent.parent.parent.name == 'phaseUse';
          },
          check:function (event, player) {
            return ai.get.attitude(player, event.player) < 0;
          },
          content:function () {
            'step 0'
            player.judge(function (card) {
              if (get.color(card) == 'black') return 1;
              return 0;
            });
            "step 1"
            if (get.color(result.card) == 'black') {
              player.gain(result.card);
              player.$gain2(result.card);
              if (player.getStat().card.sha >= 1) {
                player.getStat().card.sha--;
              }
            }
          },
          ai:{
            expose:0.2,
          },
        },
        "hj_xd_baozheng":{
          direct:true,
          unique:true,
          trigger:{
            global:"phaseDrawAfter",
          },
          filter:function (event, player) {
            return event.player.num('h') > player.num('h');
          },
          content:function () {
            "step 0"
            trigger.player.chooseCard('交出一张方块牌或受到1点伤害', function (card) {
              return get.suit(card) == 'diamond';
            }).ai = function (card, player) {
              player = trigger.player;
              if (player.hp == player.maxHp) {
                return 6 - ai.get.value(card);
              }
              else if (player.hp == 1 && (!player.num('h', 'tao') || !player.num('h', 'jiu'))) {
                return 10 - ai.get.value(card);
              }
              return 7 - ai.get.value(card);
            };
            "step 1"
            player.logSkill('hj_xd_baozheng', trigger.player);
            if (result.bool) {
              player.gain(result.cards[0], trigger.player);
              trigger.player.$give(1, player);
            }
            else {
              trigger.player.damage(player);
            }
          },
          ai:{
            threaten:1.3,
          },
        },
        "hj_xd_nishi":{
          forced:true,
          unique:true,
          trigger:{
            player:"phaseDrawBegin",
          },
          content:function () {
            trigger.num = Math.min(5, player.hp);
          },
          ai:{
            threaten:function (player, target) {
              if (target.hp == target.maxHp) return 2;
            },
          },
        },
        "hj_xd_hengxing":{
          trigger:{
            global:"useCardToBegin",
          },
          filter:function (event, player) {
            if (event.player == player) return false;
            return event.target == player && event.card && event.card.name == 'sha' && player.num('he') >= player.hp;
          },
          unique:true,
          check:function (card, player) {
            if (player.hp > 2) return 0;
            if (player.num('h', 'shan')) return 0;
            if (player.hp > 1) return player.num('he') - 2;
            if (player.hp == 1) return 1;
            return 0;
          },
          content:function () {
            var num = player.hp;
            player.chooseToDiscard(num, 'he', true).set('ai', function (card) {
              return -ai.get.value(card);
            });
            trigger.untrigger();
            trigger.finish();
          },
        },

        "hj_xd_weilue":{
          trigger:{
            global:"drawAfter",
          },
          forced:true,
          logTarget:"player",
          filter:function(event,player){
            return event.result&&event.result.length>=2&&event.player!=player;
          },
          content:function(){
            'step 0'
            trigger.player.chooseCard(function(card){
              return trigger.result.contains(card);
            },'归心：交给'+get.translation(player)+'一张牌',true);
            'step 1'
            if(result.bool){
              player.gain(result.cards,trigger.player);
              trigger.player.$give(1,player);
            }
          },
        },
        "hj_xd_xiongcai":{
          unique:true,
          trigger:{
            player:"phaseAfter",
          },
          direct:true,
          init:function(player){
            player.storage.xiongcai=[];
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
            player.logSkill('xiongcai');
            var list=[];
            var list2=[];
            var players=game.players.concat(game.dead);
            for(var i=0;i<players.length;i++){
              list2.add(players[i].name);
              list2.add(players[i].name1);
              list2.add(players[i].name2);
            }
            for(var i in lib.character){
              if(lib.character[i][1]!='wei') continue;
              if(lib.character[i][4].contains('boss')) continue;
              if(lib.character[i][4].contains('minskin')) continue;
              if(player.storage.xiongcai.contains(i)) continue;
              if(list2.contains(i)) continue;
              list.push(i);
            }
            var name=list.randomGet();
            player.storage.xiongcai.push(name);
            player.markSkill('xiongcai');
            var skills=lib.character[name][3];
            for(var i=0;i<skills.length;i++){
              player.addSkill(skills[i]);
            }
            event.dialog=ui.create.dialog('<div class="text center">'+get.translation(player)+'发动了【雄才】',[[name],'character']);
            game.delay(2);
            'step 2'
            event.dialog.close();
          },
        },

        "hj_xd_xiaoxiong":{
          trigger:{
            global:"useCardAfter",
          },
          forced:true,
          unique:true,
          forceunique:true,
          filter:function(event,player){
            var type=get.type(event.card,'trick');
            return event.player!=player&&(type=='basic'||type=='trick');
          },
          content:function(){
            player.gain(game.createCard(trigger.card),'gain2');
          },
          group:"hj_xd_xiaoxiong_damage",
          subSkill:{
            damage:{
              trigger:{
                global:"phaseJieshuBegin",
              },
              forced:true,
              filter:function(event,player){
                return event.player!=player&&event.player.countUsed()==0;
              },
              logTarget:"player",
              content:function(){
                trigger.player.damage();
              },
              sub:true,
            },
          },
        },
        "hj_xd_zhangwu":{
          global:"hj_xd_zhangwu_ai",
          trigger:{
            player:"damageEnd",
          },
          check:function(event,player){
            return event.source&&event.source.isIn()&&get.damageEffect(event.source,player,player)>0;
          },
          filter:function(event){
            return event.source&&event.source.isAlive();
          },
          direct:true,
          logTarget:"source",
          content:function(){
            'step 0'
            player.chooseToDiscard(get.prompt('hj_xd_zhangwu',trigger.source),'he',[1,Infinity]).set('ai',function(card){
              if(get.attitude(player,target)<0) return 8-get.value(card);
              return 0;
            }).set('logSkill',['hj_xd_zhangwu',trigger.source]);
            'step 1'
            if(result.bool){
              var num=result.cards.length;
              var cnum=get.cnNumber(num);
              event.num=num;
              trigger.source.chooseToDiscard('he','章武：弃置'+cnum+'张牌，或取消并受到'+cnum+'点伤害',num).set('ai',function(card){
                if(!trigger.source.hasSkillTag('nodamage')) return 10-get.value(card);
                return 0;
              });
            }
            else{
              event.finish();
            }
            'step 2'
            if(!result.bool){
              trigger.source.damage(event.num);
            }
          },
          ai:{
            maixie:true,
            "maixie_hp":true,
            effect:{
              target:function(card,player,target){
                if(get.tag(card,'damage')&&get.attitude(target,player)<0&&player.countCards('he')<target.countCards('he')){
                  return [0,2];
                }
              },
            },
          },
        },
        "hj_xd_zhangwu_ai":{
          ai:{
            effect:{
              target:function(card,player,target){
                if(get.tag(card,'recover')&&card.name!='recover'){
                  for(var i=0;i<game.players.length;i++){
                    if(game.players[i].hasSkill('hj_xd_xiaoxiong')&&get.attitude(target,game.players[i])<0){
                      return 'zeroplayertarget';
                    }
                  }
                }
              }
            }
          }
        },

        "hj_xd_huoshen":{
          trigger:{
            player:"damageBegin1",
          },
          forced:true,
          unique:true,
          filter:function(event){
            return event.nature=='fire';
          },
          content:function(){
            trigger.cancel();
            player.recover();
          },
          ai:{
            effect:{
              target:function(card){
                if(get.tag(card,'fireDamage')){
                  return [0,2];
                }
              },
            },
          },
        },
        "hj_xd_honglian":{
          trigger:{
            player:"phaseJieshuBegin",
          },
          forced:true,
          unique:true,
          content:function(){
            "step 0"
            event.players=get.players(player);
            event.players.remove(player);
            player.draw(4);
            "step 1"
            if(event.players.length){
              event.players.shift().damage('fire');
              event.redo();
            }
          },
        },
        "hj_xd_xianyin":{
          trigger:{
            player:"loseEnd",
          },
          frequent:true,
          unique:true,
          filter:function(event,player){
            return _status.currentPhase!=player;
          },
          content:function(){
            "step 0"
            player.judge(function(card){
              return get.color(card)=='red'?1:0;
            });
            "step 1"
            if(result.bool){
              player.chooseTarget(true,'选择一个目标令其失去一点体力',function(card,player,target){
                return player!=target;
              }).ai=function(target){
                return Math.max(1,9-target.hp);
              }
            }
            else{
              event.finish();
            }
            "step 2"
            if(result.targets.length){
              player.line(result.targets);
              result.targets[0].loseHp();
            }
          },
          ai:{
            effect:{
              target:function(card){
                if(get.tag(card,'loseCard')){
                  return [0.5,1];
                }
              },
            },
          },
        },

        "hj_xd_bolue":{
          derivation:["qiangxi","hj_xd_qicai","luanji","hj_xd_quanheng"],
          enable:"phaseUse",
          usable:1,
          unique:true,
          content:function () {
            'step 0'
            player.judge(ui.special);
            'step 1'
            var mapping = {
              spade: ['hj_xd_qiangxi', 'qiangxi'],
              heart: ['hj_xd_qicai', 'hj_xd_qicai'],
              club: ['hj_xd_luanji', 'luanji'],
              diamond: ['hj_xd_quanheng', 'hj_xd_quanheng'],
            }
            var skillStrs = mapping[get.suit(result.card)];
            if (skillStrs) {
              game.trySkillAudio(skillStrs[0], player);
              player.addTempSkill(skillStrs[1]);
              game.log(player, `获得了技能【${lib.translate[skillStrs[1]]}】`);
            }
            player.gain(result.card);
            player.$gain2(result.card);
          },
          ai:{
            order:13,
            result:{
              player:1,
            },
            threaten:1.5,
          },
        },
        "hj_xd_jinji":{
          trigger:{
            player:"damageEnd",
          },
          unique:true,
          priority:10,
          filter:function (event, player) {
            return event.source != undefined && event.source.isAlive();
          },
          check:function (event, player) {
            var att = ai.get.attitude(player, event.source);
            return att < -1;
          },
          content:function () {
            "step 0"
            player.judge(function (card) {
              if (get.suit(card) == 'spade') return 1;
              if (get.color(card) == 'red') return 1.1;
              if (get.suit(card) == 'club') return 1.5;
              return 0;
            });
            "step 1"
            player.gain(result.card);
            player.$gain2(result.card);
            event.color = get.color(result.card);
            event.suit = get.suit(result.card);
            if (event.color == 'red') {
              if (trigger.source.num('he')) {
                player.choosePlayerCard('是否对' + get.translation(trigger.source) + '发动【反馈】？', trigger.source, ai.get.buttonValue, 'he');
                event.goto(2);
              }
              else {
                event.finish();
              }
            } else if (event.suit == 'club') {
              player.logSkill('hj_xd_fangzhu', trigger.source);
              trigger.source.draw(player.maxHp - player.hp);
              trigger.source.turnOver();
            } else if (event.suit == 'spade') {
              player.logSkill('hj_xd_ganglie', trigger.source);
              trigger.source.chooseToDiscard(2).set('ai', function (card) {
                if (card.name == 'tao') return -10;
                if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
              });
              event.goto(3);
            }
            "step 2"
            if (result.bool) {
              player.logSkill('hj_xd_fankui', trigger.source);
              player.gain(result.buttons[0].link, trigger.source);
              trigger.source.$give(1, player);
            }
            event.finish();
            "step 3"
            if (result.bool == false) {
              trigger.source.damage();
            }
          },
          ai:{
            maixie:true,
            effect:{
              target:function (card, player, target) {
                if (get.tag(card, 'damage')) {
                  if (player.skills.contains('jueqing')) return [1, -2];
                  if (!target.hasFriend()) return;
                  if (target.hp >= 4) return [1, get.tag(card, 'damage') * 2, 1, -get.tag(card, 'damage') * 2];
                  if (target.hp == 3) return [1, get.tag(card, 'damage') * 1.5, 1, -get.tag(card, 'damage') * 1.5];
                  if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5, 1, -get.tag(card, 'damage') * 0.5];
                }
              },
            },
          },
        },
        "hj_xd_biantian":{
          trigger:{
            global:"phaseJudgeBefore",
          },
          forced:true,
          filter:function (event, player) {
            if (event.player == player) return false;
            return event.player.isAlive();
          },
          unique:true,
          content:function () {
            'step 0'
            event.judgestr = '闪电';
            trigger.player.judge(function (card) {
              if (get.suit(card) == 'spade' && get.number(card) > 1 && get.number(card) < 10) return -6;
              return 0;
            }, event.judgestr);
            game.delay(2);
            'step 1'
            if (result.judge < 0) {
              trigger.player.damage(3, 'thunder', 'nosource');
            }
            else {
              event.finish();
            }
          },
        },
        "hj_xd_tianyou":{
          trigger:{
            player:"phaseEnd",
          },
          init:function (player) {
            player.storage.tianyou = false;
          },
          unique:true,
          intro:{
            content:"cards",
          },
          check:function (event, player) {
            return 1;
          },
          marktext:"佑",
          content:function () {
            "step 0"
            player.storage.tianyou = true;
            event.cards = get.cards(1);
            player.showCards(event.cards);
            "step 1"
            player.$gain2(event.cards);
            event.color = get.color(event.cards);
            var str = '';
            if (event.color == 'red') str += '红色';
            if (event.color == 'black') str += '黑色';
            player.storage['hj_xd_tianyou'] = event.cards;
            player.storage.tianyou2 = event.color;
            player.markSkill('hj_xd_tianyou');
            game.log(player, '将', str, '牌', event.cards, '置于武将牌上');
          },
          group:["hj_xd_tianyou2"],
        },
        "hj_xd_tianyou2":{
          trigger:{player:'phaseBegin'},
          filter:function(event,player){
            return player.storage.tianyou;
          },
          direct:true,
          unique:true,
          content:function(){
            player.storage.tianyou=false;
            player.discard(player.storage['hj_xd_tianyou']);
            player.unmarkSkill('hj_xd_tianyou');
            delete player.storage['hj_xd_tianyou'];
            delete player.storage.tianyou2;
          },  
          mod:{
            targetEnabled:function(card,player,target){
              if(get.color(card)==target.storage.tianyou2){         
                return false;
              }
            }
          },  
        },
        "hj_xd_qiangxi":{
          audio:['qiangxi',2],
          enable:'phaseUse',
          usable:1,
          unique:true,
          complexCard:true,
          filterCard:function(card){
            return get.subtype(card)=='equip1';
          },
          selectCard:[0,1],
          filterTarget:function(card,player,target){
            if(player==target) return false;
            return get.distance(player,target,'attack')<=1;
          },
          content:function(){
            "step 0"
            if(cards.length==0){
              player.loseHp();
            }
            "step 1"
            target.damage();
          },
          check:function(card){
            return 10-ai.get.value(card);
          },
          position:'he',
          ai:{
            order:8,
            result:{
              player:function(player,target){
                if(ui.selected.cards.length) return 0;
                if(player.hp>=target.hp) return -0.9;
                if(player.hp<=2) return -10;
                return -2;
              },
              target:function(player,target){
                if(!ui.selected.cards.length){
                  if(player.hp<2) return 0;
                  if(player.hp==2&&target.hp>=2) return 0;
                }
                return ai.get.damageEffect(target,player);
              }
            }
          },
          threaten:1.3
        },
        "hj_xd_qicai":{
          audio:['guidao1'],
          trigger:{player:'loseEnd'},
          frequent:true,
          filter:function(event,player){
            if(player.equiping) return false;
            for(var i=0;i<event.cards.length;i++){
              if(event.cards[i].original=='h'||event.cards[i].original=='e') return true;
            }
            return false;
          },
          content:function(){
            "step 0"
            player.judge(function(card){
              if(get.color(card)=='red') return 1;
              return 0;
            });
            "step 1"
            event.color=get.color(result.card);
            if(event.color=='red'){
              game.log(player,'的','【'+get.skillTranslation('hj_xd_qicai')+'】','判定成功');                
              player.draw();
            }else{
              game.log(player,'的','【'+get.skillTranslation('hj_xd_qicai')+'】','判定失败');
            }
          },
          ai:{
            threaten:0.8,
            effect:{
              target:function(card){
                if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
              }
            },
            noh:true,
            skillTagFilter:function(player,tag){
              if(tag=='noh'){
                if(player.num('h')!=1) return true;
              }
            }
          },
        },
        "hj_xd_luanji":{
          audio:true,
          enable:'phaseUse',
          viewAs:{name:'wanjian'},
          complexCard:true,
          filterCard:function(card,player){
            if(ui.selected.cards.length){
              return get.suit(card)==get.suit(ui.selected.cards[0]);
            }
            var cards=player.get('h');
            for(var i=0;i<cards.length;i++){
              if(card!=cards[i]){
                if(get.suit(card)==get.suit(cards[i])) return true;
              }
            }
            return false;
          },
          selectCard:2,
          check:function(card){
            return 6-ai.get.value(card);
          },
          ai:{
            basic:{
              order:10
            }
          },
        },
        "hj_xd_quanheng":{
          audio:['zhiheng',2],
          enable:'phaseUse',
          usable:1,
          filter:function(event,player){
            return player.num('h')>0;
          },
          chooseButton:{
            dialog:function(){
              var list=['wuzhong','sha'];
              list[0]=['trick','',list[0]];
              list[1]=['basic','',list[1]];
              return ui.create.dialog('权衡',[list,'vcard']);
            },
            filter:function(button,player){
              return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
            },
            check:function(button){
              var player=_status.event.player;
              var shaTarget=false;
              for(var i=0;i<game.players.length;i++){
                if(player.canUse('sha',game.players[i])&&ai.get.effect(game.players[i],{name:'sha'},player)>0){
                  shaTarget=true;
                }
              }
              if(shaTarget&&!player.num('h','sha')) return (button.link[2]=='sha')?1:-1;
              var hs=player.get('h');
              for(var i=0;i<hs.length;i++){
                if(5-ai.get.value(hs[i])){
                  return (button.link[2]=='wuzhong')?1:-1;
                }
              }
              return 0;
            },
            backup:function(links,player){
              return {
                filterCard:true,
                selectCard:[1,Infinity],
                audio:['hj_xd_zhiheng'],
                popname:true,
                complexCard:true,
                ai1:function(card){
                  if(ui.selected.cards.length>0) return -1;
                  return 5-ai.get.value(card);
                },
                viewAs:{name:links[0][2]},
                onuse:function(result,player){
                  if(lib.skill.hj_xd_quanheng_backup.viewAs.name=='wuzhong'){
                    player.storage.hj_xd_quanheng_wuzhong_takeEffect=false;
                    player.addSkill('hj_xd_quanheng_wuxie');
                  }
                }
              }
            },
            prompt:function(links,player){
              return '至少一张手牌当'+get.translation(links[0][2])+'使用';
            },
          },
          group:['hj_xd_quanheng_shaMiss'],
          subSkill:{
            shaMiss:{
              trigger:{player:'shaMiss'},
              forced:true,
              nopop:true,
              filter:function(event,player){
                return event.parent.skill=='hj_xd_quanheng_backup';
              },
              content:function(){
                player.draw(trigger.cards.length);
              }
            }
          },
          init:function(player){
            player.storage.hj_xd_quanheng_wuzhong_takeEffect=false;
          },
          ai:{
            order:8,
            result:{
              player:1,
            }
          }
        },
        "hj_xd_quanheng_wuxie":{
          group:['hj_xd_quanheng_wuxie_switch','hj_xd_quanheng_wuxie_state'],
          subSkill:{
            switch:{
              trigger:{global:'wuxieAfter'},
              forced:true,
              popup:false,
              content:function(){
                player.storage.hj_xd_quanheng_wuzhong_takeEffect=!player.storage.hj_xd_quanheng_wuzhong_takeEffect;
              }
            },
            state:{
              trigger:{player:'useCardAfter'},
              forced:true,
              popup:false,
              filter:function(event,player){
                return event.card.name=='wuzhong';
              },
              content:function(){
                'step 0'
                if(player.storage.hj_xd_quanheng_wuzhong_takeEffect){
                  player.draw(trigger.cards.length);
                }
                'step 1'
                player.removeSkill('hj_xd_quanheng_wuxie');
                player.storage.hj_xd_quanheng_wuzhong_takeEffect=false;
              }
            }
          }
        },

        "hj_xd_shiao":{
          trigger:{
            player:"phaseBegin",
          },
          direct:true,
          unique:true,
          filter:function (event, player) {
            return game.hasPlayer(function (current) {
              return current.countCards('h') < player.countCards('h');
            });
          },
          content:function () {
            player.chooseUseTarget(game.filterPlayer(function (current) {
              return current.countCards('h') < player.countCards('h');
            }), '###是否发动【恃傲】？###视为对一名手牌小于你的角色使用一张【杀】', { name: 'sha' }, false, 'nodistance').logSkill = 'hj_xd_shiao';
          },
          group:["hj_xd_shiao2"],
        },
        "hj_xd_fangu":{
          trigger:{
            player:"damageEnd",
          },
          forced:true,
          unique:true,
          priority:100,
          content:function () {
            "step 0"
            player.phase();
            "step 1"
            while (_status.event.name != 'phase') {
              _status.event = _status.event.parent;
            }
            _status.event.finish();
            _status.event.untrigger(true);
          },
        },
        "hj_xd_kuangxi":{
          trigger:{
            player:"useCard",
          },
          filter:function (event, player) {
            if (_status.currentPhase != player) return false;
            if (!event.targets || !event.card) return false;
            if (event.card.name == 'wuxie') return false;
            if (event.targets.length <= 1 && event.targets.contains(player)) return false;
            var type = get.type(event.card);
            if (type != 'trick') return false;
            return true;
          },
          check:function (event, player) {
            var att = 0;
            for (var i = 0; i < event.targets.length; i++) {
              if (event.targets[i] != player) {
                att += ai.get.effect(event.targets[i], { name: 'sha' }, player, player);
              }
            }
            return att > 1;
          },
          unique:true,
          content:function () {
            "step 0"
            trigger.untrigger();
            trigger.finish();
            "step 1"
            var list = [];
            for (var i = 0; i < trigger.targets.length; i++) {
              if (trigger.targets[i] != player) {
                list.push(trigger.targets[i]);
              }
            }
            player.useCard({ name: 'sha' }, list, false);
          },
          ai:{
            effect:{
              player:function (card, player, target) {
                if (get.type(card) == 'trick') return [1, 3];
              },
            },
          },
        },
        "hj_xd_kuanggu":{
          trigger:{
            source:"damageSource",
          },
          filter:function(event,player){
            return get.distance(player,event.player)<=1&&event.num>0;
          },
          direct:true,
          audio:"kuanggu",
          audioname:["re_weiyan","ol_weiyan"],
          content:function(){
            'step 0'
            event.num=trigger.num;
            'step 1'
            player.chooseDrawRecover(get.prompt(event.name)).set('logSkill',event.name).set('prompt2','摸一张牌或回复1点体力');
            'step 2'
            if(result.control!='cancel2'){
              event.num--;
              if(event.num>0){
                event.goto(1);
              }
            }
          },
        },
        "hj_xd_shiao2":{
          mod:{
            targetInRange:function(){
              return true;
            }
          }
        },
        "hj_xd_shiao3":{
          audio:['shiao2'],
          trigger:{player:'phaseEnd'},
          direct:true,
          unique:true,
          content:function(){
            "step 0"
            player.addSkill('hj_xd_shiao2');
            player.chooseTarget('是否发动【恃傲】？',function(card,player,target){
              if(player==target) return false;
              if(target.num('h')<player.num('h')) return false; 
              return player.canUse({name:'sha'},target);
            }).ai=function(target){
              return ai.get.effect(target,{name:'sha'},_status.event.player);
            }
            "step 1"
            if(result.bool){
              player.logSkill('hj_xd_shiao3',result.targets);
              player.useCard({name:'sha'},result.targets[0],false);
            }
            player.removeSkill('hj_xd_shiao2');
          }   
        },

        "hj_xd_wuyou":{
          beigebeige:"ext:魂将补全:2",
          locked:true,
          subSkill:{
            discard:{
              trigger:{
                global:"phaseEnd",
              },
              audio:"hj_xd_wuyou",
              forced:true,
              filter:function(event,player){
                if(_status.currentPhase!=player){
                  var he=player.getCards('h');
                  var bool=false;
                  player.getHistory('gain',function(evt){
                    if(!bool&&evt&&evt.cards){
                      for(var i=0;i<evt.cards.length;i++){
                        if(he.contains(evt.cards[i])) bool=true;break;
                      }
                    }
                  });
                  return bool;
                }
                return false;
              },
              content:function(){
                var he=player.getCards('h');
                var list=[];
                player.getHistory('gain',function(evt){
                  if(evt&&evt.cards){
                    for(var i=0;i<evt.cards.length;i++){
                      if(he.contains(evt.cards[i])) list.add(evt.cards[i]);
                    }
                  }
                });
                player.$throw(list,1000);
                player.lose(list,ui.discardPile,'visible');
                game.log(player,'将',list,'置入弃牌堆');
              },
              sub:true,
            },
            mark:{
              trigger:{
                player:"gainBegin",
                global:"phaseBeginStart",
              },
              silent:true,
              filter:function(event,player){
                return event.name!='gain'||player!=_status.currentPhase;
              },
              content:function(){
                if(trigger.name=='gain') trigger.gaintag.add('hj_xd_wuyou');
                else player.removeGaintag('hj_xd_wuyou');
              },
              sub:true,
              forced:true,
              popup:false,
            },
            draw:{
              trigger:{
                player:"gainAfter",
              },
              audio:"hj_xd_wuyou",
              forced:true,
              filter:function(event,player){
                if(_status.currentPhase!=player) return false;
                return event.getParent(2).name!='hj_xd_wuyou_draw';
              },
              content:function(){
                player.draw('nodelay');
              },
              sub:true,
            },
          },
          ai:{
            threaten:1.2,
            nogain:1,
            skillTagFilter:function(player){
              return player!=_status.currentPhase;
            },
          },
          group:["hj_xd_wuyou_draw","hj_xd_wuyou_discard","hj_xd_wuyou_mark"],
        },
			"hj_xd_yinyang":{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					'step 0'
					trigger.changeToZero();
					var cards=[];
					var card1=get.cardPile2(function(card){
						return get.color(card,false)=='red';
					});
					if(card1) cards.push(card1);
					var card2=get.cardPile2(function(card){
						return get.color(card,false)=='black';
					});
					if(card2) cards.push(card2);
					if(cards.length) player.gain(cards,'gain2');
					'step 1'
					game.updateRoundNumber();
					player.chooseControl('red','black').set('prompt','偏宠：请选择一种颜色。直至你的下回合开始时，失去该颜色的一张牌后，从牌堆获得另一种颜色的一张牌。').set('ai',function(){
						var red=0,black=0;
						var player=_status.event.player;
						var cards=player.getCards('he');
						for(var i of cards){
							var add=1;
							var color=get.color(i,player);
							if(get.position(i)=='e') add=0.5;
							else if(get.name(i,player)!='sha'&&player.hasValueTarget(i)) add=1.5;
							if(color=='red') red+=add;
							else black+=add;
						}
						if(black>red) return 'black';
						return 'red';
					});
					'step 2'
					player.storage.hj_xd_yinyang2=result.control;
					player.addTempSkill('hj_xd_yinyang2',{player:'phaseBeginStart'});
					player.popup(result.control,result.control=='red'?'fire':'thunder');
					game.log(player,'声明了','#y'+get.translation(result.control));
				},
				ai:{
					threaten:4.8,
				},
			},
			"hj_xd_yinyang2":{
				audio:'hj_xd_yinyang',
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter'],
				},
				forced:true,
				charlotte:true,
				onremove:true,
				filter:function(event,player){
					var evt=event.getl(player);
					if(!evt||!evt.cards2||!evt.cards2.length) return false;
					for(var i of evt.cards2){
						if(get.color(i,player)==player.storage.hj_xd_yinyang2) return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var num=trigger.getl(player).cards2.filter(function(card){
						return get.color(card,player)==player.storage.hj_xd_yinyang2;
					}).length;
					var cards=[];
					while(num--){
						var card=get.cardPile2(function(card){
							return !cards.contains(card)&&get.color(card,false)!=player.storage.hj_xd_yinyang2;
						});
						if(card) cards.push(card);
						else break;
					}
					if(cards.length) player.gain(cards,'gain2');
					else event.finish();
					'step 1'
					game.updateRoundNumber();
				},
				mark:true,
				intro:{
					content:'失去一张$牌后，从牌堆中获得一张与此牌颜色不同的牌',
				},
			},
        "hj_xd_huchi":{
          locked:false,
          mod:{
            aiOrder:function(player,card,num){
              if(typeof card=='object'&&player==_status.currentPhase){
                var evt=player.getLastUsed();
                if(evt&&evt.card&&get.color(evt.card)!='none'&&get.color(card)!='none'&&get.color(evt.card)!=get.color(card)){
                  return num+10;
                }
              }
            },
          },
          audio:"ext:魂将补全:2",
          trigger:{
            player:"useCard",
          },
          frequent:true,
          filter:function(event,player){
            if(_status.currentPhase!=player) return false;
            var evt=player.getLastUsed(1);
            if(!evt) return false;
            var color1=get.color(evt.card);
            var color2=get.color(event.card);
            return color1&&color2&&color1!='none'&&color2!='none'&&color1!=color2;
          },
          content:function(){
            player.draw();
          },
          ai:{
            threaten:3,
          },
        },
        "hj_xd_yuejie":{
          enable:"phaseUse",
          audio:"ext:魂将补全:2",
          filter:function(event,player){
            return (player.getStat().skill.liji||0)<(event.liji_num||0);
          },
          onChooseToUse:function(event){
            if(game.online) return;
            var num=0;
            var evt2=event.getParent();
            if(!evt2.liji_all) evt2.liji_all=(game.players.length>4?8:4);
            game.getGlobalHistory('cardMove',function(evt){
              if(evt.name=='cardsDiscard'||(evt.name=='lose'&&evt.position==ui.discardPile)) num+=evt.cards.length;
            });
            event.set('liji_num',Math.floor(num/evt2.liji_all));
          },
          filterCard:true,
          position:"he",
          check:function(card){
            var val=get.value(card);
            if(!_status.event.player.getStorage('refenyin_mark').contains(get.suit(card))) return 12-val;
            return 8-val;
          },
          filterTarget:function(card,player,target){
            return player!=target;
          },
          content:function(){
            target.damage('nocard');
          },
          ai:{
            order:1,
            result:{
              target:-1.5,
            },
            tag:{
              damage:1,
            },
          },
        },
      },
      translate:{
        "hj_xd_hunjiang♛zuozhe":"♛随缘",
        "hj_xd_hunbaonuzhanshen":"魂暴怒战神",
        "hj_xd_hunshenguiwuqian":"魂神鬼无前",
        "hj_xd_hundaxianliangshi":"魂大贤良师",
        "hj_xd_hunluanshimowang":"魂乱世魔王",
        "hj_xd_hunweiwudadi":"魂魏武大帝",
        "hj_xd_hunshuhanliedi":"魂蜀汉烈帝",
        "hj_xd_hunjinguozhizu":"魂晋国之祖",
        "hj_xd_hunchibihuoshen":"魂赤壁火神",
        "hj_xd_hunshixuekuanglang":"魂嗜血狂狼",
        "hj_xd_hunbubaishenhua":"魂不败神话",
        "hj_xd_wu":"♛无",



        "hj_xd_tiandu":"天妒",
        "hj_xd_tiandu_info":"当你的判定牌生效后，你可以获得之。",
        "hj_xd_yuance":"远策",
        "hj_xd_yuance_info":"每当一名角色受到其他角色的伤害，你可以选择一项并进行一次判定：1. 若结果为黑色，受伤害角色失去一点体力，否则伤害来源失去一点体力；2. 若结果为红色，受伤害角色回复一点体力，否则伤害来源回复一点体力",
        "hj_xd_qizuo":"奇佐",
        "hj_xd_qizuo_info":"当你使用的普通锦囊牌结算完毕后，你可以视为额外在发动一次该锦囊牌。",
        "hj_xd_guimou":"鬼谋",
        "hj_xd_guimou_info":"<li>出牌阶段限四次，你可以视为使用一张不可被无懈的锦囊。</br><li>你跳过弃牌阶段且不能成为延时锦囊的目标。</br><li>你可以在需要的情况下视为使用一张无懈可击。",
        "hj_xd_guimou1":"鬼谋",
        "hj_xd_guimou1_info":"",
        "hj_xd_guimou2":"鬼谋",
        "hj_xd_guimou2_info":"锁定技，你跳过弃牌阶段；并且不能成为延时类锦囊的目标；你可以在合理的情况下视为使用了一张【无懈可击】",
        "hj_xd_tianji":"天机",
        "hj_xd_tianji_info":"任一角色的出牌阶段开始时，你可以观看牌堆顶的一张牌，然后你可以选择一项：用一张手牌替换之；若你的手牌数不是全场最多的(或之一)，你可以获得之。",

        "hj_xd_wushuang":"无双",
        "hj_xd_wushuang_info":"锁定技，当你使用【杀】或【决斗】指定目标后，你令此牌需要依次使用或打出两张【闪】或【杀】响应。",
        "hj_xd_aozhan":"鏖战",
        "hj_xd_aozhan_info":"锁定技，若你装备区内有：武器牌，你可以多使用一张【杀】；防具牌，防止你受到的超过1点的伤害；坐骑牌，摸牌阶段多摸一张牌；宝物牌，跳过你的判定阶段。",
        "hj_xd_xiuluo":"修罗",
        "hj_xd_xiuluo_info":"准备阶段，你可以弃置一张牌，然后弃置你判定区内一张同花色的牌。你可以重复此流程。",
        "hj_xd_shenwei":"神威",
        "hj_xd_shenwei_info":"锁定技，摸牌阶段，你额外摸X张牌，你的手牌上限+X（X为场上其他角色的数目且至多为7）",
        "hj_xd_shenji":"神戟",
        "hj_xd_shenji_info":"锁定技，你使用【杀】指定的目标数上限+2，次数上限+1。",
        "hj_xd_chitu":"赤兔",
        "hj_xd_chitu_info":"锁定技，你计算与其他角色的距离时-3。",
        "hj_xd_shenqu":"神躯",
        "hj_xd_shenqu_info":"每名角色的准备阶段，若你的手牌数少于或等于你的体力上限数，你可以摸四张牌",
        "hj_xd_jiwu":"极武",
        "hj_xd_jiwu_info":"出牌阶段，你可以弃置一张牌，然后获得一项：“强袭”、“铁骑”(界)、“旋风”、“完杀”，直到回合结束",

        "hj_xd_bujiao":"布教",
        "hj_xd_bujiao_info":"锁定技，其他角色出牌阶段开始时，该角色须交给你1张手牌，然后摸1张牌",
        "hj_xd_taiping":"太平",
        "hj_xd_taiping_info":"每当你受到1点伤害后，你可以令1名其他角色获得1枚‘平’标记，其他角色每有1枚‘平’标记，手牌上限便-1，1名角色回合结束后，弃置其拥有的所有‘平’标记",
        "hj_xd_taiping4":"太平",
        "hj_xd_taiping4_info":"",
        "hj_xd_yaohuo":"妖惑",
        "hj_xd_yaohuo_info":"出牌阶段限1次，你可以指定1名有手牌的其他角色弃置与其手牌等量的牌，然后选择1项：1、获得其所有手牌；2、令其失去所有技能你获得之(你不能获得主公技，限定技，觉醒技)直到回合结束",
        "hj_xd_sanzhi":"三治",
        "hj_xd_sanzhi_info":"出牌阶段限1次，你可以弃置任意类型不同的牌各1张并对等量的其他角色各造成1点伤害",

        "hj_xd_zhongyu":"纵欲",
        "hj_xd_zhongyu_info":"出牌阶段，你可以主动失去1点体力，视为使用1张【酒】",
        "hj_xd_linnue":"凌虐",
        "hj_xd_linnue_info":"出牌阶段，你每使用【杀】对目标角色造成1次伤害，可以进行1次判定， 若结果为黑色则获得该判定牌且该【杀】不计入每回合使用限制",
        "hj_xd_baozheng":"暴政",
        "hj_xd_baozheng_info":"锁定技，其他角色摸牌阶段结束时，若该角色手牌数大于你，须执行下列1项：给你1张方块牌或受到你造成的1点伤害",
        "hj_xd_nishi":"逆施",
        "hj_xd_nishi_info":"锁定技，摸牌阶段，你摸x张牌(x为你的当前体力值且至多为6)",
        "hj_xd_hengxing":"横行",
        "hj_xd_hengxing_info":"当其他角色使用【杀】指定你为目标时，你可以弃置x张牌(x为你当前体力值)，则该【杀】对你无效",

        "hj_xd_weilue":"伟略",
        "hj_xd_weilue_info":"锁定技，其他角色摸牌时，若摸牌数不少于2，须将摸到的牌中的一张交给你",
        "hj_xd_xiongcai":"雄才",
        "hj_xd_xiongcai_info":"锁定技，你在回合结束后随机获得一个魏势力角色的所有技能",

        "hj_xd_xiaoxiong":"枭雄",
        "hj_xd_xiaoxiong_info":"锁定技，每当一名其他角色使用一张基本牌或锦囊牌，你获得一张与之同名的牌；在一名其他角色的结束阶段，若其本回合没有使用牌，你对其造成一点伤害",
        "hj_xd_zhangwu":"章武",
        "hj_xd_zhangwu_info":"每当你受到一次伤害，你可以弃置任意张牌并令伤害来源选择一项：弃置等量的牌，或受到等量的伤害",

        "hj_xd_huoshen":"火神",
        "hj_xd_huoshen_info":"锁定技，你防止即将受到的火焰伤害，改为回复1点体力",
        "hj_xd_honglian":"红莲",
        "hj_xd_honglian_info":"锁定技，结束阶段，你摸四张牌，并对所有敌人造成一点火焰伤害",
        "hj_xd_xianyin":"仙音",
        "hj_xd_xianyin_info":"每当你于回合外失去牌，你可以进行一次判定，若为红色，你令一名敌人失去一点体力",

        "hj_xd_bolue":"博略",
        "hj_xd_bolue_info":"出牌阶段限一次，你可以进行判定并获得判定牌，并根据结果获得以下技能直到本回合结束:红桃：奇才；方块：权衡；黑桃：强袭；梅花：乱击",
        "hj_xd_jinji":"忍忌",
        "hj_xd_jinji_info":"每当你受到伤害时，你可以进行判定并获得判定牌，并根据判定结果视为你对伤害来源发动以下技能:红桃或方片：反馈；黑桃：刚烈；梅花：放逐。",
        "hj_xd_biantian":"变天",
        "hj_xd_biantian_info":"锁定技，其他角色的判定阶段开始前，需先进行一次额外的闪电判定",
        "hj_xd_tianyou":"天佑",
        "hj_xd_tianyou_info":"回合结束阶段开始时，你可以把牌堆顶的一张牌置于你的武将牌上，称为【佑】。直到你的下个回合开始时，将之置入弃牌堆。当你的武将牌上有牌时，你不能成为与【佑】颜色相同牌的目标",
        "hj_xd_tianyou2":"天佑",
        "hj_xd_tianyou2_info":"",
        "hj_xd_qiangxi":"强袭",
        "hj_xd_qiangxi_info":"出牌阶段，你可以自减一点体力或弃一张武器牌，然后你对你攻击范围内的一名角色造成一点伤害，每回合限一次",
        "hj_xd_qicai":"奇才",
        "hj_xd_qicai_info":"每当你失去一次牌即可进行一次判定，若为红色，你可以摸一张牌",
        "hj_xd_luanji":"乱击",
        "hj_xd_luanji_info":"出牌阶段，你可以将任意两张相同花色的手牌当【万箭齐发】使用",
        "hj_xd_quanheng":"权衡",
        "hj_xd_quanheng_info":"出牌阶段限一次，你可以将至少一张手牌当一张【无中生有】或【杀】使用，若你以此法使用的牌被【无懈可击】或【闪】响应时，你摸等量的牌",
        "hj_xd_quanheng_wuxie":"权衡",
        "hj_xd_quanheng_wuxie_info":"",

        "hj_xd_shiao":"恃傲",
        "hj_xd_shiao_info":"回合开始阶段开始时，你可以视为对手牌数少于你的一名其他角色使用1张【杀】；回合结束阶段开始时你可以视为对手牌数大于你的1名其他角色使用1张【杀】",
        "hj_xd_fangu":"反骨",
        "hj_xd_fangu_info":"锁定技，每当你受到1次伤害后，当前回合结束，你执行1个额外回合",
        "hj_xd_kuangxi":"狂袭",
        "hj_xd_kuangxi_info":"出牌阶段，当你使用非延时锦囊牌指定其他角色为目标后，你可以终止此牌的结算，改为视为对这些目标依次使用1张【杀】(不计入出牌阶段的使用限制)",
        "hj_xd_kuanggu":"狂骨",
        "hj_xd_kuanggu_info":"当你对距离1以内的一名角色造成1点伤害后，你可以回复1点体力或摸一张牌。",
        "hj_xd_shiao2":"恃傲",
        "hj_xd_shiao2_info":"",
        "hj_xd_shiao3":"恃傲",
        "hj_xd_shiao3_info":"",

        "hj_xd_wuyou":"无有",
        "hj_xd_wuyou_info":"锁定技，你的回合外，你获得的牌均会在当前回合结束后置入弃牌堆；你的回合内，当你不因〖无有〗而获得牌时，你摸一张牌。",
        "hj_xd_yinyang":"阴阳",
        "hj_xd_yinyang_info":"摸牌阶段开始时，你可放弃摸牌。若如此做，你从牌堆中获得一张红色牌和一张黑色牌。然后你选择一种颜色。你的下回合开始前，当你失去该颜色的一张牌后，你从牌堆中获得另一种颜色的一张牌。",
        "hj_xd_yinyang2":"阴阳",
        "hj_xd_yinyang2_info":"",
        "hj_xd_huchi":"互斥",
        "hj_xd_huchi_info":"你的回合内，当你使用牌时，若此牌与你于此回合内使用的上一张牌的颜色不同，则你可以摸一张牌。",
        "hj_xd_yuejie":"越界",
        "hj_xd_yuejie_info":"出牌阶段限X次，你可以弃置一张牌并对一名其他角色造成1点伤害。（X为本回合内进入过弃牌堆的卡牌数除以8，若场上人数小于5则改为除以4，向下取整）",

        //
      },
    },"限定篇");
    //why???
  }
},precontent:function (){

},help:{},config:{
  "hj_jilue":{"name":"极略篇","init":true},
  "hj_bingmou":{"name":"兵谋篇","init":true},
  "hj_hundun":{"name":"混沌篇","init":false},
  "hj_luanshi":{"name":"乱世篇","init":false},
  "hj_shennu":{"name":"神怒篇","init":false},
},package:{
  character:{
    character:{
    },
    translate:{
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
    },
    translate:{
    },
  },
  intro:"",
  author:"随缘，无",
  diskURL:"",
  forumURL:"",
  version:"1.0",
},files:{"character":[],"card":[],"skill":[]}}})