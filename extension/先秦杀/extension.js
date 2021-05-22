game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"先秦杀",content:function (config,pack){
    //新建势力名//
lib.group.push('秦');    lib.translate.秦='秦';
lib.group.push('全');   lib.translate.全='全';
lib.group.push('越');   lib.translate.越='越';
lib.group.push('宋');   lib.translate.宋='宋';
lib.group.push('赵');   lib.translate.赵='赵';
lib.group.push('陈');   lib.translate.陈='陈';
lib.group.push('韩');   lib.translate.韩='韩';
lib.group.push('曹');    lib.translate.曹='曹';
lib.group.push('燕');    lib.translate.燕='燕';
lib.group.push('齐');    lib.translate.齐='齐';
lib.group.push('邹');    lib.translate.邹='邹';
lib.group.push('楚');    lib.translate.楚='楚';
lib.group.push('卫');    lib.translate.卫='卫';
lib.group.push('郑');    lib.translate.郑='郑';
lib.group.push('鲁');    lib.translate.鲁='鲁';
lib.group.push('周');    lib.translate.周='周';
//——十周年UI武将名背景——//
        var tenUi=document.createElement('style');
        tenUi.innerHTML=".player>.camp-zone[data-camp='秦']>.camp-back {background: linear-gradient(to bottom, rgb(255,194,25), rgb(255,194,25));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='全']>.camp-back {background: linear-gradient(to bottom, rgb(189,189,189), rgb(189,189,189));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='越']>.camp-back {background: linear-gradient(to bottom, rgb(182,103,46), rgb(182,103,46));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='宋']>.camp-back {background: linear-gradient(to bottom, rgb(47,255,143), rgb(47,255,143));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='赵']>.camp-back {background: linear-gradient(to bottom, rgb(224,147,233), rgb(224,147,233));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='陈']>.camp-back {background: linear-gradient(to bottom, rgb(240,149,83), rgb(240,149,83));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='韩']>.camp-back {background: linear-gradient(to bottom, rgb(254,149,255), rgb(254,149,255));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='曹']>.camp-back {background: linear-gradient(to bottom, rgb(255,194,25), rgb(255,194,25));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='燕']>.camp-back {background: linear-gradient(to bottom, rgb(255,194,25), rgb(255,194,25));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='齐']>.camp-back {background: linear-gradient(to bottom, rgb(255,194,25), rgb(255,194,25));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='邹']>.camp-back {background: linear-gradient(to bottom, rgb(255,194,25), rgb(255,194,25));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='楚']>.camp-back {background: linear-gradient(to bottom, rgb(255,194,25), rgb(255,194,25));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='卫']>.camp-back {background: linear-gradient(to bottom, rgb(255,194,25), rgb(255,194,25));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='郑']>.camp-back {background: linear-gradient(to bottom, rgb(255,194,25), rgb(255,194,25));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='鲁']>.camp-back {background: linear-gradient(to bottom, rgb(255,194,25), rgb(255,194,25));}";
        tenUi.innerHTML=".player>.camp-zone[data-camp='周']>.camp-back {background: linear-gradient(to bottom, rgb(255,194,25), rgb(255,194,25));}";
        
//——十周年UI势力——//
tenUi.innerHTML+=".player>.camp-zone[data-camp='秦']>.camp-name {text-shadow: 0 0 5px rgb(255,194,25), 0 0 10px rgb(255, 194, 25), 0 0 15px rgb(255, 194, 25);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='全']>.camp-name {text-shadow: 0 0 5px rgb(223,223,223), 0 0 10px rgb(223, 223, 223), 0 0 15px rgb(223, 223, 223);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='越']>.camp-name {text-shadow: 0 0 5px rgb(182, 103, 46), 0 0 10px rgb(182, 103, 46), 0 0 15px rgb(182, 103, 46);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='宋']>.camp-name {text-shadow: 0 0 5px rgb(47, 255, 143), 0 0 10px rgb(47, 255, 143), 0 0 15px rgb(47, 255, 143);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='赵']>.camp-name {text-shadow: 0 0 5px rgb(224,147,233), 0 0 10px rgb(224,147,233), 0 0 15px rgb(224,147,233);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='陈']>.camp-name {text-shadow: 0 0 5px rgb(240,149,83), 0 0 10px rgb(240,149,83), 0 0 15px rgb(240,149,83);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='韩']>.camp-name {text-shadow: 0 0 5px rgb(254,149,255), 0 0 10px rgb(254,149,255), 0 0 15px rgb(254,149,255);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='曹']>.camp-name {text-shadow: 0 0 5px rgb(191,179,255), 0 0 10px rgb(191, 179, 255), 0 0 15px rgb(191, 179, 255);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='燕']>.camp-name {text-shadow: 0 0 5px rgb(232,235,146), 0 0 10px rgb(232, 235, 146), 0 0 15px rgb(232, 235, 146);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='齐']>.camp-name {text-shadow: 0 0 5px rgb(255,194,25), 0 0 10px rgb(236, 47, 47), 0 0 15px rgb(236, 47, 47);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='邹']>.camp-name {text-shadow: 0 0 5px rgb(92,207,223), 0 0 10px rgb(92, 207, 223), 0 0 15px rgb(92, 207, 223);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='楚']>.camp-name {text-shadow: 0 0 5px rgb(188,110,150), 0 0 10px rgb(188, 110, 150), 0 0 15px rgb(188, 110, 150);}";

tenUi.innerHTML+=".player>.camp-zone[data-camp='卫']>.camp-name {text-shadow: 0 0 5px rgb(13,176,26), 0 0 10px rgb(13, 176, 26), 0 0 15px rgb(13, 176, 26);}";

tenUi.innerHTML=".player>.camp-zone[data-camp='郑']>.camp-back {background: linear-gradient(to bottom, rgb(255, 194, 25), rgb(255, 194, 25));}";

tenUi.innerHTML=".player>.camp-zone[data-camp='鲁']>.camp-back {background: linear-gradient(to bottom, rgb(255, 194, 25), rgb(255, 194, 25));}";

tenUi.innerHTML=".player>.camp-zone[data-camp='周']>.camp-back {background: linear-gradient(to bottom, rgb(255, 194, 25), rgb(255, 194, 25));}";

document.head.appendChild(tenUi);

},precontent:function (){

},help:{},config:{},package:{
    character:{
        character:{
            "嬴政":["male","秦",4,["dz_chengshe","dz_batu"],["zhu","des:中国古代杰出的政治家、战略家、改革家，首次完成中国大一统的政治人物，也是中国第一个称皇帝的君主。 嬴政出生于赵国都城邯郸，后回到秦国。前247年，13岁时即王位。前238年，平定长信侯嫪毐的叛乱，之后又除掉权臣吕不韦，开始独揽大政。重用李斯、王翦等人，自前230年至前221年，先后灭韩、赵、魏、楚、燕、齐六国，完成了统一中国大业，建立起一个中央集权的统一的多民族国家——秦朝。 公元前221年，秦统一六国之后，秦王嬴政认为自己“德兼三皇，功过五帝”，遂采用三皇之“皇”、五帝之“帝”构成“皇帝”的称号，是中国历史上第一个使用“皇帝”称号的君主，所以自称“始皇帝”。同时在中央实行三公九卿，管理国家大事；地方上废除分封制，代以郡县制；同时书同文，车同轨，统一货币、度量衡。对外北击匈奴，南征百越，修筑万里长城；修筑灵渠，沟通长江和珠江水系。但是到了晚年，秦始皇求仙梦想长生，苛政虐民，扼杀民智，动摇了秦朝统治的根基。前210年，秦始皇东巡途中驾崩于邢台沙丘。 秦始皇奠定中国两千余年政治制度基本格局，被明代思想家李贽誉为“千古一帝”。设计者：墨灵"]],
            "芈月":["female","秦",3,["dz_youmie","dz_yintui"],["zhu","des:战国时期秦国王太后，秦惠文王之妾，秦昭襄王之母。 秦昭襄王即位之初，宣太后以太后之位主政，执政期间，攻灭义渠国，一举灭亡了秦国的西部大患。 秦昭襄王四十二年（公元前265年）十月，宣太后去世，葬于芷阳骊山。设计者：墨灵"]],
            "王诩":["male","全",3,["dz_guigu","dz_huizhi","dz_shouxue"],["zhu","des:诸子百家之纵横家创始人， 战国时代传奇人物。著名谋略家、纵横家的鼻祖，兵法集大成者、相传其额前四颗肉痣，成鬼宿之象。精通百家学问，因隐居在云梦山鬼谷，故自称鬼谷先生。常入山静修，深谙自然之规律，天道之奥妙。设计者：通稿2023"]],
            "☆王诩":["male","全",3,["dz_yishi","dz_huiji"],["zhu","des:诸子百家之纵横家创始人， 战国时代传奇人物。著名谋略家、纵横家的鼻祖，兵法集大成者、相传其额前四颗肉痣，成鬼宿之象。精通百家学问，因隐居在云梦山鬼谷，故自称鬼谷先生。常入山静修，深谙自然之规律，天道之奥妙。设计者：墨灵"]],
            "庄周":["male","宋",3,["dz_qiwu","dz_dasheng","dz_zaiyou"],["des:战国中期思想家、哲学家、文学家，庄学的创立者，道家学派代表人物，与老子并称“老庄”。 庄子因崇尚自由而不应楚威王之聘，仅担任过宋国地方的漆园吏，史称“漆园傲吏”，被誉为地方官吏之楷模。他最早提出的“内圣外王”思想对儒家影响深远。他洞悉易理，指出“《易》以道阴阳”，其“三籁”思想与《易经》三才之道相合。其文想象丰富奇特，语言运用自如，灵活多变，能把微妙难言的哲理说得引人入胜，被称为“文学的哲学，哲学的文学”。其作品收录于《庄子》一书，代表作有《逍遥游》《齐物论》《养生主》等。设计者：墨灵"]],
            "骊姬":["female","jin",3,["dz_chanjian","dz_huotin"],["des:春秋时期骊戎国君之女，晋献公妃子，晋君奚齐的生母。 骊姬姿色艳美。前672年，晋献公打败骊戎，骊戎求和将骊姬与其妹少姬献给晋献公。骊姬深得晋献公的宠爱，获立夫人，并生下儿子奚齐，而骊姬的妹妹少姬生子卓子。 骊姬以美色获得晋献公专宠，阴险狡诈，献媚取怜，逐步博得晋献公信任，参与朝政，但骊姬仍不满足，使计离间挑拨晋献公与儿子申生、重耳、夷吾的感情，迫使申生自杀，重耳、夷吾逃亡，改立自己所生之子奚齐为太子，史称骊姬之乱。 前651年，晋献公病危，嘱托大夫荀息主政，保护奚齐并辅助他继位。晋献公死后，荀息遵旨立奚齐继位，骊姬为太后。但在丧礼过程中，里克杀死奚齐，荀息于是改立卓子为君。不久，里克又杀害卓子。设计者：墨灵"]],
            "勾践":["male","越",4,["dz_yuejia","dz_cangfeng","dz_zhenfu"],["zhu","des:春秋时期越国君主（前496年－前464年），春秋五霸之一。 公元前496年，越王勾践即位。同年，在槜李大败吴师。越王勾践三年（公元前494年），被吴军败于夫椒，被迫向吴求和。三年后被释放回越国，返国后重用范蠡、文种，卧薪尝胆，使越国国力渐渐恢复起来。越王勾践十五年（公元前482年），吴王夫差兴兵参加黄池之会，为彰显武力率精锐而出。越王勾践抓住机会率兵而起，大败吴师。夫差仓促与晋国定盟而返，与勾践连战惨败，不得已与越议和。越王勾践十九年（公元前478年），勾践再度率军攻打吴国，在笠泽之战三战三捷，大败吴军主力。越王勾践二十四年（公元前473年），破吴都，迫使夫差自尽，灭吴称霸，以兵渡淮，会齐、宋、晋、鲁等诸侯于徐州，迁都琅琊（今山东省青岛市胶南区夏河城），成为春秋时期最后一位霸主。设计：通稿2023"]],
            "廉颇":["male","赵",4,["dz_gulei","dz_huoyou"],["des:战国末期赵国名将，与白起、王翦、李牧并称“战国四大名将”。 赵惠文王十六年（前283年），为将伐齐，大破之，取昔阳（今河北晋州西北）拜为上卿。赵孝成王时，曾以蔺相如位居己上，不服，欲辱之。相如屡谦让退避。他感悟，负荆请罪，两人遂为刎颈之交。秦、赵长平之役，赵初以其御秦，用坚壁固守之策，秦师劳而无功。后赵王中秦反间计，以赵括代之，卒遭惨败。赵孝成王十五年（前251），与乐乘率军大破燕军，杀燕将栗腹，燕割五城请和。以功封信平君，为假相国。赵悼襄王时，与乐乘不和，奔魏居大梁（今河南开封），魏不能用。赵以数困于秦，欲复用之，因仇者郭开之毁，赵王信以为衰老，遂不召。后入楚，卒于寿春（今安徽寿县）。设计：现代诗人"]],
            "蔺相如":["male","赵",3,["dz_wanbi","dz_kuiwu"],["des:战国时期赵国大臣，赵国著名的政治家、外交家。他最重要的有三个事件：完璧归赵、渑池之会与负荆请罪。 蔺相如原为宦者令缪贤的舍人。赵惠文王时，秦昭王写信给赵王，愿以十五个城池换取“和氏璧”。蔺相如奉命带“和氏璧”来到秦国，据理力争，机智周旋，终于完璧归赵。公元前279年，秦王与赵王相会于渑池（今河南渑池西），他随侍赵惠文王，当面斥责强大的秦国，不辱国体，使赵王没有受到屈辱，因其功，任为上卿，居官于廉颇之上。廉颇居功自恃，不服相如，耻居其下，并扬言要羞辱相如。蔺相如为保持将相和睦，不使外敌有隙可乘，始终回避忍让。蔺相如以国家利益为重、善自谦抑的精神感动了廉颇，于是亲自到蔺相如府上负荆请罪，二人成为刎颈之交。设计：通稿2023"]],
            "伍子胥":["male","wu",3,["dz_youai","dz_bianshi"],["des:楚国人，春秋末期吴国大夫、军事家。以封于申，也称申胥。 伍子胥之父伍奢为楚平王子建太傅，因受费无极谗害，和其长子伍尚一同被楚平王杀害。伍子胥从楚国逃到吴国，成为吴王阖闾重臣，是姑苏城（今苏州）的营造者，至今苏州有胥门。公元前506年，伍子胥协同孙武带兵攻入楚都，伍子胥掘楚平王墓，鞭尸三百，以报父兄之仇。吴国倚重伍子胥等人之谋，西破强楚、北败徐、鲁、齐，成为诸侯一霸。设计者：现代诗人"]],
            "☆伍子胥":["male","wu",3,["dz_chouchou","dz_zhongjian"],["des:楚国人，春秋末期吴国大夫、军事家。以封于申，也称申胥。 伍子胥之父伍奢为楚平王子建太傅，因受费无极谗害，和其长子伍尚一同被楚平王杀害。伍子胥从楚国逃到吴国，成为吴王阖闾重臣，是姑苏城（今苏州）的营造者，至今苏州有胥门。公元前506年，伍子胥协同孙武带兵攻入楚都，伍子胥掘楚平王墓，鞭尸三百，以报父兄之仇。吴国倚重伍子胥等人之谋，西破强楚、北败徐、鲁、齐，成为诸侯一霸。设计者：墨灵"]],
            "李耳":["male","陈",3,["dz_hedao","dz_yunyou"],["des:中国古代思想家、哲学家、文学家和史学家，道家学派创始人和主要代表人物，与庄子并称“老庄”。后被道教尊为始祖，称“太上老君”。在唐朝，被追认为李姓始祖。曾被列为世界文化名人，世界百位历史名人之一。设计者：墨灵"]],
            "韩非":["male","韩",3,["dz_fadu","dz_shuonan"],["des:战国末期韩国新郑（今属河南）人。中国古代思想家、哲学家和散文家，法家学派代表人物。韩非是法家思想之集大成者，集商鞅的“法”、申不害的“术”和慎到的“势”于一身，将辩证法、朴素唯物主义与法融为一体，为后世留下了大量言论及著作。其学说一直是中国封建社会时期统治阶级治国的思想基础。设计者：墨灵"]],
            "西门豹":["male","wei",3,["dz_chuwu","dz_zhiye"],["des:战国时期魏国（今山西省运城市盐湖区安邑一带）人。魏文侯时任邺令，是著名的政治家、水利家，历史治水名人。曾立下赫赫功勋。初到邺城 （今河北临漳县一带）时，看到这里人烟稀少，田地荒芜萧条，一片冷清，百业待兴，于是立志改善现状。后来趁河伯娶妻的机会，惩治了地方恶霸势力，随后颁布律令，禁止巫风。教育了广大的百姓。原先出走人家也回到了自己的家园。同时，他又亲自率人勘测水源，发动百姓在漳河开围挖掘了12渠，使大片田地成为旱涝保收的良田。在发展农业生产的同时，还实行“寓兵于农、藏粮于民”的政策，很快就使邺城民富兵强，成为战国时期魏国的东北重镇。设计者：墨灵"]],
            "墨子":["male","宋",3,["dz_moshou","dz_tianzhi"],["zhu","des:中国古代思想家、教育家、科学家、军事家，墨家学派创始人和主要代表人物。 墨子是墨家学说的创立者，提出了“兼爱”“非攻”“尚贤”“尚同”“天志”“明鬼”“非命”“非乐”“节葬”“节用”等观点，以兼爱为核心，以节用、尚贤为支点，创立了以几何学、物理学、光学为突出成就的一整套科学理论。墨家在先秦时期影响很大，与儒家并称“显学”。战国时期的百家争鸣，有“非儒即墨”之称。 墨子死后，墨家分为相里氏之墨、相夫氏之墨、邓陵氏之墨三个学派。墨子弟子根据墨子生平事迹的史料，收集其语录，编成了《墨子》一书。设计者：墨灵"]],
            "钟无艳":["female","齐",3,["dz_jiandai","dz_baihou"],["des:齐宣王之妻，中国古代四大丑女之一，（其他三位是：嫫母，孟光和阮女）。但很有才华。相传是战国齐国无盐邑之女，即无盐娘娘，相关传说很多。 外貌极丑，四十岁不得出嫁，自请见齐宣王，陈述齐国危难四点，为齐宣王采纳，立为王后。于是拆渐台、罢女乐、退谄谀，进直言，选兵马，实府库，齐国大安。设计者：墨灵"]],
            "孔子":["male","鲁",3,["dz_shibiao","dz_zhongyong"],["zhu","des:中国古代思想家、政治家、教育家，儒家学派创始人、“大成至圣先师”。设计者：墨灵"]],
            "范蠡":["male","越",3,["dz_gongtui","dz_zuyue"],["des:春秋末期政治家、军事家、谋略家、经济学家和道家学者、古今六十四名将（武成王庙六十四将）之一。曾献策扶助越王勾践复国，兴越灭吴，后隐去。著《范蠡》兵法二篇，今佚。设计：现代诗人"]],
            "吴起":["male","宋",3,["dz_zhifa","dz_jizhi"],["des:战国初期军事家、政治家、改革家，兵家代表人物。 吴起一生历仕鲁、魏、楚三国，通晓兵家、法家、儒家三家思想，在内政及军事上都有极高的成就。在魏国，他指挥魏军屡次击败秦国，占领西河之地，任西河郡守。在楚国时，吴起被任命为令尹，辅佐楚悼王进行变法，增强国力，扩展了楚国的疆域。前381年，楚悼王逝世后，因变法得罪守旧贵族，吴起惨遭杀害。设计者：现代诗人"]],
            "孟母":["female","jin",3,["dz_sanqian","dz_yuxue"],["des:孟子的母亲，战国时人，以教子有方著称。孟子三岁丧父，靠母亲教养长大成人，并成为后世儒家追慕向往的亚圣，孟母也留下了“孟母三迁”、“断机教子”等教子佳话。设计者：墨灵"]],
            "扁鹊":["male","全",3,["dz_guanbing","dz_huanxin"],["des:扁鹊曾居住在中丘（内丘）蓬鹊山（蓬山、鹊山的通称）九仙洞（又名秦越人洞，唐代于鹄诗《秦越人洞中咏》有记），从师于长桑君，尽传其医术禁方，饮以山巅“上池”（石盆）之水，修得高超医术。初医治好赵简子五日不醒之症，赵简子赐其蓬鹊山田四万亩于扁鹊，得到食邑之地。巧因蓬鹊山之首，扁鹊洞府上面，有翩翩欲飞天然石鹊和静观天下神奇石人形象，赵人视秦越人为吉祥喜鹊一般，而尊称其为 “扁鹊”，即“在赵者名扁鹊”。后扁鹊游医虢国，巧医虢太子“尸厥症”，使之起死回生。虢太子感恩弃国来到蓬鹊山太子岩，从医扁鹊游，采药于是山。扁鹊在咸阳遭秦太医李醯妒忌杀害，蓬鹊山赵人不远千里，从咸阳抱回其头颅，葬在山下，将焦子村和郎家庄合二为一改叫“神头村”， 自此，建庙立祠，世代奉祀。设计：现代诗人"]],
            "西施":["female","越",3,["dz_chenyu","dz_pengxin"],["des:本名施夷光，春秋时期越国美女，一般称为西施，后人尊称其“西子“，春秋末期出生于越国句无苎萝村（今浙江省绍兴市诸暨苎萝村），自幼随母浣纱江边，故又称“浣纱女”。她天生丽质、倾国倾城，是美的化身和代名词。设计者：墨灵"]],
            "董狐":["male","jin",3,["dz_zhishu","dz_zhangzheng"],["des:春秋晋国太史，亦称史狐。周太史辛有的后裔，因董督典籍，故姓董氏。据说今翼城县东五十里的良狐村，即其故里。 董狐为史官，不畏强权，坚持原则。在赵盾族弟赵穿弑晋灵公后，董狐以“赵盾弑其君”记载此事，留下“董狐直笔”的典故。董狐秉笔直书的事迹，实开我国史学直笔传统的先河。设计者：墨灵"]],
            "荀子":["male","赵",3,["dz_zhitian","dz_zhengzhi"],["des:战国末期赵国人，著名的思想家、哲学家、教育家，儒家学派的代表人物，先秦时代百家争鸣的集大成者。荀子曾三次担任齐国稷下学宫的祭酒，两度出任楚兰陵令。晚年蛰居兰陵县著书立说，收徒授业，终老于斯，被称为“后圣”。设计者：墨灵"]],
            "赵括":["male","赵",4,["dz_xingzhen","dz_zhengwei"],["des:战国时期赵国人，赵国名将马服君赵奢之子。赵括熟读兵书，但缺乏战场经验，不懂得灵活应变。 赵孝成王七年（公元前260年）长平之战中，赵孝成王急于求胜，赵国中秦国的反间计，用赵括代替老将廉颇。赵括一反廉颇的策略，改守为攻，在长平（今山西高平西北）主动全线出击，向秦军发起进攻。秦将白起分兵两路：一路佯败，把赵军吸引到秦军壁垒周围；一路切断赵军后路，实行反包围，使赵军粮道断绝，困于长平。最后，赵军四十六日不得食，分四路突围五次不成，赵括亲自率勇士突围，英勇杀敌，被秦军射杀而死，数十万赵国士兵投降，后来被秦军坑杀。设计者：墨灵"]],
            "竖刁易牙":["male","齐",3,["dz_luandu","yuchong"],["des:竖刁，春秋时齐国奸臣，负责掌管内侍及女宫的戒令。齐桓公病危时作乱，最终被埋伏的兵甲杀死。易牙，他是齐桓公宠幸的近臣，用为雍人。易牙是第一个运用调和之事操作烹饪的庖厨，好调味，很善于做菜。设计者：墨灵"]],
            "白起":["male","秦",4,["dz_fenwei","dz_gongjian"],["des:战国时期名将，杰出的军事家，“兵家”代表人物。 熟知兵法，善于用兵，交好秦宣太后，和穰侯魏冉的关系很好。辅佐秦昭王，屡立战功。伊阙之战，大破魏韩24万联军，彻底扫平秦军东进之路。伐楚之战，攻陷楚都郢城。长平之战，重创赵国主力。担任秦军主将30多年，攻城70余座，为秦国统一六国做出了巨大的贡献，受封为武安君。功高震主，得罪应侯，接连贬官。秦昭襄王五十年（前257年），赐死于杜邮。设计者：墨灵"]],
            "商鞅":["male","秦",3,["dz_bogui","dz_mingfa"],["des:战国时期政治家、改革家、思想家、军事家，法家代表人物，卫国国君后代。 商鞅辅佐秦孝公，积极实行变法，使秦国成为富裕强大的国家，史称“商鞅变法”。政治上，他改革了秦国户籍、军功爵位、土地制度、行政区划、税收、度量衡以及民风民俗，并制定了严酷的法律；经济上，他主张重农抑商、奖励耕战；军事上，他统率秦军收复了河西之地，被秦孝公赐予商於十五邑，号为“商君”，史称为商鞅。秦军收复了河西之地，被秦孝公赐予商於十五邑，号为“商君”，史称为商鞅。设计者：墨灵"]],
            "孟子":["male","邹",3,["dz_shiren","dz_yiju"],["des:战国时期哲学家、思想家、政治家、教育家，是孔子之后、荀子之前的儒家学派的代表人物，与孔子并称“孔孟”。 孟子宣扬“仁政”，最早提出“民贵君轻”思想，被韩愈列为先秦儒家继承孔子“道统”的人物，元朝追封为“亚圣”。设计者：墨灵"]],
            "息夫人":["female","陈",3,["dz_chenxiang","dz_yuanjue"],["des:春秋四大美女之一，为陈国君主陈庄公之女，生于陈国宛丘（今河南省淮阳县），因嫁给息国国君，故亦称息妫。 息妫省亲时（一说出嫁时），借道蔡国，却被姐夫蔡侯纠缠戏弄。息侯闻知后与楚国设计报仇。楚文王借机俘获蔡侯，又知息夫人美貌，亲征息国欲霸息夫人。危难时刻，息夫人甘以一己之身换息国百姓免遭涂炭，以惊人胆识嫁入楚国，成了楚夫人。楚文王熊赀倍加宠爱，在楚国别都穰邑（今邓州西南隅）建造一座紫金山，并凿修桃花洞。山上古柏森森，山下庙宇楼榭，山旁泉水潺孱，为之绝胜。她愈加精进，成为文王的贤内助，休养生息、储备重臣、重视教化、严治后宫等许多建议被文王采纳。文王死后，倾力辅佐太子熊恽，除逆安邦，重外交、选贤才、赦天下、劝农桑，大胆改革，最后还政于君，为楚成王及后世楚王奠定了雄霸中原的基础设计者：墨灵。"]],
            "屈原":["male","楚",3,["dz_xingyin","dz_huaisha"],["des:战国时期楚国诗人、政治家。楚武王熊通之子屈瑕的后代。少年时受过良好的教育，博闻强识，志向远大。早年受楚怀王信任，任左徒、三闾大夫，兼管内政外交大事。 提倡“美政”，主张对内举贤任能，修明法度，对外力主联齐抗秦。因遭贵族排挤诽谤，被先后流放至汉北和沅湘流域。楚国郢都被秦军攻破后，自沉于汨罗江，以身殉楚国。设计者：墨灵"]],
            "养由基":["male","楚",4,["dz_kongxian"],["des:春秋时期楚国将领、神射手。 养国被楚国灭亡后，成为楚国大夫。善于射箭，距离柳叶百步射击，百发百中。推荐孙叔敖，自掌车右。参加鄢陵之战，射杀晋军将领吕锜。庸浦交战，俘虏吴军将领公子党，迁宫厩尹。设计：墨灵"]],
            "赵高":["male","秦",3,["dz_jiezhao","dz_shiquan"],["des:秦朝二世皇帝时丞相，任中车府令，兼行符玺令事，“管事二十余年”。秦始皇死后，赵高发动沙丘政变，他与丞相李斯合谋伪造诏书，逼秦始皇长子扶苏自杀，另立始皇幼子胡亥为帝，是为秦二世，并自任郎中令。他在任职期间独揽大权，结党营私，征役更加繁重，行政更加苛暴。公元前208年又设计害死李斯，继之为秦朝丞相。第三年他迫秦二世自杀，另立子婴为秦王。不久被子婴设计杀掉，诛夷三族。设计者：通稿2023"]],
            "伯牙":["male","jin",3,["dz_jieyin","dz_juexian"],["des:春秋战国时期楚国郢（yǐng）都人，虽为楚人，却任职晋国上大夫，且精通琴艺。设计者：墨灵"]],
            "徐福":["male","秦",3,["dz_xianyou","dz_jianxin","dz_zhiwang"],["zhu","des:齐国琅琊（今山东省青岛市黄岛区，一说为江苏省连云港市赣榆区）。秦朝著名方士。秦始皇时，上书言海中有三神山，名曰蓬莱、方丈、瀛洲，仙人居之。始皇因遣市发童男女数千人，入海求仙，竟不返。今日本传有徐福之墓。设计：墨灵"]],
            "荆轲":["male","燕","3/4",["dz_bijian","dz_yijue"],["des:战国末期卫国人，春秋时期齐国大夫庆封的后代，战国时期著名刺客，也称庆卿、荆卿、庆轲。公元前227年，荆轲带燕督亢地图和樊於期首级，前往秦国刺杀秦王。临行前，燕太子丹、高渐离等许多人在易水边为荆轲送行，场面十分悲壮。“风萧萧兮易水寒，壮士一去兮不复还”，这是荆轲在告别时所吟唱的诗句。荆轲与秦舞阳入秦后，秦王在咸阳宫隆重召见了他，在交验樊於期头颅，献督亢（今河北涿县、易县、固安一带）之地图，图穷匕首见，荆轲刺秦王不中，被秦王拔剑击成重伤后为秦侍卫所杀。设计者：墨灵"]],
            "冯谖":["male","齐",3,["dz_shiyi","dz_mouku"],["des:战国时期齐国人，是薛国（今山东省滕州市官桥镇）国君孟尝君门下的食客之一，为战国时期一位高瞻远瞩、颇具深远眼光的战略家。 他虽然向孟尝君索取了不少的待遇，却着实为孟尝君效力不少。如替孟尝君收租，树立了孟尝君在人们心中的威信；在孟尝君遭齐王猜忌时，游说国君，使之威名重立。通过“薛国市义”、营造“三窟”等活动，冯谖为孟尝君立下了汗马功劳，使其政治事业久盛不衰。设计者：墨灵"]],
            "干将莫邪":["none","wu",4,["dz_zhujian","dz_tuozi"],["des:干将，春秋时期吴国人。是楚国最有名的铸剑师，他打造的剑锋利无比。楚王知道了，就命令干将为他铸宝剑。后与他的妻子莫邪奉命为楚王铸成，一把剑叫干将，一把剑叫莫邪。由于知道楚王性格残暴，干将在将莫邪剑献给楚王之前，将干将剑给妻子传给儿子，后来干将被楚王杀死。他儿子成年后成功完成父亲遗愿，将楚王杀死，为父亲报仇。此一传说赞颂了剑工高超的技艺，宝剑文字的神采和少年的壮烈，批判了楚国国君的残暴。设计：通稿2023"]],
            "蒙骜":["male","秦",4,["dz_leigong","dz_duocheng"],["des:战国末期秦国名将。蒙骜本是齐国人，后来投靠秦国，官至上卿。 蒙骜历仕秦昭襄王、秦孝文王、秦庄襄王、秦始皇四朝，数次率军出征，屡立战功。先后夺取韩国十余座城池、赵国三十余座城池、魏国五十余座城池，使秦国得以设立三川郡和东郡，并让秦国疆域与齐国相接，对韩国、魏国形成三面包围之势，为日后秦始皇统一六国打下坚定的基础。设计者：墨灵"]],
            "蒙恬":["male","秦",4,["dz_zhudi","dz_xianduo"],["zhu","des:秦朝时期名将，上卿蒙骜之孙，内史蒙武之子。 出身名将世家，自幼胸怀大志。率军攻破齐国，拜为内史 ，深得秦始皇宠信。秦统一六国后，率领三十万大军北击匈奴，收复河南之地，威震匈奴，誉为“中华第一勇士”。中国西北最早的开发者，是古代开发宁夏第一人。监修万里长城和九州直道，克服了国内交通闭塞的困境，大大促进了北方各族人民经济、文化的交流和融合。曾经改良毛笔，被誉为“笔祖”。设计者：墨灵"]],
            "纪昌":["male","赵",4,["dz_jiaoshe"],["des:中国古代寓言故事人物，为神箭手，以好学和坚韧著称，出自《列子·汤问》。设计者：墨灵"]],
            "弥子瑕":["male","卫",3,["dz_fentao","dz_aichi"],["des:卫之嬖大夫也。韩非《韩非子·说难篇》《春秋左传·定公六年》《新序·杂事一》有提及。设计者：墨灵"]],
            "鲍叔牙":["male","齐",3,["dz_gongji","dz_xiangfu"],["des:春秋时期齐国大臣，大夫鲍敬叔之子。 早年交好管仲的交情，人称“管鲍之交”，支持公子小白师傅回国即位，是为齐桓公。知人善任，推荐挚友管仲为相。在鲍叔牙的协助下，管仲实行了治国之道，促进齐国迅速由乱转治，由弱变强。齐桓公三十年（公元前656年），参与“召陵之盟”，使得齐桓公成为“春秋五霸”之一。设计者：墨灵"]],
            "孙膑":["male","齐",4,["dz_guice","dz_nufa"],["des:战国时期齐国军事家，是孙武的后代。 孙膑曾与庞涓为同窗，因受庞涓迫害遭受膑刑，身体残疾，后在齐国使者的帮助下投奔齐国，被齐威王任命为军师，辅佐齐国大将田忌两次击败庞涓，取得了桂陵之战和马陵之战的胜利，奠定了齐国的霸业。设计者：通稿2023"]],
            "项羽":["male","楚",4,["dz_aozhan","dz_yuyong"],["zhu","des:秦朝末年政治家、军事家，楚国名将项燕的孙子。 勇猛好武，跟随叔父项梁发动吴中起义，反抗秦朝。复立楚王后，册封鲁公。项梁阵亡后，援救赵王赵歇。破釜沉舟，击破章邯和王离领导的秦军主力，赢得巨鹿之战。率军攻破关中，举办鸿门宴，火烧秦王宫，杀死秦王嬴子婴。分封灭秦功臣将领，拥立六国贵族后代为王。自称西楚霸王，定都于彭城。此后，与汉王刘邦争夺天下，史称“楚汉之争“。自恃武力，刚愎自用，弑杀楚义帝，猜疑亚父范增，终为刘邦所败。设计者：云浪"]],
            "聂政":["male","韩",4,["dz_cijue"],["zhu","des:战国时期的侠客，韩国轵（今河南济源东南）人，以任侠著称，为春秋战国四大刺客之一。 聂政年青侠义，因除害杀人偕母及姊荌避祸齐地（今山东境），以屠为业。韩大夫严仲子因与韩相侠累（名傀）廷争结仇，潜逃濮阳，闻政侠名，献巨金为其母庆寿，与政结为好友，求其为己报仇。聂政待母亡故守孝三年后，忆及严仲子知遇之恩，独自一人仗剑入韩都阳翟，以白虹贯日之势，刺杀侠累于阶上，继而格杀侠累侍卫数十人。因怕连累与自己面貌相似的姊姊荌，遂以剑自毁其面，挖眼、剖腹自杀。其姊在韩市寻认弟尸，伏尸痛哭，撞死在聂政尸前。设计者：墨灵"]],
            "☆赵高":["male","秦",4,["dz_huogang"],["des:秦朝二世皇帝时丞相，任中车府令，兼行符玺令事，“管事二十余年”。秦始皇死后，赵高发动沙丘政变，他与丞相李斯合谋伪造诏书，逼秦始皇长子扶苏自杀，另立始皇幼子胡亥为帝，是为秦二世，并自任郎中令。他在任职期间独揽大权，结党营私，征役更加繁重，行政更加苛暴。公元前208年又设计害死李斯，继之为秦朝丞相。第三年他迫秦二世自杀，另立子婴为秦王。不久被子婴设计杀掉，诛夷三族。设计者：墨灵"]],
            "姬宫湦":["male","周",3,["dz_fengxi","dz_guyuan","dz_dingzuo"],["zhu","des:周宣王姬静之子，母姜后，西周第十二任君主，前782年―前771年在位。前782年，周宣王去世，姬宫湦继位，是为周幽王。前771年，犬戎杀死姬宫湦，西周灭亡。姬宫湦死后，谥号幽王，诸侯共同拥立其子姬宜臼继位，是为周平王，史称东周。设计者：墨灵"]],
            "李斯":["male","秦",3,["dz_zuozheng","dz_xinyu"],["des:秦朝著名政治家、文学家和书法家。 少为郡吏，曾从荀卿学。战国末年入秦国，初为秦相吕不韦舍人，被任命为郎。旋任长史，拜客卿。秦王政十年（前237）下逐客令时，上书力谏客不可逐，为秦王采纳。又为秦并六国谋划，建议先攻取韩国，再逐一消灭各诸侯国，完成统一大业。设计者：面包、墨灵"]],
            "邹衍":["male","齐",3,["dz_tuiyan"],["des:阴阳家代表人物、五行创始人。提倡的主要学说是五行说、“五德终始说”和“大九州说”，又是稷下学宫著名学者，因他“尽言天事”，当时人们称他“谈天衍”，又称邹子。他活动的时代后于孟子，与公孙龙、鲁仲连是同时代人。设计者：墨灵"]],
            "姬旦":["male","周",3,["dz_tufu","dz_zhili"],["des:西周开国元勋，杰出的政治家、军事家、思想家、教育家，“元圣”、儒学先驱，周文王姬昌第四子，周武王姬发的弟弟。采邑在周，故称周公。 封于曲阜，留朝执政，长子伯禽就封。武王卒，成王幼，周公摄政。管叔、蔡叔、霍叔等不服，联合殷贵族武庚和东夷反叛。他率师东征，平定叛乱，灭奄（今山东曲阜东）后大举分封诸侯，营建成周洛邑（今河南洛阳）。又制礼作乐，为西周典章制度的主要创制者，主张 “明德慎罚”，以“礼”治国，奠定了“成康之治”的基础。设计者：通稿2023"]],
            "柳下惠":["male","鲁",3,["dz_gengjie","dz_yijie"],["des:中国古代思想家、政治家、教育家，鲁国大夫展无骇之子。山东香城留下一村，即柳下邑村。 曾任鲁国士师，掌管刑罚狱讼之事。作为遵守中国传统道德的典范，其“坐怀不乱”的故事广为传颂。孔子以为“被遗落的贤人”，孟子尊为“和圣”。 周襄王三十一年（公元前621年），卒于鲁地故赵村，享年一百岁，谥号为惠。因其封地在柳下，后人尊称其为“柳下惠”，是百家姓“展”姓和“柳”姓的得姓始祖。设计者：墨灵"]],
            "☆柳下惠":["male","鲁",3,["dz_gengjie_x"],["des:中国古代思想家、政治家、教育家，鲁国大夫展无骇之子。山东香城留下一村，即柳下邑村。 曾任鲁国士师，掌管刑罚狱讼之事。作为遵守中国传统道德的典范，其“坐怀不乱”的故事广为传颂。孔子以为“被遗落的贤人”，孟子尊为“和圣”。 周襄王三十一年（公元前621年），卒于鲁地故赵村，享年一百岁，谥号为惠。因其封地在柳下，后人尊称其为“柳下惠”，是百家姓“展”姓和“柳”姓的得姓始祖。设计者：墨灵"]],
            "烛之武":["male","郑",3,["dz_miaoshe","dz_weiming"],["des:春秋时期郑国人。公元前630年，秦、晋合兵围郑，烛之武只身前往秦营之中，向秦穆公陈说利害，终于使得秦穆公放弃了攻打郑国的打算，并派兵保护郑国，拯救郑国于危难之中。烛之武在说秦伯之前，只是郑国的一个圉正（养马官），有着怀才不遇的愤怨，但在郑国危难之际，挺身而出，只身去说服秦伯，足见其义、勇。 民间对他的评价是：“五论救弱国，妙语退秦师。”设计者：墨灵"]],
        },
        translate:{
            "嬴政":"嬴政",
            "芈月":"芈月",
            "王诩":"王诩",
            "☆王诩":"☆王诩",
            "庄周":"庄周",
            "骊姬":"骊姬",
            "勾践":"勾践",
            "廉颇":"廉颇",
            "蔺相如":"蔺相如",
            "伍子胥":"伍子胥",
            "☆伍子胥":"☆伍子胥",
            "李耳":"李耳",
            "韩非":"韩非",
            "西门豹":"西门豹",
            "墨子":"墨子",
            "钟无艳":"钟无艳",
            "孔子":"孔子",
            "范蠡":"范蠡",
            "吴起":"吴起",
            "孟母":"孟母",
            "扁鹊":"扁鹊",
            "西施":"西施",
            "董狐":"董狐",
            "荀子":"荀子",
            "赵括":"赵括",
            "竖刁易牙":"竖刁易牙",
            "白起":"白起",
            "商鞅":"商鞅",
            "孟子":"孟子",
            "息夫人":"息夫人",
            "屈原":"屈原",
            "养由基":"养由基",
            "赵高":"赵高",
            "伯牙":"伯牙",
            "徐福":"徐福",
            "荆轲":"荆轲",
            "冯谖":"冯谖",
            "干将莫邪":"干将莫邪",
            "蒙骜":"蒙骜",
            "蒙恬":"蒙恬",
            "纪昌":"纪昌",
            "弥子瑕":"弥子瑕",
            "鲍叔牙":"鲍叔牙",
            "孙膑":"孙膑",
            "项羽":"项羽",
            "聂政":"聂政",
            "☆赵高":"☆赵高",
            "姬宫湦":"姬宫湦",
            "李斯":"李斯",
            "邹衍":"邹衍",
            "姬旦":"姬旦",
            "柳下惠":"柳下惠",
            "☆柳下惠":"☆柳下惠",
            "烛之武":"烛之武",
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
            "dz_chengshe":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"damageEnd",
                    source:"damageSource",
                },
                direct:true,
                filter:function (event,player){
var bool=game.countPlayer(function(current){
return !player.storage.dz_chengshe.contains(current)&&current.isDamaged();
});
return event.num>0&&bool;
},
                init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
                content:function (){
"step 0"
event.num=trigger.num;
"step 1"
event.num--;
player.chooseTarget(get.prompt2('dz_chengshe'),function(card,player,target){
return target.isDamaged()&&!player.storage.dz_chengshe.contains(target);
}).set('ai',function(target){
var player=_status.event.player;
var att=get.attitude(player,target);
var num=target.getDamagedHp();
if(att>0&&num>target.hp) return num-target.hp;
if(att<0&&num<target.hp) return target.hp-num;
if(num==target.hp) return 0;
return 0;
});
"step 2"
if(result.bool){
player.chat(["死罪可免，活罪难逃，领旨谢恩吧！","尔不闻，雷霆雨露，俱是君恩乎？"].randomGet());
var target=result.targets[0];
var num=target.getDamagedHp();
var num2=target.hp-num;
var num3=num-target.hp;
player.logSkill("dz_chengshe",target);
player.storage.dz_chengshe.add(target);
if(num2>0){
target.loseHp(num2);
}else{
if(num3>0) target.recover(num3);
};
}else event.finish();
"step 3"
if(event.num) event.goto(1);
},
                ai:{
                    threaten:1.1,
                    expose:0.25,
                },
            },
            "dz_batu":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
return target!=player;
},
                content:function (){
'step 0'
player.chat(["胆敢阻挡孤的脚步，都会成为一坯黄土！","若还负隅顽抗，此城便是尔等下场！"].randomGet());
var bool1=player.canUse({name:"sha",isCard:true},target,false);
var bool2=target.countCards("he");
if(bool1&&bool2){
target.chooseControl(function(){
return 0;
}).set('choiceList',[
'视为'+get.translation(player)+'对你使用一张【杀】。',
'交给'+get.translation(player)+'一张牌本回合你攻击范围的角色视为在'+get.translation(player)+'的攻击范围内。',
]).set('ai',function(){
return _status.event.choice;
}).set('choice',get.effect(player,{name:'sha'},target,target)<2.5?0:1);
}
else if(bool1){
event.directindex=0;
}
else if(bool2){
event.directindex=1;
}
else{
event.finish();
}
'step 1'
if(result&&typeof event.directindex!='number'){
event.directindex=result.index;
}
if(event.directindex==1){
target.chooseCard('he',true,'【霸图】：将一张牌交给'+get.translation(player));
}
else{
player.useCard({name:"sha",isCard:true},target,false,'noai');
event.finish();
}
'step 2'
target.give(result.cards,player,true);
target.addTempSkill("dz_batu_2");
},
                mod:{
                    inRange:function (from,to){
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(from!=players[i]&&to!=players[i]&&
players[i].hasSkill('dz_batu_2')){
if(players[i].inRange(to)) return true;
}
}
},
                },
                ai:{
                    order:7,
                    result:{
                        target:-1,
                    },
                },
                subSkill:{
                    "2":{
                        sub:true,
                    },
                },
            },
            "dz_youmie":{
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
return player.countCards('he')>0;
},
                content:function (){
"step 0"
player.chooseCardTarget({
filterCard:true,
filterTarget:function(card,player,target){
return player!=target;
},
ai1:function (card){
if(get.position(card)=='e') return -1;
return 5-get.value(card);
},
ai2:function(target){
return -1;
},
prompt:"出牌阶段开始时，你可以将一张牌展示并交给一名角色，若如此做，直到你的下个回合开始，该角色无法使用或打出此类型的牌且不能使用牌指定除你以外的目标。",
});
"step 1"
if(result.bool){
player.chat(["以身为诱，除之忧患。","美色可误人，红颜可灭国。"].randomGet());
var cards=result.cards;
var target=result.targets[0];
player.logSkill("dz_youmie",target);
player.showCards(cards);
target.gain(cards,player,"log");
target.storage.dz_youmie_debuff=get.type(cards[0]);
target.storage.dz_youmie_debuff2=player;
target.addSkill('dz_youmie_debuff');
}
},
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
return -1;
},
                    },
                },
                group:["dz_youmie_delete"],
                subSkill:{
                    debuff:{
                        mark:true,
                        marktext:"灭",
                        mod:{
                            cardEnabled:function (card,player,target){ 
if(get.type(card)==player.storage.dz_youmie_debuff) return false; 
},
                            cardUsable:function (card,player,target){ 
if(get.type(card)==player.storage.dz_youmie_debuff) return false; 
},
                            cardRespondable:function (card,player,target){ 
if(get.type(card)==player.storage.dz_youmie_debuff) return false; 
},
                            cardSavable:function (card,player,target){ 
if(get.type(card)==player.storage.dz_youmie_debuff) return false; 
},
                            playerEnabled:function (card,player,target){
var info=get.info(card);
if(target!=player.storage.dz_youmie_debuff2&&(!info||!info.singleCard||!ui.selected.targets.length)) return false;
},
                        },
                        intro:{
                            content:function (type){
return '不能使用或打出'+get.translation(type)+'牌';
},
                        },
                        sub:true,
                    },
                    delete:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        forced:true,
                        direct:true,
                        popup:false,
                        filter:function (event,player){
return game.hasPlayer(function(current){
return current.hasSkill('dz_youmie_debuff');
});
},
                        content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i].hasSkill('dz_youmie_debuff')){
player.line(game.players[i]);
game.players[i].removeSkill('dz_youmie_debuff');
}
} 
},
                        sub:true,
                    },
                },
            },
            "dz_yintui":{
                trigger:{
                    global:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
return player.countCards('h')==0;
},
                content:function (){
"step 0"
player.chat(["哀家今朝失势，权且隐居幕后。","哀家为国尽心，你们怎可如此待我？"].randomGet());
player.turnOver();
"step 1"
player.drawTo(player.maxHp);
},
            },
            "dz_guigu":{
                trigger:{
                    target:"useCardToTargeted",
                },
                filter:function (event,player){
return event.player!=player&&event.targets&&event.targets.length>1;
},
                forced:true,
                content:function (){
trigger.getParent().excluded.add(player);
},
                mod:{
                    targetEnabled:function (card,player,target,now){
if(target!=player){
var list=[];
for(var i=0;i<player.getHistory('useCard').length;i++){
var history=player.getHistory('useCard')[i];
if(history.targets.contains(target)){
list.add(get.type(history.card));
}
}
if(!["basic","trick"].contains(get.type(card))||list.contains(get.type(card))) return false;
}
},
                },
            },
            "dz_huizhi":{
                audio:"ext:先秦杀:2",
                trigger:{
                    global:["cardsDiscardAfter"],
                },
                forced:true,
                filter:function (event,player){
var color="no";
for(var i=0;i<event.cards.length;i++){
if(get.color(event.cards[i])!=get.color(event.cards[0])) color='none';
}
if(color=="no") color=get.color(event.cards[0]);
var bool=player.getHistory('custom',function(evt){
return evt.dz_huizhi&&evt.dz_huizhi==color;
}).length;
if(bool) return false;
var evtx=event.getParent();
if(evtx.name!='orderingDiscard') return false;
var evt2=(evtx.relatedEvent||evtx.getParent());
return (evt2&&(evt2.name=='useCard'||evt2.name=='respond')&&get.position(event.cards[0])=="d");
},
                content:function (){
"step 0"
for(var i=0;i<trigger.cards.length;i++){
if(get.color(trigger.cards[i])!=get.color(trigger.cards[0])) event.color='none';
}
if(!event.color) event.color=get.color(trigger.cards[0]);
player.getHistory('custom').push({dz_huizhi:event.color});
player.gain(trigger.cards,'gain2');
},
                ai:{
                    threaten:1.5,
                },
            },
            "dz_shouxue":{
                trigger:{
                    player:["useCardAfter","respondAfter"],
                },
                group:"dz_shouxue_1",
                forced:true,
                init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
                filter:function (event,player){
return get.position(event.cards[0])=="d"&&trigger.cards.length>0;
},
                content:function (){
'step 0'
player.$draw(trigger.cards);
game.cardsGotoSpecial(trigger.cards);
player.storage.dz_shouxue.addArray(trigger.cards);
"step 1"
player.markSkill("dz_shouxue");
},
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
if(storage&&storage.length){
player.$throw(storage,1000);
game.cardsDiscard(storage);
game.log(storage,'被置入了弃牌堆');
 storage.length=0;
}
},
                },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
