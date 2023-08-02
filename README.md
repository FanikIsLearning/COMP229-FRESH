# COMP229-FRESH

### Frontend

https://main--grocery-fresh.netlify.app

### Frontend repository

https://github.com/FanikIsLearning/COMP229-Frontend

### Backend

https://fresh-server.onrender.com

### Backend repository

https://github.com/FanikIsLearning/COMP229-Backend

## App Structure

```console
FRESH
├── frontend
│ └── src
│      └── app
│      └── assets
│          └── img
│ └── package.json
│ └── README.md
│ └── .gitignore
├── backend
│ └── app
│      └── config
│      └── controllers
│      └── middlewares
│      └── models
│      └── routes
│ └── package.json
│ └── server.js
│ └── node_modules
│ └── .gitignore
└── README.md

```

# Git Tutorial

Creating a new branch for your work:

1. Create a new branch with your preferred name:

```console
git branch <branch_name>
```

2. Switch to your newly created branch:

```console
git checkout <branch_name>
```

Develop your features or make changes in this branch.

3. When you're ready to share your work, push your changes to the new branch on the remote repository:

```console
git push --set-upstream origin <branch_name>
```

---

# Alert! Do not do this alone!

After your code has been verified by one or two team members, you can merge your branch into the main branch. Here's an example using the 'README' branch:

1. Switch to the 'main' branch:

```console
git checkout main
```

2. Pull the latest changes from 'main' on the remote repository:

```console
git pull origin main
```

3. Merge the 'README' branch into 'main':

```console
git merge README
```

4. Push the updated 'main' branch to the remote repository:

```console
git push origin main
```

---
