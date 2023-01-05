
# HTML 模板

### 【创建一个空的模板】

- **说明:**
  - 空的模板一般没啥用途
  - 这个demo就是单纯的**展示一下最基础的数据结构**
  - 当然也可以用来测试`mini-sandbox`是否安装成功

<div id="sandbox-demo1"></div>

<!-- 
```html
<div id="sandbox-demo1"></div>

<script src="https://unpkg.com/mini-sandbox@${version}"></script>
<script type="text/javascript">
  new MiniSandbox({
    el: '#sandbox-demo1',
    files: {
      'index.html': {}
    }
  })
</script>
```
 -->

<br />

### 【单标签页: html+css+js】

- **说明:**
  - 如果你只想展示一个组件, 那单个标签页就能满足你的需求, 你可以在 html 里用
    - `<style>`标签控制 css 样式
    - `<script>`标签控制 js 脚本
  - 并且这样会更有利于用户去实时编辑, 来看到效果

<div id="sandbox-demo2"></div>

<!-- 
```html
<div id="sandbox-demo2"></div>

<script src="https://unpkg.com/mini-sandbox@${version}"></script>
<script type="text/javascript">
  new MiniSandbox({
    el: '#sandbox-demo2',
    files: {
      'index.html': {
        defaultValue: `<style>
  button {
    color: red;
  }
</style>

<button>测试</button>

<script>
  const btn = document.querySelector('button')
  btn.addEventListener('click', () => {
    alert('click 事件')
  })
<\/script>`
      }
    },
    defaultConfig: {
      height: '350px',
    }
  })
</script>
```
 -->

<br />

### 【单标签页: 内置默认 css/js】

- **说明:**
  - 当前模板的内置 css 和 js, 是不会在**代码层面**体现的, 所以用户也是无法修改
  - 如果是`多标签页模式`, 你也可以放在`resource`下, 这样所有标签页都能享受到

<div id="sandbox-demo3"></div>

<!-- 
```html
<div id="sandbox-demo3"></div>

<script src="https://unpkg.com/mini-sandbox@${version}"></script>
<script type="text/javascript">
  new MiniSandbox({
    el: '#sandbox-demo3',
    files: {
      'index.html': {
        defaultValue: '<div class="box">这是一个盒子</div>',
        css: `
          .box {
            width: 100px;
            height: 100px;
            background: #ccc;
          }
        `,
        js: `
          const box = document.querySelector('.box')
          box.addEventListener('click', e => {
            console.log(e)
            alert('嘿嘿😋')
          })
        `
      }
    }
  })
</script>
```
 -->

<br />

### 【多标签页: 拆分 html/css/js】

- **说明:**
  - 这里我使用`title`属性, 用来设置标签页的显示名称:
    - `index.html` => `HTML`
    - `index.css` => `CSS`
    - `index.js` => `JS`
  - 需要注意`index.css`和`index.js`两个文件不是模板, 无法单独渲染. 所以他们只能作为依赖, 在`index.html`中引入


<div id="sandbox-demo4"></div>

<!-- 
```html
<div id="sandbox-demo4"></div>

<script src="https://unpkg.com/mini-sandbox@${version}"></script>
<script type="text/javascript">
  new MiniSandbox({
    el: '#sandbox-demo4',
    files: {
      'index.html': {
        title: 'HTML',
        defaultValue: `<button>点击</button>`,
        cssLibs: ['index.css'],
        jsLibs: ['index.js'],
      },
      'index.css': {
        title: 'CSS',
        defaultValue: "button {\n  width: 100%;\n}\n"
      },
      'index.js': {
        title: 'JS',
        defaultValue: "const btn = document.querySelector('button')\nbtn.addEventListener('click', () => {\n  alert('这是一个按钮')\n})\n"
      }
    }
  })
</script>
```
 -->

<br />

### 【多标签页: 渲染多个模板】

- **说明:**
  - 如果你想展示多个组件的使用, 那你可以像下面这样做成多个标签页来分别渲染

