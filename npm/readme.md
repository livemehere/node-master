# npm 을 치면

```bash

Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term>
npm help npm       more involved overview

All commands:

    access, adduser, audit, bin, bugs, cache, ci, completion,
    config, dedupe, deprecate, diff, dist-tag, docs, doctor,
    edit, exec, explain, explore, find-dupes, fund, get, help,
    hook, init, install, install-ci-test, install-test, link,
    ll, login, logout, ls, org, outdated, owner, pack, ping,
    pkg, prefix, profile, prune, publish, rebuild, repo,
    restart, root, run-script, search, set, set-script,
    shrinkwrap, star, stars, start, stop, team, test, token,
    uninstall, unpublish, unstar, update, version, view, whoami

Specify configs in the ini-formatted file:
    /Users/gongtaemin/.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config
```

> 커스텀 script는 npm run ... 을 붙여야한다

# vierson

```js
      1         .     0    .    0
     Major      .   Minor  . Patch
(정말다른기능 수정) . (기능추가) . (사소한버그)
```

## cli

```js
보통 -h 붙이면 도움말나옴


npm view <라이브러리 명 > //라이브러리에 대한 설명을 들을수있음
npm ll // list
npm un // uninstall
npm i // install
npm update ...  //업데이트
npm outdated // 업데이트필요정보 보여줌
npm i --save-dev
```
