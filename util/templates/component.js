module.exports = (componentName) => ({
  content: `import React from "react";
import { ${componentName}Props } from "./${componentName}.types";
import "./${componentName}.scss";

const ${componentName}: React.FC<${componentName}Props> = ({  }) => (
   <></>
);

export default ${componentName};
`,
  extension: `.tsx`
});
