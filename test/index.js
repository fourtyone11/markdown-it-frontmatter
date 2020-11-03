import fs from 'fs';
import path from 'path';
import test from 'ava';
import MarkdownIt from 'markdown-it';
import plugin from '../index.js';

const markdown = new MarkdownIt();

test('toml', t => {
  var md = markdown
    .use(plugin, { parser: 'toml' }, (res) => {
      t.deepEqual(res, {
        title: 'Title',
        date: '2020-10-11',
        list: ['hello','bye']
      });
    });
  const source = fs.readFileSync(path.resolve('./test/fixtures/toml.md'), 'utf-8');
  md.render(source);
});

test('yaml', t => {
  var md = markdown
    .use(plugin, null, (res) => {
      t.deepEqual(res, {
        title: 'Title',
        date: '2020-10-11',
        dict: {
          name: 'name',
          age: 'age'
        }
      });
    });
  const source = fs.readFileSync(path.resolve('./test/fixtures/yaml.md'), 'utf-8');
  md.render(source);
});
