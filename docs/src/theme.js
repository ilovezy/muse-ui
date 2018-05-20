import MuseUI from 'muse-ui';

const markdownTheme = (theme) => {
  return `
  .markdown-body {
    color: ${theme.text.primary};
  }
  .markdown-body a.header-anchor {
    color: ${theme.primary};
  }
  .markdown-body a {
    color: ${theme.secondary};
  }
  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    color: ${theme.text.secondary};
  }
  .markdown-body h1 .octicon-link,
  .markdown-body h2 .octicon-link,
  .markdown-body h3 .octicon-link,
  .markdown-body h4 .octicon-link,
  .markdown-body h5 .octicon-link,
  .markdown-body h6 .octicon-link {
    color: ${theme.text.primary};
  }
  .markdown-body blockquote {
    border-left-color: ${theme.text.disabled};
    background-color: #fff;
  }
  .markdown-body table tr {
    color: ${theme.text.primary};
  }
  .markdown-body table th {
    color: ${theme.text.secondary};
    border-bottom-color: ${theme.divider};
  }
  .markdown-body table td {
    border-bottom-color: ${theme.divider};
  }
  .markdown-body img {
    background-color: ${theme.text.alternate};
  }
  .markdown-body code {
    background-color: ${theme.text.alternate};
  }
  `;
};

const appTheme = (theme, type) => {
  return `
  .mu-app-drawer {
    border-right-color: ${theme.divider};
  }
  .mu-app-drawer-header .mu-appbar-title {
    color: ${theme.text.secondary};
  }
  .mu-app-drawer-header .mu-appbar-title-text:hover {
    color: ${theme.primary};
  }
  .mu-app-drawer-header .mu-app-version:hover {
    color: ${theme.primary};
  }
  .toggle-icon {
    color: ${theme.text.secondary};
  }
  .demo-block-content {
    background-color: ${type === 'dark' ? theme.background.paper : '#eeeeee'};
  }
  .demo-block-tools  .mu-button {
    color: ${theme.text.secondary};
  }
  .badge-list-wrap {
    background-color: ${theme.background.paper}
  }
  .demo-text {
    background-color: ${type === 'dark' ? theme.background.paper : '#fff'};
  }
  .mu-desc-item {
    border: ${theme.text.alternate};
  }
  .mu-desc-item .mu-icon {
    color: ${theme.primary};
  }

  .mu-desc-item-title {
    color: ${theme.text.primary};
  }
  .mu-desc-item-content .markdown-body pre {
    background-color: ${type === 'dark' ? theme.text.primary : 'transparent'};
  }
  `;
};

MuseUI.theme.addCreateTheme(markdownTheme);
MuseUI.theme.addCreateTheme(appTheme);
