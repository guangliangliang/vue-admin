/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-05 22:30:14
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-06 17:24:38
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
        请查看 git commit 提交规范：https://github.com/guangliangliang/vue-admin/blob/master/gitCommitConfig.md
    `)

  process.exit(1)
}
