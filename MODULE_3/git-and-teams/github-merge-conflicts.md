# Github Branching and Merge Conlficts 8/21

## Quote of The Day
“Culture eats strategy for breakfast” - Peter Drucker

## Agenda
* 6:00 - 7:00 Flex Time 
* 7:00 - 8:30 Github Merge conflicts
* 8:30 - 8:45 Break
* 8:45 - 10:00 Lab Time 

## Git Branching
- Create a new directory from the command line and `cd` into it. What is the command to create a new `git` repository?

- After creating a `git` repository, how many commits does the repository have?

- Create a new file called `favorite-movies.txt`. Then add your changes, commit, and then look at your git history.

  What command will show you all of the commits you've made?

- Create a new branch called `add-movies`. How can you create a new branch?

- In your own words, what is the purpose of creating a branch?

- How do you switch to a newly created branch? Do so, so that you are on the `add-movies` branch.

- How can you tell what branch you are on?

- Open the `favorite-movies.txt` file and add two or three of your favorite movies on separate lines. Then, add and commit your changes.

  What is the current difference between the `add-movies` branch and the `main` branch?

- Go back to your `main` branch. What happened to the contents in your `favorite-movies.txt` file?

- How can you merge the changes from the `add-movies` branch into the `main` branch?

  Once you've determined how, do so.

- Create a new GitHub repository and connect your local and remote repository.

  Currently, what branches are available to you on your local machine? What branches are available on GitHub?

- On your local machine, switch over to the `add-movies` branch. Add one or two more movies and then make a commit.

  How can you push your `add-movies` branch up to GitHub? Once you know how, do so.

- Go to your GitHub repository's page and create a pull request from the branch you just pushed up. Once a pull request is created, merge it.

  Now, what is the difference between your local `main` branch and your remote `main` branch?

- Use `git pull` to sync your local and remote `main` branches.

  On what branch should you run the `git pull` command?

- Is there any difference on your local machine between the `main` and `add-movies` branch at this point? Why or why not?

- In your own words, summarize the journey of the last commit you just made. Use technical terms and make sure to distinguish between activities happening locally vs remotely.
- 
 ## Pull Request & Merge:
A **pull request (PR)** is a mechanism used to propose and review changes in a Git repository. It allows contributors to submit changes for review and integration into a target branch. The process involves the following steps:

1. **Forking the Repository:** Contributors fork the original repository, creating their own copy where they can make changes.

2. **Creating a Branch:** Contributors create a new branch in their fork to work on specific changes. This keeps the main branch unaffected until the changes are ready.

3. **Making Changes:** Contributors make and commit their changes to the new branch in their fork.

4. **Creating a Pull Request:** After making and committing changes, contributors open a pull request to propose merging their changes into the main repository's branch.

5. **Review and Discussion:** The proposed changes are reviewed by maintainers and collaborators. Feedback and discussions occur directly in the pull request.

6. **Approval and Merge:** Once the changes are reviewed and approved, the pull request can be merged into the target branch using a merge button. This typically results in a fast-forward merge, where changes are applied seamlessly.

## Group Branchin Activity 

You will be split into groups of two or three. Choose one person to be the "project manager" for the group. Then, do the following.

- The project manager should share access to the repository they just created.
- Other members of the group should clone down the repository. (Remember, you should not put a repository inside of another one, so make sure to `cd` up a directory or two.)
- Have one member of the group (it doesn't matter who) create a new branch with their name. They should add, commit, and push their changes. Then, make a pull request.
- The project manager should merge the pull request.
- Then, each member of the team should pull down the changes to their `main` branch.

Continue this process until every member of the team has had a chance to add a few favorite movies. Remember you will always need to `pull` before making your own branch.



## Merge Conflict:

A **merge conflict** arises when Git is unable to automatically combine changes from different branches. This occurs when two branches have made conflicting changes to the same file or lines of code. The process involves the following steps:

1. **Branching and Changes:** Two or more branches are developed independently, with changes made to the same lines in a file.

2. **Merge Attempt:** An attempt is made to merge one branch into another, typically by creating a pull request.

3. **Conflict Detection:** Git detects that the same lines have been modified in both branches, resulting in a conflict.

4. **Manual Conflict Resolution:** Developers need to manually review and edit the conflicting file(s) to choose which changes to keep and discard. Conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) indicate the conflicting sections.

5. **Committing Resolution:** Once conflicts are resolved, developers commit the changes to the repository with a message describing the conflict resolution.

6. **Completion of Merge:** After resolving the conflict, the merge process is completed, and the changes are integrated into the target branch.

***Example***

- Take a look at the following image which shows a merge conflict in VSCode. Then, answer the questions below.

  ![Conflict highlighting in VSCode.](./assets/vscode-conflict.png)

  - Where do the `<<<`, `>>>`, and `===` symbols come from?
  - What do those symbols mean?
  - How would you "resolve" this merge conflict?

- What are some ways you can avoid merge conflicts when working with others?

## Group activity

In small groups, complete the following:

1. Elect one person to be the team lead. That person should take the following steps:

- Run the code below in their terminal _outside of_ an existing `git` repository.
  ```bash
  mkdir group-merge-conflicts
  cd group-merge-conflicts
  git init
  echo ".DS_Store" > .gitignore
  git add .
  git commit -m "Initial commit"
  ```
