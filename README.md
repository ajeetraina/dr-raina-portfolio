# Dr. Rangeel Singh Raina - Professional Portfolio

This is a Jekyll-based professional portfolio website for Dr. Rangeel Singh Raina, Professor at Government Medical College, Haridwar.

## Table of Contents

- [Setup](#setup)
- [Development](#development)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

## Setup

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Installation

1. Install Jekyll and Bundler:
   ```
   gem install jekyll bundler
   ```

2. Clone this repository:
   ```
   git clone https://github.com/yourusername/dr-raina-portfolio.git
   cd dr-raina-portfolio
   ```

3. Install dependencies:
   ```
   bundle install
   ```

## Development

To start the development server:

```
bundle exec jekyll serve
```

This will start a local server at `http://localhost:4000`.

## Customization

### Site Configuration

Edit `_config.yml` to customize site-wide settings:

- Site title, description, and contact information
- Social media profiles
- Build settings and plugins

### Required Images

Before deploying, please add the following images:

1. **Profile Image**: Place Dr. Rangeel Singh Raina's profile image at `assets/images/profile.jpg`
2. **Hero Background**: Add a background image for the hero section at `assets/images/hero-bg.jpg`
3. **Teaching Section Image**: The image of Dr. Raina with students is located at `assets/images/rangeelsingh.jpeg`

### Content

- **Home Page**: Edit `index.md` and the layout in `_layouts/home.html`
- **Publications**: Add/edit files in the `_publications` directory
- **CV**: Update content in `cv.md`
- **Additional Images**: Add any other images to `assets/images/`

### Styling

- Main styling is in `assets/css/main.css`
- Layout templates are in the `_layouts` directory
- Reusable components are in the `_includes` directory

## Deployment to GitHub Pages

1. Create a new GitHub repository named `yourusername.github.io` (replace `yourusername` with your actual GitHub username)

2. Update your _config.yml file:
   ```yaml
   baseurl: "" # If this is your main GitHub Pages site
   url: "https://yourusername.github.io"
   ```

3. Initialize Git repository and push to GitHub:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

4. In your GitHub repository, go to Settings > Pages:
   - Set Source to "Deploy from a branch"
   - Select the "main" branch and "/ (root)" folder
   - Click Save

5. Your site should be available at `https://yourusername.github.io` within a few minutes

### Using a Custom Domain (Optional)

1. Purchase a domain from a domain registrar
2. In your GitHub repository, go to Settings > Pages:
   - Enter your domain in the "Custom domain" field
   - Click Save
3. Update your DNS records with your domain registrar:
   - Add an A record pointing to GitHub Pages IP addresses
   - Or add a CNAME record pointing to `yourusername.github.io`
4. Update your _config.yml:
   ```yaml
   url: "https://yourdomain.com"
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
# dr-raina-portfolio
