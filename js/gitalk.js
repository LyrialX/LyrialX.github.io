document.addEventListener('DOMContentLoaded', function() {
  // 检查页面中是否有评论容器
  var gitalkContainer = document.getElementById('gitalk-container');
  if (!gitalkContainer) return;

  // 确保Gitalk库已加载
  if (typeof Gitalk === 'undefined') {
    // 加载Gitalk CSS
    var gitalkCSS = document.createElement('link');
    gitalkCSS.rel = 'stylesheet';
    gitalkCSS.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
    document.head.appendChild(gitalkCSS);

    // 加载Gitalk JS
    var gitalkScript = document.createElement('script');
    gitalkScript.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    gitalkScript.onload = initGitalk;
    document.body.appendChild(gitalkScript);
  } else {
    initGitalk();
  }

  function initGitalk() {
    const gitalk = new Gitalk({
      clientID: 'Ov23liROZ2lxiwsMMDgh',
      clientSecret: 'e7f4e39f88c22cb26f7bc573783a7cc47b564a2d',
      repo: 'blog-comments',
      owner: 'LyrialX',
      admin: ['LyrialX'],
      id: location.pathname.substring(0, 49), // GitHub的issue标签限制50个字符
      distractionFreeMode: false,
      createIssueManually: false
    });

    try {
      gitalk.render('gitalk-container');
      console.log('Gitalk initialized successfully');
    } catch (error) {
      console.error('Gitalk initialization failed:', error);
    }
  }
}); 