import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Yxsm = () => import('../views/yxsm/Yxsm.vue')
const Smgk = () => import('../views/yxsm/Smgk.vue')
const Csztgh = () => import('../views/yxsm/Csztgh.vue')
const Zdzc = () => import('../views/Zdzc.vue')
const Ydzs = () => import('../views/Ydzs.vue')
const Wstz = () => import('../views/Wstz.vue')
const Wyzx = () => import('../views/Wyzx.vue')

const Zsdt = () => import('../views/zsdt/Zsdt.vue')
const Zsdta = () => import('../views/zsdt/Zsdta.vue')
const Zsdtb = () => import('../views/zsdt/Zsdtb.vue')
const Zsdtc = () => import('../views/zsdt/Zsdtc.vue')
const Zsdtd = () => import('../views/zsdt/Zsdtd.vue')
const Zsdte = () => import('../views/zsdt/Zsdte.vue')
const Zsdtf = () => import('../views/zsdt/Zsdtf.vue')
const Zsdtg = () => import('../views/zsdt/Zsdtg.vue')
const Zsdth = () => import('../views/zsdt/Zsdth.vue')
const Zsdti = () => import('../views/zsdt/Zsdti.vue')
const Zsdtj = () => import('../views/zsdt/Zsdtj.vue')
const Zsdtk = () => import('../views/zsdt/Zsdtk.vue')
const Zsdtl = () => import('../views/zsdt/Zsdtl.vue')
const Zsdtm = () => import('../views/zsdt/Zsdtm.vue')
const Zsdtn = () => import('../views/zsdt/Zsdtn.vue')

const Xyqk = () => import('../views/yxsm/xyqk/Xyqk.vue')
const Syq = () => import('../views/yxsm/xyqk/Syq.vue')
const Sxq = () => import('../views/yxsm/xyqk/Sxq.vue')
const Yas = () => import('../views/yxsm/xyqk/Yas.vue')
const Mxx = () => import('../views/yxsm/xyqk/MXX.vue')
const Qlx = () => import('../views/yxsm/xyqk/Qlx.vue')
const Nhx = () => import('../views/yxsm/xyqk/Nhx.vue')
const Jnx = () => import('../views/yxsm/xyqk/Jnx.vue')
const Tnx = () => import('../views/yxsm/xyqk/Tnx.vue')
const Jlx = () => import('../views/yxsm/xyqk/Jlx.vue')
const Yxx = () => import('../views/yxsm/xyqk/Yxx.vue')
const Dtx = () => import('../views/yxsm/xyqk/Dtx.vue')

const Yqqg = () => import('../views/yxsm/yqqg/Yqqg.vue')
const Smjjkfq = () => import('../views/yxsm/yqqg/Smjjkfq.vue')
const Smstgmq = () => import('../views/yxsm/yqqg/Smstgmq.vue')
const Syjjkfq = () => import('../views/yxsm/yqqg/Syjjkfq.vue')
const Smgxjscykfq = () => import('../views/yxsm/yqqg/Smgxjscykfq.vue')
const Smplqcgyyq = () => import('../views/yxsm/yqqg/Smplqcgyyq.vue')
const Yasngjjkfq = () => import('../views/yxsm/yqqg/Yasngjjkfq.vue')
const Mxjjkfq = () => import('../views/yxsm/yqqg/Mxjjkfq.vue')
const Qljjkfq = () => import('../views/yxsm/yqqg/Qljjkfq.vue')
const Nhhqjjkfq = () => import('../views/yxsm/yqqg/Nhhqjjkfq.vue')
const Jnxjjkfq = () => import('../views/yxsm/yqqg/Jnxjjkfq.vue')
const Tnjjkfq = () => import('../views/yxsm/yqqg/Tnjjkfq.vue')
const Jljjkfq = () => import('../views/yxsm/yqqg/Jljjkfq.vue')
const Yxjjkfq = () => import('../views/yxsm/yqqg/Yxjjkfq.vue')
const Dtjjkfq = () => import('../views/yxsm/yqqg/Dtjjkfq.vue')

