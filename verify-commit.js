/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-05 22:30:14
 * @LastEditors: gll
 * @LastEditTime: 2020-12-13 10:15:36
 */
const msgPath = process.env.HUSKY_GIT_PARAMS
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim()

const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(`
        不合法的 commit 消息格式。
        请查看 git commit 提交规范：https://github.com/woai3c/Front-end-articles/blob/master/git%20commit%20style.md
    `)

  process.exit(1)
}
