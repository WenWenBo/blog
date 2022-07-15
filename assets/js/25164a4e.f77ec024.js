"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3577],{5530:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/git","metadata":{"permalink":"/blog/blog/git","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/git.md","source":"@site/blog/git.md","title":"\u6211\u662fgit","description":"\u5c06\u6587\u4ef6\u6dfb\u52a0\u5230\u6682\u5b58\u53d6","date":"2022-07-15T10:02:19.000Z","formattedDate":"2022\u5e747\u670815\u65e5","tags":[],"readingTime":5.35,"truncated":false,"authors":[],"frontMatter":{},"nextItem":{"title":"Welcome","permalink":"/blog/blog/welcome"}},"content":"## \u5c06\u6587\u4ef6\u6dfb\u52a0\u5230\u6682\u5b58\u53d6\\n```shell\\n#\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u6dfb\u52a0\u5230\u6682\u5b58\u533a\\ngit add [file1] [file2] ...\\n\\n# \u5c06\u6240\u6709\u6587\u4ef6\u6dfb\u52a0\u5230\u6682\u5b58\u533a\\ngit add .\\n```\\n\\n## \u5c06\u6587\u4ef6\u63d0\u4ea4\u5230\u672c\u5730\u4ed3\u5e93\\n```shell\\ngit commit -m \'\u63d0\u4ea4\u7684message\'\\n```\\n\\n## \u67e5\u770b\u6587\u4ef6\u53d8\u52a8\\n```shell\\n# \u6dfb\u52a0\u5230\u6682\u5b58\u533a\u4e4b\u524d\u8fdb\u884c\u67e5\u770b\u6587\u4ef6\u53d8\u52a8\\ngit diff [file1]\\n```\\n\\n## \u67e5\u770b\u5f53\u524d\u5206\u652f\u7684\u5386\u53f2\u63d0\u4ea4\u8bb0\u5f55\\n```shell\\n# \u67e5\u770b\u8be6\u7ec6\u7684\u63d0\u4ea4\u8bb0\u5f55\\ngit log\\n\\n# \u67e5\u770b\u7b80\u7565\u7684\u63d0\u4ea4\u8bb0\u5f55\uff08\u4e00\u884c\u73b0\u5b9e\uff09\\ngit log --pretty=oneline\\n```\\n\\n## \u7248\u672c\u56de\u9000\\n```shell\\n# \u56de\u9000\u5230\u4e0a\u4e2a\u7248\u672c\\ngit reset --hard HEAD^\\n\\n# \u56de\u9000\u5230\u4e0a\u4e0a\u4e2a\u7248\u672c\\ngit reset --hard HEAD^^\\n\\n# \u56de\u9000\u5230\u524d100\u4e2a\u7248\u672c\\ngit reset --hard HEAD~100\\n\\n# \u56de\u9000\u5230\u67d0\u4e00\u4e2a\u7248\u672c\uff0c\u642d\u914d`git log`\u67e5\u770b\u5e76\u6307\u5b9a\u7248\u672c\u53f7\\ngit reset --hard [\u7248\u672c\u53f7] # \u4f8b\uff1agit reset --hard 0d69dbe\\n\\n```\\n\\n## git reflog\\n`git reflog` \u53ef\u4ee5\u67e5\u770b\u6240\u6709\u5206\u652f\u7684\u6240\u6709\u64cd\u4f5c\u8bb0\u5f55\uff0c**\u5305\u62eccommit\u548creset\u7684\u64cd\u4f5c**\uff0c\u5305\u62ec\u5df2\u7ecf\u88ab\u5220\u9664\u7684\u8bb0\u5f55\uff0c`git log`\u5219\u4e0d\u80fd\u67e5\u770b\u5df2\u7ecf\u5220\u9664\u7684commit\u8bb0\u5f55\u3002**\u5728\u8bef\u64cd\u4f5c\uff08\u8befreset\u7684\u65f6\u5019\u7528\u6765\u56de\u9000\u64cd\u4f5c\u975e\u5e38\u6709\u7528\uff09**\\n\\n## \u64a4\u9500\u4fee\u6539\\n\u4fee\u6539\u672a\u63d0\u4ea4\u5230\u6682\u5b58\u533a\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u76f4\u63a5\u64a4\u9500\u6587\u4ef6\u7684\u4fee\u6539\\n```shell\\ngit restore [file1]\\n\\n# \u5fc5\u987b\u52a0\u4e0a -- \u5426\u5219\u4f1a\u53d8\u6210\u5783\u53d6\u5206\u652f\\ngit checkout -- [file1]\\n```\\n\\n## \u8fdc\u7a0b\u4ed3\u5e93\\n```shell\\n# \u67e5\u770b\u6240\u6709\u7684\u8fdc\u7a0b\u4ed3\u5e93\\ngit remote\\n\\n# \u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93\\ngit remote add origin https://github.com/xxxx/testgit.git\\n\\n# \u5220\u9664\u8fdc\u7a0b\u4ed3\u5e93\\ngit remote rm <\u8fdc\u7a0b\u4e3b\u673a\u540d> # \u4f8b\u5982\uff1agit remote rm origin\\n\\n# \u67e5\u770b\u672c\u5730\u4ed3\u5e93\u8ddf\u8e2a\u7684\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740\\ngit remote -v\\n\\n# \u66f4\u65b0\u5f53\u524d\u4ed3\u5e93\u7684\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740\\ngit remote # \u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93\u5217\u8868\\ngit remote rm <\u8fdc\u7a0b\u4e3b\u673a\u540d> # \u5220\u9664\u5f53\u524d\u7684\u5730\u5740\\ngit remote add <\u8fdc\u7a0b\u4e3b\u673a\u540d> <\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740> # \u91cd\u65b0\u8bbe\u5b9a\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740\\n```\\n## \u5c06\u672c\u5730\u4ed3\u5e93\u7684\u5185\u5bb9\u63a8\u9001\u5230\u8fdc\u7a0b\\n```shell\\ngit push <\u8fdc\u7a0b\u4e3b\u673a\u540d> <\u672c\u5730\u5206\u652f\u540d>:<\u8fdc\u7a0b\u5206\u652f\u540d>\\n\\n#\u5982\u679c\u672c\u5730\u5206\u652f\u540d\u548c\u8fdc\u7a0b\u5206\u652f\u540d\u76f8\u540c\uff0c\u5219\u53ef\u4ee5\u7701\u7565\u5192\u53f7\\ngit push <\u8fdc\u7a0b\u4e3b\u673a\u540d> <\u672c\u5730\u5206\u652f\u540d>\\n# \u4f8b\u5982\uff1a\u4ee5\u4e0b\u547d\u4ee4\u5c06\u672c\u5730\u7684master\u5206\u652f\u63a8\u9001\u5230origin\u4e3b\u673a\u7684master\u5206\u652f\\ngit push origin master # \u7b49\u6548\u4e8e\uff1agit push origin master:master\\n\\n# -u\u53c2\u6570\u4f1a\u628a\u672c\u5730\u7684master\u5206\u652f\u548c\u8fdc\u7a0b\u7684master\u5206\u652f\u5173\u8054\u8d77\u6765\uff0c\u4e4b\u540e\u63a8\u9001\u5c31\u53ef\u4ee5\u7b80\u5316\u547d\u4ee4\uff0c\u4e0d\u7528\u6307\u5b9a\u8fdc\u7a0b\u7684\u5206\u652f\\ngit push -u origin master\\n\\n# \u5982\u679c\u672c\u5730\u7248\u672c\u4e0e\u8fdc\u7a0b\u7248\u672c\u6709\u5dee\u5f02\uff0c\u4f46\u53c8\u8981\u5f3a\u5236\u63a8\u9001\u53ef\u4ee5\u4f7f\u7528`--force`\u53c2\u6570\\ngit push --force origin master\\n\\n# \u5220\u9664\u8fdc\u7a0b\u4e3b\u673a\u7684\u5206\u652f\u53ef\u4ee5\u4f7f\u7528`--delete`\u53c2\u6570\uff0c\u4ee5\u4e0b\u547d\u4ee4\u8868\u793a\u5220\u9664origin\u4e3b\u673a\u7684master\u5206\u652f\\ngit push origin --delete master\\n```\\n\\n## \u5c06\u672c\u5730\u4ed3\u5e93\u7684\u5206\u652f\u548c\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054\u8d77\u6765\\n\u5982\u679c\u672c\u5730\u5206\u652f\u548c\u8fdc\u7a0b\u6ca1\u6709\u505a\u5173\u8054\uff0c\u5728`git pull`\u548c`git push`\u7684\u65f6\u5019\u5c31\u4e0d\u80fd\u7528\u7b80\u5316\u547d\u4ee4\u64cd\u4f5c\\n```shell\\n# \u67e5\u770b\u672c\u5730\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\u7684\u6620\u5c04\u5173\u7cfb\\ngit branch -vv\\n\\n# \u5efa\u7acb\u5f53\u524d\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\u7684\u6620\u5c04\u5173\u7cfb\\ngit branch -u <\u8fdc\u7a0b\u4e3b\u673a\u540d>/<\u8fdc\u7a0b\u5206\u652f> # \u6216 git branch --set-upstream-to <\u8fdc\u7a0b\u4e3b\u673a\u540d>/<\u8fdc\u7a0b\u5206\u652f>\\n\\n# \u64a4\u9500\u672c\u5730\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\u7684\u6620\u5c04\u5173\u7cfb\\ngit branch --unset-upstream\\n```\\n\\n## Git\u5206\u652f\u7ba1\u7406\\n```shell\\n# \u4ece\u5f53\u524d\u7684\u672c\u5730\u5206\u652f\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f\\ngit branch <\u5206\u652f\u540d>\\n\\n# \u5207\u6362\u5230\u67d0\u4e2a\u5206\u652f\\ngit checkout <\u5206\u652f\u540d>\\n\\n# \u521b\u5efa\u65b0\u5206\u652f\u5e76\u5207\u6362\u5230\u8be5\u5206\u652f\\ngit checkout -b <\u5206\u652f\u540d>\\n\\n# \u5220\u9664\u672c\u5730\u5206\u652f\uff0c\u533a\u522b\u4e8e\u4e0a\u9762\u5220\u9664\u8fdc\u7a0b\u4ed3\u5e93\u7684\u5206\u652f\u64cd\u4f5c\\ngit branch -d <\u5206\u652f\u540d>\\n\\n# \u5408\u5e76\u5206\u652f\\ngit merge\\n\\n# \u4ece\u8fdc\u7a0b\u4ed3\u5e93\u7684\u5206\u652f\u5783\u53d6\u672c\u5730\u5206\u652f\uff0c\u5e76\u81ea\u52a8\u5207\u6362\u5230\u8be5\u5206\u652f\u3002\u8fd9\u79cd\u65b9\u5f0f\u5efa\u7acb\u7684\u672c\u5730\u5206\u652f\u4f1a\u81ea\u52a8\u548c\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u5173\u8054\u5173\u7cfb\\ngit checkout -b <\u672c\u5730\u5206\u652f\u540d>:<\u8fdc\u7a0b\u4e3b\u673a\u540d>/<\u8fdc\u7a0b\u5206\u652f\u540d>\\n\\n\\n# \u4ece\u8fdc\u7a0b\u4ed3\u5e93\u7684\u5206\u652f\u5783\u53d6\u672c\u5730\u5206\u652f\uff0c\u4e0d\u5207\u6362\u5230\u8be5\u5206\u652f\u3002\u8fd9\u79cd\u65b9\u5f0f\u5efa\u7acb\u7684\u672c\u5730\u5206\u652f\u4e0d\u4f1a\u81ea\u52a8\u548c\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u5173\u8054\u5173\u7cfb\\ngit fetch <\u8fdc\u7a0b\u4e3b\u673a\u540d> <\u8fdc\u7a0b\u5206\u652f\u540d>:<\u672c\u5730\u5206\u652f\u540d>\\n```"},{"id":"welcome","metadata":{"permalink":"/blog/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"2021\u5e748\u670826\u65e5","tags":[{"label":"facebook","permalink":"/blog/blog/tags/facebook"},{"label":"hello","permalink":"/blog/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"\u6211\u662fgit","permalink":"/blog/blog/git"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"2021\u5e748\u67081\u65e5","tags":[{"label":"docusaurus","permalink":"/blog/blog/tags/docusaurus"}],"readingTime":0.175,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/blog/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/blog/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"2019\u5e745\u670829\u65e5","tags":[{"label":"hello","permalink":"/blog/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/blog/tags/docusaurus"}],"readingTime":2.05,"truncated":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/blog/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/blog/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"2019\u5e745\u670828\u65e5","tags":[{"label":"hola","permalink":"/blog/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/blog/tags/docusaurus"}],"readingTime":0.12,"truncated":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/blog/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);