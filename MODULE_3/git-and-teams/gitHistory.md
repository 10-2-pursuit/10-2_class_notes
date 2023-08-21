 8296  mkdir exampleClass
 8297  cd exampleClass
 8298  git init
 8299  touch favorite-movies.txt
 8300  ls
 8301  cat favorite-movies.txt
 8302  open favorite-movies.txt
 8303  cat favorite-movies.txt
 8304  git add .
 8305  git commit -m "first commit"
 8306  git status
 8307  clear
 8308  git -b add-movies
 8309  git checkout -b add-movies
 8310  clear
 8311  code .
 8312  cat favorite-movies.txt
 8313  git checkout main
 8314  cat favorite-movies.txt
 8315  code .
 8316  git checkout add-movies
 8317  git add  .
 8318  git checkout main
 8319  clear
 8320  cat favorite-movies.txt
 8321  git checkout add-movies
 8322  git checkout main
 8323  git merge add-movies
 8324  cat favorite-movies.txt
 8325  code .
 8326  git remote add origin https://github.com/mckiernantim/10-2-example-branch.git\ngit branch -M main\ngit push -u origin main
 8327  clear
 8328  git checkout -b notMainBranch
 8329  code .
 8330  git add .
 8331  git commit -m "adds bad movies"
 8332  git push origin notMainBranch
 8333  git checkout main
 8334  code .
 8335  git pull origin main