- Create a new repository on GitHub.
- Connect the local repository with your remote repository.
- Invite your other team members to collaborate on the repository with you.

2. All other members of the team should clone down the repository. This means that everyone should have the exact same repository and commits.

1. The team lead should then add, commit, and push a new file called `index.js`. This can all be done on the `main` branch. Include the following code inside that file.

   ```js
   function fn(...c) {
     if (!c.every((a) => Number.isNumber(a)))
       throw "All arguments must be numbers.";
     return c.reduce((a, b) => a + b);
   }

   fn(1, 2, 3); //> 6
   fn(10, "B", 20); //> error All arguments must be numbers.
   ```

1. After the changes have been pushed up to the `main` branch, all other members should `git pull` those changes down. Everyone should now have the same code.

1. Every member of the team should then work to update the code above. While the code works, update the code so that it is more readable. For example, change the names of variables, make the syntax more verbose, etc.

   The team lead should do their work on the `main` branch. Every other person in the group should create a new branch with their name and work on that branch.

1. Once everyone has completed their work (~5 minutes), everyone should push up their code to the branch their working on. That is, the team lead should push up to the `main` branch while other members of the team will push up to GitHub with branches that have their names.

1. Non-team lead members should create pull requests with their new branches. These pull requests will likely have merge conflicts.

1. Members of the group should then rotate sharing their screen. When a person is sharing, they should go through the process of resolving their merge conflict with the rest of the group. The code should continue to work. After resolving the conflict, merge the code and then go to the next person.

1. Once everyone has merged in their code, all members should `git pull` from the `main` branch.
## Today's Lab
[Color Battle](https://github.com/10-2-pursuit/lab-collaboration-with-github)

## Today's Pairs
1. Michael Caldwell, Shanice Griffin
2. Mikal Wazeerud-Din, Davon Bridgett
3. Anthony Huarneck, Isaiah Derosiers
4. Genesis Lara, Winder Joel Marte
5. Abel Vargas, Nicole Slater
6. Kanique Cox, Tonesha Rose
7. Jefferson Chua, Erick Tolentino
8. Alexander Tsiklidis, Addis Jackson
9. Dwayne Jones, James Edmond
10. Anile Choice, Jalal Jonaid
11. Joseph Carter, Emily Mohr
12. Sung Yi, Keith Camacho
13. Elisaul Batista, Aisha Kleemoff



### Git Terms && Concepts
<div style="display: flex;  border:2px solid">
<table>
  <thead>
    <tr>
      <th>Term</th>
      <th>Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Branching</td>
      <td>A way to diverge from the main line of development and work on new features or fixes independently.</td>
    </tr>
    <tr>
      <td>Merge Conflict</td>
      <td>Occurs when Git is unable to automatically merge changes from different branches, and manual intervention is required to resolve conflicting changes.</td>
    </tr>
    <tr>
      <td>Rebase</td>
      <td>The process of moving or combining a sequence of commits to a new base commit, often used to maintain a linear commit history.</td>
    </tr>
    <tr>
      <td>Pull Request</td>
      <td>A request to merge changes from one branch (usually a feature branch) into another (often the main branch) on a repository hosted on platforms like GitHub.</td>
    </tr>
    <tr>
      <td>Repository</td>
      <td>A storage location for a Git project that contains all the files, commits, branches, and history related to the project.</td>
    </tr>
    <tr>
      <td>Clone</td>
      <td>The process of creating a copy of a remote repository on your local machine to work on.</td>
    </tr>
    <tr>
      <td>Commit</td>
      <td>A snapshot of changes made to the codebase, along with a commit message explaining the changes.</td>
    </tr>
    <tr>
      <td>Push</td>
      <td>The action of sending your committed changes to a remote repository, making them accessible to others.</td>
    </tr>
    <tr>
      <td>Pull</td>
      <td>The action of fetching changes from a remote repository and merging them into the current local branch.</td>
    </tr>
    <tr>
      <td>Fork</td>
      <td>To create a personal copy of a repository hosted on a platform like GitHub, allowing you to work on changes without affecting the original repository.</td>
    </tr>
    <tr>
      <td>Remote</td>
      <td>A named reference to a different repository, often used to keep track of repositories on remote servers.</td>
    </tr>
    <tr>
      <td>Base</td>
      <td>The reference point from which changes in a branch are calculated, often used in operations like merging and rebasing.</td>
    </tr>
    <tr>
      <td>Staging</td>
      <td>The intermediate area where changes are prepared to be committed, allowing you to select which changes to include in the next commit.</td>
    </tr>
          <td>Changes</td>
      <td>The modifications made to a file that are causing the conflict between the branches. These can include additions, deletions, and modifications.</td>
    </tr>
    <tr>
      <td>Current</td>
      <td>The state of the file in the current branch where the conflict is being resolved. This includes the changes made in the local branch.</td>
    </tr>
    <tr>
      <td>Incoming</td>
      <td>The state of the file in the branch that is being merged into the current branch. This includes the changes made in the remote or other branch.</td>
    </tr>
        <tr>
      <td>Git Head</td>
      <td>A pointer that represents the current snapshot or commit in the branch you're currently working on. It moves forward with each new commit.</td>
    </tr>
  </tbody>
</table>
</div>





