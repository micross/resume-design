import customCss from '../../customCss';

export default {
  id: 'WorksDisplay_7', // 组件唯一性id
  componentName: 'WorksDisplay_7', // 组件名
  commentType: '', // 组件类型
  icon: '', // 组件icon
  title: '作品展示', // 组件中文名称
  description: '作品展示模块', // 组件描述信息
  screenShot: {
    width: '100%',
    url: '',
    name: 'WorksDisplay_7.png'
  }, // 组件快照
  keywords: '作品展示', // 组件关键词，用于搜索
  category: 'works_display', // 组件分类
  props: {}, // 组件属性
  css: {
    themeColor: '#254665',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: {
      top: 0,
      right: 40,
      bottom: 20,
      left: 40
    }
  }, // 组件样式
  customCss: customCss['WorksDisplay_7'],
  dataSource: {}, // 组件单独数据
  customProps: {} // 自定义属性字段
};