return player.storage.dz_shouxue&&game.me.storage.dz_shouxue.length>0;
},
                        forced:true,
                        content:function (){
"step 0"
player.chooseTarget('将'+get.translation(player.storage.dz_shouxue)+'交给一名其他角色或点击【取消】弃置这些牌',function(card,player,target){
return target!=player;
}).set('ai',function(target){
var att=get.attitude(_status.event.player,target);
if(_status.event.enemy){
return -att;
}
else if(att>0){
return att/(1+target.countCards('h'));
}
else{
return att/100;
}
}).set('enemy',get.value(event.togive[0],player,'raw')<0);
"step 1"
if(result.bool){
result.targets[0].gain(player.storage.dz_shouxue,"gain2");
player.line(result.targets[0],'green');
game.log(result.targets[0],'获得了'+get.cnNumber(player.storage.dz_shouxue.length)+'张牌');
}else{
player.$throw(player.storage.dz_shouxue,1000);
game.cardsDiscard(player.storage.dz_shouxue);
}
player.storage.dz_shouxue=[];
player.unmarkSkill('dz_shouxue');
},
                        sub:true,
                    },
                },
            },
            "dz_qiwu":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                limited:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
return target!=player;
},
                skillAnimation:true,
                animationColor:"metal",
                content:function (){
"step 0"
player.chat(["天地与我并生，万物与我为一。","齐物我、齐是非、齐生死、齐贵贱。"].randomGet());
player.awakenSkill('dz_qiwu');
"step 1"
var num=target.hp-player.hp;
var num2=player.hp-target.hp;
if(target.hp!=player.hp){
if(target.hp>player.hp){
target.loseHp(num);
}else if(target.hp!=target.maxHp) target.recover(num2);
}
},
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
if(target.hp>player.hp) return target.hp-player.hp;
if(target.hp<player.hp) return player.hp-target.hp;
return 0;
},
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player,skill){
player.storage[skill]=false;
},
            },
            "dz_dasheng":{
                trigger:{
                    player:"dyingAfter",
                },
                forced:true,
                content:function (){
"step 0"
player.chat(["生之所无以为者，分外物也。","达生之情者，不务生之所无以为。"].randomGet());
player.recover();
"step 1"
if(_status.currentPhase&&_status.currentPhase.isAlive()){
_status.currentPhase.addTempSkill("dz_dasheng_debuff");
}
},
                subSkill:{
                    debuff:{
                        mark:true,
                        marktext:"生",
                        mod:{
                            cardEnabled:function (card,player,target){ 
return false; 
},
                            cardUsable:function (card,player,target){ 
return false; 
},
                            cardRespondable:function (card,player,target){ 
return false; 
},
                            cardSavable:function (card,player,target){ 
return false; 
},
                        },
                        intro:{
                            content:"不能使用或打出卡牌直到回合结束",
                        },
                        sub:true,
                    },
                },
            },
            "dz_zaiyou":{
                trigger:{
                    global:"dying",
                },
                init:function (player,skill){
player.storage[skill]=[];
},
                logTarget:"player",
                check:function (event,player){
return get.attitude(player,event.player)>0;
},
                filter:function (event,player){
return !player.storage.dz_zaiyou.contains(event.player);
},
                content:function (){
"step 0"
player.chat(["宥使自在则治，治之则乱也。","闻在宥天下，不闻治天下也。"].randomGet());
player.storage.dz_zaiyou.add(trigger.player);
"step 1"
trigger.player.draw(Math.min(trigger.player.maxHp,4));
},
            },
            "dz_chanjian":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                init:function (player,skill){
player.storage[skill]=[];
},
                filterTarget:function (card,player,target){
return target!=player;
},
                content:function (){
"step 0"
var list=['basic','trick','equip'];
player.chooseControl(list).set('ai',function(){
return list[0];
}).set('prompt','选择一个卡牌类型当'+get.translation(target)+'使用该类型卡牌时你可选择一名另一名其他角色令'+get.translation(target)+'对其造成一点伤害。');
"step 1"
if(result.control){
player.chat(["大王~此人羞辱于我。","大王，你快看她呀~"].randomGet());
player.storage.dz_chanjian.push([target,result.control]);
player.markSkill("dz_chanjian");
}
},
                mark:true,
                marktext:"馋",
                intro:{
                    content:function (storage,player,skill){
var str='';
var targets=[];
var list={};
if(storage.length>0){
for(var i=0;i<storage.length;i++){
targets.add(storage[i][0]);
}
for(var i=0;i<targets.length;i++){
targets[i]=[targets[i]];
str+="当"+get.translation(targets[i][0])+"使用或打出";
for(var j=0;j<storage.length;j++){
if(storage[j][0]==targets[i][0]&&!targets[i].contains(storage[j][1])){
 str+=get.translation(storage[j][1])+"牌、"
 targets[i].add(storage[j][1]);
 }
if(j==storage.length-1){
str=str.slice(0,str.length-1);
str+="时你选择一名除"+get.translation(targets[i][0])+"外的其他角色令"+get.translation(targets[i][0])+"对其造成一点伤害</br>";
}
}
}
return str.slice(0,str.length-5);
}else return "暂无技能目标";
},
                },
                group:["dz_chanjian_clear","dz_chanjian_damage"],
                subSkill:{
                    clear:{
                        sub:true,
                        forced:true,
                        silent:true,
                        popup:false,
                        trigger:{
                            player:"phaseBegin",
                        },
                        content:function (){
player.storage.dz_chanjian=[];
player.markSkill("dz_chanjian");
},
                    },
                    damage:{
                        trigger:{
                            global:["useCard","respond"],
                        },
                        direct:true,
                        filter:function (event,player){
var type=get.type(event.card,"trick");
if(!player.storage.dz_chanjian||player.storage.dz_chanjian.length<1||player.hasSkill("dz_chanjian_cd")) return false;
var storage=player.storage.dz_chanjian;
for(var i=0;i<storage.length;i++){
if(event.player==storage[i][0]&&type==storage[i][1]) return true;
}
return false;
},
                        content:function (){
"step 0"
player.chooseTarget("你可以选择一名其他角色令"+get.translation(trigger.player)+"对其造成一点伤害。",function(card,player,target){
return target!=player&&target!=trigger.player;
}).set('ai',function(target){
return get.damageEffect(target,_status.event.source,player);
});
"step 1"
if(result.bool&&result.targets){
player.addTempSkill("dz_chanjian_cd");
player.logSkill("dz_chanjian",result.targets[0]);
trigger.player.line(result.targets[0],'green');
result.targets[0].damage(trigger.player);
}
},
                        sub:true,
                    },
                    cd:{
                        sub:true,
                    },
                },
            },
            "dz_huotin":{
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
"step 0"
player.draw(player.maxHp);
"step 1"
player.chooseCardTarget({
filterCard:true,
selectCard:2,
position:'he',
filterTarget:function(card,player,target){
return player!=target;
},
ai1:function(card){
var att=0;
if(get.color(card)=="red") att+=5;
if(card.name=='du') return 20+att;
return 6+att-get.value(card);
},
ai2:function(target){
var att=get.attitude(_status.event.player,target);
if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
if(target.hasSkillTag('nodu')) return 0.1;
return 1-att;
}
return att-3;
},
prompt:"交给一名其他角色俩张牌",
}).set("forced",true);
"step 2"
if(result.bool){
event.target=result.targets[0];
player.chat(["与君共度良辰，实乃人生乐事。","得君圣宠，妾身幸甚乐甚。"].randomGet());
player.line(event.target);
event.target.gain(result.cards,player,'give');
event.target.skipList.push('phaseDraw');
};
},
            },
            "dz_yuejia":{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
return player.countCards("he");
},
                content:function (){
"step 0"
player.chooseCard('你可以将一张牌置于武将牌上作为“甲”',"he");
"step 1"
if(result.bool){
player.logSkill("dz_yuejia");
player.addMark("dz_yuejia");
player.lose(result.cards,ui.special,'toStorage');
player.addTempSkill("dz_yuejia_buff",{player:"phaseBegin"});
player.storage.dz_yuejia_buff=player.storage.dz_yuejia_buff.concat(result.cards);
player.syncStorage('yuejia_buff');
player.markSkill('dz_yuejia_buff');
game.log(player,'将',result.cards,'置于武将牌上作为“甲”');
}
},
                intro:{
                    content:"已发动过#次技能",
                },
                subSkill:{
                    buff:{
                        init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
                        intro:{
                            content:"cards",
                            onunmark:function (storage,player){
if(storage&&storage.length){
player.$throw(storage,1000);
game.cardsDiscard(storage);
game.log(storage,'被置入了弃牌堆');
storage.length=0;
}
},
                        },
                        marktext:"甲",
                        mod:{
                            targetEnabled:function (card,player,target,now){
if(target!=player&&target.storage.dz_yuejia_buff&&target.storage.dz_yuejia_buff.length>0){
if(get.suit(card)==get.suit(target.storage.dz_yuejia_buff[0])) return false;
}
},
                        },
                        sub:true,
                    },
                },
            },
            "dz_cangfeng":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event,player){
return event.card.name=='shan';
},
                forced:true,
                content:function (){
"step 0";
player.draw();
"step 1"
if(_status.currentPhase&&_status.currentPhase.isAlive()){
_status.currentPhase.draw();
}
},
                mod:{
                    cardname:function (card,player){
if(_status.currentPhase!=player&&card.name=='sha') return 'shan';
},
                    cardnature:function (card,player){
if(_status.currentPhase!=player&&card.name=='sha') return false;
},
                },
                ai:{
                    useShan:true,
                },
            },
            "dz_zhenfu":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                limited:true,
                filterTarget:function (card,player,target){
return target!=player&&player.canUse({name:'sha'},target);
},
                skillAnimation:true,
                animationColor:"metal",
                content:function (){
"step 0"
player.awakenSkill('dz_zhenfu');
player.loseMaxHp();
event.num=Math.min(player.countMark("dz_yuejia"),target.maxHp);
"step 1"
if(event.num>0){
event.num--
if(player.canUse({name:'sha'},target)&&target.isAlive()){
player.useCard({name:"sha",isCard:true},target,false,'noai');
}else event.finish();
}else event.finish();
"step 2"
if(event.num>0) event.goto(1);
},
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
var num=get.effect(target,{name:'sha'},player,player);
var num2=Math.min(player.countMark("dz_yuejia"),target.maxHp);
if(num<=0) return;
return -num*num2;
},
                        player:-1,
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player,skill){
player.storage[skill]=false;
},
            },
            "dz_gulei":{
                trigger:{
                    player:"phaseBegin",
                },
                locked:true,
                direct:true,
                content:function (){
"step 0"
player.chooseTarget(get.prompt2('dz_gulei'),function(card,player,target){
return target!=player;
}).set('ai',function(target){
var player=_status.event.player;
var att=get.attitude(player,target);
if(att==0) att=1;
return 100-att;
});
"step 1"
if(result.bool){
player.chat(["固之壁垒，可保无毁！","我等不动，则敌自溃！"].randomGet());
var target=result.targets[0];
player.logSkill("dz_gulei",target);
player.addTempSkill('dz_gulei_buff',{player:'phaseBeginStart'});
player.storage.dz_gulei_buff.add(target);
player.markSkill('dz_gulei_buff');
}
},
                subSkill:{
                    buff:{
                        trigger:{
                            global:"damageBegin4",
                        },
                        charlotte:true,
                        forced:true,
                        logTarget:"source",
                        filter:function (event,player){
return event.player==player&&player.storage.dz_gulei_buff.contains(event.source);
},
                        content:function (){
'step 0'
player.chat(["固之壁垒，可保无毁！","我等不动，则敌自溃！"].randomGet());
trigger.source.chooseToDiscard("【固垒】：弃置一张牌或者防止即将对"+get.translation(trigger.player)+"造成的伤害。","he").set('ai',function(card){
var player=_status.event.player;
var source=_status.event.getTrigger().player;
if(get.attitude(source,player)>0) return -1;
if(get.damageEffect(source,player,player)>0) return 6-get.value(card);
return -1;
});
'step 1'
if(!result.bool) trigger.cancel();
},
                        onremove:true,
                        intro:{
                            content:"已选中$为技能目标",
                        },
                        init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
                        sub:true,
                    },
                },
            },
            "dz_huoyou":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
