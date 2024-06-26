// src/components/MathRenderer.tsx
import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface MathRendererProps {
  children: React.ReactNode;
}

const MathRenderer: React.FC<MathRendererProps> = ({ children }) => {
  const parseMathInText = (text: string) => {
    const regex = /(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const equation = part.slice(2, -2);
        return <BlockMath key={index} math={equation} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const equation = part.slice(1, -1);
        return <InlineMath key={index} math={equation} />;
      } else {
        return <React.Fragment key={index}>{part}</React.Fragment>;
      }
    });
  };

  const recursivelyParseChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (typeof child === 'string') {
        return parseMathInText(child);
      }

      if (React.isValidElement(child) && child.props.children) {
        const newChildren = recursivelyParseChildren(child.props.children);
        return React.cloneElement(child, {
          ...child.props,
          children: newChildren,
        });
      }

      return child;
    });
  };

  return <div>{recursivelyParseChildren(children)}</div>;
};

export default MathRenderer;
