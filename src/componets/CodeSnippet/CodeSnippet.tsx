import { FC } from 'react';
import {CodeBlock, dracula, ocean} from 'react-code-blocks';

interface CodeSnippetProps {
    code: string
}

const CodeSnippet: FC<CodeSnippetProps> = ({code}) => {
    return (
        <div className="code-snippet">
            <div className="code-snippet__container">
                <CodeBlock
                    text={code}
                    language="javascript"
                    showLineNumbers={true}
                    theme={dracula}
                    customStyle={{
                        overflowY: 'scroll',
                        borderRadius: '5px',
                        margin: '0px 0.75rem',
                        background: ''
                    }}
                />
            </div>
        </div>
    );
};

export default CodeSnippet;
