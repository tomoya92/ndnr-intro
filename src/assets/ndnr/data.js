let data = [
    {
        category: "动作",
        child: [{
            name: "挤牛奶",
            code: "",
            image: "动作图示/挤牛奶.png",
            description: `
| 对象 | 牛 |
|---|---|
| 产出 | 牛奶*1 |
| 险 | 无 |
| 相关CD | 1天后产1瓶 |
| 最大存量 | 1瓶 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "挤鹿奶",
            code: "",
            image: "动作图示/挤鹿奶.png",
            description: `
| 对象 | 无眼鹿 |
|---|---|
| 产出 | 鹿奶*1 |
| 险 | 引起无眼鹿的仇恨 |
| 相关CD | 1天后产1瓶 |
| 最大存量 | 1瓶 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "掰羊角",
            code: "",
            image: "动作图示/掰羊角.png",
            description: `
| 对象 | 伏特羊 |
|---|---|
| 产出 | 25%概率获得羊角*1 |
| 险 | 必定引起单体短暂仇恨 |
| 相关CD | 2天后长出 |
| 最大存量 | 1根 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "拔猫尾",
            code: "",
            image: "动作图示/拔猫尾.png",
            description: `
| 对象 | 浣猫 |
|---|---|
| 产出 | 1/2概率获得猫尾*1 |
| 险 | 必定引起仇恨 |
| 相关CD | 1天后长出 |
| 最大存量 | 1条 |

·P.S.刚被拔了尾巴的猫爪子很锋利,会造成流血buff。可使用可靠的胶布止血。
            `,
            recipe: "",
            tech: ""
        }, {
            name: "剥皮",
            code: "",
            image: "动作图示/剥触手皮.png",
            description: `
| 对象 | 触手 |
|---|---|
| 产出 | 触手皮*1 |
| 险 | 把握好时机 |
| 相关CD | 1天后长出 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "抽血",
            code: "",
            image: "动作图示/抽血.png",
            description: `
| 对象 | 大触手 |
|---|---|
| 产出 | 触手血*1 |
| 险 | 大触手周围生成许多小触手 |
| 相关CD | 1天后再抽血 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "宽衣解带",
            code: "",
            image: "动作图示/宽衣解带.png",
            description: `
| 对象 | 猪人守卫 |
|---|---|
| 产出 | 金色腰带*1，猪人守卫变成猪人并跟随一天 |
| 险 | 建议单挑 |
| 相关CD | 无 |
| 最大存量 | 1个 |

·P.S.你是好人，人家依你!
            `,
            recipe: "",
            tech: ""
        }, {
            name: "逼宫",
            code: "",
            image: "动作图示/逼宫.png",
            description: `
【介绍】
鱼人王在四大护法和八大金刚的护卫下很是安逸，以至于不思进取。

于是..

| 对象 | 鱼人王 |
|---|---|
| 产出 | 1/3概率获得刺耳三叉戟，且鱼人王死亡 |
| 险 | 失败则出现共12个鱼人追杀一段时间 |
| 相关CD | 1天后再逼宫 |
| 最大存量 | 1个 |

·P.S.沃特的行为是逼宫，别人是造反哟。
·P.P.S.本模组中刺耳三叉戟很好用哟~
            `,
            recipe: "",
            tech: ""
        }, {
            name: "还我血汗钱",
            code: "",
            image: "动作图示/还我血汗钱.png",
            description: `
| 对象 | 企鸥 |
|---|---|
| 产出 | 金块\*1。若开启《能力勋章》则有30%概率获得血汗钱\*1 |
| 险 | 会引起企鸥的群体仇恨 |
| 相关CD | 1天后再讨债 |
| 最大存量 | 1个 |

·P.S.狗TX，还我血汗钱!!!
·再P.S.企鸥的仇恨机制有点迷，务必谨慎。
            `,
            recipe: "",
            tech: ""
        }, {
            name: "拔兔毛",
            code: "",
            image: "动作图示/拔兔人毛.png",
            description: `
| 对象 | 兔人 |
|---|---|
| 产出 | 兔毛*1 |
| 险 | 引起兔人群体仇恨 |
| 相关CD | 1天后长出 |
| 最大存量 | 1根 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "偷香蕉",
            code: "",
            image: "动作图示/偷香蕉.png",
            description: `
| 对象 | 猴子 |
|---|---|
| 产出 | 香蕉*1 |
| 险 | 无能狂怒罢了 |
| 相关CD | 1天后刷新 |
| 最大存量 | 1个 |

· P.S.解气!
            `,
            recipe: "",
            tech: ""
        }, {
            name: "偷令牌",
            code: "",
            image: "动作图示/偷令牌.png",
            description: `
| 对象 | 远古哨兵蜈蚣 |
|---|---|
| 产出 | 天界令牌*1 |
| 险 | 守卫立刻激活并产生仇恨，伴随生成三个月灵攻击 |
| 相关CD | 1年后刷新 |
| 最大存量 | 1块 |

·P.S.机械造物的死亡亦是新生
            `,
            recipe: "",
            tech: ""
        }, {
            name: "割鲨鱼鳍",
            code: "",
            image: "原版贴图/岩石大白鲨.webp",
            description: `
| 对象 | 岩石大白鲨 |
|---|---|
| 产出 | 鲨鱼鳍*1 |
| 险 | 来自嗜血鲨鱼的愤怒! |
| 相关CD | 2天后长好 |
| 最大存量 | 1个 |

· P.S.关爱野生动物，拒绝鱼翅。
            `,
            recipe: "",
            tech: ""
        }, {
            name: "撒盐",
            code: "",
            image: "动作图示/撒盐.png",
            description: `
| 对象 | 蛞蝓龟/蜗牛龟 |
|---|---|
| 产出 | 被撒盐后-10hp/s至死亡 |
| 险 | 蛞蝓龟攻击频率增加一倍，且群体仇恨 |
| 相关CD | 无 |
| 最大存量 | 无 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "摘浆果",
            code: "",
            image: "动作图示/摘浆果.png",
            description: `
| 对象 | 洞穴蠕虫 |
|---|---|
| 产出 | 发光浆果 |
| 险 | 把握好时机 |
| 相关CD | 1天后刷新 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "挖眼",
            code: "",
            image: "动作图示/挖眼.png",
            description: `
| 对象 | 巨鹿 |
|---|---|
| 产出 | 眼球*1 |
| 险 | 一圈临时冰川困住，伴随脚下触发一个无冰冻效果的冰魔法 |
| 相关CD | 5天后长出 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "拔鹅毛",
            code: "",
            image: "动作图示/拔鹅毛.png",
            description: `
| 对象 | 麋鹿鹅 |
|---|---|
| 产出 | 羽绒*2 |
| 险 | 瞅准时机! |
| 相关CD | 1天后产1根 |
| 最大存量 | 2根 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "借天候棒",
            code: "",
            image: "动作图示/借天候棒.png",
            description: `
| 对象 | 蚁狮 |
|---|---|
| 产出 | 天候棒*1 |
| 险 | 亮血条给你看 |
| 相关CD | 1年后可再借 |
| 最大存量 | 1根 |

·P.S.我这是借!是借的!
·再P.S.下雨后刷新的蚁狮不是同一只哦~
            `,
            recipe: "",
            tech: ""
        }, {
            name: "拔熊毛",
            code: "",
            image: "动作图示/拔熊大毛.png",
            description: `
| 对象 | 熊獾 |
|---|---|
| 产出 | 毛绒*5 |
| 险 | 随机行为:①嘲讽;②哈欠;③拍地板 |
| 相关CD | 1天后产5根 |
| 最大存量 | 15根 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "挤岩浆",
            code: "",
            image: "动作图示/挤岩浆.png",
            description: `
| 对象 | 龙蝇 |
|---|---|
| 产出 | 岩浆*1 |
| 险 | 无暴怒的三连拍，并吸引仇恨 |
| 相关CD | 1天后产1瓶 |
| 最大存量 | 3瓶 |

·P.S.飞走的龙蝇和刷新的龙蝇不是同一只哦~
            `,
            recipe: "",
            tech: ""
        }, {
            name: "挤蜂王浆",
            code: "",
            image: "动作图示/挤蜂王浆.png",
            description: `
| 对象 | 蜂后 |
|---|---|
| 产出 | 蜂王浆*1 |
| 险 | 希望你能挤出来 |
| 相关CD | 1天后产1个 |
| 最大存量 | 3个 |

·P.S.飞走的蜂后和刷新后的不是同一只哦~
            `,
            recipe: "",
            tech: ""
        }, {
            name: "掏鱼",
            code: "",
            image: "动作图示/掏鱼.png",
            description: `
| 对象 | 邪天翁 |
|---|---|
| 产出 | 死剑鱼*1 |
| 险 | 随机行为:①嘲讽;②入水;③冲刺 |
| 相关CD | 1天后吃1条 |
| 最大存量 | 1条 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "割角",
            code: "",
            image: "动作图示/割角.png",
            description: `
| 对象 | 远古守卫者 |
|---|---|
| 产出 | 犀牛角*1 |
| 险 | 一圈无敌的铥矿墙把你和犀牛围住，一段时间后消失 |
| 相关CD | 5天后长好 |
| 最大存量 | 1个 |

·P.S.没有瞬移就不要去挑衅了
            `,
            recipe: "",
            tech: ""
        }, {
            name: "抠孢子",
            code: "",
            image: "动作图示/抠孢子.png",
            description: `
| 对象 | 蟾蜍王 |
|---|---|
| 产出 | 红绿蓝随机孢子种子*1 |
| 险 | 立即发动一次拍地板 |
| 相关CD | 1天增加一个孢子种子 |
| 最大存量 | 3个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "拆能量核",
            code: "",
            image: "动作图示/拆能量核.png",
            description: `
【介绍】
能量核是天体英雄的动力来源，要害之处。所以...威师傅，攻他下三路!

| 对象 | 天体英雄 |
|---|---|
| 产出 | 1/20概率获得能量核*1(薇诺娜概率翻倍) |
| 险 | 失败将发动大招:一阶段拍地;二阶段转圈扫地;三阶段发射激光。 |
| 相关CD | 无 |
| 最大存量 | 1个 |

· P.S.天体英雄被拆掉能量核后会直接死亡（当前阶段)。任一阶段被拆能量核后最终战利品将不会掉落启迪之冠。
            `,
            recipe: "",
            tech: ""
        }, {
            name: "锯树",
            code: "",
            image: "动作图示/锯活木.png",
            description: `
| 对象 | 树精守卫 |
|---|---|
| 产出 | 活木*1 |
| 险 | 引起树精守卫仇恨 |
| 相关CD | 1天后长出 |
| 最大存量 | 1根 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "拔牙",
            code: "",
            image: "动作图示/拔牙.png",
            description: `
| 对象 | 座狼 |
|---|---|
| 产出 | 狗王牙*1 |
| 险 | 小心小弟们的围殴 |
| 相关CD | 1天后长1颗 |
| 最大存量 | 1颗 |

· P.S.狗王有小弟时建议来一发催眠
            `,
            recipe: "",
            tech: ""
        }, {
            name: "剥羊皮",
            code: "",
            image: "动作图示/剥皮.png",
            description: `
| 对象 | 钢羊 |
|---|---|
| 产出 | 钢丝绒*1 |
| 险 | piaji~ |
| 相关CD | 1天后长出 |
| 最大存量 | 1层 |

·P.S.建议冻住
            `,
            recipe: "",
            tech: ""
        }, {
            name: "翻种子",
            code: "",
            image: "动作图示/翻种子.png",
            description: `
| 对象 | 果蝇王 |
|---|---|
| 产出 | 14种作物种子随机*1 |
| 险 | 出现6只果蝇恶心你 |
| 相关CD | 1天后增加1个 |
| 最大存量 | 3个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "拓印",
            code: "",
            image: "原版贴图/蓝图.png",
            description: `
【介绍】
当玩家身上有羽毛笔时，将莎草纸对准目标建筑可进行拓印，获得其制作蓝图。

目前可拓印的建筑有:空心树桩、猪人火炬、猎犬冢、高脚鸟巢、猴子巢、龙虾窝、月光龙虾窝、尖壳蜗牛窝。
            `,
            recipe: "",
            tech: ""
        }, {
            name: "盗墓",
            code: "",
            image: "动作图示/盗墓.png",
            description: `
| 对象 | 坟墓 |
|---|---|
| 产出 | 1/3概率获得挖坟产出的物品\*1(玩具除外，详细见附表) |
| 险 | 扣10点san，盗墓成功将出现一只有仇恨的鬼魂 |
| 相关CD | 10天可再次盗墓 |
| 最大存量 | 1个 |

·P.S.没有挖过的坟才可以盗墓。
·再P.S.亵渎先辈尸体者，惶惶不可终日，怨魂缠身，天罚亲至！！！（翻译：若摸出化石碎片，精神惩罚上升至33点，祖上三代鬼魂来袭，并有三道雷击）

盗墓物品权重表（总权重14)
| 物品 | 权重 |
|---|---|
| 化石碎片 | 1 |
| 噩梦燃料 | 1 |
| 重生护符 | 1 |
| 齿轮 | 1 |
| 红宝石 | 5 |
| 蓝宝石 | 5 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "修墓",
            code: "",
            image: "动作图示/修墓.png",
            description: `
【介绍】
手持≥9个必忘我时可对骨架进行修墓，骨架会消失并原地生成一个坟堆，修墓者会得到持续25秒的2san/2s回复buff。
修墓要求:至少9个必忘我+至少4个石砖+铲子\*1

【说明】
①会消耗所有手持的必忘我;
②只检测物品栏中第一个石砖的格子，若满足条件将消耗该栏堆叠的全部石砖;
③消耗的铲子仅限于物品栏中普通铲子、黄金铲子、合金铲子，不论耐久;
④若物品栏中有大理石，可消耗大理石\*1并额外生成一个墓碑。回复buff持续时间翻倍;
⑤九为阳之极，四为东西南北四方，送往者入土为安~
            `,
            recipe: "",
            tech: ""
        }, {
            name: "割皮",
            code: "",
            image: "动作图示/割皮.png",
            description: `
| 对象 | 猪王 |
|---|---|
| 产出 | 猪皮\*1 |
| 险 | 出现四个猪人守卫仇恨一定时间后消失，猪王休养一天 |
| 相关CD | 1天后长好 |
| 最大存量 | 1块 |

·P.S.不要犹豫，快跑!
            `,
            recipe: "",
            tech: ""
        }, {
            name: "临摹",
            code: "",
            image: "动作图示/临摹.png",
            description: `
| 对象 | 三基佬雕像 |
|---|---|
| 产出 | 相应雕像草图\*1 |
| 险 | 出现一只相应二级暗影boss并立即升级为三级（单个击杀无掉落物) |
| 相关CD | 1天后再临摹 |
| 最大存量 | 每个雕像1次 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "采摘",
            code: "",
            image: "动作图示/采摘玻璃绿洲.png",
            description: `
| 对象 | 玻璃绿洲 |
|---|---|
| 产出 | 魔力泉水\*1 |
| 险 | 6只裸鼹鼠蝙蝠和3只月灵将你团团围住 |
| 相关CD | 1年(70天)后增加1个 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "撬锁",
            code: "",
            image: "动作图示/撬锁.png",
            description: `
| 对象 | 赃物袋 |
|---|---|
| 产出 | 1/16概率获得坎普斯背包\*1 |
| 险 | 若成功则出现四只坎普斯围攻，同时脚下触发无冰冻效果的冰魔法 |
| 相关CD | 1天后再撬 |
| 最大存量 | 1次 |

·P.S.据说，不穿甲撬锁更容易出包哟~
            `,
            recipe: "",
            tech: ""
        }, {
            name: "捣蜂窝",
            code: "",
            image: "动作图示/捣蜂窝.png",
            description: `
| 对象 | 蜂窝 |
|---|---|
| 产出 | 蜂蜜\*0.99，蜂巢\*0.01 |
| 险 | 出现6只杀人蜂 |
| 相关CD | 1天后再捣 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "偷图纸",
            code: "",
            image: "动作图示/偷图纸.png",
            description: `
| 对象 | 女王蜂巢 |
|---|---|
| 产出 | 10%概率获得捆绑包装蓝图\*1 |
| 险 | 若成功则出现6只蜜蜂守卫围攻及大片减速的蜜块 |
| 相关CD | 1天后再偷 |
| 最大存量 | 1次 |

· P.S.砸掉的巨大蜂窝和新长出来的不是同一个哦~
            `,
            recipe: "",
            tech: ""
        }, {
            name: "掏鸟窝",
            code: "",
            image: "动作图示/掏鸟窝.png",
            description: `
| 对象 | 高脚鸟巢 |
|---|---|
| 产出 | {咖啡树、燧石、草、树枝、石头、金块、玻璃碎片、月石、硝石}九个物品中随机\*1 |
| 险 | 出现一只仇恨你的高脚鸟，击杀无掉落物 |
| 相关CD | 1天后刷新 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "翻猫窝",
            code: "",
            image: "动作图示/翻猫窝.png",
            description: `
| 对象 | 中空树桩 |
|---|---|
| 产出 | {失败料理，腐烂食物，草，石头，恶魔花瓣，燧石，花瓣，冰，松果，红色羽毛，鼹鼠，桦树果}随机物品\*1 |
| 险 | 生成一只短暂仇恨的浣猫 |
| 相关CD | 1天后再翻 |
| 最大存量 | 1个 |

· P.S.浣猫年活动时，翻猫窝的动作将被官方的“洗劫”覆盖。
            `,
            recipe: "",
            tech: ""
        }, {
            name: "掏龙虾窝",
            code: "",
            image: "动作图示/掏龙虾.png",
            description: `
| 对象 | 龙虾窝/月光玻璃窝 |
|---|---|
| 产出 | 50%概率出货，详见权重表 |
| 险 | 掏到龙虾会被夹，受到10点攻击伤害;掏到海星会受到60点攻击伤害 |
| 相关CD | 1天后再掏 |
| 最大存量 | 1个 |

权重分布(共计5)

| 物品 | 权重 |
|---|---|
| 相应龙虾 | 3 |
| 海星 | 1 |
| 海带 | 1 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "摸鱼",
            code: "",
            image: "动作图示/摸鱼.png",
            description: `
| 对象 | 各类池塘 |
|---|---|
| 产出 | 相应鱼\*1 |
| 险 | 普通池塘:青蛙1;沼泽池塘:蚊子3;鳗鱼池塘:洞穴蠕虫\*1 |
| 相关CD | 1天后再摸 |
| 最大存量 | 1条 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "洗劫",
            code: "",
            image: "动作图示/洗劫海象巢.png",
            description: `
| 对象 | 海象营地 |
|---|---|
| 产出 | 1/4概率获得贝雷帽\*1 |
| 险 | 若成功则出现三只蓝色猎犬围攻 |
| 相关CD | 1天后再洗劫 |
| 最大存量 | 1个 |

· P.S.只有冬天的海象营地能洗劫哦~
            `,
            recipe: "",
            tech: ""
        }, {
            name: "要玩具",
            code: "",
            image: "动作图示/要玩具.png",
            description: `
| 对象 | 小惊吓 |
|---|---|
| 产出 | 小惊吓的玩具随机\*1 |
| 险 | 小惊吓的爸爸会来找你的 |
| 相关CD | 1天后再要 |
| 最大存量 | 1个 |

·P.S.谁欺负我家孩子!!?
            `,
            recipe: "",
            tech: ""
        }, {
            name: "按摩",
            code: "",
            image: "动作图示/按摩.png",
            description: `
| 对象 | 寄居蟹隐士 |
|---|---|
| 产出 | 空瓶子\*1 |
| 险 | 全身舒爽~ |
| 相关CD | 1天后再按 |
| 最大存量 | 1次 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "摘松果",
            code: "",
            image: "动作图示/摘松果.png",
            description: `
| 对象 | 常青树（三阶段) |
|---|---|
| 产出 | 松果\*1 |
| 险 | 1/40概率变成树精守卫 |
| 相关CD | 1天后再摘 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "摘桦栗果",
            code: "",
            image: "动作图示/摘桦栗果.png",
            description: `
| 对象 | 桦树（三阶段) |
|---|---|
| 产出 | 桦栗果\*1 |
| 险 | 1/40概率变成桦树精 |
| 相关CD | 1天后再摘 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "摘多枝树种",
            code: "",
            image: "动作图示/摘多枝树种.png",
            description: `
| 对象 | 多枝树（三阶段) |
|---|---|
| 产出 | 多枝树种\*1 |
| 险 | 受到来自植物的2点伤害 |
| 相关CD | 1天后再摘 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "摘椰子",
            code: "",
            image: "",
            description: `
| 对象 | 椰树（三阶段) |
|---|---|
| 产出 | 椰子\*1 |
| 险 | 1/40概率变成椰树精 |
| 相关CD | 1天后再摘 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "折桂",
            code: "",
            image: "动作图示/折桂.png",
            description: `