return player.countCards("h");
},
                filterTarget:function (card,player,target){
return target!=player;
},
                content:function (){
'step 0'
player.chat(["吾有攻城野战之功，而其徒以辩立点功矣，其位更在吾之上，吾必羞之！","吾为粗野之人，不意将军如此之厚兮！"].randomGet());
player.showHandcards();
"step 1"
var num=0;
if(player.countCards('h',{type:"basic"})) num++;
if(player.countCards('h',{type:["trick","delay"]})) num++;
if(player.countCards('h',{type:"equip"})) num++;
target.discardPlayerCard("弃置其中每种类型的卡牌各一张然后你与"+get.translation(player)+"各回复一点体力或点击【取消】展示所有手牌。",player,'visible','h',num).set('filterButton',function(button){
for(var i=0;i<ui.selected.buttons.length;i++){
if(get.type(button.link,"trick")==get.type(ui.selected.buttons[i].link,"trick")) return false;
}
return true;
});
"step 2"
if(result.bool){
player.recover();
target.recover();
}else target.showHandcards();
},
                ai:{
                    order:12,
                    result:{
                        target:-1,
                    },
                },
            },
            "dz_wanbi":{
                trigger:{
                    player:["useCard","respond"],
                },
                direct:true,
                filter:function (event,player){
return _status.currentPhase!=player;
},
                content:function (){
"step 0"
player.chooseTarget(get.prompt2('dz_wanbi'),true).set('ai',function(target){
var player=_status.event.player;
var att=get.attitude(player,target);
if(att>0) return att;
return 0;
});
"step 1"
if(result.bool){
player.chat(["秦王奸诈，尔等且护壁归国。","我国宝物，旁人休要觊觎！"].randomGet());
var target=result.targets[0];
player.logSkill("dz_wanbi",target);
target.draw();
}
},
                mod:{
                    canBeDiscarded:function (card){
if(get.position(card)=='h'||get.type(card)=="equip") return false;
},
                    canBeGained:function (card){
if(get.position(card)=='h'||get.type(card)=="equip") return false;
},
                },
            },
            "dz_kuiwu":{
                trigger:{
                    global:"phaseUseEnd",
                },
                logTarget:"player",
                filter:function (event,player){
return event.player!=player&&player.canCompare(event.player)&&event.player.getHistory('sourceDamage',function(evt){
return evt.isPhaseUsing();
}).length>0;
},
                content:function (){
"step 0"
player.chooseToCompare(trigger.player);
"step 1"
var target=trigger.player;
player.chat(["五步之内，相如请得以颈血溅大王矣！","我王鼓瑟，秦王理当击缶。"].randomGet());
if(result.bool){
target.damage();
target.addTempSkill("dz_kuiwu_debuff");
target.storage.dz_kuiwu_debuff++;
target.markSkill("dz_kuiwu_debuff");
}
if(!result.bool&&result.tie){
target.addTempSkill("dz_kuiwu_debuff");
target.storage.dz_kuiwu_debuff++;
target.markSkill("dz_kuiwu_debuff");
}
},
                subSkill:{
                    debuff:{
                        init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=0;
},
                        intro:{
                            content:"本回合手牌上限-#",
                        },
                        mod:{
                            maxHandcard:function (player,num){
return num-player.storage.dz_kuiwu_debuff;
},
                        },
                        onremove:true,
                        sub:true,
                    },
                },
            },
            "dz_youai":{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
return player.countCards("h",{name:"sha"});
},
                filterTarget:function (card,player,target){
return target!=player&&target.countCards("h");
},
                filterCard:function (card){
return get.name(card)=='sha';
},
                content:function (){
"step 0"
player.chat(["一夜白发，但求否抓！","楚国君臣，将苦兵矣！"].randomGet());
"step 1"
player.discardPlayerCard(target,true,'he');
"step 2"
if(get.name(result.cards[0])=="sha"&&target.countCards("h")){
player.chooseBool('是否再次发动【忧艾】？');
}elseevent.finish();
"step 3"
if(result.bool){
event.goto(1);
}
},
            },
            "dz_bianshi":{
                trigger:{
                    global:["loseAfter","cardsDiscardEnd"],
                },
                direct:true,
                global:"dz_bianshi_debuff2",
                filter:function (event,player){
if(_status.currentPhase!=player) return false;
for(var i=0;i<event.cards.length;i++){
if(event.cards[i].name=="sha"&&get.position(event.cards[i])=="d") return true;
}
return false;
},
                content:function (){
"step 0"
event.cards=[];
for(var i=0;i<trigger.cards.length;i++){
if(trigger.cards[i].name=="sha"&&get.position(trigger.cards[i])=="d") event.cards.add(trigger.cards[i]);
}
"step 1"
var card=event.cards.shift();
event.card=card;
player.chooseTarget('你可以将'+get.translation(card)+'交给一名其他角色并视为对其使用一张【杀】',function(card,player,target){
return target!=player;
}).set('ai',function(target){
return get.effect(player,{name:'sha'},target,target);
});
"step 2"
if(result.bool){
var target=result.targets[0];
player.chat(["吾日暮矣，而路尚遥，故吾欲逆。","掘楚平王墓，挖尸，鞭之三百鞭，以解心中之恨！"].randomGet());
player.logSkill("dz_bianshi",target);
player.give(event.card,target);
if(player.canUse({name:'sha'},target,false)){
player.useCard({name:"sha",isCard:true},target,false,'noai').card.dz_bianshi=true;
player.addTempSkill("dz_bianshi_Dya");
target.addTempSkill("dz_bianshi_Dyb");
}
}
"step 3"
if(event.cards.length>0) event.goto(1);
},
                subSkill:{
                    Dya:{
                        trigger:{
                            global:"dyingAfter",
                        },
                        forced:true,
                        charlotte:true,
                        filter:function (event,player){
var evt=event.getParent();
return event.player.isAlive()&&evt.card&&evt.card.dz_bianshi;
},
                        content:function (){
"step 0"
player.loseHp();
"step 1"
if(player.countCards("he")) player.chooseToDiscard("【鞭尸】：请弃置一张牌","he",1,true);
},
                        sub:true,
                    },
                    Dyb:{
                        trigger:{
                            player:"dyingBegin",
                        },
                        forced:true,
                        popup:false,
                        charlotte:true,
                        filter:function (event,player){
var evt=event.getParent();
return evt.card&&evt.card.dz_bianshi;
},
                        content:function (){
player.addTempSkill("dz_bianshi_debuff",{player:"dyingEnd"});
},
                        sub:true,
                    },
                    debuff:{
                        sub:true,
                    },
                    "debuff2":{
                        mod:{
                            cardSavable:function (card,player,target){
if(card.name=='tao'&&target!=player&&target.hasSkill('dz_bianshi_debuff')) return false;
},
                        },
                        sub:true,
                    },
                },
            },
            "dz_hedao":{
                trigger:{
                    player:"damageEnd",
                },
                logTarget:"source",
                filter:function (event,player){
return (event.source!=undefined&&event.num>0&&event.source.countCards("h"));
},
                content:function (){
"step 0"
event.num=trigger.num;
"step 1"
event.num--;
player.viewHandcards(trigger.source);
"step 2"
var list=[];
var cards=trigger.source.getCards("h");
for(var i=0;i<cards.length;i++){
list.add(get.suit(cards[i]));
}
if(list.length>1){
player.chat(["行善积德,恬淡内守。","因天之序，合道而行。"].randomGet());
player.chooseControl(list).set('prompt','请选择一个花色').ai=function(){return list.randomGet()};
}else{
event._result={control:list[0]};
}
"step 3"
if(result.control){
var suit=result.control;
var cards=trigger.source.getCards("h",{suit:suit});
player.chat(get.translation(suit+2));
game.log(player,'选择了','#y'+get.translation(suit+2));
trigger.source.give(cards,player);
}
"step 4"
if(event.num>0&&trigger.source.countCards("h")){
player.chooseBool(get.prompt2('dz_hedao'));
}else event.finish();
"step 5"
if(result.bool){
player.logSkill("dz_hedao",trigger.source);
event.goto(1);
}
},
            },
            "dz_yunyou":{
                trigger:{
                    global:"phaseAfter",
                },
                forced:true,
                filter:function (event,player){
return player.getHistory('damage').length>0;
},
                content:function (){
"step 0"
player.chat(["风烈虎啸，云游龙驤。","云游西国，不复再遇。"].randomGet());
player.chooseControl('红色','黑色').set('ai',function(){
var player=_status.event.player;
if(player.countCards('h',{color:'red'})>player.countCards('h',{color:'black'})) return '红色';
return '黑色';
}).set('prompt','云游：选择一种颜色并执行一个额外回合该回合内仅能使用与你选择的颜色相同的牌另一种颜色的牌不计入手牌上限');
"step 1"
if(result.control=="红色"){
player.storage.dz_yunyou_phase="red";
}else player.storage.dz_yunyou_phase="black";
player.addTempSkill("dz_yunyou_phase");
player.insertPhase();
},
                subSkill:{
                    phase:{
                        onremove:true,
                        mod:{
                            "cardEnabled2":function (card,player){
if(get.itemtype(card)=='card'&&player.storage.dz_yunyou_phase&&player.storage.dz_yunyou_phase!=get.color(card)) return false;
},
                            ignoredHandcard:function (card,player){
if(player.storage.dz_yunyou_phase&&get.color(card)!=player.storage.dz_yunyou_phase){
return true;
}
},
                            cardDiscardable:function (card,player,name){
if(name=='phaseDiscard'&&player.storage.dz_yunyou_phase&&get.color(card)!=player.storage.dz_yunyou_phase){
return false;
}
},
                        },
                        sub:true,
                    },
                },
            },
            "dz_fadu":{
                group:["dz_fadu_player","dz_fadu_target"],
                subSkill:{
                    player:{
                        trigger:{
                            player:"useCardToPlayer",
                        },
                        direct:true,
                        filter:function (event,player){
var bool=game.hasPlayer(function(target){
return target.canUse(event.card,event.target,false)&&target!=player;
});
if(event.targets.length>1||player.hasSkill("dz_fadu_cd")) return false;
if(event.target==player||!bool) return false;
return true;
},
                        content:function (){
"step 0"
player.chooseTarget(get.prompt2('dz_fadu'),function(card,player,target){
if(player==target) return false;
var trigger=_status.event;
return target.canUse(trigger.card,trigger.target,false);
}).set('ai',function(target){
var trigger=_status.event.getTrigger();
var player=_status.event.player;
return get.effect(target,trigger.card,player,player)+0.01;
}).set('target',trigger.target).set('card',trigger.card);
"step 1"
if(result.bool){
player.chat(["法之所加，智者弗能辞，勇者弗敢争。","刑过不避大臣,赏善不遗匹夫。"].randomGet());
var target=result.targets[0];
player.logSkill("dz_fadu",target);
player.addTempSkill("dz_fadu_cd");
trigger.getParent().player=target;
game.log(target,'成为了',trigger.card,'的使用者');
}
},
                        sub:true,
                    },
                    target:{
                        trigger:{
                            target:"useCardToPlayer",
                        },
                        direct:true,
                        filter:function (event,player){
var bool=game.hasPlayer(function(target){
return event.player.canUse(event.card,target,false)&&target!=player;
});
if(event.targets.length>1||player.hasSkill("dz_fadu_cd")) return false;
if(event.player==player||!bool) return false;
return true;
},
                        content:function (){
"step 0"
player.chooseTarget(get.prompt2('dz_fadu'),function(card,player,target){
if(player==target) return false;
var trigger=_status.event;
return trigger.player2.canUse(trigger.card,target,false);
}).set('ai',function(target){
var trigger=_status.event.getTrigger();
var player=_status.event.player;
return get.effect(target,trigger.card,player,player)+0.01;
}).set('target',trigger.target).set('card',trigger.card).set('player2',trigger.player);
"step 1"
if(result.bool){
player.chat(["法之所加，智者弗能辞，勇者弗敢争。","刑过不避大臣,赏善不遗匹夫。"].randomGet());
var target=result.targets[0];
player.logSkill("dz_fadu",target);
player.addTempSkill("dz_fadu_cd");
trigger.targets.length=0;
trigger.getParent().triggeredTargets1.length=0;
trigger.getParent().targets.push(target);
game.log(target,'成为了',trigger.card,'的目标');
}
},
                        sub:true,
                    },
                    cd:{
                        sub:true,
                    },
                },
            },
            "dz_shuonan":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
return player.countCards("h");
},
                filterTarget:function (card,player,target){
return target.countCards("h");
},
                content:function (){
"step 0"
player.chat(["谏说之士，不可不察爱憎之主而后说也。","非知之难也，处知则难也。"].randomGet());
if(player!=target){
target.chooseBool('是否展示手牌？');
}else{
event._result={bool:false};
}
"step 1"
if(result.bool){
target.showHandcards();
var next=game.createEvent('dz_shuonan',false);
next.player=target;
next.target=player;
next.setContent(lib.skill.dz_shuonan.contentx);
}else{
player.showHandcards();
var next=game.createEvent('dz_shuonan',false);
next.player=player;
next.target=target;
next.setContent(lib.skill.dz_shuonan.contentx);
}
},
                contentx:function (){
"step 0"
var cards=target.getCards('h');
var bool=false;
for(var i=0;i<cards.length;i++){
if(player.canUse(cards[i],target)){
bool=true;
}
}
if(bool){
player.chooseButton(['请选择一张手牌对'+get.translation(target)+'使用',player.getCards('h')],true).set('ai',get.buttonValue).set('filterButton',function(button){
var card=button.link;
if(!lib.filter.cardEnabled(card,target)) return false;
if(player.canUse(card,target)) return true;
return false;
});
}else event.finish();
"step 1"
if(result.bool){
player.useCard(result.links[0],target,false,'noai');
}
},
            },
            "dz_chuwu":{
                trigger:{
                    player:["phaseDrawBegin","phaseUseBegin","phaseDiscardBegin"],
                },
                direct:true,
                content:function (){
'step 0'
player.chooseTarget(get.prompt('dz_chuwu'),'弃置一名其他角色一张牌',function(card,player,target){
return target!=player&&target.countDiscardableCards(player,'hej')>0;
}).ai=function(target){
var player=_status.event.player;
return get.effect(target,{name:'guohe'},player,player);
};
"step 1"
if(result.bool){
player.chat(["摒弃陋习，大禁巫风。","惩除凶恶，除害兴利。"].randomGet());
var target=result.targets[0];
player.logSkill("dz_chuwu",target);
player.getHistory('custom').push({dz_chuwu:target});
player.discardPlayerCard(target,'he',true)
}
},
            },
            "dz_zhiye":{
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
return player.getHistory('custom',function(evt){
return evt.dz_chuwu&&evt.dz_chuwu.isAlive()&&!evt.dz_chuwu.countCards("h");
}).length;
},
                content:function (){
                player.chat(["寓兵于农、藏粮于民。","清廉刻苦，不谋私利。"].randomGet());
var history=player.getHistory('custom',function(evt){
return evt.dz_chuwu&&evt.dz_chuwu.isAlive()&&!evt.dz_chuwu.countCards("h");
});
var num=[];
for(var i=0;i<history.length;i++){
var px=history[i].dz_chuwu;
num.add(px);
}
player.draw(num.length);
},
            },
            "dz_jiandai":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterCard:function (card,player){
if(!ui.selected.cards) return true;
for(var i=0;i<ui.selected.cards.length;i++){
var cardb=ui.selected.cards[i];
if(get.suit(card)==get.suit(cardb)) return false;
}
return true;
},
                selectCard:[1,Infinity],
                filter:function (event,player){
return player.countCards('h')>0;
},
                check:function (card){
var val=get.value(card);
return 7-get.value(card);
},
                filterTarget:function (card,player,target){
return player!=target;
},
                content:function (){
"step 0"
player.chat(["大王外不修诸侯之礼，内不秉国家之治，非长计也。","谄谀强于左右，邪伪立于本朝，大王不可不察！"].randomGet());
var suits=[];
var num=0;
for(var i=0;i<cards.length;i++){
var suit=get.suit(cards[i]);
if(target.countCards("he",{suit:suit})){
suits.add(suit);
num++;
}
}
if(num>0){
target.chooseToDiscard("【谏殆】：请弃置"+num+"张花色为"+get.translation(suits)+"且花色各不相同的牌。","he",true,num,function(card){
if(ui.selected.cards.length>0){
for(var i=0;i<ui.selected.cards.length;i++){
var cardb=ui.selected.cards[i];
if(get.suit(card)==get.suit(cardb)) return false;
}
}
return suits.contains(get.suit(card));
}).set('complexCard',true);
}
"step 1"
var num=cards.length;
if(result.cards&&result.cards.length>0) num-=result.cards.length;
if(num>0) player.draw(num);
},
                ai:{
                    order:7,
                    result:{
                        target:-1,
                    },
                },
            },
            "dz_baihou":{
                trigger:{
                    player:"phaseEnd",
                },
                limited:true,
                forced:true,
                animationColor:"thunder",
                skillAnimation:"epic",
                filter:function (event,player){
var suits=[];
var evts=player.getHistory('lose',function(evt){
return evt.getParent(2).skill&&evt.getParent(2).skill=="dz_jiandai";
});
for(var i=0;i<evts.length;i++){
var cards=evts[i].getParent(2).cards;
for(var j=0;j<cards.length;j++){
suits.add(get.suit(cards[j]));
}
}
return suits.length==4;
},
                content:function (){
"step 0"
player.awakenSkill('dz_baihou');
player.chat(["丑妾愿为大齐之后，以彰大王之德。","妾身自荐枕席，还望大王纳之。"].randomGet());
"step 1"
player.draw(4);
player.gainMaxHp();
bool=game.hasPlayer(function(target){
return target.sex=="male";
});
if(bool){
player.chooseTarget("【拜后】：选择一名男性角色令其回复一点体力。",function(card,player,target){
return target.sex=="male";
}).set('ai',function(target){
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
});
}
"step 2"
player.recover();
if(result.bool){
player.line(result.targets[0]);
result.targets[0].recover();
}
},
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player,skill){
player.storage[skill]=false;
},
            },
            "dz_shibiao":{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
"step 0"
player.chooseTarget("【师表】：选择一名其他角色令其下个回合内出牌受到一些限制？",function(card,player,target){
return target!=player;
}).set('ai',function(target){
return -1;
});
"step 1"
if(result.bool){
player.chat(["为人师者，当省身以率之也。","重吾德业，方可为人之师表。"].randomGet());
var list=[];
var cards=[];
var natures=[];
var history=player.getHistory('useCard');
var target=result.targets[0];
player.logSkill("dz_shibiao",target);
for(var i=0;i<history.length;i++){
var name=history[i].card.name;
if(get.type({name:name})!="equip") cards.add(name);
if(name=="sha"&&!history[i].card.nature) natures.add("null");
if(name=="sha"&&history[i].card.nature) natures.add(history[i].card.nature);
}
for(var i=0;i<cards.length;i++){
var name=cards[i];
var type=get.type(name,"trick");
if(name=="sha"){
if(natures.contains("null")) list.push([type,'','sha']);
if(natures.contains("fire")) list.push([type,'','sha','fire']);
if(natures.contains("thunder")) list.push([type,'','sha','thunder']);
if(natures.contains("ice")) list.push([type,'','sha','ice']);
}else list.push([type,'',name]);
}
target.storage.dz_shibiao_buff=list;
target.addTempSkill("dz_shibiao_buff",{player:"phaseAfter"});
}
},
                subSkill:{
                    wuxie:{
                        prompt:"将一张手牌当做无懈可击使用",
                        enable:"chooseToUse",
                        filter:function (event,player){
if(player.storage.dz_shibiao_buff2&&player.storage.dz_shibiao_buff2.contains("wuxie")) return false;
var list=player.storage.dz_shibiao_buff;
for(var i=0;i<list.length;i++){
if(list[i][2]=="wuxie") return player.countCards('he');
}
return false;
},
                        onuse:function (result,player){
if(!player.storage.dz_shibiao_buff2) player.storage.dz_shibiao_buff2=[];
player.storage.dz_shibiao_buff2.add("wuxie");
},
                        filterCard:true,
                        position:"he",
                        selectCard:1,
                        viewAs:{
                            name:"wuxie",
                        },
                        check:function (card){
return 6-get.value(card);
},
                        ai:{
                            skillTagFilter:function (player){
if(player.storage.dz_shibiao_buff2&&player.storage.dz_shibiao_buff2.contains("wuxie")) return false;
var list=player.storage.dz_shibiao_buff;
for(var i=0;i<list.length;i++){
if(list[i][2]=="wuxie") return player.countCards('wuxie');
}
},
                            threaten:1.5,
                            respondShan:true,
                            basic:{
                                useful:[6,4],
                                value:[6,4],
                            },
                            result:{
                                player:1,
                            },
                            expose:0.2,
                        },
                        sub:true,
                    },
                    shan:{
                        prompt:"将一张牌当做闪使用",
                        enable:"chooseToUse",
                        filter:function (event,player){
if(player.storage.dz_shibiao_buff2&&player.storage.dz_shibiao_buff2.contains("shan")) return false;
var list=player.storage.dz_shibiao_buff;
for(var i=0;i<list.length;i++){
if(list[i][2]=="shan") return player.countCards('he');
}
return false;
},
                        onuse:function (result,player){
if(!player.storage.dz_shibiao_buff2) player.storage.dz_shibiao_buff2=[];
player.storage.dz_shibiao_buff2.add("shan");
},
                        filterCard:true,
                        position:"he",
                        selectCard:1,
                        viewAs:{
                            name:"shan",
                        },
                        check:function (card){
return 6-get.value(card);
},
                        ai:{
                            skillTagFilter:function (player){
if(player.storage.dz_shibiao_buff2&&player.storage.dz_shibiao_buff2.contains("shan")) return false;
var list=player.storage.dz_shibiao_buff;
for(var i=0;i<list.length;i++){
if(list[i][2]=="shan") return player.countCards('he');
}
},
                            threaten:1.5,
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
                        sub:true,
                    },
                    buff:{
                        audio:"dz_shibiao",
                        enable:"chooseToUse",
                        group:["dz_shibiao_shan","dz_shibiao_wuxie"],
                        hiddenCard:function (player,name){
if(player.storage.dz_shibiao_buff2&&player.storage.dz_shibiao_buff2.contains(name)) return false;
var list=player.storage.dz_shibiao_buff;
for(var i=0;i<list.length;i++){
if(list[i][2]==name) return true;
}
},
                        filter:function (event,player){
return event.type!='wuxie'&&event.type!='respondShan'&&player.countCards('he')>0&&player.storage.dz_shibiao_buff.length>0&&_status.currentPhase==player;
},
                        init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
                        onremove:function (player,skill){
player.storage.dz_shibiao_buff2=[];
},
                        chooseButton:{
                            dialog:function (event,player){
var list=player.storage.dz_shibiao_buff;
if(list.length==0){
return ui.create.dialog('无可用牌');
}
return ui.create.dialog('师表',[list,'vcard']);
},
                            filter:function (button,player){
if(player.storage.dz_shibiao_buff2&&player.storage.dz_shibiao_buff2.contains(button.link[2])) return false;
return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
},
                            check:function (button){
var player=_status.event.player;
if(player.countCards('h',button.link[2])>0) return 0;
if(button.link[2]=='wugu') return;
var effect=player.getUseValue(button.link[2]);
if(effect>0) return effect;
return 0;
},
                            backup:function (links,player){
return {
filterCard:true,
selectCard:1,
popname:true,
check:function(card){
return 6-get.value(card);
},
position:'h',
viewAs:{name:links[0][2],nature:links[0][3]},
onuse:function(result,player){
if(!player.storage.dz_shibiao_buff2) player.storage.dz_shibiao_buff2=[];
player.storage.dz_shibiao_buff2.add(result.card.name);
},
}
},
                            prompt:function (links,player){
return '将一张手牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
},
                        },
                        mod:{
                            cardEnabled:function (card,player){
if(!player.storage.dz_shibiao_buff||_status.currentPhase!=player||get.type(card)=="equip") return;
var list=[];
for(var i=0;i<player.storage.dz_shibiao_buff.length;i++){
var card2=player.storage.dz_shibiao_buff[i];
list.add(card2[2]);
}
if(!list.contains(card.name)) return false;
},
                            cardRespondable:function (card,player){
if(!player.storage.dz_shibiao_buff||_status.currentPhase!=player||get.type(card)=="equip") return;
var list=[];
for(var i=0;i<player.storage.dz_shibiao_buff.length;i++){
var card2=player.storage.dz_shibiao_buff[i];
list.add(card2[2]);
}
if(!list.contains(card.name)) return false;
},
                            cardSavable:function (card,player){
if(!player.storage.dz_shibiao_buff||_status.currentPhase!=player||get.type(card)=="equip") return;
var list=[];
for(var i=0;i<player.storage.dz_shibiao_buff.length;i++){
var card2=player.storage.dz_shibiao_buff[i];
list.add(card2[2]);
}
if(!list.contains(card.name)) return false;
},
                        },
                        ai:{
                            order:4,
                            result:{
                                player:function (player){
return 1;
},
                                threaten:1.9,
                            },
                        },
                        sub:true,
                    },
                },
            },
            "dz_zhongyong":{
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function (event,player){
return player.countCards("h");
},
                prompt:function (event,player){
var suits=[];
for(var i=0;i<player.getCards("h").length;i++){
suits.add(get.suit(player.getCards("h")[i]));
}
var num=lib.suit.length-suits.length
return get.prompt('dz_zhongyong')+'（可摸'+get.cnNumber(num)+'张牌）'
},
                content:function (){
"step 0"
player.chat(["不愆于义方，不诡其逢而守其常。","不愆不忘，率由旧章。"].randomGet());
player.showHandcards();
"step 1"
var suits=[];
for(var i=0;i<player.getCards("h").length;i++){
suits.add(get.suit(player.getCards("h")[i]));
}
var num=lib.suit.length-suits.length
if(num>0) player.draw(num);
},
            },
            "dz_moshou":{
                trigger:{
                    target:"useCardToTargeted",
                },
                forced:true,
                audio:"ext:先秦杀:2",
                filter:function (event,player){
var num=0;
var bool=0;
var delay=[];
if(!_status.currentPhase||_status.currentPhase.storage._disableJudge) return false; 
for(var i=0;i<lib.inpile.length;i++){
var name=lib.inpile[i];
var type=get.type(name);
if(type=="delay"&&player.canUse({name:name},_status.currentPhase,false)) bool++;
}
var players=game.filterPlayer2(function(current){
return current.getHistory('useCard',function(evt){
return evt.targets.contains(player);
}).length>0;
});
for(var i=0;i<players.length;i++){
num+=players[i].getHistory('useCard',function(evt){
return evt.targets.contains(player);
}).length;
}
if(num==1) return true;
if(num==2) return event.cards&&event.cards.length>0&&bool;
return false;
},
                content:function (){
"step 0"
player.chat(["深谋备御，亟敌为上。","非攻止战，以弱胜强。"].randomGet());
var num=0;
var players=game.filterPlayer2(function(current){
return current.getHistory('useCard',function(evt){
return evt.targets.contains(player);
}).length>0;
});
for(var i=0;i<players.length;i++){
num+=players[i].getHistory('useCard',function(evt){
return evt.targets.contains(player);
}).length;
}
if(num==1){
player.draw();
event.finish();
}
"step 1"
event.cards=[];
event.ban=[];
event.bool=false;
for(var i=0;i<lib.inpile.length;i++){
var name=lib.inpile[i];
var type=get.type(name);
if(type=="delay"){
event.cards.add(name);
if(!lib.filter.judge({name:name},player,_status.currentPhase)) event.ban.add(name);
}
}
for(var i=0;i<event.cards.length;i++){
var type=get.type(event.cards[i]);
event.cards[i]=[type,'',event.cards[i]];
}
for(var i=0;i<event.cards.length;i++){
var name=event.cards[i][2];
for(var j=0;j<trigger.cards.length;j++){
var card=trigger.cards[j];
var bool=lib.filter.judge({name:name,suit:get.suit(card),number:card.number},player,_status.currentPhase);
if(bool) event.bool=true;
}
}
if(event.bool){
if(trigger.cards.length>1){
var dialog=['请选择其中一张对'+get.translation(_status.currentPhase)+'使用',[event.cards,'vcard'],"原卡牌",trigger.cards];
}else{
var dialog=['请选择其中一张对'+get.translation(_status.currentPhase)+'使用',[event.cards,'vcard']]
}
player.chooseButton(dialog).set('ai',function(button){
var val=get.value(card)||1;
return val;
}).set('filterButton',function(button){
var card=button.link;
var c1=0;
var c2=0;
var bool=lib.filter.judge({name:name,suit:get.suit(card),number:card.number},player,_status.currentPhase);
var ub=ui.selected.buttons;
for(var i=0;i<ub.length;i++){
if(event.cards.contains(ub[i].link)){
if(!name) name=get.name(ub[i]);
c1++;
}else c2++;
}
if(event.cards.contains(card)&&(c1||event.ban.contains(card[2]))) return false;
if(trigger.cards.contains(card)&&(!c1||c2||!bool)) return false;
return true;
}).set('selectButton',function(){
if(ui.selected.buttons.length==0) return 1;
var c1=0;
var c2=0;
var ub=ui.selected.buttons;
for(var i=0;i<ub.length;i++){
if(event.cards.contains(ub[i].link)) c1++;
else c2++;
}
if(c1>1||c2>1) return 2*Math.max(c1,c2);
if(trigger.cards.length>1) return 2;
return 1;
});
}else event.finish();
"step 2"
if(result.links){
if(result.links.length==1){
_status.currentPhase.$throw(result.links[0]);
_status.currentPhase.addJudge({name:result.links[0][2]},trigger.cards);
//player.useCard({name:result.links[0][2]},trigger.cards,_status.currentPhase,false,'noai')
}
if(result.links.length>1){
for(var i=0;i<result.links.length;i++){
var card=result.links[i];
if(event.cards.contains(card)){
name=card[2];
}else cards=card;
}
_status.currentPhase.$throw(cards);
_status.currentPhase.addJudge({name:name},[cards]);
//player.useCard({name:name},[cards],_status.currentPhase,false,'noai');
}
}
},
            },
            "dz_tianzhi":{
                audio:"ext:先秦杀:2",
                trigger:{
                    global:"judge",
                },
                logTarget:"player",
                filter:function (event,player){
return event.player.countCards('he')>0&&player.countCards("h");
},
                judgeCheck:function (card,bool){
var color=get.color(card);
if(color=='black'){
if(bool) return 5;
return 4;
}else{
if(bool) return 2;
}
return -1;
},
                content:function (){
"step 0"
player.chat(["天之爱，民之厚也。","人者，天之臣也。"].randomGet());
trigger.player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
get.translation(trigger.player.judging[0])+'，'+get.prompt('dz_tianzhi'),'he',function(card){
var player=_status.event.player;
var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
if(mod2!='unchanged') return mod2;
var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
if(mod!='unchanged') return mod;
return true;
}).set('ai',function(card){
var trigger=_status.event.getTrigger();
var player=_status.event.player;
var judging=_status.event.judging;
var result=trigger.judge(card)-trigger.judge(judging);
var attitude=get.attitude(player,trigger.player);
if(attitude==0||result==0){
if(trigger.player!=player) return 0;
if(game.hasPlayer(function(current){
return get.attitude(player,current)<0;
})){
var checkx=lib.skill.dz_tianzhi.judgeCheck(card,true)-lib.skill.dz_tianzhi.judgeCheck(judging);
if(checkx>0) return checkx;
}
return 0;
};
if(attitude>0){
return result;
}
else{
return -result;
}
}).set('judging',trigger.player.judging[0]);
"step 1"
if(result.bool){
trigger.player.respond(result.cards,'highlight','noOrdering');
}
else{
event.finish();
}
"step 2"
if(result.bool){
trigger.player.$gain2(trigger.player.judging[0]);
trigger.player.gain(trigger.player.judging[0]);
var card=result.cards[0];
if(get.color(card)=="red"){
player.draw();
}else{
if(player.countCards("he")) player.chooseToDiscard("【天志】：请弃置一张牌","he",1,true);
}
trigger.player.judging[0]=result.cards[0];
trigger.orderingCards.addArray(result.cards);
game.log(trigger.player,'的判定牌改为',result.cards[0]);
}
"step 3"
game.delay(2);
},
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                },
            },
            "dz_gongtui":{
                audio:"ext:先秦杀:true",
                trigger:{
                    source:"damageSource",
                    player:"damageEnd",
                },
                forced:true,
                logTarget:function (trigger,player){
if(player==trigger.player) return trigger.source;
return player;
},
                init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=false;
},
                filter:function (event,player){
var target=lib.skill.dz_gongtui.logTarget(event,player);
if(target==event.player&&target==event.source) return false;
return event.source!=undefined;
},
                content:function (){
'step 0'
player.chat(["越王长颈鸟喙，可与共患难，却不可与共乐。何故不去？","蜚鸟尽，良弓藏；狡兔死，走狗烹。"].randomGet());
event.target=lib.skill.dz_gongtui.logTarget(trigger,player);
if(!player.storage.dz_gongtui){
if(event.target!=player){
if(event.target.countCards("he")) event.target.chooseToDiscard("he",true);
event.target.draw();
}else{
event.target.draw();
if(event.target.countCards("he")) event.target.chooseToDiscard("he",true);
}
}else{
if(event.target!=player){
if(event.target.countCards("he")) event.target.chooseToDiscard("he",true);
player.draw();
}else{
player.draw();
if(event.target.countCards("he")) player.discardPlayerCard(trigger.player,'he',true)
}
}
},
                ai:{
                    expose:0.25,
                },
            },
            "dz_zuyue":{
                audio:"ext:先秦杀:2",
                trigger:{
                    global:"loseAfter",
                },
                filter:function (event,player){
if(event.type!='discard') return false;
for(var i=0;i<event.cards2.length;i++){
if(get.position(event.cards2[i])=='d'){
return true;
}
}
return false;
},
                direct:true,
                group:"dz_zuyue_reset",
                init:function (player,skill){
if(!player.storage.dz_zuyue) player.storage.dz_zuyue=0;
},
                content:function (){
"step 0"
event.cards=[];
if(trigger.player!=player) event.target=player;
for(var i=0;i<trigger.cards2.length;i++){
if(get.position(trigger.cards2[i])=='d'){
event.cards.add(trigger.cards2[i]);
}
}
if(!event.target){
if(event.cards.length>0){
trigger.player.chooseTarget('你可以将'+get.translation(event.cards)+'交给一名角色').set('ai',function(target){
var att=get.attitude(_status.event.player,target);
if(_status.event.enemy){
return -att;
}
else if(att>0){
return att/(1+target.countCards('h'));
}
else{
return att/100;
}
}).set('enemy',get.value(event.cards[0],player,'raw')<0);
}else event.finish();
}else trigger.player.chooseBool('是否将'+get.translation(event.cards)+'交给'+get.translation(player)+"？").set('ai',function(){
return get.attitude(player,trigger.player)>0;
});
"step 1"
if(result.bool){
player.chat(["越必兴，吴必败！","忍以持志，因而砺坚，君后勿悲，臣与共勉！"].randomGet());
var target=event.target||result.targets[0];
var cards=event.cards;
trigger.player.logSkill("dz_zuyue",target);
target.gain(cards,trigger.player,'giveAuto');
player.storage.dz_zuyue+=cards.length;
}
if(player.storage.dz_zuyue>=10){
player.removeSkill("dz_zuyue");
player.storage.dz_gongtui=true;
}
},
                subSkill:{
                    reset:{
                        trigger:{
                            global:"roundStart",
                        },
                        direct:true,
                        forced:true,
                        content:function (){
player.storage.dz_zuyue=0;
},
                        sub:true,
                    },
                },
            },
            "dz_zhifa":{
                audio:"ext:先秦杀:2",
                trigger:{
                    target:"useCardToTargeted",
                },
                usable:1,
                filter:function (event,player){
return player!=event.player&&event.targets.length>1;
},
                content:function (){
'step 0'
player.draw(trigger.targets.length);
'step 1'
player.showCards(result);
var num=result.length;
player.chooseCardTarget({
prompt:'将'+get.cnNumber(num-1)+'张牌交给其他角色',
prompt2:'操作提示：先按顺序选中所有要给出的牌，然后再按顺序选择等量的目标角色',
selectCard:num-1,
selectTarget:function(){
return ui.selected.cards.length;
},
position:'he',
forced:true,
filterTarget:function(card,player,target){
return player!=target&&_status.event.targets.contains(target);
},
complexSelect:true,
ai1:function(card){
if(card.name=='shan') return 1;
return Math.random();
},
ai2:function(target){
return Math.sqrt(5-Math.max(4,target.countCards('h')))*get.attitude(_status.event.player,target);
},
targets:trigger.targets,
});
'step 2'
if(result.bool){
while(result.cards.length){
var target=result.targets.shift();
var card=result.cards.shift();
target.gain(card,player);
player.$giveAuto(card,target);
}
event.next.sort(function(a,b){
return lib.sort.seat(a.player,b.player);
});
}
},
            },
            "dz_jizhi":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"useCardAfter",
                },
                filter:function (event,player){
return player.isPhaseUsing()&&event.targets.length==1&&event.targets[0].isAlive()&&event.targets[0]!=player&&get.position(event.cards[0])=='d';
},
                content:function (){
'step 0'
event.target=trigger.targets[0];
event.target.gain(trigger.cards,"gain2");
'step 1'
if(event.target.canUse(trigger.card,player,false)){
event.target.useCard(trigger.card,trigger.cards,player,false,'noai');
}
if(!event.target.storage.dz_jizhi_debuff) event.target.storage.dz_jizhi_debuff=[];
event.target.storage.dz_jizhi_debuff.add(trigger.card.name);
event.target.addTempSkill("dz_jizhi_debuff",{player:"phaseEnd"});
},
                subSkill:{
                    debuff:{
                        onremove:true,
                        charlotte:true,
                        mod:{
                            cardEnabled:function (card,player,target){ 
if(player.storage.dz_jizhi_debuff.contains(card.name)) return false; 
},
                            cardUsable:function (card,player,target){ 
if(player.storage.dz_jizhi_debuff.contains(card.name)) return false; 
},
                            cardRespondable:function (card,player,target){ 
if(player.storage.dz_jizhi_debuff.contains(card.name)) return false; 
},
                            cardSavable:function (card,player,target){ 
if(player.storage.dz_jizhi_debuff.contains(card.name)) return false; 
},
                        },
                        sub:true,
                    },
                },
            },
            "dz_sanqian":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                init:function (player){
if(!player.storage.dz_sanqian) player.storage.dz_sanqian=0;
},
                filter:function (event,player){
return player.storage.dz_sanqian<=3;
},
                content:function (){
'step 0'
player.chooseTarget(get.prompt2('dz_sanqian'),function(card,player,target){
return target!=player;
});
"step 1"
if(result.bool){
player.chat(["此非所以居子也！","此地不宜子居，当速迁之！"].randomGet());
var target=result.targets[0];
player.storage.dz_sanqian++;
player.logSkill("dz_sanqian",target);
game.broadcastAll(function(player,target){
game.swapSeat(player,target);
},player,target)
}
},
            },
            "dz_yuxue":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
return target!=player;
},
                filter:function (event,player){
return player.countCards("h");
},
                content:function (){
'step 0'
player.chat(["中道废而不为，不为盗窃则为虏役矣！","断织督学，愿子明君子之理。"].randomGet());
target.viewHandcards(player);
'step 1'
if(get.color(player.getCards('h'))!='none'){
event.control=get.color(player.getCards('h'))=="red"?"红色":"黑色";
}else{
player.chooseControl('红色','黑色').set('ai',function(){
var player=_status.event.player;
if(player.countCards('h',{color:'red'})==1&&
player.countCards('h',{color:'black'})>1) return '黑色';
return '红色';
})
}
'step 2'
if(!event.control) event.control=result.control;
var cards;
if(event.control=='红色'){
cards=player.getCards('h',{color:'red'});
}
else{
cards=player.getCards('h',{color:'black'});
}
player.discard(cards);
event.num=cards.length;
'setp 3'
target.draw(event.num*2);
},
            },
            "dz_guanbing":{
                audio:"ext:先秦杀:2",
                trigger:{
                    global:"dying",
                },
                filter:function (event,player){
var stat=player.getStat('dz_guanbing');
return event.player.countCards("h")&&(!stat||!stat.contains(event.player));
},
                content:function (){
"step 0"
player.chat(["君有疾在血脉，不治恐深。","君有疾在胰理，不治将深。"].randomGet());
var stat=player.getStat();
if(!stat.dz_guanbing) stat.dz_guanbing=[];
stat.dz_guanbing.push(trigger.player);
"step 1"
var num=0;
if(trigger.player.countCards('h',{type:"basic"})) num++;
if(trigger.player.countCards('h',{type:["trick","delay"]})) num++;
if(trigger.player.countCards('h',{type:"equip"})) num++;
player.discardPlayerCard("你可以弃置其中每种类型的卡牌各一张并执行相应效果",trigger.player,'visible','h',num).set('filterButton',function(button){
for(var i=0;i<ui.selected.buttons.length;i++){
if(get.type(button.link,"trick")==get.type(ui.selected.buttons[i].link,"trick")) return false;
}
return true;
});
"step 2"
if(result.bool){
var num=result.links.length;
if(num>=1) trigger.player.draw();
if(num>=2) trigger.player.recover();
if(num>=3&&trigger.source!=undefined) trigger.source.loseHp();
}
},
            },
            "dz_huanxin":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
return target.hp<=player.hp||target.countCards("h")<=player.countCards("h")||target.countCards("e")<=player.countCards("e");
},
                complexSelect:true,
                selectTarget:2,
                content:function (){
"step 0"
player.chat(["齐婴汝志弱而体善，无虑而过执。","公扈汝志强而体弱，有谋而不决。"].randomGet());
if(target.hp<=player.hp){
target.recover(player.hp-target.hp);
event.hpB=true;
}
if(target.countCards("h")<=player.countCards("h")){
target.drawTo(player.countCards("h"));
event.hB=true;
}
if(target.countCards("e")<=player.countCards("e")){
var num=0;
var num2=player.countCards("e")-target.countCards("e");
for(var i=0;i<6;i++){
var type='equip'+i;
if(player.isEmpty(type)&&num2>num){
var card=get.cardPile2(function(card){
return get.subtype(card,false)==type&&player.canUse(card,player);
});
if(card){
num++;
target.chooseUseTarget(card,true).nopopup=true;
}
}
}
event.eB=true;
}
"step 1"
if(target==targets[targets.length-1]){
if(event.hpB) player.loseHp();
if(event.hB&&player.countCards("he")) player.chooseToDiscard(true,"he");
if(event.eB) player.discard(player.getCards("e"));
}
},
            },
            "dz_chenyu":{
                mod:{
                    targetEnabled:function (card,player,target,now){
if(target!=player&&_status.currentPhase!=target){
var num=0;
var list=game.filterPlayer(function(c){
return c.getHistory('useCard',function(evt){
return evt.targets.contains(target);
});
});
for(var i=0;i<list.length;i++){
var c=list[i];
var hist=c.getHistory('useCard',function(evt){
return evt.targets.contains(target);
});
num+=hist.length;
}
if(num>=target.hp) return false;
}
},
                },
            },
            "dz_pengxin":{
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                prompt:function (event,player){
var num=player.getHistory('useCard').concat(player.getHistory('respond')).length;
var num2=0;
player.getHistory('lose',function(evt){
if(evt.type=='discard'&&evt.getParent('phaseDiscard')) num2+=evt.cards2.length;
});
var x=Math.max(0,player.maxHp-player.countCards("h"));
if(num>num2) return get.prompt("dz_pengxin")+"(摸"+get.cnNumber(x)+"张牌)";
if(num<num2) return get.prompt("dz_pengxin")+"(回复一点体力)";
},
                filter:function (event,player){
var num=player.getHistory('useCard').concat(player.getHistory('respond')).length;
var num2=0;
player.getHistory('lose',function(evt){
if(evt.type=='discard'&&evt.getParent('phaseDiscard')) num2+=evt.cards2.length;
});
return num!=num2;
},
                content:function (){
"step 0"
player.chat(["捧心而颦，羞待君怜。","心患顽疾，唯君可医。"].randomGet());
var num=player.getHistory('useCard').concat(player.getHistory('respond')).length;
var num2=0;
player.getHistory('lose',function(evt){
if(evt.type=='discard'&&evt.getParent('phaseDiscard')) num2+=evt.cards2.length;
});
if(num>num2) player.drawTo(player.maxHp);
if(num<num2) player.recover();
},
            },
            "dz_zhishu":{
                audio:"ext:先秦杀:2",
                trigger:{
                    global:["loseAfter","useCard"],
                },
                forced:true,
                filter:function (event,player){
if(event.name=="lose"){
if(event.type!='discard') return false;
for(var i=0;i<event.cards2.length;i++){
if(get.type(event.cards2[i])=='equip'){
return true;
}
}
}
if(event.name=="useCard"){
if(get.type(event.card)=='equip') return true;
}
return false;
},
                content:function (){
"step 0"
player.chat(["仗义直书，不避强御！","肆情奋笔，无所阿容！"].randomGet());
if(trigger.name=="lose"){
for(var i=0;i<trigger.cards2.length;i++){
if(get.type(trigger.cards2[i])=='equip'){
if(get.color(trigger.cards2[i])=="red"){
player.addMark("dz_zhishu_1");
}else{
player.addMark("dz_zhishu_2");
}
}
}
}else{
player.draw();
if(get.color(trigger.card)=="red"){
player.addMark("dz_zhishu_1");
}else{
player.addMark("dz_zhishu_2");
}
}
},
                subSkill:{
                    "1":{
                        marktext:"功︎",
                        intro:{
                            name:"直书·功",
                            content:"mark",
                        },
                        sub:true,
                    },
                    "2":{
                        marktext:"过︎",
                        intro:{
                            name:"直书·过",
                            content:"mark",
                        },
                        sub:true,
                    },
                },
            },
            "dz_zhangzheng":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
return player.countMark("dz_zhishu_1")>=2||player.countMark("dz_zhishu_2")>=2;
},
                chooseButton:{
                    dialog:function (event,player){
return ui.create.dialog('###仗正###'+lib.translate.dz_zhangzheng_info);
},
                    chooseControl:function (event,player){
var list=[];
if(player.countMark("dz_zhishu_1")>=2) list.push("移除功");
if(player.countMark("dz_zhishu_2")>=2) list.push("移除过");
list.push('cancel2');
return list;
},
                    check:function (event,player){
return 'cancel2';
},
                    backup:function (result){
var next=get.copy(lib.skill.dz_zhangzheng_X);
next.YC=result.control;
return next;
},
                },
                subSkill:{
                    X:{
                        direct:true,
                        content:function (){
"step 0"
if(lib.skill.dz_zhangzheng_backup.YC=="移除功"){
event.bool=true;
player.removeMark("dz_zhishu_1",2);
}else{
player.removeMark("dz_zhishu_2",2);
}
"step 1"
str=event.bool?"回复":"失去";
player.chooseTarget(true,'选择一名角色令其'+str+'一点体力').set('ai',function(target){
if(event.bool) return 1;
return -1;
});
"step 2"
if(result.bool){
var target=result.targets[0];
player.chat(["史家之言，当据实以述，万不可曲笔！","史之实录，可令淫君乱主畏，而逆臣贼子惧！"].randomGet());
player.logSkill("dz_zhangzheng",target);
if(event.bool){
target.recover();
}else target.loseHp();
if(target!=player&&!target.countCards("h")&&target.countCards("e")){
var cards=target.getGainableCards(player,'e');
player.gain(cards,target,'give','bySelf');
}
}
},
                        sub:true,
                    },
                },
            },
            "dz_zhitian":{
                mark:true,
                intro:{
                    mark:function (dialog,content,player){
if(player!=game.me) return get.translation(player)+'观看牌堆中...';
if(get.itemtype(_status.pileTop)!='card') return '牌堆顶无牌';
dialog.add([_status.pileTop]);
},
                },
            },
            "dz_zhengzhi":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                position:"he",
                filter:function (event,player){
var suit=[];
player.getHistory('lose',function(evt){
if(evt.getParent(2).skill&&evt.getParent(2).skill=="dz_zhengzhi"){
for(var i=0;i<evt.cards.length;i++) suit.add(evt.cards[i].suit);
};
});
return suit.length<lib.suit.length;
},
                filterCard:function (card,player){
var suit=[];
player.getHistory('lose',function(evt){
if(evt.getParent(2).skill&&evt.getParent(2).skill=="dz_zhengzhi"){
for(var i=0;i<evt.cards.length;i++) suit.add(evt.cards[i].suit);
};
});
return !suit.contains(card.suit);
},
                selectCard:1,
                check:function (card){
return 6-get.value(card)
},
                delay:false,
                content:function (){
player.draw();
},
                group:"dz_zhengzhi_rec",
                subSkill:{
                    rec:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
if(!player.isDamaged()) return false;
var suit=[];
player.getHistory('lose',function(evt){
if(evt.type=='discard'){
for(var i=0;i<evt.cards.length;i++) suit.add(evt.cards[i].suit);
};
});
return suit.length==4;
},
                        content:function (){
"step 0"
player.recover();
},
                        sub:true,
                    },
                },
            },
            "dz_xingzhen":{
                audio:"ext:先秦杀:2",
                trigger:{
                    global:"gainEnd",
                    player:"loseAfter",
                },
                forced:true,
                filter:function (event,player){
if(event.name=="gain"){
if(event.source==player&&event.player!=player){
return event.relatedLose&&event.relatedLose.es&&event.relatedLose.es.length>0;
}
}
if(event.name=="lose"){
var evt=event.getl(player);
return event.type=="discard"&&evt&&evt.player==player&&evt.es&&evt.es.length>0;
}
return false;
},
                content:function (){
"step 0"
player.chat(["阵法之道，在乎地利。","军阵之法，在乎人心。"].randomGet());
event.cards=trigger.name=="lose"?trigger.getl(player).es:trigger.relatedLose.es;
for(var i=0;i<event.cards.length;i++){
var card=event.cards[i];
var type=get.subtype(card);
if(player.isEmpty(type)){
var card2=get.cardPile(function(card){
return get.subtype(card)==type&&player.canUse(card,player);
});
if(card2) player.chooseUseTarget(card2,true).nopopup=true;
}
}
},
            },
            "dz_zhengwei":{
                trigger:{
                    player:"loseAfter",
                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
                },
                direct:true,
                filter:function (event,player){
var evt=event.getl(player);
return evt&&evt.player==player&&evt.es&&evt.es.length>0;
},
                content:function (){
"step 0"
event.count=trigger.getl(player).es.length;
"step 1"
event.count--;
player.chooseUseTarget('###是否发动【挣围】？# ##视为使用一张【杀】',{name:'sha'},false).set('logSkill','dz_zhengwei').set("chat",["禽困尚可覆车，况哀兵乎？","一役之争，万人之命，为将者之责也！"].randomGet());
"step 2"
if(result.bool&&event.count){
event.goto(1);
}
},
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
},
                    },
                },
                group:"dz_zhengwei_damage",
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageSource",
                        },
                        filter:function (event,player){
return event.card&&event.card.name=="sha"&&event.player.countGainableCards(player,'e');
},
                        direct:true,
                        content:function (){
player.gainPlayerCard(get.prompt('dz_zhengwei',trigger.player),trigger.player,get.buttonValue,'e').set('logSkill',['dz_zhengwei',trigger.player]);
},
                        sub:true,
                    },
                },
            },
            "dz_luandu":{
                trigger:{
                    player:"loseAfter",
                },
                filter:function (event,player){
if(event.type!='discard') return;
for(var i=0;i<event.cards2.length;i++){
var card=event.cards2[i];
var bool1=game.hasPlayer(function(current){
return player.canUse(card,current,false);
});
var bool2=game.hasPlayer(function(current){
return player.canUse('sha',current);
});
if(get.position(card)=='d'&&(bool1||bool2)){
return true;
}
}
return false;
},
                audio:"ext:先秦杀:2",
                forced:true,
                content:function (){
"step 0"
player.chat(["我倒要看看，谁敢对我们无礼！","谁不听话，我们就诛他三族！"].randomGet());
var cards=[];
for(var i=0;i<trigger.cards2.length;i++){
var card=trigger.cards2[i];
if(get.position(card)=='d') cards.add(card);
}
if(cards.length<1){
event.finish();
return;
}
if(cards.length>1){
player.chooseButton(['请选择一张牌',cards],true).set('ai',get.buttonValue);
}else event._result={bool:true,links:cards};
"step 1"
if(result.bool){
event.card=result.links[0];
}else event.finish();
"step 2"
var card=event.card;
var bool1=game.hasPlayer(function(current){
return player.canUse(card,current,false);
});
var bool2=game.hasPlayer(function(current){
return player.canUse({name:'sha'},current,false);
});
if(bool1&&bool2){
player.chooseControl(function(){
return 0;
}).set('choiceList',[
'使用'+get.translation(card)+'。（没有距离限制）',
'将'+get.translation(card)+'当做【杀】使用。',
]).set('ai',function(){
return _status.event.choice;
}).set('choice',player.getUseValue(card,false)>player.getUseValue({name:'sha',cards:card})?0:1);
}
else if(bool1){
event.directindex=0;
}
else if(bool2){
event.directindex=1;
}
else{
event.finish();
}
"step 3"
var card=event.card;
if(result&&typeof event.directindex!='number'){
event.directindex=result.index;
}
if(event.directindex==1){
player.chooseUseTarget({name:'sha'},[card],true,false,'nodistance').set('viewAs',true).logSkill='dz_luandu';
}
else{
player.chooseUseTarget(card,true,false,'nodistance').logSkill='dz_luandu';
}
},
            },
            yuchong:{
                audio:"ext:先秦杀:2",
                forced:true,
                trigger:{
                    player:["phaseUseBegin","phaseUseEnd"],
                },
                content:function (){
                player.chat(["臣下忠君之心，大王可曾看到？","为得大王宠爱，残躯，弑亲，又算得了什么？"].randomGet());
if(player.countCards("h")%2==1){
player.chooseToDiscard("he",true);
}else player.draw();
},
            },
            "dz_fenwei":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
