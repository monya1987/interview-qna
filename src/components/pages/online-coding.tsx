'use client';

import { CodeBlock } from 'react-code-block';
import { useCopyToClipboard } from 'react-use';

const CODE = `
const welcomeMessage = "Hello,";
let target = "world!";

function greet(target) {
  console.log(welcomeMessage + " " + target);
}

greet(target);

for (let i = 0; i < 5; i++) {
  console.log(\`Count:\`);
}`;

function CodeBlockDemo() {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    // Logic to copy `code`
    copyToClipboard(CODE);
  };

  return (
    <>
      <h1>Задачи с онлайн собеседований</h1>
      <CodeBlock code={CODE} language="js">
        <div className="relative">
          <CodeBlock.Code className="bg-black">
            <div className="table-row">

              <CodeBlock.LineContent className="table-cell">
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          </CodeBlock.Code>

          <button

            onClick={copyCode}
          >
            {state.value ? 'Copied!' : 'Copy code'}
          </button>
        </div>
      </CodeBlock>
    </>
  );
}

export default CodeBlockDemo;