| 对象 | 月树(三阶段) |
|---|---|
| 产出 | 月蛾\*1 |
| 险 | 1/7概率生成一只破碎蜘蛛 |
| 相关CD | 1天后再折 |
| 最大存量 | 1个 |
            `,
            recipe: "",
            tech: ""
        }, {
            name: "拔海带",
            code: "",
            image: "动作图示/拔海带.png",
            description: `
| 对象 | 公牛海带 |
|---|---|
| 产出 | 公牛海带茎\*1 |
| 险 | 无 |
| 相关CD | 无 |
| 最大存量 | 1根 |
            `,
            recipe: "",
            tech: ""
        }]
    }, {
        category: "食材与料理",
        child:[{
            name: "家常菜",
            image: "家常菜.png",
            code: "ndnr_chinesefood",
            recipe: "肉≥1+蛋+奶+菜≥1",
            fresh: "15天",
            foodtype: "GOODIES",
            description: `
三围：110饱食，5血，30理智

让每个中国人都能吃上肉蛋奶!
            `,
            tech: "烹饪锅"
        }, {
            name: "蘑菇酒",
            image: "蘑菇酒.png",
            code: "ndnr_mushroom_wine",
            recipe: "烤四色蘑菇",
            fresh: "永久",
            foodtype: "GOODIES",
            description: `
三围：0饱食，0血，-50理智

可以给蟾蜍王喝，蟾蜍王喝完后一天内晕晕呼呼，种不了树。
猪人不胜酒力，给予猪人酒喝，猪人会发疯。
            `,
            tech: "烹饪锅"
        }, {
            name: "蛇酒",
            image: "蛇酒.png",
            code: "ndnr_snakewine",
            recipe: "蛇+冰+2填充",
            fresh: "10天",
            foodtype: "GOODIES",
            description: `
三围：9.375饱食，8血，10理智

食用后会晕倒一段时间，4分钟内防御力增加50%（仅限玩家）。
猪人不胜酒力，给予猪人酒喝，猪人会发疯。
            `,
            tech: "烹饪锅"
        }, {
            name: "龙心灌蛋",
            image: "龙心灌蛋.png",
            code: "ndnr_dragoonheartlavaeegg",
            recipe: "龙心+岩浆虫卵+2填充",
            fresh: "10天",
            foodtype: "MEAT",
            description: `
三围：75饱食，20血，5理智

【食用效果】
食用后攻击力翻倍，效果持续一天。
同时具备总时长两天，不断衰减的发光效果。
龙心灌蛋具有15秒升温效果，升温阈值随新鲜度衰减，最高为60度，不会因为升温导致过热。

【后遗症】
攻击力提升的效果结束后有后遗症，一段时间内持续掉血共60点。
后遗症可食用鹿奶消除
            `,
            tech: "烹饪锅"
        }, {
            name: "无花果布丁",
            image: "无花果布丁.png",
            code: "ndnr_figpudding",
            recipe: "无花果+乳制品≥2+甜度≥1",
            fresh: "6天",
            foodtype: "GOODIES",
            description: `
三围：25饱食，40血，15理智

Q弹可口的布丁。
食用后获得舒缓茶的精神回复效果
            `,
            tech: "烹饪锅"
        }, {
            name: "瑶柱汤",
            image: "瑶柱汤.png",
            code: "ndnr_scallopsoup",
            recipe: "瑶柱*2+乳制品≥1+冰",
            fresh: "10天",
            foodtype: "MEAT",
            description: `
三围：37.5饱食，40血，-5理智

吃完有蓝海带鱼效果。

P.S 作者都不知道瑶柱是什么。
            `,
            tech: "烹饪锅"
        }, {
            name: "东坡肉",
            image: "东坡肉.png",
            code: "ndnr_dongpopork",
            recipe: "大肉*2+甜度≥1+芦苇",
            fresh: "15天",
            foodtype: "MEAT",
            description: `
三围：75饱食，8血，33理智

红的透亮，色如玛瑙，软而不烂，肥而不腻。
            `,
            tech: "烹饪锅"
        }, {
            name: "黄油",
            image: "黄油.png",
            code: "butter",
            recipe: "乳制品≥4",
            fresh: "40天",
            foodtype: "GENERIC",
            description: `
三围：25饱食，40血，0理智

当你很需要黄油时，何不自己精炼一锅呢？

注意，虽然这黄油是锅里出来的，但并不是料理。
            `,
            tech: "烹饪锅"
        }, {
            name: "番茄炒蛋",
            image: "番茄炒蛋.png",
            code: "ndnr_tomato_egg",
            recipe: "蛋≥2+番茄≥2",
            fresh: "8天",
            foodtype: "VEGGIE",
            description: `
三围：75饱食，40血，5理智

料理入门的第一道菜！
            `,
            tech: "烹饪锅"
        }, {
            name: "菠萝包",
            image: "菠萝包.png",
            code: "ndnr_pineapplebun",
            recipe: "蛋≥2+黄油+乳制品≥1",
            fresh: "20天",
            foodtype: "GOODIES",
            description: `
三围：37.5饱食，40血，5理智

菠萝包里没有菠萝。
            `,
            tech: "烹饪锅"
        }, {
            name: "哈根达斯",
            image: "哈根达斯.png",
            code: "ndnr_haagendazs",
            recipe: "黄油+乳制品+冰+蜂王浆",
            fresh: "2天",
            foodtype: "GOODIES",
            description: `
三围：12.5饱食，100血，50理智

玩家吃了会获得舒缓茶的精神回复效果，非玩家生物吃了会受到5层冰冻效果。
            `,
            tech: "烹饪锅"
        }, {
            name: "红伞伞炒饭",
            image: "红伞伞炒饭.png",
            code: "ndnr_stewedmushroom",
            recipe: "红蘑菇*3+肉",
            fresh: "10天",
            foodtype: "MEAT",
            description: `
三围：37.5饱食，-40血，-15理智

玩家食用后会保持半天的零理智状态，效果结束后理智值恢复
            `,
            tech: "烹饪锅"
        }, {
            name: "烧麦",
            image: "烧麦.png",
            code: "ndnr_steamedporkdumplings",
            recipe: "肉+胡萝卜+玉米+蛋",
            fresh: "6天",
            foodtype: "MEAT",
            description: `
三围：37.5饱食，3血，5理智

用来充饥再合适不过了。

一次收获两个。
            `,
            tech: "烹饪锅"
        }, {
            name: "椰子鸡",
            image: "椰子鸡.png",
            code: "ndnr_coconutchicken",
            recipe: "椰子+鸡腿*2+蔬菜",
            fresh: "6天",
            foodtype: "MEAT",
            description: `
三围：60饱食，20血，5理智

这是哪里的特色菜
            `,
            tech: "烹饪锅"
        }, {
            name: "毛蛋",
            image: "毛蛋.png",
            code: "ndnr_balut",
            recipe: "孵化中的高鸟蛋+芦苇*3",
            fresh: "20天",
            foodtype: "MEAT",
            description: `
三围：25饱食，8血，-15理智

一道鸡蛋里挑骨头的黑暗料理。
猪人吃了黑暗料理会发疯。
            `,
            tech: "烹饪锅"
        }, {
            name: "虾扯蛋",
            image: "虾扯蛋.png",
            code: "ndnr_shrimppullegg",
            recipe: "龙虾+蛋≥2+填充",
            fresh: "6天",
            foodtype: "MEAT",
            description: `
三围：37.5饱食，60血，33理智

这不瞎扯淡呢么？
            `,
            tech: "烹饪锅"
        }, {
            name: "馄饨",
            image: "馄饨.png",
            code: "ndnr_wonton",
            recipe: "蛋+冰+干海带+肉",
            fresh: "15天",
            foodtype: "MEAT",
            description: `
三围：37.5饱食，40血，33理智

在你们那，它叫馄饨还是饺子？
            `,
            tech: "烹饪锅"
        }, {
            name: "猫屎咖啡",
            image: "猫屎咖啡.png",
            code: "ndnr_kopiluwak",
            recipe: "猫屎*3+甜度 | 猫屎*4",
            fresh: "10天",
            foodtype: "VEGGIE",
            description: `
三围：0饱食，0血，-15理智

食用者获得咖啡（仅玩家）和蘑菇蛋糕的buff效果
            `,
            tech: "烹饪锅"
        }, {
            name: "泡芙",
            image: "泡芙.png",
            code: "ndnr_puff",
            recipe: "蛋+乳制品≥2+甜度≥1",
            fresh: "6天",
            foodtype: "GOODIES",
            description: `
三围：37.5饱食，40血，33理智

源自意大利的零食。
            `,
            tech: "烹饪锅"
        }, {
            name: "酸奶",
            image: "酸奶.png",
            code: "ndnr_yogurt",
            recipe: "水果+乳制品≥2+甜度≥1",
            fresh: "8天",
            foodtype: "GOODIES",
            description: `
三围：20饱食，40血，50理智

牛奶的好去处。
            `,
            tech: "烹饪锅"
        }, {
            name: "大海捞珍",
            image: "大海捞珍.png",
            code: "ndnr_seatreasure",
            recipe: "龙虾+鱼肉≥1+瑶柱*2",
            fresh: "6天",
            foodtype: "MEAT",
            description: `
三围：75饱食，100血，50理智

这料理非常滴珍贵，大佬先吃！
            `,
            tech: "烹饪锅"
        }, {
            name: "甜筒",
            image: "甜筒.png",
            code: "ndnr_icecream",
            recipe: "乳制品+蛋+冰+甜度≥1",
            fresh: "1天",
            foodtype: "GOODIES",
            description: `
三围：12.5饱食，8血，15理智

夏天能吃一个简直太幸福了，就是冻的头有点疼。

一次收获两个。

食用者会受到三层冰冻效果（蓝色猎犬死亡时效果为两层）
            `,
            tech: "烹饪锅"
        }, {
            name: "咖啡",
            image: "咖啡.png",
            code: "ndnr_coffee",
            recipe: "烤咖啡豆*3+甜度≥1 | 烤咖啡豆*4",
            fresh: "10天",
            foodtype: "GENERIC",
            description: `
三围：9.375饱食，3血，-5理智

食用后获得11/6倍移速，效果持续半天。
            `,
            tech: "烹饪锅"
        }, {
            name: "药酒",
            image: "药酒.png",
            code: "dish_medicinalliquor",
            recipe: "熊獾绒毛+冰+2填充",
            fresh: "永久",
            foodtype: "GOODIES",
            description: `
三围：9.375饱食，8血，10理智

1. 8分钟内增加50%攻击力（仅限玩家）
2. 不胜酒力的角色会晕倒一段时间，酒量一般的角色会晕呼呼一小段时间，酒量出奇的角色不会有醉酒反应。
3. 猪人吃了会发疯

特别鸣谢棱镜作者的授权！本模组与棱镜同时开启时，将调用棱镜的药酒食谱。
            `,
            tech: "烹饪锅"
        }, {
            name: "椰子汁",
            image: "椰子汁.png",
            code: "ndnr_coconutjuice",
            recipe: "椰子+冰+蜂蜜+芦苇",
            fresh: "3天",
            foodtype: "GOODIES",
            description: `
三围：0饱食，1血，20理智

回复中量精神，食用的10秒降低40温度。
炎炎夏日就来一杯冰爽的椰子汁吧！
            `,
            tech: "烹饪锅"
        }, {
            name: "奶油丸子汤",
            image: "奶油丸子汤.png",
            code: "ndnr_creamballsoup",
            recipe: "乳制品+肉+2填充",
            fresh: "10天",
            foodtype: "MEAT",
            description: `
三围：37.5饱食，20血，15理智