const Tzys = () => import('../views/tzys/Tzys.vue')
const Zcysone = () => import('../views/tzys/Zcysone.vue')
const Zcystwo = () => import('../views/tzys/Zcystwo.vue')
const Zcysthree = () => import('../views/tzys/Zcysthree.vue')
const Zcysfour = () => import('../views/tzys/Zcysfour.vue')
const Kjwh = () => import('../views/tzys/kjwh.vue')
const Zzwh = () => import('../views/tzys/Zzwh.vue')
const Sxxcwh = () => import('../views/tzys/Sxxcwh.vue')
const Ckgd = () => import('../views/tzys/Ckgd.vue')
const Tdcb = () => import('../views/tzys/tzysu/Tdcb.vue')
const Ydjg = () => import('../views/tzys/tzysu/Ydjg.vue')
const Trq = () => import('../views/tzys/tzysu/Trq.vue')
const Ysjg = () => import('../views/tzys/tzysu/Ysjg.vue')
const Rgcb = () => import('../views/tzys/tzysu/Rgcb.vue')

const MainTabBar = () => import('../views/zdcy/cytx/MainTabBar.vue')
const Cd = () => import('../views/zdcy/cytx/cd/Cd.vue')
const Cda = () => import('../views/zdcy/cytx/cd/Cda.vue')
const Cdb = () => import('../views/zdcy/cytx/cd/Cdb.vue')
const Cdc = () => import('../views/zdcy/cytx/cd/Cdc.vue')
const Dzdcy = () => import('../views/zdcy/cytx/Dzdcy.vue')
const Zdcy = () => import('../views/zdcy/cytx/Zdcy.vue')
const Zdpy = () => import('../views/zdcy/cytx/Zdpy.vue')

const Gtyzb = () => import('../views/zdcy/cytx/cybj/Gtyzb.vue')
const Xcl = () => import('../views/zdcy/cytx/cybj/Xcl.vue')
const Wlky = () => import('../views/zdcy/cytx/cybj/Wlky.vue')
const Tsxdny = () => import('../views/zdcy/cytx/cybj/Tsxdny.vue')
const Xxjc = () => import('../views/zdcy/cytx/cybj/Xxjc.vue')
const Gdfz = () => import('../views/zdcy/cytx/cybj/Gdfz.vue')
const Xdzy = () => import('../views/zdcy/cytx/cybj/Xdzy.vue')
const Szxx = () => import('../views/zdcy/cytx/cybj/Szxx.vue')
const Swyy = () => import('../views/zdcy/cytx/cybj/Swyy.vue')
const jzcy = () => import('../views/zdcy/cytx/cybj/Jzcy.vue')

const Gxzdcy = () => import('../views/zdcy/gxzdcy/Gxzdcy.vue')
const Gxzdcysyq = () => import('../views/zdcy/gxzdcy/Gxzdcysyq.vue')
const Gxzdcyyas = () => import('../views/zdcy/gxzdcy/Gxzdcyyas.vue')
const Gxzdcysxq = () => import('../views/zdcy/gxzdcy/Gxzdcysxq.vue')
const Gxzdcymxx = () => import('../views/zdcy/gxzdcy/Gxzdcymxx.vue')
const Gxzdcyqlx = () => import('../views/zdcy/gxzdcy/Gxzdcyqlx.vue')
const Gxzdcyjnx = () => import('../views/zdcy/gxzdcy/Gxzdcyjnx.vue')
const Gxzdcynhx = () => import('../views/zdcy/gxzdcy/Gxzdcynhx.vue')
const Gxzdcytnx = () => import('../views/zdcy/gxzdcy/Gxzdcytnx.vue')
const Gxzdcyjlx = () => import('../views/zdcy/gxzdcy/Gxzdcyjlx.vue')
const Gxzdcyyxx = () => import('../views/zdcy/gxzdcy/Gxzdcyyxx.vue')
const Gxzdcydtx = () => import('../views/zdcy/gxzdcy/Gxzdcydtx.vue')


Vue.use(VueRouter)

