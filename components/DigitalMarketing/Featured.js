import React, { Component, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
  colors,
  useTheme,
} from "@mui/material";
import { Close } from "@material-ui/icons";

export default function Featured() {
  const theme = useTheme();

  const chipColors = [
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ];
  const ClientDetails = [
    {
      tagLine: "Revolutionalizing the way people interact online with Chatto",
      titleImg:
        "https://www.upwork.com/att/download/portfolio/persons/uid/1697294443237502976/profile/projects/files/62588a42-92df-4299-ae4b-d861f8a1b416",
      dialogData: {
        title: "Product Chatto",
        techstack: [
          {
            name: "Next.JS",
            logo: "https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg",
          },
          {
            name: "PWA",
            logo: "https://felipemateus.com/wp-content/uploads/2022/03/pwa-logo.png",
          },
          {
            name: "MySql",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/1448px-Database-mysql.svg.png",
          },
          {
            name: "Sequelize",
            logo: "https://pbs.twimg.com/profile_images/1509802359383367691/R0psIpR4_400x400.jpg",
          },
          {
            name: "Electron",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png",
          },
          {
            name: "CI/CD",
            logo: "https://d1.awsstatic.com/Projects/CI_CD_Pipeline_HERO-ART_SM.42db75e47b4d32ad3b6e37865fcb52de7de1beec.png",
          },
          {
            name: "Vercel Cloud Compute",
            logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
          },
          {
            name: "Webflow",
            logo: "https://yt3.googleusercontent.com/sY8Sgkv2msaC_iVJQ3tf1U5ybIqkuZMWH9nilQUQt0n9192f7J57JkCwOsr5pn91Z0q4UNKyLA=s900-c-k-c0x00ffffff-no-rj",
          },
          {
            name: "Flutter",
            logo: "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
          },
        ],
        dialogImg:
          "https://www.upwork.com/att/download/portfolio/persons/uid/1697294443237502976/profile/projects/files/62588a42-92df-4299-ae4b-d861f8a1b416",
        dialogDetails:
          "Chatto is einfonets own invention. A contemporary web application blending Next.js and MySQL for effortless communication. From instant messaging to AI features, Chatto redefines online interaction.  It provides users with seamless messaging capabilities and advanced AI features, enhancing their online interactions. Through its intuitive interface and robust backend infrastructure, Chatto offers a reliable platform for effective communication and collaboration in various contexts.",
      },
    },
    {
      tagLine: "Reinventing ways of doing things with on2cook",
      titleImg:
        "data:image/png;base64,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",
      dialogData: {
        title: "Project and Partner on2cook",
        techstack: [
          {
            name: "Android Native",
            logo: "https://miro.medium.com/v2/resize:fit:324/1*XwETOHbx50_CT4tRbbBdog.png",
          },
          {
            name: "Hive",
            logo: "https://avatars.githubusercontent.com/u/55202745?s=200&v=4",
          },
          {
            name: "Firebase",
            logo: "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png",
          },
          {
            name: "Firmware",
            logo: "https://static.thenounproject.com/png/3558883-200.png",
          },
          {
            name: "React Native Paper",
            logo: "https://arpitbhalla.gallerycdn.vsassets.io/extensions/arpitbhalla/rnp-snippets/0.0.1/1620141921636/Microsoft.VisualStudio.Services.Icons.Default",
          },
          {
            name: "React Native",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          },
        ],
        dialogImg:
          "data:image/png;base64,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",
        dialogDetails:
          "On2Cook, a popular recipe-sharing app, faced issues with slow performance and user engagement plateauing. Our team revamped the app by optimizing its code, implementing server load balancing, and adding efficient caching. For user engagement, we personalized recipe recommendations and improved social interaction. We also integrated advanced features, such as device queuing for recipes and background processing for orders. These changes resulted in faster performance, a 30% increase in performance, and solidified On2Cook's competitive edge.",
      },
    },

    {
      tagLine:
        "Streamlined video conferencing for eInfochips, making it effortless",
      titleImg:
        "https://s3.amazonaws.com/info-mongodb-com/_com_assets/media/einfochips_logo.png",
      dialogData: {
        title: "Partner einfochips",
        techstack: [
          {
            name: "React",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          },
          {
            name: "MUI",
            logo: "https://v4.mui.com/static/logo.png",
          },
          {
            name: "AWS Lambda Function",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/1200px-Amazon_Lambda_architecture_logo.svg.png",
          },
          {
            name: "CI/CD",
            logo: "https://d1.awsstatic.com/Projects/CI_CD_Pipeline_HERO-ART_SM.42db75e47b4d32ad3b6e37865fcb52de7de1beec.png",
          },
          {
            name: "Zapier",
            logo: "https://www.drupal.org/files/_brand_assets_images_logos_zapier-logomark.png",
          },
          {
            name: "Webhooks",
            logo: "https://cdn-icons-png.flaticon.com/512/919/919829.png",
          },
          {
            name: "AWS Code deploy and pipeline",
            logo: "https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2018/02/28/aws_codedeploy.png",
          },
        ],
        dialogImg:
          "https://s3.amazonaws.com/info-mongodb-com/_com_assets/media/einfochips_logo.png",
        dialogDetails:
          "In our strategic partnership with eInfochips, we developed a state-of-the-art video conferencing app. By leveraging cutting-edge technologies and our combined expertise, we aimed to redefine the way businesses connect and collaborate. This collaboration represents a fusion of creativity, technical prowess, and a shared vision to create a seamless, efficient, and secure video conferencing experience that meets the evolving needs of today's digital landscape.",
      },
    },
    {
      tagLine: "Helping Ourco building platform that connects communities",
      titleImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAAh1BMVEX///8DAwAAAADExMRhYWHPz8+2trZdXVyJiYjt7e38/Pz39/fJycnw8PD09PSRkZFubm7o6OiCgoK4uLh0dHTa2tqjo6PV1dUeHh19fXzg4ODY2Nitra2ampowMC8WFhVFRUQsLCtMTEs2NjU9PTwaGhkQEA4kJCNgYF9KSklUVFOdnZ2pqai3qJ/zAAAOfElEQVR4nO1d52LqOgxuHQiEnUEoXCizcAp9/+e7hBFJtuwkJYtz+P6Vxon9eUjWsN/eXnjhhRdeeOGFF17IiE53bNnz09CbBlNvuJjbvjXuVl2pWmAyD1pbweHrOP3pDaquX3XoW+3djYp3Fbf/LAN7VnVFy0enOfzUEaOwtPesf2mqda3RPg01eBw1/H+EoeboPT01mKKgWXXVC0cn/MzOTczQZ/hXDyHH+y03MUPtv1aWuaPHyLkR5DlVN6QIGMhh1R7Dw9N+1Y3JG4OpSbvZbxvt8MfvTZrNnuXb4cJrbZcmjWjYqbpBuWLONjRq/mEaTlxuwe24zZNO/p+1Rb/0NhSG2UptY9TudbuXNE1cP2AZEuLbLaXuxaPNknMM0y6xs3DFMCTEotBal4TZWm7aua2reTb57C62CkPntzz/AAoZcoL/fvGiZoshaJ57fUtFtyU16dzE028Vu1kgEyTEKNfqloz/VHJ+HnlfX9G6xfp5lUSbtuXctPDRVw5kgoTo5VHVCkAlVl7KnNOQ+XloQFaGkcTOn7zkjHWQ3uzl9OIS0VlJfZyjmtuRx2WQ37vLQXdNG9DK11Az+aLkP5kAG+wpO/nrJ9LUbeX+gQIxoGNnW4R2az8tP50tqnlhK8PsQPh5nvn1TdgpbOfYPRJ+nkV+tQg7RRpmAsLPwzpnKZgSdiaFfmtYWk/khR9S46IdwNggIMS44K89jiapb/EGmR/8vfe6e3n67+WyI42f7xI++AhW5Y/1E57Nw1I++VsMMTvFrsoAD/NTZz/8BAZ6mXKkgTplX18vfAfpsaX6EZCWXmPtGY1y0Sjzw308aq0yv5wBSKaLdXWfXtbUwbxGXVh2POACDdx2yd9OB1xDu/SvtyrsmzTA87+C5RF//lj+5xMRoO6rQrjaaPDWz7czQ71Xzc55AxXYVlIBE/5UPrbdyjtIjzGaWlWFtoFsEIeKqqADEhzV7Qo/oRLli04T7itPFMlV3abHAno+K6sEh5G4keNZVUZMgDmlVlsL5zx4ztz8qdqa0KtcPrBYRJNqWoNIGzR8ahRYF2XM1IAcsvrUZ+fVEx91meqxxUmI2mzcG43aVMWun2zvyO7JiT+cBqPRKPD8suzNMWD4bBKeHPR+vEsth3YzmwNo4rejgqNgYWX1NriLDU0c2Q0NYbp2/JjeQ96MnyFRGBbz82AOkbBmN5LlLUktP9opO3I8XNH2HX/Sr7rWUQ7xv2SULHSqItCjX0mBHmKgVelxp+Tjep97v60kIpz//loktrMTLrn2HdOtvBaf6Re9QWOYj5cKIz33ZyR67j9f6enIOT86n2C3ra2lZ9b4Qz7LM8oOSSbIOeqT2YRGtuVHz/hDjZlnR4O111bz/A+DpchSsh9wyWPC0PPNmX5ntbFIerivs7JraqwmX8sLvKT2GY0oTNqN/IK1OnTzosdmB71q0+2uEmu5YydY9zOpfcYouJFcmMnCEktFluREz4StuxBKI7fKBFTzWNaMlHc+0rRvo1P/GkIuGgP//iVbynKh588bn02nuizI2NHWcqdUYfCRpqB2HzylpT+8+djpDxzXWtBENbGV+M2FntGQ6ZyP7fa4kRZaPMTPj2zCZlRLZyKl0ynrjxRKKlZDy3UGfWdse1KAPuui8UnpFZFRM7IWyuVzoWezp7U/RL3DvGhOHmvjme4MSS2NtAZkTFo7UpIJ4EYuJm4Bd3AmqSRN8qDnHTvYxdHWSVgXV+MoT/NugP3Q5F9z3Lxv5fU+ab6qqrfwZ7ndyxA3gAiGXOhB5LQN2gcOc+G2MEj6iRP6vYtrz6m3fRzzpSw/qJ469yj+ckD/kR89Z6XXtLPEsUf8Bg+GgdijNXKE2NHoNniAyIolrFt6C2aIPoE7OEd6xKd594y8hLoEA1jiEQ/YfaZNDdnBMyv6H2TfFfreQ44eTER+9CQlVczQ0NBWM+5p9DaQyobQAcwhHT6o4YZ9GUxgYsbLjR6u6n13BkS0oZr67MGeWklNxWXA8n1WwxAcKG50DoQsi3nRQ8dOpzlsrK/GmPg3qCYVSxTL+Km7kcpOMbUifAKLeHAi2oxunO4718qc6BFfRB7OYp02VoAnUE1T0GMQl7wbi+K0FvFhah6mEa/fsbhkdHGCeHSLLxik+dAjpJ6JFTHxfv8U8r+bLA9d547bEBjAqDsZyp1HLHQ/ls1pi7/9BxUEtTMneuQ4z7saDctFvEJmdC9PYM4kOM4CeBJ+dKHRCVbpTrytQ2tjTvTIn4ZP3Scd9GK2tK9T2smBtXhYfHocZzygAyGGI59NhRIGCwL61uUDfmVIRsBOGQ4Otwj/pGYXlC4kZvKhR5nWcTrifVw14eFsrqV4v5CcLQwDFHqgnZpdRMWW+e0RehRPEQzUpvRw1iwhmKaJxnYQ7dBd0/RzGqoIsVu5GDTUiCIQpzcV1jc8bMRSJlqPFtOWDPTAMgWKWS70qArJSO7zX9MTm5KSJ2XAUJGBHmjmPv4tF3pUf1YR9CSOHqACrI0e85sGVlGjR93MjOTJhWZitsDQpfwmPbjRA+Loj6HkBdCDIIhz9JJiKEsz0j+yZRRAREOiQhBbTNC2xTasABJAw4LYiTT09LLTowh2FFecLcAP2pywKeAFO3RtolrYYAafzfwmY56dHpCxNzHeTbnvVuDxH2fQ4XqA1RV5xPlMKHQC6NGbmtrZ6TFtKhLXSILYDpOYoYbMgmh5g+8mhHvPODUO1qOVtuAxOz333TNsSWHoJi4CBOxGmkWbnUcgJBLyPGARR1s2oGevK9cRmemJTXTwVmTQyKQ2I4NGQnIsTA68f7DTzq4l1xwkUXS1Bh9janpiuzKMSWQOM43ySXt4w30PAULwy9g8NLewjOunNKbC0RrYE4hmnG7JPGanh5N1InmcvkVk3HGnJ60xdcVNjjeSqWTYtaEpgvVW9LNmxw+TPz09oEIw+qtplsQOBxjMKU3xujGObQWGFHvkSyOiY5c0N3e/oAekMRjekCNHb06FBRzkFHLk6I0SAzClyu1ALdROLzS1qARAH2eXdnJAT1p64hrhncAxuZo+tw7P0rgBkY9xJf0rhRMZeemlLsCFmTWTRH2lpgdaidZ77ETmdR88wFBBnCSr2VmgBUbdm2EPc4ubnyfsxJe2hPhfSufQiMG09IyhlfhnHILATZOxJpWaHLHABQPjM8wYJYwGsCjrs7PB/5cpmOKydOPVuYYGZZZcoIqTWeTgaqyU9Yf0IdEySADLJiGAhTEI0PCnFlmb3LZ+fkSYkZcv/Xj0OYvrf0RmesCyQOmmx3YNSTstHFop748btCDhrknClXnhLQXPHTx/dgme68nBc5/q3BvRsvtg3mw2/cXxXlBk3nOBAipV9g9ppmj9/Oc4g4Eztqd7WkvphZ1PWnC16F2C52a+R6OpdXaHBm2jLqhxz6jGffLIu1xQfI8z0hO73lQJvmWqqUSnMoLfXaZrn3Zf3SJtvL1D+YndOFimiOFzmUlGemCTraRrDw5Cfr0auMtZlV2mMepPhrMxzNHml9JrjR2zbaLnJ7O1EHb4qg1psEusJe/t7a+TCxpdWWxgOi6t51ZLrYh0oYz0oE0gt04GxmoKsdPZos0FNTIfwd3oX3Beck1utCFf8vrJjPSAcZEPVjOmnJi284aCkcBPtpP46l0bt6+KhTmd0lLyaaJiHxcNNCM9G92ku6Orv83o2xhG0VkwC861YIqEpUudd8obogj1MDEZUf509NfpSmnqdLcLYBHV75BcNt1NjBI9fYPwgyu4Sx/WMDttqOD7SpmG2LGPuNgx/mSGZMk3YpQ0ebSsQFCMUl7NOGl/0ILHMMHK2pXzpib+8JqK2rabmXKUe+E0Kjed/+aWmCvek+ZWDPeeaust/EzOr07TzpRq2/Jqk6iN4jZqc4ZPT6xLT8jWAEw99Unzjw6JqMd9fcjins2fVShO0Rrl1YAgFINeo9P5BtedXaPqA2rQ4EmM5SsTFxNLpBJUe7wRsifX5cyTC/DhWNUdSI5ccTU7Ww1N+urui0CpUzW7FQ/s2NUdWTqv7eDB9sKqVkWIFqiRSnhHKm9ZoUDOpvodCor9nZWce4kdivU7UpaM7Qpug8Kfr9OhfDHwcdbl3+aDfaA1UpgRDmh6lX1bTYjYqelNVD18jkC5+2V8lP6+Plt1CnRdVrnz/ykuYnjrImdiqecS4xipGl/CCZueUrUf5KYXh7pOrQj4npPStA9yb1G9bzD7xFX9vUE9C0I8ZGt+PzI5JKcUBYRc71bqzTy/gVUyP4SdWi88V9DLHov2YNCrE2t0hLUW9KStYrUQ2hc13IkyWJE6F3lsMr22tWYWQh06a8JPYaeSdzeEnTKvk3sI5BTE3O9iv2NG7mSvs7Ysw6GhiocidLV5yqjHOsKRrqvPXVvrjJ6YnfP8kkJdlWMUH0OPBiHVyaGeDlKMLJMw8Xt0aaymMSKwrqByJQpOzEuFtpYSO89xEbsM6QznnDrZlc5cf45r2Dks5Ia8P7xED+RTxetuwjBBzgcQDy5BA/mSACFWdb+C3QR3pxC0T47i1b1MCUguUCUvCcoB/VGg3W/mg9VSs0OMofbPgZ7cqIigXZgtSmrWPjCpM41nnlh3dBtcQoA4ztNqipMhk4wgirUFlIneF0uQ2A4Trzaa/YzYRAYhgvreS58ZC20uynoaTlzOBtqfWafrmQ1cwV1dAqnzQT/QpsGcsfzcBKefuW/1mj3Lt8Nw+n24pSywZfZ/y7wCjDd8Y2OOFGgfTsh+elI0v7VtTo3zG4Z/g7xiMWk8RFCU/hT+lSPnDrf9/luGosyt51cDE2E19AuLiZuD9wxurBzQn68May9HjfiaZkuce3I4/igVQ5eH1qbLKf9ajMORQYTf/rWtNomlYri9U3Dcs2rPtuHZ/+KoUdGdWXY4nAZXeAvbb/b/paXmhRdeeOGFF1544ZnxP6Jkr0GXSXaVAAAAAElFTkSuQmCC",
      dialogData: {
        title: "Project Ourco",
        techstack: [
          {
            name: "React Native",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          },
          {
            name: "Sqlite",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png",
          },
          {
            name: "React Native Paper",
            logo: "https://arpitbhalla.gallerycdn.vsassets.io/extensions/arpitbhalla/rnp-snippets/0.0.1/1620141921636/Microsoft.VisualStudio.Services.Icons.Default",
          },
          {
            name: "AWS",
            logo: "https://it-visionary.com/wp-content/uploads/2022/10/AWS-logo-2.jpg",
          },
        ],
        dialogImg:
          "data:image/png;base64,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",
        dialogDetails:
          "Partnering with Ourco, we crafted a tailored app that reflects their essence. Our team's expertise led to an intuitive, high-performance app, streamlining user engagement and embodying Ourco's values seamlessly. With this collaboration, we've turned ideas into a dynamic digital reality.",
      },
    },

    {
      tagLine: "Helping Vidon building platform that connects people worldwide",
      titleImg: "https://vid-on.us/images/logo.png",
      dialogData: {
        title: "Project Vidon",
        techstack: [
          {
            name: "ejs",
            logo: "https://static-00.iconduck.com/assets.00/ejs-icon-512x275-qg030i6v.png",
          },
          {
            name: "React",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          },
          {
            name: "React Native Paper",
            logo: "https://arpitbhalla.gallerycdn.vsassets.io/extensions/arpitbhalla/rnp-snippets/0.0.1/1620141921636/Microsoft.VisualStudio.Services.Icons.Default",
          },
          {
            name: "React Native",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          },
          {
            name: "Jitsi",
            logo: "https://assets.mofoprod.net/network/images/jitsi_logo.original.jpg",
          },
          {
            name: "webRTC",
            logo: "https://www.scientiamobile.com/wp-content/uploads/2018/04/WebRTC-740-fi.png",
          },
          {
            name: "swift",
            logo: "https://www.macworld.com/wp-content/uploads/2023/01/swift_1200home-1.jpg?quality=50&strip=all&w=1024",
          },
          {
            name: "Android Native",
            logo: "https://miro.medium.com/v2/resize:fit:324/1*XwETOHbx50_CT4tRbbBdog.png",
          },
          {
            name: "Node JS",
            logo: "https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png",
          },
          {
            name: "VPS management",
            logo: "https://cdn-icons-png.flaticon.com/512/10644/10644935.png",
          },
          {
            name: "Deployment",
            logo: "https://cdn.lynda.com/course/421800/421800-637199599552245144-16x9.jpg",
          },
          {
            name: "CI/CD",
            logo: "https://w7.pngwing.com/pngs/254/295/png-transparent-continuous-integration-software-deployment-software-testing-ci-cd-agile-software-development-others-blue-text-trademark.png",
          },
        ],
        dialogImg: "https://vid-on.us/images/logo.png",
        dialogDetails:
          "Our team embarked on a journey to develop a versatile video meetings app for Vidon, catering to users across web, iOS, and Android platforms. To achieve this, we employed a combination of cutting-edge technologies, including Jitsi and WebRTC, to craft innovative solutions that would redefine the video conferencing experience. WebRTC technology played a pivotal role in enabling Vidon's video meetings to function effortlessly through web browsers, iOS devices, and Android smartphones, ensuring that users could participate in meetings from virtually anywher",
      },
    },
    {
      tagLine: "Empowering Infonet with Top-tier Development Resources",
      titleImg: "/images/marketing-agency/infonet.jpg",
      dialogData: {
        title: "Partner INFONET",
        dialogImg: "/images/marketing-agency/infonet.jpg",
        techstack: [
          {
            name: "React",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          },
          {
            name: "Qb Library",
            logo: "https://cdn.icon-icons.com/icons2/3405/PNG/512/gui_icon_216170.png",
          },
          {
            name: "MUI",
            logo: "https://v4.mui.com/static/logo.png",
          },
          {
            name: "Jenkins",
            logo: "https://www.jenkins.io/images/gsoc/opengraph.png",
          },
          {
            name: "Python",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
          },
          {
            name: "Full-Stack",
            logo: "https://www.pngitem.com/pimgs/m/464-4644556_full-stack-icon-png-transparent-png.png",
          },
        ],
        dialogDetails:
          "einfonets is proud to partner with Infonet, a leading technology solutions provider, to deliver exceptional development services that meet their unique business needs. Our partnership allows Infonet to access highly-skilled developers who can provide customized solutions to meet their project requirements. Our flexible engagement models allow Infonet to access development resources on-demand, ensuring that they have the resources they need to deliver projects on-time and within budget. Whether it's a dedicated team or staff augmentation services, our resources can seamlessly integrate with Infonet's existing teams to deliver exceptional results.",
      },
    },
    {
      tagLine:
        "Elevating OCR's Impact: Revolutionizing Online Casino Reviews Together",
      titleImg: "https://ocr.alkurn.co.in/static/media/logo.50463c0a.png",
      dialogData: {
        title: "Project OCR",
        techstack: [
          {
            name: "MySql",
            logo: "https://pipedream.com/s.v0/app_1YMhwo/logo/orig",
          },
          {
            name: "Laravel",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
          },
          {
            name: "HTML5",
            logo: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png",
          },
          {
            name: "CSS3",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
          },
          {
            name: "Stripe",
            logo: "https://pbs.twimg.com/profile_images/1618575477781807105/iDuRlqTe_400x400.jpg",
          },
          {
            name: "Deployment",
            logo: "https://cdn.lynda.com/course/421800/421800-637199599552245144-16x9.jpg",
          },
        ],
        dialogImg: "https://ocr.alkurn.co.in/static/media/logo.50463c0a.png",
        dialogDetails:
          "Teaming up with OCR, we crafted a sleek online casino review website. Our expertise brought to life a user-friendly platform, offering insights into various casinos. OCR is now a trusted guide, enriching players with accurate reviews and ratings for informed online gambling.",
      },
    },
    {
      tagLine: "Helping Safmical Build a Robust E-commerce Platform",
      titleImg:
        "data:image/jpeg;base64,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",
      dialogData: {
        title: "Project Safmical",
        techstack: [
          {
            name: "React",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          },
          {
            name: "Bootstrap",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
          },
          {
            name: "Laravel",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
          },
          {
            name: "HTML5",
            logo: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png",
          },
          {
            name: "CSS3",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
          },
        ],
        dialogImg:
          "data:image/jpeg;base64,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",
        dialogDetails:
          "Safmical, a leading retailer, approached einfonets with a vision to take their online retail business to new heights. Our team collaborated closely with Safmical to understand their business requirements and design a customized e-commerce platform to meet their needs. We are proud to have partnered with Safmical to deliver a customized e-commerce solution that revolutionized their online retail business. Our collaboration has helped Safmical achieve its business objectives and position itself as a leader in the online retail space.",
      },
    },
    {
      tagLine: "Bringing Rentech's idea to reality",
      titleImg: "/images/marketing-agency/Project.png",
      dialogData: {
        title: "Partner Ren Tech",
        dialogImg: "/images/marketing-agency/Project.png",
        techstack: [
          {
            name: "VueJS",
            logo: "https://vuejs.org/images/logo.png",
          },
          {
            name: "PWA",
            logo: "https://felipemateus.com/wp-content/uploads/2022/03/pwa-logo.png",
          },
          {
            name: "ChakraUI",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDcM4VsepX9Xp1r4a4SqDBLMQo1xNQ4ZvzCBi7mCHYnFKCswg8lCXDBQkW3JrPkMNlTE&usqp=CAU",
          },
          {
            name: "Flutter",
            logo: "https://yt3.googleusercontent.com/ytc/AOPolaQ4-CWs1qmtt_r7jqGLE0j82QjRG9KltN0hRIRN=s900-c-k-c0x00ffffff-no-rj",
          },
          {
            name: "NoSql",
            logo: "https://dotnetvibes.files.wordpress.com/2018/01/nosql-database.png",
          },
          {
            name: "Hive",
            logo: "https://avatars.githubusercontent.com/u/55202745?s=200&v=4",
          },
        ],
        dialogDetails:
          "At Rentech, we're proud to provide innovative web and mobile development solutions, as well as cutting-edge data visualization expertise to revolutionize the future of energy. Our team has worked closely with Rentech to design and develop dynamic, user-friendly applications that streamline workflows, optimize processes, and drive business growth. Whether they need a fully customized mobile app, a powerful web platform, or advanced data visualization tools, we help them achieve their goals and drive their business forward.",
      },
    },

    {
      tagLine: "Tailoring Themes, Crafting Clonetto's vision",
      titleImg: "/images/clients/clonetto.png",
      dialogData: {
        title: "Project Clonetto",
        dialogImg: "/images/clients/clonetto.png",
        techstack: [
          {
            name: "React",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          },
          {
            name: "PWA",
            logo: "https://felipemateus.com/wp-content/uploads/2022/03/pwa-logo.png",
          },
          {
            name: "Tailwind CSS",
            logo: "data:image/png;base64,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",
          },
          {
            name: "Pl Sql",
            logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEX////4AAChvcy5ztmKrb94nrL7lpb7m5udu8qtxdL4IyPO2+T4GBj6ZGT9wcHQ3eT8trb5MTGCqLuXtsa90dv5QECTssN9orW5y9WmwM3i6u6ApLfzGhz+3Nzq8PPY4+n6a2v5TU211N//8fH8rKz7oaH6Xl77ior91NTSk5rlWl/wNTj7kZHYg4rpTVH9yMjafIL6fn76c3P+19f5Kir5RET+5ub8srL7goKK4Q5tAAAEcElEQVR4nO3ca1ubPACHcU5VEFcmoaGU2T6207nntOl02/f/ZEvSgrTFcjCYhOt/v7IHsb8LDDXEWhZCCCGEEEIIIYQQQgghhBBCCCGEkDktl4vFihVFURgmYRiyL9jNxWK5VP3S3tJyESVu4BAvPp1HnMBNooVJ2OUqyegW5rVr+1yaJZH+zpVLOsjqpMRdqUa8Xkj64/aYJFRNqc2VoHtRuqo5x3nyfMLoqQYdFsoFMqJuR2ooGejFkWrSQZFPpQKpr5/QyeQhiePoKOSRtyPZexy+JV2F/KX5hPZzUvEGLnFdX29hASUM2k5KCXGywBU4kZbC8FC4p2XcopfnZUHgCldS0owVVgsONHUZLmwGQqgmCCGEUH0QQgih+iCEEEL1yRfqNps4p5KFdK6adNB84rXbi22EbA96E/2Ek0lOWyAbhUni0pxtTUchR/IJs75CPmETZIKnr1CUxiecx8LEFVNRQebTuLIV3YTJ5Kg0Z1JKiL937AZJET8eg4DBCPXy42/XbSyNvOPXuO9Nc1G8vaad5+np51MNz4dNxi55mp7xSd3R1rmY8F9iPYWOUMYNx9+Jco8EbORxtBaKxODRZX+ys4yfBe5uft+g96Xi8ozHVx6wkSVl+zZlI066HXTEQOs72Ra2d+3CIGHd+TDZq/bUb7iw6V0bhKqCEEII1SdV6IxLuGYd7kPeWITr+de//7n4VNdF765u/r3XRbj+zx6o2U89hP8PBWR91EC4HhJo29+kCpMewvX3QYG2vZEpnE9aEivC+cBA+0GucBI3zJQeCtdfhxbakoV8iqV51jt4r99CnsxzxsuMcOyRU8yK8Gpw4edBhKI058tG66SVtYmXgwvPJQrDV6aY0jQX/2lCWYQSQv1sl0MME/q028QhyzSh49CO88HmCZ2Os95GCnk+8eKm6y5mC0so9U5TTRdWsf5utT4fUMVAGvBGJBzH+bDH3xYQQgghhBBCCCGEEEKotfDxttr5lw+zyoOz3d2PJguPLzhszsoHP+zu+vjOwkWrCe+WwmnND9gUs6uqhFbkt9uLfYWWdaFYyC8/tUH2F14rF7JDNclIE7O/0LpTL7T4h5glgX+K2UX4eMc6K68CTrUQ7pyrkK+9J35ZL+HT9uaP3c2NRsJSulitwkSsyc+cLTXb6tidYaNwN3xeFJt70k94urZC+3p3+260wmJVxe/RCosLnV8gNFZYXI5/GKuwHEufxyosV1TY4xTeFOcK6358woMexy78aY9dOBu78Nket/BX+eCohNeiH99u7yoPjkpY+4RRCWsXL0II4XsGIYQQmi6cXs2Knl/bktnCan9BqCgIIXwJQlWZtdoEQgghhBBCCCGEEEIIIYQQQgghhBBCc4VPgwtvFQtnzS/xjb2yfOzd+j24UPbn7nXtfmjglWLg8Iep6oO0/E+mobpR7bOqq9UG6FK1TjQdDqjDHuRtHobxXUr+bM83Nb09k9z55+vmH4sQQgghhBBCCCGEEEIIIYQQQgghpKI/0vC2DKMNnyAAAAAASUVORK5CYII=",
          },
          {
            name: "Razorpay",
            logo: "https://yt3.googleusercontent.com/ytc/AOPolaRd7PG43_OojEewgsRiyQ91zSYP91ZTkH1-9-D9UQ=s900-c-k-c0x00ffffff-no-rj",
          },
          {
            name: "CI/CD",
            logo: "https://w7.pngwing.com/pngs/254/295/png-transparent-continuous-integration-software-deployment-software-testing-ci-cd-agile-software-development-others-blue-text-trademark.png",
          },
        ],
        dialogDetails:
          "Working closely with Clonetto, we crafted a game-changing theme customization solution. Our team harnessed advanced coding and design skills to empower users to effortlessly create their digital aesthetics. With Clonetto's new product, personalized online presence is now at your fingertips.",
      },
    },
  ];

  const [dialogStates, setDialogStates] = useState(
    ClientDetails.map(() => false)
  );

  const handleCloseDialog = () => {
    setDialogStates(ClientDetails.map(() => false));
  };

  const handleOpenDialog = (index) => {
    const updatedDialogStates = [...dialogStates];
    updatedDialogStates[index] = true;
    setDialogStates(updatedDialogStates);
  };

  return (
    <div className="featured-area pt-100 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          {ClientDetails.map((Client, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={50}
                animateOnce={true}
              >
                <div className="single-featured-box single-featured-box-pointer">
                  <img
                    src={Client.titleImg}
                    alt="image"
                    style={{
                      background:
                        Client.dialogData.title === "Project Clonetto" ||
                        Client.dialogData.title === "Project Vidon"
                          ? "black"
                          : "unset",
                      aspectRatio: "1",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <h3>{Client.tagLine}</h3>

                  <a
                    className="read-more-btn"
                    onClick={() => handleOpenDialog(index)}
                  >
                    Read More <i className="bx bx-right-arrow-alt"></i>
                  </a>

                  <Dialog
                    open={dialogStates[index]}
                    onClose={handleCloseDialog}
                    sx={{
                      "& .MuiDialog-paper": {
                        maxWidth: "100% !important",
                      },
                      borderRadius: 5,
                      "& .MuiDialogContent-root": {
                        padding: 0,
                      },
                    }}
                  >
                    <DialogTitle>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <IconButton
                          aria-label="close"
                          onClick={handleCloseDialog}
                        >
                          <Close />
                        </IconButton>
                      </div>
                    </DialogTitle>

                    <DialogContent>
                      <Card
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: theme.palette.background.default,
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            width: "100%",
                            background:
                              Client.dialogData.title === "Project Clonetto" ||
                              Client.dialogData.title === "Project Vidon"
                                ? "black"
                                : "unset",
                            aspectRatio: "1",
                            objectFit: "contain",
                            // maxWidth: 500,
                            maxHeight: 500,
                            "@media (max-width:600px)": {
                              padding: 1,
                            },
                          }}
                          image={Client.dialogData.dialogImg}
                          alt={Client.dialogData.title}
                        />

                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            backgroundColor: theme.palette.background.paper,
                            padding: "20px",
                          }}
                        >
                          <Typography component="div" variant="h5">
                            {Client.dialogData.title}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                            >
                              Tech Stack
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                gap: 3,
                                flexWrap: "wrap",
                                "@media (max-width:600px)": {
                                  gap: 1,
                                },
                              }}
                            >
                              {Client?.dialogData?.techstack?.map(
                                (technology, index) => (
                                  <Chip
                                    key={index}
                                    label={technology.name}
                                    color={
                                      chipColors[
                                        Math.floor(
                                          Math.random() * chipColors.length
                                        )
                                      ]
                                    }
                                    variant="outlined"
                                    avatar={
                                      <Avatar
                                        sx={{ backgroundColor: "unset" }}
                                        alt={technology.name}
                                        src={technology.logo}
                                      />
                                    }
                                  />
                                )
                              )}
                            </Box>
                          </Box>

                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            {Client.dialogData.dialogDetails}
                          </Typography>
                        </CardContent>
                      </Card>
                    </DialogContent>
                  </Dialog>
                  <a onClick={() => handleOpenDialog(index)}>
                    <a className="link-btn"></a>
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