充满着奶味的肉汤
            `,
            tech: "烹饪锅"
        }, {
            name: "鱼子酱",
            image: "鱼子酱.png",
            code: "ndnr_caviar",
            recipe: "鱼子*3+蔬菜",
            fresh: "10天",
            foodtype: "MEAT",
            description: `
三围：12.5饱食，3血，33理智

我来这儿之前从没吃过这个。
            `,
            tech: "烹饪锅"
        }, {
            name: "牛奶",
            image: "牛奶.png",
            code: "ndnr_milk",
            fresh: "6天",
            foodtype: "1乳制品度",
            recipe: "",
            description: `
| 饱食 | 理智 | 生命 |
| --- | --- | --- |
| 5 | 5 | 20 |

【获取】
对皮弗娄牛挤牛奶获得。

【食用】
20%概率吃坏肚子（乳糖不耐受）持续一天，机器人免疫。
buff持续期间每2秒有1/15的概率闹肚子，扣除10饱食度和5精神值，并拉一坨便便。
            `,
            tech: ""
        }, {
            name: "鹿奶",
            image: "鹿奶.png",
            code: "ndnr_ice_milk",
            fresh: "6天",
            foodtype: "1乳制品度",
            recipe: "",
            description: `
| 饱食 | 理智 | 生命 |
| --- | --- | --- |
| 5 | 20 | 5 |

【获取】
对无眼鹿挤牛奶获得。

【食用】
20%概率吃坏肚子（乳糖不耐受）持续一天，机器人免疫。
buff持续期间每2秒有1/15的概率闹肚子，扣除10饱食度和5精神值，并拉一坨便便。
食用可消除龙心灌蛋的后遗症。

【冰凉】
鹿奶性凉，格罗姆吃了会拉肚子。
            `,
            tech: ""
        }, {
            name: "龙心",
            image: "龙心.png",
            code: "ndnr_dragoonheart",
            fresh: "10天",
            foodtype: "1肉度",
            recipe: "",
            description: `
| 饱食 | 理智 | 生命 |
| --- | --- | --- |
| 25 | -10 | 11 |

【获取】
击杀龙蝇必定掉落1个岩浆虫；死亡有10%的概率掉落1个。  

【食用】
玩家食用后拥有龙的力量，攻击力+20%，效果持续0.5天。
并获得发光效果，作用时长及发光范围同发光浆果。  

【特殊】
猎犬吃掉龙心会变成座狼！  
            `,
            tech: ""
        }, {
            name: "瑶柱",
            image: "瑶柱.png",
            code: "ndnr_scallop",
            fresh: "6天",
            foodtype: "0.5肉度、0.5鱼度",
            recipe: "",
            description: `
| 饱食 | 理智 | 生命 |
| --- | --- | --- |
| 25 | 0 | 8 |

【获取】
敲开贝壳钟可以有50%概率获得一个瑶柱。    
            `,
            tech: ""
        }, {
            name: "烤瑶柱",
            image: "烤瑶柱.png",
            code: "ndnr_scallop_cooked",
            fresh: "6天",
            foodtype: "0.5肉度、0.5鱼度",
            recipe: "",
            description: `
| 饱食 | 理智 | 生命 |
| --- | --- | --- |
| 25 | 0 | 8 |

【获取】
瑶柱烤制获得。  
            `,
            tech: ""
        }, {
            name: "咖啡豆",
            image: "咖啡豆.png",
            code: "ndnr_coffeebeans",
            fresh: "6天",
            foodtype: "0.5果度",
            recipe: "",
            description: `
| 饱食 | 理智 | 生命 |
| --- | --- | --- |
| 9.375 | 0 | 0 |

【获取】
咖啡树采摘。
            `,
            tech: ""
        }, {
            name: "烘焙咖啡豆",
            image: "烤咖啡豆.png",
            code: "ndnr_coffeebeans_cooked",
            fresh: "15天",
            foodtype: "1果度",
            recipe: "",
            description: `
| 饱食 | 理智 | 生命 |
| --- | --- | --- |
| 9.375 | -5 | 0 |

【获取】
烤制咖啡豆获得。是烹饪咖啡的必备食材。
            `,
            tech: ""
        }, {
            name: "椰子",
            image: "椰子.png",
            code: "ndnr_coconut",
            fresh: "20天",
            foodtype: "1不可食用度",
            recipe: "",
            description: `
大风的天，千万不要站在椰子树底下，因为当你站在椰子树下...

【获取】
砍伐椰子树获得。
可种植为椰树树苗。
使用锤子可以打开，获得分成两半的椰子\*2。
            `,
            tech: ""
        }, {
            name: "分成两半的椰子",
            image: "分成两半的椰子.png",
            code: "ndnr_coconut_halved",
            fresh: "10天",
            foodtype: "1果度",
            recipe: "",
            description: `
| 饱食 | 理智 | 生命 |
| --- | --- | --- |
| 4.6875 | 0 | 1 |

砸人者终被砸。
【获取】
用锤子打开椰子获得。
            `,
            tech: ""
        }, {
            name: "烤椰子",
            image: "烤熟的椰子.png",
            code: "ndnr_coconut_cooked",
            fresh: "10天",
            foodtype: "1果度",
            recipe: "",
            description: `
| 饱食 | 理智 | 生命 |
| --- | --- | --- |
| 9.375 | 0 | 1 |

【获取】
由分成两半的椰子烤制获得。
            `,
            tech: ""
        }, {
            name: "岩浆虫卵",
            image: "岩浆虫卵.png",
            code: "lavae_egg",
            fresh: "",
            foodtype: "4蛋度",
            recipe: "",
            description: `
【描述】
龙蝇死亡有1/3概率掉落，是龙心灌蛋的必备食材。
（不出只是因为脸黑）
            `,
            tech: ""
        }, {
            name: "采下的芦苇",
            image: "芦苇.png",
            code: "cutreeds",
            fresh: "",
            foodtype: "1不可食用度",
            recipe: "",
            description: `
【描述】
本模组中可入锅，是椰子汁的必备原料。
            `,
            tech: ""
        }, {
            name: "蛇",
            image: "蛇.png",
            code: "ndnr_snake",
            fresh: "10天",
            foodtype: "1不可食用度",
            recipe: "",
            description: `
【描述】
本模组中可入锅，是蛇酒的必备原料。
            `,
            tech: ""
        }, {
            name: "毛簇",
            image: "毛簇.png",
            code: "ndnr_sfurtuftnake",
            fresh: "",
            foodtype: "1不可食用度",
            recipe: "",
            description: `
【描述】
本模组及《棱镜》中可入锅，是药酒的必备原料。
感谢梧大及其授权。
            `,
            tech: ""
        }, {
            name: "猫屎",
            image: "blank.png",
            code: "ndnr_catpoop",
            fresh: "",
            foodtype: "1不可食用度",
            recipe: "",
            description: `
【描述】
给予浣猫一个咖啡豆，在半天随机时间内会拉出一个猫屎。
            `,
            tech: ""
        }]
    }, {
        category: "物品",
        child: [{
            name: "岩浆",
            image: "岩浆_高温.png",
            code: "ndnr_magma_milk",
            recipe: "",
            description: `
来源：龙蝇

持续放热，保暖效果是暖石的2倍，持续发光，高温，中温，低温三个阶段的光照和范围逐级递减，可引燃附近的可燃物。

可在上面烤食物，10%概率食物被烤成灰烬。

0-20度时为低温，20-50度时为中温，50-90度时为高温。不同温度阶段的外观及发光范围不同，可由龙蝇火炉，篝火等热源加热

低于0度或落入水中时变成1-2个黑曜石
            `,
            tech: ""
        }, {
            name: "天候棒",
            image: "天候棒.png",
            code: "ndnr_weatherpole",
            recipe: "",
            description: `
来源：蚁狮

借来的天候棒是未激活的，镶嵌不同宝石激活不同能力。
            `,
            tech: ""
        }, {
            name: "毒腺",
            image: "毒腺.png",
            code: "ndnr_venomgland",
            recipe: "",
            description: `
食用可解蛇毒，但会扣75点生命(不会致死，保留最后1点)。
可给武器抹毒，被有毒的武器打中会中蛇毒，持续70天;
被中毒的生物打中有1/3概率也会中蛇毒，持续3天。
中毒期间每2秒损失4点生命。
            `,
            tech: ""
        }, {
            name: "蛇油",
            image: "蛇油.png",
            code: "ndnr_snakeoil",
            recipe: "",
            description: `
涂抹在身上后，青蛙舔一下会立即死亡;
不受孢子云伤害且站在孢子云中食物新鲜度不受影响;
不会因中毒生物的攻击而中毒。
效果持续一天
            `,
            tech: ""
        }, {
            name: "黑曜石",
            image: "黑曜石.png",
            code: "ndnr_obsidian",
            recipe: "",
            description: `
可用于制作或修补黑曜石物品。
            `,
            tech: ""
        }, {
            name: "蓝孢子种子",
            image: "蓝色孢子种子.png",
            code: "ndnr_blue_sporeseed",
            recipe: "",
            description: `
从蟾蜍王处挤孢子有概率获得。
外观、漂浮方式、保鲜时间均与孢子相同。
可种植，种在地面即为蘑菇。
            `,
            tech: ""
        }, {
            name: "绿孢子种子",
            image: "绿色孢子种子.png",
            code: "ndnr_green_sporeseed",
            recipe: "",
            description: `
从蟾蜍王处挤孢子有概率获得。
外观、漂浮方式、保鲜时间均与孢子相同。
可种植，种在地面即为蘑菇。
            `,
            tech: ""
        }, {
            name: "红孢子种子",
            image: "红色孢子种子.png",
            code: "ndnr_red_sporeseed",
            recipe: "",
            description: `
从蟾蜍王处挤孢子有概率获得。
外观、漂浮方式、保鲜时间均与孢子相同。
可种植，种在地面即为蘑菇。
            `,
            tech: ""
        }, {
            name: "狗王牙",
            image: "狗王牙.png",
            code: "ndnr_bigtooth",
            recipe: "",
            description: `
来源：狗王

座狼的力量源泉，蕴含猎犬一族的神秘力量。
            `,
            tech: ""
        }, {
            name: "咖啡树",
            image: "咖啡苗.png",
            code: "ndnr_coffeebush",
            recipe: "",
            description: `
掏高脚鸟巢1/9概率获得。

使用常见肥料施肥，生长周期同浆果丛。
            `,
            tech: ""
        }, {
            name: "天界令牌",
            image: "天界令牌.png",
            code: "ndnr_godtoken",
            recipe: "",
            description: `
从远古哨兵蜈蚣处偷取。
带在身上时不会被月灵主动攻击。
在非月岛地形且放在物品栏时，将不断招来影怪袭击。
            `,
            tech: ""
        }, {
            name: "能量核",
            image: "能量核.png",
            code: "ndnr_energy_core",
            recipe: "",
            description: `
