# splash

> auto-generated splash pages for our top-level domains



## Setup

```sh
npm i
```

Then, make edits to the scripts inside `script` and `template.hbs` to match your branding, desired appearance.



## Assumptions

- You have a CSV named `catalogue` in the root of this project.
  - `catalogue.csv` has the headers: `emoji`, `punycode`, and `unicode`
  - If this CSV does not exist, you should have a JSON file named `catalogue` in the root of this project.
    - JSON file has the object parameters: `emoji`, `punycode`, and `unicode`



## Scripts

```sh
# Converts a CSV file into a JSON file
npm run convert

# Creates webpages for every TLD in catalogue.json
npm run build
```



🤝
