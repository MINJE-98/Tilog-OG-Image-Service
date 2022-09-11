# TILog-OG-Image-Service

해당 레포지토리는 [og-image](https://github.com/vercel/og-image)를 Fork하였습니다.

## 개요

TILog의 Post는 이미지가 없을시 PostID에 따라 기본 이미지를 제공합니다.

metadata의 OpenGraph Image에 Post의 기본이미지를 제공하고, 다른 페이지의 OG Image를 지원하기위해 사용합니다.

## 추가한 기능

seed QueryString을 추가하여 PostID에 대응하여 이미지 생성 기능 추가

## 사용방법

```
https://og.tilog.link/텍스트 내용(markdown 사용가능).png?md=1&fontSize={폰트 사이즈(px)}&seed={postID값}&images={이미지 URL}

OR

https://og.tilog.link/ 접속

```

## 예제 이미지

![틸로그 메인이미지](https://og.tilog.link/.png?md=1&fontSize=90px&seed=3729&images=https://static.tilog.link/tilog-logo-white.svg)

![틸로그 메인이미지](https://og.tilog.link/오늘%20배운것을%20기록하고,%20남들과%20공유해보세요.🤩.png?md=1&fontSize=50px&seed=3729&images=https://static.tilog.link/tilog-logo-white.svg)

![TypeScript](https://og.tilog.link/**TypeScript**.png?md=1&fontSize=100px&seed=3)