在被瓦格斯塔夫实验召唤来的天体英雄身上拆得。放在地面会发光，可升级部分容器为永久保鲜，升级后的物品会增加前缀“永恒的”。
永恒容器可以抵抗孢子云的侵蚀。
可升级容器:冰箱、盐盒、姐妹骨灰盒、蘑菇灯、炽菇灯、箱子、龙鳞宝箱、背包、小猪包、保鲜背包、坎普斯背包、旋涡斗篷。
            `,
            tech: ""
        }, {
            name: "触手血",
            image: "触手血.png",
            code: "ndnr_tentacleblood",
            recipe: "",
            description: `
从巨型触手处抽血获得。
使用后当一天触手王，触手不会主动仇恨你。注意，巨型触手周围的小触手忠心耿耿，可不会害怕伪触手王。
            `,
            tech: ""
        }, {
            name: "椰树叶",
            image: "椰叶.png",
            code: "ndnr_palmleaf",
            recipe: "",
            description: `
砍伐椰子树获得。
            `,
            tech: ""
        }, {
            name: "陨铁",
            image: "陨铁.png",
            code: "ndnr_rock_iron",
            recipe: "",
            description: `
大陨石落地时，若生成矿石，有一半概率形成陨铁矿。
开采需求及掉落分布同龙蝇沙漠的卵石。开采可获得5~6个铁矿石。
            `,
            tech: ""
        }, {
            name: "铁矿石",
            image: "铁矿石.png",
            code: "ndnr_iron",
            recipe: "",
            description: `
开采陨铁掉落。中、小流星落地时，若生成矿石，有一半概率形成铁矿石。
冶炼合金的材料。
            `,
            tech: ""
        }]
    }, {
        category: "装备",
        child: [{
            name: "唤雨天候棒",
            image: "唤雨天候棒.png",
            code: "ndnr_blueweatherpole",
            recipe: "",
            description: `
【获得】
将蓝色宝石镶嵌在天候棒上获得。

【使用】
右键地面施法可在雨/雪天气和晴天中转换。
每次施法消耗镶嵌的蓝宝石，将返还天候棒
            `,
            tech: ""
        }, {
            name: "唤雷天候棒",
            image: "唤雷天候棒.png",
            code: "ndnr_redweatherpole",
            recipe: "",
            description: `
【获得】
将红宝石镶嵌在天候棒上获得。

【使用】
右键地面施法可唤雷。
每次施法消耗镶嵌的红宝石，将返还天候棒。
            `,
            tech: ""
        }, {
            name: "者行手杖",
            image: "者行手杖.png",
            code: "ndnr_purpleweatherpole",
            recipe: "",
            description: `
【获得】
将紫色宝石镶嵌在天候棒上获得。

【使用】
手持加速效果、传送范围与消耗等均与懒人魔杖相同。
耐久耗尽后将返还天候棒。
            `,
            tech: ""
        }, {
            name: "旋涡斗篷",
            image: "原版贴图/漩涡斗篷.png",
            code: "ndnr_armorvortexcloak",
            recipe: "",
            description: `
【原型】
哈姆雷特DLC中，击杀远古先驱可获得漩涡披风的蓝图。

【获取】
连续击杀临摹出的三种暗影BOSs获得。

注意:其余仍存活的BOSs在被击杀BOSS周围20格（5个地皮)以内，方能成功记录。

【容器】
相当于背包，占据身体装备栏。拥有14格空间，与坎普斯背包相同。

【护甲】
装备且耐久不为0时可完全抵挡伤害并免疫僵直，同时玩家会扣除抵挡伤害30%的san值。
对来自暗影生物的攻击无效。耐久为0不会破碎。
装备时可用噩梦燃料修复，每次修复5%耐久并消耗5点san值。
            `,
            tech: ""
        }]
    }, {
        category: "机制调整",
        child: [{
            name: "吃生肉",
            image: "原版贴图/肉类.png",
            code: "",
            recipe: "",
            description: `
吃生肉有1/3感染蛔虫。
感染蛔虫时，吃食物获得的饱食度收益均减半。
死亡或使用宝塔糖可消除蛔虫。

目前有寄生虫的肉有：大肉，小肉，小鱼肉，鱼肉，怪物肉，叶肉，鸟腿，蛙腿，蝙蝠翅膀，死鳗鱼，死龙虾，藤壶，冬象鼻，夏象鼻，裸露鼻孔，鲨鱼鳍，鱼（古早原版），人肉，瑶柱。

沃拓克斯，韦伯，机器人不会因为吃生肉感染蛔虫
            `,
            tech: ""
        }, {
            name: "吃海鲜",
            image: "blank.png",
            code: "",
            recipe: "",
            description: `
【设定】
海鲜虽好，但吃多了容易嘌呤过高，有痛风的潜在危险。
痛风发作时，双腿颤颤，痛不欲生，悔不当初。
科学研究表明，低脂酸奶有助于缓解体内的高嘌呤，是痛风病人的推荐饮食。

【详细】
原版和本模组的部分海鲜料理食用时会增加痛风值，痛风值每天会降低1点。
入夜时若痛风值不少于10点会触发痛风，移动速度-50%。
食用酸奶（低脂)可立即降低2点痛风值。注: wx-78和沃特不会痛风。

【痛风值】
| 料理 | 痛风值 |
| --- | --- |
| 大海捞珍 | 4 |
| 虾扯蛋 | 2 |
| 瑶柱汤 | 2 |
| 鱼寿司 | 1 |
| 蓝带鱼排 | 1 |
| 龙虾正餐 | 2 |
| 龙虾汤 | 2 |
| 海鲜浓汤 | 2 |
| 海鲜牛排 | 2 |
| 海鲜杂烩 | 2 |
            `,
            tech: ""
        }, {
            name: "Buff显示",
            image: "buff显示（简）.png",
            code: "",
            recipe: "",
            description: `
【介绍】
本MOD提供左下角的Buff倒计时显示功能，涵盖原版的辣味料理、蒜味料理、甜味料理、蓝带鱼排、伏特羊肉冻、蘑菇蛋糕，及本MOD的中毒、咖啡、龙心(攻击力部分)、龙心灌蛋、蛇油、拉肚子、触手血、蛇酒、药酒、流血、蜂毒buff。

注意:为减少占用内存，倒计时显示与实际略有出入(仅数秒)。
            `,
            tech: ""
        }, {
            name: "可靠的胶带",
            image: "原版贴图/可靠的胶带.png",
            code: "sewing_tape",
            recipe: "",
            description: `
【介绍】
可消除流血buff。
            `,
            tech: ""
        }, {
            name: "蜂后冠",
            image: "原版贴图/蜂后冠.png",
            code: "hivehat",
            recipe: "",
            description: `
【介绍】
戴着蜂后冠有以下效果:

· 踏入杀人蜂巢范围不会惊动杀人蜂;
· 采集蜂箱不会惊动里面的蜜蜂;
· 不会受到杀人蜂、蜜蜂的主动仇恨。
            `,
            tech: ""
        }, {
            name: "刺耳三叉戟",
            image: "原版贴图/刺耳三叉戟.png",
            code: "trident",
            recipe: "",
            description: `
【介绍】
海神之力，沛然而莫之能御，四海皆服。

手持三叉戟可在海面行走，且在水面时人物雨露值会不断上升。
雨露值增量=(1-防水值)/2，每0.7秒触发一次。
满耐久的三叉戟可供水上行走总时长2天，可使用海带滋养（修复10%)或一角鲸的角加固（修复满)恢复耐久。

除制作外，可通过逼宫/造反鱼人王获得。
            `,
            tech: ""
        }, {
            name: "猫帽",
            image: "原版贴图/猫帽.png",
            code: "catcoonhat",
            recipe: "",
            description: `
【介绍】
戴着猫帽时，蝙蝠不敢主动攻击。
            `,
            tech: ""
        }, {
            name: "幸运金块",
            image: "原版贴图/幸运金块.png",
            code: "lucky_goldnugget",
            recipe: "",
            description: `
【介绍】
可投郑，远程单体攻击，伤害100。

一种比较昂贵的吹箭。
            `,
            tech: ""
        }, {
            name: "火腿棒",
            image: "原版贴图/火腿棒.png",
            code: "hambat",
            recipe: "",
            description: `
【介绍】
使用暗影心房对火腿棒进行实验，将其改造为暗影生命，成功概率1/3(旺达、麦克斯韦必定成功)。

具有暗影之力的火腿棒伤害及降san效果同暗影剑，且在玩家背包里或者手持时会吸食玩家生命(1HP/2s），并恢复12s新鲜度。

新鲜度回复满后将暂停吸血，直到新鲜度降为90%时会再次开始吸血。
            `,
            tech: ""
        }, {
            name: "漏电",
            image: "原版贴图/发电机.webp",
            code: "",
            recipe: "",
            description: `
【介绍】
薇诺娜的两种发电机会漏电。

发电机充能时，在1.7格(1个地皮4格)以内每秒有10%的几率会触电。每次触电扣除20点生命。

雨天触电概率上升至50%，绝缘的衣物（眼球伞、雨衣)可以免疫触电。
            `,
            tech: ""
        }, {
            name: "龙鳞宝箱",
            image: "原版贴图/龙鳞宝箱.png",
            code: "dragonflychest",
            recipe: "",
            description: `
【介绍】
恒温60度。
            `,
            tech: ""
        }, {
            name: "猪屋",
            image: "原版贴图/猪屋.png",
            code: "pighouse",
            recipe: "",
            description: `
【介绍】
非白天时可与猪人同房，消耗饱食度1点/秒，回复生命2点/秒。
醒来时有50%概率因为粘上翔而扣20san。

韦伯、沃特和沃拓克斯无法使用。
            `,
            tech: ""
        }, {
            name: "漏水的小屋",
            image: "原版贴图/漏雨的小屋.png",
            code: "mermhouse",
            recipe: "",
            description: `
【介绍】
效果同帐篷，仅沃特可使用。
            `,
            tech: ""
        }, {
            name: "鱼人工艺屋",
            image: "原版贴图/鱼人工艺屋.png",
            code: "mermhouse_crafted",
            recipe: "",
            description: `
【介绍】
效果同帐篷，仅沃特可使用。
            `,
            tech: ""
        }, {
            name: "珍珠之家",
            image: "原版贴图/珍珠之家.png",
            code: "hermithouse",
            recipe: "",
            description: `
【介绍】
寄居蟹隐士的房子修补好后，非白天时可在里面睡觉，消耗饱食度1点/秒，回复精神值和生命值2点/秒。
            `,
            tech: ""
        }, {
            name: "树洞",
            image: "动作图示/树洞.png",
            code: "oceantree_pillar",
            recipe: "",
            description: `
【介绍】
给高出平均值的树干添加了树洞(九个格子)，放入树洞的物品在关闭树洞后会被删除。

可以用来清理冗余物资，比食人花方便!
            `,
            tech: ""
        }, {
            name: "猎犬丘",
            image: "原版贴图/猎犬丘.png",
            code: "houndmound",
            recipe: "",
            description: `
