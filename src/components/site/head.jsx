"use client";
import { appName } from "@/modules/constants";

export default function DefaultHead({metas}) {

  return (
     <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="ROBOTS" content="ALL"/>
        <meta name="Engine" content="all"/>
        <meta name="distribution" content="global"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/images/favicon.ico" rel="icon" type="image/png"/>

        <meta property="og:type" content="Website" />
        <meta property="og:site_name" content={appName}/>
        <meta property="og:url" content={metas?.currentUrl} />

        <title>{metas?.title}</title>
        <meta name="keywords" content={metas?.seo_keywords} />
        <meta name="description" content={metas?.seo_description}/>

        <meta property="og:image" content={metas?.img}/>
      </head>
  );
}
