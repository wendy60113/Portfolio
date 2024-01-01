"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3406],{8063:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"proj_6","metadata":{"permalink":"/portfolio/blog/proj_6","source":"@site/blog/2023-08-20-NestedDropdown/index.md","title":"NPM-\u5de2\u72c0\u9078\u55ae\u5143\u4ef6","description":"\u524d\u7aef\u7a0b\u5f0f / npm\u4e0a\u67b6 / UI/UX\u8a2d\u8a08","date":"2023-08-20T00:00:00.000Z","formattedDate":"August 20, 2023","tags":[{"label":"\u524d\u7aef\u7a0b\u5f0f","permalink":"/portfolio/blog/tags/\u524d\u7aef\u7a0b\u5f0f"},{"label":"UI/UX\u8a2d\u8a08","permalink":"/portfolio/blog/tags/ui-ux\u8a2d\u8a08"}],"readingTime":0.88,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"proj_6","title":"NPM-\u5de2\u72c0\u9078\u55ae\u5143\u4ef6","test_image":"/portfolio/img/cover/nesteddropdown01.jpg","banner_img":"/portfolio/img/banner/nesteddropdown06.jpg","tags":["\u524d\u7aef\u7a0b\u5f0f","UI/UX\u8a2d\u8a08"],"description":"\u524d\u7aef\u7a0b\u5f0f / npm\u4e0a\u67b6 / UI/UX\u8a2d\u8a08","tool":"npm / vuejs / BootstrapVue"},"nextItem":{"title":"\u5496\u5561\u5ef3\u641c\u5c0b\u7db2\u9801","permalink":"/portfolio/blog/proj_5"}},"content":"> This example depends on BootstrapVue. Before using this example, please install BootstrapVue.\\n\\n## Demo\\n\\n[Demo Website](https://wendy60113.github.io/bootstrapvue-nesteddropdown/)\\n\\n## Installation\\n\\n```sh\\nnpm i bootstrapvue-nesteddropdown\\n```\\n\\n```sh\\nnpm install vue bootstrap bootstrap-vue\\n```\\n\\n## Usage\\n\\n#### Import BootstrapVue\\n\\n```sh\\nimport { BootstrapVue, IconsPlugin } from \'bootstrap-vue\'\\nimport \'bootstrap/dist/css/bootstrap.css\'\\nimport \'bootstrap-vue/dist/bootstrap-vue.css\'\\nVue.use(BootstrapVue)\\nVue.use(IconsPlugin)\\n```\\n\\n#### Import Component\\n\\n```sh\\nimport NestedDropdown from \'bootstrapvue-nesteddropdown\'\\nimport \'bootstrapvue-nesteddropdown/dist/NestedDropdown.css\';\\nVue.component(\'NestedDropdown\', NestedDropdown);\\n```\\n\\n## Props API\\n\\n|  props  |  type  | Required | Default |\\n| :-----: | :----: | :------: | :-----: |\\n| v-model | string |   yes    |    -    |\\n| option  | Array  |   yes    |   []    |\\n\\n**\'option\'** is an object containing an array. The value of the property with the key **\'title\'** represents the first level of the **\'option\'**. The value of the property with the key **\'content\'** is an array, this array represents the second level of the corresponding **\'title\'**.\\n\\nex :\\n\\n```javascript\\n[\\n  {\\n    title: \\"First Title\\",\\n    content: [\\"First Action\\", \\"Second Action\\"],\\n  },\\n  {\\n    title: \\"Second Title\\",\\n    content: [\\"First Content\\", \\"Second Content\\", \\"Third Content\\"],\\n  },\\n];\\n```"},{"id":"proj_5","metadata":{"permalink":"/portfolio/blog/proj_5","source":"@site/blog/2023-06-25-CafeList/index.md","title":"\u5496\u5561\u5ef3\u641c\u5c0b\u7db2\u9801","description":"\u8cc7\u6599\u5eab\u8a2d\u8a08 / api\u6587\u4ef6\u64b0\u5beb / UI/UX\u8a2d\u8a08 / \u7db2\u9801\u8a2d\u8a08","date":"2023-06-25T00:00:00.000Z","formattedDate":"June 25, 2023","tags":[{"label":"\u8cc7\u6599\u5eab\u8a2d\u8a08","permalink":"/portfolio/blog/tags/\u8cc7\u6599\u5eab\u8a2d\u8a08"},{"label":"\u524d\u7aef\u7a0b\u5f0f","permalink":"/portfolio/blog/tags/\u524d\u7aef\u7a0b\u5f0f"},{"label":"UI/UX\u8a2d\u8a08","permalink":"/portfolio/blog/tags/ui-ux\u8a2d\u8a08"},{"label":"\u7db2\u9801\u8a2d\u8a08","permalink":"/portfolio/blog/tags/\u7db2\u9801\u8a2d\u8a08"}],"readingTime":8.46,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"proj_5","title":"\u5496\u5561\u5ef3\u641c\u5c0b\u7db2\u9801","test_image":"/portfolio/img/cover/cafelist_01.jpg","banner_img":"/portfolio/img/banner/cafelist_06.jpg","tags":["\u8cc7\u6599\u5eab\u8a2d\u8a08","\u524d\u7aef\u7a0b\u5f0f","UI/UX\u8a2d\u8a08","\u7db2\u9801\u8a2d\u8a08"],"description":"\u8cc7\u6599\u5eab\u8a2d\u8a08 / api\u6587\u4ef6\u64b0\u5beb / UI/UX\u8a2d\u8a08 / \u7db2\u9801\u8a2d\u8a08","tool":"mySql / nodejs / RESTful API / Html / CSS / Vuejs / Figma"},"prevItem":{"title":"NPM-\u5de2\u72c0\u9078\u55ae\u5143\u4ef6","permalink":"/portfolio/blog/proj_6"},"nextItem":{"title":"\u4fe1\u7528\u5361\u8f38\u5165\u7db2\u9801\u52d5\u614b","permalink":"/portfolio/blog/proj_4"}},"content":"## \u7c21\u4ecb\\n\\n\u9019\u662f\u4e00\u500b\u4ee5 Vue.js \u548c Node.js \u88fd\u4f5c\u7684\u7db2\u9801\u3002\u6b64\u7db2\u9801\u63d0\u4f9b\u4f7f\u7528\u8005\u53ef\u4ee5\u5feb\u901f\u641c\u5c0b\u5496\u5561\u5ef3\u8cc7\u8a0a\u3002\u900f\u904e\u672c\u7db2\u9801\u53ef\u4ee5\u65b0\u589e\u3001\u641c\u5c0b\u5496\u5561\u5ef3\u8cc7\u8a0a\uff0c\u4e26\u5efa\u7acb\u500b\u4eba\u5e33\u865f\u4f86\u5b58\u53d6\u500b\u4eba\u7684\u300c\u6211\u7684\u6700\u611b\u300d\u5217\u8868\u3002\\n\\n\u4ee5\u4e0b\u70ba\u6b64\u5c08\u6848\u7684\u5404\u9805\u5be6\u4f5c\u8aaa\u660e\uff1a\\n\\n## \u5be6\u4f5c\u6d41\u7a0b\\n\\n### 1.\u6d41\u7a0b\u8a2d\u8a08\\n\\n#### Functional Map\\n\\n```mermaid\\ngraph LR;\\n    A[\u5496\u5561\u5ef3\u641c\u5c0b\u7db2\u9801]--\x3eB[\u9996\u9801];\\n    B--\x3eE[\u524d\u5f80\u5496\u5561\u5ef3\u5217\u8868]\\n    B--\x3eF[\u524d\u5f80\u6211\u7684\u6700\u611b]\\n    B--\x3eG[\u63a8\u85a6\u6e05\u55ae]\\n    B--\x3eH[\u67e5\u770b\u66f4\u591a]\\n\\n    A--\x3eC[\u5496\u5561\u5ef3\u5217\u8868]\\n    C--\x3eI[\u65b0\u589e\u5496\u5561\u5ef3]\\n    C--\x3eJ[\u5496\u5561\u5ef3\u8cc7\u8a0a]\\n    J--\x3eK[\u7de8\u8f2f\u8cc7\u8a0a]\\n    J--\x3eM[\u522a\u9664\u8cc7\u8a0a]\\n    J--\x3eL[\u52a0\u5165\u6211\u7684\u6700\u611b]\\n\\n    A--\x3eD[\u6211\u7684\u6700\u611b]\\n    D--\x3eJ[\u5496\u5561\u5ef3\u8cc7\u8a0a]\\n\\n```\\n\\n---\\n\\n#### Flow Chart\\n\\n```mermaid\\nflowchart TD\\ntitle[\u9996\u9801] --\x3e goList([\u524d\u5f80\u5217\u8868]) --route--\x3e list[\u5217\u8868]\\ntitle[\u9996\u9801] --\x3e goLike([\u524d\u5f80\u6211\u7684\u6700\u611b]) --route--\x3e like[\u6211\u7684\u6700\u611b]\\ntitle[\u9996\u9801] --\x3e random[\u96a8\u6a5f\u63a8\u85a6] --\x3e more([\u67e5\u770b\u66f4\u591a]) --route--\x3e list[\u5217\u8868]\\nlist[\u5217\u8868] --\x3e goShop([\u67e5\u770b\u5e97\u5bb6])\\nlist[\u5217\u8868] --\x3e addshop([\u65b0\u589e\u5e97\u5bb6]) --call_api--\x3e addshopInfo[\u65b0\u589e\u5e97\u5bb6\u8cc7\u8a0a]\\nshop[\u5e97\u5bb6\u8cc7\u8a0a] --\x3e edit[\u7de8\u8f2f\u8cc7\u8a0a]\\nshop[\u5e97\u5bb6\u8cc7\u8a0a] --\x3e delet[\u522a\u9664\u8cc7\u8a0a]\\nshop[\u5e97\u5bb6\u8cc7\u8a0a] --\x3e addlike[\u52a0\u5165\u6211\u7684\u6700\u611b]\\nlike[\u6211\u7684\u6700\u611b] --\x3e goShop([\u67e5\u770b\u5e97\u5bb6])\\ngoShop([\u67e5\u770b\u5e97\u5bb6]) --call_api--\x3e shop[\u5e97\u5bb6\u8cc7\u8a0a]\\n```\\n\\n---\\n\\n### 2.\u8cc7\u6599\u8868\u8a2d\u8a08\\n\\n#### \u8cc7\u6599\u5eab\u74b0\u5883\\n\\nDocker + MariaDB\\n\\n---\\n\\n#### \u8cc7\u6599\u8868\u67b6\u69cb\\n\\n![database diagram](./diagram.png)\\n\\n---\\n\\n#### API \u6587\u4ef6\\n\\n##### Schema\\n\\n<details>\\n <summary>\\n    <strong>User List</strong>\\n</summary>\\n\\n> | name | data type | requried | description |\\n> | ---- | --------- | -------- | ----------- |\\n> | id   | int       |          | \u81ea\u52d5\u7522\u751f id |\\n> | name | string    | Y        | \u4f7f\u7528\u8005\u5e33\u865f  |\\n\\n</details>\\n\\n<details>\\n <summary>\\n    <strong>Cafe List</strong>\\n</summary>\\n\\n> | name       | data type | requried | description               |\\n> | ---------- | --------- | -------- | ------------------------- |\\n> | id         | int       |          | \u81ea\u52d5\u7522\u751f id               |\\n> | name       | string    | Y        | \u5496\u5561\u5ef3\u540d\u7a31                |\\n> | address    | string    | Y        | \u5496\u5561\u5ef3\u5730\u5740                |\\n> | isFavorite | string    |          | \u81ea\u52d5\u7522\u751f (0:false,1:true) |\\n\\n</details>\\n\\n<details>\\n <summary>\\n    <strong>Favorite List</strong>\\n</summary>\\n\\n> | name       | data type | requried | description |\\n> | ---------- | --------- | -------- | ----------- |\\n> | id         | int       |          | \u81ea\u52d5\u7522\u751f id |\\n> | cafeshopId | int       | Y        | \u5496\u5561\u5ef3\u7de8\u865f  |\\n> | userId     | int       | Y        | \u4f7f\u7528\u8005\u7de8\u865f  |\\n\\n</details>\\n\\n##### API\\n\\n<details>\\n <summary>\\n    <strong>Cafelist</strong>\\n</summary>\\n<details>\\n    <summary>\\n        <strong style={{backgroundColor:\'#4ac057\',color:\'#fff\',padding:5+\'px\',marginRight:10+\'px\'}}>POST</strong>\\n        <strong style={{marginRight:10+\'px\'}}>/cafelist/query</strong>\\n        <strong>\u67e5\u8a62\u5496\u5561\u5ef3\u8cc7\u6599\u5217\u8868</strong>\\n    </summary>\\n\\n#### Parameters\\n\\nnone\\n\\n#### Request body\\n\\n```js\\n//example\\n{\\n    \\"userId\\": \\"1\\"\\n}\\n```\\n\\n#### Response\\n\\n> | http code | response |\\n> | --------- | -------- |\\n> | 200       | results  |\\n> | 400       | error    |\\n\\n</details>\\n\\n<details>\\n    <summary>\\n        <strong style={{backgroundColor:\'#4ac057\',color:\'#fff\',padding:5+\'px\',marginRight:10+\'px\'}}>POST</strong>\\n        <strong style={{marginRight:10+\'px\'}}>/cafelist/add</strong>\\n        <strong>\u65b0\u589e\u5496\u5561\u5ef3\u8cc7\u6599</strong>\\n    </summary>\\n\\n#### Parameters\\n\\nnone\\n\\n#### Request body\\n\\n```js\\n//example\\n{\\n  \\"name\\": \\"shop name\\",\\n  \\"address\\": \\"shop address\\"\\n}\\n```\\n\\n#### Response\\n\\n> | http code | response |\\n> | --------- | -------- |\\n> | 200       | results  |\\n> | 400       | error    |\\n\\n</details>\\n<details>\\n    <summary>\\n        <strong style={{backgroundColor:\'#40a0de\',color:\'#fff\',padding:5+\'px\',marginRight:10+\'px\'}}>GET</strong>\\n        <strong style={{marginRight:10+\'px\'}}>/cafelist/:id</strong>\\n        <strong>\u67e5\u8a62\u5496\u5561\u5ef3\u55ae\u7b46\u8cc7\u6599</strong>\\n    </summary>\\n\\n#### Parameters\\n\\n> | name | requried | description |\\n> | ---- | -------- | ----------- |\\n> | id   | Y        | \u5496\u5561\u5ef3 id   |\\n\\n#### Request body\\n\\nnone\\n\\n#### Response\\n\\n> | http code | response     |\\n> | --------- | ------------ |\\n> | 200       | results      |\\n> | 400       | error        |\\n> | 404       | \u627e\u4e0d\u5230\u6b64\u9805\u76ee |\\n\\n</details>\\n<details>\\n    <summary>\\n        <strong style={{backgroundColor:\'#ffa524\',color:\'#fff\',padding:5+\'px\',marginRight:10+\'px\'}}>PUT</strong>\\n        <strong style={{marginRight:10+\'px\'}}>/cafelist/:id</strong>\\n        <strong>\u7de8\u8f2f\u5496\u5561\u5ef3\u55ae\u7b46\u8cc7\u6599</strong>\\n    </summary>\\n\\n#### Parameters\\n\\nnone\\n\\n#### Request body\\n\\n```js\\n{\\n  \\"name\\": \\"shop name\\",\\n  \\"address\\": \\"shop address\\",\\n  \\"id\\": \\"306\\"\\n}\\n```\\n\\n#### Response\\n\\n> | http code | response |\\n> | --------- | -------- |\\n> | 200       | results  |\\n> | 400       | error    |\\n\\n</details>\\n<details>\\n    <summary>\\n        <strong style={{backgroundColor:\'#ff6565\',color:\'#fff\',padding:5+\'px\',marginRight:10+\'px\'}}>DELETE</strong>\\n        <strong style={{marginRight:10+\'px\'}}>/cafelist/:id</strong>\\n        <strong>\u522a\u9664\u5496\u5561\u5ef3\u55ae\u7b46\u8cc7\u6599</strong>\\n    </summary>\\n\\n#### Parameters\\n\\n> | name | requried | description |\\n> | ---- | -------- | ----------- |\\n> | id   | Y        | \u5496\u5561\u5ef3 id   |\\n\\n#### Request body\\n\\nnone\\n\\n#### Response\\n\\n> | http code | response     |\\n> | --------- | ------------ |\\n> | 200       | results      |\\n> | 400       | error        |\\n> | 404       | \u627e\u4e0d\u5230\u6b64\u9805\u76ee |\\n\\n</details>\\n</details>\\n<details>\\n <summary>\\n    <strong>Favorite</strong>\\n</summary>\\n<details>\\n    <summary>\\n        <strong style={{backgroundColor:\'#40a0de\',color:\'#fff\',padding:5+\'px\',marginRight:10+\'px\'}}>GET</strong>\\n        <strong style={{marginRight:10+\'px\'}}>/favorite</strong>\\n        <strong>\u67e5\u8a62\u6211\u7684\u6700\u611b\u8cc7\u6599\u5217\u8868</strong>\\n    </summary>\\n\\n#### Parameters\\n\\nnone\\n\\n#### Request body\\n\\nnone\\n\\n#### Response\\n\\n> | http code | response          |\\n> | --------- | ----------------- |\\n> | 200       | {Msg:Msg,list:[]} |\\n> | 400       | error             |\\n\\n</details>\\n<details>\\n    <summary>\\n        <strong style={{backgroundColor:\'#4ac057\',color:\'#fff\',padding:5+\'px\',marginRight:10+\'px\'}}>POST</strong>\\n        <strong style={{marginRight:10+\'px\'}}>/favorite</strong>\\n        <strong>\u65b0\u589e\u6211\u7684\u6700\u611b\u55ae\u7b46\u8cc7\u6599</strong>\\n    </summary>\\n\\n#### Parameters\\n\\nnone\\n\\n#### Request body\\n\\n```js\\n{\\n  \\"cafeshopId\\": 201,\\n  \\"userId\\": 1\\n}\\n```\\n\\n#### Response\\n\\n> | http code | response |\\n> | --------- | -------- |\\n> | 200       | result   |\\n> | 400       | error    |\\n\\n</details>\\n<details>\\n    <summary>\\n        <strong style={{backgroundColor:\'#ff6565\',color:\'#fff\',padding:5+\'px\',marginRight:10+\'px\'}}>DELETE</strong>\\n        <strong style={{marginRight:10+\'px\'}}>/favorite/:userId/:cafeshopId</strong>\\n        <strong>\u522a\u9664\u6211\u7684\u6700\u611b\u55ae\u7b46\u8cc7\u6599</strong>\\n    </summary>\\n\\n#### Parameters\\n\\n> | name       | requried | description    |\\n> | ---------- | -------- | -------------- |\\n> | userId     | Y        | userlist -> id |\\n> | cafeshopId | Y        | cafelist -> id |\\n\\n#### Request body\\n\\nnone\\n\\n#### Response\\n\\n> | http code | response |\\n> | --------- | -------- |\\n> | 200       | result   |\\n> | 400       | error    |\\n\\n</details>\\n</details>\\n<details>\\n <summary>\\n    <strong>Userlist</strong>\\n</summary>\\n<details>\\n    <summary>\\n        <strong style={{backgroundColor:\'#40a0de\',color:\'#fff\',padding:5+\'px\',marginRight:10+\'px\'}}>GET</strong>\\n        <strong style={{marginRight:10+\'px\'}}>/userlist</strong>\\n        <strong>\u67e5\u8a62\u4f7f\u7528\u8005\u5e33\u865f\u5217\u8868</strong>\\n    </summary>\\n\\n#### Parameters\\n\\nnone\\n\\n#### Request body\\n\\nnone\\n\\n#### Response\\n\\n> | http code | response |\\n> | --------- | -------- |\\n> | 200       | results  |\\n> | 400       | error    |\\n\\n</details>\\n<details>\\n    <summary>\\n        <strong style={{backgroundColor:\'#4ac057\',color:\'#fff\',padding:5+\'px\',marginRight:10+\'px\'}}>POST</strong>\\n        <strong style={{marginRight:10+\'px\'}}>/userlist</strong>\\n        <strong>\u65b0\u589e\u4f7f\u7528\u8005\u5e33\u865f</strong>\\n    </summary>\\n\\n#### Parameters\\n\\nnone\\n\\n#### Request body\\n\\n```js\\n{\\n  \\"name\\": \\"wendy\\"\\n}\\n```\\n\\n#### Response\\n\\n> | http code | response |\\n> | --------- | -------- |\\n> | 200       | results  |\\n> | 400       | error    |\\n\\n</details>\\n<details>\\n    <summary>\\n        <strong style={{backgroundColor:\'#ff6565\',color:\'#fff\',padding:5+\'px\',marginRight:10+\'px\'}}>DELETE</strong>\\n        <strong style={{marginRight:10+\'px\'}}>/userlist/:id</strong>\\n        <strong>\u522a\u9664\u4f7f\u7528\u8005\u5e33\u865f</strong>\\n    </summary>\\n\\n#### Parameters\\n\\n> | name | requried | description |\\n> | ---- | -------- | ----------- |\\n> | id   | Y        | \u5e33\u865f id     |\\n\\n#### Request body\\n\\nnone\\n\\n#### Response\\n\\n> | http code | response |\\n> | --------- | -------- |\\n> | 200       | results  |\\n> | 400       | error    |\\n\\n</details>\\n</details>\\n\\n---\\n\\n### 3.Figma \u4ecb\u9762\u8a2d\u8a08\\n\\n[Prototype](https://www.figma.com/proto/f3UUqy0fe4K9HYat19EWMl/Coffee-Shop-Collection?type=design&node-id=1-2&t=gpzmHeeV3s1FqivL-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design)\\n\\n![figma](./figma.png)\\n\\n---\\n\\n\u672c\u5c08\u6848\u63a1\u7528\u524d\u5f8c\u7aef\u5206\u96e2\u7684\u65b9\u5f0f\u9032\u884c\\n![process](./process.png)\\n\\n### 4.\u5f8c\u7aef\u64b0\u5beb\\n\\nmySql+node.js\\n\\n- \u4f7f\u7528 RESTful API \u8a2d\u8a08\u65b9\u6cd5\\n- \u63a1\u7528 MVC \u67b6\u69cb\\n- \u4f7f\u7528 Swagger \u751f\u6210 API \u6587\u4ef6\\n- \u4f7f\u7528 body-parser \u89e3\u6790 request body \u5167\u5bb9\\n\\n---\\n\\n### 5.\u524d\u7aef\u64b0\u5beb\\n\\n**\uff081\uff09Component \u8a2d\u8a08**\\n\\n<div style={{width:70+\'%\'}}>\\n\\n![component_1](./component_1.png)\\n\\n</div>\\n\\n- **\u8996\u7a97 Component**\\n\\n    <div style={{width:70+\'%\'}}>\\n\\n  ![component_2](./component_2.png)\\n\\n    </div>\\n\\n  > | slot name | description |\\n  > | --------- | ----------- |\\n  > | content   | \u5167\u6587        |\\n  > | footer    | \u5e95\u90e8\u5167\u5bb9    |\\n\\n  > | props name | type   | default | description |\\n  > | ---------- | ------ | ------- | ----------- |\\n  > | title      | string | -       | \u8996\u7a97\u6a19\u984c    |\\n\\n- **\u8f38\u5165\u6846 Component**\\n\\n  > | props name  | type   | default | description |\\n  > | ----------- | ------ | ------- | ----------- |\\n  > | v-model     | string | -       | \u6578\u64da        |\\n  > | placeholder | string | -       | \u63d0\u793a\u6587\u5b57    |\\n\\n- **\u6309\u9215 Component**\\n\\n  > | props name      | type                 | default | description |\\n  > | --------------- | -------------------- | ------- | ----------- |\\n  > | name            | string               | -       | \u6309\u9215\u6587\u5b57    |\\n  > | backgroundColor | string               | #C8B09C | \u6309\u9215\u984f\u8272    |\\n  > | textColor       | string               | #FFFFFF | \u6587\u5b57\u984f\u8272    |\\n  > | size            | string (sm or empty) | -       | \u6309\u9215\u5c3a\u5bf8    |\\n  > | borderStyle     | string (style)       | -       | \u908a\u7dda\u6a23\u5f0f    |\\n\\n---\\n\\n<div style={{width:90+\'%\'}}>\\n\\n![component_3](./component_3.png)\\n\\n</div>\\n\\n- **\u5217\u8868 Component**\\n\\n  > | props name | type                     | default | description  |\\n  > | ---------- | ------------------------ | ------- | ------------ |\\n  > | title      | string                   | -       | \u5496\u5561\u5ef3\u540d\u7a31   |\\n  > | address    | string                   | -       | \u5496\u5561\u5ef3\u5730\u5740   |\\n  > | striped    | string(colored or light) | -       | \u5217\u8868\u984f\u8272\u5206\u9694 |\\n\\n- **\u5217\u8868\u6309\u9215 Component**\\n\\n  > | props name | type   | default | description |\\n  > | ---------- | ------ | ------- | ----------- |\\n  > | icon       | string | -       | icon \u540d\u7a31   |\\n\\n---\\n\\n**\uff082\uff09api \u4e32\u63a5\u65b9\u6cd5**\\n\\n\u4f7f\u7528\u65b9\u6cd5\uff1aaxios\\n\\n---\\n\\n## Demo \u756b\u9762\\n\\n![demo_1](./demo_1.png)\\n![demo_2](./demo_2.png)\\n![demo_3](./demo_3.png)\\n\\n---\\n\\n## Source Code\\n\\n### [Frontend](https://github.com/wendy60113/coffeeShopCollection)\\n\\n### [Backend](https://github.com/wendy60113/coffeeshopApi)"},{"id":"proj_4","metadata":{"permalink":"/portfolio/blog/proj_4","source":"@site/blog/2023-04-23-PaymentWeb/index.md","title":"\u4fe1\u7528\u5361\u8f38\u5165\u7db2\u9801\u52d5\u614b","description":"UIUX\u8a2d\u8a08 / \u7db2\u9801\u52d5\u614b","date":"2023-04-23T00:00:00.000Z","formattedDate":"April 23, 2023","tags":[{"label":"\u524d\u7aef\u7a0b\u5f0f","permalink":"/portfolio/blog/tags/\u524d\u7aef\u7a0b\u5f0f"},{"label":"UI/UX\u8a2d\u8a08","permalink":"/portfolio/blog/tags/ui-ux\u8a2d\u8a08"},{"label":"\u7db2\u9801\u8a2d\u8a08","permalink":"/portfolio/blog/tags/\u7db2\u9801\u8a2d\u8a08"}],"readingTime":0.04,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"proj_4","title":"\u4fe1\u7528\u5361\u8f38\u5165\u7db2\u9801\u52d5\u614b","test_image":"/portfolio/img/cover/creditcardweb01.jpg","banner_img":"/portfolio/img/banner/creditcardweb06.jpg","tags":["\u524d\u7aef\u7a0b\u5f0f","UI/UX\u8a2d\u8a08","\u7db2\u9801\u8a2d\u8a08"],"description":"UIUX\u8a2d\u8a08 / \u7db2\u9801\u52d5\u614b","tool":"Html / CSS / Reactjs / Figma"},"prevItem":{"title":"\u5496\u5561\u5ef3\u641c\u5c0b\u7db2\u9801","permalink":"/portfolio/blog/proj_5"},"nextItem":{"title":"\u7522\u54c1\u5f62\u8c61\u7db2\u7ad9","permalink":"/portfolio/blog/proj_3"}},"content":"## [Live Demo](https://wendy60113.github.io/web_payment/)\\n\\n![credit gif](./01.gif)\\n\\n## [Source Code](https://github.com/wendy60113/web_payment)"},{"id":"proj_3","metadata":{"permalink":"/portfolio/blog/proj_3","source":"@site/blog/2022-02-05-ProdBrandedWeb/index.md","title":"\u7522\u54c1\u5f62\u8c61\u7db2\u7ad9","description":"\u7db2\u9801\u5207\u7248","date":"2022-02-05T00:00:00.000Z","formattedDate":"February 5, 2022","tags":[{"label":"\u7db2\u9801\u8a2d\u8a08","permalink":"/portfolio/blog/tags/\u7db2\u9801\u8a2d\u8a08"},{"label":"\u524d\u7aef\u7a0b\u5f0f","permalink":"/portfolio/blog/tags/\u524d\u7aef\u7a0b\u5f0f"}],"readingTime":0.015,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"proj_3","title":"\u7522\u54c1\u5f62\u8c61\u7db2\u7ad9","test_image":"/portfolio/img/cover/ProdWeb.jpg","banner_img":"/portfolio/img/banner/ProdWeb.jpg","tags":["\u7db2\u9801\u8a2d\u8a08","\u524d\u7aef\u7a0b\u5f0f"],"description":"\u7db2\u9801\u5207\u7248","tool":"Html / CSS / Javascript / Reactjs / jQuery"},"prevItem":{"title":"\u4fe1\u7528\u5361\u8f38\u5165\u7db2\u9801\u52d5\u614b","permalink":"/portfolio/blog/proj_4"},"nextItem":{"title":"\u6e2c\u9a57\u7db2\u9801","permalink":"/portfolio/blog/proj_2"}},"content":"## [Live Demo](https://www.17buy.com.tw/EDM/Youtor.html)"},{"id":"proj_2","metadata":{"permalink":"/portfolio/blog/proj_2","source":"@site/blog/2022-02-04-TestYourGrammar/index.md","title":"\u6e2c\u9a57\u7db2\u9801","description":"UIUX\u8a2d\u8a08 / \u524d\u7aef\u7db2\u9801\u5207\u7248 / \u6e2c\u9a57\u898f\u5247\u7a0b\u5f0f\u64b0\u5beb","date":"2022-02-04T00:00:00.000Z","formattedDate":"February 4, 2022","tags":[{"label":"\u524d\u7aef\u7a0b\u5f0f","permalink":"/portfolio/blog/tags/\u524d\u7aef\u7a0b\u5f0f"},{"label":"UI/UX\u8a2d\u8a08","permalink":"/portfolio/blog/tags/ui-ux\u8a2d\u8a08"},{"label":"\u7db2\u9801\u8a2d\u8a08","permalink":"/portfolio/blog/tags/\u7db2\u9801\u8a2d\u8a08"}],"readingTime":0.15,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"proj_2","title":"\u6e2c\u9a57\u7db2\u9801","test_image":"/portfolio/img/cover/Exam.jpg","banner_img":"/portfolio/img/banner/Exam.jpg","tags":["\u524d\u7aef\u7a0b\u5f0f","UI/UX\u8a2d\u8a08","\u7db2\u9801\u8a2d\u8a08"],"description":"UIUX\u8a2d\u8a08 / \u524d\u7aef\u7db2\u9801\u5207\u7248 / \u6e2c\u9a57\u898f\u5247\u7a0b\u5f0f\u64b0\u5beb","tool":"Html / CSS / Javascript / Reactjs / Figma / Illustrator"},"prevItem":{"title":"\u7522\u54c1\u5f62\u8c61\u7db2\u7ad9","permalink":"/portfolio/blog/proj_3"},"nextItem":{"title":"\u6578\u4f4d\u5b78\u7fd2APP\u8a2d\u8a08","permalink":"/portfolio/blog/proj_1"}},"content":"## [Live Demo](https://tryitya.netlify.app/#/)\\n\\n---\\n\\n## Introduction\\n\\n### Functional Map\\n\\n![Exam Pic](./exam_f-03.jpg)\\n\\n### Flow Chart\\n\\n![Exam Pic](./exam_f-07.jpg)\\n\\n### Design System\\n\\n![Exam Pic](./exam_f-04.jpg)\\n\\n### Wireframes\\n\\n![Exam Pic](./exam_f-05.jpg)\\n\\n### Visual Design\\n\\n![Exam Pic](./exam_f-08.jpg)"},{"id":"proj_1","metadata":{"permalink":"/portfolio/blog/proj_1","source":"@site/blog/2022-02-01-UIUXApp/index.md","title":"\u6578\u4f4d\u5b78\u7fd2APP\u8a2d\u8a08","description":"UIUX\u8a2d\u8a08\u3001\u5c08\u6848\u6642\u7a0b\u7ba1\u7406","date":"2022-02-01T00:00:00.000Z","formattedDate":"February 1, 2022","tags":[{"label":"UI/UX\u8a2d\u8a08","permalink":"/portfolio/blog/tags/ui-ux\u8a2d\u8a08"}],"readingTime":0.055,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"proj_1","title":"\u6578\u4f4d\u5b78\u7fd2APP\u8a2d\u8a08","test_image":"/portfolio/img/cover/UIUXApp.jpg","banner_img":"/portfolio/img/banner/UIUXApp.jpg","tags":["UI/UX\u8a2d\u8a08"],"description":"UIUX\u8a2d\u8a08\u3001\u5c08\u6848\u6642\u7a0b\u7ba1\u7406","tool":"Adobe XD"},"prevItem":{"title":"\u6e2c\u9a57\u7db2\u9801","permalink":"/portfolio/blog/proj_2"}},"content":"## User Story Map\\n\\n![UIUX pic](./YoutorApp-03.jpg)\\n\\n## Functional Map\\n\\n![UIUX pic](./YoutorApp-08.jpg)"}]}')}}]);