【介绍】
拆除方式改为锤击（需4下)。

由于本模组中添加了猎犬丘的建造配方，猎犬丘在背拆除时会额外掉落狗王牙\*1。
            `,
            tech: ""
        }, {
            name: "格罗姆",
            image: "原版贴图/格罗姆.png",
            code: "glommer",
            recipe: "",
            description: `
【介绍】
格罗姆喜欢喝奶，牛奶、鹿奶、羊奶都喜欢喝。喝了奶会非常开心，理智光环效果大幅度提升至40san/分钟，持续一天时间。

但是喝凉的东西就会拉肚子，一天内每1~2分钟会拉—次粑粑。
            `,
            tech: ""
        }, {
            name: "火鸡",
            image: "原版贴图/火鸡.png",
            code: "perd",
            recipe: "",
            description: `
【介绍】
<del>作者</del>每天下一个蛋。
            `,
            tech: ""
        }, {
            name: "海草",
            image: "原版贴图/海草.png",
            code: "",
            recipe: "",
            description: `
【介绍】
为海草添加了再生方式。

每隔20~21天，海草会试图在周围(16距离)寻找海草生长过的浮堆并繁殖。
每个海草每次仅繁殖一个。

举例:在一处数个海草的生物群落，击杀其中一半海草。21天后，被击杀的海草留下的浮堆上会长出新的海草嫩芽（如果距离足够近的话）。
附知识点:长满3个藤壶的海草嫩芽在月圆之夜会长成海草。
            `,
            tech: ""
        }, {
            name: "杀人蜂",
            image: "原版贴图/杀人蜂.png",
            code: "",
            recipe: "",
            description: `
【介绍】
杀人蜂蜇到玩家会立即死亡，玩家会中蜂毒。
            `,
            tech: ""
        }, {
            name: "齿轮生物",
            image: "原版贴图/齿轮.png",
            code: "",
            recipe: "",
            description: `
【介绍】
齿轮生物均不会对性别为机器人的角色主动产生仇恨，并友好的打招呼。
            `,
            tech: ""
        }, {
            name: "独眼巨鹿",
            image: "原版贴图/巨鹿.png",
            code: "",
            recipe: "",
            description: `
【介绍】
巨鹿可以被养起来了，即便过了冬季也不会自动消失。
世界上有巨鹿时，也不会有新的巨鹿来袭。
            `,
            tech: ""
        }, {
            name: "黄油",
            image: "原版贴图/黄油.png",
            code: "butter",
            recipe: "",
            description: `
【介绍】
wx-78可以给自己抹黄油（拿起黄油对人物使用)，移速+25%，效果持续一天。
代价是wx-78无法吃黄油了（动作覆盖)。
            `,
            tech: ""
        }, {
            name: "养蜂帽",
            image: "原版贴图/养蜂帽.png",
            code: "",
            recipe: "",
            description: `
【介绍】
戴养蜂帽被杀人蜂蜇到不会中杀人蜂毒。
            `,
            tech: ""
        }, {
            name: "池塘",
            image: "原版贴图/池塘.webp",
            code: "",
            recipe: "",
            description: `
【可开凿】
结冰的池塘（青蛙池塘或蚊子池塘均可)可以用镐子开凿，开凿次数9，掉落冰块\*3。

【恢复冻结】
被挖开的池塘会保持一天，一天后视世界降雪情况决定是否恢复冻结。
            `,
            tech: ""
        }]
    }, {
        category: "炼钢炉",
        child: [{
            name: "合金",
            image: "合金.png",
            code: "ndnr_alloy",
            recipe: "铁矿石*4",
            description: `
【介绍】
工业时代的基本材料
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "幸运金块",
            image: "原版贴图/幸运金块.png",
            code: "lucky_goldnugget",
            recipe: "金块*2+木炭*2",
            description: `
【介绍】
拿钱砸死他
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "眼面具",
            image: "原版贴图/眼面具.png",
            code: "eyemaskhat",
            recipe: "眼面具*1+合金*2+铥矿*1",
            description: `
【效果】
具有“精炼”前缀，耐久上限翻倍，且耐久为0不会破碎。

【备注】
精炼仅增加前缀，不改变物品预制名。
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "恐怖盾牌",
            image: "原版贴图/恐怖盾牌.png",
            code: "shieldofterror",
            recipe: "恐怖盾牌r*1+合金*2+铥矿*1",
            description: `
【效果】
具有“精炼”前缀，耐久上限翻倍，且耐久为0不会破碎。

【备注】
精炼仅增加前缀，不改变物品预制名。
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "空瓶子",
            image: "原版贴图/空瓶子.png",
            code: "messagebottleempty",
            recipe: "月亮碎片*4",
            description: `
【介绍】
搬空珍珠奶奶的小店。（做一个卑鄙的外乡人）
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "铥矿棒",
            image: "原版贴图/铥矿棒.png",
            code: "ruins_bat",
            recipe: "图勒棒*1+活木*1+铥矿*1+噩梦燃料*1",
            description: `
【介绍】
铥矿棒重铸，恢复至满耐久。
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "铥矿甲",
            image: "原版贴图/铥矿甲.png",
            code: "armorruins",
            recipe: "图勒甲*1+铥矿*2+噩梦燃料*1",
            description: `
【介绍】
铥矿甲重铸，恢复至满耐久。
            `,
            tech: "炼钢炉-冶炼"
        }, {
            name: "铥矿皇冠",
            image: "原版贴图/铥矿皇冠.png",
            code: "ruinshat",
            recipe: "图勒皇冠*1+铥矿*2+噩梦燃料*1",
            description: `
【介绍】
铥矿皇冠重铸，恢复至满耐久。
            `,
            tech: "炼钢炉-冶炼"
        }]
    }, {
        category: "植物",
        child: [{
            name: "椰子树",
            image: "椰子树.png",
            code: "ndnr_palmtree",
            recipe: "",
            description: `
自然再生机制与多肉植物相同，可通过椰子移植。

创建世界时绿洲附近的桦树将将会替换为椰子树。

椰子树有三个阶段，一阶段砍倒掉落木头、椰树叶各1个；二阶段砍倒掉落木头\*2，椰树叶\*1；三阶段砍倒掉落木头\*2，椰子\*2，椰树叶\*1。
            `,
            tech: ""
        }, {
            name: "魔力花",
            image: "原版贴图/魔力花.jpg",
            code: "ndnr_floweroflife",
            recipe: "",
            description: `
【介绍】
1. 站在旁边会扣饱食度回san(效果叠加)，同时在周围不断生成花
2. 可作祟复活，冷却一天，代价同重生护符
3. 被挖掉的魔力花将直接消失（旺达的快乐，啪，没了)
            `,
            tech: ""
        }]
    }, {
        category: "时令事件",
        child: [{
            name: "春节",
            image: "blank.png",
            code: "",
            recipe: "",
            description: `
玩家在春节当天首次进入游戏后，0.5-1天内触发春节事件。

春节事件：玩家周围（整个加载范围）会下元宝雨（无伤害），共计88个元宝。
            `,
            tech: ""
        }, {
            name: "惊蛰",
            image: "blank.png",
            code: "",
            recipe: "",
            description: `
【介绍】
玩家在惊蛰当天首次进入游戏后，0.5~1天内触发惊蛰事件。
惊蛰事件:玩家附近落下九道雷。
            `,
            tech: ""
        }, {
            name: "清明",
            image: "blank.png",
            code: "",
            recipe: "",
            description: `
【介绍】
玩家在清明当天首次进入游戏后，立即触发清明事件。
清明事件:下雨。
            `,
            tech: ""
        }, {
            name: "七夕",
            image: "blank.png",
            code: "",
            recipe: "",
            description: `
【介绍】
全天(现实)触发七夕事件。
七夕事件:所有地面落的鸟都是金丝雀。
            `,
            tech: ""
        }, {
            name: "中元",
            image: "blank.png",
            code: "",
            recipe: "",
            description: `
【介绍】
玩家在中元节当天首次进入游戏后，经历的第一个夜晚发生中元事件。
中元事件:每3s在身边生成一个鬼魂，白天消失。
            `,
            tech: ""
        }, {
            name: "冬至",
            image: "blank.png",
            code: "",
            recipe: "",
            description: `
【介绍】
全天(现实)触发冬至事件。
冬至事件:玩家吃波兰水饺的生命回复效果翻倍。
            `,
            tech: ""
        }]
    }, {
        category: "生物",
        child: [{
            name: "蛇",
            image: "蛇.png",
            code: "ndnr_snake",
            recipe: "",
            description: `
【基础】
| 伤害 | 20 |
| --- | --- |
| 生命 | 100 |
| 行走 | 3 |
| 奔跑 | 3 |
| 攻击间隔 | 3 |
| 攻击范围 | 2.5 |
| 团队协作 | true |
| 影响理智 | -40 |

【介绍】
非白天或者靠近时，尖刺灌木会概率出蛇，喜食肉。

被蛇咬有1/3概率会中毒，涂抹蛇油生效期间不会中蛇毒，机器人与毒绝缘

蛇可使用陷阱捕捉放在容器格子里，生命10天，可入锅，具有1不可食用度
            `,
            tech: ""
        }, {
            name: "曼德拉长老",
            image: "曼德拉长老.png",
            code: "ndnr_mandrakeman",
            recipe: "",
            description: `
【基础】
| 伤害 | 40 |
| --- | --- |
| 生命 | 200 |
| 行走 | 3 |
| 奔跑 | 6 |
| 攻击间隔 | 2 |
| 攻击范围 | 0 |
| 影响理智 | 0 |

【介绍】
在黄昏/夜晚活跃，白天非战斗状态将返回曼德拉丘，会主动攻击玩家。
在满月期间,曼德拉长老会变得中立，他们的面部表情从皱眉变为微笑，同时可以被素食雇佣。
当一个曼德拉长老被杀时,周围的曼德拉将会入睡。
曼德拉长老有类似兔人的逃跑机制。
满月期间，曼德拉长老死亡时将原地生成一个活的曼德拉草
            `,
            tech: ""
        }, {
            name: "椰树守卫",
            image: "Palm_Treeguard.png",
            code: "ndnr_treeguard",
            recipe: "",
            description: `
【生成】
砍椰树时会出椰树守卫，概率与树人相同。

摘椰子会出椰树守卫，概率为1/40

攻击有两种，当玩家距离近时，与树人攻击一致，当玩家远时，会向玩家扔椰子。扔出来的椰子1%概率不会碎裂，椰子会掉落在地上。

PS: 点燃椰树守卫会有好事发生。
            `,
            tech: ""
        }]
    }, {
        category: "制作",
        child: [{
            name: "黑曜石斧",
            image: "黑曜石斧.png",
            code: "ndnr_obsidianaxe",
            recipe: "斧子+龙心+黑曜石*2",
            description: `
【基础】
可砍伐

