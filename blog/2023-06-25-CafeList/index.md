---
slug: 咖啡廳搜尋網頁
title: 咖啡廳搜尋網頁
test_image: /portfolio/img/cover/cafelist_01.jpg
banner_img: /portfolio/img/banner/cafelist_06.jpg
tags: [資料庫設計, 前端程式, UI/UX設計, 網頁設計]
description: 資料庫設計 / api文件撰寫 / UI/UX設計 / 網頁設計
tool: mySql / nodejs / RESTful API / Html / CSS / Vuejs / Figma
---

## Introduction

### Functional Map

```mermaid
graph LR;
    A[咖啡廳搜尋網頁]-->B[首頁];
    B-->E[前往咖啡廳列表]
    B-->F[前往我的最愛]
    B-->G[推薦清單]
    B-->H[查看更多]

    A-->C[咖啡廳列表]
    C-->I[新增咖啡廳]
    C-->J[咖啡廳資訊]
    J-->K[編輯資訊]
    J-->M[刪除資訊]
    J-->L[加入我的最愛]

    A-->D[我的最愛]
    D-->J[咖啡廳資訊]

```

---

### Flow Chart

```mermaid
flowchart TD
title[首頁] --> goList([前往列表]) --route--> list[列表]
title[首頁] --> goLike([前往我的最愛]) --route--> like[我的最愛]
title[首頁] --> random[隨機推薦] --> more([查看更多]) --route--> list[列表]
list[列表] --> goShop([查看店家])
list[列表] --> addshop([新增店家]) --call_api--> addshopInfo[新增店家資訊]
shop[店家資訊] --> edit[編輯資訊]
shop[店家資訊] --> delet[刪除資訊]
shop[店家資訊] --> addlike[加入我的最愛]
like[我的最愛] --> goShop([查看店家])
goShop([查看店家]) --call_api--> shop[店家資訊]
```

---

## API 文件

**Base URL: `https://localhost:3000/api`**

| API            | Method | URL              |
| -------------- | ------ | ---------------- |
| 咖啡廳資料表   |
| 檢視資料列表   | GET    | api/cafeshop     |
| 查詢單筆資料   | GET    | api/cafeshop/:id |
| 新增資料       | POST   | api/cafeshop     |
| 編輯資料       | PUT    | api/cafeshop/:id |
| 刪除資料       | DELETE | api/cafeshop/:id |
| 我的最愛資料表 |
| 檢視資料列表   | GET    | api/favorite     |
| 新增資料       | POST   | api/favorite     |
| 刪除資料       | DELETE | api/favorite/:id |

**咖啡廳資料**

**API:**
查詢咖啡廳資料列表  
**URL:**
https://localhost:3000/api/cafeshop  
**Method :**
GET

**Response Body :**

| Props     | Type    | Required | Default |
| --------- | ------- | -------- | ------- |
| id        | string  | -        | auto    |
| name      | string  | -        | -       |
| address   | string  | -        | -       |
| latitude  | integer | -        | -       |
| longitude | integer | -        | -       |

---

**API :** 查詢咖啡廳單筆資料  
 **URL :** https://localhost:3000/api/cafeshop/:id  
 **Method :** GET

**Response Body :**

| Props     | Type    | Required | Default |
| --------- | ------- | -------- | ------- |
| id        | string  | -        | -       |
| name      | string  | -        | -       |
| address   | string  | -        | -       |
| latitude  | integer | -        | -       |
| longitude | integer | -        | -       |

---

**API:** 新增咖啡廳資料  
**URL:** https://localhost:3000/api/cafeshop  
**Method :** POST

**Request Body :**

| Props   | Type   | Required | Default |
| ------- | ------ | -------- | ------- |
| id      | string | auto     | -       |
| name    | string | yes      | -       |
| address | string | yes      | -       |

---

**API:** 編輯咖啡廳資料  
**URL:** https://localhost:3000/api/cafeshop/:id  
**Method :** PUT  
**Request Body :**

| Props     | Type    | Required | Default | Remark               |
| --------- | ------- | -------- | ------- | -------------------- |
| id        | string  | yes      | -       |                      |
| name      | string  | no       | -       |                      |
| address   | string  | no       | -       |                      |
| latitude  | integer | no       | -       | address 更新自動更新 |
| longitude | integer | no       | -       | address 更新自動更新 |

---

**API:** 刪除咖啡廳資料  
**URL:** https://localhost:3000/api/cafeshop/:id  
**Method :** DELETE

---

**我的最愛資料**

**API:** 檢視我的最愛列表  
**URL:** https://localhost:3000/api/favorite  
**Method :** GET  
**Response Body :**

| Props      |           | Type    | Required | Default |
| ---------- | --------- | ------- | -------- | ------- |
| id         |           | string  | -        | -       |
| cafeshopId |           | string  | -        | -       |
| cafeList   |           | object  | -        | -       |
|            | name      | string  | -        | -       |
|            | address   | string  | -        | -       |
|            | latitude  | integer | -        | -       |
|            | longitude | integer | -        | -       |

---

**API:** 新增我的最愛  
**URL:** https://localhost:3000/api/favorite  
**Method :** POST  
**Request Body :**

| Props      | Type   | Required | Default |
| ---------- | ------ | -------- | ------- |
| id         | string | auto     | -       |
| cafeshopId | string | yes      | -       |

---

**API:** 刪除我的最愛  
**URL:** https://localhost:3000/favorite/:id  
**Method :** DELETE