const routes = [
    {
    path: '',
    redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: "首页"
      }
    },
    {
      path: '/zdzc',
      component: Zdzc,
      meta: {
        title: "驻点之窗"
      }
    },
    {
      path: '/ydzs',
      component: Ydzs,
      meta: {
        title: "云端招商"
      }
    },
    {
      path: '/wyzx',
      component: Wyzx,
      meta: {
        title: "联系我们"
      }
    },




    {
      path: '/zsdt',
      component: Zsdt,
      meta: {
        title: "招商动态列表"
      }
    },
    {
      path: '/zsdta',
      component: Zsdta,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdtb',
      component: Zsdtb,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdtc',
      component: Zsdtc,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdtd',
      component: Zsdtd,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdte',
      component: Zsdte,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdtf',
      component: Zsdtf,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdtg',
      component: Zsdtg,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdth',
      component: Zsdth,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdti',
      component: Zsdti,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdtj',
      component: Zsdtj,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdtk',
      component: Zsdtk,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdtl',
      component: Zsdtl,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdtm',
      component: Zsdtm,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zsdtn',
      component: Zsdtn,
      meta: {
        title: "详情页"
      }
    },




    {
      path: '/yxsm',
      component: Yxsm,
      meta: {
        title: "印象三明"
      }
    },
    {
      path: '/smgk',
      component: Smgk,
      meta: {
        title: "三明概况"
      }
    },
    {
      path: '/csztgh',
      component: Csztgh,
      meta: {
        title: "详情页"
      }
    },



    {
      path: '/xyqk',
      component: Xyqk,
      meta: {
        title: "县域情况"
      }
    },
    {
      path: '/syq',
      component: Syq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/sxq',
      component: Sxq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/yas',
      component: Yas,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/mxx',
      component: Mxx,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/qlx',
      component: Qlx,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/nhx',
      component: Nhx,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/jnx',
      component: Jnx,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/tnx',
      component: Tnx,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/jlx',
      component: Jlx,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/yxx',
      component: Yxx,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/dtx',
      component: Dtx,
      meta: {
        title: "详情页"
      }
    },



    {
      path: '/yqqg',
      component: Yqqg,
      meta: {
        title: "园区情况"
      }
    },
    {
      path: '/smjjkfq',
      component: Smjjkfq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/smstgmq',
      component: Smstgmq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/syjjkfq',
      component: Syjjkfq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/smgxjscykfq',
      component: Smgxjscykfq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/smplqcgyyq',
      component: Smplqcgyyq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/yasngjjkfq',
      component: Yasngjjkfq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/mxjjkfq',
      component: Mxjjkfq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/qljjkfq',
      component: Qljjkfq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/nhhqjjkfq',
      component: Nhhqjjkfq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/jnxjjkfq',
      component: Jnxjjkfq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/tnjjkfq',
      component: Tnjjkfq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/jljjkfq',
      component: Jljjkfq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/yxjjkfq',
      component: Yxjjkfq,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/dtjjkfq',
      component: Dtjjkfq,
      meta: {
        title: "详情页"
      }
    },



    {
      path: '/tzys',
      component: Tzys,
      meta: {
        title: "投资优势"
      }
    },
    {
      path: '/zcysone',
      component: Zcysone,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zcystwo',
      component: Zcystwo,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zcysthree',
      component: Zcysthree,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zcysfour',
      component: Zcysfour,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/kjwh',
      component: Kjwh,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/zzwh',
      component: Zzwh,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/sxxcwh',
      component: Sxxcwh,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/ckgd',
      component: Ckgd,
      meta: {
        title: "详情页"
      }
    },
    {
      path: '/tdcb',
      component: Tdcb,
      meta: {
        title: "投资优势"
      }
    },
    {
      path: '/ydjg',
      component: Ydjg,
      meta: {
        title: "投资优势"
      }
    },
    {
      path: '/trq',
      component: Trq,
      meta: {
        title: "投资优势"
      }
    },
    {
      path: '/ysjg',
      component: Ysjg,
      meta: {
        title: "投资优势"
      }
    },
    {
      path: '/rgcb',
      component: Rgcb,
      meta: {
        title: "投资优势"
      }
    },



    {
      path: '/maintabbar',
      component: MainTabBar,
      meta: {
        title: "433主导产业"
      }
    },
    {
      path: '/cd',
      component: Cd,
      meta: {
        title: "433主导产业"
      }
    },
    {
      path: '/cda',
      component: Cda,
      meta: {
        title: "433主导产业"
      }
    },
    {
      path: '/cdb',
      component: Cdb,
      meta: {
        title: "433主导产业"
      }
    },
    {
      path: '/cdc',
      component: Cdc,
      meta: {
        title: "433主导产业"
      }
    },
    {
      path: '/dzdcy',
      component: Dzdcy,
      meta: {
        title: "433主导产业"
      }
    },
    {
      path: '/zdcy',
      component: Zdcy,
      meta: {
        title: "433主导产业"
      }
    },
    {
      path: '/zdpy',
      component: Zdpy,
      meta: {
        title: "433主导产业"
      }
    },




    {
      path: '/gtyzb',
      component: Gtyzb,
      meta: {
        title: "产业布局"
      }
    },
    {
      path: '/xcl',
      component: Xcl,
      meta: {
        title: "产业布局"
      }
    },
    {
      path: '/wlky',
      component: Wlky,
      meta: {
        title: "产业布局"
      }
    },
    {
      path: '/tsxdny',
      component: Tsxdny,
      meta: {
        title: "产业布局"
      }
    },
    {
      path: '/xxjc',
      component: Xxjc,
      meta: {
        title: "产业布局"
      }
    },
    {
      path: '/Gdfz',
      component: Gdfz,
      meta: {
        title: "产业布局"
      }
    },
    {
      path: '/Xdzy',
      component: Xdzy,
      meta: {
        title: "产业布局"
      }
    },
    {
      path: '/szxx',
      component: Szxx,
      meta: {
        title: "产业布局"
      }
    },
    {
      path: '/swyy',
      component: Swyy,
      meta: {
        title: "产业布局"
      }
    },
    {
      path: '/jzcy',
      component: jzcy,
      meta: {
        title: "产业布局"
      }
    },


    {
      path: '/gxzdcy',
      component: Gxzdcy,
      meta: {
        title: "各县重点产业列表"
      }
    },
    {
      path: '/gxzdcysyq',
      component: Gxzdcysyq,
      meta: {
        title: "各县重点产业内页"
      }
    },
    {
      path: '/gxzdcyyas',
      component: Gxzdcyyas,
      meta: {
        title: "各县重点产业内页"
      }
    },
    {
      path: '/gxzdcysxq',
      component: Gxzdcysxq,
      meta: {
        title: "各县重点产业内页"
      }
    },
    {
      path: '/gxzdcymxx',
      component: Gxzdcymxx,
      meta: {
        title: "各县重点产业内页"
      }
    },
    {
      path: '/gxzdcyqlx',
      component: Gxzdcyqlx,
      meta: {
        title: "各县重点产业内页"
      }
    },
    {
      path: '/gxzdcyjnx',
      component: Gxzdcyjnx,
      meta: {
        title: "各县重点产业内页"
      }
    },
    {
      path: '/gxzdcynhx',
      component: Gxzdcynhx,
      meta: {
        title: "各县重点产业内页"
      }
    },
    {
      path: '/gxzdcytnx',
      component: Gxzdcytnx,
      meta: {
        title: "各县重点产业内页"
      }
    },
    {
      path: '/gxzdcyjlx',
      component: Gxzdcyjlx,
      meta: {
        title: "各县重点产业内页"
      }
    },
    {
      path: '/gxzdcyyxx',
      component: Gxzdcyyxx,
      meta: {
        title: "各县重点产业内页"
      }
    },
    {
      path: '/gxzdcydtx',
      component: Gxzdcydtx,
      meta: {
        title: "各县重点产业内页"
      }
    },



    {
      path: '/wstz',
      component: Wstz,
      meta: {
        title: "外商投资引导"
      }
    },
]

const router = new VueRouter({
scrollBehavior: () => ({ y: 0 }),
routes,
mode: 'history',
})

router.beforeEach((to, from, next) => {
  
  if (to.meta.title) { //如果设置标题，拦截后设置标题
    document.title = to.meta.title
  } else {
    document.title
  }
  next()
  });

export default router