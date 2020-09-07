# build
yarn build

yarn generate

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'Deplying docs'

git push -f git@github.com:waiting7777/nuxt-content-test.git master:gh-pages