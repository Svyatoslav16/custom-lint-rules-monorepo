import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
  // TODO: ссылка на доку в Wiki
  (name) => `
	${name}`
);

export default createRule({
  name: "name-interface-const-component",
  meta: {
    type: "suggestion",
    docs: {
      description: "Описание правила",
      recommended: "warn",
    },
    fixable: "code",
    messages: {
      moreThanOneType:
        "tsx files cannot have more than one type, transfer them to type files",
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      Program(node) {
        const filename = context.getFilename();

        const cwd = context.getCwd?.();

        const relativeFilePath = filename.replace(cwd || "", "");

        if (!/.tsx$/.test(relativeFilePath)) return;

        const arrInterface = node.body.filter(
          // @ts-ignore
          (el) => el.declaration?.type === "TSInterfaceDeclaration"
        );

        if (arrInterface.length > 1) {
          context.report({
            node,
            messageId: "moreThanOneType",
          });
        }
      },
    };
  },
});