【充能】
1. 砍树，攻击会充能
2. 充能满会导致砍伐攻击的目标燃烧
3. 充能会发光发热，能导致过热
4. 攻击力随充能线性变化，最高2倍伤害
5. 放水里充能归零，雨天不会充能

【耐久】
1. 使用黑曜石可修复1/3耐久
2. 耐久为0会破碎
            `,
            tech: "二本-工具"
        },{
            name: "合金斧",
            image: "合金斧.png",
            code: "ndnr_alloyaxe",
            recipe: "木头*2+合金*2",
            description: `
【基础】
可砍伐，2.5倍砍伐效率
            `,
            tech: "二本-工具"
        },{
            name: "合金鹤嘴锄",
            image: "合金镐.png",
            code: "ndnr_alloypickaxe",
            recipe: "木头*2+合金*2",
            description: `
【基础】
可开凿，2.5倍开凿效率。
            `,
            tech: "二本-工具"
        },{
            name: "合金铲子",
            image: "合金铲.png",
            code: "ndnr_alloyshovel",
            recipe: "木头*2+合金*2",
            description: `
【基础】
可挖掘。
            `,
            tech: "二本-工具"
        },{
            name: "合金锤",
            image: "合金锤.png",
            code: "ndnr_alloyhammer",
            recipe: "采下的草*6+木头*2+合金*2",
            description: `
【基础】
可锤砸。
            `,
            tech: "二本-工具"
        }, {
            name: "黑曜石火堆",
            image: "黑曜石火堆.png",
            code: "ndnr_obsidianfirepit",
            recipe: "木头*3+黑曜石*8",
            description: `
【介绍】
照亮范围能点亮两个屏幕且燃料更耐烧。
            `,
            tech: "二本-光源"
        }, {
            name: "路灯",
            image: "路灯.png",
            code: "ndnr_city_lamp",
            recipe: "提灯+电子元件+合金",
            description: `
【介绍】
永亮光源，照亮范围约3个地皮（与哈姆雷特相同）。
            `,
            tech: "二本-光源"
        }, {
            name: "宝塔糖",
            image: "宝塔糖.png",
            code: "ndnr_pagodasugar",
            recipe: "恶魔花瓣*3+蜂蜜",
            description: `
【介绍】
00后不太熟悉的打蛔虫神药。蛔蒿绝产后，不曾想竟在永恒大陆找到了替代品。

若肚子里有蛔虫，吃了宝塔糖会把蛔虫拉出来（附带便便）。

虽然甜甜的很好吃，但吃多了对神经不好哦。
            `,
            tech: "二本-生存"
        }, {
            name: "解毒剂",
            image: "解毒剂.png",
            code: "ndnr_antivenom",
            recipe: "毒腺+海带叶*3+壳碎片*2",
            description: `
【介绍】
使用可解蛇毒，无副作用。
            `,
            tech: "一本-生存"
        }, {
            name: "生命水球",
            image: "魔力水球.png",
            code: "ndnr_waterballoon",
            recipe: "魔力泉水+蚊子血囊*2",
            description: `
【基础】
可投掷，类似水球，每次制作一个。
范围5（一个地皮4格）

【效果】
1. 范围内的树种在能种植情况下，会立即原地发芽（堆叠数量有效）
2. 范围内玩家和有潮湿度组件的生物会增加20%潮湿度

【备注】
树种子只限于松果、桦栗果、多枝树种、椰子、其余种子均无效。
谨慎使用，小心炸服
            `,
            tech: "二本-生存"
        }, {
            name: "热带阳伞",
            image: "热带阳伞.png",
            code: "ndnr_palmleaf_unbrella",
            recipe: "椰树叶*3+树枝*4+花瓣*6",
            description: `
【介绍】
一款别具热带风情的...花伞？
            `,
            tech: "一本-生存"
        }, {
            name: "热带叶棚",
            image: "椰子棚.png",
            code: "ndnr_palmleaf_hut",
            recipe: "椰树叶*4+树枝*4+绳子*3",
            description: `
【介绍】
待在椰叶小屋下，不会被雨淋湿，不会过热。
小屋没有耐久，生效范围比看起来大一些。
            `,
            tech: "一本-生存"
        }, {
            name: "茅草袋",
            image: "茅草袋.png",
            code: "ndnr_thatchpack",
            recipe: "椰树叶*4",
            description: `
【基础】
四格容器，可放在容器中，可燃烧。

【备注】
1. 能装进捆绑包装的物品均可被茅草袋容纳。
2. 不具备任何保鲜效果，只是容器。
3. 不可修补，耐久消耗尽后茅草袋消失，里面的东西掉落。
            `,
            tech: "无"
        }, {
            name: "剑鱼短剑",
            image: "剑鱼短剑.png",
            code: "nndnr_cutlass",
            recipe: "死剑鱼*1+金块*2+树枝*1",
            description: `
【介绍】
可使用鱼肉修复耐久，小鱼肉恢复1/6，大鱼肉或者死鳗鱼恢复1/3。
耐久为0将破碎。
            `,
            tech: "二本-战斗"
        }, {
            name: "黑曜石长矛",
            image: "黑曜石长矛.png",
            code: "ndnr_spear_obsidian",
            recipe: "黑曜石*3+长矛*1+龙心*1",
            description: `
【充能】
1. 攻击会充能
2. 充能满会导致攻击的目标燃烧
3. 充能会发光发热，能导致过热
4. 攻击力随充能线性变化，最高2倍伤害
5. 放水里充能归零，雨天不会充能

【备注】
1. 使用黑曜石可修复1/3耐久
2. 耐久为0会破碎
            `,
            tech: "二本-战斗"
        }, {
            name: "黑曜石甲",
            image: "黑曜石甲.png",
            code: "ndnr_armorobsidian",
            recipe: "黑曜石*5+木甲*1+龙心*1",
            description: `
【充能】
不会被火焰烧伤，受到攻击时攻击对象会被点燃。
使用黑曜石可修复1/3
耐久耐久为0会破碎。
            `,
            tech: "二本-战斗"
        }, {
            name: "合金长矛",
            image: "合金矛.png",
            code: "ndnr_alloyspear",
            recipe: "合金*2+金块*2+木头*2",
            description: `
【充能】
锋利而坚固的长矛。
            `,
            tech: "二本-战斗"
        }, {
            name: "炼钢炉",
            image: "炼钢炉.png",
            code: "ndnr_smelter",
            recipe: "石砖*6+木板*4+红宝石*1",
            description: `
【获取】
蟹奶奶商店等级到5级时，会解锁炼钢炉蓝图的兑换，需要空瓶子\*4。

【功能】
有类似烹饪锅得四格物品槽，只有冶炼配方中的物品可以被放进去，是冶炼科技的起点。
冶炼失败（配方不正确）将消耗所有材料，并返还灰烬\*1。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "远古伪科学基地",
            image: "",
            code: "ancient_altar",
            recipe: "铥矿\*10+齿轮\*4+紫宝石\*2",
            description: `
【获取】
完成相应悬赏令任务可获得蓝图。

【功能】
与遗迹区的远古塔一样。
            `,
            tech: "蓝图-食物"
        }, {
            name: "彩虹护符",
            image: "",
            code: "ndnr_opalpreciousamulet",
            recipe: "彩虹宝石\*1+铥矿\*4+噩梦燃料\*10",
            description: `
【获取】
完成相应悬赏令任务可获得蓝图。

【功能】
一个噩梦燃料增加4%-5%。
佩戴时，每隔一个时段可消耗2%耐久回复5生命值。
佩戴时，可自动拾取附近地面整组物品，每次拾取消耗2%耐久。
佩戴时，制作物品仅消耗一半材料，每次制作消耗20%耐久。
佩戴时，移速提高20%，并持续发光，满耐久可提供一天的该功能。
            `,
            tech: "蓝图-食物"
        }, {
            name: "蟹奶奶蜂箱",
            image: "Hermit_Bee_Box.png",
            code: "beebox_hermit",
            recipe: "木板*2+蜂巢*1+蜜蜂*4",
            description: `
【获取】
蟹奶奶商店等级到3级时，可用2个瓶子换取蓝图。

【功能】
与蜂箱一样，就是外观不一样
            `,
            tech: "蓝图-食物"
        }, {
            name: "蟹奶奶晾肉架",
            image: "Hermit_Drying_Rack.png",
            code: "meatrack_hermit",
            recipe: "树枝*3+木炭*2+绳子*3",
            description: `
【获取】
蟹奶奶商店等级到3级时，可用2个瓶子换取蓝图。

【功能】
与晾肉架一样，就是外观不一样
            `,
            tech: "蓝图-烹饪"
        }, {
            name: "养鱼场",
            image: "ndnr_fishfarm.png",
            code: "ndnr_fishfarm",
            recipe: "绳子*2+蜘蛛丝*2+椰子*4",
            description: `
【获取】
蟹奶奶商店等级到7级时，可用4个瓶子换取蓝图。

【功能】
可养海鱼，建造好之后，将对应的鱼子投放进去，就可以源源不断的收鱼了。

鱼场共4个阶段。
1. 空
2. 投放鱼子
3. 可收获一条鱼
4. 可收获两条鱼

鱼子通过杀海鱼获得。

所有海鱼都可养，共18种鱼。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "曼德拉丘",
            image: "曼德拉丘.png",
            code: "ndnr_mandrakehouse",
            recipe: "木板*4+曼德拉草*2+活木*6",
            description: `
【介绍】
居住着一位曼德拉长老，曼德拉长老死后一天会生成新的曼德拉长老。（月圆的时候还会对你笑！）
            `,
            tech: "二本-建筑"
        }, {
            name: "高脚鸟巢",
            image: "高脚鸟巢.png",
            code: "tallbirdnest",
            recipe: "高脚鸟蛋*1+草*10+树枝*10",
            description: `
【介绍】
对高脚鸟巢拓印获得制作蓝图
建造一个高脚鸟巢，和野外一样。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "猪人火炬",
            image: "猪人火炬.png",
            code: "pigtorch",
            recipe: "木头*6+粪便*2",
            description: `
【介绍】
对猪人火炬拓印获得制作蓝图
建造一个猪人火炬，和野外一样。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "猎犬丘",
            image: "原版贴图/猎犬丘.png",
            code: "houndmound",
            recipe: "狗王牙*2+猎犬牙齿*6+骨头碎片*4",
            description: `
【介绍】
对猎犬丘拓印获得制作蓝图
建造一个猎犬丘，和野外一样。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "暴躁猴窝",
            image: "原版贴图/暴躁猴窝.png",
            code: "monkeybarrel",
            recipe: "粪便*4+木板*3+香蕉*4",
            description: `
【介绍】
对暴躁猴窝拓印获得制作蓝图
建造一个暴躁猴窝，和洞穴的一样（报仇！偷光它们的香蕉！）。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "龙虾窝",
            image: "原版贴图/龙虾窝.png",
            code: "wobster_den",
            recipe: "活龙虾*2+石头*10+海带干*10",
            description: `
【介绍】
对龙虾窝拓印获得制作蓝图
建造一个龙虾窝，仅可在水面放置。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "月光龙虾窝",
            image: "原版贴图/月光龙虾窝.png",
            code: "moonglass_wobster_den",
            recipe: "月光龙虾*2+石头*10+海带干*10",
            description: `
【介绍】
对月光龙虾窝拓印获得制作蓝图。
仅可在水面放置。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "尖壳蜗牛窝",
            image: "原版贴图/尖壳蜗牛窝.png",
            code: "slurtlehole",
            recipe: "蜗牛粘液*6+壳碎片*2",
            description: `
【介绍】
对尖壳蜗牛窝拓印获得制作蓝图。
建造一个尖壳蜗牛窝，和洞穴的一样。
            `,
            tech: "蓝图-建筑"
        }, {
            name: "空心树桩",
            image: "空心树桩.png",
            code: "catcoonden",
            recipe: "木头*4+树枝*4+猫尾巴*1",
            description: `
【介绍】
谁能拒绝在家养一只可爱的小猫咪呢？
            `,
            tech: "蓝图-建筑"
        }, {
            name: "腐化魔杖",
            image: "腐化魔杖.png",
            code: "ndnr_corruptionstaff",
            recipe: "蘑菇皮*1+拆解魔杖*1+金块*6",
            description: `
【介绍】
微生物门在拆解魔杖的魔力加持下产生了奇妙的效果。
悲惨的毒菌蟾蜍死亡掉落腐化法杖制作蓝图。
装备时右键地面，消耗20点理智，生成一片孢子云（与毒菌蟾蜍技能相同）。
每次施法消耗燃料10%，可使用三色孢子填充燃料，每个孢子填充5%。
耐久为0不会破碎，使用拆解魔杖分解的产物不会有拆解魔杖。
            `,
            tech: "蓝图-魔法"
        }, {
            name: "鲨齿王冠",
            image: "鲨齿王冠.png",
            code: "ndnr_shark_teethhat",
            recipe: "狗王牙*1+金块*1+猎犬牙齿*5",
            description: `
【介绍】
穿戴时不会被各种猎犬、座狼主动攻击。
猎犬们会主动跟随你，并听从你的号令冲锋陷阵。（开局不要急着肃清狗窝呦！）
鲨齿王冠对狗狗们的统率力高于座狼。
使用针线包或可靠的胶带可以修补，每次修复5天耐久（55.56%）
            `,
            tech: "一本-服饰"
        }, {
            name: "流线型帽子",
            image: "流线型帽子.png",
            code: "ndnr_aerodynamichat",
            recipe: "鲨鱼鳍*1+兔毛*2+蜘蛛丝*3",
            description: `
【介绍】
穿戴时移动速度+25%（你看到我的AE86了吗？）
针线包或胶带能一次修补50%耐久
来自鲨鱼的流线外形，让你划破空气，跑的飞快！
            `,
            tech: "一本-服饰"
        }, {
            name: "腐乳",
            image: "腐乳.png",
            code: "ndnr_spice_smelly",
            recipe: "榴莲*3",
            description: `
【介绍】
（仅沃利）可制作，一次制作获得两个。
可将1份调料和1份料理放入便携香料站，2秒后就会让食物调味，调味的食物可以获得对应的加成效果。

腐乳粉末可以使被调味的料理的饱食度回复效果变为1.5倍，精神回复效果变为0.75倍。料理増加前缀：（臭的）
辣椒粉末可以使玩家攻击倍率变为1.2，持续4分钟。料理增加前缀：（辣 Spicy )
蜂蜜粉末可以使玩家砍树，挖矿的效率变为2倍，持续分钟。料理增加前缀：（甜 Sweet )
大蒜粉末可以使玩家少承受1/3的伤害，持续4分钟。料理增加加前缀：（蒜香 Garlic )
盐粉末可以使那个料理的的血量回复效果变为1.25倍。料理増加前缀：（咸的 Salty )
            `,
            tech: "便携研磨器-调料"
        }]
    }, {
        category: "悬赏任务系统",
        child: [{
            name: "悬赏令",
            image: "ndnr_bounty.png",
            code: "",
            recipe: "",
            description: `