return target!=player;
},
                content:function (){
"setp 0"
player.chat(["众将不可急攻，分而围之便可迫敌自降！","吾等可四面围之，以呈瓮中捉鳖之势！"].randomGet());
target.addSkill("dz_fenwei_buff");
},
                group:"dz_fenwei_delete",
                subSkill:{
                    delete:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        forced:true,
                        direct:true,
                        popup:false,
                        filter:function (event,player){
return game.hasPlayer(function(current){
return current.hasSkill('dz_fenwei_buff');
});
},
                        content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i].hasSkill('dz_fenwei_buff')){
player.line(game.players[i]);
game.players[i].removeSkill('dz_fenwei_buff');
}
} 
},
                        sub:true,
                    },
                    buff:{
                        mod:{
                            globalFrom:function (from,to,distance){
return distance+1;
},
                            globalTo:function (from,to,distance){
return distance-1;
},
                        },
                        sub:true,
                    },
                },
            },
            "dz_gongjian":{
                audio:"ext:先秦杀:2",
                trigger:{
                    global:"damageEnd",
                },
                usable:1,
                forced:true,
                filter:function (event,player){
if(!event.player.hasSkill("dz_fenwei_buff")) return false;
return game.hasPlayer(function(c){
return get.distance(c,event.player)<=1&&c!=event.player;
})||(event.source==player&&player.isDamaged());
},
                content:function (){
"setp 0"
player.chat(["敌犯必战，战必求歼！","断敌粮道，丧其乐生之心！"].randomGet());
"step 1"
var num=game.countPlayer(function(c){
return get.distance(c,trigger.player)<=1&&c!=trigger.player;
});
player.draw(num);
if(trigger.source==player&&player.isDamaged()) player.recover();
},
            },
            "dz_bogui":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:["damageBegin3","useCard"],
                },
                forced:true,
                filter:function (event,player){
if(event.name=="damage"&&event.source&&event.source.hp<player.hp) return true;
if(event.name=="useCard"&&event.card&&(get.type(event.card)=='trick'||get.type(event.card)=='basic'&&!['shan','tao','jiu','du'].contains(event.card.name))&&game.hasPlayer(function(c){
return c.hp>player.hp;
})) return true;
return false;
},
                content:function (){
"setp 0"
player.chat(["治世不一道，便国不法古。","当时而立法，因事而制礼。"].randomGet());
"step 1"
if(trigger.name=="damage"){
trigger.num++;
}else trigger.directHit.addArray(game.filterPlayer(function(current){
return current.hp>player.hp;
}));
},
            },
            "dz_mingfa":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
