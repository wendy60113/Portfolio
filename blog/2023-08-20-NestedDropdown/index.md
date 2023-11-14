---
slug: nesteddropdown
title: NPM-巢狀選單元件
test_image: /portfolio/img/cover/nesteddropdown01.jpg
banner_img: /portfolio/img/banner/nesteddropdown06.jpg
tags: [前端程式, UI/UX設計]
description: 前端程式 / npm上架 / UI/UX設計
tool: npm / vuejs / BootstrapVue
---

# bootstrapVue-nesteddropdown

> This example depends on BootstrapVue. Before using this example, please install BootstrapVue.

## Demo

[Demo Website](https://wendy60113.github.io/bootstrapvue-nesteddropdown/)

## Installation

```sh
npm i bootstrapvue-nesteddropdown
```

```sh
npm install vue bootstrap bootstrap-vue
```

## Usage

#### Import BootstrapVue

```sh
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
```

#### Import Component

```sh
import NestedDropdown from 'bootstrapvue-nesteddropdown'
import 'bootstrapvue-nesteddropdown/dist/NestedDropdown.css';
Vue.component('NestedDropdown', NestedDropdown);
```

## Props API

|  props  |  type  | Required | Default |
| :-----: | :----: | :------: | :-----: |
| v-model | string |   yes    |    -    |
| option  | Array  |   yes    |   []    |

**'option'** is an object containing an array. The value of the property with the key **'title'** represents the first level of the **'option'**. The value of the property with the key **'content'** is an array, this array represents the second level of the corresponding **'title'**.

ex :

```javascript
[
  {
    title: "First Title",
    content: ["First Action", "Second Action"],
  },
  {
    title: "Second Title",
    content: ["First Content", "Second Content", "Third Content"],
  },
];
```
