# deploy.sh
###
 # @Description: 
 # @Version: 1.0
 # @Autor: gll
 # @Date: 2020-11-28 15:49:38
 # @LastEditors: gll
 # @LastEditTime: 2020-11-28 15:50:54
### 
# 错误时停止
set -e

# 打包
npm run build:prod

# 进入目标文件夹
cd dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

# 提交到 https://github.com:guangliangliang/vue-admin 项目的 gh-pages 分支
git push -f git@github.com:guangliangliang/vue-admin.git master:gh-pages

cd -