return target!=player;
},
                filter:function (event,player){
return player.countCards("he");
},
                filterCard:true,
                selectTarget:-1,
                changeSeat:true,
                contentBefore:function (){
player.chat(["燔诗书，明法令，尊爵必赏，有罪必罚！","令行而禁止，法出而乱息！"].randomGet());
},
                content:function (){
"setp 0"
event.suit=get.suit(cards[0]);
"step 1"
target.chooseCard('he','明法：将一张'+get.translation(event.suit)+'牌交给'+get.translation(player),{suit:event.suit});
"step 2"
if(result.bool){
target.give(result.cards,player,true);
}else target.link(true);
},
            },
            "dz_shiren":{
                audio:"ext:先秦杀:2",
                trigger:{
                    global:"useCard",
                },
                logTarget:"player",
                filter:function (event,player){
return event.card&&event.card.name=="sha"&&event.player.countCards("h")<event.player.maxHp;
},
                content:function (){
"step 0"
player.chat(["君行仁政，斯民亲其上，死其长矣。","夫仁政，必自经界始。"].randomGet());
trigger.player.drawTo(Math.min(5,trigger.player.maxHp));
"step 1"
trigger.player.addTempSkill("dz_shiren_debuff");
},
                subSkill:{
                    debuff:{
                        mod:{
                            cardEnabled:function (player){
return false;
},
                            cardUsable:function (player){
return false;
},
                            cardRespondable:function (player){
return false;
},
                            cardSavable:function (player){
return false;
},
                        },
                        sub:true,
                    },
                },
            },
            "dz_yiju":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"die",
                },
                forceDie:true,
                forced:true,
                content:function (){
"step 0"
player.chat(["传家世守三迁训，七篇贻矩报国常。","规矩，方圆之至也。"].randomGet());
event.targets=game.filterPlayer(function(current){
return current!=player;
});
"step 1"
var target=event.targets.shift();
target.addSkill("dz_yiju_debuff");
if(event.targets.length>0) event.redo();
},
                subSkill:{
                    debuff:{
                        trigger:{
                            player:"useCard1",
                        },
                        silent:true,
                        firstDo:true,
                        filter:function (event,player){
return player.isPhaseUsing();
},
                        content:function (){
var stat=player.getStat('skill');
if(!stat.dz_yiju_debuff) stat.dz_yiju_debuff=0;
stat.dz_yiju_debuff++;
},
                        mod:{
                            "cardEnabled2":function (card,player){
var stat=player.getStat('skill');
if(stat.dz_yiju_debuff&&stat.dz_yiju_debuff>=player.maxHp) return false;
},
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "dz_chenxiang":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
return event.num>0;
},
                direct:true,
                content:function (){
"step 0"
event.num=trigger.num;
"step 1"
event.num--
player.chooseTarget("是否发动【沉香】令俩名角色拼点？",2,function(card,player,target){
if(ui.selected.targets.length==1){
return ui.selected.targets[0].canCompare(target);
}else return game.hasPlayer(function(t){
return target.canCompare(t);
});
}).set('targetprompt',['拼点发起人','拼点目标']);
"step 2"
if(result.bool){
event.target1=result.targets[0];
event.target2=result.targets[1];
player.chat(["高阁深坐蹙蛾眉，呢喃悲语泪痕湿","渐消酒色朱颜浅，欲语离情翠黛低。"].randomGet());
player.logSkill("dz_chenxiang",result.targets);
event.target1.chooseToCompare(event.target2);
}else event.finish();
"step 3"
if(result.winner){
if(result.winner==event.target1) var target=event.target2;
if(result.winner==event.target2) var target=event.target1;
if(result.winner.hp>target.hp) event.lose=true;
if(result.winner.hp<target.hp) event.rec=true;
if(result.winner.hp==target.hp) event.draw=true;
}else event.goto(6);
"step 4"
if(event.lose) str="失去一点体力";
if(event.rec) str="回复一点体力";
if(event.draw) str="摸俩张牌";
player.chooseTarget("选择一名角色令其"+str,true);
"step 5"
if(result.bool){
var target=result.targets[0];
player.line(target);
if(event.lose) target.loseHp();
if(event.rec) target.recover();
if(event.draw) target.draw(2);
}
"step 6"
delete event.lose;
delete event.rec;
delete event.draw;
if(event.num>0) event.goto(1);
},
            },
            "dz_yuanjue":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"dyingAfter",
                },
                derivation:"dz_huangju",
                skillAnimation:true,
                animationColor:"wood",
                limited:true,
                content:function (){
"step 0"
player.awakenSkill("dz_yuanjue");
player.chat(["思念成疾永分离，睁眼闭眼泪已稀。","缘尽缘散缘无期，伤心痛心永无息。"].randomGet());
"step 1"
player.recover();
player.chooseTarget("选择一名角色令其获得【惶遽】",true,function(card,player,target){
return target!=player;
});
"step 2"
if(result.bool){
var target=result.targets[0];
player.logSkill("dz_yuanjue",target);
target.addSkill("dz_huangju");
}
},
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player,skill){
                    player.storage[skill]=false;
                },
            },
            "dz_huangju":{
                trigger:{
                    player:"useCardToPlayered",
                    target:"useCardToTargeted",
                },
                forced:true,
                filter:function (event,player){
return event.card.name=='sha';
},
                content:function (){
if(event.triggername=='useCardToPlayered'){
trigger.target.draw();
}else player.chooseToDiscard("he",true);
},
            },
            "dz_xingyin":{
                audio:"ext:先秦杀:2",
                trigger:{
                    global:["respond","useCard"],
                },
                forced:true,
                filter:function (event,player){
if(!event.respondTo) return false;
if(event.player==event.respondTo[0]) return false;
if(event.player!=player&&event.respondTo[0]!=player) return false;
var number1=null;
var number2=null;
if(get.itemtype(event.respondTo[1])=='card'){
number1=get.number(event.respondTo[1]);
}else if(event.respondTo[1].cards.length==1) number1=get.number(event.respondTo[1].cards[0]);
if(event.cards.filterInD('od').length>0&&event.cards.filterInD('od').length<2){
number2=get.number(event.cards.filterInD('od')[0]);
}
if(number1==null||number2==null) return false;
if(number1%2!=number2%2) return true;
return false;
},
                logTarget:"player",
                content:function (){
'step 0'
player.chat(["步余马于兰皋兮，驰椒丘且焉止息。","乘骐骥以驰骋兮，来吾道夫先路！"].randomGet());
'step 1'
player.draw();
},
            },
            "dz_huaisha":{
                unique:true,
                skillAnimation:true,
                animationColor:"gray",
                trigger:{
                    player:"dying",
                },
                limited:true,
                marktext:"怀",
                mark:true,
                intro:{
                    content:"limited",
                },
                audio:"ext:先秦杀:2",
                content:function (){
"step 0"
player.awakenSkill('dz_huaisha');
player.chat(["知死不可让，原勿爱兮。","明告君子，吾将以为类兮。"].randomGet());
event.current=player.next;
event.cards=[];
"step 1"
if(!event.current.countCards('he')) event.goto(3);
else event.current.chooseToDiscard('请弃置一张牌','he',true).set('ai',function(card){
var evt=_status.event.getParent();
if(get.attitude(_status.event.player,evt.player)>2){
if(card.name=='jiu') return 120;
if(card.name=='tao') return 110;
}
return 100-get.value(card);
});
"step 2"
if(result.bool&&result.cards&&result.cards.length){
event.cards.addArray(result.cards);
}
"step 3"
event.current=event.current.next;
if(event.current!=player) event.goto(1);
"step 4"
var cards=[];
for(var i=0;i<event.cards.length;i++){
if(get.position(event.cards[i],true)=='d') cards.add(event.cards[i]);
}
if(cards.length>0){
cards=cards.randomSort();
var gain=[];
var nogain=[];
for(var i=0;i<cards.length;i++){
if(!nogain.contains(get.number(cards[i]))){
nogain.add(get.number(cards[i]));
var card=get.cardPile2(function(card){
return get.number(card)==get.number(cards[i]);
});
if(card) gain.add(card);
}
}
player.gain(gain,"gain2");
}
},
                init:function (player,skill){
                    player.storage[skill]=false;
                },
            },
            "dz_kongxian":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"phaseDrawBegin1",
                },
                filter:function (event,player){
return !event.numFixed;
},
                content:function (){
"step 0"
player.chat(["挽弓当挽强，用箭当用长！","箭在弦上，岂能不发？"].randomGet());
trigger.changeToZero();
"step 1"
var num=game.countPlayer(function(c){
return get.distance(player,c)<=1;
});
player.draw(num);
player.storage.dz_kongxian_buff=num;
player.addTempSkill("dz_kongxian_buff");
"step 2"
var bool=game.hasPlayer(function(c){
return get.distance(player,c)>1;
});
if(!bool) player.chooseUseTarget('###是否发动【控弦】？###视为使用一张【杀】',{name:'sha'},false).logSkill='dz_kongxian';
},
                subSkill:{
                    buff:{
                        onremove:true,
                        mod:{
                            globalFrom:function (from,to,distance){
return distance-from.storage.dz_kongxian_buff;
},
                        },
                        sub:true,
                    },
                },
            },
            "dz_quanyi":{
                enable:"phaseUse",
                group:"dz_quanyi_X",
                init:function (player){
if(!player.storage.dz_quanyi) player.storage.dz_quanyi=[];
},
                filter:function (event,player){
if((player.getStat().skill.dz_quanyi||0)<player.maxHp) return true;
return false;
},
                chooseButton:{
                    dialog:function (event,player){
var list=[];
for(var i=0;i<lib.inpile.length;i++){
var name=lib.inpile[i];
if(player.storage.dz_quanyi.contains(name)) continue;
if(name=='sha'){
list.push(['基本','','sha']);
list.push(['基本','','sha','fire']);
list.push(['基本','','sha','thunder']);
list.push(['基本','','sha','ice']);
}
else if(get.type(name)=='trick') list.push(['锦囊','',name]);
else if(get.type(name)=='basic') list.push(['基本','',name]);
}
if(list.length==0){
return ui.create.dialog('权移已无可用牌');
}
return ui.create.dialog('权移',[list,'vcard']);
},
                    filter:function (button,player){
return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
},
                    check:function (button){
var player=_status.event.player;
if(player.countCards('h',button.link[2])>0) return 0;
if(button.link[2]=='wugu') return;
var effect=player.getUseValue(button.link[2]);
if(effect>0) return effect;
return 0;
},
                    backup:function (links,player){
return {
selectCard:-1,
filterCard:function(){return false},
viewAs:{name:links[0][2],nature:links[0][3],isCard:true,},
}
},
                },
                subSkill:{
                    X:{
                        trigger:{
                            player:"useCardBefore",
                        },
                        filter:function (event,player){
                    return event.skill&&event.skill.indexOf('dz_quanyi_')==0;
                      },
                        forced:true,
                        content:function (){
'step 0'
event.card=trigger.card;
event.card2=get.cards();
event.list1=[];
event.list2=[];
event.targetss=game.filterPlayer(function(current){
return current!=player;
});
event.num=0;
'setp 1'
var x=[1,2].randomGet();
'setp 2'
player.line(event.targets[event.num]);
event.targets[event.num].chooseControl('ok').set('dialog',['权移',event.card2]);
'step 3'
if(result.bool){
game.log(event.targets[event.num]);
event.list1.add(event.targets[event.num]);
event.targets[event.num].chat('陛下这是马！');
}else{
game.log(event.targets[event.num]);
event.list2.add(event.targets[event.num]);
event.targets[event.num].chat('陛下这是鹿！');
}
'step 4'
event.num++;
if(event.targets.length>event.num-1){
event.goto(2);
}else{
if(event.list1.length>event.list2.length){
player.gain(event.card,'gain2');
player.storage.dz_quanyi.add(event.card.name);
player.chooseUseTarget({name:event.card.name,nature:event.card.nature,isCard:true},true,false);
}else{
event.list1.add(player);
for(var i=0;i<event.list1.length;i++){
event.list1[i].loseHp();
}
}
}
},
                        sub:true,
                    },
                },
            },
            "dz_jieyin":{
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){
if(player==event.player) return false;                
if(player.countCards('h')&&event.player.countCards('h')) return true;
return false;
},
                content:function (){
"step 0"
var next=game.createEvent('dz_jieyin',false);
next.player=player;
next.target=trigger.player;
next.setContent(lib.skill.dz_jieyin.contentx);
},
                contentx:function (){
                    "step 0"
                    if(target.countCards('h')==0||player.countCards('h')==0){
                        event.finish();
                        return;
                    }
                    "step 1"
                    var sendback=function(){
                        if(_status.event!=event){
                            return function(){
                                event.resultOL=_status.event.resultOL;
                            };
                        }
                    };
                    if(player.isOnline()){
                        player.wait(sendback);
                        event.ol=true;
                        player.send(function(){
                            game.me.chooseCard(true).set('glow_result',true).ai=function(){
                                return Math.random();
                            };
                            game.resume();
                        });
                    }
                    else{
                        event.localPlayer=true;
                        player.chooseCard(true).set('glow_result',true).ai=function(){
                            return Math.random();
                        };
                    }
                    if(target.isOnline()){
                        target.wait(sendback);
                        event.ol=true;
                        target.send(function(){
                            var rand=Math.random()<0.4;
                            game.me.chooseCard(true).set('glow_result',true).ai=function(card){
                                if(rand) return card.name=='shan'?1:0;
                                return card.name=='shan'?0:1;
                            };
                            game.resume();
                        });
                    }
                    else{
                        event.localTarget=true;
                    }
                    "step 2"
                    if(event.localPlayer){
                        event.card1=result.cards[0];
                    }
                    if(event.localTarget){
                        var rand=Math.random()<0.4;
                        target.chooseCard(true).set('glow_result',true).ai=function(card){
                            if(rand) return card.name=='shan'?1:0;
                            return card.name=='shan'?0:1;
                        };
                    }
                    "step 3"
                    if(event.localTarget){
                        event.card2=result.cards[0];
                    }
                    if(!event.resultOL&&event.ol){
                        game.pause();
                    }
                    "step 4"
                    try{
                        if(!event.card1) event.card1=event.resultOL[player.playerid].cards[0];
                        if(!event.card2) event.card2=event.resultOL[target.playerid].cards[0];
                        if(!event.card1||!event.card2){
                            throw('err');
                        }
                    }
                    catch(e){
                        console.log(e);
                        event.finish();
                        return;
                    }
                    if(event.card2.number>=10||event.card2.number<=4){
                        if(target.countCards('h')>2){
                            event.addToAI=true;
                        }
                    }
                    game.broadcastAll(function(card1,card2){
                        card1.classList.remove('glow');
                        card2.classList.remove('glow');
                    },event.card1,event.card2);
                    "step 5"
                    game.broadcastAll(function(){
                        ui.arena.classList.add('thrownhighlight');
                    });
                    game.addVideo('thrownhighlight1');
                    player.$compare(event.card1,target,event.card2);
                    game.delay(4);
                    "step 6"
                    game.log(player,'展示了',event.card1);
                    game.log(target,'展示了',event.card2);
                    var color1=get.color(event.card1);
                    var color2=get.color(event.card2);
                    if(color1==color2){
                        player.draw();
                    }else player.discardPlayerCard(target,"he",true);
                    player.$gain2(event.card1);
                    target.$gain2(event.card2);
                    game.broadcastAll(function(){
                        ui.arena.classList.remove('thrownhighlight');
                    });
                    game.addVideo('thrownhighlight2');
                },
            },
            "dz_juexian":{
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                limited:true,
                skillAnimation:true,
                animationColor:"metal",
                content:function (){
"step 0"
player.awakenSkill('dz_juexian');
"step 1"
if(player.countCards("he")){
player.chooseToDiscard("he",7,true);
}
"step 2"
if(result.bool){
var cards=result.cards;
var suit=[];
for(var i=0;i<cards.length;i++){
suit.add(get.suit(cards[i]));
}
if(suit.length>0) player.draw(suit.length);
}
if(!result.bool||result.cards.length<7) player.addTempSkill("dz_juexian_debuff","roundStart");
},
                subSkill:{
                    debuff:{
                        mark:true,
                        marktext:"绝",
                        intro:{
                            content:"【解音】失效直到下轮游戏开始。",
                        },
                        init:function (player,skill){
player.disableSkill(skill,"dz_jieyin");
},
                        onremove:function (player,skill){
player.enableSkill(skill);
},
                        sub:true,
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player,skill){
                    player.storage[skill]=false;
                },
            },
            "dz_yishi":{
                enable:"phaseUse",
                usable:1,
                delay:false,
                chooseButton:{
                    dialog:function (event,player){
return ui.create.dialog('###弈世###'+lib.translate.dz_yishi_info);
},
                    chooseControl:function (event,player){
var list=[];
for(var i=1;i<6;i++){
list.push('equip'+i);
}
list.push('cancel2');
return list;
},
                    check:function (event,player){
for(var i=5;i>0;i--){
return ('equip'+i);
}
return 'cancel2';
},
                    backup:function (result){
var next=get.copy(lib.skill.dz_yishi_x);
next.position=result.control;
return next;
},
                },
                subSkill:{
                    x:{
                        direct:true,
                        content:function (){
"step 0"
player.chat(["天下如棋，世人皆吾之棋子也。","稳坐山河，但观世变。"].randomGet());
event.equip=lib.skill.dz_yishi_backup.position;
"setp 1"
var num=game.countPlayer(function(target){
return !target.isEmpty(event.equip)&&!target.isDisabled(event.equip);
});
if(num>0) player.draw(num);
player.storage.dz_yishi_buff=event.equip;
player.addTempSkill("dz_yishi_buff",{player:"phaseBegin"})
},
                        sub:true,
                    },
                    buff:{
                        trigger:{
                            global:"damageBegin1",
                        },
                        logTarget:"player",
                        onremove:true,
                        charlotte:true,
                        forced:true,
                        filter:function (event,player){
if(!player.storage.dz_yishi_buff) return false;
var equip=player.storage.dz_yishi_buff;
if(event.source.isEmpty(equip)||event.source.isDisabled(equip)||!event.player.isEmpty(equip)||event.player.isDisabled(equip)) return false;
return true;
},
                        content:function (){
"setp 0"
player.chat(["天下如棋，世人皆吾之棋子也。","稳坐山河，但观世变。"].randomGet());
"setp 1"
trigger.num++;
},
                        sub:true,
                    },
                },
            },
            "dz_huiji":{
                trigger:{
                    target:"useCardToTarget",
                    player:"useCardToTarget",
                },
                direct:true,
                filter:function (event,player){
if(event.card.name!='sha') return false;
return true;
},
                content:function (){
"step 0"
var list=[];
for(var i=1;i<6;i++){
if(!player.isDisabled('equip'+i)) list.push('equip'+i);
}
list.push('cancel2');
player.chooseControl(list,function(event,player){
return 'equip1';
}).set('prompt','晦迹：选择一个装备栏');
"step 1"
if(result.control!='cancel2'){
event.types=result.control;
var bool=game.hasPlayer(function(target){
if(target==player) return false;
if(!player.isEmpty(event.types)&&!player.isEmpty(event.types)) return !target.isDisabled(event.types);
return !target.isDisabled(event.types)&&!target.isEmpty(event.types);
});
if(bool){
player.chooseTarget("选择一名角色令其获得与其交换"+get.translation(event.types)+"栏内的牌",true,function(card,player,target){
if(target==player) return false;
if(!player.isEmpty(event.types)&&!player.isEmpty(event.types)) return !target.isDisabled(event.types);
return !target.isDisabled(event.types)&&!target.isEmpty(event.types);
});
}else player.chat("可恶！没有合适的交换目标了！");
}else event.finish();
"step 2"
if(result.bool){
var target=result.targets[0];
event.target=target;
event.card1=player.getEquip(event.types);
event.card2=target.getEquip(event.types);
if(event.card1) player.lose(event.card1,ui.ordering,'visible');
if(event.card2) target.lose(event.card2,ui.ordering,'visible');
if(event.card1) player.$give(event.card1,target,false);
if(event.card2) target.$give(event.card2,player,false);
}else event.finish();
"step 3"
if(event.card2) player.equip(event.card2);
if(event.card1) event.target.equip(event.card1);
},
            },
            "dz_chouchou":{
                trigger:{
                    player:"useCardToTargeted",
                },
                forced:true,
                logTarget:"target",
                filter:function (event,player){
if(event.card.name!='sha'&&event.card.name!="juedou") return false;
if(event.targets.length>1) return false;
return player.getAllHistory("damage",function(evt){
return evt.source&&evt.source==event.target;
}).length>0&&(event.target.countCards("e")||event.target.getDamagedHp()>0);
},
                content:function (){
"step 0"
player.chat(["胥虽奔他国，终不忘雪父之耻！","有恩必报，有仇必复！"].randomGet());
"step 1"
if(trigger.target.countCards("e")) trigger.target.chooseToDiscard('e',true);
"step 2"
if(trigger.target.getDamagedHp()>0) player.draw(Math.min(trigger.target.getDamagedHp(),5));
},
            },
            "dz_zhongjian":{
                trigger:{
                    global:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
return !player.hasSkill("dz_zhongjian_cd")&&event.source&&event.source!=player;
},
                content:function (){
"step 0"
player.chooseCard('he','【忠谏】：你可以将一张牌交给'+get.translation(trigger.source));
"step 1"
if(result.bool){
player.chat(["越王不死，必为吴患，还望大王三思！","今王不灭越，后必悔之！"].randomGet());
var card=result.cards[0];
player.addTempSkill("dz_zhongjian_cd","roundStart");
player.logSkill("dz_zhongjian",trigger.source);
player.give(card,trigger.source,true);
trigger.source.chooseUseTarget(card);
}else event.finish();
"step 2"
if(result.bool){
player.recover();
}else{
if(!trigger.source.storage.dz_zhongjian_debuff) trigger.source.storage.dz_zhongjian_debuff=0;
trigger.source.storage.dz_zhongjian_debuff++;
trigger.source.addTempSkill("dz_zhongjian_debuff",{player:"phaseBegin"});
}
},
                subSkill:{
                    cd:{
                        sub:true,
                    },
                    debuff:{
                        trigger:{
                            player:"damageBegin3",
                        },
                        content:function (){
trigger.num+=player.storage.dz_zhongjian_debuff;
player.removeSkill("dz_zhongjian_debuff");
},
                        mark:true,
                        intro:{
                            content:"下次受到的伤害+#，直到回合开始。",
                        },
                        onremove:true,
                        sub:true,
                    },
                },
            },
            "dz_jiezhao":{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                init:function (player,skill){
if(!player.storage.dz_jiezhao) player.storage.dz_jiezhao=[];
},
                content:function (){
var next=game.createEvent('dz_jiezhao',false);
next.player=player;
next.setContent(lib.skill.dz_jiezhao.contentx);
},
                contentx:function (){
"step 0"
player.chooseControl(lib.suit,'cancel2',function(){
return lib.suit.randomGet()
}).set('prompt','你可以请选择一个花色');
"step 1"
if(result.control!='cancel2'){
player.logSkill("dz_jiezhao");
player.chat(["莫急莫急，先让我代为保管。","丞相且慢，容我陈明利害。"].randomGet());
event.suit=result.control;
player.popup(event.suit+2);
game.log(player,'选择了',event.suit+2);
player.storage.dz_jiezhao_buff=result.control;
player.addTempSkill("dz_jiezhao_buff",{player:"phaseBegin"});
}
},
                marktext:"诏",
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
if(storage&&storage.length){
player.$throw(storage,1000);
game.cardsDiscard(storage);
game.log(storage,'被置入了弃牌堆');
storage.length=0;
}
},
                },
                subSkill:{
                    buff:{
                        trigger:{
                            global:"useCard",
                        },
                        filter:function (event,player){
if(!player.storage.dz_jiezhao_buff) return false;
var suit=player.storage.dz_jiezhao_buff;
return event.player.getHistory("useCard",function(evt){
return evt.card.suit==suit;
}).length==1&&get.suit(event.card)==suit;
},
                        forced:true,
                        charlotte:true,
                        onremove:true,
                        content:function (){
"step 0"
var card=game.cardsGotoSpecial(get.cards()).cards[0];
player.$draw(card);
player.chat(["莫急莫急，先让我代为保管。","丞相且慢，容我陈明利害。"].randomGet());
game.delay();
player.storage.dz_jiezhao.push(card);
player.markSkill('dz_jiezhao');
"step 1"
var effect=0;
if(trigger.card.name=='wuxie'||trigger.card.name=='shan'){
if(get.attitude(player,trigger.player)<-1){
effect=-1;
}
}
else if(trigger.targets&&trigger.targets.length){
for(var i=0;i<trigger.targets.length;i++){
effect+=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
}
}
var str='截诏：是否令'+get.translation(trigger.player);
if(trigger.targets&&trigger.targets.length){
str+='对'+get.translation(trigger.targets);
}
str+='使用的'+get.translation(trigger.card)+'失效？'
var next=player.chooseBool(str,function(){
var player=_status.event.player;
var trigger=_status.event.getTrigger();
if(_status.event.effect<0){
if(trigger.card.name=='sha'){
var target=trigger.targets[0];
if(target==player){
return !player.countCards('h','shan');
}
else{
return target.hp==1||(target.countCards('h')<=2&&target.hp<=2);
}
}
else{
return true;
}
}
return false;
});
next.set('effect',effect);
"step 2"
if(result.bool){
player.logSkill("dz_jiezhao",trigger.player);
trigger.all_excluded=true;
trigger.targets.length=0;
}
},
                        mark:true,
                        intro:{
                            content:function (storage,player){
return "截诏-"+get.translation(storage+2)+"牌";
},
                        },
                        sub:true,
                    },
                },
            },
            "dz_shiquan":{
                trigger:{
                    global:"phaseEnd",
                },
                direct:true,
                forced:true,
                init:function (player,skill){                
if(!player.storage.dz_shiquan) player.storage.dz_shiquan=[];
},
                filter:function (event,player){
                if(event.player==player) return false;
if(!player.storage.dz_jiezhao||player.storage.dz_jiezhao.length<1) return false;
return true;
},
                content:function (){
"step 0"
player.chooseBool('###【恃权】###是否获得【诏】牌？如果不获得则你视为使用一张本局未以此法使用过的锦囊牌或【杀】');
"step 1"
if(result.bool){
player.chat(["现在知道是谁做主了吗？","陛下尚被我玩弄于股掌之中，何况尔等？"].randomGet());
player.logSkill("dz_shiquan");
player.gain(player.storage.dz_jiezhao,'gain2','fromStorage','log');
player.storage.dz_jiezhao.length=0;
player.unmarkSkill('dz_jiezhao');
event.finish();
}else{
player.$throw(player.storage.dz_jiezhao,1000);
game.cardsDiscard(player.storage.dz_jiezhao);
game.log(player.storage.dz_jiezhao,'被置入了弃牌堆');
player.storage.dz_jiezhao.length=0;
player.unmarkSkill('dz_jiezhao');
var list=[];
for(var i=0;i<lib.inpile.length;i++){
var name=lib.inpile[i];
var type=get.type(name);
if(['trick'].contains(type)||name=="sha") list.push([type,'',name]);
}
var bool=false;
for(var i=0;i<list.length;i++){
var card=list[i][2];
if(player.hasUseTarget(card)) bool=true;
}
if(bool){
player.chooseButton(['选择要使用的牌',[list,'vcard']],true).set('ai',function(button){
var card={name:button.link[2]};
return player.getUseValue(card);
}).set('filterButton',function(button){
var card={name:button.link[2]};
return player.hasUseTarget(card)&&!player.storage.dz_shiquan.contains(card.name);
});
}else{
event._result={bool:false};
player.chat("无牌可用了吗！");
}
}
"step 2"
if(result.bool){
var card=result.links[0][2];
if(card!="sha") player.storage.dz_shiquan.add(card);
var next=player.chooseUseTarget(card,true,false);
next.set("logSkill","dz_shiquan");
player.chat(["现在知道是谁做主了吗？","陛下尚被我玩弄于股掌之中，何况尔等？"].randomGet());
}
},
            },
            "dz_xianyou":{
                trigger:{
                    player:"phaseEnd",
                },
                init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
                direct:true,
                group:["dz_xianyou_phase","dz_xianyou_mark"],
                filter:function (event,player){
if(player.storage.dz_xianyou.length==0) return true;
var num=ui.cardPile.childElementCount;
var bool=true;
for(var i=0;i<num;i++){
if(player.storage.dz_xianyou.contains(ui.cardPile.childNodes[i])){
bool=false;break;
}
}
return bool;
},
                content:function (){
"step 0"
player.chooseCard('he','你可以将一张牌作为“游”扔到牌堆里。');
"step 1"
if(result.bool){
player.chat(["远渡东海，遍访仙山。","遵陛下之命，寻长生之药。"].randomGet());
player.logSkill("dz_xianyou");
player.addTempSkill("dz_xianyou_cd","phaseBefore");
player.removeGaintag('dz_xianyou');
event.card=result.cards[0];
event.x=player.hp*5-1;
player.storage.dz_xianyou.push(event.card);
player.lose(event.card,ui.ordering).noOrdering=true;
}else event.finish();
"step 2"
event.card.fix();
var num=ui.cardPile.childElementCount;
if(event.x<num&&event.x>=0){
ui.cardPile.insertBefore(event.card,ui.cardPile.childNodes[event.x]);
}else{
ui.cardPile.appendChild(event.card);
}
game.updateRoundNumber();
},
                subSkill:{
                    cd:{
                        sub:true,
                    },
                    mark:{
                        trigger:{
                            global:"gainAfter",
                        },
                        silent:true,
                        filter:function (event,player){
if(!player.storage.dz_xianyou||player.storage.dz_xianyou.length<1) return false;
for(var i=0;i<event.player.getCards("h").length;i++){
var card=event.player.getCards("h")[i];
if(player.storage.dz_xianyou.contains(card)) return true;
};
return false;
},
                        content:function (){
for(var i=0;i<trigger.player.getCards("h").length;i++){
var card=trigger.player.getCards("h")[i];
if(player.storage.dz_xianyou.contains(card)) card.addGaintag('dz_xianyou');
};
},
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    phase:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        forced:true,
                        filter:function (event,player){
                        if(player.hasSkill("dz_xianyou_cd")) return false;
if(!player.storage.dz_xianyou||player.storage.dz_xianyou.length<1) return false;
var history=event.player.getHistory('gain');
for(var i=0;i<history.length;i++){
for(var j=0;j<history[i].cards.length;j++){
var card=history[i].cards[j];
if(player.storage.dz_xianyou.contains(card)) return true;
}
}
return false;
},
                        content:function (){
"step 0"
player.chat(["远渡东海，遍访仙山。","遵陛下之命，寻长生之药。"].randomGet());
player.storage.dz_xianyou=[];
trigger.player.removeGaintag('dz_xianyou');
player.insertPhase();
},
                        sub:true,
                    },
                },
            },
            "dz_jianxin":{
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
"step 0"
if(!player.hasSkill("dz_jianxin_true")){
player.addTempSkill("dz_jianxin_true","roundStart");
event.finish();
}else{
player.chooseTarget(get.prompt2('dz_jianxin'),function(card,player,target){
return target.countCards("h");
}).set('ai',function(target){
return -1;
});
}
"step 1"
if(result.bool){
var target=result.targets[0];
event.target=target;
player.logSkill("dz_jianxin",target);
var list=[];
for(var i=0;i<lib.suit.length;i++){
if(target.countCards("h",{suit:lib.suit[i]})) list.add(lib.suit[i]);
}
if(list.length>0){
player.chooseControl(list).set('dialog',['鉴心</br>展示其中一种花色的牌',target.getCards("h")]);
}else event.finish();
}else event.finish();
"step 2"
if(result.control){
event.target.showCards(event.target.getCards("h",{suit:result.control}));
}
},
                subSkill:{
                    true:{
                        sub:true,
                    },
                },
            },
            "dz_zhiwang":{
                animationColor:"thunder",
                unique:true,
                limited:true,
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"dying",
                },
                content:function (){
"step 0"
player.awakenSkill('dz_zhiwang');
player.chat(["远据东海，避君盛怒。","仙药未果，止王不来。"].randomGet());
"step 1"
player.discard(player.getCards("e"));
if(player.hp<1){
player.recover(1-player.hp);
}
"step 2"
player.addSkill("dz_zhiwang_buff");
},
                subSkill:{
                    buff:{
                        trigger:{
                            global:"roundStart",
                        },
                        forced:true,
                        init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=0;
},
                        filter:function (event,player){
if(player.storage.dz_zhiwang_buff<game.countGroup()) return true;
return false;
},
                        content:function (){
player.chat(["远据东海，避君盛怒。","仙药未果，止王不来。"].randomGet());
player.storage.dz_zhiwang_buff++;
},
                        mod:{
                            globalTo:function (from,to,distance){
return distance+to.storage.dz_zhiwang_buff;
},
                        },
                        sub:true,
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                init:function (player,skill){
                    player.storage[skill]=false;
                },
            },
            "dz_bijian":{
                trigger:{
                    player:"recoverBegin",
                },
                forced:true,
                filter:function (event,player){
return event.player.hp>0;
},
                content:function (){
"step 0"
player.chat(["图尽擢匕首，操袖刺其胸！","图穷匕见，暴秦将乱！"].randomGet());
trigger.cancel();
"step 1"
player.draw();
if(_status.currentPhase==player) player.chooseUseTarget({name:'jiu'},true,false,'nodistance');
},
            },
            "dz_yijue":{
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                filter:function (event,player){
var color=get.color(event.card);
if(!color||color=="none") return false;
var bool=player.getHistory("useCard",function(evt){
return get.color(evt.card)==color&&get.color(evt.card)!="none";
}).concat(player.getHistory("respond",function(evt){
return get.color(evt.card)==color&&get.color(evt.card)!="none";
})).length==1;
return player.isDamaged()&&bool;
},
                content:function (){
player.chat(["探虎穴兮入蛟宫，仰天呼气兮成白虹！","风萧萧兮易水寒，壮士一去兮不复还！"].randomGet());
player.recover();
},
            },
            "dz_shiyi":{
                usable:1,
                enable:"phaseUse",
                filterTarget:function (card,player,target){
return target.countDiscardableCards(player,'h')>0&&target!=player;
},
                filter:function (event,player){
return game.hasPlayer(function(target){
return target.countDiscardableCards(player,'h')>0;
});
},
                content:function (){
"step 0"
player.chat(["君无所不有，而唯缺义，乃臣所以为君市义也。","焚虚债之券，令薛民彰君之善声，何乐而不为？"].randomGet());
target.showHandcards();
var list=[];
for(var i=0;i<lib.suit.length;i++){
if(target.countCards("h",{suit:lib.suit[i]})) list.add(lib.suit[i]);
}
if(list.length>0){
player.chooseControl(list).set('dialog',['弃置其中一种花色的牌',target.getCards("h")]);
}else event.finish();
"step 1"
target.discard(target.getCards("h",{suit:result.control}));
if(!target.storage.dz_shiyi_buff) target.storage.dz_shiyi_buff=[];
target.storage.dz_shiyi_buff.add(player);
target.addSkill("dz_shiyi_buff");
},
                subSkill:{
                    buff:{
                        direct:true,
                        forced:true,
                        charlotte:true,
                        trigger:{
                            player:"damageEnd",
                        },
                        content:function (){
"step 0"
event.targets=game.filterPlayer(function(target){
return !player.storage.dz_shiyi_buff.contains(target)&&target!=player;
});
if(event.targets.length<=0){
event.finish();
}else player.logSkill("dz_shiyi",event.targets);
player.removeSkill("dz_shiyi_buff");
"step 1"
var target=event.targets.shift();
event.target=target;
if(target.countCards("he",{color:"black"})){
target.chooseCard('he',true,'【市义】：将一张黑色牌交给'+get.translation(player),{color:"black"});
}else{
target.showHandcards();
event.goto(3);
}
"step 2"
if(result.bool){
event.target.give(result.cards,player,true);
}
"step 3"
if(event.targets.length>0) event.goto(1);
},
                        onremove:true,
                        sub:true,
                    },
                },
            },
            "dz_mouku":{
                trigger:{
                    global:"loseAfter",
                },
                direct:true,
                filter:function (event,player){
if(!event.getParent(2)||event.getParent(2).name!="dz_shiyi") return false;
for(var i=0;i<event.cards2.length;i++){
if(get.position(event.cards2[i],true)=="d") return true;
}
return false;
},
                content:function (){
"step 0"
var list=[];
for(var i=0;i<trigger.cards2.length;i++){
if(get.position(trigger.cards2[i],true)=="d") list.add(trigger.cards2[i]);
}
if(list.length>0){
event.list=list;
player.chooseTarget(get.prompt2('dz_mouku')).set('ai',function(target){
return 1;
});
}else event.finish();
"step 1"
if(result.bool){
player.chat(["此三窟若就，君姑高枕为乐矣。","狡兔有三窟，仅得免其死耳，臣愿为君复凿之。"].randomGet());
var target=result.targets[0];
player.logSkill("dz_mouku",target);
if(!target.storage.dz_mouku_buff) target.storage.dz_mouku_buff=[];
target.storage.dz_mouku_buff.addArray(event.list);
target.markSkill("dz_mouku_buff");
}
},
                global:"dz_mouku_buff",
                group:"dz_mouku_delete",
                subSkill:{
                    delete:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        forced:true,
                        direct:true,
                        popup:false,
                        filter:function (event,player){
return game.hasPlayer(function(current){
return current.storage.dz_mouku_buff&&storage.dz_mouku_buff.length>0;
});
},
                        content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i].storage.dz_mouku_buff&&game.players[i].storage.dz_mouku_buff.length>0){
player.line(game.players[i]);
game.players[i].$throw(game.players[i].storage.dz_mouku_buff,1000);
game.cardsDiscard(game.players[i].storage.dz_mouku_buff);
game.log(game.players[i].storage.dz_mouku_buff,'被置入了弃牌堆');
game.players[i].storage.dz_mouku_buff=[];
game.players[i].unmarkSkill('dz_mouku_buff');
}
}
},
                        sub:true,
                    },
                    buff:{
                        trigger:{
                            target:"useCardToTargeted",
                        },
                        filter:function (event,player){
if(!player.storage.dz_mouku_buff||player.storage.dz_mouku_buff.length<=0) return false;
var num=0;
var x=Math.min(3,player.storage.dz_mouku_buff.length);
game.hasPlayer(function(target){
if(target!=player){
var numx=target.getHistory('useCard',function(evt){
return evt.targets.contains(player);
}).length
num+=numx;
}
});
var xs=Math.max(0,player.maxHp-player.countCards("h"));
if(num==x&&(xs>0||player.isDamaged())) return true;
},
                        content:function (){
"step 0"
var x=Math.max(0,player.maxHp-player.countCards("h"));
player.chooseDrawRecover(x,1);
},
                        marktext:"窟",
                        intro:{
                            content:"cards",
                            onunmark:function (storage,player){
if(storage&&storage.length){
player.$throw(storage,1000);
game.cardsDiscard(storage);
game.log(storage,'被置入了弃牌堆');
storage.length=0;
}
},
                        },
                        sub:true,
                    },
                },
            },
            "dz_zhujian":{
                trigger:{
                    source:"damageSource",
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player,name){
if(name=='damageSource'){
return player.countCards("he",{color:"black"});
}else{
return player.countCards("he",{color:"red"})&&event.source&&event.source.isAlive();
}
},
                content:function (){
"step 0"
event.color=event.triggername=="damageSource"?"black":"red";
event.target=event.triggername=="damageSource"?player:trigger.source;
str=event.target==player?"自己":get.translation(event.target);
player.chooseCard("你可以将一张"+get.translation(event.color)+"牌置于"+str+"的武将牌上。","he",{color:event.color});
"step 1"
if(result.bool){
player.chat(["雄剑作龟文，雌剑作漫理，双剑合璧，不分不离。（女声）","采五山之铁精，六合之金英，以铸宝剑。（男声）"].randomGet());
var target=event.target;
var card=result.cards[0];
player.lose(card,ui.special,'toStorage');
player.$give(card,target,false);
if(event.color=="red"){
if(!target.storage.dz_zhujian_red) target.storage.dz_zhujian_red=[];
target.storage.dz_zhujian_red.add(card);
target.markSkill("dz_zhujian_red");
player.gainPlayerCard(target,get.buttonValue,'he');
}else{
if(!target.storage.dz_zhujian_black) target.storage.dz_zhujian_black=[];
target.storage.dz_zhujian_black.add(card);
target.markSkill("dz_zhujian_black");
player.draw();
}
}
},
                subSkill:{
                    red:{
                        marktext:"雌",
                        intro:{
                            content:"cards",
                            onunmark:function (storage,player){
if(storage&&storage.length){
player.$throw(storage,1000);
game.cardsDiscard(storage);
game.log(storage,'被置入了弃牌堆');
storage.length==0;
}
},
                        },
                        sub:true,
                    },
                    black:{
                        marktext:"雄",
                        intro:{
                            content:"cards",
                            onunmark:function (storage,player){
if(storage&&storage.length){
player.$throw(storage,1000);
game.cardsDiscard(storage);
game.log(storage,'被置入了弃牌堆');
storage.length==0;
}
},
                        },
                        sub:true,
                    },
                },
            },
            "dz_sheci":{
                trigger:{
                    player:"useCardAfter",
                },
                direct:true,
                filter:function (event,player,name){
for(var i=0;i<event.targets.length;i++) if(event.targets[i].storage.dz_zhujian_red&&event.targets[i].storage.dz_zhujian_red.length>0) return player.storage.dz_zhujian_black&&player.storage.dz_zhujian_black.length>0;
return false;
},
                content:function (){
"step 0"
event.targets=trigger.targets;
"step 1"
var target=event.targets.shift();
event.target=target;
if(target.storage.dz_zhujian_red&&target.storage.dz_zhujian_red.length>0){
var next=player.chooseButton(2,['雌牌',target.storage.dz_zhujian_red,"雄牌",player.storage.dz_zhujian_black]);
next.set('filterButton',function(button){
if(ui.selected.buttons.length==0) return true;
var cards1=_status.event.player.storage.dz_zhujian_black;
var cards2=target.storage.dz_zhujian_red;
for(var i=0;i<ui.selected.buttons.length;i++){
if(cards2.contains(ui.selected.buttons[i].link)){
return !cards2.contains(button.link);
}else return !cards1.contains(button.link);
}
return true;
});
}else event.goto(3);
"step 2"
if(result.bool){
player.chat(["愿献首为饵，击杀暴君！","楚王，我要杀了你！"].randomGet())
player.logSkill("dz_sheci",event.target);
var card=result.links[0];
var i=0;
var j=1;
if(!player.storage.dz_zhujian_black.contains(card)){
i++;
j--;
}
player.storage.dz_zhujian_black.remove(result.links[i]);
player.syncStorage("dz_zhujian_black");
event.target.storage.dz_zhujian_red.remove(result.links[j]);
event.target.syncStorage("dz_zhujian_red");
player.$throw(result.links[i],1000);
event.target.$throw(result.links[j],1000);
game.cardsDiscard(result.links);
game.log(result.links,'被置入了弃牌堆');
event.target.damage('nocard');
}
"step 3"
if(event.targets.length>0&&player.storage.dz_zhujian_black.length>0) event.goto(1);
},
            },
            "dz_tuozi":{
                trigger:{
                    player:"dying",
                },
                limited:true,
                skillAnimation:true,
                animationColor:"thunder",
                derivation:"dz_sheci",
                content:function (){
"step 0"
player.awakenSkill('dz_tuozi');
player.chat(["出门望南山，松生石头上，剑在其背中。","我此一去，必不得归，父仇大业，全赖子赤。"].randomGet())
player.loseMaxHp();
"step 1"
player.recover(player.maxHp-player.hp);
if(player.storage.dz_zhujian_black&&player.storage.dz_zhujian_black.length>0) player.draw(player.storage.dz_zhujian_black.length);
player.insertPhase();
"step 2"
player.removeSkill("dz_zhujian");
player.addSkill("dz_sheci");
},
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player,skill){
                    player.storage[skill]=false;
                },
            },
            "dz_leigong":{
                trigger:{
                    source:"damageSource",
                },
                forced:true,
                filter:function (event,player){
if(!event.card||!["red","black"].contains(get.color(event.card))) return false;
if(get.color(event.card)=="red"){
return player.isDamaged();
}else return true;
},
                content:function (){
"step 0"
player.chat(["立荡荡之勋，得不赀之赏！","杀敌求胜，彰吾军功！"].randomGet());
if(get.color(trigger.card)=="red"){
player.recover();
}else player.gainMaxHp();
},
                group:"dz_leigong_max",
                subSkill:{
                    max:{
                        trigger:{
                            player:"gainMaxHpBefore",
                        },
                        forced:true,
                        init:function (player){
if(player.maxHp>8) player.maxHp=8;
},
                        filter:function (event,player){
if(player.maxHp+event.num>8) return true;
return false;
},
                        content:function (){
if(player.maxHp>=8){
trigger.cancel();
}else{
var num=8-player.maxHp;
trigger.num=num;
}
},
                        sub:true,
                    },
                },
            },
            "dz_duocheng":{
                trigger:{
                    source:"damageBegin1",
                },
                logTarget:"player",
                filter:function (event,player){
return player.isDamaged();
},
                content:function (){
"step 0"
var num=Math.min(player.getDamagedHp(),player.hp);
player.loseMaxHp(num);
trigger.num+=num;
trigger.dz_duocheng=true;
player.chat(["攻城略地，莫不降下！","吾攻必取，当必破！"].randomGet());
},
                group:"dz_duocheng_die",
                subSkill:{
                    die:{
                        trigger:{
                            global:"die",
                        },
                        forced:true,
                        filter:function (event,player){
return event.getParent(2).dz_duocheng;
},
                        content:function (){
player.chat(["攻城略地，莫不降下！","吾攻必取，当必破！"].randomGet());
var num=trigger.player.maxHp;
if(num>0) player.draw(num);
},
                        sub:true,
                    },
                },
            },
            "dz_zhudi":{
                trigger:{
                    player:"useCardToTarget",
                },
                direct:true,
                filter:function (event,player){
if(event.card.name!="sha"&&event.card.name!="juedou") return false;
if(event.getParent().triggeredTargets2.length>1) return false;
var targets=event.getParent().targets;
return game.hasPlayer(function(target){
for(var i=0;i<targets.length;i++){
if(get.distance(targets[i],target)<=1&&player.canUse(event.card,target,false)&&!targets.contains(target)) return true;
}
});
},
                content:function (){
"step 0"
var targets=game.filterPlayer(function(target){
if(trigger.targets.contains(target)) return false;
for(var i=0;i<trigger.targets.length;i++){
if(get.distance(target,trigger.targets[i])<=1&&player.canUse(trigger.card,target,false)) return true;
}
});
player.chooseTarget(get.prompt2('dz_zhudi'),[1,2],function(card,player,target){
return _status.event.targets.contains(target);
}).set('ai',function(target){
var player=_status.event.player;
return get.effect(target,_status.event.card,player,player);
}).set('targets',targets).set('card',trigger.card);
"step 1"
if(result.bool){
var targets=result.targets;
player.logSkill("dz_zhudi",targets);
trigger.getParent().targets.addArray(targets);
}
},
            },
            "dz_xianduo":{
                trigger:{
                    global:"roundStart",
                },
                filter:function (event,player){
                return game.roundNumber<=26;
                },
                forced:true,
                content:function (){
"step 0"
var cards=[];
var num=game.roundNumber;
if(num>13){
var list=[];
var map={};
for(var i=1;i<=13;i++){
for(var j=1;j<=13;j++){
if(i+j==num&&!map[j]){
list.push([i,j]);
map[i]=true;
}
}
}
list=list.randomSort();
while(list.length){
var f=list.shift();
var card=get.cardPile(function(x){
return !cards.contains(x)&&x.number==f[0];
});
if(card){
cards.add(card);
}else{
cards=[];
continue;
}
var card=get.cardPile(function(x){
return !cards.contains(x)&&x.number==f[1];
});
if(card){
cards.add(card);
}else{
cards=[];
continue;
}
if(cards.length==2){
player.gain(cards,"gain2");
event.cards=cards;
break;
}
}
}else{
var cards=[];
var i=2;
while(i){
i--;
var card=get.cardPile(function(x){
return !cards.contains(x)&&x.number==num;
});
if(card) cards.add(card);
}
if(cards.length>0){
player.gain(cards,"gain2");
event.cards=cards;
}
}
"step 1"
while(event.cards.length){
var card=event.cards.shift();
if(player.hasUseTarget(card)&&player.getCards("h").contains(card)) player.chooseUseTarget(card,false,'nodistance');
}
},
            },
            "dz_jiaoshe":{
                trigger:{
                    player:"damageEnd",
                    source:"damageSource",
                },
                init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
                filter:function (event,player){
return event.num>0;
},
                content:function (){
"step 0"
var cards=get.cards(trigger.num);
if(!player.storage.dz_jiaoshe) player.storage.dz_jiaoshe=[];
player.$draw(cards);
player.storage.dz_jiaoshe.addArray(cards);
player.markSkill("dz_jiaoshe");
},
                marktext:"矢",
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
if(storage&&storage.length){
player.$throw(storage,1000);
game.cardsDiscard(storage);
game.log(storage,'被置入了弃牌堆');
 storage.length=0;
}
},
                },
                group:"dz_jiaoshe_phase",
                subSkill:{
                    phase:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        direct:true,
                        filter:function (event,player){
if(!player.storage.dz_jiaoshe||player.storage.dz_jiaoshe.length<=0) return false;
return true;
},
                        content:function (){
"step 0"
player.chooseTarget(get.prompt2('dz_jiaoshe'),function(card,player,target){
return target!=player;
}).set('ai',function(target){
var player=_status.event.player;
var att=get.effect(target,_status.event.card,player,player);
if(target.countCards("h")<5) att+=5;
if(target.countCards("h")<3) att+=5;
if(target.countCards("h")<1) att+=15;
return att;
});
"step 1"
if(result.bool){
event.target=result.targets[0];
player.chooseButton(['你可以移除任意张花色各不相同的“矢”',player.storage.dz_jiaoshe],[1,lib.suit.length]).set('ai',get.buttonValue).set('filterButton',function(button){
var card=button.link;
var ub=ui.selected.buttons;
for(var i=0;i<ub.length;i++) if(get.suit(ub[i].link)==get.suit(card)) return false;
return true;
});
}else event.finish();
"step 2"
player.logSkill("dz_jiaoshe",event.target);
player.storage.dz_jiaoshe.removeArray(result.links);
player.syncStorage("dz_jiaoshe");
if(player.storage.dz_jiaoshe.length==0) player.unmarkSkill('dz_jiaoshe');
player.$throw(result.links,1000);
game.cardsDiscard(result.links);
event.num=result.links.length;
var num2=Math.min(event.target.countCards("h",{name:"sha"}),event.num);
if(num2>0) event.target.chooseToDiscard("h",num2,true,{name:"sha"});
"step 3"
if(result.bool&&result.cards) event.num-=result.cards.length;
"step 4"
if(event.num&&player.canUse({name:"sha"},event.target,false)&&event.target.isAlive()){
event.num--;
player.useCard({name:"sha",isCard:true},event.target,false);
event.redo();
}
},
                        sub:true,
                    },
                },
            },
            "dz_fentao":{
                enable:"phaseUse",
                usable:1,
                discard:false,
                lose:false,
                delay:0,
                filterCard:true,
                selectCard:[1,Infinity],
                filterTarget:function (card,player,target){
return target!=player;
},
                filter:function (event,player){
return player.countCards("h")>1;
},
                content:function (){
"step 0"
target.gain(cards,player,'giveAuto');
"step 1"
var bool1=false;
var bool2=false;
if(player.countCards("h")>player.hp) bool1=true;
if(target.countCards("h")>target.hp) bool2=true;
if(bool1&&player.isDamaged()) player.recover();
if(bool2&&target.isDamaged()) target.recover();
},
            },
            "dz_aichi":{
                trigger:{
                    global:"useCard",
                },
                logTarget:"player",
                filter:function (event,player){
return event.player!=player&&event.card.name=="tao"&&!_status.dying.length;
},
                round:1,
                content:function (){
"step 0"
player.draw();
trigger.excluded.add(trigger.player);
"step 1"
if(trigger.player.canUse({name:"sha"},player,false)) trigger.player.useCard({name:"sha",isCard:true},player,false,'noai');
},
                group:["dz_aichi_roundcount"],
            },
            "dz_gongji":{
                trigger:{
                    global:"phaseDrawBegin1",
                },
                direct:true,
                init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
                filter:function (event,player){
if(event.numFixed) return false;
return event.player==player||player.storage.dz_gongji.contains(event.player);
},
                content:function (){
"step 0"
if(trigger.player==player){
player.chooseTarget(get.prompt2('dz_gongji'),function(card,player,target){
return player!=target;
}).set('ai',function(target){
var num=get.attitude(_status.event.player,target);
return num;
});
}else{
trigger.changeToZero();
player.draw(4);
player.logSkill("dz_gongji",trigger.player);
player.storage.dz_gongji.remove(trigger.player);
event.finish();
}
"step 1"
if(result.bool){
var target=result.targets[0];
player.storage.dz_gongji.add(target);
trigger.changeToZero();
player.logSkill("dz_gongji",target);
target.draw(4);
}
},
            },
            "dz_xiangfu":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
