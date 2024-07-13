'use client';

import './style.scss';
import type { ApiCoding } from '@/global';
import { useCopyToClipboard } from 'react-use';
import Button from 'react-bootstrap/Button';
import { CodeBlock } from 'react-code-block';

export default function CodeBlocks({ data }: {data: ApiCoding[]}) {
  const [state, copyToClipboard] = useCopyToClipboard();
  const copyCode = (code: string) => {
    copyToClipboard(code);
  };
  return (
    <>
      {data.map(({ id, title, code }) => (
        <>
          <p>{title}</p>
          <div className="CodeBlockWrapper" key={id}>

            <CodeBlock code={code} language="js">
              <div className="relative">
                <CodeBlock.Code className="bg-black">
                  <div className="table-row">

                    <CodeBlock.LineContent className="table-cell">
                      <CodeBlock.Token />
                    </CodeBlock.LineContent>
                  </div>
                </CodeBlock.Code>

                <Button className="CodeBlockWrapperButton" onClick={() => copyCode(code)}>
                  {state.value ? 'Copied!' : 'Copy code'}
                </Button>
              </div>
            </CodeBlock>
          </div>
        </>
      ))}

    </>
  );
}
