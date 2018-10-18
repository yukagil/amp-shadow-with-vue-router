import Page1 from './page/Page1'
import Page2 from './page/Page2'
import Page3 from './page/Page3'
import ReuseAmpViewer from './component/ReuseAMPViewer'
import NotReuseAmpViewer from './component/NotReuseAMPViewer'

export default [
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  },
  {
    path: '/page3',
    component: Page3
  },
  {
    path: '/reuse-route/:pageName',
    component: ReuseAmpViewer,
    props: true
  },
  {
    path: '/not-reuse-route/:pageName',
    component: NotReuseAmpViewer,
    props: true
  },
]