return player.countCards('he')>=Math.min(2,player.getDamagedHp());
},
                selectCard:function (){
                var player=_status.event.player;
return Math.min(2,player.getDamagedHp());
},
                filterCard:true,
                filterTarget:function (card,player,target){
                return player!=target;
            },
                content:function (){
"step 0"
if(!player.isDamaged()&&!target.isDamaged()) event.noBool=true;
if(player.isDamaged()&&target.isDamaged()){
player.chooseBool("是否回复一点体力？如果选择否则"+get.translation(target)+"回复一点体力");
}else if(player.isDamaged()&&!target.isDamaged()){
event._result={bool:true};
}else if(!player.isDamaged()&&target.isDamaged()) event._result={bool:false};
"step 1"
if(!event.noBool){
if(result.bool){
player.recover();
}else target.recover();
}
"step 2"
if(player.hp==target.hp&&game.countPlayer()>2){
player.chooseTarget('你可以对另一名其他角色造成一点伤害。',function(card,player,target){
return target!=player&&target!=_status.event.target;
}).set('ai',function(target){
var player=_status.event.player;
return get.damageEffect(target,player,player);
}).set('target',target);
}else event.finish();
"step 3"
if(result.bool){
var target2=result.targets[0];
player.logSkill("dz_xiangfu",target2);
target2.damage('nocard');
}
},
            },
            "dz_guice":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"phaseDrawBegin2",
                },
                direct:true,
                lastDo:true,
                filter:function (event,player){
return !event.numFixed;
},
                content:function (){
"step 0"
player.chooseControl('多摸牌','少摸牌','cancel2',function(event,player){
return 'cancel2';
}).set('prompt','诡策：请选择一项');
"step 1"
if(result.control!='cancel2'){
if(result.control=='多摸牌'){
player.logSkill("dz_guice");
trigger.num+=player.getAttackRange();
player.storage.dz_guice_buff=false;
player.storage.dz_guice_buff2=player.getAttackRange();
player.addTempSkill("dz_guice_buff");
event.finish();
}else{
var map={};
var list=[];
for(var i=1;i<=trigger.num;i++){
var cn=get.cnNumber(i,true);
map[cn]=i;
list.push(cn);
}
event.map=map;
player.chooseControl(list,function(event,player){
return '一';
}).set('prompt','诡策：少摸任意张牌');
}
}else event.finish();
"step 2"
player.logSkill("dz_guice");
var num=event.map[result.control]||1;
trigger.num-=num;
player.storage.dz_guice_buff=num;
player.addTempSkill("dz_guice_buff");
},
                subSkill:{
                    buff:{
                        sub:true,
                        onremove:function (player){
delete player.storage.dz_guice_buff;
delete player.storage.dz_guice_buff2;
},
                        mod:{
                            attackFrom:function (from,to,distance){
if(!from.storage.dz_guice_buff) return Infinity;
return distance-from.storage.dz_guice_buff;
},
                            maxHandcard:function (player,num){
if(player.storage.dz_guice_buff2) return num+player.storage.dz_guice_buff2;
},
                        },
                    },
                },
            },
            "dz_nufa":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                discard:false,
                lose:false,
                delay:0,
                filterCard:{
                    name:"sha",
                },
                filterTarget:function (card,player,target){
return target!=player&&player.inRange(target);
},
                filter:function (event,player){
return player.getAttackRange()>0&&player.countCards("h",{name:"sha"});
},
                content:function (){
"setp 0"
target.gain(cards,player,'giveAuto');
"step 1"
if(player.canUse({name:"sha"},target,false)){
player.useCard({name:"sha",isCard:true},target,false).card.dz_nufa=true;
if(!player.storage.dz_nufa_buff) player.storage.dz_nufa_buff=0;
player.storage.dz_nufa_buff++;
player.addTempSkill("dz_nufa_buff");
}
},
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
if(!arg||!arg.card||arg.card.dz_nufa!=true) return false;
},
                },
                group:"dz_nufa_diH",
                subSkill:{
                    diH:{
                        trigger:{
                            player:"useCard1",
                        },
                        firstDo:true,
                        silent:true,
                        filter:function (event,player){
return event.card&&event.card.dz_nufa;
},
                        content:function (){
trigger.directHit.addArray(game.players);
},
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    buff:{
                        sub:true,
                        onremove:true,
                        mod:{
                            attackFrom:function (from,to,distance){
if(from.storage.dz_nufa_buff) return distance+from.storage.dz_nufa_buff;
},
                        },
                    },
                },
            },
            "dz_yuyong":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                content:function (){
"step 0"
player.chooseControl(lib.suit,'cancel2',function(){
return lib.suit.randomGet()
}).set('prompt','馀勇：你可以请选择一个花色');
"step 1"
if(result.control!='cancel2'){
player.logSkill("dz_yuyong");
event.suit=result.control;
player.popup(event.suit+2);
game.log(player,'选择了',event.suit+2);
player.storage.dz_yuyong_buff=result.control;
player.addTempSkill("dz_yuyong_buff",{player:"phaseUseBegin"});
}
},
                marktext:"勇",
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
if(storage&&storage.length){
player.$throw(storage,1000);
game.cardsDiscard(storage);
game.log(storage,'被置入了弃牌堆');
storage.length=0;
}
},
                },
                group:"dz_yuyong_sha",
                subSkill:{
                    buff:{
                        trigger:{
                            global:"cardsDiscardEnd",
                            player:"loseAfter",
                        },
                        direct:true,
                        filter:function (event,player){
                        if(!player.storage.dz_yuyong_buff) return false;
                        if(event.name=="cardsDiscard"){
                        var bool=false;
                        var evtx=event.getParent();
                        if(evtx.name!='orderingDiscard') return false
                        var evt2=(evtx.relatedEvent||evtx.getParent());
                        if(evt2&&evt2.player&&evt2.player==player) bool=true;
                        }
for(var i=0;i<event.cards.length;i++){
if(get.position(event.cards[i],true)=='d'&&get.suit(event.cards[i])==player.storage.dz_yuyong_buff){
if(event.name=='lose'){
return true;
}else return bool;
}
}
return false;
},
                        content:function (){
var list=[];
if(!player.storage.dz_yuyong) player.storage.dz_yuyong=[];
for(var i=0;i<trigger.cards.length;i++){
if(get.position(trigger.cards[i],true)=='d'&&get.suit(trigger.cards[i])==player.storage.dz_yuyong_buff){
list.push(trigger.cards[i]);
}
}
if(list.length>0){
player.$draw(list);
player.storage.dz_yuyong.addArray(list);
game.cardsGotoSpecial(list);
player.syncStorage('dz_yuyong');
player.markSkill("dz_yuyong");
}
},
                        sub:true,
                    },
                    sha:{
                        audio:2,
                        enable:["chooseToRespond","chooseToUse"],
                        filterCard:function (card,player){
if(!player.storage.dz_yuyong_buff) return false;
return get.suit(card)==player.storage.dz_yuyong_buff;
},
                        position:"he",
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function (player){
if(!player.storage.dz_yuyong_buff) return false;
var suit=player.storage.dz_yuyong_buff;
return player.countCards("he",{suit:suit});
},
                        prompt:"将一张合适的牌当杀使用或打出",
                        check:function (card){return 4-get.value(card)},
                        ai:{
                            skillTagFilter:function (player){
if(!player.storage.dz_yuyong_buff) return false;
var suit=player.storage.dz_yuyong_buff;
return player.countCards("he",{suit:suit});
},
                            respondSha:true,
                            canLink:function (player,target,card){
                        if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
                        if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                            target:target,
                            card:card,
                        },true)) return false;
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
                            })>1) return 3.1;
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
                            },true)) return eff/1.2;
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
                        sub:true,
                    },
                },
            },
            "dz_aozhan":{
                enable:"phaseUse",
                delay:false,
                filter:function (event,player){
if(!player.storage.dz_yuyong) return false;
var bool1=player.hasUseTarget("juedou");
var bool2=game.hasPlayer(function(target){
return target.canUse({name:"juedou"},player,false);
});
if(!bool1&&!bool2) return false;
return player.storage.dz_yuyong.length;
},
                chooseButton:{
                    dialog:function (event,player){              
return ui.create.dialog('鏖战',player.storage.dz_yuyong,'hidden');
},
                    select:function (button){
var player=_status.event.player;
var bool1=player.hasUseTarget("juedou");
var bool2=game.hasPlayer(function(target){
return target.canUse({name:"juedou"},player,false);
});
if(bool1&&bool2){
return [1,2];
}else if(bool1){
return 2;
}else if(bool2) return 1;
return player.storage.dz_yuyong.length+1;
},
                    check:function (button){
var player=_status.event.player;
var effect=player.getUseValue('juedou');
if(effect>0) return effect;
return 0;
},
                    backup:function (links,player){
var next=get.copy(lib.skill.dz_aozhan_x);
next.cards=links;
return next;
},
                },
                subSkill:{
                    x:{
                        direct:true,
                        delay:false,
                        content:function (){
                        "step 0"
                        var cards=lib.skill.dz_aozhan_backup.cards;
                        player.storage.dz_yuyong.removeArray(cards);
                        player.syncStorage('dz_yuyong');
                        if(player.storage.dz_yuyong.length==0) player.unmarkSkill('dz_yuyong');
                        game.cardsDiscard(cards);
                        player.$throw(cards,1000);
                        game.log(cards,'被置入了弃牌堆');
                        if(cards.length==2){
                        player.chooseUseTarget({name:'juedou'},true,false,'nodistance').logSkill='dz_aozhan';
                        event.finish();
                        }else player.chooseTarget('令一名其他角色对你使用一张【决斗】',true,function(card,player,target){
return target!=player&&target.canUse({name:"juedou"},player,false);
}).set('ai',function(target){
return -1;
});
                        "step 1"
if(result.bool){                        
var target=result.targets[0];
player.logSkill("dz_aozhan",target);
target.useCard({name:"juedou",isCard:true},player,false,'noai');
}
                        },
                        sub:true,
                    },
                },
            },
            "dz_fengxi":{
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:-1,
                filter:function (event,player){
var hs=player.getCards('h');
if(!hs.length) return false;
for(var i=0;i<hs.length;i++){
var mod2=game.checkMod(hs[i],player,'unchanged','cardEnabled2',player);
if(mod2===false) return false;
}
return true;
},
                viewAs:{
                    name:"nanman",
                },
                ai:{
                    order:0.1,
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    basic:{
                        order:9,
                        useful:[5,1],
                        value:5,
                    },
                    result:{
                        "target_use":function (player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                        target:function (player,target){
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
                        respondSha:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
                group:"dz_fengxi_Card",
                subSkill:{
                    Card:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        forced:true,
                        filter:function (event,player){
if(event.skill!="dz_fengxi") return false;
return game.hasPlayer(function(target){
return target.getHistory('respond',function(evt){
return evt.card.name=="sha"&&evt.cards.length>0&&evt.getParent(3)==event;
}).length;
});
},
                        content:function (){
var cards=[];
game.hasPlayer(function(target){
target.getHistory('respond',function(evt){
if(evt.card.name=="sha"&&evt.cards.length>0&&evt.getParent(3)==trigger) cards.addArray(evt.cards);
});
});
for(var i=0;i<cards.length;i++){
if(get.position(cards[i])!='d') cards.remove(cards[i--]);
}
if(cards.length>0) player.gain(cards,"gain2");
},
                        sub:true,
                    },
                },
            },
            "dz_guyuan":{
                trigger:{
                    player:"damageBegin3",
                },
                direct:true,
                init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
                filter:function (event,player){
var num=Math.min(5,player.maxHp);
if(!event.card||player.storage.dz_guyuan.contains(event.card.name)) return false;
return player.countCards("h")<num;
},
                content:function (){
"step 0"
player.storage.dz_guyuan.add(trigger.card.name);
player.chooseBool(get.prompt2('dz_guyuan'));
"step 1"
if(result.bool){
var num=Math.min(5,player.maxHp);
player.drawTo(num);
trigger.num++;
}
},
                group:"dz_guyuan_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            global:"roundStart",
                        },
                        forced:true,
                        direct:true,
                        content:function (){
player.storage.dz_guyuan=[];
},
                        sub:true,
                    },
                },
            },
            "dz_dingzuo":{
                audio:"ext:先秦杀:2",
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                forced:true,
                zhuSkill:true,
                filter:function (event,player){
if(!player.hasZhuSkill('dz_dingzuo')) return false;
return true;
},
                content:function (){
'step 0'
var targets=game.filterPlayer();
targets.remove(player);
event.targets=targets;
event.num=0;
'step 1'
if(event.targets.length){
var current=event.targets.shift();
current.chooseBool('是否与'+get.translation(player)+'各摸一张牌？').set('ai',function(){
return get.attitude(_status.event.player,_status.event.target)>0;
}).set('target',player);
event.current=current;
game.delay();
}
'step 2'
if(result.bool){
event.num++;
event.current.line(player,'green');
game.asyncDraw([player,event.current]);
}
if(event.targets.length){
event.goto(1);
}
'step 3'
if(event.num){
player.gainMaxHp(event.num);
player.recover(event.num);
}
},
            },
            "dz_cijue":{
                trigger:{
                    player:"useCardToTargeted",
                },
                logTarget:"target",
                forced:true,
                filter:function (event,player){
if(event.card.name!='sha') return false;
var num=player.countCards("h");
var num2=event.target.countCards("h");
if(num<num2&&num>=5) return false;
if(num==num2||get.distance(player,event.target)>1) return false;
return true;
},
                content:function (){
"step 0"
var num=player.countCards("h");
var num2=trigger.target.countCards("h");
if(num>num2){
var num3=num-num2;
player.chooseToDiscard("h",num3,true);
}else{
var num3=Math.min(5,num2);
player.drawTo(num3);
event.finish();
}
"step 1"
var id=trigger.target.playerid;
var map=trigger.getParent().customArgs;
if(!map[id]) map[id]={};
if(typeof map[id].extraDamage!='number'){
map[id].extraDamage=0;
}
map[id].extraDamage+=result.cards.length;
},
                mod:{
                    globalFrom:function (from,to){
if(to.inRange(from)) return -Infinity;
},
                },
            },
            "dz_huogang":{
                trigger:{
                    player:"damageEnd",
                    source:"damageSource",
                },
                forced:true,
                content:function (){
"step 0"
lib.skill.pingjian.initList();
"step 1"
event.ch=[];
var list=[];
for(var i=0;i<_status.characterlist.length;i++){
var ch=_status.characterlist[i];
if(lib.character[ch][3].length>0) event.ch.addArray(lib.character[ch][3]);
}
for(var i=0;i<event.ch.length;i++){
if(lib.skill[event.ch[i]]&&lib.skill[event.ch[i]].limited) list.add(event.ch[i]);
}
for(var i in player.disabledSkills){
if(list.contains(i)) list.remove(i);
}
list.removeArray(player.getSkills());
if(list.length>0){
var skill=list.randomGet();
player.addSkillLog(skill);
}
},
            },
            "dz_gengjie":{
                trigger:{
                    player:["damageBegin4","damageEnd"],
                },
                direct:true,
                filter:function (event,player,name){
if(name=='damageBegin4'){
return true;
}else return event.card;
},
                content:function (){
"step 0"
if(event.triggername=="damageBegin4"){
delete player.storage.dz_gengjie;
event.finish();
}else player.chooseBool(get.prompt2('dz_gengjie'));
"step 1"
player.logSkill("dz_gengjie");
player.storage.dz_gengjie=trigger.card.name;
},
                mod:{
                    targetEnabled:function (card,player,target,now){
if(target.storage.dz_gengjie){
if(card.name==target.storage.dz_gengjie) return false;
}
},
                },
            },
            "dz_yijie":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"damageBegin3",
                },
                forced:true,
                filter:function (event,player){
if(!player.isLinked()&&!player.classList.contains('turnedover')) return false;
if(event.nature) return true;
},
                content:function (){
trigger.cancel();
},
            },
            "dz_tuiyan":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"useCardToPlayer",
                    target:"useCardToTarget",
                },
                direct:true,
                usable:1,
                filter:function (event,player){                
return player.countCards("he")&&event.card.name=="sha";
},
                content:function (){
"step 0"
player.chooseCard("你可以将一张牌置于牌堆顶或牌堆底然后从另一端摸三张牌。","he");
"step 1"
if(result.bool){
event.card=result.cards[0];
player.chooseControlList('推衍','将'+get.translation(event.card)+'置于牌堆顶','将'+get.translation(event.card)+'置于牌堆底',true,function(){
return 1;
});
}else{
player.storage.counttrigger.dz_tuiyan--;
event.finish();
}
"step 2"
event.index=result.index;
player.logSkill("dz_tuiyan");
var next=player.lose(event.card,ui.cardPile);
if(event.index==0) next.insert_card=true;
game.broadcastAll(function(player){
var cardx=ui.create.card();
cardx.classList.add('infohidden');
cardx.classList.add('infoflip');
player.$throw(cardx,1000,'nobroadcast');
},player);
"step 3"
if(event.index==0){
game.log(player,'将一张牌置于牌堆顶');
player.draw(3,'bottom');
}else{
game.log(player,'将一张牌置于牌堆底');
player.draw(3);
}
},
            },
            "dz_gengjie_x":{
                trigger:{
                    player:["damageBegin4","damageEnd"],
                    source:"damageBegin1",
                },
                direct:true,
                filter:function (event,player,name){
if(name=='damageBegin4') return true;
if(name=='damageEnd') return event.card;
if(name=='damageBegin1') return player.storage.dz_gengjie_x&&event.card&&event.card.name==player.storage.dz_gengjie_x;
return false;
},
                content:function (){
"step 0"
if(event.triggername=="damageBegin1"){
player.logSkill("dz_gengjie_x");
trigger.num++;
event.finish();
}
if(event.triggername=="damageBegin4"){
delete player.storage.dz_gengjie_x;
event.finish();
}
if(event.triggername=="damageEnd") player.chooseBool(get.prompt2('dz_gengjie_x'));
"step 1"
player.logSkill("dz_gengjie_x");
player.storage.dz_gengjie_x=trigger.card.name;
},
                mod:{
                    targetEnabled:function (card,player,target,now){
if(target.storage.dz_gengjie_x){
if(card.name==target.storage.dz_gengjie_x) return false;
}
},
                },
            },
            "dz_tufu":{
                trigger:{
                    player:["phaseUseBegin","phaseUseEnd"],
                },
                direct:true,
                filter:function (event,player){
return player.countCards('he')>0
},
                content:function (){
"step 0"
player.chooseCard(get.prompt2('dz_tufu'),"he",[1,player.countCards('he')]);
"step 1"
if(result.bool){
event.bool=true;
var cards=result.cards;
player.logSkill("dz_tufu");
var hs=player.getCards('h');
if(!hs.length) event.bool=false;
for(var i=0;i<hs.length;i++){
if(!cards.contains(hs[i])){
event.bool=false;break;
}
}
player.$throw(cards,1000);
player.lose(cards,ui.discardPile,'visible');
game.log(player,'将',cards,'置入弃牌堆');
player.draw(cards.length);
}else event.finish();
"step 2"
if(event.bool){
var list=[];
for(var i=0;i<lib.inpile.length;i++){
var name=lib.inpile[i];
if(name=='sha'){
list.push(['基本','','sha']);
list.push(['基本','','sha','fire']);
list.push(['基本','','sha','thunder']);
list.push(['基本','','sha','ice']);
}else if(get.type(name)=="basic") list.push(['基本','',name]);
}
if(list.length>0){
player.chooseButton(['吐辅：选择要使用的基本牌',[list,'vcard']],function(button){
return _status.event.player.getUseValue({name:button.link[2],nature:button.link[3]});
},function(button){
return _status.event.player.hasUseTarget({name:button.link[2],nature:button.link[3]});
});
}else event.finish();
}else event.finish();
"step 3"
if(result.bool){
player.chooseUseTarget({name:result.links[0][2],isCard:true,nature:result.links[0][3]},true,false);
}
},
            },
            "dz_zhili":{
                enable:"phaseUse",
                filter:function (event,player){
return player.countCards('he')>0;
},
                filterCard:true,
                filterTarget:function (card,player,target){
return !target.getStorage('dz_zhili_buff').length;
},
                check:function (card){
return 6-get.value(card)
},
                position:"he",
                discard:false,
                toStorage:true,
                prepare:"give",
                content:function (){
target.markAuto('dz_zhili_buff',cards);
},
                ai:{
                    order:1,
                    result:{
                        target:-1,
                    },
                },
                global:"dz_zhili_buff",
                group:"dz_zhili_gain",
                subSkill:{
                    gain:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        direct:true,
                        popup:false,
                        filter:function (event,player){
return game.hasPlayer(function(current){
return current.getStorage('dz_zhili_buff')&&current.getStorage('dz_zhili_buff').length>0;
});
},
                        content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i].getStorage('dz_zhili_buff')&&game.players[i].getStorage('dz_zhili_buff').length>0){
var cards=game.players[i].getStorage('dz_zhili_buff');
game.players[i].gain(cards,'gain2','log','fromStorage');
cards.length=0;
game.players[i].unmarkSkill('dz_zhili_buff');
}
} 
},
                        sub:true,
                    },
                    buff:{
                        mod:{
                            cardEnabled:function (card,player){
if(player.getStorage('dz_zhili_buff').filter(function(magic){
return get.name(magic)==get.name(card);
}).length) return false;
},
                            cardRespondable:function (card,player){
if(player.getStorage('dz_zhili_buff').filter(function(magic){
return get.name(magic)==get.name(card);
}).length) return false;
},
                            cardSavable:function (card,player){
if(player.getStorage('dz_zhili_buff').filter(function(magic){
return get.name(magic)==get.name(card);
}).length) return false;
},
                        },
                        intro:{
                            content:"cards",
                            onunmark:function (storage,player){
if(storage&&storage.length){
player.$throw(storage,1000);
game.cardsDiscard(storage);
game.log(storage,'被置入了弃牌堆');
storage.length==0;
}
},
                        },
                        sub:true,
                    },
                },
            },
            "dz_miaoshe":{
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){
return event.player!=player&&event.player.getHistory("useCard",function(evt){
return evt.card.name=="sha"&&evt.targets&&evt.targets.contains(player);
}).length>0;
},
                content:function (){
"step 0"
event.cards=get.cards(3);
event.suit=[];
player.showCards(event.cards);
for(var i=event.cards.length-1;i>=0;i--){
event.suit.add(get.suit(event.cards[i]));
event.cards[i].fix();
ui.cardPile.insertBefore(event.cards[i],ui.cardPile.childNodes[0]);
}
game.updateRoundNumber();
"step 1"
if(event.suit.contains("heart")&&player.isDamaged()) player.recover();
if(event.suit.contains("spade")&&trigger.player.countDiscardableCards(player,'he')>0) player.discardPlayerCard(trigger.player,'he',2,true);
},
            },
            "dz_weiming":{
                audio:"ext:先秦杀:2",
                trigger:{
                    player:"loseAfter",
                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
                },
                usable:1,
                filter:function (event,player){
if(player.countCards('h')) return false;
var evt=event.getl(player);
return evt&&evt.player==player&&evt.hs&&evt.hs.length>0&&player.maxHp>player.countCards("h");
},
                content:function (){
"step 0"
var num=Math.min(5,player.maxHp-player.countCards("h"));
player.draw(num);
"step 1"
if(player.isMaxHandcard(true)) player.loseHp();
},
            },
            "dz_zuozheng":{
                audio:"ext:先秦杀:2",
                trigger:{
                    global:"roundStart",
                },
                direct:true,
                locked:true,
                content:function (){
"step 0"
player.chooseTarget(get.prompt2('dz_zuozheng'),function(card,player,target){
if(player.storage.dz_zuozheng&&player.storage.dz_zuozheng.contains(target)) return false; 
return target!=player;
}).set('ai',function(target){
return 1;
});
"step 1"
if(result.bool){
var target=result.targets[0];
player.logSkill("dz_zuozheng",target)
if(!player.storage.dz_zuozheng) player.storage.dz_zuozheng=[];
player.storage.dz_zuozheng.add(target);
player.markSkill('dz_zuozheng');
}
},
                marktext:"佐",
                intro:{
                    name:"佐政",
                    content:"当$受到/造成伤害后你与受伤者/其各摸一张牌。",
                },
                group:["dz_zuozheng_delete","dz_zuozheng_draw"],
                subSkill:{
                    delete:{
                        trigger:{
                            global:"roundStart",
                        },
                        direct:true,
                        forced:true,
                        priority:5,
                        content:function (){
player.unmarkSkill('dz_zuozheng');
delete player.storage.dz_zuozheng;
},
                        sub:true,
                    },
                    draw:{
                        trigger:{
                            global:["damageEnd","damageSource"],
                        },
                        filter:function (event,player,name){
if(name=="damageEnd"){
return player.storage.dz_zuozheng&&player.storage.dz_zuozheng.contains(event.player);
}else return player.storage.dz_zuozheng&&event.source&&player.storage.dz_zuozheng.contains(event.source);
},
                        forced:true,
                        content:function (){
                        if(event.triggername=="damageEnd"){
game.asyncDraw([player,trigger.player]);
}else game.asyncDraw([player,trigger.source]);
},
                        sub:true,
                    },
                },
            },
            "dz_xinyu":{
                audio:"ext:先秦杀:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
return target!=player;
},
                content:function (){
'step 0'
event.list=[];
var bool1=false;
for(var i=0;i<lib.inpile.length;i++){
var name=lib.inpile[i];
if(get.type(name)=="trick"){
if(player.canUse({name:name,isCard:true},target,false)) bool1=true;
event.list.push(['锦囊','',name]);
}
}
var bool2=player.canUse({name:"sha",nature:'fire',isCard:true},target,false);
if(bool1&&bool2){
target.chooseControl(function(){
return 0;
}).set('choiceList',[
'视为'+get.translation(player)+'对你使用一张普通锦囊牌。',
'视为'+get.translation(player)+'对你使用一张火【杀】。',
]).set('ai',function(){
return 0;
});
}
else if(bool1){
event.directindex=0;
}
else if(bool2){
event.directindex=1;
}
else{
event.finish();
}
'step 1'
if(result&&typeof event.directindex!='number'){
event.directindex=result.index;
}
if(event.directindex==1){
var next=player.useCard({name:"sha",nature:'fire',isCard:true},target,false,'noai');
next.card.dz_xinyu=true;
next.card.dz_xinyu_fire=target;
event.finish();
}
else{
player.chooseButton(['心蜮：选择要使用的锦囊牌',[event.list,'vcard']],function(button){
return _status.event.player.getUseValue({name:button.link[2],nature:button.link[3]});
},function(button){
return _status.event.player.canUse({name:button.link[2],nature:button.link[3]},target);
});
}
'step 2'
if(result.bool){
var next=player.useCard({name:result.links[0][2],isCard:true},target,false,'noai');
next.card.dz_xinyu=true;
next.card.dz_xinyu_fire=target;
}
},
                group:"dz_xinyu_fire",
                subSkill:{
                    fire:{
                        trigger:{
                            global:"damageEnd",
                        },
                        filter:function (event,player){
return event.card&&event.nature&&event.nature=='fire'&&event.card.dz_xinyu&&event.card.dz_xinyu_fire==event.player;
},
                        forced:true,
                        content:function (){
player.getStat().skill.dz_xinyu--;
},
                        sub:true,
                    },
                },
            },
        },
        translate:{
            "dz_chengshe":"惩赦",
            "dz_chengshe_info":"每当你造成或受到1点伤害后，你可以令一名已受伤的角色将体力回复或失去至与其已损失的体力值相同。（每名角色限一次）。",
            "dz_batu":"霸图",
            "dz_batu_info":"出牌阶段限一次，你可以令一名其他角色选择一项:1.视为你对其使用一张【杀】。2.交给你一张牌且其攻击范围内的角色皆视为在你的攻击范围内，直到回合结束。",
            "dz_youmie":"诱灭",
            "dz_youmie_info":"出牌阶段开始时，你可以展示一张牌并交给一名角色。若如此做，该角色不能使用或打出此类别的牌且其不能使用牌指定除你以外的其他角色为目标，直到你下个回合开始",
            "dz_yintui":"隐退",
            "dz_yintui_info":"锁定技，一名角色回合结束时，若你没有手牌，则你翻面，然后将手牌摸至体力上限。",
            "dz_guigu":"鬼谷",
            "dz_guigu_info":"锁定技，其他角色只能对你使用基本牌和普通锦囊牌且每回合至多各一张；当你成为其他角色使用牌的目标后，若你不为此牌唯一目标则此牌对你无效。",
            "dz_huizhi":"汇智",
            "dz_huizhi_info":"锁定技，每回合每种颜色限一次，当一张牌因使用或打出而进入弃牌堆时，你获得之。",
            "dz_shouxue":"授学",
            "dz_shouxue_info":"锁定技，你使用或打出的牌结算后置于你的武将牌上，你的回合结束时你将这些牌弃置或交给一名其他角色。",
            "dz_qiwu":"齐物",
            "dz_qiwu_info":"限定技，出牌阶段，你可令所有角色将体力回复或失去至与你相同。",
            "dz_dasheng":"达生",
            "dz_dasheng_info":"锁定技，当你脱离濒死状态后，你回复1点体力且当前回合角色不能再使用牌，直到本回合结束。",
            "dz_zaiyou":"在宥",
            "dz_zaiyou_info":"每名角色限一次，当一名角色进入濒死状态时，你可令其摸x张牌。（x为其体力上限且至多为4）。",
            "dz_chanjian":"馋间",
            "dz_chanjian_info":"出牌阶段限一次，你可选择一名其他角色并选择基本牌、锦囊牌、装备牌中的一个类别，当该角色使用或打出此类别的牌时，你令其对另一名其他角色造成1点伤害，直到你的下回合开始。（每回合限触发一次）。",
            "dz_huotin":"惑听",
            "dz_huotin_info":"回合结束时，你可以摸x张牌。若如此做，你交给一名其他角色两张牌且该角色跳过其下个摸牌阶段。（x为你的体力上限）",
            "dz_yuejia":"越甲",
            "dz_yuejia_info":"回合结束时，你可以将一张牌置于武将牌上，称之为“甲”。若如此做，其他角色不能使用与此牌花色相同的牌指定你为目标，直到你下回合开始。",
            "dz_cangfeng":"藏锋",
            "dz_cangfeng_info":"锁定技，回合外你的［杀］只能当［闪］使用或打出；当你使用或打出一张[闪]时，你与当前回合角色各摸一张牌。",
            "dz_zhenfu":"振复",
            "dz_zhenfu_info":"限定技，出牌阶段，你可以选择一名其他角色并减少1点体力上限。若如此做，你视为对其使用x张[杀]。（x为你发动“越甲”的次数且不能超过该角色的体力上限)。",
            "dz_gulei":"固垒",
            "dz_gulei_info":"回合开始时，你可以选择一名其他角色，若如此做，该角色对你造成伤害时，弃置一张牌，否则防止此伤害。直至你的下回合开始。",
            "dz_huoyou":"获宥",
            "dz_huoyou_info":"出牌阶段限一次，你可以展示所有手牌，并令一名其他角色选择一项：1. 展示其所有手牌；2. 弃置你手牌中每种类别的牌各一张，然后你与其各回复一点体力。",
            "dz_wanbi":"完璧",
            "dz_wanbi_info":"锁定技，其他角色不能弃置或获得你的手牌或装备牌；你于回合外使用或打出一张牌后，你令一名角色摸一张牌。",
            "dz_kuiwu":"馈侮",
            "dz_kuiwu_info":"其他角色出牌阶段结束时，若其本阶段造成过伤害，你可与其拼点，若你赢则你对其造成一点伤害；若其没赢则其本回合手牌上限-1。",
            "dz_youai":"忧艾",
            "dz_youai_info":"出牌阶段限一次，你可以弃置一张【杀】并弃置一名其他角色的一张牌，若此牌也为【杀】，你可重复此流程。",
            "dz_bianshi":"鞭尸",
            "dz_bianshi_info":"你的回合内，当一张【杀】进入弃牌堆后，你可以将此【杀】交给一名其他角色，若如此做，你视为对该角色使用一张【杀】。若该角色因此进入了濒死状态则本阶段其他角色不能对其使用【桃】，若其并未死亡，你失去一点体力并弃置一张牌。",
            "dz_hedao":"合道",
            "dz_hedao_info":"每当你受到1点伤害后，你可以观看伤害来源的手牌并选择其中的一个花色。然后其将所有此花色的牌交给你。",
            "dz_yunyou":"云游",
            "dz_yunyou_info":"锁定技，一名角色回合结束后，若你本回合受到过伤害，则你进行一个额外回合且你本回合仅能使用一种颜色的牌且你另一种颜色的牌不计入手牌上限。",
            "dz_fadu":"法度",
            "dz_fadu_info":"每回合限一次，当一名其他角色使用牌指定你为唯一目标或当你使用牌指定一名角色为唯一目标时，你可令另一名其他角色代替你成为此牌的目标或使用者。",
            "dz_shuonan":"说难",
            "dz_shuonan_info":"出牌阶段限一次，你可以选择一名角色，然后该角色选择一项:1.展示其所有手牌，然后对你使用其中一张牌。2.你展示所有手牌，然后对其使用其中一张牌。（不计入次数）",
            "dz_chuwu":"除巫",
            "dz_chuwu_info":"你于以下阶段开始时，可弃置一名其他角色的一张牌:摸牌阶段，出牌阶段，弃牌阶段。",
            "dz_zhiye":"治邺",
            "dz_zhiye_info":"回合结束时，你可摸x张牌。（x为你本回合发动过“除巫”角色中没有手牌的角色数）",
            "dz_jiandai":"谏殆",
            "dz_jiandai_info":"出牌阶段限一次，你可弃置任意张花色各不相同的手牌，然后令一名其他角色弃置以上花色的各一张牌，其每少弃置一张牌，你便摸一张牌。",
            "dz_baihou":"拜后",
            "dz_baihou_info":"限定技，锁定技，回合结束时，若你本回合发动“谏殆”弃置了四种花色，你摸四张牌，然后你加1点体力上限并与一名男性角色各回复1点体力。",
            "dz_shibiao":"师表",
            "dz_shibiao_info":"回合结束时，你可选择一名其他角色。若如此做，该角色下回合不能使用你本回合没有使用的牌名相同牌(装备牌除外)且其可将任意一张手牌当做你本回合使用的非装备牌使用。（每个牌名限使用一次）",
            "dz_zhongyong":"中庸",
            "dz_zhongyong_info":"出牌阶段开始时，你可展示所有手牌，然后摸x张牌。（x为你手牌中没有的花色数）",
            "dz_moshou":"墨守",
            "dz_moshou_info":"锁定技，当你每回合第一/二次成为牌的目标时，你摸一张牌/将其中一张牌置于本回合角色的判定区，当做你指定的延迟锦囊牌对其使用。",
            "dz_tianzhi":"天志",
            "dz_tianzhi_info":"当一名角色的判定牌生效前如果你有手牌，你可以令该角色打出一张牌替换之。若打出的牌为:红色，你摸一张牌，黑色，你弃置一张牌。",
            "dz_gongtui":"功退",
            "dz_gongtui_info":"1级：锁定技，其他角色对你造成伤害后，弃置一张牌并摸一张牌；你对其他角色造成伤害后，摸一张牌并弃置一张牌。 2级：锁定技，其他角色对你造成伤害后，弃置一张牌并令你摸一张牌；你对其他角色造成伤害后，摸一张牌并弃置该角色一张牌。",
            "dz_zuyue":"助越",
            "dz_zuyue_info":"当你的牌因弃置而进入弃牌堆后，你可以将这些牌交给一名其他角色。其他角色的牌因弃置而进入弃牌堆后，该角色可以将这些牌交给你。若你一轮以此法获得或交给了各不少于10张牌，你失去此技能并升级“功退”。",
            "dz_zhifa":"制法",
            "dz_zhifa_info":"每回合限一次，当你成为其他角色使用的牌的目标后，若你不是此牌唯一的目标，你摸X张牌并展示之，然后交给此牌目标各一张牌（X为此牌目标数）。",
            "dz_jizhi":"急智",
            "dz_jizhi_info":"你于出牌阶段使用仅指定一名其他角色为目标的牌结算完毕后，你令该角色获得此牌并对你使用之，然后该角色于其下个回合不能使用或打出与此牌同名的牌。",
            "dz_sanqian":"三迁",
            "dz_sanqian_info":"回合结束时，你可与一名角色交换座次。（每局限三次）",
            "dz_yuxue":"喻学",
            "dz_yuxue_info":"出牌阶段限一次，你可令一名角色观看你的所有手牌，然后你弃置其中一种颜色的牌。若如此做，该角色摸弃置两倍数量的牌。",
            "dz_guanbing":"观病",
            "dz_guanbing_info":"每回合每名角色限一次，当一名角色进入濒死状态时，你可以观看该角色的所有手牌，然后弃置其中每种类型各一张牌，若你以此法弃置了：不少于1张，该角色摸1张牌；不少于2张，该角色回复一点体力；不少于3张，伤害来源失去一点体力。",
            "dz_huanxin":"换心",
            "dz_huanxin_info":"出牌阶段限一次，你可以选择两名至少满足一种条件的角色（1.体力值不大于你；2.手牌数不大于你；3.装备区内的牌不大于你），你令这些角色将1. 体力值调整至于你相同；2.将手牌数补至与你相同；3.将装备区内的牌补至与你相同。然后你失去一点体力/弃置1张牌/弃置装备区内所有的牌。",
            "dz_chenyu":"沉鱼",
            "dz_chenyu_info":"锁定技，你的回合外你每回合至多成为X张牌的目标(X为你的体力值)。",
            "dz_pengxin":"捧心",
            "dz_pengxin_info":"回合结束时，若你本回合使用或打出的牌数大于/小于你弃牌阶段弃置的牌数，你可以将手牌摸至体力上限/回复1点体力。",
            "dz_zhishu":"直书",
            "dz_zhishu_info":"锁定技，当一名角色使用或弃置一张装备牌时，你获得一枚“功”或“过”标记如果是因使用而触发你摸一张牌。（此装备牌若为红则为“功”，若为黑则为“过”。）",
            "dz_zhangzheng":"仗正",
            "dz_zhangzheng_info":"出牌阶段限一次，你可弃置两枚“功”/“过”令一名角色回复/失去1点体力，若该角色不为你且其没有手牌，你获得其所有装备牌。",
            "dz_zhitian":"制天",
            "dz_zhitian_info":"锁定技，牌堆顶的牌始终对你可见。",
            "dz_zhengzhi":"征知",
            "dz_zhengzhi_info":"出牌阶段，你可以弃置一张牌，然后摸一张牌。回合结束时，若你本回合弃置了四种花色的牌，你回复1点体力。（每种花色各限一次）",
            "dz_xingzhen":"行阵",
            "dz_xingzhen_info":"锁定技，当你装备区内的牌被其他角色获得或弃置时，你随机使用一张与此副类别相同的装备牌。",
            "dz_zhengwei":"挣围",
            "dz_zhengwei_info":"当你失去装备区里的一张牌后 ，你可视为对一名角色使用一张[杀]；当你的[杀]对一名角色造成伤害后，你可获得其一张装备区内的牌。",
            "dz_luandu":"乱黩",
            "dz_luandu_info":"锁定技，当你的牌因弃置而置入弃牌堆时，你使用其中一张或将其中一张当[杀]使用。(无距离与次数限制)",
            yuchong:"鬻宠",
            "yuchong_info":"锁定技，出牌阶段开始或结束时，若你的手牌数为偶数，你摸一张牌；若你的手牌数为奇数，你弃置一张牌。",
            "dz_fenwei":"分围",
            "dz_fenwei_info":"出牌阶段限一次，你可选择一名其他角色。若如此做，除该角色以外的所有其他角色与其距离－1；该角色与所有其他角色距离+1。直到你下个回合开始。",
            "dz_gongjian":"攻歼",
            "dz_gongjian_info":"锁定技，每回合限一次，当“分围”角色受到伤害后，你摸x张牌。若对其造成伤害的是你，你回复1点体力。（x为与“分围”角色距离为1以内的除“分围”角色以外的角色数）",
            "dz_bogui":"驳贵",
            "dz_bogui_info":"锁定技，体力值大于你的角色不能响应你使用的牌；体力值小于你的角色对你造成的伤害+1。",
            "dz_mingfa":"明法",
            "dz_mingfa_info":"出牌阶段限一次，你可弃置一张牌。若如此做，其他角色依次选择是否交给你一张花色与此牌相同的牌，没有交给你牌的角色横置其武将牌。",
            "dz_shiren":"施仁",
            "dz_shiren_info":"当一名角色使用[杀]后如果其手牌数小于体力上限，你可令其将手牌摸至与体力上限(至多摸至5张)，然后其本回合不能再使用或打出牌。",
            "dz_yiju":"贻矩",
            "dz_yiju_info":"锁定技，当你死亡后，其他角色于其出牌阶段使用的牌数不能大于其体力上限。",
            "dz_chenxiang":"沉香",
            "dz_chenxiang_info":"每当你受到1点伤害后，你可令两名角色拼点。若此二者中拼赢的角色:体力值较多，你令一名角色失去1点体力；体力值较少，你令一名角色回复1点体力；体力值与没赢角色相等，你令一名角色摸两张牌。",
            "dz_yuanjue":"缘绝",
            "dz_yuanjue_info":"限定技，当你脱离濒死状态时，你可以回复1点体力，然后令一名其他角色获得技能【惶遽】（锁定技，当你使用[杀]指定目标时，其摸一张牌；当你成为[杀]的目标时，你弃置一张牌）",
            "dz_huangju":"惶遽",
            "dz_huangju_info":"锁定技，当你使用[杀]指定目标时，其摸一张牌；当你成为[杀]的目标时，你弃置一张牌",
            "dz_xingyin":"行吟",
            "dz_xingyin_info":"锁定技，当其他角色响应你使用的牌或你响应其他角色使用的牌时，若这两张牌的点数包括奇数与偶数，你摸一张牌。",
            "dz_huaisha":"怀沙",
            "dz_huaisha_info":"限定技，当你进入濒死状态时，你可令所有其他角色各弃置一张牌，然后你随机从牌堆获得与弃置牌点数相同的牌各一张。 ",
            "dz_kongxian":"控弦",
            "dz_kongxian_info":"摸牌阶段，你可改为摸x张牌且本回合你与其他角色距离－x，然后若其他角色与你距离皆为1以内，你视为对一名角色使用一张[杀]。（x为与你距离1以内的角色数）",
            "dz_quanyi":"权移",
            "dz_quanyi_info":"出牌阶段限x次，你可声明一张基本牌或普通锦囊牌的牌名，然后令所有其他角色观看牌堆顶的牌并同时选择一项:1.声明观看的牌名。2.声明你声明的牌名。若选择选项2的人最多，则你获得牌堆顶的牌并视为使用你声明的牌。否则，你与选择选项1的角色各失去1点体力。（x为你的体力上限且不能声明你本回合以此法使用过的牌）",
            "dz_jieyin":"解音",
            "dz_jieyin_info":"一名其他角色回合结束时，你可与其同时展示一张手牌，若颜色相同你摸一张牌，不同，你弃置其一张牌。",
            "dz_juexian":"绝弦",
            "dz_juexian_info":"限定技，锁定技，当一名角色死亡后，你弃置七张牌，然后摸x张牌，若不足七张，则下轮开始前你的“解音”失效。（x为你弃置的不同花色数）",
            "dz_yishi":"弈世",
            "dz_yishi_backup":"弈世",
            "dz_yishi_x_backup":"弈世",
            "dz_yishi_info":"出牌阶段限一次，你可选择一个装备栏并摸x张牌。若如此做，此装备栏内有牌的角色对此装备栏内没牌的角色造成的伤害+1，直到你下个回合开始。（x为此装备栏内有牌的角色数）",
            "dz_huiji":"晦迹",
            "dz_huiji_info":"当你使用[杀]指定目标或成为[杀]的目标时，你可以与一名角色交换一个装备栏内的装备牌。",
            "dz_chouchou":"仇讎",
            "dz_chouchou_info":"锁定技，当你使用[杀]或[决斗]指定一名对你造成过伤害的角色为唯一目标时，其弃置一张装备区内的牌，你摸x张牌。（x为其已损失的体力值且至多为五）",
            "dz_zhongjian":"忠谏",
            "dz_zhongjian_info":"每轮限一次，当一名其他角色造成伤害后，你可以交给其一张牌，然后其可使用之，若其使用，你回复1点体力，若其没有使用，则其下次受到的伤害+1，直到其下回合开始。",
            "dz_jiezhao":"截诏",
            "dz_jiezhao_info":"回合结束时，你可选择一种花色。若如此做，每当一名其他角色每回合第一次使用此花色的牌时，你将牌堆顶一张牌置于武将牌上称之为‘“诏”，然后你可令此牌失效，直到你的下回合开始。",
            "dz_shiquan":"恃权",
            "dz_shiquan_info":"锁定技，一名其他角色回合结束时，若你有“诏”，你选择一项:1.获得“诏”牌。2.弃置“诏”牌并视为你使用1张[杀]或普通锦囊牌且此牌不可被响应。(不同牌名的锦囊牌每局各限一次)",
            "dz_xianyou":"仙游",
            "dz_xianyou_info":"回合结束时，若牌堆中没有“游”，你可将一张牌置于牌堆顶第x张牌的位置，称为“游”。当获得过“游”的角色回合结束后，你进行一个额外回合。（x为你当前体力值的五倍）",
            "dz_jianxin":"鉴心",
            "dz_jianxin_info":"回合开始时，若本回合是你本轮进行的第二个或更多的回合，则你可观看一名角色的所有手牌并展示其中一种花色的牌。",
            "dz_zhiwang":"止王",
            "dz_zhiwang_info":"限定技，当你进入濒死状态时，你可弃置你装备区的所有牌，然后将体力值回复至1点。若如此做，此后的x轮游戏开始时（x为存活势力数），其他角色计算与你的距离+1。",
            "dz_bijian":"匕见",
            "dz_bijian_info":"锁定技，当你不于濒死状态回复体力时，取消之，然后你摸一张牌，若此时在你的回合内，则你视为使用一张[酒]。（无次数限制）",
            "dz_yijue":"易决",
            "dz_yijue_info":"锁定技，当你每回合第一次使用或打出一种颜色的牌时，你回复1点体力。",
            "dz_shiyi":"市义",
            "dz_shiyi_info":"出牌阶段限一次，你可令一名其他角色展示所有手牌，然后你弃置其中一种花色的牌。若如此做，当该角色下一次受到伤害后，除你和该角色以外的所有其他角色交给其一张黑色牌。（没有则展示所有手牌）",
            "dz_mouku":"谋窟",
            "dz_mouku_info":"当有角色的牌因“市义”而置入弃牌堆时，你可将这些牌置于一名角色的武将牌上，称为“窟”。当有“窟”的角色每回合第x次成为其他角色使用牌的目标时，其选择回复1点体力或将手牌摸至体力上限，你下回合开始时弃置场上所有的“窟”。（x为“窟”的数量且至多为3）",
            "dz_zhujian":"铸剑",
            "dz_zhujian_info":"当你受到伤害后你可将1张红色牌置于伤害来源武将牌上，称之为“雌”，然后获得其1张牌；当你造成伤害后你可将1张黑色牌置于武将牌上，称之为“雄”，然后你摸1张牌。",
            "dz_sheci":"舍刺",
            "dz_sheci_info":"当你使用的牌结算后如果此牌任意目标有“雌”的，你可弃置1张“雄”并弃置其1张“雌”，然后你对其造成1点伤害。",
            "dz_tuozi":"托子",
            "dz_tuozi_info":"限定技，当你进入濒死状态时，你可减1点体力上限将体力值回复至上限并摸x张牌，然后你失去“铸剑”，获得“舍刺”且当前回合结束后你执行一个额外回合。(x为你的“雄”数)",
            "dz_leigong":"累功",
            "dz_leigong_info":"锁定技，当你使用黑色/红色牌造成伤害后，你增加1点体力上限/回复1点体力。（你的体力上限至多为8）",
            "dz_duocheng":"夺城",
            "dz_duocheng_info":"当你造成伤害时，你可减x点体力上限并令此伤害+x。若该角色因此死亡，你摸与该角色体力上限相同数量的牌。（x为你已损失的体力值且不能超过你当前的体力值）",
            "dz_zhudi":"逐狄",
            "dz_zhudi_info":"当你使用[杀]或[决斗]指定目标时，你可令与任意目标距离为1的至多两名其他角色成为额外目标。",
            "dz_xianduo":"先夺",
            "dz_xianduo_info":"锁定技，每轮游戏开始时，你随机获得两张点数与当前游戏轮数相同的牌且可依次使用之。若当前游戏轮数大于13则改为随机获得两张点数和等于当前游戏轮数的牌。",
            "dz_jiaoshe":"交射",
            "dz_jiaoshe_info":"每当你造成或受到伤害后，你可将牌堆顶的x张牌置于武将牌上称为“矢”；回合结束时，你可选择一名其他角色并弃置任意张花色各不相同的“矢”。若如此做，该角色弃置等量的[杀]，其每少弃置一张[杀]，你便视为对其使用一张[杀]。（x为你造成或受到的伤害数）",
            "dz_fentao":"分桃",
            "dz_fentao_info":"出牌阶段限一次，若你的手牌数大于一张，你可将任意张手牌交给一名其他角色，然后你与该角色中手牌数大于体力值的角色回复1点体力。",
            "dz_aichi":"爱弛",
            "dz_aichi_info":"每轮限一次，当一名其他角色使用[桃]时如果场内没有角色处于濒死状态则你可以摸一张牌。若如此做，此[桃]对其无效且视为其对你使用一张[杀]。",
            "dz_gongji":"共济",
            "dz_gongji_info":"摸牌阶段开始时，你可以放弃摸牌，改为令一名其他角色摸四张牌。若如此做，该角色下回合摸牌阶段开始时，放弃摸牌，改为令你摸四张牌。",
            "dz_xiangfu":"相辅",
            "dz_xiangfu_info":"出牌阶段限一次，你可弃置x张牌，然后选择一名其他角色并令你或其回复1点体力，然后若你与其体力值相同，则你可对另一名其他角色造成1点伤害。（x为你已损失的体力值且至多为2）",
            "dz_guice":"诡策",
            "dz_guice_info":"摸牌阶段开始时，你可选择：1.少摸任意张牌然后本回合你的攻击范围+x；2.多摸等同于你攻击范围数量的牌，然后本回合你的攻击范围为0且手牌上限+x。(x为你少摸或多摸的牌数)",
            "dz_nufa":"弩发",
            "dz_nufa_info":"出牌阶段，若你的攻击范围不为0，你可将一张［杀］交给攻击范围内一名其他角色视为你对其使用一张无视防具且不可响应的［杀］，然后本回合你的攻击范围-1。",
            "dz_yuyong":"馀勇",
            "dz_yuyong_info":"出牌阶段开始时，你可以选择一种花色，若如此做，当你该花色的牌置入弃牌堆时，你将之置于武将牌上，称为“勇”，你可以将该花色的牌当做【杀】使用或打出，直到你下个回合开始。",
            "dz_aozhan":"鏖战",
            "dz_aozhan_info":"出牌阶段，你可以</br>1,弃置两张“勇”视为使用【决斗】</br>2,弃置一张“勇”令一名其他角色视为对你使用【决斗】。",
            "dz_fengxi":"烽戏",
            "dz_fengxi_info":"出牌阶段限一次，你可以将所有手牌当做南蛮入侵使用。此牌结算完毕后，若有角色因此打出了[杀]，你获得之。",
            "dz_guyuan":"孤援",
            "dz_guyuan_info":"当你本轮第一次受到一种牌名的牌造成的伤害时，你可将手牌摸至体力上限(至多摸五张)，然后令此伤害+1。",
            "dz_dingzuo":"鼎祚",
            "dz_dingzuo_info":"主公技，锁定技，游戏开始时，所有其他角色依次选择是否与你各摸一张牌。最后你增加x点体力上限并回复x点体力。（x为与你各摸一张牌的角色数）",
            "dz_cijue":"刺绝",
            "dz_cijue_info":"锁定技，你与攻击范围内包含你的角色距离视为1。你使用[杀]指定距离为1的角色为目标时，若你的手牌数大于其，你将手牌弃至x张，然后此[杀]造成的伤害+y，(x为该角色的手牌数，y为你因此弃置的牌数）若你的手牌数小于其，你将手牌摸至与其手牌数相同。（至多摸五张)",
            "dz_huogang":"祸纲",
            "dz_huogang_info":"锁定技，每当你造成或受到伤害后，你随机获得未登场武将牌上的一个限定技。(每个限定技每局仅限获得一次)",
            "dz_gengjie":"耿介",
            "dz_gengjie_info":"当你受到伤害后，你可记录造成伤害的牌的牌名。若如此做，你不能成为此牌名的牌的目标，直到你受到伤害为止。",
            "dz_yijie":"逸节",
            "dz_yijie_info":"锁定技，当你的武将牌处于“连环状态”时或背面向上时，防止你受到的属性伤害。",
            "dz_tuiyan":"推衍",
            "dz_tuiyan_info":"每回合限一次，当你成为[杀]的目标或当你使用[杀]指定目标时，你可将一张牌置于牌堆顶或牌堆底，然后从另一端摸三张牌。",
            "dz_gengjie_x":"耿节",
            "dz_gengjie_x_info":"当你受到伤害后，你可记录造成伤害的牌的牌名。若如此做，你不能成为此牌名的牌的目标且你使用此牌名的牌造成的伤害+1，直到你受到伤害为止。",
            "dz_tufu":"吐辅",
            "dz_tufu_info":"出牌阶段开始或结束时，你可重铸任意张牌。若你一次重铸全部手牌则视为你使用一张基本牌（不计次数）。",
            "dz_zhili":"制礼",
            "dz_zhili_info":"出牌阶段，你可将1张牌置于一名没有“礼”的角色的武将牌旁称之为“礼”。有“礼”的角色不能使用与其“礼”牌名相同的牌，你下回合开始时，这些角色获得各自“礼”。",
            "dz_miaoshe":"妙舌",
            "dz_miaoshe_info":"一名其他角色回合结束时，若其本回合使用[杀]指定过你为目标，你可以展示牌堆顶的三张牌，若其中有红桃，你回复1点体力。黑桃，你弃置其两张牌。",
            "dz_weiming":"危命",
            "dz_weiming_info":"每回合限一次。当你失去最后的手牌时，你可将手牌摸至体力上限（至多摸五张)，然后若你的手牌数为场上唯一最多，你失去1点体力。",
            "dz_zuozheng":"佐政",
            "dz_zuozheng_info":"每轮游戏开始时，你可“佐政”一名其他角色。若如此做，每当该角色造成或受到伤害后，你与其各摸一张牌，直到本轮游戏结束。",
            "dz_xinyu":"心蜮",
            "dz_xinyu_info":"出牌阶段限一次，你可令一名其他角色选择一项:1.视为你对其使用一张普通锦囊牌。2.视为你对其使用一张【火杀】。然后若其因此受到了火焰伤害，则此技能视为未发动过。",
        },
    },
    intro:"扩展介绍：”春秋乱战国争雄，五霸争，七雄戎，先秦者名曰祖龙，风雨骤来去匆匆，兵相容，风灵通，天子权已然成空；观史河波涛汹涌，几多雄？何多纵？鉴君将赫赫征荣！扫六合天下一统，车轨可共，书文可同，天下「逐鹿」霸嵘。”本作是建于历史上先秦时期的名将、诸侯等制作的，精美的插画、丰富多彩的技能设计…先秦杀玩家扩展讨论群：910648189（<div onclick=window.open('https://qm.qq.com/cgi-bin/qm/qr?k=UhCNCor6DWP5j7z0rpJQu8D-M_-ooU8K&authKey=gSIFmoRIYRbUc/PIy3RxoGEoUE2ksBhGqS2MCcwfzibin4iS//KJyhNAnXxzdm1i&noverify=0')><span style=\"color: red;text-decoration: underline;font-style: oblique\">点击此处加入玩家交流群</span></div><span style=\"font-style: oblique\">），期待你的加入。",
    author:"<li>作者：夜雨惊鸿设计组    （QQ:2953312688）<li>技术支持：鬼神易、面包散人<li>测试/设计：墨灵、现代诗人、通稿2023等",
    diskURL:"",
    forumURL:"",
    version:"2.4",
},files:{"character":["烛之武.jpg","聂政.jpg"],"card":[],"skill":[]}}})