<div id="sandbox-demo5"></div>

<!-- 
```html
<div id="sandbox-demo5"></div>

<script src="https://unpkg.com/mini-sandbox@${version}"></script>
<script type="text/javascript">
  new MiniSandbox({
    el: '#sandbox-demo5',
    files: {
      'h1': {
        defaultValue: `
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>
<h6>H6</h6>`
      },
      'button': {
        defaultValue: `
<button onclick="alert('你好')">鼠标单击</button>
<button ondblclick="alert('嗨!~')">鼠标双击</button>`
      }
    },
    defaultConfig: {
      height: '350px'
    }
  })
</script>
```
 -->

<br />


### 【展示 HTML 组件库 的代码】

- **说明:**
  - 这里以`Bootstrap5`为例, 你可以放置你自己想展示的组件库的 CDN 链接
  - 由于这两个标签页都是展示同一个组件库的组件, 所以静态资源放在`resource`里

<div id="sandbox-demo6"></div>

<!-- 
```html
<div id="sandbox-demo6"></div>

<script src="https://unpkg.com/mini-sandbox@${version}"></script>
<script type="text/javascript">
  new MiniSandbox({
    el: '#sandbox-demo6',
    files: {
      'Buttons': {
        defaultValue: `
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>`,
      },
      'Alert': {
        defaultValue: `
<div class="alert alert-primary" role="alert">
  消息
</div>
<div class="alert alert-success" role="alert">
  成功
</div>
<div class="alert alert-danger" role="alert">
  错误
</div>`
      }
    },
    resource: {
      css: 'body { margin: 10px }',
      cssLibs: ['https://unpkg.com/bootstrap@5.1.3/dist/css/bootstrap.min.css'],
      jsLibs: ['https://unpkg.com/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'],
    }
  })
</script>
```
 -->

<br />

### 【使用 import 和 export】

- 说明:
  - 这个示例用来演示, 如何在 html 中引入 esm 模块, 并支持了 export 导出
  - 通过观察你会发现, `app.js`中的`getTime`方法是从`utils.js`里导出来的

!> 补充: 关于在 html 引入 `app.js` 的方式有两种

1. **方式1: 在 jsLibs 中提前定义**
  - 像这样 `'index.html': { jsLibs: ['app.js'] }` 设置 jsLibs 属性
  - 好处是用户也无法删除引入的 js 脚本
  - 缺点是用户无法清晰的知道 app.js 是从哪引入的

2. **方式2: 在 html 代码中引入**
  - 像这样 `<script type="module" src="./app.js"></script>` 写一个*相对路径*
  - 好处是用户可以在代码中删除 / 切换其他 esm 模块
  - 缺点是用户如果在代码中删除了这一行, 他就看不到 js 实现的效果了

<div id="sandbox-demo7"></div>

<!-- 
```html
<div id="sandbox-demo7"></div>

<script src="https://unpkg.com/mini-sandbox@${version}"></script>
<script type="text/javascript">
  new MiniSandbox({
    el: '#sandbox-demo7',
    files: {
        'index.html': {
          defaultValue: `<style>
  h3 {
    text-align: center;
  }
</style>

<h3 class="box"></h3>

<script type="module" src="./app.js"><\/script>`,
        },
        'app.js': {
          module: 'esm',
          defaultValue: `import { getTime } from './utils.js'

const dom = document.querySelector('.box')
setInterval(() => {
  dom.innerHTML = '当前时间: ' + getTime()
}, 1000 / 60)`
        },
        'utils.js': {
          module: 'esm',
          defaultValue: `const fill = str => ('0' + str).slice(-2)

export const getTime = (x, y) => {
  const dt = new Date()
  const h = dt.getHours()
  const m = dt.getMinutes()
  const s = dt.getSeconds()
  return \`\${fill(h)}\:\${fill(m)}:\${fill(s)}\`
}`
      }
    },
  })
</script>
```
 -->
