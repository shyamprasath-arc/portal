# Deployment Guide

## Deploy to GitHub Pages

### Prerequisites
1. A GitHub account
2. This repository pushed to GitHub

### Step 1: Update Repository Settings

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Navigate to **Pages** in the left sidebar
4. Under "Build and deployment", select **Deploy from a branch**
5. Select **gh-pages** branch and **/ (root)** folder
6. Click **Save**

### Step 2: Deploy from Local Machine

```bash
# Install dependencies (if not already done)
npm install

# Deploy to GitHub Pages
npm run deploy
```

This will:
1. Build the production version
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub

### Step 3: Access Your Portfolio

After deployment, your portfolio will be available at:
```
https://yourusername.github.io/portfolio
```

Replace `yourusername` with your actual GitHub username.

### Step 4: Update Homepage URL (Important!)

Before deploying, update `package.json` with your correct GitHub username:

```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

Also update `vite.config.js` if needed:
```javascript
base: '/portfolio/',
```

## Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in the `public/` folder with your domain name:
   ```
   www.yourdomain.com
   ```

2. Configure DNS with your domain provider:
   - Add a CNAME record pointing `www` to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IP addresses

3. Update `vite.config.js` base URL:
   ```javascript
   base: '/',
   ```

4. Update `package.json` homepage:
   ```json
   {
     "homepage": "https://www.yourdomain.com"
   }
   ```

5. Enable custom domain in GitHub Pages settings

## Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for syntax errors in your code
- Ensure Node.js version is 18+

### 404 Errors After Deployment
- Wait a few minutes for GitHub Pages to propagate changes
- Verify the `base` path in `vite.config.js` matches your repository name
- Check that the `gh-pages` branch is selected in repository settings

### Theme Not Persisting
- Check browser console for errors
- Verify localStorage is enabled in your browser
- Clear browser cache and reload

## Automated Deployment (GitHub Actions)

You can also set up GitHub Actions for automatic deployment on every push:

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. Push this file to your repository
3. GitHub will automatically deploy on every push to main
