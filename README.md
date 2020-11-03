# markdown-it-frontmatter

## Install

```sh
npm i @asleeppiano/markdown-it-frontmatter
```

## Usage

```js
import markdownIt from 'markdown-it'
import frontmatter from '@asleeppiano/markdown-it-frontmatter'

const md = markdown
  .use(frontmatter, null, (res) => {
    console.log(res) // { title: 'Title' }
  });
  md.render('---\ntitle: Title\n---\n# H1');

// The second parameter is for options
// {parser: 'toml'} or {parser: 'yaml'} - default
const md2 = markdown
  .use(frontmatter, {parser: 'toml'}, (res) => {
    console.log(res) // { title: 'Title' }
  });
  md.render('---\ntitle = Title\n---\n# H1');
```

## Credits

1. [ParkSB/markdown-it-front-matter](https://github.com/ParkSB/markdown-it-front-matter)
2. [js-yaml](https://github.com/nodeca/js-yaml)
3. [iarna-toml](https://github.com/iarna/iarna-toml)