【介绍】
查理与大科学家不知道在秘密的进行着什么交易。。。

大科学家需要永恒大陆上各种各样的东西，查理就发布悬赏令，她的守卫们为了能赚点外快，就接收了去完成查理的悬赏任务。

碰巧冒险家来到永恒大陆到处祸祸（薅），祸祸的查理都看不下去了，一声令下，守卫们暂停了手上的悬赏任务转而来收拾这群冒险家。。。

【获取】
冒险家击败查理守卫，守卫正在进行的悬赏令就会掉落。

【使用】
鼠标放在悬赏令上，可以看到悬赏令的内容。

【奖励】
完成悬赏令上的任务，会得到大科学家给予的奖励。

| 描述 | 需求 | 奖励 |
| --- | --- | --- |
| 我在尝试制造一种名为渔网的新型捕鱼工具，需要很多蛛丝 | 蛛丝\*40 | 圆石\*1 |
| 我的商店需要购置一批活木来制造新的法杖 | 活木\*40 | 圆石\*2 |
| 听说东方有种美食，红得透亮，色如玛瑙，软而不烂，肥而不腻。 | 东坡肉\*3 | 圆石\*1 |
| 又到了雨季了，关节疼的厉害，能给我弄点药酒吗？ | 药酒\*2 | 圆石\*1 |
| 昨天做梦梦到了多年前珍珠做的瑶柱汤，那味道至今难忘。 | 瑶柱汤\*3 | 圆石\*1 |
| 我想改造一下WX-78，发现没有黄油了。 | 黄油\*5 | 圆石\*1 |
| 听说珍珠又发明了一道新菜，快带来我尝尝（别让那只硬螃蟹知道了） | 大海捞珍\*3 | 圆石\*1 |
| 吃了珍珠的大海捞珍这几晚痛风发作疼的不行，快给我带点酸奶来缓解一下。 | 酸奶\*5 | 圆石\*1 |
| 我有个朋友，想尝尝毛蛋是什么味道（你别多想，真是我的朋友） | 毛蛋\*3 | 圆石\*1 |
| 出来冲浪结果碰上了台风，万幸还活着，只是被困在了个不知道什么名字的岛上。 | 船\*1，指南针\*1，南瓜饼干\*10 | 圆石\*3 |
| 近期要办一个帽子展会，你那有多余的帽子吗？ | 西瓜帽\*1，冰块帽\*1，猫帽\*1，花环\*1，海花环\*1，饼干帽\*1，羽毛帽\*1 | 圆石\*4 |
| 我们一家人准备出门野营，能给我准备点野营用品吗？ | 草席卷\*1，毛皮铺盖\*1，帐篷卷\*1 | 圆石\*2 |
| 老裁缝回家探亲了，我需要点针线包来修补衣服 | 针线包\*5 | 圆石\*2 |
| 夏天太热了，如果有羽毛扇就好了。 | 羽毛扇\*5 | 圆石\*1 |
| 买椟还珠，你想试试自己的手气吗？ | 彩虹宝石\*1 | 圆石\*5 |
| 我想研究一下水中木，能否给我带来一些树果酱。 | 树果酱\*10 | 圆石\*2 |
| 每天都忙着研究，都没时间照顾孩子了，要是有玩具就好了 | 假卡祖笛\*1，机器人玩偶\*1，玩具木马\*1，失衡陀螺\*1，玩具眼镜蛇\*1，鳄鱼玩具\*1 | 圆石\*2 |
| 找到了年轻时写的一首曲子，我想把它谱出来。 | 低音贝壳钟\*7，中音贝壳钟\*7，高音贝壳钟\*7 | 圆石\*2 |
| 查理，您好! 要弄明白暗影力量，我可能需要一些材料。 | 铥矿\*20，噩梦燃料\*40，能量核\*3，胡子\*40，暗影心房\*1 | 远古塔蓝图 |
| 新年到了，放点烟花爆竹庆祝一下。 | 信号弹\*10，红鞭炮\*10 | 圆石\*2 |
| 查理，你好！你让我研究旧神们的科技还缺点材料，麻烦帮我收集一下。 | 彩虹宝石\*1，铥矿\*5，噩梦燃料\*20 | 彩虹宝石蓝图 |

            `,
            tech: ""
        }, {
            name: "查理卫士",
            image: "原版贴图/Terrorbeak.png",
            code: "ndnr_nightmarebeak",
            recipe: "",
            description: `
【介绍】
作为查理的忠实护卫，查理卫士拥有更强大的暗影力量。
随着冒险家们在永恒大陆愈发猖獗的活动，查理卫士领命前来惩戒这些不知好歹的小家伙。
不过，查理卫士似乎还有其他隐秘的任务在身...

【身材】
相较于恐怖巨喙，查理卫士不仅有着魁梧的身躯（2倍），还拥有：
| 速度 | 2倍 |
| --- | --- |
| 生命 | 2.5倍 |
| 伤害 | 2倍 |
| 攻击频率 | 1.5倍 |

【掉落】
悬赏令\*1，噩梦燃料\*3.5
            `
        }, {
            name: "罪恶值",
            image: "nightmarebeak.png",
            code: "",
            recipe: "",
            description: `
【介绍】
首先，是犯下了贪婪之罪的威...
咳咳，冒险家们在永恒大陆蝗虫过境般的行为一次又一次试探着暗影的统治者——查理女士的底线。
当她忍无可忍时，就会让拥有数倍于普通暗影生物力量的护卫前来绞杀。

【机制】
玩家执行的任意本模组动作均会增加自己的1点罪恶值（初始为0）。
罪恶值达到10/30/60/100时都会进行一次判定，判定成功的概率分别为0.01/0.09/0.36/1.00。
判定成功将会在玩家周围3~5个地皮的距离内随机位置生成查理守卫，并清空罪恶值。
生存天数小于3天的玩家不会触发判定。
            `
        }, {
            name: "圆石",
            image: "ndnr_roughrock.png",
            code: "ndnr_roughrock",
            recipe: "",
            description: `
【介绍】
科学家在不知名的某地发现的矿石，有着相当丰富的矿藏量，被他拿来作为与查理交易的抵账品。
“一刀穷，一刀富，一刀穿麻布。”

【内容】
可开凿。
定义：红蓝紫为普通宝石、黄绿橙为稀有宝石。
开凿时将经历以下判定过程：
① 1%几率包含一个彩虹宝石
② 10%几率包含一个稀有宝石
③ 40%几率包含一个普通宝石
④ 同③
⑤ 若掉落物仍少于3个，则添加两个大理石
⑥ 若掉落物仍少于4个，则添加一个大理石
⑦ 若掉落物仍少于4个，则有50%几率添加一个普通宝石

总结：最好的奖励为彩虹宝石，最差的情况（非保底）是3个大理石
            `
        }]
    }
];

export default data;
