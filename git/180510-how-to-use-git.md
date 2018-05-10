
# how to use git and github

## terminal commands 

- $ cd : move to 
cd .. -> higher dir // cd./ -> where i am // .. -> cd [dir name] -> move to file

- $ ls : file list

- $ mkdir : make directory

- $ touch : make file 

- $ rm -rf [dir name or .git] -> [ex. rm  -rf .git] : remove [dir name] 

- $ vi : use vim to modify your file in termianl (vi: i->insert, :wq->save)

- $ git init : initialize empty Git repository

- $ git add directory/file name : move file to directory index

## git data transport steps and commands by using terminal

* first repo with github using terminal 

(**recommand: use $ git status to check if you are doing right way)
- step 1. make new repository from my Github 
- step 2. make new directory from your terminal by using commands $ mkdir
- step 3. using command $ git init to initialize empty git repo in your new directory
- step 4. make new file in your new directory (ex. $ touch README.md)
- step 5. $ git add README.md
- step 6. $ git commit -m "message what you want to post on it"
- step 7. $ git remote add origin {github repo url}
- step 8. $ git push origin master 

* Github Pages : using for tech-blog
- username.github.io

* clone origin, so don't need to make another nickname
- step 1. $ git clone https://github.com/username/username.github.io.git
- step 2. make new index file in your directory 
- step 3. $ git add index.html
- step 4. $ git commit index.html -m "message what you want to post on it"
- step 5. $ git push origin master
- final: you can check your index.html in github.io 

* use gitbuh as your own storage 
- step 1. $ rm -rf your directory
- step 2. $ git clone https://github.com/username/directory-name.git
- final: by saving version in your github can be used like cloud system.

* branch : for version up safely (like time machine)
(for ex. on your directory you have README.md file)
- step 1. $ git status or $ git branch for checking if on branch master
- step 2. $ git branch -a : checking all the branch what you have
- step 3. $ git branch stem for adding stem branch
- step 4. $ git branch -a : check if you made stem right
- step 5. $ git checkout stem : switched to branch 'stem'
- step 6. $ vi README.md add something to change
- step 7. $ git status you can see that you modified your file on branch stem
- step 8. $ git add README.md
- step 9. $ git commit -m "any message you want"
- step 10. $ git push origin stem
- step 11. $ git checkout master : switch to branch 'master'
- step 12. $ git merge stem: for merge to master
- step 13. $ git branch -D stem : delete file from stem branch 
