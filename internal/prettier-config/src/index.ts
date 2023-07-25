export default {
  printWidth: 130,
  semi: true, //在语句末尾打印分号。
  singleQuote: true, //使用单引号代替双引号。
  tabWidth: 2, //指定每个缩进级别的空格数。
  useTabs: false, //制表符将用于缩进。
  quoteProps: "as-needed", //"<as-needed|consistent|preserve>"引用对象中的属性时更改。
  trailingComma: "all", //"<es5|none|all>"在多行逗号分隔的句法结构中尽可能打印尾随逗号。
  bracketSpacing: true, //在对象文字中的括号之间打印空格。
    bracketSameLine: true, //将>多行 HTML（HTML、JSX、Vue、Angular）元素的 放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）。
  arrowParens: "avoid", //"<always|avoid>"在唯一的箭头函数参数周围包含括号。
  htmlWhitespaceSensitivity: "strict", //"<css|strict|ignore>"为 HTML、Vue、Angular 和 Handlebars 指定全局空白敏感度。
  vueIndentScriptAndStyle: true, //是否缩进Vue文件中的代码<script>和<style>标签。
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  requirePragma: false, //设置为true prettier自动格式化失效，必须在要格式化的文件头部添加vue:<!--  @prettier 、js:/***@prettier */等
  // eslint-disable-next-line
  insertPragma: false,
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
  ],
};
