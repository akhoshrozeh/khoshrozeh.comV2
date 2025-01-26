# My Site: V2

Originally I was using Hugo for my static site and hosted it via Github Pages. But since I've made the site, I've been using Next.js & SST/AWS on the daily. I wanted to consolidate the tech I use, so I rebulit the site with Next.js and deployed as a static site using SST. Under the hood, it just creates an S3 bucket and serves it via a Cloudfront distribution.

## SST
I've really been enjoying using SST for my Next.js apps. Check out my sst.config.ts file to see how to do it. It's really that simple. Configuring the DNS was the most work, since I was using Namecheap and not Route53. But fixing it was easy. This [video] (https://www.youtube.com/watch?v=Bmuoqo_JY4g) was to-the-point.