# IT Solutions Frontend

A modern IT solutions website built with React, Material UI, and Tailwind CSS.

## Features

- Modern UI with Material UI components
- Responsive design for all screen sizes
- Dark mode support
- Tailwind CSS for styling

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Deployment to Render

This project is configured for easy deployment to Render.

### Automatic Deployment

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Select "Static Site" as the environment
4. Use the following build command:
   ```
   npm install && npm install @tailwindcss/postcss@4.0.12 --save-dev && npm run build
   ```
5. Set the publish directory to `./dist`
6. Add the following environment variable:
   - `NODE_VERSION`: `18.x`

### Manual Deployment

You can also use the included `install-deps.sh` script:

```bash
# Make the script executable
chmod +x install-deps.sh

# Run the script
./install-deps.sh
```

## Important Notes

- This project uses `@tailwindcss/postcss` instead of `tailwindcss` directly as a PostCSS plugin
- The PostCSS configuration has been updated to use the new package
- Make sure to include the `@tailwindcss/postcss` package in your dependencies
