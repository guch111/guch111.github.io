var posts=["2025/02/09/hello-world/","2025/02/09/hexo搭建过程遇到的一些问题/","2025/02/09/markdown-file-quick-start/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };